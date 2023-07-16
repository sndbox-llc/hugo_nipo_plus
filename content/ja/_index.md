+++
# title = "NipoPlus" h1が重複するためここでは使わない
description = "180円！激安価格です。日報・帳票・点検表などテンプレートを自由に作れます。PC/モバイル機器にも完全対応。集計グラフ・PDF出力もOK.クラウド型日報App　NipoPlusをお試しください"
lead = "製造業をはじめ、ディーラー、林業、商社など様々な企業で利用頂いております"
date = "2023-04-01"
draft = false
images = []
aliases = ["/old/", "/docs/old/_about/"]
mermaid = true
+++


{{<nextArrow>}}

<dl class="faq">
<dt>結局何ができるの？</dt>
<dd>日報やチェックシートのような様式のある報告書をスマホやタブレットから簡単に入力できます</dd>
</dl>

日常業務の流れをサクッと見てみましょう。全部で４ステップです。

## Step0.日報のテンプレートを作る{#make_template}

入力フォームを横に並べていくだけで「日報・チェックシート・作業報告書」など様々な報告書のテンプレートが簡単に作れます。入力フォームは「[テキスト](/docs/manual/initial-setting/template/text/)」や「[署名](/docs/manual/initial-setting/template/sign/)」「[選択式](/docs/manual/initial-setting/template/select/)」など色々ありますので、お好みで自由に選んで作れます。
テンプレートは複数保存でき、報告書作成時にテンプレートを選ぶと利用できます。

{{<icatch filename="template" msg="入力フォームを選んで 幅調整すれば完成" title="入力の必須が空欄の場合は日報が提出できません" fontsize="30px" alice="here">}}

<div style="color:red;font-weight:bold;">▲このボタンを押すとPC/スマホで見え方の違いがわかります</div>

１行の幅は最大で12です。例えば二分割にしたいなら6,6と設定し、３分割にしたいなら4,4,4と設定します。
はみ出したら２行目に行きます。
シンプルに横に並べるだけなのでPCでもスマートフォンでも最適なレイアウトに自動で切り替わります。
テンプレートは一回作れば繰り返し何度でも使えます。なので通常は初期設定時に作ればあとは不要ですね。だからStep0です

{{<btnCenter "/docs/manual/initial-setting/template/make/" "テンプレート作成を見る">}}

{{<nextArrow>}}

## Step1.報告書を書きます{#write_report}

日報テンプレートに沿って日報を書きましょう。スマホ・タブレット・PCから日報の作成が可能です。スマホのように画面が狭い端末の場合はテンプレートのレイアウトが自動で縦１直線に変化するので横にスクロールする必要は有りません。
テンプレートがあるから何を書けばいいか一目瞭然ですね。

日報作成時には様々なサポート機能で日報作成者を補助します

<div class="mainContent">

- 入力必須機能で記入漏れを未然に防ぐことが可能です
- 説明用画像をテンプレートに埋め込むことで視覚的にわかりやすく伝えることができます
- 入力順序の指定により手順を飛ばした入力ができないように制御できます

</div>

{{<icatch filename="input-order" msg="入力順指定すれば スタッフは迷わない" title="入力の必須が空欄の場合は日報が提出できません" fontsize="30px" alice="here">}}

書いた日報を提出するのも簡単です。エクセルで作る日報のように「名前をつけて保存」をする必要は有りません。
提出先の上司を指定して「提出」ボタンを押すだけです。

もし提出先の指定すら自動化させたい場合は、予め管理者が提出先を固定することもできます。こうしておけば現場のスタッフは本当に枠内のフォームを埋めて提出ボタンを押すだけで済むようになります。

{{<btnCenter "/tips/mobile-device/" "モバイル機器で日報を書く">}}

{{<nextArrow>}}

## Step2.報告書を受け取って承認します{#read_report}

スタッフが書いた報告書は上司に送られます。
報告書を読んで問題がなければ承認ボタンを押してください。これでその報告書は編集が不可能な固定された状態になります。
承認は複数人がリレーで行うこともできます。
また報告書に対してコメントを残すことも可能です。

{{<icatch filename="report-show" msg="承認やコメント タグ付けや検索も" title="コメントでスタッフとのコミニケーションをとることや、複数スタッフによる日報の承認リレーも利用できます。" fontsize="30px" alice="ok">}}

報告書が届いたらメール通知やアプリ内のお知らせがあるので見落としの心配もありません。
また承認されたら報告者に対しても通知が発行されます。

<div class="row justify-content-center mt-5">
<div class="col-sm-16 col-md-8">{{<button "/docs/manual/read-report/_about/" "報告書を読む">}}</div>
<div class="col-sm-16 col-md-8">{{<button "/docs/manual/notice/email/" "メール通知">}}</div>
</div>

{{<nextArrow>}}

## Step3. 報告書を集計します{#subtotal_report}

テンプレートの構成によっては集計できる項目があります。これらのデータをスタッフ毎に集計したり、日別で増減を見ることで様々な意思決定に役立てることができます。
一覧表だけでなくデータの可視化（いわゆるBI化）も可能。可視化の代表といえばそう、グラフですね。

{{<icatch filename="chart" msg="日報をグラフ化して 視覚的に分析が可能" title="報告書をグラフ化する" fontsize="30px" alice="pc">}}


{{<btnCenter "/tips/analytics/" "日報をワンクリックで集計する">}}


{{<nextArrow>}}

## Step4. 必要に応じてPDFやCSVにデータ出力しよう{#export_csv_pdf}

通常はアプリ内で完結しますが、外部にデータを送る必要があることもあります。
例えば取引先に報告書のデータを見せたいときは報告書のデータをPDF出力できます。PDFにすればメールで送ることも、印刷して手渡しすることも簡単ですね。

またデータ自体を出力したいときにはCSV出力が便利です。Step3で行った集計をより細かく分析したいときにはCSV出力が役立ちます。使い慣れたエクセルでデータの集計ができるのですから、
バックアップ用、報告用、分析用などにぜひお役立てください。

{{<imgproc pdf.png "日報やチェックシートなどのデータを簡単にPDFに変換してダウンロードできます" />}}


<div class="row justify-content-center mt-5">
<div class="col-sm-16 col-md-8">{{<button "/docs/manual/read-report/pdf/" "PDF出力">}}</div>
<div class="col-sm-16 col-md-8">{{<button "/tips/sales_report/" "CSV出力">}}</div>
</div>

{{<nextArrow>}}

## 無料プランもあります。今すぐ始めませんか？{#prices}

{{<mermaid align="center">}}
graph LR;
  アカウント作成 --> トライアル期間 --> 期間満了 -->  無料プランへ降格
  無料プランへ降格--> 無料で利用し続ける
  無料プランへ降格--> 有料プランへ加入する
{{< /mermaid >}}

<div class="mainContent">

1. アカウントが作られたら30日のトライアル期間がスタート（すべて利用可能）
1. トライアル期間がすぎると無料プランへ切り替わります(一部機能制限がかかる)
1. 無料で継続するか、有料プランの加入を検討してください

</div>

{{<alice pos="right" icon="book">}}
<a href="/docs/manual/quickstart/">マニュアルはこちらです</a>
{{</alice>}}

{{<btnCenter "https://nipo-plus.web.app/#/" "Web版のNipoPlusを起動" "_blank">}}

<div  style="text-align:right">
<a href="/docs/system/ios/" ><img loading="lazy" src='/images/apple.svg' width="108.85157" height="40" style="width:200px; height:auto" alt="ios App Store"></a>
<a href="/docs/system/android/"><img loading="lazy" src="google-play-badge.png" width="646" height="192" style="width:240px; height:auto" alt="Android Google Play Store"></a>
</div>
