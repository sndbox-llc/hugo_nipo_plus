+++
description = "テンプレートカスタムパーツの1つ。例えば「訪問件数」と「契約数」を入力すると契約率を自動でレポート内に埋め込む計算機能を提供します。"
tags = ["集計可能フォーム", "テンプレートパーツ", "テンプレート"]
title = "【算術フォーム】をレポートテンプレートに追加"
menuTitle = "🧩算術フォーム"
toc = true
weight = 101001117
aliases = ["/manual/initial-setting/template/calc/"]
images = []
+++

{{<icatch filename="calc-icatch" msg="自動で計算 四則演算OK" title="算術入力フォーム" fontsize="30px" alice="here">}}

|[集計可否](/docs/manual/analytics/)|[CSV出力](/docs/manual/analytics/csv/)|[PDF出力](/docs/manual/read-report/pdf/)|
|:---:|:---:|:---:|
|○|○|○|

算術フォームは他のフォームと大きく異なります。

- 直接データを入力できない
- 他の入力フォームを見て所定の計算式を実行する
- 計算結果がフォームの結果として表示される

## フォームをテンプレートに追加する{#add}

1. テンプレート編集画面を開く
1. フォームリストから「算術」をクリックして追加
1. 式の入力をクリック
1. 計算式を入力
1. 必要に応じてその他の設定を行う

{{<appscreen filename="template-edit-calc" title="算術フォームをレポートテンプレートに追加">}}

{{<nextArrow>}}

最も重要なのは計算式を正しく作成することです。

{{<appscreen filename="make-fomula" title="数式を入力してレポート内のデータから自動計算して結果をレポートに書き込みます">}}

計算式に使えるエレメントは以下の通り

- 基本的な四則演算（＋・ー・✕・÷）
- カッコ（計算優先度を変える）
- 他の入力フォーム（詳細は本ページ末尾参照）

割り算で端数が出る可能性があるものは四捨五入する位を指定できます。
電卓の要領で式を入力し、「保存して終了」ボタンをクリックして式を保存します。
式が正しく機能するかはプレビューで確認します。

{{<nextArrow>}}

{{<appscreen filename="calc-preview" title="算術の含まれたレポートのプレビュー">}}

## 算術で利用可能な入力フォーム{#required}

計算式として利用できる入力フォームは以下のとおりです。

- 数値入力フォーム
- レート入力フォーム
- スライダ入力フォーム
- 選択式入力フォーム

選択式入力フォーム、選択式の単語中に数字が含まれている場合、その数字が計算式に利用されます。
例えば次のように設計してください

<div class="container mt-4" style="padding:20px;border:1px solid #ccc">
  <label for="platformSelect" class="form-label">選択式の例:</label>
  <select class="form-select" id="platformSelect" name="platformSelect">
    <option value="">選択してください</option>
    <option value="windows">1.りんご</option>
    <option value="mac">2.ばなな</option>
    <option value="ios">3.みかん</option>
    <option value="android">4.メロン</option>
  </select>
</div>

{{<alice pos="right" icon="ok">}}
この例でいうとみかんが選ばれると算術上は3として計算されます
{{</alice>}}
