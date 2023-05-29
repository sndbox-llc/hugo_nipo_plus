+++
description = "日報に写真を添付するフォームを追加できます。写真は複数枚追加できます。日報をPDF出力すると写真も埋め込まれて出力できます。一方でCSV出力には対応していません。"
menuTitle = "写真入力"
tags = []
title = "写真入力フォーム"
toc = true
weight = 101001111
contributors = []
aliases = ['/manual/initial-setting/template/picture/']

+++

{{<icatch filename="picture" msg="スマホで「パシャッ」 そのまま日報に添付" title="写真入力フォーム" fontsize="30px" alice="ok" >}}

|[集計可否](/docs/manual/analytics/)|[CSV出力](/docs/manual/analytics/csv/)|[PDF出力](/docs/manual/read-report/pdf/)|[文字検索](/docs/manual/read-report/list/)|
|:---:|:---:|:---:|:---:|
|✗|✗|▲(1枚目のみ)|✗|

日報に**jpegかpng**のファイルを添付できます。画像ファイルは1枚あたり5MBまで、合計で10ファイルまでアップロードできます。PDFファイルやエクセルファイルなど、写真以外のファイルを添付したい場合は[ファイル入力フォーム](/docs/manual/initial-setting/template/file/)の利用を検討してください。
ファイル入力フォームでも写真を添付できますが日報閲覧時に画像がプレビューないため、画像に限定した限りではこちらの写真入力フォームのほうが便利です。

{{<alice pos="right" icon="ok">}}ついでにいうと写真入力フォームは画像圧縮も自動で行います{{</alice>}}

## 写真入力フォームの初期設定

写真入力フォームは初期設定項目が非常に少ないです。その中で唯一気にかける項目は**幅の指定**です。

{{<appscreen filename="picture-template-edit" title="写真入力フォームのみで構成された日報テンプレートを作成"  >}}

添付された写真データは**幅いっぱいになるように画像を表示**しようとするため、幅が広いと写真が大きく表示されます。

共通の設定項目については[「各種入力フォームの共通設定項目」](/docs/manual/initial-setting/template/make/#common_setting)を参照してください。
以下は本入力フォームにのみ存在する設定項目です

|名称|説明|
|---|---|
|[入力必須](/tips/required/)|これがONの場合、ファイルが添付されていない場合日報の提出ができなくなります|
|初期値|日報の新規作成時に値をセットしたい場合は数値を入力してください。不要の場合は空欄にしておきます|

## 写真入力フォームの含まれた日報を書く

PCからはドラッグ操作で写真を日報に添付できます。スマートフォン・タブレットの場合はボックスをタップして追加してください。

{{<appscreen filename="input" title="写真入力フォームの含まれた日報作成画面のイメージ。写真を添付できる枠がありそこから写真を追加できる。PCの場合はドラッグ操作で追加も可能"  >}}

日報作成時は高さ制限があるため縦長の画像は上下がカットされたように見えますが、単にクロップされているだけです。データ自体は残っているのでご安心ください。
全体の写真は日報受信時に表示できるようになります。

## 写真入力フォームの日報を読む

写真は幅いっぱいに表示されるため、同じ画像でも幅によって見え方が変わります。

{{<appscreen filename="posted1" title="日報表示画面。写真はテンプレートの指定した幅にあわせて拡大されるため、同じ画像でも表示倍率が異なることがある"  >}}

また、各写真には「表示切り替え」スイッチが付属します。スイッチがOFFの際は縦横比を維持して画像全体を表示します。そのため一般的には画像が小さくなります。
スイッチをONにすると画像を大きく表示し、縦に長い画像は上下をクロップします。
※スマートフォンでは見え方が変わります。

{{<alice pos="right" icon="default">}}16:9程度の横長な画像が一番きれいに表示されます。今回はサンプルが悪かったですね！{{</alice>}}

### ファイルデータをまとめてダウンロード

CSV出力機能を使ってファイルを纏めてダウンロードできます。バイナリファイル（写真・署名・ファイルなど）はその性質上、CSV上に表現することができません。
CSV出力時にファイルをダウンロードする際はCSV出力オプションから「写真・ファイル等を出力する」をONにしてください。
CSV出力を行うと**CSVファイルとは別のフォルダに展開してダウンロード**されます。

{{<appscreen filename="download" title="日報に添付されたバイナリーデータをダウンロードするオプションの設定"  >}}

これで[写真入力フォーム](/docs/manual/initial-setting/template/picture/)、[署名入力フォーム](/docs/manual/initial-setting/template/sign/)、[ファイル入力フォーム](/docs/manual/initial-setting/template/file/)それぞれののデータがCSV出力時にまとめてダウンロードされます。
それぞれの日報フォルダの中に写真や署名・データファイルなどがまとめられます。

### PDFに出力

PDFに出力する際、添付した画像が複数枚ある場合は先頭の1枚目のみ出力されます。2枚目以降は出力されない点に注意してください
複数枚PDFに出力したい際は、今回の例のように**写真入力フォームを複数設置**することで回避できます。

また、極端に小さい幅だと最小画像サイズがあるため、それを下回った場合に枠線からはみ出すことがあります。
今回のサンプルも少しはみ出しています。
PDF出力を前提とする場合、写真入力フォームの幅は最低でも5以上を取るようにしてください。