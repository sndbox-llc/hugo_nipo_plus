+++
description = "日報に時刻の入力枠を追加できます。時刻を２つ並べると経過時間の計算も行えます"
title = "時刻入力"
toc = true
weight = 109002007
isNipo = true
tags = ["旧バージョン"]
aliases = ["/old/parts/time/", "/docs/old/parts/time/"]
[sitemap]
  changefreq = "yearly"
  priority = 0.2
+++

{{<btnCenter "/docs/manual/initial-setting/template/datetime/" "新バージョンでも使えます">}}

## 時刻の入力画面{#display}

時刻入力は2種類あります。上図をご覧ください。アナログ時計から選択するやり方と、ブラウザ依存から選ぶことができます。ブラウザ依存の場合は使用するブラウザによって入力方式が変わります。
（例えばiPhoneのSafariならドラム式の入力になる）日報作成時の時刻が初期値として設定されるため、初期値の設定はできません。また、時刻パーツを連結して2つ並べると、双方の時間差を自動で計算します

{{<imgproc parts_time.png "時刻を日報に添付した様子" />}}

## 時刻を含んだ日報の各種出力画面{#output}

[PDFに出力](/docs/old/manual/pdf/)すると次のように表示されます。

{{<imgproc parts_time2.png "時刻を含む日報をPDFに変換した出力結果" />}}

[CSVに出力](/docs/old/manual/analytics/)すると次のように表示されます。

{{<imgproc parts_time3.png "時刻を含む日報をCSVに出力し、Excelで開いた画面" />}}

Nipoの受信・送信BOXからは次のように表示されます

{{<imgproc parts_time4.png "クラウド日報Nipoのアプリ上から時刻を含む日報を表示した画面" />}}

## 設定画面{#setting}

日報テンプレートの編集画面では次のような設定画面となっております。

{{<imgproc parts_time5.png "時刻の初期設定画面" />}}


<dl class="basic">
  <dt>タイトル</dt>
  <dd>タイトルを編集できます。改行も扱えます</dd>
  <dt>表示形式</dt>
  <dd>アナログ時計の針をクリックして入力する方式か、キーボードで直接入力する方式からお選びください</dd>
  <dt>入力必須</dt>
  <dd>ONにするとHH:mm以外の形式では日報の提出ができなくなります。この機能は無料プランでは無視されます</dd>
  <dt>説明文</dt>
  <dd>日報作成者が何を書くべきか迷わないようにするために説明を付すことができます。</dd>
</dl>
