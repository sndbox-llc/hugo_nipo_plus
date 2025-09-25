+++
url = "/docs/setup/setting-group/"
aliases = ["/docs/manual/initial-setting/setting-group/"]
title = "⚙️ グループの基本設定"
menuTitle = "グループの基本設定"
description = "NipoPlusのグループは「自治権」を持つ独立した管理単位です。このページでは、グループ内で日報運用を最適化するための基本設定（テーマカラー、共有モード、機能の有効/無効など）について解説します。編集者以上の権限が必要です。"
toc = true
weight = 10500
tags = ["編集者権限"]
+++

NipoPlusの各グループは、まるで **独立した小さなチーム**のように、そのグループ内でのみ適用される独自のルールや設定を持つことができます。このページでは、日報の運用をグループごとに最適化するための「基本設定」について解説します。

{{< callout context="caution" title="グループの設定変更には[編集者権限以上](/docs/setup/staff-global/rank/)が必要です" icon="outline/alert-triangle" />}}

---

## 作業グループを確認し、切り替えよう {#swich_group}

現在、どのグループで作業しているかは、画面上部のバーに表示されています。複数のグループに所属している場合は、必要に応じて作業するグループを切り替えることができます。

1.  画面左上の「**切替**」ボタンをクリック
2.  所属しているグループの一覧が表示されます。
3.  作業したいグループ名をクリックすると、そのグループに切り替わります。

{{<icatch filename="img/switch" msg="現在の作業グループは画面上部に表示されます。他のグループに切り替えたい場合は、ここをクリックしましょう。" alice="here">}}

## グループ設定画面の全体像 {#edit}

メニューから「**グループ設定**」をクリックすると、そのグループに関する様々な設定項目が表示されます。

{{<icatch filename="img/group-manage" msg="グループの全般設定画面では、テーマカラーの変更や、使用する機能の有効/無効を設定できます。" alice="ok">}}

この画面には、以下のような設定カテゴリがまとまっています。

<dl class="basic">
<dt>グループ全般</dt>
<dd>グループの名前やテーマカラーなど、基本的な設定を行います。（本ページで詳しく解説）</dd>
<dt><a href="/docs/setup/staff-local/_about/">スタッフ管理</a></dt>
<dd>このグループに所属しているスタッフや、スタッフごとのテンプレート利用制限、提出先固定などを管理します。<a href="/docs/setup/make-group/#join_staff">スタッフの追加は組織設定</a>から行います</dd>
<dt><a href="/docs/template/make/">テンプレート管理</a></dt>
<dd>このグループで使用する日報やチェックシートのテンプレートを作成・修正・管理します。</dd>
<dt><a href="/docs/setup/advanced-setting/tag/">タグ管理</a></dt>
<dd>このグループで使用するタグ（分類ラベル）の追加・削除を行います。</dd>
<dt><a href="/docs/setup/advanced-setting/point/">商品管理</a></dt>
<dd>商品などの在庫状況を簡易的に管理する機能です。<a href="/docs/template/mod/">商品入力フォーム</a>と組み合わせて使用します。</dd>
<dt><a href="/docs/setup/advanced-setting/goroku/">語録管理</a></dt>
<dd><a href="/docs/template/selects/">選択式入力フォーム</a>で使える「語録」（定型文や選択肢リスト）を管理します。</dd>
<dt><a href="/docs/template/customer/">顧客管理</a></dt>
<dd>顧客のテンプレートを設定します</dd>
<dt><a href="/docs/manual/read-report/removereport/#batch_remove">一括削除</a></dt>
<dd>このグループ内の日報をまとめて削除する機能です。</dd>
</dl>

### グループの基本情報と外観を設定する {#summary}

ここでは、グループの基本的な情報や、見た目に関する設定を変更できます。

<dl class="basic">
<dt>グループ名</dt>
<dd>グループの名称です。左上のグループ切替ボタンなどで表示されます。</dd>
<dt>テーマカラー</dt>
<dd>グループのテーマカラーを変更できます。アイコンの色やタイトルバーの色などが、指定したテーマカラーに一括で変わります。複数のグループを使い分ける際に、混同してしまわないように色分けすることをおすすめします。</dd>
</dl>

### 日報の共有設定を変更する {#reportShare}

この設定では、グループ内で日報がどのように共有されるかを定義します。モードは「通常モード」と「共有モード」の2種類です。

<dl class="basic">
<dt>通常モード</dt>
<dd>日報の<a href="/docs/manual/write-report/dist/">提出先や共有先</a>を、日報作成時に細かく指定できるようになります。</dd>
<dt>共有モード</dt>
<dd>日報の提出先は指定できますが、<strong>共有先は自動的にグループ内の全員に設定されます</strong>（個別に指定する手間が省け、全員が日報を閲覧できます）。</dd>
</dl>

全員が全員の日報を読みたい場合は「共有モード」がおすすめです。一方で、上司だけが読めれば良い場合など、公開範囲を制限したい場合は「通常モード」をおすすめします。

{{< callout context="caution" title="「共有モード」であっても、[書き込みのみ権限やゲスト権限](/docs/setup/staff-global/rank/#others)のスタッフは、他人の日報を読むことはできません" icon="outline/info-triangle" />}}

{{< callout context="note" title="💡 現場の手間を減らすために設定しておこう！" icon="outline/info-circle" >}}
[日報の提出先や共有先を固定](/docs/setup/staff-local/dist/)しておくことで日報を作成する際に提出先を指定する手間が省けます。設定しておくことを推奨します。
{{< /callout >}}

### グループへのお知らせ（バナー）を設定する {#banner}

グループの画面上部に、任意のお知らせ（アナウンス）を表示できます。グループ内のスタッフに通達したいことや、共有事項などがあれば、この機能をご利用ください。

### 使用する機能を有効・無効にする {#optionalFunction}

タイムカード機能や集計機能など、NipoPlusには様々なオプション機能が用意されています。これらの機能は、チェックボックスのON/OFFで有効（または無効）に切り替えることができます。

使用する予定のない機能はOFFにしておくことで、画面上のメニュー表示をシンプルにし、ユーザーの混乱を防ぐことができます。

{{<iTablet filename="img/functions" msg="使わない機能はOFFにしておくと見た目がスッキリ" alice="ok">}}

<dl class="basic">
<dt><a href="/docs/manual/anken/_about/">案件</a></dt>
<dd>左のメニューに「案件」が追加されます。日報作成時に対象となる案件を入力する欄が追加され、集計時に「案件集計」機能が利用可能になります。</dd>
<dt><a href="/docs/manual/event/add/">予定</a></dt>
<dd>左のメニューに「予定管理」が追加されます。カレンダーの表示設定に「予定」が追加されます。</dd>
<dt><a href="/docs/manual/timecard/input/">タイムカード</a></dt>
<dd>左のメニューに「タイムカード」が追加されます。日報作成画面にもタイムカード打刻ボタンが追加されます。</dd>
<dt><a href="/docs/manual/calendar/_about/">カレンダー</a></dt>
<dd>左のメニューに「カレンダー」が表示され、日報や予定をカレンダー形式で確認できるようになります。</dd>
<dt><a href="/docs/manual/analytics/_about/">集計/CSV出力</a></dt>
<dd>左のメニューに「日報の集計」が表示され、様々な条件で日報データを集計・分析したり、CSV形式で出力したりできるようになります。</dd>
<dt><a href="/docs/manual/utils/shift/">シフト管理</a></dt>
<dd>左のメニューに「シフト管理」が追加されます。スタッフの休日情報などを登録・管理できます。ONにすると提出簿において未提出者にメールを送る機能が有効化されます</dd>
<dt><a href="/docs/manual/utils/log/">ログ</a></dt>
<dd>左のメニューに「ログ」が追加されます。システム内の操作履歴などを閲覧専用で確認できます。</dd>
<dt><a href="/docs/manual/write-report/relation/">引継ぎ</a></dt>
<dd>左のメニューに「引継ぎ日報」が追加されます。複数人で日報を作成する機能が利用できるようになります。</dd>
<dt><a href="/docs/manual/customer/input/">顧客管理</a></dt>
<dd>左のメニューに「顧客一覧」「顧客追加」「顧客メモ」が追加されます。</dd>
</dl>

{{< callout context="caution" title="設定の変更は「保存」ボタンをクリックしないと記録されません。忘れずに保存ボタンをクリックしましょう。" icon="outline/info-triangle" />}}
