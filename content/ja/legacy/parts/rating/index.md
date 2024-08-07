+++
description = "ネットショップなどでおなじみの星（★★☆☆☆）による入力ができる日報パーツです。直感的で入力がかんたんです"
title = "レート"
toc = true
weight = 109002004
isNipo = true
tags = ["旧バージョン"]
aliases = []
[sitemap]
  changefreq = "yearly"
  priority = 0.2
+++

{{<btnCenter "/docs/manual/initial-setting/template/digital/#rate" "新バージョンでも使えます">}}

## レートの入力画面{#display}

オンラインショップなどでよく見かける、商品レビュー風の入力形式です。一般的には５段階評価ですが、Nipoは**2〜10**の間で設定可能です。  
クリック１つで入力でき、見た目もグラフィカルでわかりやすいパーツです。  
見た目の違いでしかありませんが、星の他、ハートも利用できます。

{{<imgproc parts_rating1.png "レートを日報に添付した様子" />}}

## レートを含んだ日報の各種出力画面{#output}

[PDFに出力](/legacy/manual/pdf/)すると次のように表示されます。

{{<imgproc parts_rating2.png "レートを含む日報をPDFに変換した出力結果" />}}

レートではCSV出力時に「**列の展開**」を指定できます。

{{<imgproc parts_rating3.png "CSV出力したデータをエクセルで開いた様子（列を展開しない）" />}}
{{<imgproc parts_rating4.png "CSV出力したデータをエクセルで開いた様子（列を展開する）" />}}

列を展開すると各回答ごとに1列使用されます。これにより[集計](/legacy/manual/analytics/)などの作業がかんたんに行えるメリットがありますが、一方で列数た増えるため視認性が悪くなるデメリットも併せ持ちます。  

Nipoの受信・送信BOXからは次のように表示されます

{{<imgproc parts_rating5.png "クラウド日報Nipoのアプリ上からレートを含むレポートを表示した画面" />}}

## 設定画面{#setting}

テンプレートの編集画面では次のような設定画面となっております。

{{<imgproc parts_rating6.png "レートの初期設定画面" />}}

<dl class="basic">
  <dt>アイコンの種類</dt>
  <dd>星かハートから選んでください。初期値は「星」です</dd>
  <dt>アイコンの表示数</dt>
  <dd>2〜10の間で指定します</dd>
  <dt>プレビュー＆初期値の設定</dt>
  <dd>選択したアイコンの種類やアイコンの数が確認できます。実際に入力可能で、ここで入力した値は初期値としても利用されます。2回同じ星の数をクリックすることで0になります</dd>
</dl>
