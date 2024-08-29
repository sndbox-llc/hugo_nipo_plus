+++
description = "グループの設定はグループ内でのみ適用されるローカルなルールです。変更には編集者の権限が必要です。本ページはグループ基本設定に関する操作ガイドです"
tags = ["要編集者権限"]
title = "グループの基本設定"
toc = true
weight = 101001011
aliases = []
images = ["switch_tablet.png"]
+++
{{<warning>}}
グループの設定は[編集者権限以上](/docs/manual/initial-setting/staff/rank/)が必要です。
{{</warning>}}

## 作業グループの確認と切替{#swich_group}

{{<info>}}
所属しているグループが1つしか無い場合はこの設定は不要です
{{</info>}}

今作業しているグループは画面上部のバーに表示されています。必要に応じてグループを切り替えて作業してください。

1. 画面左上の「切替」ボタンをクリック
1. 所属しているグループ一覧が表示される
1. 作業するグループ名をクリック

{{<icatch filename="switch" msg="グループ名をクリックして他のグループに切り替えます" alice="here">}}

## グループ設定画面構成{#edit}

メニューから「グループ設定」をクリックします。

{{<icatch filename="group-manage" msg="グループの全般設定では使用する機能やテーマカラーの変更が可能です" alice="ok">}}

グループに関する様々な設定がまとまっています。

<dl class="basic">
<dt>グループ全般</dt>
<dd>グループ全般に関する設定が行なえます。本ページで解説</dd>
<dt><a href="/docs/manual/initial-setting/staff-local/_about/">スタッフ管理</a></dt>
<dd>グループに所属しているスタッフを管理します</dd>
<dt><a href="/docs/manual/initial-setting/template/make/">テンプレート管理</a></dt>
<dd>テンプレートの作成や修正を行います</dd>
<dt><a href="/docs/manual/initial-setting/advanced-setting/tag/">タグ管理</a></dt>
<dd>タグの追加や削除を行います</dd>
<dt><a href="/docs/manual/initial-setting/advanced-setting/point/">商品管理</a></dt>
<dd>商品などの在庫状況を簡易的ですが管理可能です。<a href="/docs/manual/initial-setting/template/mod/">商品入力フォーム</a>と組み合わせて使用します</dd>
<dt><a href="/docs/manual/initial-setting/advanced-setting/goroku/">語録管理</a></dt>
<dd><a href="/docs/manual/initial-setting/template/selects/">選択式入力フォーム</a>で使える語録を管理します</dd>
<dt><a href="/docs/manual/read-report/removereport/#batch_remove">一括削除</a></dt>
<dd>レポートをまとめて削除します</dd>
</dl>

### グループ名とグループカラー{#summary}

グループの設定ではグループの名前やテーマカラーなどの変更が可能です。
複数のグループが存在する場合、ここでの設定は他のグループには影響せず、編集したグループに対してのみ有効です。
グループの基本設定は以下の表のとおりです。

<dl class="basic">
  <dt>グループ名</dt>
  <dd>グループの名称です。左上のグループ切替などで使用されます。</dd>
  <dt>テーマカラー</dt>
  <dd>グループのテーマカラーを変更できます。アイコンの色やタイトルバーの色などが一括で指定したテーマカラーになります。複数グループを使い分ける際に混同してしまわないように、色分けしましょう。</dd>

</dl>

### レポートの共有{#reportShare}

モードは２種類あります。

<dl class="basic">
<dt>通常モード</dt>
<dd>レポートの<a href="/docs/manual/write-report/dist/">提出先や共有先</a>を細かく指定できるようになります</dd>
<dt>共有モード</dt>
<dd>レポートの提出先は指定できますが共有先が指定できません（全員が自動で共有先に含まれます）</dd>
</dl>

全員が全員のレポートを読みたい場合は「共有する」がおすすめです。一方で上司だけが読めれば良い場合など、公開範囲を制限する場合は「通常」がおすすめです。
なお共有モードであっても[書き込みのみ権限とゲスト権限](/docs/manual/initial-setting/staff/rank/#others)は他人のレポートを読むことはできません。

{{<info>}}
[提出先と共有先の固定](/docs/manual/initial-setting/staff-local/dist/)をしておくと毎回自動で提出先などがセットされるので設定しておくことを推奨します
{{</info>}}





### バナー{#banner}

グループの画面上部に任意のアナウンスを表示できます。グループ内のスタッフに通達したいことがあればご利用ください





### 機能の有効無効{#optionalFunction}

タイムカード機能や集計機能など、NipoPlusには様々な機能が用意されています。これらのオプション機能はチェックボックスのON/OFFで有効（または無効）に切り替えができます。
使用する予定の無い機能はOFFにしておくことで画面上の見た目をシンプルにできます。

<dl class="basic">
  <dt><a href="/docs/manual/anken/_about/">案件</a></dt>
  <dd>左のメニューに「案件」が追加されます。レポート作成時に対象となる案件を入力する欄が追加されます。集計時に「案件集計」機能が追加されます。</dd>
  <dt><a href="/docs/manual/event/add/">予定</a></dt>
  <dd>左のメニューに「予定管理」が追加されます。カレンダーの表示設定に「予定」が追加されます</dd>
  <dt><a href="/docs/manual/timecard/input/">タイムカード</a></dt>
  <dd>左のメニューに「タイムカード」が追加されます。レポート作成画面にもタイムカード打刻ボタンが追加されます</dd>
  <dt><a href="/docs/manual/calendar/_about/">カレンダー</a></dt>
  <dd>左のメニューに「カレンダー」が表示されます。</dd>
  <dt><a href="/docs/manual/analytics/_about/">集計/CSV出力</a></dt>
  <dd>左のメニューに「レポートの集計」が表示されます</dd>
  <dt><a href="/docs/manual/utils/shift/">シフト管理</a></dt>
  <dd>左のメニューにシフト管理が追加されます。スタッフの休日情報を登録できます</dd>
  <dt><a href="/docs/manual/utils/log/">ログ</a></dt>
  <dd>左のメニューにログが追加されます。ログは閲覧専用です</dd>

</dl>

※変更は保存しないと記録されません。忘れずに保存ボタンをクリックしましょう
