+++
description = "期間を指定してレポートのデータを一括でCSVに出力できます。バックアップやエクセルを使った集計分析、印刷など様々な形でご利用いただけます"
tags = ["有料プラン限定", "Web版限定", "CSV出力"]
title = "レポートのCSV一括ダウンロード"
menuTitle = "CSV一括出力"
toc = true
weight = 101004021
aliases = ["/manual/analytics/csv/"]
images = ["report-csv-export_tablet.png"]
+++

CSV出力はWeb版のみ対応しています。Android / iOSアプリ版では利用できません。

1. 集計/CSV出力をクリック（無い場合は[グループの基本設定](/docs/manual/initial-setting/make-group/)を確認）
1. 出力したい期間を選びます（初期値は今月）
1. CSV出力ボタンをクリックします
1. ダウンロードが開始されます

{{<appscreen filename="report-csv-export1" title="指定した期間のレポートを一括でCSVに出力">}}

- CSVはテンプレートごとに分けて出力されます。テンプレートが多いとCSVファイルも比例して多くなります。
- 指定期間内に1度も使用されなかったテンプレートは自動で除外されます。
- 無効化したテンプレートであっても集計期間内にデータが存在する場合は出力されます
- 集計期間内に使用されたテンプレートが1種類しか無い場合はZipファイルではなく、ただの1つのCSVファイルとして出力されます。

{{<alice pos="right" icon="ok">}}
ダウンロードしたCSVファイルはエクセルで開けるよ
{{</alice>}}

## スタッフ別や日別に分けてCSV出力する{#splid_download}

日別に分けてCSV出力したり、スタッフ別に分けてCSV出力できます。この機能を使うには対象となるテンプレートを1種類選ぶ必要があります。

{{<appscreen filename="selectable-csv-download" title="日別やスタッフ別に分けて日報のダウンロードが可能です">}}



## CSVを解凍すると文字化けする？{#text_shaking}

WindowsでZipファイルを解凍する際、使用する解凍ソフトによっては文字化けすることがあります。これは解凍ソフトが文字コードを正しく理解していないために起こります。
Windows標準の解凍ソフトであれば文字化けは発生しません。文字化けが発生する際は使用する解凍ソフトを変更してください。
詳しくは[ダウンロードしたファイルが文字化けする原因と解決策](/tech/mojibake/)を御覧ください。

{{<alice pos="right" icon="default">}}
何故か文字化けの記事、アクセスが一番多いんです
{{</alice>}}

## CSV出力の設定について{#csv}

予めCSV出力設定を変更しておくことで加工の手間を減らすことができます。

{{<btnCenter "/docs/manual/analytics/csvoption/" "CSV出力の設定">}}

## 複数のCSVファイルを連結させるツール{#csvsc}


毎月月末にCSVファイルをダウンロードするとCSVファイルが増えていきます。それらのCSVファイルを1つのCSVにまとめたいときはCSVSCというツールがおすすめです。

- ドラッグ操作で簡単にCSVをまとめる
- 無料で使える
- ブラウザで動くためインストール不要

{{<btnCenter "/tips/csvsc/" "CSVSC">}}

CSVSCはNipoのために作られたおまけアプリです。
