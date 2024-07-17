+++
description = "テンプレートカスタムパーツの1つ。レポートに直筆サインを追加できます。タブレット＆スタイラスペン推奨。受領サインなどに"
tags = ["テンプレートパーツ", "テンプレート"]
title = "直筆サイン・写真・ファイルのフォームをテンプレートに追加する"
menuTitle = "🧩署名や写真等"
toc = true
weight = 101001111
aliases = ["/docs/manual/initial-setting/template/picture/", "/docs/manual/initial-setting/template/binarys/#file", "/docs/manual/initial-setting/template/sign/"]
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



名前|[集計可否](/docs/manual/analytics/)|[CSV出力](/docs/manual/analytics/csv/)|[PDF出力](/docs/manual/read-report/pdf/)|[文字検索](/docs/manual/read-report/list/)|
|:---:|:---:|:---:|:---:|:---:|
|署名|✗|✗|⭕|✗|
|写真|✗|✗|⭕|✗|
|ファイル|✗|✗|✗|✗|

{{<warning>}}
※写真は複数添付可能ですが、PDF出力時は先頭の１枚目のみ出力可能です。全てPDFに出力する際は複数の写真入力フォームを設置してください
{{</warning>}}

左パネルからクリックしてバイナリファイルをレポートのテンプレートに追加できます。

{{<appscreen filename="add-binary" title="バイナリ関係の入力フォームをテンプレートに追加する">}}






## 署名・イラスト{#sign}

{{<imgproc use-stylus-pen.webp "iPad miniとApple Pencilを使って手書きの署名をタブレットに書き込んでいる様子" />}}

スタイラスペンや指でキャンバスに自由に描くことができます。顧客からの受領サインが必要な場合や、手書きのイラストが必要な場合に便利です。  
[特設記事](/tips/mobile-device/#draw_sign)も御覧ください


{{< info >}}
タッチパネル対応の機器で利用を推奨
{{< /info >}}






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

{{<appscreen filename="sign-post" title="署名入力フォームを含んだレポートを受信したときの見え方">}}

{{< info >}}
あくまで縮小されるだけでもとの署名データは同一です
{{< /info >}}



### 署名のレポートをPDFに出力{#pdf_sign}

署名・イラストはPDF出力にも対応しています。署名の大きさはテンプレートの設定により変化します。幅4〜6程度を推奨します。


---

## 写真{#picture}

{{<appscreen filename="picture" msg="スマホで「パシャッ」 そのままレポートに添付" title="写真入力フォーム" fontsize="30px" alice="ok">}}


レポートに画像ファイルを添付できます。  
画像ファイルは1枚あたり5MBまで、合計10枚までアップロードできます。  
後述する[ファイル入力フォーム](#file)でも写真を添付できますが、ファイル入力フォームはレポートを表示しても写真は見えず、手動でダウンロードして開く必要があります。  
ファイル入力はより汎用的ですが、利便性では写真入力フォームのほうが優れています。


{{< warning >}}
写真UP時に容量削減のため解像度を自動で落とします。もとのきれいな画像のままとはいかないので注意してください
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




### 写真入力フォームのレポートを読む{#read}

写真は幅いっぱいに表示されるため、同じ画像でも幅によって見え方が変わります。

{{<appscreen filename="posted1" title="レポート表示画面。写真はテンプレートの指定した幅にあわせて拡大されるため、同じ画像でも表示倍率が異なることがある">}}

また、各写真には「表示切り替え」スイッチが付属します。スイッチがOFFの際は縦横比を維持して画像全体を表示します。そのため一般的には画像が小さくなります。
スイッチをONにすると画像を大きく表示し、縦に長い画像は上下をクロップします。  

※スマートフォンでは見え方が変わります。

{{<alice pos="right" icon="default">}}16:9程度の横長な画像が一番きれいに表示されます。今回はサンプルが悪かったですね！{{</alice>}}



### PDFに出力{#pdf_picture}

PDFに出力する際、添付した画像が複数枚ある場合は先頭の1枚目のみ出力されます。2枚目以降は出力されない点に注意してください
複数枚PDFに出力したい際は**写真入力フォームを複数設置**することで回避できます。

また、極端に小さい幅だと枠線からはみ出すことがあります。
PDF出力を前提とする場合、写真入力フォームの幅は最低でも5以上を取るようにしてください。





---

## ファイル{#file}

{{<icatch filename="file" msg="ZipやPDFなど 各種ファイルを添付" title="ファイル入力フォーム" fontsize="30px" alice="ok">}}

レポートにファイルを添付できるフォームを追加できます。**1つのファイルにつき1MB、最大で10ファイルまで**ファイルを添付できます。
現場写真など画像データを添付したい場合は、[写真入力フォーム](/docs/manual/initial-setting/template/binarys/#picture)が別途用意されています。  
もちろん本フォームでも写真を添付できますが利便性の観点から写真入力フォームのほうが使い勝手が良いです。  

ファイルの追加はファイル入力フォームをクリックするか、ファイル入力フォーム上にファイルをドラッグ＆ドロップします。


ファイル入力フォームの初期設定項目は特に有りません。  
補足:[共通設定事項](/docs/manual/initial-setting/template/make/#common_setting)



### ファイルの添付されたレポートの表示{#show}

添付時のファイル名がリスト上に表示されます。クリックでそのファイルをダウンロードできます。

{{<appscreen filename="file-post" title="添付されたファイルはクリックしてローカルにダウンロードして使用できます。">}}

仮に添付されたファイルが**画像データであってもプレビューされません**。これが[写真入力フォーム](/docs/manual/initial-setting/template/binarys/#picture)との大きな違いです。
汎用性は本フォームのほうが高いですが写真に限定するとプレビューされる[写真入力フォーム](/docs/manual/initial-setting/template/binarys/#picture)も利便性では優位です。
またファイルは添付時の名前とダウンロード時ではファイル名が少し変わります。
重複防止とより高い安全性を保つためにアップロード時のファイル名に加えて日付とランダムな文字列が自動で付与されます。

{{<alice pos="right" icon="shield">}}
レポート表示画面ではもとのファイル名のままだよ。ダウンロードするときだけ名前が少し長くなるんだ。
{{</alice>}}



ファイル入力フォームはPDF出力に対応していません


---

## 写真や署名ファイルのダウンロードについて{#download}


バイナリファイルを手元にダウンロードしたい場合は、CSV出力のオプション設定から「写真・ファイル等を出力する」をONにします。  
この設定がONだとフォルダ分けが自動で行われ、フォルダの中にCSVファイルとバイナリファイルが含まれた状態でダウンロードされます。
この設定がOFFの場合、写真やイラストといったバイナリファイルはダウンロードされません。

{{<appscreen filename="file-download" title="バイナリファイルを一括ダウンロード">}}
