+++
description = "日報にフリーハンドで描けるキャンバスを追加します。描かれたデータはPng画像に変換の上保存されます"
title = "手書きメモを日報に含める"
toc = true
weight = 109002001
isNipo = true
tags = ["旧バージョン"]
aliases = ["/old/parts/canvas/", "/docs/old/parts/canvas/"]
[sitemap]
  changefreq = "yearly"
  priority = 0.2
+++

{{<btnCenter "/docs/manual/initial-setting/template/sign/" "新バージョンでも使えます">}}

## 手書きメモの入力画面{#display}

iPadやSurfaceのような**タッチパネルが使える**場合に便利な入力項目です。指でスラスラとイラストや文字が描けます。また、Apple PencilやSurface Penも利用できます。図・イラストを日報に付与したい場合におすすめです。
また、いちいちキーボードを使っていられない煩雑な状況でササッとペンで描いて提出するという使い方もできます。描いたイラストは、ご利用のデバイスによってサイズが自動で変わります。

{{<imgproc parts_canvas.png "手書きメモを日報に添付した様子" />}}

## 手書きメモを含んだ日報の各種出力画面{#output}

[PDFに出力](/legacy/manual/pdf/)すると次のように表示されます。
{{<imgproc parts_canvas2.png "手書きメモを含む日報をPDFに変換した出力結果" />}}

新レイアウトのほうが幅をいっぱいに使えるので一回り大きな画像として出力されていることがわかります。  

残念ですがCSV出力には対応していません。CSV上には「対象外」との文字だけが出力されます

{{<imgproc parts_pic3.png "手書きメモを含む日報をCSVに出力し、Excelで開いた画面" />}}

Nipoの受信・送信BOXからは次のように表示されます

{{<imgproc parts_canvas3.png "クラウド日報Nipoのアプリ上から手書きメモを含む日報を表示した画面" />}}

## 設定画面{#setting}

テンプレートの編集画面では次のような設定画面となっております。

{{<imgproc parts_canvas4.png "手書きメモの初期設定画面" />}}

設定項目はタイトルのみです。事実上初期設定は不要です。
