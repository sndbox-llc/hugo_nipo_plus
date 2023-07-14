+++
description = "スタッフアカウントには権限があります。権限のランクによって操作できる範囲が変わります。本ページは権限に関する操作ガイドです"
tags = ["スタッフアカウント管理"]

title = "スタッフの権限"
toc = true
weight = 101001003
images = []
+++

スタッフアカウントを作る前に、アカウントの権限について確認しておきましょう。

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
<dt>書き込みのみ</dt>
<dd>報告書の作成・自分の書いた報告書の閲覧とその修正のみ可能</dd>
<dt>ゲスト</dt>
<dd>報告書の作成のみ可能<br>※外部の利用者に報告書を書いてもらうことを想定しており用途としては限定的です</dd>
</dl>

## 与える権限は必要最小限に{#keep_minimal}

好き勝手にテンプレートを書き換えられたりグループの名前を変えられるといったことは避けなければなりません。
利用者には必要最小限の権限に止め無用なトラブルをできる限り避けてください。

ざっくり分けると、

- 報告書を書く人 -> スタッフ権限
- 報告書を読む人 -> 編集者権限
- NipoPlusの管理をする人 -> 管理者

といった感じで良いかと思います。
