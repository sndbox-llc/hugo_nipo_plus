+++
url = "/docs/manual/initial-setting/template/text/"
# aliases = ["/docs/manual/initial-setting/template/text/"]
title = "文字入力フォーム"
menuTitle = "🧩文字入力"
description = "テンプレートカスタムパーツの1つ。本文や備考・引き継ぎといった文字入力エリアをレポートに追加できます"
toc = true
weight = 10702
tags = ["テンプレートパーツ", "テンプレート"]
contributors = []
+++

文字入力フォームはレポートにシンプルな文字の入力フォームを追加します。
改行を入れることで入力エリアが自動で広がります。

{{< callout context="note" title="入力画面" icon="outline/info-circle" >}}
[文字入力フォームの入力画面](/docs/manual/write-report/parts/#text)はこちらから確認できます
{{< /callout >}}

| [集計可否](/docs/manual/analytics/) | [CSV出力](/docs/manual/analytics/csv/) | [PDF出力](/docs/manual/read-report/state/#pdf_export) | [文字検索](/docs/manual/read-report/list/#searchFunction) |
| :---------------------------------: | :------------------------------------: | :---------------------------------------------------: | :-------------------------------------------------------: |
|                  ✗                  |                   ⭕                   |                          ⭕                           |                            ⭕                             |

{{<icatch filename="img/input-method-keyboard" msg="文字入力フォームはレポートの本文や引き継ぎの入力に最適だよ" alice="ok">}}

## 追加の手順{#addForm}

1. テンプレート編集画面を開く
2. フォームリストから文字入力をクリックして追加
3. 必要に応じて設定を行う

{{<icatch filename="img/template-edit-text" msg="テキスト入力をテンプレートに追加した画面イメージです" alice="here">}}

## 設定{#settings}

<dl class="basic">
  <dt>入力必須</dt>
  <dd>これがONの場合、レポート提出時に文字が空欄だとレポートが提出できなくなります</dd>
  <dt>初期値</dt>
  <dd>レポート新規作成時に最初から文字を入力済みにできます。不要の場合は空欄にしておきます</dd>
  <dt>リンクを有効にする</dt>
  <dd>文字の中にURLが含まれる場合、自動でハイパーリンクに変換します</dd>
</dl>

補足:[共通設定事項](/docs/manual/initial-setting/template/make/#common_setting)
