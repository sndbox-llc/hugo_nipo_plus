+++
description = "テンプレートカスタムパーツの1つ。本文や備考・引き継ぎといった文字入力エリアをレポートに追加できます"
tags = ["テンプレートパーツ", "テンプレート"]
title = "文字入力フォーム"
menuTitle = "🧩文字入力"
toc = true
weight = 101001103
aliases = []
images = []
+++

文字入力フォームはレポートにシンプルな文字の入力フォームを追加します。  
改行を入れることで入力エリアが自動で広がります。

|[集計可否](/docs/manual/analytics/)|[CSV出力](/docs/manual/analytics/csv/)|[PDF出力](/docs/manual/read-report/pdf/)|[文字検索](/docs/manual/read-report/list/)|
|:---:|:---:|:---:|:---:|
|✗|⭕|⭕|⭕|

{{<icatch filename="input-method-keyboard" msg="文字入力フォームはレポートの本文や引き継ぎの入力に最適" alice="ok">}}





1. テンプレート編集画面を開く
2. フォームリストから文字入力をクリックして追加
3. 必要に応じて設定を行う

{{<icatch filename="template-edit-text" msg="テキスト入力をテンプレートに追加した画面イメージです" alice="here">}}


実際に[日報を書く際の入力イメージ](/docs/manual/write-report/parts/#text)はこちらから確認できます。

<details>
  <summary>詳細設定</summary>

<dl class="basic">
  <dt>入力必須</dt>
  <dd>これがONの場合、レポート提出時に文字が空欄だとレポートが提出できなくなります</dd>
  <dt>初期値</dt>
  <dd>レポート新規作成時に最初から文字を入力済みにできます。不要の場合は空欄にしておきます</dd>
</dl>

補足:[共通設定事項](/docs/manual/initial-setting/template/make/#common_setting)

</details>


