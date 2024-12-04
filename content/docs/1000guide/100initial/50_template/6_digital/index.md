+++
url = "/docs/manual/initial-setting/template/digital/"
title = "数値入力"
menuTitle = "🧩数値入力"
description = "テンプレートカスタムパーツの1つ。シンプルな数値の入力枠をレポートテンプレートに追加します。集計に対応しています。"
toc = true
weight = 156
tags = ["集計可能フォーム", "テンプレートパーツ", "テンプレート"]
contributors = []
+++

数値は文字と違い、集計や計算に適しています。
NipoPlusで数値の入力をするフォームは何種類かあります。

<dl class="basic">
<dt><a href="#commonNumber">数値入力</a></dt>
<dd>最も一般的な数値入力方式です。キーボード、または専用のテンキー（液晶画面）から入力可能</dd>
<dt><a href="#rate">レート入力</a></dt>
<dd>ネットショップでおなじみの★★★☆☆ のような入力です。星の最大数は任意に増減可能です</dd>
<dt><a href="#slider">スライダ入力</a></dt>
<dd>つまみをドラッグで動かして数値を入力できます。入力範囲が絞り込めるケース（例えば気温など）に適しています</dd>
<dt><a href="#range">範囲入力</a></dt>
<dd>最小〜最大までの範囲を入力できます。用途としてはやや限定的。最低気温〜最高気温など</dd>
<dt><a href="#calc">算術</a></dt>
<dd>他の数値入力フォームの値を参照し、自動で計算後の結果を表示します。例えば税別で入力した値を税込みにして出力するようなことが可能です</dd>
</dl>

|   名称   | [集計可否](/docs/manual/analytics/) | [CSV出力](/docs/manual/analytics/csv/) | [PDF出力](/docs/manual/read-report/state/#pdf_export) | [文字検索](/docs/manual/read-report/list/#searchFunction) |
| :------: | :---------------------------------: | :------------------------------------: | :---------------------------------------------------: | :-------------------------------------------------------: |
| 数値入力 |                 ⭕                  |                   ⭕                   |                          ⭕                           |                            ⭕                             |
|  レート  |                 ⭕                  |                   ⭕                   |                          ⭕                           |                            ⭕                             |
| スライダ |                 ⭕                  |                   ⭕                   |                          ⭕                           |                            ⭕                             |
|   範囲   |                  ✗                  |                   ⭕                   |                          ⭕                           |                            ⭕                             |
|   算術   |                 ⭕                  |                   ⭕                   |                          ⭕                           |                             ✗                             |

## 数値系の入力フォームをテンプレートに追加する{#addForm}

数値系の入力フォームはテンプレート編集画面の左パネルから追加できます

{{<icatch filename="img/add-parts-num" msg="数値入力フォームをテンプレートに追加してみよう" alice="here">}}

## 通常の数値入力{#commonNumber}

最も普通な数値の入力フォームをレポートに追加できます。小数点や負数もOK。「円・キロ」などの単位も任意に設定できます。
[実際の入力イメージはこちら](/docs/manual/write-report/parts/#number)

{{<icatch filename="img/math-input" msg="金額や距離・個数など、数値の入力に最適" alice="ok">}}

<details>
  <summary>数値入力フォーム詳細設定</summary>

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

補足:[共通設定事項](/docs/manual/initial-setting/template/make/#common_setting)

</details>

### 数値入力フォームのデータ活用{#subtotal_normal}

数値データは集計やグラフ化に適しています。たくさんのレポートから簡単にグラフや一覧表を作成可能です

<details>
  <summary>グラフ化</summary>

NipoPlusのグラフ化機能を使えばアプリ内のレポートをほぼリアルタイムにグラフ化できます。

{{<icatch filename="img/math_charts" msg="数値のデータをグラフ化してみたよ">}}

{{< link-card title="レポートをグラフ化する" description="操作ガイド" href="/docs/manual/analytics/chart/" >}}

</details>

<details>
  <summary>CSV</summary>

数値のレポートはCSVに出力できます。
設定で指定した数値の**単位**については、CSV上のラベル（1行目）に【】に囲まれて出力されます。

{{< excelTable >}}
提出日, 【Km】走行距離, 【リットル】消費ガソリン, 【件】訪問件数, 【件】内見込み, 【件】契約件数, 【千円】契約総額
2023/06/16, 3, 4, 2, 3, 22, 8
2023/06/15, 3, 5, 6, 2, 7, 9
2023/06/13, 25, 73, 36, 2, 4, 9
2023/06/11, 12, 3, 6, 1, 9, 45
2023/06/08, 11, 23, 33, 4, 16, 22
{{< /excelTable >}}

</details>

---

## レート入力{#rate}

ネットショップやレビューでおなじみの★を使った入力フォームです。星の上限は変更可能です。
[実際の入力イメージはこちら](/docs/manual/write-report/parts/#rate)

{{<icatch filename="img/input-rating" msg="レビューでおなじみ ☆☆★★★風な入力方式です。NipoPlusも高評価よろしくね"  alice="please">}}

レートはPDFに出力可能ですが、使用可能フォントの関係上★などのアイコンの代わりに●と◯で代用されます。

<details>
  <summary>レートフォーム詳細設定</summary>

<dl class="basic">
  <dt>入力必須</dt>
  <dd>これがONの場合、レートが0だとレポートの提出ができません（レートは2回同じレートをクリックすると0にできます</dd>
  <dt>集計する</dt>
  <dd>ON:集計機能で利用できます。集計が不要の場合はOFFにします</dd>

  <dt>最大値</dt>
  <dd>レートの最大数を設定します。推奨は5〜10です</dd>
  <dt>アイコンの種類</dt>
  <dd>星・ハート・いいね・ペット・ペンの5種類から選択できます。初期値は「星」です。見た目が変わりますが機能としては一緒です</dd>
  <dt>アイコンの大きさ</dt>
  <dd>小さめ・大きめ・最大の3種類から選択できます。初期値は「小さめ」です。</dd>
</dl>

補足:[共通設定事項](/docs/manual/initial-setting/template/make/#common_setting)

</details>

### レート入力フォームの集計{#subtotal_rate}

集計・グラフ化が可能です。レート入力は２つの集計方式があります。

- 単純に星の数を合計した集計方法
- 各レート毎の回数をカウントする方法

<details>
  <summary>レートフォームデータをグラフ化</summary>

レート入力の結果をグラフにした例

{{<icatch filename="img/rate-charts" msg="レポートに含まれるレートのデータを使って円グラフや折れ線グラフを作成できます">}}

{{< link-card title="レポートをグラフ化する" description="操作ガイド" href="/docs/manual/analytics/chart/" >}}

</details>

<details>
  <summary>レートフォームデータをCSV出力</summary>

レートのデータは[CSV出力オプション](/docs/manual/analytics/csvoption/)で列展開の形式を変更可能です。

**列展開がON**の場合のCSV出力例（一部省略）

{{< excelTable >}}
提出日, 調査地住所, 【0】日当たり, 【1】日当たり, 【2】日当たり, 【3】日当たり, 【4】日当たり, 【5】日当たり
2023/06/11 09:35, 栃木県日光市XXX-X, -, -, ⭕, -, -, -
2023/06/10 09:35, 栃木県那須烏山市XXX-X, -, -, ⭕, -, -, -
2023/06/09 09:35, 栃木県真岡市XXX, -, -, ⭕, -, -, -
2023/06/08 09:35, 栃木県宇都宮市XXXX, -, -, -, -, ⭕, -
{{< /excelTable >}}

**列展開がOFF**の場合のCSV出力例

{{< excelTable >}}
提出日, 調査地住所, 日当たり, 利便性, 周囲の静音性
2023/06/11 09:35, 栃木県日光市XXX-X, 2, 2, 1
2023/06/10 09:35, 栃木県那須烏山市XXX-X, 2, 1, 5
2023/06/09 09:35, 栃木県真岡市XXX, 2, 1, 2
2023/06/08 09:35, 栃木県宇都宮市XXXX, 4, 2, 5
{{< /excelTable >}}

列展開がONだと列数が多くなることに注意してください。

</details>

---

## スライダ入力{#slider}

キーボードを使わずに数値の入力が可能です。特にスマートフォンやタブレットなどのタッチパネルからの入力に適しています。
上限、下限があるため、一定の範囲内に収まる数値入力に限定されます
[実際の入力イメージはこちら](/docs/manual/write-report/parts/#slider)

{{<icatch filename="img/slider-input" msg="つまみをスライドさせて数値の入力ができます。キーボード不要のお手軽数値入力" alice="ok">}}

用途としては次のようなものがあります

- 室温など上限下限がある程度決まっているもの
- 湿度などパーセンテージで表現するもの

{{< callout context="caution" title="注意" icon="outline/alert-triangle" >}}
「本日の来客者」のように上限が予測できない項目には不向きです
{{< /callout >}}

<details>
  <summary>数値入力フォーム詳細設定</summary>

<dl class="basic">
  <dt>初期値</dt>
  <dd>レポート新規作成時にスライダのつまみが配置される位置です。最小値と最大値の中間となる値を推奨します</dd>
  <dt>最小値</dt>
  <dd>スライダーの左端の値です。負数も利用できます</dd>
  <dt>最大値</dt>
  <dd>スライダーの右端の値です。負数も利用できます</dd>
  <dt>集計する</dt>
  <dd>ON:集計機能で利用できます。集計が不要の場合はOFFにします</dd>
  <dt>刻み</dt>
  <dd>つまみを動かしたときに増減する値です。小数点の指定も可能です</dd>
  <dt>単位</dt>
  <dd>スライドの単位を指定します。初期値は「ポイント」です</dd>
  <dt>入力必須</dt>
  <dd>ON:提出時に未入力だと提出ができません</dd>
</dl>

{{< callout context="caution" title="注意" icon="outline/alert-triangle" >}}
レートの上限下限が極端に広い、または刻みの単位が極端に小さいと密度が高くなり操作性が低下します。
{{< /callout >}}

補足:[共通設定事項](/docs/manual/initial-setting/template/make/#common_setting)

</details>

### スライダのデータを集計{#subtotal_slider}

スライダは数値のためデータ集計に対応しています。

<details>
  <summary>グラフ化</summary>

{{<icatch filename="img/slider_charts" msg="スライダフォームのデータをグラフ化してみたよ">}}

</details>

<details>
  <summary>CSV出力</summary>

スラライダで入力された値は数値データとしてCSVに出力できます。単位は【】内に記載されます

{{< excelTable >}}
提出日, 【mm】線形誤差, 【mm】軸ズレ幅, 【mg】重量誤差, 検査報告
2023/06/13 11:04, 0, -4, 6,
2023/06/11 11:04, -3, -4, 4,
2023/06/10 11:04, -1, -2, -9,
2023/06/08 11:04, -7, 0, 9, 重量誤差過大
{{< /excelTable >}}

</details>

## 範囲{#range}

スライダにつまみが2つあります。これらを操作して範囲を入力できます。
用途としては最低水温〜最高水温など、用途がやや限定的なフォームです。
[実際の入力イメージはこちら](/docs/manual/write-report/parts/#range)

{{<icatch filename="img/range-input" msg="最低〜最大など 範囲の数値入力に" alice="ok">}}

<details>
  <summary>範囲入力フォーム詳細設定</summary>

<dl class="basic">
  <dt><a href="/tips/required/">入力必須</a></dt>
  <dd>これがONの場合、ファイルが添付されていない場合レポートの提出ができなくなります</dd>
  <dt>初期値</dt>
  <dd>レポート新規作成時に最初から文字を入力済みにできます。不要の場合は空欄にしておきます</dd>
  <dt>最小値</dt>
  <dd>スライダーの左端の値を指定します。負数も扱えます</dd>
  <dt>最大値</dt>
  <dd>スライダーの右端の値を指定します。負数も扱えます</dd>
  <dt>初期値（最小）</dt>
  <dd>レポート作成時にスライダーの最小つまみが配置される位置を指定します</dd>
  <dt>初期値（最大）</dt>
  <dd>レポート作成時にスライダーの最大つまみが配置される位置を指定します</dd>
  <dt>刻み</dt>
  <dd>つまみの1メモリ単位を指定します。例えば2なら 2 , 4 , 6のように増えていきます。小数点も指定できます。初期値は1です</dd>
  <dt>単位</dt>
  <dd>数値の単位を指定します。例えば気温であれば「度」と入力します。単位は入力時の画面左上にヒントとして表示されます</dd>
</dl>

{{< callout context="caution" title="注意" icon="outline/alert-triangle" >}}
レートの上限下限が極端に広い、または刻みの単位が極端に小さいと密度が高くなり操作性が低下します。
{{< /callout >}}

補足:[共通設定事項](/docs/manual/initial-setting/template/make/#common_setting)

</details>

### CSV出力{#csv_range}

最小と最大がそれぞれ独立した列に展開されます。

{{< excelTable >}}
提出日, 【最小】水槽A水温範囲, 【最大】水槽A水温範囲, 【最小】水槽B水温範囲, 【最大】水槽B水温範囲, 点検報告
2023/06/11 01:28, 22, 27, 11, 20,
2023/06/10 01:28, 24, 29, 14, 16,
2023/06/09 01:28, 20, 23, 12, 20,
2023/06/08 01:28, 22, 28, 14, 19, 水温異常なし
{{< /excelTable >}}

---

## 算術フォーム{#calc}

{{<icatch filename="img/calc-icatch" msg="簡単な四則演算ができる特殊なフォームです。自動で入力されるから手動入力はできないよ"  alice="pc">}}

算術フォームは他のフォームと大きく異なります。

- 直接データを入力できない
- 他の入力フォームを見て所定の計算式を実行する
- 計算結果がフォームの結果として表示される

[実際の入力イメージはこちら](/docs/manual/write-report/parts/#calc)

最も重要なのは計算式を正しく作成することです。

{{<icatch filename="img/make-fomula" msg="正しい計算式を作ってあげてね" alice="guide">}}

計算式に使えるエレメントは以下の通り

- 基本的な四則演算（＋・ー・✕・÷）
- カッコ（計算優先度を変える）
- 他の入力フォーム（詳細は本ページ末尾参照）

割り算で端数が出る可能性があるものは四捨五入する位を指定できます。
電卓の要領で式を入力し、「保存して終了」ボタンをクリックして式を保存します。
式が正しく機能するかはプレビューで確認してください。

{{<nextArrow>}}

### 算術で利用可能な入力フォーム{#required}

計算式として利用できる入力フォームは以下のとおりです。

- [数値入力フォーム](/docs/manual/initial-setting/template/digital/#commonNumber)
- [レート入力フォーム](/docs/manual/initial-setting/template/digital/#rate)
- [スライダ入力フォーム](/docs/manual/initial-setting/template/digital/#slider)
- [選択式入力フォーム](/docs/manual/initial-setting/template/selects/#plain)

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

※この例でいうとみかんが選ばれると算術上は3として計算されます

### 反復入力フォームの中で算術を使う{#form_arithmetic}

Version1.60.0から反復入力の中で算術フォームを利用できるようになりました。反復の中で使う場合、その反復の中で計算を完結させる必要があります。（反復の外のデータは参照できません）
