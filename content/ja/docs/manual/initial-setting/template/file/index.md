+++
description = "テンプレートカスタムパーツの1つ。ZipやWord,Excelといったファイルをレポートに添付できるようになります。"
tags = ["テンプレートパーツ", "テンプレート"]
title = "【ファイル入力】をレポートテンプレートに追加"
menuTitle = "🧩ファイル入力"
toc = true
weight = 101001113
aliases = ["/manual/initial-setting/template/file/", "/manual/org/groupsetting/template/file/"]
images = []
+++

{{<icatch filename="file" msg="ZipやPDFなど 各種ファイルを添付" title="ファイル入力フォーム" fontsize="30px" alice="ok">}}

|[集計可否](/docs/manual/analytics/)|[CSV出力](/docs/manual/analytics/csv/)|[PDF出力](/docs/manual/read-report/pdf/)|[文字検索](/docs/manual/read-report/list/)|
|:---:|:---:|:---:|:---:|
|✗|✗|✗|✗|

レポートにファイルを添付できるフォームを追加できます。**1つのファイルにつき1MB、最大で10ファイルまで**ファイルを添付できます。
現場写真など画像データを添付したい場合は、[写真入力フォーム](/docs/manual/initial-setting/template/picture/)が別途用意されています。もちろん本フォームでも写真を添付できますが、いくつかの理由により[写真入力フォーム](/docs/manual/initial-setting/template/picture/)の利用を推奨します。
ファイルの追加はファイル入力フォームをクリックするか、ファイル入力フォーム上にファイルをドラッグ＆ドロップします。

## ファイル入力フォームの初期設定{#init}

ファイル入力フォームの初期設定項目は非常にシンプルです。

{{<appscreen filename="file-template-edit" title="レポートにPDF等のファイルを添付するフォームを追加します">}}

特に固有の設定はありません。
共通設定事項については以下を参照してください。
{{<btnCenter "/docs/manual/initial-setting/template/make/#common_setting" "共通設定項目">}}

## ファイル入力フォームのテンプレートを作成{#make_template}

レポートにファイルを添付するにはドラッグ＆ドロップ、またはフォームをタップしてファイルを追加します。
1つの入力フォームに対して10ファイルまで添付できるので、この例では最大40ファイルまで添付できます。
ただし1ファイルに付き1MBを超えることはできません。

{{<appscreen filename="input" title="ファイル入力フォームを使ったレポートの作成画面イメージ。添付したファイルは即座にアップロードされます。">}}

## ファイルの添付されたレポートの表示{#show}

添付時のファイル名がリスト上に表示されます。クリックでそのファイルをダウンロードできます。

{{<appscreen filename="post" title="添付されたファイルはクリックしてローカルにダウンロードして使用できます。">}}

仮に添付されたファイルが**画像データであってもプレビューされません**。これが[写真入力フォーム](/docs/manual/initial-setting/template/picture/)との大きな違いです。
汎用性は本フォームのほうが高いですが写真に限定するとプレビューされる[写真入力フォーム](/docs/manual/initial-setting/template/picture/)も利便性では優位です。
またファイルは添付時の名前とダウンロード時ではファイル名が少し変わります。
重複防止とより高い安全性を保つためにアップロード時のファイル名に加えて日付とランダムな文字列が自動で付与されます。

{{<alice pos="right" icon="shield">}}
レポート表示画面ではもとのファイル名のままだよ。ダウンロードするときだけ名前が少し長くなるんだ。
{{</alice>}}

## データ活用{#fire}

ファイル入力フォームはCSV出力やPDF出力に対応しておらず、またその性質上、検索や集計にも対応しておりません。
よって行えることは、添付されたファイルをダウンロードすることだけです。

### ファイルの安全性{#security}

ファイル入力フォームを使って提出されたファイルは、NipoPlusのWebサーバ上に保管されます。
ファイルには非常に長いダウンロード用URLが自動で割り当てられます。このURLにはトークンが含まれており、1文字でも異なる場合そのファイルをダウンロードできません。
URLそれ自体にIDとパスワードが含まれているものとお考えください。例えばURLは次のような形式で構成されています。

```sh
https://firebasestorage.googleapis.com/v0/b/nipo-plus.appspot.com/o/a16h8Q74slMYzLlsHlCg%2Fnipodefaultgroup%2FAEUfmePA4eTHGPCleVQJ%2F20220510164077Vzm_28CE19C9-B5F3-4E22-A873-2DXDE010EX6A.jpg?alt=media&token=9a6c1908-ea48-zc0e-b858-fd42870b014f9
```

このように非常に長いURLになっています。URL内には添付元のレポートIDやグループID、ファイルトークンキーなどが含まれています。
換言すればURLが漏洩することでそのファイルを第三者が閲覧できてしまうリスクがあります。[通信は全て暗号化](/docs/system/security/)されているためURLの漏洩リスクは限りなく低いですが用心に越した事はありません。

{{<alice pos="right" icon="shield">}}
上記URLはいくつかのフェイクを入れているため実際にダウンロードすることはできません。1文字でも異なれば弾き返します！
{{</alice>}}

## イラストデータのダウンロード{#download}

CSV出力のオプション設定から「写真・ファイル等を出力する」をONにしてCSV出力すると別フォルダに署名やイラストがダウンロードされます。

{{<appscreen filename="download" title="バイナリファイルを一括ダウンロード">}}

これで[写真入力フォーム](/docs/manual/initial-setting/template/picture/)、[署名入力フォーム](/docs/manual/initial-setting/template/sign/)、[ファイル入力フォーム](/docs/manual/initial-setting/template/file/)それぞれののデータがCSV出力時にまとめてダウンロードされます。
それぞれのレポートフォルダの中に写真や署名・データファイルなどがまとめられます。

### PDFの出力{#pdf}

ファイル入力フォームはPDF出力に対応していません
