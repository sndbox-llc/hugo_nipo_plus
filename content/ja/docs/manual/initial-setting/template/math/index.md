+++
description = "テンプレートカスタムパーツの1つ。シンプルな数値の入力枠をレポートテンプレートに追加します。集計に対応しています。"
tags = ["集計可能フォーム", "テンプレートパーツ", "テンプレート"]
title = "【数値入力】をレポートテンプレートに追加"
menuTitle = "🧩数値入力"
toc = true
weight = 101001116
aliases = ["/manual/initial-setting/template/math/", "/manual/org/groupsetting/template/math/"]
images = ["math_tablet.png"]
+++

最も普通な数値の入力をレポートに追加できます。小数点や負数もOK。

{{<icatch filename="math" msg="金額や距離・個数等 数値の入力に最適" title="数値入力フォーム" fontsize="30px" alice="ok">}}

|[集計可否](/docs/manual/analytics/)|[CSV出力](/docs/manual/analytics/csv/)|[PDF出力](/docs/manual/read-report/pdf/)|[文字検索](/docs/manual/read-report/list/)|
|:---:|:---:|:---:|:---:|
|○|○|○|○|

主な用途としては次のようなものがあります

- 移動距離
- 訪問件数
- 売上高
- 製造高
- 不良数

## フォームをテンプレートに追加する{#add}

1. テンプレート編集画面を開く
1. フォームリストから「数値」をクリックして追加
1. 単位を入力（円やKmなど）
1. 必要に応じてその他の設定を行う

数値入力フォームの設定は以下の通り

<dl class="basic">
  <dt>入力必須</dt>
  <dd>これがONの場合、数値が空欄だとレポートの提出ができなくなります</dd>
  <dt>初期値</dt>
  <dd>レポートの新規作成時に値をセットしたい場合は数値を入力してください。不要の場合は空欄にしておきます</dd>
  <dt>集計する</dt>
  <dd>ON:集計機能で利用できます。集計が不要の場合はOFFにします</dd>
  <dt>単位</dt>
  <dd>数値入力の右端に表示されます。「個」や「枚」「箱」など用途にあった文字を入力してください</dd>
</dl>

共通設定事項については以下を参照してください。
{{<btnCenter "/docs/manual/initial-setting/template/make/#common_setting" "共通設定項目">}}

{{<appscreen filename="math-template-edit" title="数値入力フォームだけで構成されたテンプレートの作成画面イメージ。単位や色などはここで自由に変更可能です">}}

{{<nextArrow>}}
レポート作成画面
{{<appscreen filename="input" title="数値入力フォームの入力画面イメージ。">}}

- 数値以外は入力できないので注意してください。
- 桁が大きくなる場合はカンマが提出時に自動で付きます。手動では入れられません。

## 数値入力フォームの集計{#subtotal}

数値入力フォームは集計・グラフ化が可能です。

{{<appscreen filename="charts" title="数値のデータをグラフ化する">}}

{{<btnCenter "/docs/manual/analytics/chart/" "レポートをグラフ化する">}}

## データをCSVに出力{#csv}

数値のレポートはCSVに出力できます。オプションは有りません。
設定で指定した数値の**単位**については、CSV上のラベル（1行目）に【】に囲まれて出力されます。


{{< excelTable >}}
提出日, 【Km】走行距離, 【リットル】消費ガソリン, 【件】訪問件数, 【件】内見込み, 【件】契約件数, 【千円】契約総額
2023/06/16, 3, 4, 2, 3, 22, 8
2023/06/15, 3, 5, 6, 2, 7, 9
2023/06/13, 25, 73, 36, 2, 4, 9
2023/06/11, 12, 3, 6, 1, 9, 45
2023/06/08, 11, 23, 33, 4, 16, 22
{{< /excelTable >}}

