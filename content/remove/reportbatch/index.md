+++
title = "日報の一括削除"
draft = false
tags = ["日報", "管理者権限"]
weight = 80
+++

## グループ内の日報をまとめて削除

この機能は**管理者の権限が必要**です。

1. グループ設定をクリック
1. 日報一括削除をクリック

{{<imgproc delete.png Resize "1200x" "一括削除画面を開く" />}}

様々な条件を指定して日報を検索し、まとめて削除できます。
設定項目は次のとおりです

|名称|説明|
|---|---|
|日報の状態|未読・あなた宛の日報・あなたの承認を待っている日報・新規・承認・棄却・修正・進行から選択|
|タグ|日報にセットされているタグから絞り込み|
|本文検索|日報の本文に含まれる文字から検索できます。|
|日報テンプレート|特定のテンプレートだけを抽出したいときに指定します|
|提出者|特定の日報作成者が書いた日報だけを抽出したいときに指定します|
|期間|日報の提出日時で抽出します|
|並び順のキー|日報上の日付・サーバに保存された日・更新日・提出者ID・状態・テンプレートIDから並び順を指定できます。初期値は「サーバに保存された日」です|

{{<imgproc search.png Resize "1200x" "日報を検索する" />}}

条件がセットされていないものは無視されます。一切条件をつけずに検索を行うと全ての日報を取得できます。

## 検索したリストから削除する日報を選んで削除する

条件を入力して検索ボタンを押すと、条件に一致した日報が一覧で表示されます。ここから不要な日報にチェックを入れて行きます。

1. 検索条件を指定し、検索ボタンを押下
1. 条件に一致した日報が表示される
1. 削除する日報にチェックを入れる
1. 選択した日報を削除ボタンを押下

{{<imgproc choose.png Resize "1200x" "削除する日報を選択する" />}}

削除前に内容が確認したい場合は、「詳細」ボタンをクリックしてください。画面はそのままにポップアップウインドウが表示され、日報の内容が確認できます。

## 日報削除時の注意事項

1. 一度削除した日報は復元できません
1. 日報に紐付けられたコメントも同時に削除されます
1. 日報の集計機能を使った**集計の結果が変わる**可能性があります
1. 完全にデータベース上から削除されるまでに10秒ほどの**遅延が発生する場合**があります