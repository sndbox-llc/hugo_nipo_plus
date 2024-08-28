+++
description = "期間を指定してレポートのデータを一括でCSVに出力できます。バックアップやエクセルを使った集計分析、印刷など様々な形でご利用いただけます"
tags = ["有料プラン限定", "Web版限定", "CSV出力"]
title = "🗂️レポートのCSV一括ダウンロード"
menuTitle = "🗂️CSV一括出力"
toc = true
weight = 101004021
aliases = []
images = ["report-csv-export_tablet.png"]
+++

{{<info>}}
[CSVの出力設定](/docs/manual/analytics/csvoption/)も併せてご覧ください
{{</info>}}


{{<info>}}
集計がメニューに無いときは[グループ設定](/docs/manual/initial-setting/setting-group/#optionalFunction)から機能を有効にしてください
{{</info>}}


{{<warning>}}
[Android](/docs/system/mobile-install/#googlePlay) / [iOS](/docs/system/mobile-install/#appStore)版では利用できません。[Web版](/docs/system/mobile-install/#web)をご利用ください
{{</warning>}}

## １ヶ月分のレポートをCSV出力する{#monthly}


1. 集計/CSV出力をクリック
2. 出力したい期間を選択（初期値は今月）
3. CSV出力ボタンをクリック

{{<icatch filename="report-csv-export1" msg="たくさんのレポートを１枚のCSVにまとめて出力できるよ。電子化の強みだね" alice="pc">}}

- CSVはテンプレートごとに分けて出力されます。テンプレートが多いとCSVファイルも比例して多くなります。
- 指定期間内に1度も使用されなかったテンプレートは自動で除外されます。
- [無効化したテンプレート](/docs/manual/initial-setting/template/make/#disableTemplate)であっても集計期間内にデータが存在する場合は出力されます
- 出力対象のファイルが1つの場合はCSVファイル、2つ以上ある場合はCSVをZIPでまとめた形で出力されます

出力されたCSVファイルはエクセルで開くことができます。NipoPlusのデータを[エクセル加工テクニック集](/excel/)も併せてご覧ください。


## スタッフ別や日別に分けてCSV出力する{#splid_download}

日別に分けてCSV出力したり、スタッフ別に分けてCSV出力できます。この機能を使うには対象となるテンプレートを1種類選ぶ必要があります。



1. 集計/CSV出力をクリック
2. 出力したい期間を選択（初期値は今月）
3. 集計するテンプレートから1種類を選択する
4. スタッフ別、日別のダウンロードボタンから任意のボタンをクリック

{{<icatch filename="selectable-csv-download" msg="日別やスタッフ別に分けてレポートのダウンロードが可能です">}}



## CSVを解凍すると文字化けする？{#text_shaking}

WindowsでZipファイルを解凍する際、使用する解凍ソフトによっては文字化けすることがあります。これは解凍ソフトが文字コードを正しく理解していないために起こります。
Windows標準の解凍ソフトであれば文字化けは発生しません。文字化けが発生する際は使用する解凍ソフトを変更してください。
詳しくは[ダウンロードしたファイルが文字化けする原因と解決策](/tech/mojibake/)を御覧ください。



## 複数のCSVファイルを連結させるツール{#csvsc}


毎月月末にCSVファイルをダウンロードするとCSVファイルが増えていきます。
複数のCSVファイルを1つにまとめる[CSVSCというWebアプリ](/tips/csvsc/)を用意していますのでぜひご利用ください。（NipoやNipoPlus以外のCSVも利用可能）

- ドラッグ操作で簡単にCSVをまとめる
- 無料で使える
- ブラウザで動くためインストール不要


