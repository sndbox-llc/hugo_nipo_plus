+++
description = "指やスタイラスペンを使って署名を入力できるフォームを報告書に追加できます"
tags = ["日報構成部品"]
title = "【署名・イラスト入力】を日報に追加"
menuTitle = "🧩署名・イラスト入力"
toc = true
weight = 101001110
contributors = []
aliases = ["/manual/initial-setting/template/sign/"]

+++

ペンや指を使って直筆サインやイラストを報告書に添付できます。

{{<icatch filename="input-method-pen" msg="直筆サインや 手書きのイラストに" title="署名入力フォーム" fontsize="30px" alice="tablet" >}}

|[集計可否](/docs/manual/analytics/)|[CSV出力](/docs/manual/analytics/csv/)|[PDF出力](/docs/manual/read-report/pdf/)|[文字検索](/docs/manual/read-report/list/)|
|:---:|:---:|:---:|:---:|
|✗|✗|○|✗|

{{< warning >}}
タッチパネル非対応の端末では使い勝手が悪いので推奨しません
{{< /warning >}}

アップルペンシルや互換品のペン、指で描画可能です。

{{<imgproc use-stylus-pen.jpg "iPad miniとApple Pencilを使って手書きの署名をタブレットに書き込んでいる様子" />}}

{{<btnCenter "/tips/sign/" "関連：署名の特設記事">}}


## フォームをテンプレートに追加する

1. テンプレート編集画面を開く
1. フォームリストから「署名」をクリックして追加
1. 必要に応じてその他の設定を行う


署名入力フォームの設定は以下の通り

<dl class="basic">
  <dt><a href="/tips/required/">入力必須</a></dt>
  <dd>これがONの場合、イラストが描画されていないと日報の提出ができません</dd>
  <dt>キャンバスサイズ</dt>
  <dd>以下から選択します。<ul><li>署名サイズ</li><li>全画面サイズ</li></ul>全画面サイズでは色変え機能も利用可能です。</dd>
</dl>

共通設定事項については以下を参照してください。
{{<btnCenter "/docs/manual/initial-setting/template/make/#common_setting" "共通設定項目">}}

{{< warning >}}
署名の場合幅は4〜8を推奨。全画面の場合は幅12を推奨
{{< /warning >}}

{{<appscreen filename="edit-report-template" title="署名入力フォームだけで構成された日報テンプレートを作成しました。この例をもとに入力・出力画面をご紹介していきます"  >}}
{{<nextArrow>}}
{{<appscreen filename="input" title="日報作成画面。署名ボタンをタップして署名入力ウインドウがポップ表示されます"  >}}

{{<nextArrow>}}

ボタンをクリックするとキャンバスが表示されます。下の画像は署名用のものです。
S/M/Lの３段階に調整できます。

{{<appscreen filename="write-signature" title="署名をスタイラスペンで書く"  >}}

イラスト用のキャンバスは次のようなデザインです。

{{<appscreen filename="draw-stylus-pen" title="イラスト用キャンバスの画面。カラーパレットや線の太さを調整するボタンなどが表示されている"  >}}

{{<nextArrow>}}

署名の書かれた報告書は指定した幅に合わせて描画されます。

{{<appscreen filename="post" title="署名入力フォームを含んだ日報を受信したときの見え方"  >}}

（※あくまで縮小されるだけでもとの署名データは同一です）

## イラストデータのダウンロード

CSV出力のオプション設定から「写真・ファイル等を出力する」をONにしてCSV出力すると別フォルダに署名やイラストがダウンロードされます。


{{<appscreen filename="download" title="バイナリファイルを一括ダウンロード"  >}}

これで[写真入力フォーム](/docs/manual/initial-setting/template/picture/)、[署名入力フォーム](/docs/manual/initial-setting/template/sign/)、[ファイル入力フォーム](/docs/manual/initial-setting/template/file/)それぞれののデータがCSV出力時にまとめてダウンロードされます。
それぞれの日報フォルダの中に写真や署名・データファイルなどがまとめられます。

### 署名の報告書をPDFに出力

幅の影響はPDFにおいても適用されます。狭い幅では署名が小さくなり、広い幅は大きく表示されます。
幅3以下だと**枠からはみ出してしまうことがある**ので注意してください。
