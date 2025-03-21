+++
url = "/tech/other/mojibake/"
aliases = ["/tech/mojibake/"]
title = "ダウンロードしたZipファイルが文字化けする原因と解決策-主にWindows"
menuTitle = "Zipの文字化け問題と解決策"
description = "WebでダウンロードしたZipファイルの文字化けは、解凍ソフトの仕様によるものです。この記事では、特にSHIFT-JISに対応していないソフトが原因のケースについて解説し、推奨する解決策を紹介します。"
date = "2022-11-14"
toc = true
weight = 9010
# images = ["zip-open.png"]
[sitemap]
  changefreq = "yearly"
  priority = 0.9
+++

NipoPlusの[一括CSVダウンロード](/docs/manual/analytics/csv/)を使ってレポートのデータをZip形式でダウンロードすると、特定の環境では文字化けを起こすことがあります。

{{<figure src="img/zip-open.png"  alt="ZIPファイルをダブルクリックで開くと文字化けしてしまう" caption="ZIPファイルをダブルクリックで開くと文字化けしてしまう" >}}

全て半角英数字のみで作成されたファイル名は文字化けしませんが、それ以外のファイル名は全て文字化けしています。
一応補足しておくと文字化けしてもCSVファイルはエクセルなどで開くことができます。しかしこれではどのファイルがどれを指しているのか全くわからず、不便なので問題を解決しましょう。

## WindowsでZIPを解凍すると文字化けする原因はLhaPlusや+Lhacaを使用しているため{#zip_decode_issue_with_lhaplus_lhaca}

文字化けの原因は解凍に使用しているソフトがUTF8という文字コードに対応していないことが原因です。長い間メンテナンスがされていない解凍ソフトは、今の時代主流となりつつあるUTF8という
文字コードに対応しておらず、昔ながらのSHIFT-JISしか対応していないソフトがあります。
筆者が確認できたものでは、次のソフトは文字化けします

- [LhaPlus(ラプラス)](https://forest.watch.impress.co.jp/library/software/lhaplus/)
- [+Lhaca](https://forest.watch.impress.co.jp/library/software/pluslhaca/)

いずれのソフトも長い間メンテナンスがされておらず、UTF8という文字コードに対応していません。
Windowsが一強の時代であればSHIFT-JISが利用できれば問題が有りませんでした。しかし今の時代はスマートフォンやタブレット、MacOSなどの勢力拡大が顕著です。Windows以外の多くはUTF8を利用しているため、SHIFT-JISしか使えない解凍ソフトは時代の流れとともに、その役目を終えようとしています。
しかし役割を終えつつも知名度が高いため、PCを購入したらまずインストールしてしまったりしていませんか？

{{< callout context="note" title="条件反射で入れてませんか？" icon="outline/info-circle" >}}
昔からWindowsを使ってる人は条件反射的にLhacaやLhaplusを入れてしまうので注意です。当時は何でも解凍できて便利でした。
{{< /callout >}}

## WindowsでZipファイルを文字化けせずに解凍する方法(Windows10の場合){#unzip_without_encoding_issue_windows10}

原因が文字コードにあることはわかりましたので、解決は簡単です。つまりUTF8の文字コードに対応した解凍ソフトを使えばよいのです。
Windows10であればWindows10自体がZIPの解凍機能を備えています。この標準の解凍機能はもちろんUTF8にも対応しているため、文字バケは発生しません。

ZIPファイルを開く時、標準のエクスプローラーで開くように関連付けをしてあげましょう。

1. zipファイルを右クリック
1. プログラムから開くをポイントする
1. 別のプログラムを選択をクリック
1. 「常にこのアプリを使って.zipファイルを開く」にチェックを入れる
1. エクスプローラーを選択してOKをクリック

{{<figure src="img/file-relation-windows.png"  alt="ZIPファイルを開くときに使用するソフトを変更する" caption="ZIPファイルを開くときに使用するソフトを変更する" >}}

{{<figure src="img/select-default-application.png"  alt="関連付けの設定画面。エクスプローラーではなくUTF8に対応した解凍ソフトを指定しても良いです。" caption="関連付けの設定画面。エクスプローラーではなくUTF8に対応した解凍ソフトを指定しても良いです。" >}}

これで.zipファイルを見つけると、Windows標準のエクスプローラーで開くようになります。この設定でzipファイルのアイコンも変わったはずです。
さて、これでZipファイルを開いてみましょう。

{{<figure src="img/unzip.png"  alt="Windows標準のエクスプローラーで解凍ができました" caption="Windows標準のエクスプローラーで解凍ができました" >}}

## UTF8に対応した解凍ソフトを使用する{#use_utf8_compatible_decompression_tool}

もう一つの解決方法として、UTF8に対応した解凍ソフトを使用する方法があります。UTF8に対応しているソフトとしては次のようなソフトがあります。

- [Explzh](https://www.ponsoftware.com/)(商用利用の場合は有料です)
- [7Zip](https://sevenzip.osdn.jp/)

例えば7Zipをインストールし、前述したような手順で.zipを7Zipで解凍するように関連付けをしてあげることで.zipのファイルアイコンが7Zipのアイコンに変わります。

{{<figure src="img/7z.png"  alt="7Zipに関連付けをし、Zipファイルを開いたところの画面。画像からも文字化けが解消していることが確認できます" caption="7Zipに関連付けをし、Zipファイルを開いたところの画面。画像からも文字化けが解消していることが確認できます" >}}

## エクセルの中身自体が文字化けした場合{#excel_content_encoding_issue}

Excel2007以前のように古いエクセルを使用している場合、CSVファイルを開くと無条件でSHIFT-JISの文字コードとして読み込みを行います。
前述したようにNipoPlusはUTF8を使用しているため、古いエクセルでCSVファイルを開くと文字化けが発生してしまいます。
この場合は開き方を少し工夫し、UTF8として開くことで文字化けの回避が可能です

{{<figure src="img/excel2007_1.png"  alt="データタブをクリックし、外部データの取り込みから「テキストファイル」を選択する" caption="データタブをクリックし、外部データの取り込みから「テキストファイル」を選択する" >}}
{{<figure src="img/excel2007_2.png"  alt="テキストファイルウィザードが起動。元のファイルの文字コードを「Unicode(UTF-8)」にします" caption="テキストファイルウィザードが起動。元のファイルの文字コードを「Unicode(UTF-8)」にします" >}}
{{<figure src="img/excel2007_3.png"  alt="区切り文字の区分で「カンマ」にチェックを入れます。" caption="区切り文字の区分で「カンマ」にチェックを入れます。" >}}

※2007はもう15年も前なので、可能であれば新しいExcelに買い替えを推奨します
