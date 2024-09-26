+++
description = "CloudFunctionsでPDFをZipへ変換"
tags = []
title = "pdfMakeとarchiverを使い複数のPDFを1つのZipにまとめてStorageへUpする"
toc = true
images = []
date = "2022-11-14"
code = true
[sitemap]
  changefreq = "yearly"
  priority = 0.5
+++

NipoPlusには日報をPDFに変換する機能があります。PDFファイルを生成するにはいくつかのライブラリがありますが、今回は[pdfmake](http://pdfmake.org/)を使用しました。
pdfmakeはフロント（ブラウザ側）でもバックエンド（サーバ）でも利用できますが、それぞれで使い方が微妙に異なる点に注意が必要です。
NipoPlusではPDFの生成をサーバサイドで行うように設計しました。これはひとえにファイルサイズの問題があるためです。

{{<alice pos="right" icon="here">}}
pdfmake単体で2MB！加えて日本語フォント情報も別に持つ必要があり、subset化しても総重量は5MBを超えます
{{</alice>}}

## 1つのPDFファイルをNode.jsで作成する{#create_single_pdf_with_nodejs}

pdfmakeをサーバサイドで利用するには、次のようなコードで実行できます。

```javascript
// このコードはnode16で動作を確認しております
import { TDocumentDefinitions } from 'pdfmake/interfaces';
import PdfPrinter from 'pdfmake';
import fs from 'fs';

// pdfmakeのフォントは日本語が含まれないため日本語を含んだファイルを別途用意します
const fonts = {
  Roboto: {
    normal: 'path/to/フォントファイル.ttf'
  }
};

async function main () {
  const printer = new PdfPrinter(fonts);

  const docDefinition: TDocumentDefinitions = {
    pageSize: 'A4',
    pageMargins: [0,0,0,0],
    content: [ 'これは1つめのPDFファイルです'],
    pageOrientation: 'portrait',
    watermark: { text: 'water', color: 'blue', opacity: 0.3 }
  }
  // このあたりからサーバサイド独自の書き方に変わります
  const wStream = fs.createWriteStream('./somefile.pdf');
  const pdfDoc = printer.createPdfKitDocument(docDefinition);
  pdfDoc.pipe(wStream);
  pdfDoc.end();

  return;
}
main();
```

たったこれだけで、「これは1つめのPDFファイルです」と書かれたPDFファイルが生成できます。思ったより簡単ですね。
Typescriptなので環境の構築も必要になります。[構築はこちらの記事](https://qiita.com/notakaos/items/3bbd2293e2ff286d9f49)が参考になります。
日本語フォントについては有償、無償様々なものがありますので、お好みで用意してください。商用可で無償なフォントだと[IPAフォント](https://moji.or.jp/ipafont/license/)が有名ですね。
補足としてこのプロジェクトのpackage.jsonは以下の通りです。

```json
{
  "name": "nodejs",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "start": "ts-node --files -r tsconfig-paths/register",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {
    "@types/archiver": "5.3.1",
    "archiver": "5.3.1",
    "dayjs": "^1.11.4",
    "pdfmake": "0.2.5",
    "ts-node": "^10.9.1",
    "tsconfig-paths": "^4.1.0",
    "typescript": "^4.7.4"
  },
  "devDependencies": {
    "@types/node": "^18.6.5",
    "@types/pdfmake": "0.2.1"
  }
}
```

フロントばかりコーディングしているとstreamとかpipeといった概念がほとんどでてこないので、結構新鮮でした。
そしてこのstreamはとっつきにくく、これらのせいで丸一日時間を浪費することに・・・

## PDFファイルを生成せずに直接アーカイブする（複数ファイル）{#archive_multiple_files_without_generating_pdf}

nodejsでアーカイブを作成するために今回は[achiver](https://github.com/archiverjs/node-archiver)を使用しました。

```javascript
archive.append(data: string | Buffer | internal.Readable)
```

といった形でappendすることでZipファイルにまとめていきます。
achive.appendにpdfmakeで作成したpdfファイルを追加していくことで複数のPDFファイルを1つのZipにアーカイブできます。
pdfmakeでは pdfDoc.pipe(writeStream)と書くことでpdfファイルを出力できますが、一旦ファイルに書き出さなくてもpdfmakeから直接archiveに送ることができます。
pdfmakeは公式ガイドが少し不親切ですが、[githubのサンプルページ](https://github.com/bpampuch/pdfmake/blob/0.1/dev-playground/server.js)に記載が有りました。

Cloud Functionsとかを抜きにして、単純なnodejsで2つのpdfファイルを作成し、1つのZipにまとめるコードは次のとおりです

```javascript
import { TDocumentDefinitions } from 'pdfmake/interfaces';
import PdfPrinter from 'pdfmake';
import archiver from 'archiver';
import fs from 'fs';

const fonts = {
  Roboto: {
    normal: 'path/to/フォントファイル.ttf'
  }
};

async function main () {
  const printer = new PdfPrinter(fonts);
  const archive = archiver('zip', { zlib: { level: 9 } });
  // pdfの元となるdocDefinitions。pdfを2つ作るので配列にしています
  const docDefinitions: TDocumentDefinitions[] = [
    {
      pageSize: 'A4',
      pageMargins: [0,0,0,0],
      content: [ 'これは1つめのPDFファイルです'],
      pageOrientation: 'portrait',
      watermark: { text: 'water', color: 'blue', opacity: 0.3 }
    },
    {
      pageSize: 'A4',
      pageMargins: [0,0,0,0],
      content: ['これは2つめのPDFファイルです。横向きです'],
      pageOrientation: 'landscape'
    }
  ];
  // 書き込みストリームはarchiverにセットします
  const wStream = fs.createWriteStream('./output.zip');
  archive.pipe(wStream);
  // promise.allを使わないとcloud functionsでは処理が完了する前にリターン文が実行されて正しく処理されませんでした。
  await Promise.all(docDefinitions.map( async (docDefinition, index) => {
    return new Promise((resolve, reject) => {
      const pdfDoc = printer.createPdfKitDocument(docDefinition);
      let chunk = [] as Uint8Array[];
      pdfDoc.on('data', (node:Uint8Array) => {
        chunk.push(node);
      })
      pdfDoc.on('end', () => {
        // pdfの完成時に呼ばれる
        const result = Buffer.concat(chunk);
        // ここでpdfがBufferとして扱えるようになったので、achiveにappendできる
        archive.append(result, { name: `someFileName_${index}.pdf`});
        resolve('ok');
      })
      // 本来はエラー処理も入れるべきですがここでは省略しています
      pdfDoc.end();
    })
  }))
  archive.finalize();
  return
}
main();
```

上記プログラムを実行するとoutput.zipという圧縮ファイルが1つ作成されます。解答すると中には2つのpdfファイルが保存されています。
もしこれをFirebaseのCloud Functions上で実行させる場合は保存先がstorageになると思いますので、ファイルの書き出し先を次のように書き換えてあげればOKです

```javascript
// インポートの追加
import { getStorage } from 'firebase-admin/storage';

const storage = getStorage();
archive.pipe(storage.bucket().file('path/to/出力するファイル名.zip').createWriteStream());
```

## 非同期処理とCloud Functionsのライフサイクルに注意する{#functions_lifecycle}

returnのが実行されると、streamの処理が途中でも関数を終えてしまうことを正しく理解していなかったため、原因究明に思った以上の時間を浪費してしまいました。

```javascript
.on('end', () => { });
```

のような形で処理が終わることを検知できますが、それより先にreturnが走らないように注意する必要があります。
そのための解決として処理をまるごと関数に切り出してPromiseを返す関数として実行するのがシンプルで見やすいですね。
async / awaitや promiseは普段何気なく使用していますが、一度立ち止まって改めて学び直すことでより理解を深めたいと思います。

また今回、この機能の解決に思いの外時間を要したのはひとえにstreamの特性を正しく理解していなかったことにあります。
本当はもっと効率の良いやり方があるのだと思いますが、思いの外pdfmakeに関する情報が見当たりませんでした。
サーバサイドでPDFを作成する場合はpdfmakeではなくpdfKitのほうが人気がありそうですね。機会があれば今度pdfkitも触れてみたいと思います。

もしこの記事が私と同じような悩みを抱えている方のヒントに慣れば幸いです。
