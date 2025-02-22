+++
url = "/legacy/manual/group-mode/"
title = "グループのモードを設定"
description = "スタッフ全員が日報を読めるようにしたり、逆に管理者だけに日報を読めるように制御したりすることができます。大まかな設定を3つのモードから選択します"
toc = true
weight = 8130
isNipo = true

[sitemap]
  changefreq = "yearly"
  priority = 0.2
+++

## グループのモードについて{#mode}

グループのモードを切り替えることで、日報を全スタッフが読める状態にしたり、管理者だけが読めるような状態にする。
または個別に指定して読める人スタッフと読めないスタッフを細かく制御することができます。

グループのモードを切り替えるには管理者、またはマネージャの権限が必要です。スタッフの権限については[スタッフ管理](/legacy/manual/staff-manage/)を参照してください

グループに入室後、**全体設定**＞**グループ管理**の順にクリックします。

{{<iTablet filename="img/groupMode" msg="グループのモードを変更する" alice="ok">}}

グループのモードは

- 共有する
- 通常
- 共有しない

それぞれのモードによって、**日報の提出先と共有先**の範囲が変わります。

<dl class="basic">
  <dt>提出先</dt>
  <dd>日報を読んでほしい相手を指定します。メールで言うところの「宛先」にあたります。提出先に指定されたスタッフはその日報を読み、承認・棄却といった操作が可能です</dd>
  <dt>共有先(他に日報を読める人）</dt>
  <dd>提出先と同じように日報を読めますが、承認や棄却はできません。メールで言うところのCC（カーボンコピー）にあたります。</dd>
</dl>

このページではスタッフの権限について【管理者】・【マネージャ】・【メンバー】という単語が出てきます。

### 【共有する】モード{#share}

スタッフが日報を作成する際、提出先は自由に選べます。**共有先には「全スタッフ」の名前が固定で入ります**。共有先の変更はできません。

{{< callout context="note" title="全スタッフが共有先にセットされる = 全員が書いた日報を読める" icon="outline/info-circle" />}}

共有モードは全員共有が前提です。しかし**新規に参加したスタッフは参加前の日報を読むことができません**。なぜなら日報作成時に新規追加されたスタッフの名前が共有先に含まれていないからです。
もし新規に参加したスタッフにも過去のレポートを表示させたい場合は、**日報の並び順を日付順にする**のオプションにチェックを入れてください。

### 【共有しない】モード{#non_share}

スタッフが日報を作成する際、提出先に「管理者」、共有先に「マネージャ」が固定されます。マネージャが複数名居る場合は全マネージャの名前がセットされます。
提出先や共有先を日報作成者は手動で変更することができません。

日報を管理者が読めれば良いのであれば、このモードがおすすめです

### 【通常】モード{#common}

日報を作成する都度、誰が読めるのかを個別に指定できるモードで、最も柔軟性があります。
提出先や共有先は**一度設定すれば２回目以降は自動で前回と同じスタッフがセットされる**ため、そこまで大きな負担にはなりません。
詳しくは[日報を書く](/legacy/manual/write-report/)を御覧ください。

## 提出先や共有先を個別に強制指定する{#dist}

グループモードでは３つのモードしか無いため、より細かく制御したい場合は提出先や共有先を個別に指定する方法を用意しています。
この設定はスタッフ単位で指定できます。詳しくは[スタッフ管理](/legacy/manual/staff-manage/)を御覧ください

{{<iTablet filename="img/fixDist" msg="スタッフごとに提出先を強制指定できます" alice="ok">}}

## 途中でモードを切り替えるとどうなるの？{#hint}

運用を開始したあとでも、グループのモードを変更することができます。モードを切り替えたとき、過去の日報は**日報にセットされた提出先と共有先の情報に従って表示**されます。
例えば【共有するモード】で運営してきたが、途中で【共有しないモード】に切り替えた場合でも、共有するモードのときに書かれた日報には
共有先にスタッフの名前が含まれていることでしょう。今のモードが【共有しない】であっても、共有する時代に書かれた日報はそのまま全スタッフが閲覧できます。

1つだけ例外があり、「共有するモード」で且つ、「日付順に表示」とした場合は、共有しない時代に書かれた日報でも全員が日報を閲覧できます。
