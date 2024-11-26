+++
url = "/docs/manual/initial-setting/staff/rank/"
description = "スタッフアカウントには権限があります。権限のランクによって操作できる範囲が変わります。本ページは権限に関する操作ガイドです"
lead = "権限は「管理者」と「編集者」と「スタッフ」の3種類が主たる権限です。それ以外にもありますがまずはこの3つを理解してください"
categorys = ['any']
title = "🔑スタッフの権限"
menuTitle = "🔑権限について"
toc = true
weight = 111
contributors = []
# tags = ["スタッフアカウント管理", "要管理者権限"]
# images = []
# aliases = []
+++

{{< callout context="note" title="Note" icon="outline/info-circle" >}}
各グループ内のスタッフ管理については[グループ内のスタッフ管理](/docs/manual/initial-setting/staff-local/_about/)を参照してください
{{< /callout >}}

スタッフアカウントには全員いづれかの権限が設定されます。

## 一般的な権限{#common}

主たる権限は次の3つです。

<dl class="basic">
<dt>管理者</dt>
<dd>
組織内に1名以上必須。最も高い権限。以下の操作は管理者のみ可能です
<ul>
<li><a href="/docs/manual/initial-setting/make-group/">グループの作成</a></li>
<li><a href="/docs/manual/remove/group/">グループの削除</a></li>
<li><a href="/docs/manual/initial-setting/staff/make/">スタッフの作成</a></li>
<li><a href="/docs/manual/initial-setting/staff/make/#remove">スタッフの削除</a></li>
<li>スタッフの権限変更</li>
</ul>
</dd>
<dt>編集者</dt>
<dd>
<a href="/docs/manual/initial-setting/setting-group/">グループ内の設定</a>を全て操作可能な権限です。グループ内の代表という立ち位置になります。
<ul>
<li><a href="/docs/manual/initial-setting/template/make/">テンプレートの作成</a></li>
<li><a href="/docs/manual/initial-setting/staff-local/dist/">レポート提出先の指定</a></li>
<li>グループからスタッフを追放する</li>
</dd>
<dt>スタッフ</dt>
<dd><a href="/docs/manual/write-report/write/">レポートの作成</a>や集計など一般的なことが行なえますが、<a href="/docs/manual/initial-setting/setting-group/">グループ全体に関する設定</a>は一切できません。一般的な従業員はこの権限を利用して下さい</dd>
</dl>

## 少し特殊な権限{#others}

以下の権限は限定的な用途でのみ使用される特殊な権限です。

<dl class="basic">
<dt>書き込みのみ</dt>
<dd><a href="/docs/manual/write-report/write/">レポートの作成</a>・自分の書いたレポートの閲覧とその修正のみ可能。とにかくレポートを書くだけで情報共有とか要らない！というケースでは画面がスッキリしているし活用できるかもしれません。</dd>
<dt>ゲスト</dt>
<dd>
<a href="/docs/manual/write-report/write/">レポートの作成</a>のみ可能<br>
外部の利用者にレポートを書いてもらうことを想定しており用途としては限定的です。例えば社外の方にIDとパスワードを伝えてログインしてもらい、アンケートなどを回答してもらうといった限定的な用途として利用可能です。<br>
自分の書いたレポートも見れないため、他人のアンケートを見られないという点もポイントです。
</dd>
</dl>

## 権限ごとの詳細な説明とメニューの見え方{#detailScreen}

### 管理者権限{#admin}

最も強い権限を有しています。組織全般に関する設定は管理者権限がないと行えません。組織内に1名以上必須です。
管理者権限を他のスタッフに譲る場合は譲渡先のアカウントを管理者にしたあとで、自身の権限を譲渡先の相手から降格してもらいます。

<div id="rootSettingBtn">

組織設定ボタンは画面左上に配置されます。

{{<icatch filename="admin" msg="管理者だけメニューに「組織設定」が表示されます" alice="here">}}

</div>

### 編集者権限{#manager}

組織全体の設定はできませんが、所属しているグループ内のあらゆる設定が可能です。グループ設定画面へ移動するボタンは編集者（または管理者）しか表示されません。
テンプレートの作成やグループ内で使用されるタグの作成など、グループ全般の設定を行うリーダー的なポジションです。

{{< details "画面を表示する" >}}
{{<icatch filename="manager" msg="編集者の画面では「組織設定」が表示されません" alice="ok">}}
{{< /details >}}

### スタッフ権限{#staff}

一般的なアカウントです。基本設定を操作することはできません。日常業務でレポートの作成や、他のスタッフが書いたレポートを閲覧、集計するといった操作が可能です。

{{< details "画面を表示する" >}}
{{<icatch filename="staff" msg="スタッフと書き込みのみ権限は設定に関するメニューが見えないよ" alice="book">}}
{{< /details >}}

### 書き込みのみ{#writer}

他のスタッフのレポートを読む必要が無く、単純にレポートを書くだけの場合に利用できます。メニューの画面周りはStaff権限と同じです。

### ゲスト{#guest}

本当に書き込みだけで良い場合に使用します。自分の書いたレポートを見返すこともできないため、用途としては限定的ですが、極限までシンプルに切り詰めたメニューになるためITに苦手な意識をもっている従業員の方にとっては有益かもしれません。

{{< details "画面を表示する" >}}
{{<icatch filename="guest" msg="ゲストはできることが少ない＝ボタンが少なくて見やすいね" alice="ok">}}
{{< /details >}}
