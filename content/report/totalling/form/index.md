+++
title = "集計が可能な入力フォーム"
# description = "チャプター"
tags = ["日報テンプレート", "入力フォーム", "日報の集計"]
weight = 10
+++

NipoPlusでは様々な入力フォームを使って日報テンプレートを作成できますが、以下の入力フォームは集計機能に対応しています。

- [選択肢（単）フォーム](/org/groupsetting/template/select/)
- [選択肢（複）フォーム](/org/groupsetting/template/select2/)
- [選択肢（階層）フォーム](/org/groupsetting/template/selectcalc/)
- [期間入力フォーム](/org/groupsetting/template/datetimes/)
- [数値入力フォーム](/org/groupsetting/template/math/)
- [スライダ入力フォーム](/org/groupsetting/template/step/)
- [レート入力フォーム](/org/groupsetting/template/rate/)

入力フォームの種類によって2つの集計方式に分類できます。

|名称|説明|
|---|---|
|数値を合計する集計|スライダや数値など、**データを足し算できる**ものがこちらに分類されます。日付と時刻についてはこちらに分類されます|
|個数をカウントする集計|選択肢やレートなどのように文字のデータで、**回数を数えられる項目**がこちらに分類されます|

集計可能な入力フォームのイメージ

{{<imgproc icatch.png Resize "1200x" "集計が可能な入力フォーム" />}}
