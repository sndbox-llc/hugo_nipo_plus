+++
description = "これまでの日報のデータ推移を一覧表にして画面に表示します。前回や前々回と比較したりスタッフ同士の比較にも利用できます"
menuTitle = "日報データ推移と累積"
tags = []
title = "日報の過去データの推移や累積を見る"
toc = true
weight = 11
aliases = ['/report/read/analytics/']
+++

{{<imgproc history.png "同じテンプレートで作成された過去のチェックシートのデータをひと目で確認できます。最大で直近30件までのデータが表示可能です" />}}

現在閲覧している日報を起点として、過去30件の同種の日報を自動で一覧表にして表示できます。
過去データの推移を見る「推移」の他に、スタッフごとに分けて集計する「累積」の２つのモードがあります。
1件1件バラバラの日報を一覧表にすることで直近のデータを俯瞰し、様々な解析や意思決定に活用してください。
過去データ推移に表示される項目（過去データ推移表で言うところの行）は日報テンプレートのうち[集計が可能な入力フォーム](/report/totalling/)に限られます。


## テンプレート基準の推移とスタッフ基準の累積

過去の日報を一覧表示する上で、2つのモードが用意されています。モードは1クリックで簡単に切り替えが可能です。

### 累積モード

{{<imgproc staff_sum.png "累積モードの例" />}}

推移モードではスタッフごとに集計を行います。横軸にスタッフの名前が表示されます。
対象のスタッフが複数の日報を含んでいた場合はオレンジ色のボタンで件数を表示します。（１件の場合は表示されません）
スタッフ名はボタンになっており、クリックすることで集計元の日報をポップアップで表示することができます。複数件ある場合はページ送りで切替できます。

### 推移モード

{{<imgproc time_line.png "推移モードの例" />}}

過去の日報1件1件を日付順に並べて表示します。今画面で見ている日報が基準列（2列目)に表示され、右へ行くにつれて古い日報になっていきます。
一覧表に表示されるのは操作者が閲覧可能な日報に限られます。閲覧権限のない日報は推移上に表示されません。


#### 推移モード限定でグループ集計が可能です

推移モードではグループ集計が可能です。グループ集計とは一定のルールに基づいて日報を合算する機能です。例えば「同じ日付の日報をグループ集計」する場合、同じ日の日報が1つの列に合体します。データの内容はすべて加算されます。

{{<imgproc grouping.png "グループ集計を行った例。グループ化された列はオレンジのボタンでグループ化された件数を表示します" />}}

グループ化の種類は次の項目があります。

|グループ化|説明|
|---|---|
|グループ化しない|1件1件の日報が過去データ推移に表示されます|
|同日でグループ化|同じ日付の日報を1つのグループとして集計します|
|午前・午後でグループ化|同日の0:00〜11:59までと、12:00〜23:59までのグループでグループ化します|
|1時間単位でグループ化|同日の同じ時間（例えば13:00〜13:59までが1つのグループ)を基準としてグループ化します|

{{<alice pos="right" icon="pc">}}
グラフを作っているとグループ化によってグラフの表示も変化します。詳しくはグラフ化を御覧ください
{{</alice>}}

#### 絶対値オプションについて

グループ化を行うと「絶対値でグループ化」というスイッチが表示されます。このスイッチをONにすると負数を整数として扱って集計します。

## データ一覧表に独自の計算式を追加する

過去のデータは日報のデータを抜き出してそのまま表示していますが、ここから更にデータの計算式を独自に追加できます。
例えばデータのうち、国語・算数・社会の合計を求めたり、全データの平均を求めることができます。
計算式を追加するには、一覧表の左上にある「＋数式」ボタンをクリックします。
数式入力ウインドウが表示されるので、計算式を入力してください。

{{<imgproc make_fomula.png "四則演算と（）、そしてテンプレートのデータを選んで数式を作ります。（国語＋算数＋英語）/3で３項目の平均を求めます" />}}
{{<imgproc original_fomula.png "追加した数式は一覧表の末尾に追加されます。オレンジ色の背景で表示されます。" />}}

追加した式は「累積モード」「推移モード」双方で表示されます。

### 数式はあなただけのものです。他ユーザに共有されません

オリジナルの数式を追加しても、この数式は作成した本人のアカウントでしか表示されないことに注意してください。
これはデータの分析が人によって欲しい形が異なる可能性があるため、あえてそのように実装されました。

{{<alice pos="right" icon="ok">}}
逆に言えば自分でいろんな式を作っても他のスタッフに迷惑にならないってことでもあるよ
{{</alice>}}

### 数式の修正と削除

数式は日報のデータとは違いただの式なので、簡単に削除することができます。
削除したい数式の行にあるゴミ箱アイコンをクリックし、確認メッセージにOKを返せば削除は完了です。
数式を修正したい場合は同行にある鉛筆アイコンをクリックして、数式を修正できます。

## 表のデータをCSV形式でダウンロードする

表示中の過去データ推移をCSV形式でダウンロードすることができます。ダウンロードするには「保存」ボタンをクリックしてください。

{{<imgproc csv_export.png "集計の結果をCSV形式でダウンロードします" />}}

保存したCSVデータはExcelやGoogle Spleadなどの表計算ソフトの他、テキストエディタなどで開くことができます。

## 過去データ推移に表示される入力フォームの種類

ここまで過去データ推移についての機能を紹介しましたが、そもそも過去データ推移に表示される入力フォームとそうでない入力フォームがあります。
ざっくりと分ければ「計算可能なもの」は過去データ推移として登録され、そうでないものは登録されません。

### 数値データ

数値データとは[数値入力フォーム](/org/groupsetting/template/math/)および[スライダ入力フォーム](/org/groupsetting/template/step/)、そして[算術入力フォーム](/org/groupsetting/template/calc/)で入力されたデータです。

{{<imgproc digit.png "数値は赤色で表示" />}}

### レートデータ

[レート入力フォーム](/org/groupsetting/template/rate/)のデータは緑色で表示されます。

{{<imgproc rate.png "レートは緑色で表示" />}}

レートは「数値」としての集計と同時に「個数」としての集計も可能です。

数値としての集計とは、単純に星の合計数を集計します。個数としての集計は★１や★２など、各レート帯毎に分けて選ばれた回数を集計します。
初期状態では「数値」としての集計のみが表示されますが、「詳細表示」をクリックすると各レート毎の回数が表示できます。


{{<alice pos="right" icon="ok">}}
(×1)のような補助項目が出ている行は個数を数えているよ。補助がない行は合計だね
{{</alice>}}


### 選択肢データ

{{<imgproc select.png "選択肢は青色で表示" />}}

[選択肢入力フォーム](/org/groupsetting/template/select/)のデータは青色で表示されます。
選択肢は単語の選択された回数を数えることができるため表に表示されます。
選ばれた項目を表示したい場合は、数字で 「1」と表現するよりも「●」などの記号で置き換えたほうが見やすい場合もあるため、設定で変更が可能です。

選択肢を数式として使用する際は、選択肢の単語に「数字」が含まれている場合に限り数字として振る舞います。

{{<imgproc text_to_num.png "選択肢の単語を数値化する" />}}
{{<imgproc parse_int.png "「+30g」などの文字データが 30という数値に変換される" />}}


{{<alice pos="right" icon="ok">}}
選択肢に数字として解釈できるものなない場合は0となるよ
{{</alice>}}

### 期間入力データ

[期間入力フォーム](/org/groupsetting/template/datetimes/)で入力されたデータは赤文字で、時計のアイコンが付いて表示されます。

{{<imgproc date_range.png "期間のデータは赤文字で時計のアイコンが目印です。" />}}

集計データ上は、常に「分」が単位に統一されることに注意してください。たとえばデータの入力が 「13:00〜18:00」の場合、集計上は300（分）として表示されます。


## データ推移やデータ累積をグラフ化する

これまで紹介した過去データをグラフ化することができます。
詳しくは[「グラフ化」](/report/analytics/chart/)のページをご覧ください