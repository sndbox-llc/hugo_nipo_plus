+++
description = "グループ分けすることで効率的に日報を管理できます。日報はグループの中でのみ共有されます。グループの役割や作成について解説"
menuTitle = "グループ作成と基本設定"
tags = []
title = "グループ作成と基本設定"
toc = true
weight = 101001001
contributors = []
aliases = ['/manual/initial-setting/make-group/']

+++

用途や目的に応じて自由にグループを作成・削除出来ます。
日報テンプレートの作成や設定情報などはグループ単位で行うことが出来ます。このページではグループの基本設定と、グループの作成について解説しています。

## グループの基本設定を変更

グループの基本的な設定は編集者権限以上のスタッフが設定可能です。
変更したいグループに切り替えてから、左メニュー＞グループ設定＞グループ全般の順にクリックして設定画面を開きます。
変更したいグループへの切替は画面左上の「切替」ボタンから操作します。

{{<appscreen filename="edit-group" title="グループの編集"  >}}

グループの設定ではグループの名前やテーマカラーなどの変更が可能です。
複数のグループが存在する場合、ここでの設定は他のグループには影響せず、編集したグループに対してのみ有効です。
グループの基本設定は以下の表のとおりです。

|項目名|説明|
|---|---|
|グループ名|グループの名称です。左上のグループ切替などで使用されます。|
|テーマカラー|グループのテーマカラーを変更できます。アイコンの色やタイトルバーの色などが一括で指定したテーマカラーになります。複数グループを使い分ける際に混同してしまわないように、グループごとにテーマカラーを変えることを推奨しています。|
|日報の共有|【通常を推奨します】「通常」を選ぶと日報の提出先や共有先を細かく指定できるようになります。「共有する」を選ぶと日報の提出先は指定できますが共有先が指定できなくなります。共有先には自動でグループ内の全スタッフがセットされ、これにより全スタッフが日報を読める状態になります。承認リレーを行う際は【通常】モードの使用をおすすめします|
|画面上部にバナーを表示|グループの画面上部に任意のアナウンスを表示できます。グループ内のスタッフに通達したいことがあればご利用ください|
|メニューにタスクを表示|ONにすると左のメニューに「タスク追加」と「タスク管理」項目が表示されます。OFFにすると非表示になります。タスクを使用しない場合はOFFにしておくことでメニューをスッキリさせることができます|
|メニューにタイムカードを表示|ONにすると左のメニューに「タイムカード入力」と「タイムカード一覧」が表示されます。OFFにすると非表示になります。タイムカードを使用しない場合はOFFにしておくことでメニューをスッキリさせることができます|
|メニューにカレンダーを表示|ONにすると左のメニューに「カレンダー」が表示されます。|
|メニューに集計を表示|ONにすると左のメニューに「日報の集計」が表示されます|

※変更は保存しないと記録されません。忘れずに保存ボタンをクリックしましょう

## グループの作成手順

{{<alice pos="right" icon="ok">}}グループ分けが不要であれば以下の章はスキップしてください{{</alice>}}

新たに他のグループを作るには次の手順で操作します。

1. 組織設定をクリック
1. グループ管理までスクロール
1. グループの追加をクリック
1. グループ名やカラーテーマを設定

{{<appscreen filename="addgroup" title="グループの新規作成を行うには組織設定＞グループ管理＞グループの追加の順にクリックします"  >}}

グループの追加ボタンをクリックするとポップアップウインドウが表示されます。テーマカラーやグループ名はここで指定可能ですが、より詳細な設定はグループ作成後に行います。

{{<appscreen filename="makegroup" title="グループの作成画面がポップアップで表示される。設定はあとから変更可能のため暫定値でも良い"  >}}

作成したグループはグループ管理の一覧に表示されます。グループにスタッフを追加するには、所属スタッフ編集の「○人所属」ボタンをクリックします。
ここから所属させるスタッフを追加、削除できます。より詳しいガイドは[スタッフをグループに追加](/docs/manual/initial-setting/staff/manage/)させるを参照してください。
作業グループは画面左上の切替ボタンから切替が可能です。またグループ一覧のグループ名をクリックしても同様に切替が可能です。
{{<appscreen filename="switch-group" title="グループ一覧から作業するグループを選んで切替します"  >}}

画面左上の切替からグループを切り替えた際はページの移動は起こりません。つまり全体設定のままです。全体設定はどのグループを選んでいても同じです。
一方でグループ一覧のグループ名をクリックするとグループの設定画面へページが変わります。

※グループを削除したいときは[グループ削除のページ](/docs/manual/remove/group/)を参照してください