+++
description = "スタッフのアカウントを作成・管理します。1ユーザにつき1アカウントが割り当てられスタッフ同士で日報のやり取りやコメントの読み書きができます"
menuTitle = "スタッフの権限"
menuPre = "<b>1-1. </b>"
tags = []
title = "スタッフアカウントの権限"
toc = false
weight = 11
reqMermaid = true
+++

スタッフアカウントを作る前に、アカウントの権限について確認しておきましょう。
スタッフごとに権限の強さを設定できます。

|権限|概要|
|---|---|
|管理者|最低でも組織内に1名以上必須です。最も高い権限を有します。[**グループの新規作成**](/manual/initial-setting/groupsetting/make/)・[グループ削除](/manual/remove/group/)・[スタッフの新規作成](/manual/initial-setting/staff/make/)・[スタッフアカウントの削除](/manual/remove/staff/)などは管理者しか実行できません|
|編集者|組織配下のグループ内の[日報テンプレートを作成](/manual/initial-setting/groupsetting/template/make/)したり、スタッフの[日報提出先を指定](/manual/initial-setting/group2/dist/)、スタッフの追放といった操作が可能です。|
|スタッフ|[日報の作成](/manual/report/write/)や[タイムカードの打刻](/manual/timecard/input/)、[コメントの書き込み](/manual/report/read/comment/)など一般的な操作が可能ですが、[グループの設定](/manual/initial-setting/groupsetting/)に関することはほとんど制限されます|
|書き込みのみ|[日報の作成](/manual/report/write/)と自分の書いた日報の閲覧、修正のみ可能です。|
|ゲスト|[日報の作成](/manual/report/write/)のみ可能です。（※この権限は外部の利用者に何かしらの目的で日報を書いてもらうことを想定しており、用途としては限定的なものになります）|


{{%expand "より詳細な権限について"%}}

組織全体に関するスタッフごとの権限は以下のとおりです。

|組織全体の権限表|管理者|編集者|スタッフ|書き込みのみ(ゲスト)|
|---|---|---|---|---|
|[スタッフの作成](/manual/initial-setting/staff/make/)|可|不可|不可|不可|
|[スタッフの編集](/manual/initial-setting/staff/manage/)|可|不可|不可|不可|
|[グループ作成](/manual/initial-setting/groupsetting/make/)|可|不可|不可|不可|
|[グループ設定](/manual/initial-setting/groupsetting/)|可|可|不可|不可|
|グループ削除|可|不可|不可|不可|

各グループごとの権限は以下のとおりです。  
なお**グループに所属していない場合は一切のアクセス権が有りません**。

|グループ内の権限表|管理者|編集者|スタッフ|書き込みのみ|
|---|---|---|---|---|
|[グループの設定](/manual/initial-setting/groupsetting/)|可|可|不可|不可|
|[タイムカードの作成](/manual/timecard/input/)|可|可|可|可|
|タイムカードの削除|可|可|不可|不可|
|タイムカードの修正|可|可|可|可|
|[タイムカードの設定](/manual/timecard/setting/)|可|可|不可|不可|
|タイムカードログの確認(他者)|可|可|不可|不可|
|[タグの作成・編集](/manual/initial-setting/groupsetting/tag/)|可|可|不可|不可|
|[タスクの作成・削除](/manual/task/add/)|可|可|可|不可|
|[活動ログデータの確認](/manual/initial-setting/group2/log/)|可|可|可|不可|
|[語録の作成](/manual/initial-setting/group2/goroku/)|可|可|不可|不可|
|語録の削除|可|可|不可|不可|
|語録の修正|可|可|可|可|
|[商品データの作成](/manual/initial-setting/group2/point/)|可|可|不可|不可|
|商品データの編集|可|可|可|可|
|日報PDF出力の設定|可|可|可|不可|
|[日報テンプレートの作成・編集](/manual/initial-setting/groupsetting/template/)|可|可|不可|不可|
|[日報の閲覧](/manual/report/read/)|可|可変|可変|可変|
|[日報の作成](/manual/report/write/)|可|可|可|可|
|日報の修正・削除|可変|可変|可変|可変|
|[日報提出先の強制指定](/manual/initial-setting/group2/dist/)|可|可|不可|不可|
|日報連番のリセット|可|可|不可|不可|

{{% /expand%}}

日報テンプレートやグループの設定など、全体に影響を与える設定を変更できるのは編集者以上になります。
無用なトラブルを減らすためにも、**管理者や編集者は必要最小限**にし、多くは「**スタッフ権限**」にしておくことを推奨します。


## 次の記事

{{% children description="true" containerstyle="dl" style="dt" %}}
