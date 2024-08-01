+++
description = "レポートのデータをCSV出力する際に出力形式を変更できます。バックアップ用、集計用など目的に応じて設定してください"
tags = ["有料プラン限定", "CSV出力"]
title = "⚙️CSV出力の設定"
menuTitle = "⚙️CSV出力の設定"
toc = true
weight = 101004020
aliases = []
images = ["csv-setting1_tablet.png"]
+++

レポートのデータをCSVに出力する際に出力の形式をカスタマイズできます。
CSVファイルの用途に応じて設定を変更してください。
出力設定は「CSV出力」ボタンの隣りにある▼ボタンから設定できます。
設定の内容は自動で保存されます。

{{<icatch filename="csv-setting1" msg="CSV出力のオプション設定はONかOFFだけで設定できるよ" alice="ok">}}

## 列の展開について{#split_rows}

CSV出力設定には「展開」に関する設定があります。
列の展開はデータの列をどのように表現するかの違いです。
展開がOFFの場合は1列で表現し、ONの場合は項目の数だけ列を増やし（展開し）ます。
以下は[選択式入力フォーム](/docs/manual/initial-setting/template/selects/#plain)をCSV出力したときのイメージです。選択肢は「Windows,Mac,Android,iOS」があるとします。

### 列展開をOFFにして出力した例

{{< excelTable >}}
日付, OS, , , 
2022/01/01, Windows, , , 
2022/01/02, Mac, , , 
2022/01/03, iOS, , , _
{{< /excelTable >}}

１列（上記の例ではB列）にまとめて出力されます。コンパクトにまとまり、保管用に向いています。

- 1列でデータを表現する
- 直感的にわかりやすい
- バックアップや一覧で印刷、外部へインポートするのに適している



### 列展開をONにして出力した例

{{< excelTable >}}
日付, 【OS】Windows, 【OS】Mac, 【OS】Android, 【OS】iOS
2022/01/01, ⭕, -, -, -
2022/01/02, -, ⭕, -, -
2022/01/03, -, -, -, ⭕
{{< /excelTable >}}


選択肢の数だけ列が増えます。（上記の例ではB〜E列）

- エクエルで加工しやすい
- 他の選択肢にどのようなものがあったのかがCSVだけでわかる





### 【列の展開】を個別に指定する{#pin}

CSV出力設定では一括で展開のON/OFFが適用されてしまいますが、一部だけ展開を変えたい場合はテンプレートの編集から設定可能です。

{{<icatch filename="template-setting" msg="テンプレート上の設定が最も優先されます" alice="pc">}}

テンプレートでの設定が優先して適用され、その後にCSV出力が適用されます。

## その他の設定項目{#other}

以下にまとめて記載します。

<dl class="basic">

<dt>行列を入れかえる</dt>
<dd>
<ul>
<li>OFF:1行に1つのレポートを表示します（推奨）</li>
<li>ON:1列に1つのレポートを表示します</li>
</ul>
</dd>

<dt>日付の古い順に出力する</dt>
<dd>
<ul>
<li>OFF:レポートの日付が新しい順に出力されます</li>
<li>ON:レポートの日付が古い順に出力されます。</li>
</ul>
</dd>

<dt>写真・ファイル等を出力</dt>
<dd><a href="/docs/manual/initial-setting/template/binarys/#picture">写真入力フォーム</a>、<a href="/docs/manual/initial-setting/template/binarys/#sign">署名入力フォーム</a>、<a href="/docs/manual/initial-setting/template/binarys/#file">ファイル入力フォーム</a>で添付されたデータをCSVファイルとは別のフォルダに出力します。また、ダウンロード形式がZIPに変化します</dd>

<dt>コメントを出力</dt>
<dd>レポートに書き込まれたコメントを出力します</dd>

<dt>提出日を出力</dt>
<dd>レポートの提出日時をCSVにファイルに含めます</dd>

<dt>【可変-提出日】<br>同レポートの2行目以降も出力</dt>
<dd>
<ul>
<li>ON:可変長の2行目以降も日付を出力します</li>
<li>OFF:可変長の2行目以降は日付を省略します</li>
</ul>
<a href="/docs/manual/initial-setting/template/array/">可変長</a>がない場合、設定の意味は有りません。
</dd>

<dt>提出者IDを出力</dt>
<dd>レポートを作成したスタッフのIDを出力します</dd>

<dt>提出者名を出力</dt>
<dd>レポートを作成したスタッフ名を出力します</dd>

<dt><a href="/docs/manual/read-report/state/">状態</a>を出力</dt>
<dd>レポートの状態を承認・棄却・新規・進行・修正のいずれかで出力します</dd>

<dt>URLを出力</dt>
<dd>出力元のレポートのURLを出力します</dd>

<dt>承認者名を出力</dt>
<dd>レポートを承認するスタッフと承認・棄却の状態を出力します。承認者が複数人いる場合は人数分列が追加されて出力されます</dd>

<dt>文書IDを出力</dt>
<dd>レポート固有のIDを出力します（内部的に自動で割り当てられる20文字程度の文字列）</dd>


<dt>文書番号を出力</dt>
<dd>レポートに自動で割り振られる連番を出力します</dd>
</dl>

### CSVで出力不可能な項目{#disabled}

[バイナリ関係のデータ](/docs/manual/initial-setting/template/binarys/)はCSV上に出力できません。代わりに「ファイル」としてダウンロードしてください。
これらのデータはCSV上では「CSV出力不可」と書かれて出力されます。
写真などのバイナリファイルをダウンロードするには、CSV出力設定から「写真・ファイル等を出力」の項目をONにします。
