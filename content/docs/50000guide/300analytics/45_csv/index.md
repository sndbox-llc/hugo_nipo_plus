+++
url = "/docs/manual/analytics/csv/"
# aliases = []
title = "🗂️レポートのCSV一括ダウンロード"
menuTitle = "🗂️CSV一括出力"
description = "指定した期間内のレポートデータを一括でCSV形式に出力し、エクセルでの集計・分析やバックアップ、印刷に活用できます。テンプレートごとの分割出力や、スタッフ別・日別の出力にも対応し、業務の効率化をサポートします。"
toc = true
weight = 50345
tags = ["有料プラン限定", "Web版限定", "CSV出力"]
contributors = []
+++

{{< callout context="note" title="[CSVの出力設定](/docs/manual/analytics/csvoption/)も併せてご覧ください" icon="outline/info-circle" />}}

{{< callout context="note" title="集計がメニューに無いときは[グループ設定](/docs/manual/initial-setting/setting-group/#optionalFunction)から機能を有効にしてください" icon="outline/info-circle" />}}

{{< callout context="caution" title="Web版のみ" icon="outline/alert-triangle" >}}
[Android](/docs/system/mobile-install/#googlePlay) / [iOS](/docs/system/mobile-install/#appStore)版では利用できません。[Web版](/docs/system/mobile-install/#web)をご利用ください
{{< /callout >}}

## １ヶ月分のレポートをCSV出力する{#monthly}

1. 「集計/CSV出力」をクリック
2. 期間を選択（初期値: 今月）
3. 「CSV出力」ボタンをクリック

{{<icatch filename="img/report-csv-export1" msg="たくさんのレポートを１枚のCSVにまとめて出力できるよ。電子化の強みだね" alice="pc">}}

- CSVはテンプレートごとに分けて出力されます。テンプレートが多いとCSVファイルも比例して多くなります。
- 指定期間内に1度も使用されなかったテンプレートは自動で除外されます。
- [無効化したテンプレート](/docs/manual/initial-setting/template/make/#disableTemplate)であっても集計期間内にデータが存在する場合は出力されます
- 出力対象のファイルが1つの場合はCSVファイル、2つ以上ある場合はCSVをZIPでまとめた形で出力されます

出力されたCSVファイルはエクセルで開くことができます。NipoPlusのデータを[エクセル加工テクニック集](/excel/)も併せてご覧ください。

## スタッフ別や日別に分けてCSV出力する{#splid_download}

日別に分けてCSV出力したり、スタッフ別に分けてCSV出力できます。この機能を使うには対象となるテンプレートを1種類選ぶ必要があります。

1. 「集計/CSV出力」をクリック
2. 期間を選択（初期値: 今月）
3. テンプレートを1種類選択
4. 「スタッフ別」または「日別」ダウンロードボタンをクリック

{{<icatch filename="img/selectable-csv-download" msg="日別やスタッフ別に分けてレポートのダウンロードが可能です">}}

## CSVを解凍すると文字化けする？{#text_shaking}

WindowsでZipファイルを解凍する際、一部の解凍ソフトで文字化けが発生することがあります。Windows標準の解凍ソフトを使用すれば問題は発生しません。文字化けが起きた場合は、解凍ソフトを変更してください。

詳しくは[ダウンロードしたファイルが文字化けする原因と解決策](/tech/other/mojibake/)を御覧ください。

## 複数のCSVファイルを連結させるツール{#csvsc}

毎月月末にCSVファイルをダウンロードするとCSVファイルが増えていきます。
複数のCSVファイルを1つにまとめる[CSVSCというWebアプリ](/tips/csvsc/)を用意していますのでぜひご利用ください。（NipoやNipoPlus以外のCSVも利用可能）

- ドラッグ操作で簡単にCSVをまとめる
- 無料で使える
- ブラウザで動くためインストール不要
