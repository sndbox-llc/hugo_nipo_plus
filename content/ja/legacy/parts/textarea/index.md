+++
description = "業務内容の報告や備考などの一般的な本文入力に使用する日報の入力部品です"
title = "本文入力"
toc = true
weight = 109002015
isNipo = true
tags = ["旧バージョン"]
aliases = ["/old/parts/textarea/", "/docs/old/parts/textarea/"]
[sitemap]
  changefreq = "yearly"
  priority = 0.2
+++

{{<btnCenter "/docs/manual/initial-setting/template/text/" "新バージョンでも使えます">}}

## 本文の入力画面{#display}

通常よく使われる、普通のテキスト入力エリアです。
文字の入力や色変え・マスクがけなどができます。**業務内容**や**ひきつぎ**など、さまざまな項目として使える最も一般的な項目と言えます

{{<imgproc parts_textarea1.png "本文を日報に添付した様子" />}}

## 本文を含んだ日報の各種出力画面{#output}

[PDFに出力](/docs/old/manual/pdf/)すると次のように表示されます。

{{<imgproc parts_textarea2.png "本文を含む日報をPDFに変換した出力結果" />}}

[CSVに出力](/docs/old/manual/analytics/)すると次のように表示されます。

{{<imgproc parts_textarea3.png "本文を含む日報をCSVに出力し、Excelで開いた画面" />}}

Nipoの受信・送信BOXからは次のように表示されます

{{<imgproc parts_textarea4.png "クラウド日報Nipoのアプリ上から本文を含む日報を表示した画面" />}}

## 本文の設定画面{#setting}

日報テンプレートの編集画面では次のような設定画面となっております。

{{<imgproc parts_textarea5.png "本文の初期設定画面" />}}


<dl class="basic">
  <dt>タイトル</dt>
  <dd>タイトルを編集できます。改行も扱えます</dd>
  <dt>多機能エディタを使う</dt>
  <dd>本文に色付けやマスクがけができるようになります。モバイル版では無視されます。マスクがけはPDF出力に反映されません</dd>
  <dt>初期値の設定</dt>
  <dd>日報作成時にデフォルトでセットされる値を設定できます。不要な場合は空欄にしておきます</dd>
  <dt>入力必須</dt>
  <dd>ONにすると0文字だった場合に日報の提出ボタンが押せなくなります。この機能は無料プランでは無視されます</dd>
  <dt>説明文</dt>
  <dd>日報作成者が何を書くべきか迷わないようにするために説明を付すことができます。</dd>
</dl>
