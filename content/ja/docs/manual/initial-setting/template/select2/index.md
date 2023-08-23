+++
description = "日報テンプレートカスタムパーツの1つ。一覧から選ぶだけで入力が可能なフォームを報告書に追加できます。複数個選ぶことが可能です。集計にも対応しています"
tags = ["語録機能", "集計可能フォーム", "日報構成部品", "テンプレート"]
title = "【選択式入力（複数回答）】を日報に追加"
menuTitle = "🧩選択式入力（複数回答）"
toc = true
weight = 101001105
aliases = ["/manual/initial-setting/template/select2/"]
images = []
+++


選択式入力（複）は次のようなフォームです。

<div class="list-group my-3" style="padding: 20px; border: 1px solid #ccc;">
  <div style="font-weight:bold">使用機材</div>
  <label class="mb-2">
    <input class="form-check-input me-2" type="checkbox" value="">
    のこぎり
  </label>
  <label class="mb-2">
    <input class="form-check-input me-2" type="checkbox" value="">
    金槌
  </label>
  <label class="mb-2">
    <input class="form-check-input me-2" type="checkbox" value="">
    かんな
  </label>
</div>

このような選択式フォームを報告書に追加できます。

{{<icatch filename="select2" msg="選ぶだけの簡単入力 色分けも可能" title="選択肢入力フォームのテンプレート例" fontsize="30px" alice="here">}}

回答を1つだけ選ぶ場合は「[選択肢入力フォーム（単）](/docs/manual/initial-setting/template/select/)」をご利用ください。

|[集計可否](/docs/manual/analytics/)|[CSV出力](/docs/manual/analytics/csv/)|[PDF出力](/docs/manual/read-report/pdf/)|
|:---:|:---:|:---:|
|○|○|○|

## フォームをテンプレートに追加する{#add}

1. テンプレート編集画面を開く
1. フォームリストから「選択肢」をクリックして追加
1. 選択式の単語を入力（重複・空行は自動で除去されます）
1. 必要に応じてその他の設定を行う

設定項目は「選択式入力フォーム（単回答）と同一です。

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


{{<appscreen filename="template-edit-select2" title="選択肢入力フォームを含んだ報告書の設計">}}

{{<nextArrow>}}
{{<appscreen filename="select2-preview"  title="選択式の入力画面イメージ">}}

選択肢の色分けについてはこちらに記載しています。やり方は同じです。

{{<btnCenter "/docs/manual/initial-setting/template/select/" "単語の色分け">}}

## CSV出力{#csv}

出力形式を変えることができます。
{{<btnCenter "/docs/manual/analytics/csvoption/" "CSV出力オプション">}}

**列展開がON**の場合のCSV出力例（長くなるためF列以降省略）

<div class="excelTable">

|=|A|B|C|D|E|F|
|---|---|---|---|---|---|---|
1|提出日|【のこぎり】使用機材|【金槌】使用機材|【かんな】使用機材|【タッカー】使用機材|【墨つぼ】使用機材
2|2023/06/11 11:37|-|○|○|-|-|-|-|-|○|-|-|○|
3|2023/06/10 11:37|-|○|○|○|-|-|-|○|○|○|-|-|
4|2023/06/09 11:37|○|-|-|-|-|○|-|-|-|-|○|○|
5|2023/06/08 11:37|○|○|○|-|○|-|-|-|○|○|○|○|作業報告内容を書く

</div>

**列展開がOFF**の場合のCSV出力例

<div class="excelTable">

|=|A|B|C|D|E|
|---|---|---|---|---|---|
1|提出日|使用機材|使用車両|不具合状況|業務報告
2|2023/06/11 11:37|"かんな 金槌"|トラックB|工具不足|
3|2023/06/10 11:37|"かんな 金槌 タッカー"|"トラックA トラックB"|遅延あり|
4|2023/06/09 11:37|のこぎり|軽トラックA|"機材不足 工具不足"|
5|2023/06/08 11:37|"かんな 金槌 のこぎり 墨つぼ"|トラックB|"遅延あり 機材不足 工具不足"|作業報告内容を書く

</div>
