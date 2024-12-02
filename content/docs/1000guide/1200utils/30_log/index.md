+++
url = "/docs/manual/utils/log/"
title = "📚ログデータ"
description = "レポートの提出やコメント・承認など様々な変化をログとして蓄積します。ログデータは最低2年以上保存されます"
toc = true
weight = 1230
# tags = []
+++

{{< callout context="note" title="Note" icon="outline/info-circle" >}}
ログがメニューに無いときは[グループ設定](/docs/manual/initial-setting/setting-group/#optionalFunction)から機能を有効にしてください
{{< /callout >}}

グループ内の様々な出来事はログデータとして自動保存されます。ログは改ざん防止のため**読み取り専用**であり、管理者であってもログの書き換えや削除はできません。
ログデータは2年以上保存されます。それを超えた古いログは一定期間ごとに削除されます。

### ログの取得対象{#target}

ログは以下のアクションに対して記録を残します

1. [タイムカードが削除](/docs/manual/remove/timecard/)されたとき
1. レポートや予定に[コメントが書かれた](/docs/manual/read-report/state/#comment)とき
1. レポートや予定からコメントが削除されたとき
1. [レポートが削除](/docs/manual/remove/report/)されたとき
1. [レポートが作成されたとき](/docs/manual/write-report/write/)
1. レポートが既読・[承認](/docs/manual/read-report/state/#agree)・[棄却](/docs/manual/read-report/state/#reject)されたとき
1. レポートにタグがセット・解除されたとき
1. 予定が作成されたとき
1. 予定の状態が変化したとき
1. 予定にタグがセット・解除されたとき

特に削除に対するログは改ざん防止の意味でも抑止力となります。
