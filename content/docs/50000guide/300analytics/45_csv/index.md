+++
url = "/docs/manual/analytics/csv/"

title = "🗂️CSV一括出力 - 日報・点検記録の一括ダウンロードとデータ保管" # 機能の核とメリット、用途を明確に
menuTitle = "🗂️CSV一括出力"
description = "NipoPlusのCSV一括出力機能を使えば、1ヶ月や2週間といった指定期間内の日報、点検記録、業務報告書などを1枚のCSVファイルにまとめてダウンロードできます。製造業の膨大な点検シートの長期保管や、ペーパーレス化、Excelでの詳細なデータ分析、バックアップに最適。あなたのデータ活用と管理を強力に効率化します。" # メリットと具体的な状況、信頼性を提示
toc = true
weight = 50345
tags = ["有料プラン限定", "Web版限定", "CSV出力", "CSV一括出力", "データバックアップ", "長期保存", "点検記録保管", "日報一括ダウンロード", "データアーカイブ", "監査証跡", "ペーパーレス化", "データ活用"]
contributors = []
+++

{{< callout context="note" title="CSVの出力設定も併せてご確認ください" icon="outline/info-circle" >}}
CSVファイルの用途に合わせて出力形式をカスタマイズできる<a href="/docs/manual/analytics/csvoption/">CSV出力設定</a>も併せてご覧ください。
{{< /callout >}}

{{< callout context="note" title="集計機能の有効化が必要です" icon="outline/info-circle" >}}
左メニューに「集計」ボタンが表示されない場合は、<a href="/docs/setup/setting-group/#optionalFunction">グループ設定</a>から集計機能を有効にしてください。
{{< /callout >}}

{{< callout context="caution" title="Web版のみ対応" icon="outline/alert-triangle" >}}
CSV一括出力機能は、スマートフォンアプリ版（<a href="/docs/system/mobile-install/#googlePlay">Android</a> / <a href="/docs/system/mobile-install/#appStore">iOS</a>版）ではご利用いただけません。<a href="/docs/system/mobile-install/#web">Web版NipoPlus</a>をご利用ください。
{{< /callout >}}

## 1ヶ月分の日報（日報・点検記録）をCSV出力する - 大量データの分析と保管に最適{#monthly}

NipoPlusの「CSV一括出力」機能は、1件の日報を個別にCSV出力する（これは<a href="/docs/manual/read-report/state/#csv_export">日報詳細画面</a>から可能です）だけでなく、**1ヶ月や2週間といった指定した期間内の日報、チェックシート、点検シートといった大量の日報データを、1枚のCSVファイルにまとめて出力できる**機能です。

これにより、以下のような様々なメリットが得られます。

- **Excelでの自由な分析:** 1枚のCSVファイルにまとまっているため、後はExcelやGoogleスプレッドシートなどの表計算ソフトで開けば、1ヶ月分のデータがすぐに手元に。グラフ化したり、ソートしたり、ピボットテーブルを作成したりと、自由自在に詳細なデータ分析が可能です。
- **データのバックアップと長期保管:** NipoPlusに蓄積されたデータを、**定期的に外部へバックアップ**する手段として非常に有用です。
- **収納場所の節約とペーパーレス化:** ある製造業者の方の例では、**10年分の紙の点検シートを保管するために一部屋が丸ごと段ボールで埋まっている**と言います。しかし、NipoPlusで出力されたCSVデータなら、**USBメモリ一つにすっぽり収まってしまいます。**これにより、**物理的な収納場所の節約**と、**環境負荷の軽減**、そして**ペーパーレス化**に大きく貢献します。
- **監査証跡としての活用:** 一括出力されたデータは、<strong>過去の業務記録の監査証跡</strong>としても利用できます。

### 一括CSV出力の手順{#csv_export_steps}

1.  左メニューの「<strong>集計・CSV出力</strong>」をクリック
2.  「<strong>期間</strong>」を選択（初期値は今月ですが、詳細な期間指定も可能です）
3.  画面右側にある「<strong>CSV出力</strong>」ボタンをクリック

{{<icatch filename="img/report-csv-export1" msg="たくさんの日報や点検記録を1枚のCSVにまとめて出力できます。紙のデータ保管場所を節約し、電子化の強みを最大限に活かしましょう" alice="pc">}}

- CSVファイルは、**テンプレートごとに分けて出力**されます。テンプレートの種類が多い場合、出力されるCSVファイルの数も比例して多くなります。
- 指定期間内に1度も使用されなかったテンプレートは、CSV出力の対象から自動で除外されます。
- <a href="/docs/template/make/#disableTemplate"><strong>無効化したテンプレート</strong></a>であっても、集計期間内にデータが存在する場合は出力対象となります。
- 出力対象のファイルが1つの場合はCSVファイルがそのまま、2つ以上ある場合は、複数のCSVファイルをZIPでまとめた形で出力されます。

出力されたCSVファイルはExcelなどの表計算ソフトで開くことができます。NipoPlusのデータを活用するための<a href="/excel/">Excel加工テクニック集</a>も併せてご覧ください。

## スタッフ別や日別に分けてCSV出力する - 細やかな分析ニーズに対応{#splid_download}

CSVファイル全体を1枚のシートにまとめるだけでなく、**スタッフ別**や**日別**にCSVファイルを分割して出力することもできます。この機能は、特定の分析ニーズに合わせてデータの形式を調整したい場合に便利です。

この機能を使うには、出力対象となるテンプレートを1種類選ぶ必要があります。

1.  左メニューの「<strong>集計・CSV出力</strong>」をクリック
2.  「<strong>期間</strong>」を選択（初期値は今月）
3.  「<strong>テンプレート</strong>」を1種類選択（複数選択はできません）
4.  画面右側にある「<strong>スタッフ別ダウンロード</strong>」または「<strong>日別ダウンロード</strong>」ボタンをクリック

{{<icatch filename="img/selectable-csv-download" msg="日報や点検記録のデータを、日別やスタッフ別に分けてダウンロード可能です。特定の期間や担当者の活動を詳細に分析する際に便利です" alice="ok">}}

## CSVを解凍すると文字化けする？ - Windowsでの注意点{#text_shaking}

WindowsでCSVファイルをまとめたZipファイルを解凍する際、一部の解凍ソフトを使用すると文字化けが発生することがあります。これは、解凍ソフトのエンコード設定が原因で起こります。

<strong>Windows標準の解凍機能を使用すれば、文字化けの問題は発生しません。</strong>もし文字化けが起きた場合は、現在お使いの解凍ソフトを変更するか、Windows標準機能で解凍してみてください。

より詳しい解決策については<a href="/tech/other/mojibake/">ダウンロードしたファイルが文字化けする原因と解決策</a>を御覧ください。

## 複数のCSVファイルを連結させるツール「CSVSC」のご紹介{#csvsc}

毎月月末にCSVファイルをダウンロードすると、テンプレートごとにCSVファイルが増えていきます。
これらの複数のCSVファイルを1つにまとめたい場合は、NipoPlusが提供する「**CSVSC**」というWebアプリをぜひご利用ください。

- <strong>ドラッグ＆ドロップ操作で簡単にCSVをまとめる</strong>ことができます。
- <strong>無料で使える</strong>Webアプリです。
- <strong>ブラウザで動作するためインストール不要</strong>です。
- NipoPlusで出力されたCSVだけでなく、Nipo（旧版）やNipoPlus以外のCSVファイルも利用可能です。

<a href="/tips/csvsc/">CSVSCのWebアプリはこちらからご利用ください</a>
