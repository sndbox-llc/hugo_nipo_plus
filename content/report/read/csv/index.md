+++
description = "1件の日報やチェックシートをCSV形式でエクスポートします。出力形式を変更することで様々な用途に利用できる元データとして活用可能"
menuTitle = "CSV出力（単体)"
tags = []
title = "表示中の日報・チェックシートをCSVに変換してエクスポート\n（CSVはExcel等で開くことができます)"
toc = true
weight = 30
+++


現在画面に表示されている**日報1件をCSVファイルに変換してダウンロード**できます。（複数まとめて出力したいときは[一括CSV出力](/report/totalling/csv/)を参照)
ダウンロードされたCSVファイルはシンプルなテキストファイルのため、テキストエディタで開く他、表計算ソフト（[Excel](https://www.microsoft.com/ja-jp/microsoft-365/excel)や[Google Sheet](https://www.google.com/intl/ja_jp/sheets/about/)など）で開くことが可能です。
バックアップやデータ加工などにお役立てください。

CSV出力機能はWeb版（PWA版)のNipo限定の機能です。Android / iOSアプリではご利用になれませんので注意してください。

{{<alice pos="right" icon="phone">}}
スマホからCSVを出力したいときはPWA版としてインストールしてね。[Android](/system/android/)はこちら、[iOS](/system/ios/)はこちらを参照してください
{{</alice>}}

## 表示中の日報をCSVに出力する方法

出力する手順は次の通りです。

1. CSV出力したい[日報・チェックシートを表示](/report/read/list/)
1. メニューから「CSV出力」をクリック

{{<imgproc csv.png "表示中の日報1件をCSVに出力します。スマートフォンは画面幅の関係で出力ボタンが下部に配置されます" />}}

CSV出力をクリックするとデータがCSV形式に変換され、ダウンロードが開始されます。ダウンロードの処理はお使いのブラウザや環境設定によって異なります。
普段インターネットで何かをダウンロードしたときと同じ振る舞いをしますのでいつもどおりの手順でダウンロードしてください。

スマートフォンの場合は対応するアプリケーションの候補が表示されます。  
もしスマートフォンでCSVを出力する際は[スマートフォン用のExcel](https://play.google.com/store/apps/details?id=com.microsoft.office.excel&hl=ja&gl=US)などを予めインストールしておくとスムーズです。

{{<alice pos="right" icon="pc">}}
操作性の観点からCSV出力は可能であればPCから行うほうがおすすめ
{{</alice>}}

ダウンロードされたCSVファイルはメモ帳などのテキストエディタや、エクセルなどの表計算ソフトを使って開くことができます。
少し専門的な話になりますがCSVファイルの**文字コードはUTF-8**という形式になります。エクセル2007以前のように古いエクセルではCSVファイルをShift-jis形式で開こうとするため、文字ーコード違いによる文字化けが起きる可能性があります。
もし文字化けしてしまった場合は[Google Splead](https://www.google.com/intl/ja_jp/sheets/about/)など他のソフトを使って開くか、[こちらの記事](https://www.pc-koubou.jp/magazine/38143)を参考に文字化けを解消してください。

## CSV出力形式の設定を変更する

日報をCSVに出力する際、出力する項目や出力の形式について変更可能な項目があります。
CSV出力の設定変更はCSV出力ボタンの右端にある下向きの三角矢印ボタンをクリックして行います。
変更した内容は**スタッフごとに自動で保存**されます。つまりAさんとBさんではそれぞれ異なるCSV出力の設定が記録されます。
また、ここで設定したCSV出力設定は[一括CSV出力](/report/totalling/csv/)でも同じ設定が自動で適用されます。（逆もまた同様です）

{{<imgproc csvsetting.png "CSV出力の設定変更を表示するには下向き三角アイコンをクリックします。設定の内容は自動で保存されます。" />}}

CSV出力の設定に関する詳しい情報は[CSV出力オプションについて](/report/totalling/csvoption/)を参照してください

{{<alice pos="right" icon="here">}}
画像やファイルはCSV出力不可です
{{</alice>}}
