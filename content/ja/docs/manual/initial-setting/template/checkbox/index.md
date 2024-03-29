+++
description = "テンプレートカスタムパーツの1つ。✅これをレポート内に追加できます。"
tags = ["集計可能フォーム", "テンプレートパーツ", "テンプレート"]
title = "【チェックボックス入力】をレポートテンプレートに追加"
menuTitle = "🧩チェックボックス入力"
toc = true
weight = 101001109
aliases = ["/manual/initial-setting/template/checkbox/", "/manual/org/groupsetting/template/checkbox/"]
images = []
+++

あまりにも有名なのでもはや説明不要ですね。次のようなものです。

<div class="form-check" style="padding:20px;border:1px solid #ccc">
<div style="margin-left:20px;">
  <input class="form-check-input" type="checkbox" id="myCheckbox" name="myCheckbox">
  <label class="form-check-label" for="myCheckbox">ランプの色が緑色か？</label>
  </div>
</div>

このようなチェックボックスをレポートに追加できます。

|[集計可否](/docs/manual/analytics/)|[CSV出力](/docs/manual/analytics/csv/)|[PDF出力](/docs/manual/read-report/pdf/)|検索|
|:---:|:---:|:---:|:---:|
|○|○|○|✗|

{{<icatch filename="input-method-checkbox" msg="YES・NO 2択で答えるならこれ" title="チェックボックス入力フォーム" fontsize="30px" alice="ok">}}

用途としては次のようなものがあります

- 車両使用の有無
- トラブルの有無
- 手順に従ったかの確認

## フォームをテンプレートに追加する{#add}

1. テンプレート編集画面を開く
1. フォームリストからYes/Noをクリックして追加
1. メモを入力（チェックボックスの右隣に表示される）
1. 必要に応じて設定を行う

チェックボックスフォームの設定は以下の通り。

<dl class="basic">
  <dt>メモ</dt>
  <dd>チェックボックスの右隣に表示される文字</dd>
  <dt>入力必須</dt>
  <dd>ON:提出時にこのチェックボックスがONでないと提出ができないようになります</dd>
  <dt>初期状態でON</dt>
  <dd>ON:レポート作成時にチェックボックスはONの状態でスタート</dd>
  <dt>集計する</dt>
  <dd>ON:集計機能で利用できます。集計が不要の場合はOFFにします</dd>
  <dt>CSV出力時列を展開</dt>
  <dd><a href="/docs/manual/analytics/csvoption/">CSV出力オプションを参照</a></dd>
  <dt>形状</dt>
  <dd><ul><li>スイッチ</li><li>ボックス</li></ul>から選択します</dd>
</dl>

共通設定事項については以下を参照してください。
{{<btnCenter "/docs/manual/initial-setting/template/make/#common_setting" "共通設定項目">}}

メモの使われ方がチェックボックスだけ他の項目と異なり、ボックスの横に配置されるという点にだけ注意してください。

{{<appscreen filename="template-edit-checkbox"  title="チェックボックスをテンプレートに追加する設定画面">}}

{{<nextArrow>}}

{{<appscreen filename="checkbox-preview"  title="チェックボックスが含まれたレポートのプレビュー">}}

## チェックボックスのデータを集計{#subtotal}

チェックボックスのデータは集計対象です。過去データ推移や累積、そこからグラフの作成も可能です。

{{<appscreen filename="pie-charts" title="チェックボックスのデータを円グラフにしたイメージ">}}

{{<btnCenter "/docs/manual/analytics/chart/" "レポートをグラフ化する">}}

## チェックボックスのデータをCSVに出力{#csv}

出力形式を変えることができます。

{{<btnCenter "/docs/manual/analytics/csvoption/" "CSV出力オプション">}}

列展開がONの場合のCSV出力例

{{< excelTable >}}
提出日, 【ON】質問A, 【OFF】質問A, 【ON】質問B, 【OFF】質問B, 業務内容
2023/06/06, ◯, -, ◯, -, 
2023/06/06, -, ◯, -, ◯, 
2023/06/06, -, ◯, ◯, -, 
2023/06/06, ◯, -, -, ◯, 
2023/06/06, ◯, -, ◯, -, これはサンプルです
{{< /excelTable >}}



列展開がOFFの場合のCSV出力例

{{< excelTable >}}
提出日, 質問A, 質問B, 業務内容
2023/06/06 11:15, ON, ON, 
2023/06/05 11:15, OFF, OFF, 
2023/06/04 11:15, OFF, ON, 
2023/06/02 11:15, ON, OFF, 
2023/06/01 11:15, ON, ON, これはサンプルです
{{< /excelTable >}}
