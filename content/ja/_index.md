+++
# title = "NipoPlus" h1が重複するためここでは使わない
description = "製造業のチェックシートや日報にも。スマホで日報作成や承認棄却、報告書の集計&グラフ化📊だって可能です。無料プラン有り〼有料プランも業界最安値"
lead = "製造業をはじめ、ディーラー、林業、商社など様々な企業で利用頂いております"
date = "2020-10-06"
lastmod = "2020-10-06"
draft = false
images = []
aliases = ["/old/", "/docs/old/_about/"]
+++

---

具体的な業務フローを見てみましょう

## Step1.報告書を書きます

スタッフは管理者が予め作っておいた報告書のテンプレートに沿って業務報告を書くだけです。
テンプレートがあるから書き手は**何を書くべきかがわかる**し、記入漏れといった問題も軽減できます。
入力順序の指定もすれば決められた手順を飛ばして入力できないように制御も可能です。例えば次の画像のように▼

{{<icatch filename="input-order" msg="入力必須と 入力順指定の例" title="入力の必須が空欄の場合は日報が提出できません" fontsize="30px" alice="here" >}}

報告書のテンプレートはカスタマイズが自由自在です。日報・作業報告書・品質チェックシートなど、**現場で使う様々な「報告書」をNipoPlus一つで管理可能**になります。

報告書を「読める人」と「読めない人」「承認できる人」など細かい指定も可能です。

<div class="row justify-content-center mt-5">
<div class="col-sm-16 col-md-8">{{<button "/tips/required/" "記入・提出漏れの防止">}}</div>
<div class="col-sm-16 col-md-8">{{<button "/tips/checksheet/" "製造業の点検シート">}}</div>
</div>

{{<nextArrow>}}

## Step2.報告書を受け取って承認します

Step1でスタッフが書いた報告書は上司に送られます。
報告書を読んで、問題がなければ承認ボタンを押してください。これでその報告書は編集が不可能な固定された状態になります。
承認は複数人がリレーで行うこともできます。
また報告書に対してコメントを残すことも可能です。
報告書が届いたらメール通知やアプリ内のお知らせがあるので見落としの心配もありません。

{{<icatch filename="report-detail" msg="承認リレー/コメ ント・通知もあるよ" title="コメントでスタッフとのコミニケーションをとることや、複数スタッフによる日報の承認リレーも利用できます。" fontsize="30px" alice="please" >}}

伝票のように都度都度作成される報告書の場合は通知が鳴り止まない場合もあるので、通知をOFFにしておきましょう。

<div class="row justify-content-center mt-5">
<div class="col-sm-16 col-md-8">{{<button "/docs/manual/read-report/_about/" "報告書を読む">}}</div>
<div class="col-sm-16 col-md-8">{{<button "/docs/manual/notice/email/" "メール通知">}}</div>
</div>

{{<nextArrow>}}

## Step3. 報告書を集計します

テンプレートの構成によっては集計できる項目があります。これらのデータをスタッフ毎に集計したり、日別で増減を見ることで様々な意思決定に役立てることができます。
一覧表だけでなくデータの可視化（いわゆるBI化）も可能。可視化の代表といえばそう、グラフですね。

{{<icatch filename="chart" msg="日報をグラフ化して 視覚的に分析が可能" title="日報をグラフ化する" fontsize="30px" alice="here" >}}

<div class="row justify-content-center mt-5">
<div class="col-sm-16 col-md-5">{{<button "/docs/manual/analytics/chart/" "報告書のグラフ化">}}</div>
<div class="col-sm-16 col-md-5">{{<button "/tips/factory/" "P管理図の作成">}}</div>
<div class="col-sm-16 col-md-5">{{<button "/tips/progress/" "目標と進捗">}}</div>
</div>

{{<nextArrow>}}

## Step4. 必要に応じてPDFやCSVにデータ出力しよう

通常はアプリ内で完結しますが、外部にデータを送る必要があることもあります。
例えば取引先に報告書のデータを見せたいときは報告書のデータをPDF出力できます。PDFにすればメールで送ることも、印刷して手渡しすることも簡単ですね。

またデータ自体を出力したいときにはCSV出力が便利です。Step3で行った集計をより細かく分析したいときにはCSV出力が役立ちます。使い慣れたエクセルでデータの集計ができるのですから、
バックアップ用、報告用、分析用などにぜひお役立てください。

{{<imgproc reports-to-pdf.png "PDF" />}}

<div class="row justify-content-center mt-5">
<div class="col-sm-16 col-md-8">{{<button "/docs/manual/read-report/pdf/" "PDF出力">}}</div>
<div class="col-sm-16 col-md-8">{{<button "/docs/manual/analytics/csv/" "CSV出力">}}</div>
</div>

{{<nextArrow>}}

## メアドもパスワードも後回しで試用できますよ

「ちょっと使ってみたいけど電話番号やメールアドレスを渡したくない」  
と思いますか？気持ちはよくわかります。私もそうです。
NipoPlusでは匿名アカウント機能を使うことでメールアドレスやパスワードの設定をせずとも仮のアカウントを簡単に発行できます。  
あなたのプライバシーを守りつつも手軽に体験できます。使ってみて継続したいと感じていただけたら匿名を正規アカウントへそのまま引き継ぐことも可能です。

<div style="color:red"><strong>※匿名アカウントは仮の状態のためログアウトやキャッシュクリアするとデータにアクセスできなくなります</strong></div>

{{<alice pos="right" icon="here">}}
あくまでも手軽に体験してもらうためのものです
{{</alice>}}

{{<appscreen filename="signup-anonymous" title="匿名アカウントはEmailやパスワードの設定をせずに利用できるアカウントです" >}}

使い方についてはクイックスタートガイドが参考になります。順序立てて日報を提出するまでの流れを解説しています

<div class="row justify-content-center">
<div class="col-sm-16 col-md-5">{{<button "/manual/account/tokumei/" "匿名アカウント">}}</div>
<div class="col-sm-16 col-md-6">{{<button "/quickstart/" "クイックスタートガイド">}}</div>
</div>

{{<nextArrow>}}

ここまでスクロールありがとうございました。ご不明な点はいつでもも遠慮なく[お問い合わせ](/others/inquery/)ください。

<div class="row justify-content-center">
<div class="col-sm-16 col-md-4">{{<button "/docs/system/android/" "Androidで使う">}}</div>
<div class="col-sm-16 col-md-4">{{<button "/docs/system/ios/" "iOSで使う">}}</div>
<div class="col-sm-16 col-md-5">{{<button "https://nipo-plus.web.app/#/" "NipoPLusを起動" "_blank">}}</div>
</div>
