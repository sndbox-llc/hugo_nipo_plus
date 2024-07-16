+++
description = "レポートのデータをCSV出力する際に出力形式を変更できます。バックアップ用、集計用など目的に応じて設定してください"
tags = ["有料プラン限定", "CSV出力"]
title = "⚙️CSV出力の設定"
menuTitle = "⚙️CSV出力の設定"
toc = true
weight = 101004020
aliases = ["/manual/analytics/csvoption/"]
images = ["csv-setting1_tablet.png"]
+++

レポートのデータをCSVに出力する際に出力の形式をカスタマイズできます。
CSVファイルの用途に応じて設定を変更してください。
出力設定は「CSV出力」ボタンの隣りにある▼ボタンから設定できます。
設定の内容は自動で保存されます。

{{<appscreen filename="csv-setting1" title="CSV出力時の形式設定変更オプション">}}

## 列の展開について{#split_rows}

CSV出力設定には「展開」に関する設定が多くあります。具体的には以下の種類があります。

- 選択肢（単）の展開
- 選択肢（複）の展開
- レートの列を展開
- チェックボックス列のレン回

列の展開はデータの列をどのように表現するかの違いです。
展開がOFFの場合は1列で表現し、ONの場合は項目の数だけ列を増やし（展開し）ます。
以下は[選択式入力フォーム](/docs/manual/initial-setting/template/selects/#plain)をCSV出力したときのイメージです。選択肢は「Windows,Mac,Android,iOS」があるとします。

**列展開をOFF**にして出力


{{< excelTable >}}
日付, OS, , , 
2022/01/01, Windows, , , 
2022/01/02, Mac, , , 
2022/01/03, iOS, , , _
{{< /excelTable >}}


{{<nextArrow>}}

**列展開をON**にして出力

{{< excelTable >}}
日付, 【OS】Windows, 【OS】Mac, 【OS】Android, 【OS】iOS
2022/01/01, ○, -, -, -
2022/01/02, -, ○, -, -
2022/01/03, -, -, -, ○
{{< /excelTable >}}


今回の例は「選択肢」を使いましたが他の入力フォームでも同様の挙動となります。
それぞれの特徴をまとめました。

<dl class="basic">
<dt>展開OFF</dt>
<dd><ul><li>1列でデータを表現する</li><li>直感的にわかりやすい</li><li>バックアップや一覧で印刷、外部へインポートするのに適している</li></ul></dd>
<dt>展開ON</dt>
<dd><ul><li>エクエルで加工しやすい</li></ul></dd>
</dl>


展開がOFFではB列だけですべてのデータを表現します。展開がONでは選択肢の数だけ列が増え、各行には「◯」が出力されます。

### 【列の展開】を個別に指定する{#pin}

CSV出力設定では一括で展開のON/OFFが適用されてしまいますが、一部だけ展開を変えたい場合はテンプレートの編集から設定可能です。

{{<appscreen filename="template-setting" title="テンプレートからCSV出力時の設定を独自に行う">}}

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
<dd>
<ul>
<li><a href="/docs/manual/initial-setting/template/binarys/#picture">写真入力フォーム</a></li>
<li><a href="/docs/manual/initial-setting/template/binarys/#sign">署名入力フォーム</a></li>
<li><a href="/docs/manual/initial-setting/template/binarys/#file">ファイル入力フォーム</a></li>
</ul>
ONにすると上記データを別フォルダに出力します。またダウンロード形式がZipに変化します。
</dd>
<dt>コメントを出力</dt>
<dd>
<ul>
<li>ON:レポートに書き込まれたコメントを出力します</li>
<li>OFF:出力しません</li>
</ul>
</dd>
<dt>提出日を出力</dt>
<dd>
<ul>
<li>ON:レポートの提出日時をCSVにファイルに含めます</li>
<li>OFF:出力しません</li>
</ul>
</dd>
<dt>【可変-提出日】<br>同レポートの2行目以降も出力</dt>
<dd>
<ul>
<li>ON:可変長の2行目以降も日付を出力します</li>
<li>OFF:可変長の2行目以降は日付を省略します</li>
</ul>
<a href="/docs/manual/initial-setting/template/array/">可変長</a>がない場合は無視されます。
</dd>
<dt>提出者IDを出力</dt>
<dd>
<ul>
<li>ON:レポートを作成したスタッフのIDを出力します</li>
<li>OFF:出力しません</li>
</ul>
</dd>
<dt>提出者名を出力</dt>
<dd>
<ul>
<li>ON:レポートを作成したスタッフ名をCSVファイルに含めます</li>
<li>OFF:出力しません</li>
</ul>
</dd>
<dt><a href="/docs/manual/read-report/state/">状態</a>を出力</dt>
<dd>
<ul>
<li>ON:レポートの状態を承認・棄却・新規・進行・修正のいずれかで出力します</li>
<li>OFF:出力しません</li>
</ul>

</dd>
<dt>URLを出力</dt>
<dd>
<ul>
<li>出力元のレポートのURLを出力します</li>
<li>OFF:出力しません</li>

</dd>
<dt>承認者名を出力</dt>
<dd>
<ul>
<li>ON:レポートを承認するスタッフと承認・棄却の状態をCSVファイルに出力します。承認者が複数人いる場合は人数分列が追加されて出力されます</li>
<li>OFF:出力しません</li>
</ul> 
</dd>
<dt>文書IDを出力</dt>
<dd>
<ul><li>レポート固有のIDを出力します</li>
<li>OFF:出力しません</li>
</ul>

</dd>
</dl>

### CSVで出力不可能な項目{#disabled}

以下の入力フォームはCSV上に出力不可能です。

- [写真入力フォーム](/docs/manual/initial-setting/template/binarys/#picture)
- [署名入力フォーム](/docs/manual/initial-setting/template/binarys/#sign)
- [ファイル入力フォーム](/docs/manual/initial-setting/template/binarys/#file)

これらのデータはCSV上では「CSV出力不可」と書かれて出力されます。
写真などのバイナリファイルをダウンロードするには、CSV出力設定から「写真・ファイル等を出力」の項目をONにしてください。
