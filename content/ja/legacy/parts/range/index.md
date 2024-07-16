+++
description = "日報に範囲入力できるパーツを追加できます。範囲は最小と最大の設定が必要で、その範囲を超える値は入力できません。"
title = "範囲"
toc = true
weight = 109002014
isNipo = true
tags = ["旧バージョン"]
aliases = ["/old/parts/range/", "/docs/old/parts/range/"]
[sitemap]
  changefreq = "yearly"
  priority = 0.2
+++

{{<btnCenter "/docs/manual/initial-setting/template/digital/#range" "新バージョンでも使えます">}}

## 範囲の入力画面{#display}

数値の範囲入力パーツです。最小値と最大値を設定します。スライダーの左端が最小値、スライダーの右端が最大値になります。1つのスライダーには2つのハンドルが用意され、特定の範囲をスライダーで入力することが可能です。
スライダー（刻み）と異なり、本パーツで入力されたデータは[集計](/legacy/manual/analytics/)されません。CSV出力でエクセルに書き出した場合、「1〜5」のように文字として入力されます。
最小値・最大値を計算式などで利用したい場合、LEFT関数、FIND関数あたりを利用して分割すれば数値データとして加工できます

{{<imgproc parts_range1.png "範囲入力を日報に添付した様子" />}}

## 範囲を含んだ日報の各種出力画面{#output}

[PDFに出力](/legacy/manual/pdf/)すると次のように表示されます。

{{<imgproc parts_range2.png "範囲を含む日報をPDFに変換した出力結果" />}}

範囲入力をCSVに出力する際は列を展開するか展開しないかを選択できます。
列を展開しないで[CSVに出力](/legacy/manual/analytics/)すると次のように表示されます。

{{<imgproc parts_range3.png "範囲を含む日報をCSVに出力し、Excelで開いた画面ー列展開なし" />}}

列を展開してCSVに出力すると次のように表示されます

{{<imgproc parts_range4.png "範囲を含む日報をCSVに出力し、Excelで開いた画面ー列展開あり" />}}

Nipoの受信・送信BOXからは次のように表示されます

{{<imgproc parts_range6.png "範囲を含む日報をNipoの受信BOXから表示した画面例" />}}

## 設定画面{#setting}

テンプレートの編集画面では次のような設定画面となっております。

{{<imgproc parts_range5.png "範囲の初期設定画面" />}}

<dl class="basic">
  <dt>タイトル</dt>
  <dd>タイトルを編集できます。改行も扱えます</dd>
  <dt>ラベルの有無</dt>
  <dd>スライダーの上部に現在の値を表示するか設定できます</dd>
  <dt>説明文</dt>
  <dd>日報作成者が何を書くべきか迷わないようにするために説明を付すことができます。</dd>
  <dt>最小値</dt>
  <dd>スライダーの左端にあたる最小値を指定します</dd>
  <dt>最大値</dt>
  <dd>スライダーの右端にあたる最大値を指定します</dd>
</dl>
