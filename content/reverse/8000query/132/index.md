+++
url = "/reverse-lookup/query/132/"
title = "こちらのサービスは、キントーンとの連携は可能でしょうか。"
menuTitle = ""
description = ""
toc = false
isDictionaly = true
weight = 132
date = "2025-09-22"
tags = ["FAQ"]

+++

kintoneとの専用連携機能は提供しておりませんが、いくつかの方法があります。
最も一般的な方法としてはCSV出力があります。
CSV（カンマ区切り）は最もシンプルなデータ構造で、Nipo PlusのデータをCSVで出力ー＞KintoneにCSVで入力　という工程で取り込むことができます。

{{< link-card title="CSVオプション" description=""  href="/docs/manual/analytics/csvoption/">}}

「CSVで出力してエクセルで編集する」といった一般的な方法も、Nipo Plusから出力ー＞Excelへ入力　という１つの「連携」の形といえます。
あるいは、もう少し自動化するのであればAPIを使う方法もありますが、少し専門的な知識が必要になってくるケースが多いです。

{{< link-card title="API" description=""  href="/docs/manual/api/ref/">}}

【KintoneとCSVインポート】

データの「入口」と「出口」の形さえあっていれば、Kintoneに限らず多くのアプリケーションとの連携が可能です。
一般的なWebアプリケーションの入口の形として、CSVやJSONといった形がよく使われております。
Kintoneを調べてみると、CSVインポートに対応しているようなので、連携は可能だと思われます。

{{< link-card title="kintoneCSVインポート" description=""  href="https://www.focus-u.jp/blog/2024/01/kintone7-csv-import/">}}
{{< link-card title="サイボウズ公式Webガイド" description=""  href="https://jp.cybozu.help/k/ja/app/data/import_records/import_csv.html">}}

実際に連携を試みたことは無いため、明確に「できる」と断言はできませんが、Kintoneの公式ガイドを見る限り、問題なくNipo Plusのデータを取り込むことはできると考えられます。
現在Kintoneを基幹システムとしてお使いの場合、Nipo Plusを入力専用と割り切り、データの保管、集計分析、共有にKintoneを使うことは一つの運用スタイルとして理にかなっております。

ぜひご検討ください。
