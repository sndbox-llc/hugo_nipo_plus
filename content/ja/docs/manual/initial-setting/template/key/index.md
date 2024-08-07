+++
description = "テンプレート内の入力フォームを削除する方法と、誤って削除した際の復旧方法について"
tags = ["テンプレート"]
title = "フォームの削除と復旧手順"
menuTitle = "削除と復旧"
toc = true
weight = 101001120
aliases = []
images = []
code = true
+++

## 入力フォームを1件削除する{#remove}

テンプレートの中の項目は、不要になった際削除することができます。
仮に次のようなテンプレートがあったとしましょう。

{{<icatch filename="pre-report" msg="例えばこのテンプレートから「業務報告」を消したいとします">}}

ここから「業務報告」を削除したいときは、テンプレート編集から「業務報告」のゴミ箱アイコンをクリックして削除できます。

{{<icatch filename="field-delete" msg="レポートテンプレートから不要な入力フォームを削除してみましょう" alice="guide">}}

これで削除が完了しました。

### フォームの削除は過去のレポートにさかのぼって適用されます{#warning}

テンプレートのデータとレポートの本文データは分けて管理されます。
テンプレートデータから枠組みを生成し、そこにレポートの本体データを流し込むことでレポートを画面に表示します。
つまりテンプレートから**フォームを消すと過去のレポートで書かれたフォームも表示されない**ことになります。

{{<icatch filename="invisible" msg="過去に提出されたレポートからも削除したフォームが消えることに注意" alice="here">}}

業務報告の内容は表示されないだけでデータとしては残っています。Rawデータから確認することができます。
Rawデータは「詳細情報」「生データを表示」の順にクリックして表示できます。

{{<icatch filename="raw-data" msg="入力フォームを削除してもRawデータにはデータが残ります">}}

RawデータはJSONと呼ばれる形式で保存されます。JSONの仕組みはとてもシンプルで、"キー名": "実データ"の形式で表現します。

```javascript
{
  "UR4": "これは本文です",
  "idn": 4,
  "tjz": "晴れ"
}
```

「UR4」というキー名が今回削除した「業務報告」のデータを示していることが推測できますね。このようにフィールドを削除しても実データとしては残っています。

## 削除したフィールドを復元する際は同じキー名で{#key}

注意！キーを誤って設定してしまうと予期せぬ動作を招く恐れがあるため**本ページで解説している内容は十分注意**して操作してください。

誤ってフィールドを削除してしまった場合、同じフィールド名で追加してもキー名はランダムで決まるのでこれでは不十分です。
同じ入力フォーム形式で、かつ同じキー名を設定する必要があります。

今回は業務報告を復旧させると仮定します。業務報告は先程のRawデータから「UR4」であることが判明しています。この値をメモしておいてください。
（実際の作業ではキー名はその時にあわせて適切なものを使用してください）

具体的な手順としては次のとおりです。

1. 削除前と同じ入力フォームを追加する
1. スパナアイコンをクリック
1. 控えていたキー名を入力

{{<icatch filename="edit-key" msg="レポートテンプレートのKeyを手動で書き換えることで削除したフォームを復旧できます" alice="shield">}}

最後にテンプレートを保存してください。これで誤って削除した入力フォームが完全な形で復元できました。

### キーについての補足{#hint}

キーはテンプレートを編集する際自動で割り当てられるランダムな文字列で、3桁から5桁で表現されます。通常の利用ではキーを手動で操作したり、そもそも存在を意識することすらありません。
今回のように誤ってフォームを削除してしまった場合にのみ利用します。
1つのテンプレート内に同じキーは存在しません。**同じキーが複数あると挙動がおかしくなる**ため、手動で設定する際は注意してください。
また、反復入力フォームは少し特殊ですがキーの中に更にキーを持っています。
