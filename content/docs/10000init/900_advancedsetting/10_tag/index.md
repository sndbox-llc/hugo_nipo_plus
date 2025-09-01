+++
url = "/docs/setup/advanced-setting/tag/"
aliases = ["/docs/manual/initial-setting/advanced-setting/tag/"]
title = "🏷タグによるデータ管理"
menuTitle = "🏷タグによるデータ管理"
description = "NipoPlusのタグ機能は、日報や点検シート、各種データに目印や検索キーワードとして自由に設定できます。情報の整理や業務効率化に役立つタグの作成・管理方法をご紹介します。"
toc = true
weight = 10910
tags = ["編集者権限", "データ整理", "検索", "目印", "日報", "点検シート", "業務効率化"]
contributors = []
+++

{{< callout context="caution" title="この設定には[編集者権限以上](/docs/setup/staff-global/rank/#manager)が必要です" icon="outline/info-triangle" />}}

タグは様々なデータに貼り付けることができる万能型の付箋です。目印にもなるし、検索にも活用出来ます。

## 使用できるデータ

以下のデータに対してタグをセット出来ます。

- 日報
- 予定
- テンプレート
- 商品
- 語録
- 案件
- 顧客

どのカテゴリデータで使用するかを選択することもできます。（詳しくは後述）

## タグを作成する{#makeTag}

1.  グループ設定をクリック
1.  タグ管理をクリック
1.  新規作成をクリック
1.  タグ名・タグカラーなどの設定を行う

{{<icatch filename="img/tag-add1" msg="日報も点検シートも、タグを作っておけばいつでもクリックで使えるから便利です" alice="ok">}}

{{<nextArrow>}}

{{<icatch filename="img/tag-make" msg="タグ名やアイコン、色など自由に設定できます。例えば「緊急点検」「未対応」「A工場」「設備番号XYZ」など" alice="here">}}

最低でもタグの名前は入力してください。他の設定は任意です。
保存ボタンを押すとタグが一覧に追加されます。

設定項目詳細は以下の通り

<dl class="basic">
<dt>タグ名</dt>
<dd>タグの名前を決めます。<br>例：「未確認」「要改善」「緊急対応」など</dd>
<dt>タグの色</dt>
<dd>タグの色を選びます。視覚的な識別に役立ちます<br>種類: 赤・紫・緑・青・黄</dd>
<dt>タグのアイコン</dt>
<dd>タグに表示されるアイコンを選びます<br>15種類用意しています</dd>
<dt><a href="/docs/manual/write-report/write/">レポート用</a></dt>
<dd>レポートに対して使用する場合はチェックをON</dd>
<dt><a href="/docs/template/make/">テンプレート用</a></dt>
<dd>テンプレートに対して使用する場合はチェックをON</dd>
<dt><a href="/docs/manual/event/add/">予定用</a></dt>
<dd>予定に対して使用する場合はチェックをON</dd>
<dt><a href="/docs/setup/advanced-setting/point/">商品用</a></dt>
<dd>商品に対して使用する場合はチェックをON</dd>
<dt><a href="/docs/setup/advanced-setting/goroku/">語録用</a></dt>
<dd>語録に対して使用する場合はチェックをON</dd>
<dt><a href="/docs/manual/anken/_about/">案件</a></dt>
<dd>案件に対して使用する場合はチェックをON</dd>
<dt><a href="/docs/manual/customer/input/">顧客</a></dt>
<dd>顧客に対して使用する場合はチェックをON</dd>
<dt>メモ</dt>
<dd>タグ自身のメモです。管理画面以外は見れません</dd>
<dt>このタグを使用する</dt>
<dd>基本はONです。使わなくなった場合にこのチェックを外します</dd>
</dl>

## 既存のタグを編集する{#edit}

1.  修正したいタグをクリック
1.  修正する
1.  保存ボタンをクリック

{{< callout context="note" title="新規登録時とやり方はほとんど同じです" icon="outline/info-circle" />}}

## タグの使い方{#usage}

タグの使い方は大まかに分けて２種類です。

<dl class="basic">
<dt>タグのセット</dt>
<dd>データ登録時にタグをセットする場合に使用します</dd>
<dt>タグを使った検索</dt>
<dd>たくさんのデータ内からタグの付いたデータだけを瞬時にリストアップできます</dd>
</dl>

### タグをセットする

タグのセットは、日報の新規作成時や顧客データの新規登録時など、データ入力画面で行います。  
ここでは例として「顧客データの新規登録画面」を見てみましょう。

1. 左メニューから顧客追加をクリック
2. 画面下までスクロールすると「顧客」にチェックの入ったタグが表示される
3. セットしたいタグをクリック

{{< callout context="note" title="白抜きタグが「セット済み」の意味です。もう一度クリックすると解除されます" icon="outline/info-circle" />}}

{{<iTablet filename="img/tagUsage" msg="顧客登録画面でタグをセットするよ" alice="ok">}}

### タグを使って絞り込み検索する{#filterd}

{{< callout context="note" title="例として顧客管理を出していますが、日報に対しても検索可能です" icon="outline/info-circle" />}}

ここでも顧客データを例に見てみましょう。例えば顧客データに「見込み客」というタグが付いている顧客をリストアップしたいときは[顧客一覧](/docs/manual/customer/list/)画面から「見込み客」のタグをクリックするだけで検索出来ます。

{{<iTablet filename="img/tagFilter" msg="この検索条件を保存すれば次回からワンクリックで使えるぞ" alice="here">}}

## 使わなくなったタグの整理

使わなくなったタグは「無効化」と「削除」の２つの方法で処理できます。  
無効化は一覧から表示されなくなりますがデータとして存続します。一方で削除は完全に消してしまいます。

### タグを無効化する{#disable}

使わなくなったタグは削除か無効化します。無効化することでタグを使用する箇所で表示されなくなります。
無効化の手順は以下の通り。

1.  無効化するタグをクリック
1.  「このタグを利用する」のチェックを外す
1.  保存をクリック

### タグを削除する{#remove}

{{< callout context="caution" title="削除するとそのタグを使った検索が一切できなくなるため注意！" icon="outline/info-triangle" />}}

タグの削除は慎重に行ってください。過去にタグをセットしたレポートや**点検記録**などに対してもまとめて当該タグが削除されます。

1.  削除するタグをクリック
1.  「削除」をクリック
