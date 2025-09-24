+++
url = "/docs/manual/utils/log/"
aliases = ["/docs/manual/utils/log/"]
description = "日報の提出やコメント・承認など様々な変化をログとして蓄積します。ログデータは最低2年以上保存されます"
title = "📚ログデータ"
menuTitle = "📚ログデータ"
toc = true
weight = 59030
+++

{{< callout context="note" title="ログがメニューに無いときは[グループ設定](/docs/setup/setting-group/#optionalFunction)から機能を有効にしてください" icon="outline/info-circle" />}}

グループ内の様々な出来事はログデータとして自動保存されます。ログは改ざん防止のため**読み取り専用**であり、管理者であってもログの書き換えや削除はできません。
ログデータは2年以上保存されます。それを超えた古いログは一定期間ごとに削除されます。

### ログの取得対象{#target}

ログは以下のアクションに対して記録を残します

1. [タイムカードが削除](/docs/manual/timecard/list/#remove)されたとき
2. 日報や予定に[コメントが書かれた](/docs/manual/read-report/state/#comment)とき
3. 日報や予定からコメントが削除されたとき
4. [日報が削除](/docs/manual/read-report/removereport/)されたとき
5. [日報が作成されたとき](/docs/manual/write-report/write/)
6. 日報が既読・[承認](/docs/manual/read-report/state/#agree)・[棄却](/docs/manual/read-report/state/#reject)されたとき
7. 日報にタグがセット・解除されたとき
8. 予定が作成されたとき
9. 予定の状態が変化したとき
10. 予定にタグがセット・解除されたとき

特に削除に対するログは改ざん防止の意味でも抑止力となります。
