+++
url="/docs/manual/initial-setting/staff-local/_about/"
description = "グループ内のスタッフはレポートの提出先や利用可能なテンプレートの制限など様々な設定が可能です。本ページはグループ内スタッフの設定に関する操作ガイドです"
# tags = ["スタッフアカウント管理", "要編集者権限"]
title = "グループ内のスタッフ管理"
menuTitle = "ℹ️概要"
toc = true
weight = 131
# aliases = []
# images = []
+++

スタッフは[組織から作成](/docs/manual/initial-setting/staff/make/)されて各グループに所属します。

{{< callout context="note" title="Note" icon="outline/info-circle" >}}
組織上のスタッフについては[組織のスタッフ](/docs/manual/initial-setting/staff/manage/)を参照してください
{{< /callout >}}

---

## グループに所属しているスタッフを確認する{#showStaffList}

グループ内スタッフの設定は以下の手順で開きます

1. メニュー「グループ設定」をクリック
2. 上部メニュー「スタッフ管理」をクリック

{{<icatch filename="staff-local" msg="グループに参加しているスタッフの一覧を見てみましょう" alice="pc">}}

スタッフリストの各部名称について。

<dl class="basic">
<dt>名前</dt>
<dd>スタッフの名前です。<a href="/docs/manual/initial-setting/staff/manage/#change_staff_data">名前の変更は組織のスタッフ管理</a>から行います</dd>
<dt><a href="/docs/manual/initial-setting/staff/rank/">権限</a></dt>
<dd>スタッフの権限です。<a href="/docs/manual/initial-setting/staff/manage/#change_staff_data">権限の変更は組織のスタッフ管理</a>から行います。</dd>
<dt>状態</dt>
<dd><ul><li>緑：有効</li><li>赤：無効</li></ul>変更は組織のスタッフ管理から行います</dd>
<dt>E-mail</dt>
<dd>スタッフがログインに使用するメールアドレス</dd>
<dt><a href="/docs/manual/initial-setting/staff-local/dist/">提出先の指定</a></dt>
<dd>レポートの提出先をスタッフごとに制御可能です</dd>
<dt><a href="/docs/manual/initial-setting/staff-local/template/">テンプレートの制限</a></dt>
<dd>使用可能なテンプレートをスタッフごとに制御可能です</dd>
<dt>追放</dt>
<dd>グループからスタッフを追放します。アカウントの削除ではなく、このグループへのアクセス権を失効させるだけです。アカウントを削除するには組織設定から<a href="/docs/manual/initial-setting/staff/make/#remove">スタッフアカウントの削除</a>を行う必要があります。</dd>
<dt>重役</dt>
<dd>グループ内のすべてのレポートが閲覧可能になります。通常は<a href="/docs/manual/write-report/dist/">提出先か共有先</a>に名前が無いとレポートが閲覧できませんが、重役はこれらの制約をバイパスします。</dd>
<dt><a href="/docs/manual/initial-setting/staff-local/share/">共用</a></dt>
<dd>１つのアカウントを複数人で使い回す際に使用します。応用的な設定のため基本的に非推奨です</dd>
</dl>

---

## スタッフの活動実績を見る{#activity}

スタッフが月に何件レポートを書いたか？といった活動状況を見ることができます。

1. グループ設定をクリック
1. スタッフ管理をクリック

{{<icatch filename="staff-activity" msg="スタッフの活動実績を月ごとに表示できます" alice="ok">}}

<dl class="basic">
  <dt><a href="/docs/manual/read-report/state/#agree">承認</a></dt>
  <dd>1ヶ月の間にレポートを承認した回数を表示します</dd>

  <dt><a href="/docs/manual/read-report/state/#reject">棄却</a></dt>
  <dd>1ヶ月の間にレポートを棄却した回数を表示します</dd>

  <dt><a href="/docs/manual/write-report/write/">レポート</a></dt>
  <dd>1ヶ月の間にレポートを作成した回数を表示します</dd>

  <dt><a href="/docs/manual/read-report/state/#readed">既読</a></dt>
  <dd>1ヶ月の間にレポートを既読した回数を表示します</dd>

  <dt><a href="/docs/manual/event/list/">予定作成</a></dt>
  <dd>1ヶ月の間に予定を作成した回数を表示します</dd>

  <dt>予定完了</dt>
  <dd>1ヶ月の間に予定を完了した回数を表示します</dd>

  <dt><a href="/docs/manual/read-report/state/#comment">コメント</a></dt>
  <dd>1ヶ月の間にレポートや予定にコメントを書き込んだ回数を表示します</dd>
</dl>

集計する期間は1ヶ月単位で切替ができます。期間を変更するには日付の書かれたボタンをクリックします。

## グループの管理画面からスタッフを作成する{#createStaff}

通常は組織管理画面からスタッフを作成しますが、[管理者権限](/docs/manual/initial-setting/staff/rank/)がある場合に限り、グループ管理画面からスタッフの作成が可能です。
グループ管理画面からスタッフのアカウントを作成しても、自動で組織上にも登録されます。

{{<iTablet filename="makeStaff" msg="グループ画面からもスタッフ作成が可能です" alice="pc">}}

詳細な項目説明については[組織設定のスタッフ作成ガイド](/docs/manual/initial-setting/staff/make/#create_account_one)を御覧ください。
