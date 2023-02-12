+++
description = ""
menuTitle = "PDFMake"
tags = []
title = "pdfMakeのページサイズの指定はmm(ミリ)では無い"
toc = true
weight = 10
+++

<a href="https://github.com/bpampuch/pdfmake" rel="noopener" target="_blank">pdfMake</a>はフロント側でPDFが簡単に作れるJavaScriptです。
クライアントのPCでPDFが作れるのでサーバいらず。
日本語フォントだけ別途用意する必要があるので少し面倒ですが、それ以外の操作は簡単です。
GitHub上でも5000スターを超えており、人気の様子がうかがえます。

<h2>pdfMakeの単位はmm（ミリ）じゃないよ</h2>
A4のように、メジャーなサイズはあらかじめ用意されているため、
[javascript]
let pageSize = 'a4'
let docDefinition = {
  pageSize:pageSize,
  pageMargins:[0,0,0,0],
  content:content
}
[/javascript]

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

<h3>1pt = 0.35278mm</h3>
pdfMakeで使われている単位はなんと「us pt」というもので、これは1pt = 0.35278mmになります。
なかなかわかりにくい落とし穴です。 

よって pdfMakeでハガキサイズを指定するには

```typescript
// ハガキサイズの指定 100 * 148mm
let hagakiSize = {
  width:283.46,
  height:419.52
}
//　おまけ　長３封筒 120*235mm 
let naga3Size = {
  width:340.16,
  height:666.14
}

// さらにおまけ　長４封筒　90*205mm
let naga4Size = {
  width:255.12,
  height:581.10
}
```

となります。
まぁざっくり3倍くらいになるわけです。

<h3>SPAでPDFが作れるのは便利</h3>
フロントでPDFが作れるので、SPAなんかと相性がいいです。
実際にReinというPWAに組み込んでみたところちゃんと動いてくれました。
CSSでの印刷もチャレンジしましたがやっぱりCSSは限界がありますね。ブラウザによってヘッダーやフッターの制御ができず、URLや日付が入ってしまうなど、実用的なレベルにはできませんでした。その点、PDFは崩れることもなく、きれいに印刷できるので良いです。
実際にPdf Makeで作って<a href="https://karte.sndbox.jp/letter-print" rel="noopener" target="_blank">印刷してみた結果は、Reinのページに紹介しています</a>。
<a href="https://sndbox.jp/wp-content/uploads/2018/03/naga4.pdf">実際のPDFファイルのサンプルはこちらからどうぞ</a>

使用した日本語フォントは<a href="https://zarasu.booth.pm/items/389721" rel="noopener" target="_blank">g_えんぴつ楷書（有料版）</a>を使わせてもらいました。
かっこいいフォントです。そしてたった2,000円で買えるので超リーズナブル。さらに商用利用可能です。
