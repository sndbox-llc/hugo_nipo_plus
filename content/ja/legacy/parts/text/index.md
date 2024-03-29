+++
description = "日報に１行だけ入力ができるパーツを追加できます"
title = "1行入力"
toc = true
weight = 109002003
isNipo = true
tags = ["旧バージョン"]
aliases = ["/old/parts/text/", "/docs/old/parts/text/"]
[sitemap]
  changefreq = "yearly"
  priority = 0.2
+++


{{<btnCenter "/docs/manual/initial-setting/template/text/" "新バージョンでも使えます">}}

## 1行テキストの入力画面{#display}

その名の通り、１行しか入力できません。例えば**担当者名**や**地名**、**管理番号**などの入力に最適です。  
実際に日報を作成する画面では次のように表示されます。  

{{<imgproc parts_text.png "テキストを日報に添付した様子" />}}

{{<alice pos="left" icon="default">}}
OKと表示されているのは入力必須が有効になっている項目です。空欄だと赤文字でエラーを表示します
{{</alice>}}

1行テキストは最大で128文字まで入力ができます。PDFに出力する際、長すぎると折り返される可能性があります。

## 1行テキストを含んだ日報の各種出力画面{#output}

[PDFに出力](/legacy/manual/pdf/)すると次のように表示されます。

{{<imgproc parts_text2.png "１行テキストを含む日報をPDFに変換した出力結果" />}}

[CSVに出力](/legacy/manual/analytics/)すると次のように表示されます。

{{<imgproc parts_text3.png "１行テキストを含む日報をCSVに出力し、Excelで開いた画面" />}}

Nipoの受信・送信BOXからは次のように表示されます

{{<imgproc parts_text4.png "クラウド日報Nipoのアプリ上から1行テキストを含むレポートを表示した画面" />}}

## 1行テキストの設定画面{#setting}

テンプレートの編集画面では次のような設定画面となっております。

{{<imgproc parts_text1.png "１行テキストの初期設定画面" />}}


<dl class="basic">
  <dt>タイトル</dt>
  <dd>タイトルを編集できます。改行も扱えます</dd>
  <dt>初期値の設定</dt>
  <dd>日報作成時にデフォルトでセットされる値を設定できます。不要な場合は空欄にしておきます</dd>
  <dt>入力必須</dt>
  <dd>ONにすると0文字だった場合に日報の提出ボタンが押せなくなります。この機能は無料プランでは無視されます</dd>
  <dt>説明文</dt>
  <dd>日報作成者が何を書くべきか迷わないようにするために説明を付すことができます。</dd>
</dl>
