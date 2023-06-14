+++
description = "PDFを生成するPDFMake、結構便利ですが単位のが少しわかりにくいので注意です。US_PTが使われています"
tags = []
title = "pdfMakeのページサイズの指定はmm(ミリ)では無い"
toc = true
weight = 105000008
contributors = []
excerpt = "PDFMake"
images = []
date = "2022-11-14"
lastmod = "2022-11-14"
pinned = false
homepage = false
+++

[pdfMake](https://github.com/bpampuch/pdfmake)はフロント側でPDFが簡単に作れるJavaScriptです。
クライアントのPCでPDFが作れるのでサーバいらず。
日本語フォントだけ別途用意する必要があるので少し面倒ですが、それ以外の操作は簡単です。
GitHub上でも5000スターを超えており、人気の様子がうかがえます。

## pdfMakeの単位はmm（ミリ）じゃないよ

A4のように、メジャーなサイズはあらかじめ用意されているため、

```typescript
let pageSize = 'a4'
let docDefinition = {
  pageSize:pageSize,
  pageMargins:[0,0,0,0],
  content:content
}
```

のように簡単に指定できます。
しかしちょっと変わったサイズ、特に日本独自のサイズを指定するとおかしなサイズになります。
例えばハガキは100*148mm なので、

```typescript
let pageSize = {
  width:100,
  height:148
}
```

とやると残念な結果になります。

### 1pt = 0.35278mm

pdfMakeで使われている単位はなんと「us pt」というもので、これは1pt = 0.35278mmになります。
なかなかわかりにくい落とし穴です。

よって pdfMakeでハガキサイズを指定するには

```typescript
// ハガキサイズの指定 100 * 148mm
let hagakiSize = {
  width:283.46,
  height:419.52
};
//　おまけ　長３封筒 120*235mm 
let naga3Size = {
  width:340.16,
  height:666.14
};

// さらにおまけ　長４封筒　90*205mm
let naga4Size = {
  width:255.12,
  height:581.10
};
```

となります。
まぁざっくり3倍くらいになるわけです。

###　SPAでPDFが作れるのは便利だが注意点も

ブラウザ上単体でPDFの生成ができるので非常に便利。そのためSPAやPWAと相性の良いライブラリです。
クラウド日報Nipoでは実際に利用させていただいております。日報をPDFに変換するときにPdfMakeが裏方で仕事をしてくれています。

CSSで作成するのには正直限界があるので、素直にPDFMakeのようなライブラリを使うほうが現実的ですね。

ただ一方でPDFMakeは**ファイルサイズが重い**という重大な弱点があります。
日本語をPDFに含める場合は別途日本語フォントを用意する必要もあるため、これらを含めてアプリに取り込むと余裕で3MB〜5MBはアプリが肥大化します。

Nipoではこの問題を回避するためにフォントはIndexedDBに保管し、アプリ更新があっても何度もダウンロードしなくて済むような細工をしています。
それをしてもPDFMake自体が2MB近いので、ここはネックですね。
アプリサイズが大きいと読み込みに時間がかかる上、PWAなどではアプリ更新に失敗するリスクも増えます。
どうしてもアプリサイズを小さく抑えたい場合はPdfMakeをサーバサイドで実行するようにすると良いでしょう。NipoPlusではPDFMakeをサーバサイドで実行するように実装した結果、アプリサイズをNipoに比べてかなり小さく保つことが出来ました。

サーバサイド(Cloud Functions)で[PdfMakeを動かす記事についてはこちら](/tech/pdf/)を参照してください。

そうそう、フォントについては[g_えんぴつ楷書](https://zarasu.booth.pm/items/389721)とかおすすめです。
とてもかっこいいフォントで、お値段も2,000円とリーズナブルです。さらに商用利用可能です。

{{<alice pos="right" icon="here">}}
Nipoでは別のフォント使っていますが機会があればえんぴつ楷書も使ってみたいと思います
{{</alice>}}
