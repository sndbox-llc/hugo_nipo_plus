+++
description = "蓄積したチェックシートのデータを1枚のエクセルシートにまとめることができます。データ転記の労力を省略するだけでなく転記ミスや記入漏れのリスクを減らす効果があります"
menuTitle = "一括出力(CSV/PDF)"
menuPre = "<b>2-4. </b>"
title = "チェックシートや日報を集計する"
toc = false
weight = 40
tags = []
+++


スタッフが作成した個々の**日報やチェックシートデータを1枚のCSVファイルに出力**することができます。月単位や週単位、直近10日間など任意の期間を指定して1つのCSVファイルにまとめる他にも、1件1件の日報を個別にCSV出力することもできます。
1つの日報だけCSV出力したい時は[CSV出力（単体）](/report/read/csv/)をご覧ください。
バックアップ目的の他、データの分析や集計にそのまま流用ができます。
CSVファイルは[エクセル](https://www.microsoft.com/ja-jp/microsoft-365/excel)や[Google Sheet](https://www.google.com/intl/ja_jp/sheets/about/)などの表計算ソフトで開き、編集することが可能です。
{{<imgproc csv.png "チェックシートのデータをCSV出力し、spleadsheetで開いた画面" />}}

NipoPlusはテンプレートを自由に設計できますが、テンプレートに使用する入力フォームの種類によってCSVの出力形式を変更できるものもあります。出力形式については[CSV出力オプション](/report/totalling/csvoption/)を参照してください。
またCSVに出力できない画像入力フォームなどもあります。画像やファイルの出力についてはCSV出力オプションで「ファイルの出力」をONにすることでCSVと同じフォルダ内に別ファイルとして出力がされます。

## NipoPlus内で集計可能な項目

日報をCSVに出力すればエクセルなどの表計算ソフトで自由に集計や分析ができますが、NipoPlus内でも簡易的な集計機能が用意されています。次の入力フォームはCSVに出力しなくても簡単な集計が行えます。

|項目|説明|集計方式|
|---|---|---|
|[選択肢（単）フォーム](/org/groupsetting/template/select/)|各単語の選ばれた回数をカウントします|個数|
|[選択肢（複）フォーム](/org/groupsetting/template/select2/)|同上|個数|
|[選択肢（階層）フォーム](/org/groupsetting/template/selectcalc/)|同上|個数|
|[期間入力フォーム](/org/groupsetting/template/datetimes/)|期間を集計します。単位は「分」として集計されます。例えば入力が13:00〜14:30の場合、90(分)として出力されます|数値|
|[数値入力フォーム](/org/groupsetting/template/math/)|入力された数値を単純に加算します|数値|
|[スライダ入力フォーム](/org/groupsetting/template/step/)|同上|数値|
|[レート入力フォーム](/org/groupsetting/template/rate/)|レート毎の選ばれた回数を集計します。例えば☆1は4回、☆2は1回・・・といった具合です。選択肢の集計方式に近いものです|個数|

{{<imgproc calc.png "集計が可能な入力フォームのみで構成されたチェックシートのテンプレート例" />}}

あくまでも簡易的な集計ですので、平均値などより細かい集計が必要な場合は前述のCSV出力を使用してください。

また、これらの集計可能な入力フォームに限り[日報受信BOXから日報を開いた](/report/read/)ときに過去の同じテンプレートで作成された日報やチェックシートのデータ推移を表示する機能があります。
詳しくは[過去データ推移](/report/analytics/list/)を参照してください。


## 次の記事

{{% children description="true" containerstyle="dl" style="dt" %}}
