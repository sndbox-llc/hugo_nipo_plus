+++
description = "日報に写真や画像を入力できるパーツを追加します。対応形式はJpeg/Pngです。添付した画像は圧縮の上で保存されます"
title = "写真"
toc = true
weight = 109002008
isNipo = true
tags = ["旧バージョン"]
aliases = []
[sitemap]
  changefreq = "yearly"
  priority = 0.2
+++

{{<btnCenter "/docs/manual/initial-setting/template/binarys/#picture" "新バージョンでも使えます">}}

## 写真画像の入力画面{#display}

タブレットやスマートフォンで撮影した画像を添付したり、PCに保存されている画像データを添付したりできます。対応ファイルはJpeg・Pngになります。  
画像をNipoのサーバにアップする前に、画像の圧縮処理が行われ通信量を削減しています。圧縮されると、画像の容量はおおよそ１００KB程度になります。  
写真データはCSV出力されません。（PDF出力時は写真が出力可能です）  

{{<imgproc parts_pic1.png "日報に画像を添付する画面イメージ" />}}

## 写真画像を含んだ日報の各種出力画面{#output}

[PDFに出力](/legacy/manual/pdf/)すると次のように表示されます。

{{<imgproc parts_pic2.webp "写真画像を含む日報をPDFに変換した出力結果" />}}

CSVに出力すると対応外とのエラーが表示されます

{{<imgproc parts_pic3.png "写真画像を含む日報をCSVに出力し、Excelで開いた画面" />}}

{{<alice pos="left" icon="default">}}
写真やイラストなどのデータは残念ですがCSVに出力できません
{{</alice>}}

Nipoの受信・送信BOXからは次のように表示されます

{{<imgproc parts_pic4.png "クラウド日報Nipoのアプリ上から写真画像を含むレポートを表示した画面" />}}

## 設定画面{#setting}

テンプレートの編集画面では次のような設定画面となっております。

{{<imgproc parts_pic5.png "写真画像の初期設定画面" />}}


<dl class="basic">
  <dt>タイトル</dt>
  <dd>タイトルを編集できます。改行も扱えます</dd>
  <dt>説明文</dt>
  <dd>日報作成者が何を書くべきか迷わないようにするために説明を付すことができます。</dd>
</dl>
