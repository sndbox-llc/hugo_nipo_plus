+++
url = "/docs/setup/staff-local/_about/"
aliases = ["/docs/manual/initial-setting/staff-local/_about/"]
title = "🔑 グループ内のスタッフ管理：チームごとの詳細設定"
menuTitle = "ℹ️概要"
description = "NipoPlusのグループ内でスタッフの役割を詳細に設定する方法を解説します。レポートの提出先固定、使用可能テンプレートの制限など、チームごとの柔軟な運用を可能にする設定について学びましょう。組織全体のスタッフ管理との違いも明確に説明します。"
toc = true
weight = 10601
tags = ["スタッフ管理", "編集者権限"]
contributors = []
+++

このページでは、NipoPlusの**特定のグループ内**におけるスタッフの管理方法について解説します。
スタッフは、まず[組織全体にアカウントが作成](/docs/setup/staff-global/make/)され、その後各グループに所属します。

---

## 1. 組織のスタッフ管理との違いを理解しよう {#distinction}

NipoPlusには「**組織のスタッフ管理**」と「**グループ内のスタッフ管理**」の2種類があります。この違いを理解することが、適切な設定を行う上で最も重要です。

<dl class="basic">
<dt>組織のスタッフ管理</dt>
<dd>
    NipoPlusに登録されている<strong>会社全体のスタッフ</strong>を管理する場所です。<a href="/docs/setup/staff-global/manage/">[こちらを参照]</a>
    <ul>
        <li><strong>アカウントの新規作成・削除</strong></li>
        <li><strong>スタッフの権限変更（管理者・編集者など）</strong></li>
        <li><strong>スタッフの基本情報（名前・E-mail）の変更</strong></li>
        <li>アカウントの有効/無効の切り替え</li>
        <li>API利用設定</li>
    </ul>
    これらは<strong>組織全体に関わる設定</strong>であり、<strong>組織のスタッフ管理画面からのみ行えます</strong>。
</dd>
<dt>グループ内のスタッフ管理（本ページで解説）</dt>
<dd>
    特定のグループに所属しているスタッフを管理する場所です。
    ここでは、<strong>そのグループ内でのみ適用される、より詳細なルールや機能の制御</strong>を行います。
    <ul>
        <li><strong>グループからのスタッフの追放</strong></li>
        <li><strong>レポートの提出先を固定</strong></li>
        <li><strong>使用可能なテンプレートを制限</strong></li>
        <li>グループ内の全てのレポート閲覧権限（重役設定）</li>
        <li>共用アカウントの設定</li>
        <li>グループ内でのスタッフの活動実績確認</li>
    </ul>
    このページで解説する操作は、<a href="/docs/setup/staff-global/rank/">編集者権限</a>以上のスタッフが行えます。
</dd>
</dl>

## 2. グループに所属しているスタッフを確認しよう {#showStaffList}

まずは、現在設定を行いたいグループに所属しているスタッフの一覧を確認しましょう。

1.  NipoPlusにログイン後、左メニューから「**グループ設定**」をクリックします。
2.  上部メニュー（またはグループ設定画面内）の「**スタッフ管理**」をクリックします。

{{<icatch filename="img/staff-local" msg="この画面では、現在選択しているグループに参加しているスタッフの一覧を確認できます。各スタッフのグループ内での設定をここで行います。" alice="pc">}}

### スタッフリストの項目解説

表示されるスタッフリストの各項目についてご説明します。

<dl class="basic">
<dt>名前</dt>
<dd>スタッフの名前です。<strong>名前の変更は<a href="/docs/setup/staff-global/manage/#change_staff_data">組織のスタッフ管理</a>から行います</strong>。</dd>
<dt><a href="/docs/setup/staff-global/rank/">権限</a></dt>
<dd>スタッフの権限（管理者、編集者、スタッフなど）です。<strong>権限の変更は<a href="/docs/setup/staff-global/manage/#change_staff_data">組織のスタッフ管理</a>から行います</strong>。</dd>
<dt>状態</dt>
<dd>スタッフアカウントの状態（有効：緑 / 無効：赤）を示します。<strong>有効/無効の変更は<a href="/docs/setup/staff-global/manage/#disable">組織のスタッフ管理</a>から行います</strong>。</dd>
<dt>E-mail</dt>
<dd>スタッフがログインに使用するメールアドレスです。</dd>
<dt><a href="/docs/setup/staff-local/dist/">提出先の指定</a></dt>
<dd>
    スタッフが日報を作成する際のレポート提出先を、事前に固定・設定できます。
    これにより、スタッフが提出先を毎回選ぶ手間が省け、誤提出を防ぎます。
</dd>
<dt><a href="/docs/setup/staff-local/template/">テンプレートの制限</a></dt>
<dd>
    スタッフがこのグループで利用できるテンプレートの種類を制限できます。
    例えば、「一般スタッフは特定のテンプレートしか使えない」といった運用が可能です。
</dd>
<dt>追放</dt>
<dd>
    このグループからスタッフを追放します。これはアカウントの削除ではなく、<strong>このグループへのアクセス権を失効させるだけです</strong>。
    アカウントそのものを削除するには、<a href="/docs/setup/staff-global/make/#remove">組織設定からスタッフアカウントの削除</a>を行う必要があります。
</dd>
<dt>重役</dt>
<dd>
    この設定をONにすると、そのスタッフは<strong>グループ内のすべてのレポートを閲覧可能</strong>になります。
    通常は<a href="/docs/manual/write-report/dist/">提出先か共有先</a>に名前がないとレポートは閲覧できませんが、重役設定はこれらの制約をバイパスします。
</dd>
<dt><a href="/docs/setup/staff-local/share/">共用</a></dt>
<dd>
    1つのアカウントを複数人で使い回す際に使用する設定です。応用的な設定のため基本的に非推奨ですが、特定の環境下で活用できます。
</dd>
</dl>

## 3. スタッフの活動実績を確認しよう {#activity}

このセクションでは、グループ内で各スタッフがどれくらい活動しているか、その実績を月ごとに確認できます。

1.  左メニューから「**グループ設定**」をクリックします。
2.  上部メニュー（またはグループ設定画面内）の「**スタッフ管理**」をクリックします。
3.  画面下部にある活動実績の表を確認します。

{{<icatch filename="img/staff-activity" msg="各スタッフがその月に何件のレポート作成や承認などを行ったか、活動実績を一覧で確認できます。" alice="ok">}}

### 活動実績の項目解説

<dl class="basic">
<dt><a href="/docs/manual/read-report/state/#agree">承認</a></dt>
<dd>1ヶ月の間にレポートを承認した回数を表示します。</dd>
<dt><a href="/docs/manual/read-report/state/#reject">棄却</a></dt>
<dd>1ヶ月の間にレポートを棄却した回数を表示します。</dd>
<dt><a href="/docs/manual/write-report/write/">レポート</a></dt>
<dd>1ヶ月の間にレポートを作成した回数を表示します。</dd>
<dt><a href="/docs/manual/read-report/state/#readed">既読</a></dt>
<dd>1ヶ月の間にレポートを既読した回数を表示します。</dd>
<dt><a href="/docs/manual/event/list/">予定作成</a></dt>
<dd>1ヶ月の間に予定を作成した回数を表示します。</dd>
<dt>予定完了</dt>
<dd>1ヶ月の間に予定を完了済みにした回数を表示します。</dd>
<dt><a href="/docs/manual/read-report/state/#comment">コメント</a></dt>
<dd>1ヶ月の間にレポートや予定にコメントを書き込んだ回数を表示します。</dd>
</dl>

集計する期間は1ヶ月単位で切り替えができます。期間を変更するには、日付が書かれたボタンをクリックしてください。

---

## 4. グループの管理画面からスタッフを作成する（管理者のみ） {#createStaff}

通常は[組織のスタッフ管理画面](/docs/setup/staff-global/make/)からスタッフを作成しますが、**[管理者権限](/docs/setup/staff-global/rank/)がある場合に限り**、このグループ管理画面からもスタッフを作成することが可能です。

グループ管理画面からスタッフのアカウントを作成しても、自動で組織上にも登録されます。

{{<iTablet filename="img/makeStaff" msg="グループ管理画面からも新しいスタッフアカウントを作成できます。管理者権限がある場合にご利用ください。" alice="pc">}}

詳細な項目説明については[組織設定のスタッフ作成ガイド](/docs/setup/staff-global/make/#create_account_one)をご覧ください。

---
