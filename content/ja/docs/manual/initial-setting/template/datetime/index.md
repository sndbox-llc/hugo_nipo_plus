+++
description = "テンプレートカスタムパーツの1つ。作業開始時間のように一定時点の日付時刻を入力できます。10:00 〜 13:00のように範囲を入力する場合は別途期間入力フォームをご利用ください"
tags = ["テンプレートパーツ", "テンプレート"]
title = "【日付・時刻入力】をレポートテンプレートに追加"
menuTitle = "🧩日付・時刻入力"
toc = true
weight = 101001107
aliases = ["/manual/initial-setting/template/datetime/", "/manual/org/groupsetting/template/datetime/"]
images = []
+++

{{<icatch filename="date-time" msg="日付と時刻の 入力に最適です" title="日付と時刻入力フォームを含んだテンプレートの例" fontsize="30px" alice="ok">}}

## 日付・時刻入力フォームとは{#about}

日付・時刻・またはその双方を入力できる入力フォームです。レポートにはテンプレートの他に「提出日」を指定する欄が別途用意されていますので、レポート提出日の目的として本パーツをあえて設置する必要は有りません。
提出日とは別に何かしらの日付入力が必要な際に利用してください。  
本フォームは一定時点の時刻や日付の入力に限られます。例えば**所要時間のように何時間(何日)かかったのかを入力したい場合**は[期間入力フォーム](/docs/manual/initial-setting/template/datetimes/)を利用してください。

{{<alice pos="right" icon="ok">}}
例えば作業予定日など、報告内容として使いたい場合に使ってね
{{</alice>}}

## 日付と時刻入力フォームの初期設定{#setting}

日付のみ・時間のみ、などの設定は初期設定で設定できます。入力方法はキーボードから直接打つ方法のほか、カレンダーや時計マークから入力する方法がありますので、好みに応じて使い分けができます。

<dl class="basic">
  <dt><a href="/tips/required/">入力必須</a></dt>
  <dd>これがONの場合、数値が空欄だとレポートの提出ができなくなります</dd>
  <dt>形式</dt>
  <dd>日付（西暦あり）・日付（西暦無し）・時刻のみ・日付と時刻の4種類から選択します</dd>
</dl>

入力形式の4種類については次のような形式になります。

|入力形式|フォーマット|例|入力切替|
|---|---|---|---|
|日付（西暦有り)|YYYY/MM/DD|2022/12/01|可|
|日付（西暦なし）|MM/DD|12/01|不可|
|時刻のみ|HH:mm|13:21|可|
|日付と時刻|YYYY/MM/DD HH:mm|2022/12/01 13:21|不可|

{{<alice pos="right" icon="ok">}}
エクセルなどの一般的な表計算ソフトでも解釈可能な形式だよ。
{{</alice>}}

共通設定事項については以下を参照してください。
{{<btnCenter "/docs/manual/initial-setting/template/make/#common_setting" "共通設定項目">}}

## 日付と時刻入力フォームの使用例{#sample}

日付と時刻入力フォームのみで構成されたテンプレートを作成しました。日付と時刻を4つ登録しています。それぞれ形式を分けています。

{{<appscreen filename="datetime-template-edit" title="レポートに「日付と時刻」を追加したプレビュー">}}

この例をもとに実際の入力画面や表示画面を確認してみましょう。

### 日付と時刻入力フォームの入力画面{#input}

先程のテンプレートを使ってレポート作成画面を表示します。

{{<appscreen filename="input" title="日付と時刻入力フォームのみで構成されたテンプレートの入力画面イメージ。日付のみ・時刻のみなど様々な形式での入力があることがわかる">}}

上段の2つは日付（西暦なし）と、日付と時刻ですがこの2つは入力切替ができません。この形式で固定です。
一方で下段は日付（西暦あり）と時刻のみです。この2種類は表示形式の切替ボタンが表示されます。カレンダーや時計のようなリッチな見た目から入力できるモードと、シンプルにキーボードから入力できるモードのどちらかをレポート作成時に自由に切替できます。

{{<alice pos="right" icon="phone">}}
スマホはリッチスタイル、PCはキーボードからの入力がおすすめだよ。
{{</alice>}}

### 日付と時刻入力フォームのレポートを表示する{#display}

さてこのレポートを提出し、受け取った側からはどのようにそのレポートが表示されるのでしょうか。実際に表示してみた例が次の画像になります。

{{<appscreen filename="post" title="日付と時刻フォームを含んだレポートを受信した画面イメージ">}}

入力時の画面と比べてかなりシンプルになっていることがわかります。

## データ活用編{#katuyou}

日付と時刻入力フォームが含まれたレポートではCSV出力やPDF出力、検索などが利用できます。

|[集計可否](/docs/manual/analytics/)|[CSV出力](/docs/manual/analytics/csv/)|[PDF出力](/docs/manual/read-report/pdf/)|[文字検索](/docs/manual/read-report/list/)|
|:---:|:---:|:---:|:---:|
|✗|○|○|○|

### 日付と時刻のデータをCSVに出力{#csv}

日付と時刻データはCSVに出力できます。出力は普通の文字列として行われます。

{{<imgproc csv.png "日付と時刻の含まれた1件のレポートをCSV出力し、エクセルで開いた画面の例。E列〜J列がレポートのデータになる" />}}

### 日付と時刻の検索{#search}

日付と時刻入力フォームで入力されたデータは文字として記憶されるため、そのまま文字として検索が可能です。

ただし精度に関しては[テキスト入力フォーム](/docs/manual/initial-setting/template/text/)や[選択式入力フォーム](/docs/manual/initial-setting/template/select/)のようにちゃんとした単語や文章のほうが検索精度が高くなります。
そのため日付と時刻による検索はある種のオマケ程度に捉えてください。

{{<alice pos="right" icon="ok">}}
日付と時刻に関しては検索精度が若干低くなりますので検索するには他の入力フォームを使ったほうが良いかもしれません
{{</alice>}}
