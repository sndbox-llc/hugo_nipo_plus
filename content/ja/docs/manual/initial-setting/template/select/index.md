+++
description = "日報テンプレートカスタムパーツの1つ。一覧から選ぶだけで入力ができるフォームを日報に追加できます。集計にも対応しています"
tags = ["語録機能", "集計可能フォーム", "日報構成部品", "テンプレート"]
title = "【選択式入力（単回答）】を日報に追加"
menuTitle = "🧩選択式入力（単回答）"
toc = true
weight = 101001104
aliases = ["/manual/initial-setting/template/select/"]
images = []
+++


誰もが一度は触れたことがあると思います。次のようなものです。

<div class="container mt-4" style="padding:20px;border:1px solid #ccc">
  <label for="platformSelect" class="form-label">選択式の例:</label>
  <select class="form-select" id="platformSelect" name="platformSelect">
    <option value="">選択してください</option>
    <option value="windows">Windows</option>
    <option value="mac">Mac</option>
    <option value="ios">iOS</option>
    <option value="android">Android</option>
  </select>
</div>

上記の例はプルダウンですが、ラジオボタン風にも変更可能です。

|[集計可否](/docs/manual/analytics/)|[CSV出力](/docs/manual/analytics/csv/)|[PDF出力](/docs/manual/read-report/pdf/)|[文字検索](/docs/manual/read-report/list/)|
|:---:|:---:|:---:|:---:|
|○|○|○|○|

{{<icatch filename="eye-catch" msg="選ぶだけの簡単 入力方式。集計も可" title="選択肢入力フォームを含んだ日報テンプレート" fontsize="30px" alice="here">}}

用途としては次のようなものがあります

- 使用した機器の選択
- 正常・異常・休止など対象状態の選択

本フォームは複数の中から**1つだけ選択が可能**です。
複数個選択したい場合は[選択肢（複数回答）](/docs/manual/initial-setting/template/select2/)をご利用ください。

## フォームをテンプレートに追加する{#add}

1. テンプレート編集画面を開く
1. フォームリストから「選択肢」をクリックして追加
1. 選択式の単語を入力（重複・空行は自動で除去されます）
1. 必要に応じてその他の設定を行う

選択式フォームの設定は下の通り

<dl class="basic">
  <dt>入力切替を無効にする</dt>
  <dd>ON:報告書作成時に入力方式を変更するボタンが非表示になります</dd>
  <dt>入力必須</dt>
  <dd>ON:選択肢が選ばれていないと報告書の提出ができません</dd>
  <dt>集計する</dt>
  <dd>ON:集計機能で利用できます。集計が不要の場合はOFFにします</dd>
  <dt>選択肢を直接指定</dt>
  <dd>すぐ下の「選択肢」エリアに選択肢を入力できます。初期値はこの方式です</dd>
  <dt>選択肢を語録から取得</dt>
  <dd>語録を使って単語を指定。以下のケースで導入を検討してください。<ul><li>選択肢の単語リストを使いまわしたい場合</li><li>選択肢を報告書作成時に自由に追加したい場合</li></ul><br>詳しくは<a href="/docs/manual/initial-setting/advanced-setting/goroku/">語録</a>を参照</dd>
  <dt>入力方式</dt>
  <dd>以下から選択します。<ul><li>ラジオ式</li><li>プルダウン式</li></ul><br>プルダウンは検索が使えるため単語が多い場合に推奨</dd>
</dl>

共通設定事項については以下を参照してください。
{{<btnCenter "/docs/manual/initial-setting/template/make/#common_setting" "共通設定項目">}}

{{<appscreen filename="template-edit-select1" title="選択肢入力フォームのみで構成されたチェックシートのサンプル。このテンプレートを使って実際の入力画面や表示画面を確認していきましょう">}}

{{<nextArrow>}}

{{<appscreen filename="select1-preview"  title="選択式の入力画面イメージ">}}

右のフォームは「プルダウン式」です。検索で選択肢を絞り込んでいます。

### 単語の色分け{#color}

単語を色分けする場合は単語の後ろに###色名をつけてください。  
例:

- りんご###red
- ぶどう###blue

正しく設定されているかはプレビューを見て確認してください。

{{<appscreen filename="word-color-coding"  title="選択肢の単語を色分けで表示する">}}

{{<alice pos="right" icon="here">}}シャープは半角です！#と＃、そっくりなので注意{{</alice>}}

使用可能な色は以下のとおりです。

<dl class="basic">
<dt>red</dt>
<dd style="color:red">■これはサンプルです</dd>
<dt>pink</dt>
<dd style="color:pink">■これはサンプルです</dd>
<dt>purple</dt>
<dd style="color:purple">■これはサンプルです</dd>
<dt>indigo</dt>
<dd style="color:indigo">■これはサンプルです</dd>
<dt>blue</dt>
<dd style="color:blue">■これはサンプルです</dd>
<dt>cyan</dt>
<dd style="color:cyan">■これはサンプルです</dd>
<dt>teal</dt>
<dd style="color:teal">■これはサンプルです</dd>
<dt>green</dt>
<dd style="color:green">■これはサンプルです</dd>
<dt>lime</dt>
<dd style="color:lime">■これはサンプルです</dd>
<dt>orange</dt>
<dd style="color:orange">■これはサンプルです</dd>
<dt>brown</dt>
<dd style="color:brown">■これはサンプルです</dd>
<dt>gray</dt>
<dd style="color:gray">■これはサンプルです</dd>
</dl>

## 選択式入力フォームの集計{#subtotal}

選択式フォームは集計・グラフ化が可能です。単語が選ばれた回数を自動集計し、円グラフや棒グラフとして表示できます。

{{<appscreen filename="pie-charts" title="単語の出現回数をカウントして円グラフを生成する">}}

選択式の単語に数字が含まれていれば**数値として集計**やグラフ化できます。
たとえば次のような選択肢は集計もグラフ化もできます。
{{<appscreen filename="num-select"  title="選択肢は単語ですが数値に置き換えてグラフ化することも可能です"   >}}

## データをCSVに出力{#csv}

出力形式を変えることができます。
{{<btnCenter "/docs/manual/analytics/csvoption/" "CSV出力オプション">}}

**列展開がON**の場合のCSV出力例

<div class="excelTable">

|=|A|B|C|D|E|F|G|H|I|
|---|---|---|---|---|---|---|---|---|---|
1|提出日|【軽自動車】使用車両|【乗用車】使用車両|【トラック】使用車両|【スクーター】使用車両|【十分にある】ガソリン残量|【半分を下回った】ガソリン残量|【四分の１を下回った】ガソリン残量|【給油が必要】ガソリン残量|業務報告
2|2023/06/11|-|○|-|-|-|-|-|○|
3|2023/06/10|○|-|-|-|○|-|-|-|
4|2023/06/09|-|○|-|-|-|○|-|-|
5|2023/06/08|-|-|-|○|○|-|-|-|
6|2023/06/07|-|○|-|-|-|○|-|-|

</div>

例えば使用車両という１つの項目に対して４列（B〜E列）展開していることがわかります。

**列展開がOFF**の場合のCSV出力例

<div class="excelTable">

|=|A|B|C|D|
|---|---|---|---|---|
1|提出日|使用車両|ガソリン残量|業務報告|
2|2023/06/11 09:04|乗用車|給油が必要|
3|2023/06/10 09:04|軽自動車|十分にある|
4|2023/06/09 09:04|乗用車|半分を下回った|
5|2023/06/08 09:04|スクーター|十分にある|
6|2023/06/07 09:04|乗用車|半分を下回った|

</div>
