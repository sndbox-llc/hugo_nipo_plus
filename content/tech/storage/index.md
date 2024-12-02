+++
url = "/tech/storage/"
title = "Firebase StorageでNoSuchKeyのエラーが発生する原因と対策"
description = "Cloud Storageからファイルのダウンロードを行うときに発生したエラーの原因と対策。意外と調べても出てこないお粗末なエラーでした"
toc = true
date = "2022-11-14"
# tags = ["firebase"]
+++

Cloud FunctionsからPDFやZipなどのファイルを作成し、ダウンロードURLをフロントに返却するといった処理を実装したときに、次のようなエラーを受けました。
ダウンロードURLをフロントで開くとNoSuchKeyのエラーが表示されてファイルのダウンロードができません。

```xml
This XML file does not appear to have any style information associated with it. The document tree is shown below.
<Error>
  <Code>NoSuchKey</Code>
  <Message>The specified key does not exist.</Message>
  <Details>No Such Object: xxxxxxxxxxxxxxx.zip</Details>
</Error>
```

上記のエラーをうけても、そのままページをリロードすると今度はダウンロードすることができます。つまりダウンロードURLをクリックした時点ではまだダウンロードする対象のファイルがStorageに保存されていないために発生するわけです。
リロードでダウンロードが出来るようになるのは、少しの時間で正しくダウンロードするファイルがStorageに書き込まれ、ダウンロードできるようになったためエラーが発生しないわけです。

参考までにエラーの発生するコードを大幅に簡略化して掲載します

```javascript
import * as functions from 'firebase-functions';
import { getStorage } from 'firebase-admin/storage';
import { TDocumentDefinitions } from 'pdfmake/interfaces';
import PdfPrinter from 'pdfmake';
import dayjs from 'dayjs';
import ja from 'dayjs/locale/ja';
import timezone from 'dayjs/plugin/timezone';
import utc from 'dayjs/plugin/utc';
dayjs.locale(ja);
dayjs.extend(utc);
dayjs.extend(timezone);
// Cloud Functionのサーバ時間はGMT+9の日本とずれているのでここで日本の時間にあわせてもらう
dayjs.tz.setDefault('Asia/Tokyo');

export default functions.https.onCall(async(data: CFPdfReqParam, context):Promise<onCallResIf> => {
  const docDefinition: TDocumentDefinitions = {
    pageSize: 'A4',
    pageMargins: [0, 0, 0, 0],
    content: ['PDF本体をつくりあげるよ！'],
    pageOrientation: 'landscape'
  }
  const storage = getStorage();
  const printer = new PdfPrinter(fonts);
  const pdfDoc = printer.createPdfKitDocument(docDefinition);
  const myPDFfile = storage.bucket().file('sample.pdf');
  // ここでStorageに書き込み
  pdfDoc.pipe(myPDFfile.createWriteStream());
  pdfDoc.end();
  // Storageに書き込みが完了していないうちにgetSignedUrlを実行している
  const url = await myPDFfile.getSignedUrl({ expires: dayjs().tz().add(2, 'hour').valueOf(), action: 'read' });
  // フロントにダウンロード用のURLを返却する
  return  { code: 'ダウンロード用URL', msg: url[0], result: true};
})

```

{{< callout context="note" title="Note" icon="outline/info-circle" >}}
上記コードは未検証です。確かこんな感じだったという記憶を頼りに記述してます
{{< /callout >}}

## Storageの書き込みが完了するまで処理を待つように処理を止める方法がわからず混乱{#confusion_about_waiting}

上記コードの問題は色々あるけど何よりも問題となるのが

```javascript
pdfDoc.pipe(myPDFFile.createWriteStream())
```

上記の処理が完了する前に次の行へ処理が流れていってしまうことです。いわゆる非同期処理というやつですね。Nodejsにとって非同期処理はイデオムといえます。
大抵は**async / await**を使えば問題は解決しますが、nodeJSに不慣れな私にとってpdfDoc.pipe()の完了をどのように受け取るかやり方が分かっていませんでした。
例えばこんな感じで記述ができれば世話ない話なんですけどね。

```javascript
// 処理の完了を待つためにawaitを使いたいが、ここでawaitは機能しません
await pdfDoc.pipe(myPDFFile.createWriteStream())
```

ただ当然ながらこの記述はうまく機能しません。VSCode上でも警告が発せられるので割と早い段階で気づくことができますが、つまりawaitを使わずにpdfDoc.pipeの完了まで待つ処理を記述する必要があります。

{{<figure src="await.png"  alt="awaitはこの式に対しては効果が有りません。Tsのエラーメッセージは開発における重要なヒントです" caption="awaitはこの式に対しては効果が有りません。Tsのエラーメッセージは開発における重要なヒントです" >}}

結局のところはPromiseとStreamを混同していたことが原因です。PromiseもStreamも非同期処理で似たようなものだと思いがちですが、当然ながら全くの別ものです。

{{< callout context="note" title="Note" icon="outline/info-circle" >}}
筆者の環境ではStreamをほぼ使わないため馴染みがなかったのも要因です
{{< /callout >}}

## Streamの書き込みが完了するまで待ってからダウンロードURLをフロントに返却するようにプログラムを修正する{#fixedPendingMethod}

pdfDoc.pipeは結局の所Internal.WriteStreamなのでこのStreamが完了するまで処理を止めればよいわけです。cloud Functionsはreturnで関数自体が終了してしまうので、Streamの書き込みが終わるまではreturnを実行してはいけません。
処理を止めるにはPromiseを使えば簡単です。やり方はいくつかあると思います。

```javascript
export default functions.https.onCall(async(data: CFPdfReqParam, context):Promise<onCallResIf> => {
  const docDefinition: TDocumentDefinitions = {
    pageSize: 'A4',
    pageMargins: [0, 0, 0, 0],
    content: ['PDF本体をつくりあげるよ！'],
    pageOrientation: 'landscape'
  };
  const storage = getStorage();
  const myPDFfile = storage.bucket().file('sample.pdf');
  // 実際日本語の変数名は使いませんがここではよりインパクトのある名称として日本語をあえて使用しました
  const 止まれ = (): Promise<string>  => {
    return new Promise((resolve,reject) => {
      const printer = new PdfPrinter(fonts)
      const pdfDoc = printer.createPdfKitDocument(docDefinition)
      const writeStream = pdfDoc.pipe(myPDFfile.createWriteStream())
      pdfDoc.end()
      writeStream.on('finish', () => {
        // writeStreamの完了で発火する処理。ここで初めてresovleする
        resolve('やっとおわったよ')
      })
      writeStream.on('error', () => {
        reject('なにかエラーがおきたかも？')
      })
    });
  }
  // 処理まるごとPromiseでくくったのでAwaitで止めることができるようになった
  await 止まれ();
  const url = await myPDFfile.getSignedUrl({ expires: dayjs().tz().add(2, 'hour').valueOf(), action: 'read' });
  return  { code: 'ダウンロード用URL', msg: url[0], result: true};
})
```

pdfDoc.pipeの処理周りをごっそりpromiseでくくってしまい、streamの'finish'を検知してresolveしてあげるように処理を修正しました。
これでstreamの書き込みが終わるまで次の処理へ進むことなく止まってくれます。
なお余談ですが以下のような書き方も可能です

```javascript
// （止まれ）の中の一部抜粋
pdfDoc
  .pipe(myPDFfile.createWriteStream())

  .on('finish', function () {
    resolve('やっとおわったよ')
  })
  .on('error', function (err) {
    reject('なにかエラーがおきたかも？')
  })
pdfDoc.end()
```

```javascript
await 止まれ()
```

のおかげでStreamの書き込みが完了後に、ダウンロードURLの取得処理が走るようになりました。よって本ページトップで書いたようなnoSuchKeyエラーは発生しなくなります。

## SigningErrorが発生する場合{#signing_error_occurs}

上記コードを書いて実行すると、Cloud Functionsのログに

```bash {frame="none"}
The caller does not have permission
```

と出力されることがあります。これはgetSignedUrl()関数の実行権限が足りていないために起こります。権限を追加するにはFirebaseの外側にあるGCPからIAMを編集する必要があります。
まずはGCPを開き、IAMのページを開きます。IAMページではたくさんのアカウントが並んでいます。ここから**プロジェクト名@appspot.gserviceaccount.comのアカウント**を見つけ出してください。

見つけたらそのアカウントの鉛筆ボタンをクリックし、ロールを2つ追加します

- Cloud Datastore インポート / エクスポート管理者
- サービス アカウント トークン作成者

最終的には次のような形になればOKです

{{<figure src="iam.png"  alt="IAMからロールを2つ追加して最終的なかたちはこの画面のようになっているはずです。" caption="IAMからロールを2つ追加して最終的なかたちはこの画面のようになっているはずです。" >}}

IAMの設定が完了したら再び生成を試みてください。筆者の環境ではこれで問題なく動作することが確認できました。
この情報は[StackOverFlow](https://stackoverflow.com/questions/53305784/signingerror-with-firebase-getsignedurl)に記載されていました。大変助かりました。
