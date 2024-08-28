+++
description = "グループ内のスタッフはレポートの提出先や利用可能なテンプレートの制限など様々な設定が可能です。本ページはグループ内スタッフの設定に関する操作ガイドです"
tags = ["スタッフアカウント管理", "要編集者権限"]
title = "グループ内のスタッフ管理"
menuTitle = "ℹ️概要"
toc = true
weight = 101001032
aliases = ["/docs/manual/initial-setting/staff-local/activity/"]
images = []
+++
 
 スタッフは組織から作成されて各グループに所属します。
 このセクションは**グループに所属しているスタッフの設定**をまとめています。
{{<info>}}
 組織上のスタッフについては[組織のスタッフ](/docs/manual/initial-setting/staff/manage/)を参照してください
{{</info>}}


---

グループ内スタッフの設定は以下の手順で開きます

1. メニュー「グループ設定」をクリック
2. 上部メニュー「スタッフ管理」をクリック

{{<icatch filename="staff-local" msg="グループに参加しているスタッフの一覧を見てみましょう" alice="pc">}}

スタッフリストの各部名称について。
<dl class="basic">
<dt>名前</dt>
<dd>スタッフの名前です。変更は組織のスタッフ管理にて</dd>
<dt><a href="/docs/manual/initial-setting/staff/rank/">権限</a></dt>
<dd>スタッフの権限。変更は組織のスタッフ管理から行います（グループ内スタッフ管理からは変更できません）</dd>
<dt>状態</dt>
<dd><ul><li>緑：有効</li><li>赤：無効</li></ul>変更は組織のスタッフ管理から行います（グループ内スタッフ管理からは変更できません）</dd>
<dt>E-mail</dt>
<dd>スタッフがログインに使用するメールアドレス</dd>
<dt><a href="/docs/manual/initial-setting/staff-local/dist/">提出先の指定</a></dt>
<dd>レポートの提出先をスタッフごとに制御可能です</dd>
<dt><a href="/docs/manual/initial-setting/staff-local/template/">テンプレートの制限</a></dt>
<dd>使用可能なテンプレートをスタッフごとに制御可能です</dd>
<dt>追放</dt>
<dd>グループからスタッフを追放します。アカウントの削除ではありません</dd>
<dt>重役</dt>
<dd>グループ内のすべてのレポートを閲覧可能になります</dd>
<dt><a href="/docs/manual/initial-setting/staff-local/share/">共用</a></dt>
<dd>１つのアカウントを複数人で使い回す際に使用します。応用的な設定のため基本的に非推奨です</dd>
</dl>



---

## スタッフの活動実績を見る{#activity}

スタッフが月に何件レポートを書いたか？といった活動状況を見ることができます。

1. グループ設定をクリック
1. スタッフ管理をクリック

{{<icatch filename="staff-activity" msg="スタッフの活動実績を月ごとに表示できます" alice="ok">}}

|名称|説明|
|---|---|
|[承認](/docs/manual/read-report/state/)|1ヶ月の間にレポートを承認した回数を表示します|
|棄却|1ヶ月の間にレポートを棄却した回数を表示します|
|レポート|1ヶ月の間に[レポートを作成](/docs/manual/write-report/)した回数を表示します|
|既読|1ヶ月の間にレポートを既読した回数を表示します|
|予定作成|1ヶ月の間に[予定を作成](/docs/manual/event/list/)した回数を表示します|
|予定完了|1ヶ月の間に予定を完了した回数を表示します|
|コメント|1ヶ月の間に[レポートや予定にコメント](/docs/manual/read-report/comment/)を書き込んだ回数を表示します|

## 活動実績の集計期間を変更する{#change_span}

集計する期間は1ヶ月単位で切替ができます。期間を変更するには日付の書かれたボタンをクリックします。

{{<icatch filename="change-span" msg="スタッフの活動実績集計期間を変更する">}}
