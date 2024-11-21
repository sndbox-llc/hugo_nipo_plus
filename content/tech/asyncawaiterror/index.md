+++
url = "/tech/asyncawaiterror/"
description = "Javascriptの非同期処理（Async/Await)をよく理解していなかったために起きたとある開発者の奮闘について綴りました"
# tags = []
title = "async関数を呼び出したときに呼び出し先でエラーが発生しても処理が止まらない時"
toc = true
images = []
date = "2022-11-14"
code = true
[sitemap]
  changefreq = "yearly"
  priority = 0.5
+++

## async/awaitの見落としがちな落とし穴。try/catchしても呼び出し元でcatch出来ません{#tryAndCatch}

async/awaitはJavascriptにおける非同期処理のthenという構文をよりわかりやすく記述できる素晴らしい書き方です。
とても便利なので多くのジャバスクリプターの方々は利用されていることと思います。

{{<alice pos="right" icon="guide">}}
[Qiitaの記事](https://qiita.com/_takeshi_24/items/1403727efb3fd86f0bcd)はAsync/Awaitについてよくまとまっています
{{</alice>}}

さて、そんな便利なasync / awaitですが、正しい使い方を知っていないと思わぬトラブルが起きることもあります。
実際に私がNipoやMaroudを開発している際に、正しい知識を持たずに使ってしまい、意図しない動きをしてしまったケースをご紹介します。
以下のコードは意図しない動きをします

```javascript
async function func1 () {
  console.log('これはfunc1だよ');
  try {
    const result = await sub();// ＜ーこの非同期関数がエラーを起こすシナリオ
    console.log('subから非同期でデータをとって、resultに格納したよ', result);// ＜ー実行されたらまずいやつ
  } catch (e) {
    console.error('func1でエラーだよ', e);
  }
}
async function sub () {
  console.log('subです');
  try {
    const res:string = await dosome(); // ここで必ずエラーが発生します。dosome関数は存在しないため
    return res;
  } catch (e) {
    console.error('subでエラーだよ', e);
  }
}
```

1. 画面にあるボタンをクリックすると、func1関数が実行されます(心の目で見るのです)
1. func1の中でsub関数を呼び出します。sub関数は非同期処理をします
1. sub関数のtry内でエラーが発生します
1. sub関数のcatchに処理が移ります
1. sub関数の処理が終わり、func1へ戻ります
1. func1関数はsub関数のエラーを知覚せずに処理を実行します

{{<alice pos="right" icon="guide">}}
func1:「止まるんじゃねぇぞ。俺は止まらねぇからよ」と。
{{</alice>}}

実際に実行したコンソールログはこんな感じになります

{{<figure src="console-log-screen.png"  alt="async・awaitでエラー時に処理が止まらない" caption="async・awaitでエラー時に処理が止まらない" >}}


## なぜfunc1はエラー発生時に止まらないのか？ try・catchを利用しても止まらない理由{#asyncAwaitTrap}

async・awaitは便利ですが特に**エラー発生時の対応に注意が必要**です。async・awaitでエラーが発生しても止まらない原因としてネットで検索すると

```javascript
const res = hidouki().catch(e => { console.log(e); } )
```

のような書き方をすると止まらない記事が結構沢山見受けられました。この書き方を私はしないのでよくわかりませんが、これだと呼び出し先(ここではhidouki関数)でエラーが発生してもキャッチされないとかなんとか。
しかしここでは例文の通り try ・ catchを利用しています。sub関数内のエラーでは正しくcatchされますが**async関数の呼び出し元であるfunc1ではキャッチ出来ません**。
理由は単純で、sub関数がエラーを返していないからです。func1でもエラーをキャッチしたい場合や、func1で処理を止めたい場合は次のような1行を付け足すことで解決します

```javascript
async function func1 () {
  console.log('これはfunc1だよ');
  try {
    const result = await sub(); // ＜ーこの非同期関数がエラーを起こすシナリオ
    console.log('subから非同期でデータをとって、resultに格納したよ', result); // ＜ー実行されたらまずいやつ
  } catch (e) {
    console.error('func1でエラーだよ', e);
  }
}
async function sub () {
  console.log('subです');
  try {
    const res = await dosome(); // ここで必ずエラーが発生します。dosome関数は存在しないため
    return res;
  } catch (e) {
    console.error('subでエラーだよ', e);
    throw e; // &#x25c0;この1行を付け足すだけですっ
  }
}
```

この処理の結果コンソールはこのようになります

{{<figure src="error-chatch.png"  alt="async関数の呼び出し元で正しくエラーをキャッチできた" caption="async関数の呼び出し元で正しくエラーをキャッチできた" >}}


## そもそもawaitの結果はresolveかrejectと考えれば止まらないのも道理{#asyncAwaitResolveReject}

非同期関数の呼び出し元が止まらないのは、sub関数の中でrejectされていないことが原因です。
awaitで呼び出した関数はresolveかrejectを返すのですが、sub関数のcatch文の中で何もreturnせず、その後の処理でも結局何も返していないため、resolveと認識されてfunc1は止まらなかったのです。

{{<alice pos="right" icon="guide">}}
もともとpromise知ってる人は良いけど、今からJSを勉強する人はこの辺混乱しそうだねー
{{</alice>}}

だから明確に、sub関数の中でエラーが発生したことを呼び出し元に伝えるために、エラーを再送する必要があります。エラーの再送が　「 throw e 」なわけです。
throwをするときは Newするべき！という記事もありますがこれは

```javascript
throw 'なんかやばいことが起きた';
```

のように文字だけの場合はだめってことです。throw new Error(e)として更に包んでしまうとErrorオブジェクトのなかにErrorオブジェクトという、過剰包装状態になるので注意です。

{{<figure src="over-lap-error.png"  alt="errorオブジェクトをnewErrorで包むと扱いにくくなる" caption="errorオブジェクトをnewErrorで包むと扱いにくくなる" >}}


## throw したあとでもfinallyは実行されます{#finally_executes_even_after_throw}

throwを文中に使うとそこで処理が終わり呼び出し元へ処理が戻ります。そこで疑問になるのがfinally句がどうなるのかですが、心配ご無用。ちゃんとfinallyは実行されます

```javascript
async function func1 () {
  console.log('これはfunc1だよ');
  try {
    const result = await sub(); // ＜ーこの非同期関数がエラーを起こすシナリオ
    console.log('subから非同期でデータをとって、resultに格納したよ', result); // ＜ー実行されたらまずいやつ
  } catch (e) {
    console.error('func1でエラーだよ', e);
  }
}
async function sub () {
  console.log('subです');
  try {
    const res = await dosome(); // ここで必ずエラーが発生します。dosome関数は存在しないため
    return res;
  } catch (e) {
    console.error('subでエラーだよ', e);
    throw e; // throwされる
  } finally {
    console.log('このファイナリーは実行されるかな？？？'); // ちゃんと実行される
  }
}
```

{{<figure src="console-log-finally.png"  alt="finally句が正常に実行されていることが確認できる" caption="finally句が正常に実行されていることが確認できる" >}}


いかがでしたか？私は最初、async関数の中でエラーが発生した時にエラーメッセージをユーザに通知するだけの処理を書いただけで、throwしなかったため、呼び出し先では「正常終了」の通知がユーザに表示されるというプログラムを書いたことがあります。
ユーザから見れば「エラー!失敗です」の直後に「正常終了しました」と相反するメッセージが表示されるため、混乱させてしまったと反省しています。
async・awaitは便利ですが、async関数の中でasync関数を呼び出すといったときは、こういう問題にも気をつけなければなりません。

{{<alice pos="right" icon="guide">}}
Javascriptと非同期は切っても切れない関係なので試行錯誤の連続です
{{</alice>}}
