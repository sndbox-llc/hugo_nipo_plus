+++
description = "テンプレートカスタムパーツの1つ。レポートに直筆サインを追加できます。タブレット＆スタイラスペン推奨。受領サインなどに"
tags = ["テンプレートパーツ", "テンプレート"]
title = "直筆サイン・写真・ファイルのフォームをテンプレートに追加する"
menuTitle = "🧩署名や写真等"
toc = true
weight = 101001111
aliases = ["/docs/manual/initial-setting/template/file/", "/docs/manual/initial-setting/template/picture/", "/manual/initial-setting/group-setting/template/picture/","/docs/manual/initial-setting/template/sign/"]
images = []
+++

写真などのメディアをレポートに添付して提出することができます。
これらはバイナリーファイルと呼ばれています。NipoPlusで扱えるバイナリファイルは以下の３種類です

<dl class="basic">
<dt><a href="#sign">署名・イラスト</a></dt>
<dd>スタイラスペンや指を使って直筆サイン（またはイラスト）を手軽に作成できます</dd>
<dt><a href="#picture">写真</a></dt>
<dd>スマートフォンのカメラで撮影した写真をそのままレポートに添付できます</dd>
<dt><a href="#file">ファイル</a></dt>
<dd>ZipやExcelなど、いわゆる通常のファイルを添付可能です</dd>
</dl>



名前|[集計可否](/docs/manual/analytics/)|[CSV出力](/docs/manual/analytics/csv/)|[PDF出力](/docs/manual/read-report/state/#pdf_export)|[文字検索](/docs/manual/read-report/list/#searchFunction)|
|:---:|:---:|:---:|:---:|:---:|
|署名|✗|✗|⭕|✗|
|写真|✗|✗|⭕|✗|
|ファイル|✗|✗|✗|✗|

{{<warning>}}
※写真は複数添付可能ですが、PDF出力時は先頭の１枚目のみ出力可能です。全てPDFに出力する際は複数の写真入力フォームを設置してください
{{</warning>}}


## ファイル系の入力フォームをテンプレートに追加する{#addForm}

左パネルからクリックしてバイナリファイルをレポートのテンプレートに追加できます。

{{<icatch filename="add-binary" msg="左のパーツリストからバイナリ関係のパーツを追加します。緑色がバイナリ系です">}}



## 署名・イラストフォーム{#sign}

{{< info >}}
署名はスマートフォン・タブレットなどのタッチパネル対応機器でご利用ください
{{< /info >}}



[実際の入力イメージはこちら](/docs/manual/write-report/parts/#sign)


{{<imgproc use-stylus-pen.webp "iPad miniとApple Pencilを使って手書きの署名をタブレットに書き込んでいる様子" >}}

スタイラスペンや指でキャンバスに自由に描くことができます。顧客からの受領サインが必要な場合や、手書きのイラストが必要な場合に便利です。  
[特設記事](/tips/mobile-device/#draw_sign)も御覧ください



<details class="mb-5">
  <summary>詳細設定</summary>

<dl class="basic">
  <dt><a href="/tips/required/">入力必須</a></dt>
  <dd>これがONの場合、イラストが描画されていないとレポートの提出ができません</dd>
  <dt>キャンバスサイズ</dt>
  <dd>以下から選択します。<ul><li>署名サイズ</li><li>全画面サイズ</li></ul>全画面サイズでは色変え機能も利用可能です。</dd>
</dl>

補足:[共通設定事項](/docs/manual/initial-setting/template/make/#common_setting)


</details>

描かれたデータはレポート内に埋め込まれます。大きさはレポートのテンプレートによって変化します。

{{<icatch filename="sign-post" msg="テンプレートの幅によって大きさが変わって見えます" alice="here">}}

{{< info >}}
あくまで縮小されるだけでもとの署名データは同一です
{{< /info >}}



### 署名のレポートをPDFに出力{#pdf_sign}

署名・イラストはPDF出力にも対応しています。署名の大きさはテンプレートの設定により変化します。幅4〜6程度を推奨します。


---

## 写真入力フォーム{#picture}


[実際の入力イメージはこちら](/docs/manual/write-report/parts/#picture)


{{<icatch filename="posted1" msg="スマホならカメラでパシャ。そのまま添付のお手軽さ"  alice="phone">}}



レポートに画像ファイルを添付できます。  
画像ファイルは1枚あたり5MBまで、合計10枚までアップロードできます。  
後述する[ファイル入力フォーム](#file)でも写真を添付できますが、ファイル入力フォームはレポートを表示しても写真は見えず、手動でダウンロードして開く必要があります。  
ファイル入力はより汎用的ですが、利便性では写真入力フォームのほうが優れています。


{{< warning >}}
写真UP時に容量削減のため解像度を自動で落とします（[有料プラン](/docs/price/_about/#fee)は中画質、[無料プラン](/docs/price/_about/#free)は低画質）
{{< /warning >}}


{{<btnCenter "/tips/mobile-device/#pick_picture" "特設記事:写真付きレポート">}}


<details>
  <summary>詳細設定</summary>
<dl class="basic">
  <dt><a href="/tips/required/">入力必須</a></dt>
  <dd>これがONの場合、ファイルが添付されていない場合レポートの提出ができなくなります</dd>
</dl>

補足:[共通設定事項](/docs/manual/initial-setting/template/make/#common_setting)

</details>








### PDFに出力{#pdf_picture}

PDFに出力する際、添付した画像が複数枚ある場合は先頭の1枚目のみ出力されます。2枚目以降は出力されない点に注意してください
複数枚PDFに出力したい際は**写真入力フォームを複数設置**することで回避できます。

また、極端に小さい幅だと枠線からはみ出すことがあります。
PDF出力を前提とする場合、写真入力フォームの幅は最低でも5以上を取るようにしてください。





---

## ファイル{#file}

{{<info>}}
写真データを添付したい場合は[写真入力フォーム](/docs/manual/initial-setting/template/binarys/#picture)をご利用ください。PDF出力時などに差がでます。
{{</info>}}


[実際の入力イメージはこちら](/docs/manual/write-report/parts/#file)

{{<icatch filename="file-post" msg="添付されたファイルはクリックしてローカルにダウンロードして使用できます" alice="ok">}}


レポートにファイルを添付できるフォームを追加できます。1つのファイルにつき1MB、最大で10ファイルまでファイルを添付できます。
ファイルの追加はファイル入力フォームをクリックまたはフォーム上にドロップします。  

ファイル入力フォームの初期設定項目は特に有りません。  
補足:[共通設定事項](/docs/manual/initial-setting/template/make/#common_setting)

レポートを受け取った際はそのレポートに添付されたファイルが一覧で表示されます。クリックで添付されたファイルをダウンロード可能です。
仮に添付されたファイルが画像データであってもプレビューされません。[写真入力フォーム](/docs/manual/initial-setting/template/binarys/#picture)との大きな違いの１つです。


{{<warning>}}
もとのファイル名に加えて無作為なランダム文字列が追加されます。完全に同じ名前ではないことに注意
{{</warning>}}


ファイル入力フォームはPDF出力に対応していません


---

## 写真や署名ファイルのダウンロードについて{#download}

レポートをCSV出力する際に、写真や署名、ファイルのデータをセットでダウンロードすることができます。
ダウンロードするには[CSV出力のオプション設定](/docs/manual/analytics/csvoption/)から「写真・ファイル等を出力する」をONにします。  

{{<icatch filename="file-download" msg="デフォルトではファイルDLがOFFなので手動でONにする必要があります" alice="book">}}

写真、ファイルの出力がONの場合、CSVファイルとは別のフォルダにファイルとして格納されます。  
ダウンロード時のファイル形式はZIPになるため、別途解凍ソフトをご用意ください。（とはいえ、昨今のOSはデフォルトで備えているので別途用意する必要性は減りました）