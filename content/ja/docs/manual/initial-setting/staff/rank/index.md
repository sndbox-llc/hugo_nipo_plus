+++
description = "スタッフアカウントには権限があります。権限のランクによって操作できる範囲が変わります。本ページは権限に関する操作ガイドです"
lead = "管理者がスタッフのアカウントを作成できます。スタッフのアカウントには権限が設定でき、権限ごとにできることが変わります。"
tags = ["スタッフアカウント管理", "要管理者権限"]
title = "スタッフの権限"
menuTitle = "権限について"
toc = true
weight = 101001003
images = []
aliases = ["/docs/manual/initial-setting/staff/_about/"]
+++


{{<info>}}
各グループ内のスタッフ管理については[グループ内のスタッフ管理](/docs/manual/initial-setting/staff-local/_about/)を参照してください
{{</info>}}

スタッフのアカウントはメールアドレスとパスワードの組み合わせで作成できます。
スタッフアカウントには権限が設定されます。権限によって操作が可能な範囲が変わります。
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
<li><a href="/docs/manual/initial-setting/advanced-setting/dist/">日報提出先の指定</a></li>
<li>グループからスタッフを追放する</li>
</dd>
<dt>スタッフ</dt>
<dd>日報の作成や集計など一般的なことが行なえますが、グループ全体に関する設定は一切不可</dd>
</dl>


## 少し特殊な権限

管理者・編集者・スタッフの他にも少し特殊な権限があります。通常は使用しません。少し特殊な用途でのみ利用されます。

<dl class="basic">
<dt>書き込みのみ</dt>
<dd>報告書の作成・自分の書いた報告書の閲覧とその修正のみ可能</dd>
<dt>ゲスト</dt>
<dd>報告書の作成のみ可能<br>※外部の利用者に報告書を書いてもらうことを想定しており用途としては限定的です</dd>
</dl>