+++
description = "1つのレポートを1枚のPDFファイルに変換します"
tags = ["PDF出力"]
title = "1件のレポートをPDFに変換・出力する"
menuTitle = "📄PDF出力（単体）"
toc = true
weight = 101003005
aliases = []
images = ["pdf-download_tablet.png"]
+++

{{<info>}}
この記事はレポート1件をPDF出力するものです。まとめて出力するには[一括PDF出力](/docs/manual/analytics/pdf/)を御覧ください。
{{</info>}}

---

## 表示中のレポート1件をPDFに出力する{#pdf_export}

PDFに変換する手順は次のとおりです。

1. PDFに変換したいレポートを表示する
1. PDF出力ボタンをクリック
1. PDF作成完了まで待つ
1. 作成処理が完了後にダウンロード通知が発行される

{{<icatch filename="report-to-pdf" msg="PDF❗PDF❗">}}

PDFの作成には少し時間がかかります。完了後、画面右下に通知が届くのでその通知からPDFをダウンロードできます。
なおPDF作成中に他の作業へ切り替えても問題有りません。

- 生成されたPDFファイルは安全性の観点から2時間でダウンロードできなくなります。
- 期限が切れてしまった場合は再度生成してください。

ダウンロードしたPDFは普通のPDFファイルとして扱えます。

{{<icatch filename="pdf-download" msg="環境によって直接PCに保存されたり、ブラウザで表示されたり？これはブラウザ表示の例です">}}


## PDFの出力設定{#setting}

※この機能は有料プラン限定です  

PDF出力設定では以下の設定が可能です。

- 余白や向き、透かし文字などレイアウトに関するもの
- レポート本文内の文字やタイトルなどデータに関するもの

ここで説明する設定は**PDF出力時に1回限り有効な仮のデータ**です。変更内容は保存されず、PDF出力後に破棄されます。
レイアウトに関する設定を永続して記憶したい場合は[テンプレート編集画面](/docs/manual/initial-setting/template/make/#pdf)の設定から変更してください。


### 1度限り有効な設定を行う{#once}

1. PDF出力（一括）の下向き三角ボタンをクリック
1. PDF出力設定をクリック
1. PDF設定画面がポップアップで表示される
1. 設定を行い、「現在の設定でPDF出力」をクリック

{{<icatch filename="pdf-option" msg="元データを書き換えてPDF出力できます。見せられない内容はここでサクッと修正しましょう" alice="here">}}

{{<nextArrow>}}

ポップアップでPDFに出力する前の設定が表示されます。

{{<icatch filename="pdf-setting" msg="PDF出力の設定が可能です。この設定は１回きりの使い捨て。永続保存はできません">}}

本文の編集、レイアウトの編集が行なえます。内容を修正の上で「現在の設定でPDF出力」をクリックすると指定した内容とデータでPDFの作成が行われます。

{{<alice pos="right" icon="here">}}
閉じるボタンを押してポップアップウインドウが閉じられた時点で変更内容は全てクリアされるので注意してください
{{</alice>}}

「PDF一括出力に追加」をクリックすると修正した内容のまま一括出力に追加されます。
