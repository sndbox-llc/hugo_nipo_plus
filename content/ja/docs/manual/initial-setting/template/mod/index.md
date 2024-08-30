+++
description = "商品在庫入力フォームを使うことで日報アプリでありながら簡易的な在庫管理が可能になります。"
tags = ["テンプレートパーツ", "テンプレート"]
title = "商品在庫入力フォーム"
menuTitle = "🧩商品在庫入力"
toc = true
weight = 101001118
aliases = []
images = []
+++


商品入力フォームは予め[登録しておいた商品](/docs/manual/initial-setting/advanced-setting/point/#add)を対象に、レポート内で入出庫の入力をすることで数量の増減管理ができるフォームです。  
また、「状態」の管理も可能です。

## 商品在庫入力フォームを追加{#setting}

テンプレートの入力フォーム一覧から「在庫」を追加してください。

{{<icatch filename="modFormAdd" msg="テンプレートの編集画面から在庫フォームをクリックして追加します">}}


商品入力フォームを使うには予め商品データを登録しておく必要があります。詳しくは[商品登録](/docs/manual/initial-setting/advanced-setting/point/)についてを参照してください。  
[実際の入力イメージ](/docs/manual/write-report/parts/#item)はこちらからご確認ください。



## レポートを受け取る{#receive}

商品入力フォームを含んだレポートは次のように表示されます。

{{<icatch filename="itemReport" msg="レポートを受け取ったときの画面イメージ">}}

在庫が増えた場合は＋、減った場合はーで表示されます。
今現在の在庫総数はレポート上には表示されませんが、「詳細を見る」ボタンをクリックすることで確認が可能です。
[在庫推移についてはこちら](/docs/manual/initial-setting/advanced-setting/point/#stackLog)も参照して下さい

NipoPlusはレポート管理が主となるため、在庫管理については必要最低限の機能しかありません。例えば締めといった機能や概念はありません。大まかに数量を把握したい場合はおすすめできますが、厳密な管理には不向きです。

