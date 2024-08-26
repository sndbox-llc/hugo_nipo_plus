+++
description = "スタッフアカウントには権限があります。権限のランクによって操作できる範囲が変わります。本ページは権限に関する操作ガイドです"
lead = "権限は「管理者」と「編集者」と「スタッフ」の3種類が主たる権限です。それ以外にもありますがまずはこの3つを理解してください"
tags = ["スタッフアカウント管理", "要管理者権限"]
title = "🔑スタッフの権限"
menuTitle = "🔑権限について"
toc = true
weight = 101001003
images = []
aliases = ["/docs/manual/initial-setting/staff/_about/"]
+++


{{<info>}}
各グループ内のスタッフ管理については[グループ内のスタッフ管理](/docs/manual/initial-setting/staff-local/_about/)を参照してください
{{</info>}}

スタッフアカウントには全員いづれかの権限が設定されます。  
権限によって操作が可能な範囲が変わります。主たる権限は次の3つです。
<dl class="basic">
<dt>管理者</dt>
<dd>
組織内に1名以上必須。最も高い権限。以下の操作は管理者のみ可能です
<ul>
<li><a href="/docs/manual/initial-setting/make-group/">グループの作成</a></li>
<li><a href="/docs/manual/remove/group/">グループの削除</a></li>
<li><a href="/docs/manual/initial-setting/staff/make/">スタッフの作成</a></li>
<li><a href="/docs/manual/remove/staff/">スタッフの削除</a></li>
<li>スタッフの権限変更</li>
</ul>
</dd>
<dt>編集者</dt>
<dd>
グループ内におけるすべての設定が可能な権限です。
例：
<ul>
<li><a href="/docs/manual/initial-setting/template/make/">テンプレートの作成</a></li>
<li><a href="/docs/manual/initial-setting/staff-local/dist/">レポート提出先の指定</a></li>
<li>グループからスタッフを追放する</li>
</dd>
<dt>スタッフ</dt>
<dd><a href="/docs/manual/write-report/write/">レポートの作成</a>や集計など一般的なことが行なえますが、<a href="/docs/manual/initial-setting/setting-group/">グループ全体に関する設定</a>は一切不可</dd>
</dl>



## 少し特殊な権限{#others}

以下の権限はかなり限定的な用途でのみ使用されます（通常は使用しません）

<dl class="basic">
<dt>書き込みのみ</dt>
<dd><a href="/docs/manual/write-report/write/">レポートの作成</a>・自分の書いたレポートの閲覧とその修正のみ可能</dd>
<dt>ゲスト</dt>
<dd>
<a href="/docs/manual/write-report/write/">レポートの作成</a>のみ可能<br>
※外部の利用者にレポートを書いてもらうことを想定しており用途としては限定的です
</dd>
</dl>
