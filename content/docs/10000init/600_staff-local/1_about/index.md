+++
url = "/docs/setup/staff-local/_about/"
aliases = ["/docs/manual/initial-setting/staff-local/_about/"]
title = "グループ内のスタッフ管理"
menuTitle = "👤グループ内のスタッフ管理"
description = "NipoPlusのグループ内でスタッフの役割を詳細に設定する方法を解説します。日報の提出先固定、使用可能テンプレートの制限など、チームごとの柔軟な運用を可能にする設定について学びましょう。組織全体のスタッフ管理との違いも明確に説明します。"
toc = true
weight = 10601
tags = ["スタッフ管理", "編集者権限"]
+++

{{< callout context="caution" title="[組織のスタッフ管理についてはこちら](/docs/setup/staff-global/make/)です" icon="outline/info-triangle" />}}

{{< callout context="caution" title="この設定には[編集者権限以上](/docs/setup/staff-global/rank/#manager)が必要です" icon="outline/info-triangle" />}}

グループ内のスタッフ管理では、特定グループの中に所属しているスタッフの各種設定を行うことができます。  
[組織設定からグループへの所属](<(/docs/setup/staff-global/make/)>)させることができます。  
グループ内のスタッフ管理は、「日報の提出先固定」や「重役の設定」など、そのグループ内でのみ適用（複数グループに所属しても他のグループに影響しない）される詳細な設定が可能です。

---

## 組織のスタッフ管理との違いを理解しよう {#distinction}

スタッフ管理には類似した名称で「**組織のスタッフ管理**」と「**グループ内のスタッフ管理**」の２種類があります。  
両者の違いについては以下のとおりです。

<dl class="basic">
<dt>組織のスタッフ管理</dt>
<dd>
    <a href="/docs/setup/staff-global/manage/">会社全体のスタッフを管理する場所です。</a>以下の設定は組織設定から行う必要があります
    <ul>
        <li><a href="/docs/setup/staff-global/make/#howto_make">アカウントの新規作成</a></li>
        <li><a href="/docs/setup/staff-global/rank/">権限変更</a></li>
        <li><a href="/docs/setup/staff-global/make/#change_staff_data">スタッフの基本情報（名前・E-mail）の変更</a></li>
        <li><a href="/docs/setup/staff-global/make/#stop_remove">アカウントの有効/無効の切り替え</a></li>
        <li><a href="/docs/manual/api/key/">API利用設定</a></li>
    </ul>
</dd>
<dt>グループ内のスタッフ管理</dt>
<dd>
    本ページで解説します。
    <ul>
        <li><a href="/docs/setup/staff-local/dist/">日報の提出先を固定</a></li>
        <li><a href="/docs/setup/staff-local/template/">使用可能なテンプレートを制限</a></li>
        <li>グループ内の全ての日報閲覧権限（重役）</li>
        <li>グループ内スタッフ活動実績確認</li>
        <li><a href="#bang">グループからの追放</a></li>
    </ul>
</dd>
</dl>

## グループに所属しているスタッフを確認しよう {#showStaffList}

所属中のアカウントを確認するには以下の手順で操作します。

1.  左メニューから「**グループ設定**」をクリック
2.  上部メニューの「**スタッフ管理**」をクリック

{{<icatch filename="img/staff-local" msg="スタッフ一覧が表示されたね" alice="pc">}}

### スタッフリストの項目解説{#staff_list_fields}

スタッフリストの各項目の詳細です。

{{< callout context="note" title="項目は表示非表示が切り替え可能です" icon="outline/info-circle" >}}
お探しの項目が画面上に表示されていない場合は表右上の「項目」から表示項目をONにしてください
{{</callout>}}

<dl class="basic">
<dt>名前</dt>
<dd>スタッフの名前です。名前の変更は<a href="/docs/setup/staff-global/manage/#change_staff_data">組織のスタッフ管理</a>から行います</dd>
<dt><a href="/docs/setup/staff-global/rank/">権限</a></dt>
<dd>スタッフの権限です。権限の変更は<a href="/docs/setup/staff-global/manage/#change_staff_data">組織のスタッフ管理</a>から行います</dd>
<dt><a href="/docs/setup/staff-global/make/#stop_remove">状態</a></dt>
<dd>アカウントの状態（有効：緑 / 無効：赤）を示します。<br>変更は<a href="/docs/setup/staff-global/manage/#disable">組織のスタッフ管理</a>から行います</dd>
<dt>E-mail</dt>
<dd>スタッフがログインに使用するメールアドレスです。変更は<a href="/docs/manual/account/signin/">当該スタッフ自身で行う</a>ことができます。</dd>
<dt><a href="/docs/setup/staff-local/dist/">提出先の指定</a></dt>
<dd>
    スタッフが日報を作成する際の日報提出先を、事前に固定・設定できます。
</dd>
<dt><a href="/docs/setup/staff-local/template/">テンプレートの制限</a></dt>
<dd>
    スタッフがこのグループで利用できるテンプレートの種類を制限できます。テンプレートの種類が多い場合は制限することで操作性を向上出来ます
</dd>
<dt><a href="#bang">追放</a></dt>
<dd>
    このグループからスタッフを追放します。これはアカウントの削除ではなく、<strong>このグループへのアクセス権を失効させるだけです</strong>。
    アカウントそのものを削除するには<a href="/docs/setup/staff-global/make/#remove">組織設定からスタッフアカウントの削除</a>を行う必要があります。
</dd>
<dt>重役</dt>
<dd>
    この設定をONにすると、そのスタッフは<strong>グループ内のすべての日報を閲覧可能</strong>になります。
    通常は<a href="/docs/manual/write-report/dist/">提出先か共有先</a>に名前がないと日報は閲覧できませんが、重役設定はこれらの制約をバイパスします
</dd>
<dt><a href="/docs/setup/staff-local/share/">共用</a></dt>
<dd>
    1つのアカウントを複数人で使い回す際に使用する設定です。応用的な設定のため基本的に非推奨ですが、特定の環境下で活用できます。
</dd>
</dl>

## スタッフの活動実績を確認する {#activity}

このセクションでは、グループ内で各スタッフがどれくらい活動しているか、その実績を月ごとに確認できます。

1.  左メニューから「**グループ設定**」をクリック
2.  上部メニューの「**スタッフ管理**」をクリック
3.  画面下部にある活動実績の表を確認します。

{{<icatch filename="img/staff-activity" msg="スタッフの人事評価としても使えるかも？" alice="question">}}

<dl class="basic">
<dt><a href="/docs/manual/read-report/state/#agree">承認</a></dt>
<dd>1ヶ月の間に日報を承認した回数を表示</dd>
<dt><a href="/docs/manual/read-report/state/#reject">棄却</a></dt>
<dd>1ヶ月の間に日報を棄却した回数を表示</dd>
<dt><a href="/docs/manual/write-report/write/">日報</a></dt>
<dd>1ヶ月の間に日報を作成した回数を表示</dd>
<dt><a href="/docs/manual/read-report/state/#readed">既読</a></dt>
<dd>1ヶ月の間に日報を既読した回数を表示</dd>
<dt><a href="/docs/manual/event/list/">予定作成</a></dt>
<dd>1ヶ月の間に予定を作成した回数を表示</dd>
<dt>予定完了</dt>
<dd>1ヶ月の間に予定を完了済みにした回数を表示</dd>
<dt><a href="/docs/manual/read-report/state/#comment">コメント</a></dt>
<dd>1ヶ月の間に日報や予定にコメントを書き込んだ回数を表示</dd>
</dl>

集計する期間は1ヶ月単位で切り替えができます。期間を変更するには、日付が書かれたボタンをクリックしてください。

## グループの管理画面からスタッフを作成する {#createStaff}

{{< callout context="caution" title="アカウントに関する操作のため管理者権限が必要です" icon="outline/info-triangle" />}}

通常は[組織のスタッフ管理画面](/docs/setup/staff-global/make/)からスタッフを作成しますが、グループ管理画面からもスタッフを作成することが可能です。

詳しくは[グループ設定からアカウントを１件追加](/docs/setup/staff-global/make/#make_group)を御覧ください。

## グループからの追放{#bang}

スタッフをグループから追放することで、そのスタッフはグループ内の日報データにアクセス出来なくなります。  
誤って追放しないようにするため、追放アイコンは「非表示」の状態になっています。

1. 追放アイコンを表示する
2. 追放アイコンをクリックする

{{<iTablet filename="img/bang" msg="追放しても組織にアカウントは残るからね" alice="ok">}}

{{< callout context="note" title="再加入させるには" icon="outline/info-circle" >}}
追放されてもアカウントは組織上に残るので、[組織設定から該当グループに再アサイン](/docs/setup/make-group/#join_staff)できます。
{{</callout>}}
