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

---

具体的な業務フローを見てみましょう.

## Step0.オリジナルのテンプレートを作ろう

10種類を超す入力フォームを組み合わせるだけで、「日報・チェックシート・作業報告書」など様々な報告書のテンプレートが簡単に作れます。テンプレートは複数保存でき、報告書作成時にテンプレートを選ぶと利用できます。

{{<icatch filename="template" msg="入力フォームを選んで 幅調整すれば完成" title="入力の必須が空欄の場合は日報が提出できません" fontsize="30px" alice="here">}}

テンプレートは一回作れば繰り返し何度でも使えます。なので通常は初期設定時に作ればあとは不要ですね。だからStep0です。

{{<btnCenter "/docs/manual/initial-setting/template/make/" "テンプレート作成を見る">}}

{{<nextArrow>}}

## Step1.報告書を書きます

管理者が作った報告書のテンプレートに沿って業務報告を書きましょう。
テンプレートがあるから書き手は**何を書くべきかがわかる**し、入力必須を指定すれば記入漏れといった問題も防げます。
入力順序の指定もすれば手順を飛ばして入力できないように制御できます。例えば次の画像のように。

{{<icatch filename="input-order" msg="入力順指定すれば スタッフは迷わない" title="入力の必須が空欄の場合は日報が提出できません" fontsize="30px" alice="here">}}

レスポンシブに対応しているのでPC・タブレット、スマートフォンどのデバイスからでも報告書の作成が可能です。興味のある方は今ご覧のページを狭めて見てください。
スマートフォンの画像に切り替わることが確認できます。
報告書のテンプレートはカスタマイズが自由自在です。日報・作業報告書・品質チェックシートなど、**現場で使う様々な「報告書」をNipoPlus一つで管理可能**になります。

報告書を「読める人」と「読めない人」「承認できる人」など細かい指定も可能です。

{{<btnCenter "/tips/mobile-device/" "モバイル機器で日報を書く">}}

{{<nextArrow>}}

## Step2.報告書を受け取って承認します

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

## Step3. 報告書を集計します

テンプレートの構成によっては集計できる項目があります。これらのデータをスタッフ毎に集計したり、日別で増減を見ることで様々な意思決定に役立てることができます。
一覧表だけでなくデータの可視化（いわゆるBI化）も可能。可視化の代表といえばそう、グラフですね。

{{<icatch filename="chart" msg="日報をグラフ化して 視覚的に分析が可能" title="報告書をグラフ化する" fontsize="30px" alice="pc">}}


{{<btnCenter "/tips/analytics/" "日報をワンクリックで集計する">}}


{{<nextArrow>}}

## Step4. 必要に応じてPDFやCSVにデータ出力しよう

通常はアプリ内で完結しますが、外部にデータを送る必要があることもあります。
例えば取引先に報告書のデータを見せたいときは報告書のデータをPDF出力できます。PDFにすればメールで送ることも、印刷して手渡しすることも簡単ですね。

またデータ自体を出力したいときにはCSV出力が便利です。Step3で行った集計をより細かく分析したいときにはCSV出力が役立ちます。使い慣れたエクセルでデータの集計ができるのですから、
バックアップ用、報告用、分析用などにぜひお役立てください。

{{<imgproc reports-to-pdf.png "PDF" />}}

<div class="row justify-content-center mt-5">
<div class="col-sm-16 col-md-8">{{<button "/docs/manual/read-report/pdf/" "PDF出力">}}</div>
<div class="col-sm-16 col-md-8">{{<button "/tips/sales_report/" "CSV出力">}}</div>
</div>

{{<nextArrow>}}

## 無料プランもあります。今すぐ始めませんか？

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
