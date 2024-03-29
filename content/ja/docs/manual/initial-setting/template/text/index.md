+++
description = "テンプレートカスタムパーツの1つ。本文や備考・引き継ぎといった文字入力エリアをレポートに追加できます"
tags = ["テンプレートパーツ", "テンプレート"]
title = "【文字入力】レポートテンプレートに追加"
menuTitle = "🧩文字入力"
toc = true
weight = 101001103
aliases = ["/manual/initial-setting/template/text/", "/manual/org/groupsetting/template/text/"]
images = []
+++

文字入力フォームはレポートにシンプルな文字の入力フォームを追加します。
改行を入れることで入力エリアが自動で広がります。

|[集計可否](/docs/manual/analytics/)|[CSV出力](/docs/manual/analytics/csv/)|[PDF出力](/docs/manual/read-report/pdf/)|[文字検索](/docs/manual/read-report/list/)|
|:---:|:---:|:---:|:---:|
|✗|○|○|○|

{{<icatch filename="input-method-keyboard" msg="レポートの本文や引 き継ぎの入力に最適" title="文字入力フォーム" fontsize="30px" alice="ok">}}

主な用途には次のようなものがあります。

- 業務報告内容
- 引き継ぎ内容
- 所感、備考欄

## 文字入力フォームをテンプレートに追加する{#add}

1. テンプレート編集画面を開く
1. フォームリストから文字入力をクリックして追加
1. 必要に応じて設定を行う

文字入力フォームの設定は以下の通り。

<dl class="basic">
  <dt>入力必須</dt>
  <dd>これがONの場合、レポート提出時に文字が空欄だとレポートが提出できなくなります</dd>
  <dt>初期値</dt>
  <dd>レポート新規作成時に最初から文字を入力済みにできます。不要の場合は空欄にしておきます</dd>
</dl>


共通設定事項については以下を参照してください。
{{<btnCenter "/docs/manual/initial-setting/template/make/#common_setting" "共通設定項目">}}

例えば次のようにテンプレートを編集しました
{{<appscreen filename="template-edit-text" title="テキスト入力をテンプレートに追加した画面イメージ">}}

{{<nextArrow>}}

実際に[レポートを書く](/docs/manual/write-report/write/)際は次のように表示されます。

{{<appscreen filename="text-preview" title="作成したテンプレートのプレビュー">}}
