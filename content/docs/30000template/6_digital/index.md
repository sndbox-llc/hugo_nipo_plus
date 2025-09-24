+++
url = "/docs/template/digital/"
aliases = ["/docs/manual/initial-setting/template/digital/"]
title = "🧩数値入力フォーム - 実績記録・データ集計・KPI管理を効率化"
menuTitle = "🧩数値入力"
description = "NipoPlusの数値入力フォームは、売上、生産数、点検値、稼働時間など、あらゆる数値を正確に記録・集計するためのテンプレートパーツです。シンプルな数値入力から、レーティング、スライダ、範囲指定、さらには自動計算まで、多様な形式に対応。日報や製造現場のデータ、業務報告における数値管理とデータ分析を強力にサポートします。データに基づいた意思決定を加速させましょう。"
toc = true
weight = 30706
tags = ["集計可能フォーム", "テンプレートパーツ", "数値入力", "データ集計", "データ分析",  "実績記録", "生産数", "測定値", "コスト計算", "自動計算", "製造業DX"]
contributors = []
+++

数値データは、NipoPlusで**客観的な実績を記録し、そのデータを分析する**上で非常に重要です。文字情報では難しい「集計」や「計算」に適しており、**業務の状況を数値で可視化し、データに基づいた意思決定**を可能にします。

NipoPlusでは、多様な数値入力ニーズに応えるために、以下の5種類のフォームを提供しています。これらを活用することで、**日報の売上報告**はもちろん、**製造ラインの生産数、設備点検の計測値、作業コストの計算**など、幅広い業務の数値管理を効率化できます。

<dl class="basic">
<dt><a href="#commonNumber"><strong>数値入力（汎用）</strong></a></dt>
<dd>最も一般的な数値入力方式です。売上や訪問件数、生産数、部品数など、様々な数値を記録できます。</dd>
<dt><a href="#rate"><strong>レート入力</strong></a></dt>
<dd>5段階評価のようなレビュー形式の入力です。<strong>製品やサービスの評価、満足度、検査項目の重要度</strong>などを数値で表現するのに適しています。</dd>
<dt><a href="#slider"><strong>スライダ入力</strong></a></dt>
<dd>つまみをドラッグして数値を入力します。<strong>気温や湿度、圧力、騒音レベル</strong>など、特定の範囲内の数値を直感的に入力するのに適しています。</dd>
<dt><a href="#range"><strong>範囲入力</strong></a></dt>
<dd>最小値から最大値までの範囲を入力できます。<strong>製品の許容温度範囲、設備の稼働限界値</strong>など、変動する数値の範囲を記録する際に便利です。</dd>
<dt><a href="#calc"><strong>算術（自動計算）</strong></a></dt>
<dd>他の数値フォームの値を参照し、<strong>自動で計算結果を表示する特殊なフォーム</strong>です。<strong>合計金額、稼働率、不良率</strong>など、手計算を不要にし、入力ミスを防ぎます。</dd>
</dl>

|   <strong>名称</strong>   |    **集計可否**     |     **CSV出力**     |     **PDF出力**     |    **文字検索**     |
| :-----------------------: | :-----------------: | :-----------------: | :-----------------: | :-----------------: |
| <strong>数値入力</strong> | <strong>⭕</strong> | <strong>⭕</strong> | <strong>⭕</strong> | <strong>⭕</strong> |
|  <strong>レート</strong>  | <strong>⭕</strong> | <strong>⭕</strong> | <strong>⭕</strong> | <strong>⭕</strong> |
| <strong>スライダ</strong> | <strong>⭕</strong> | <strong>⭕</strong> | <strong>⭕</strong> | <strong>⭕</strong> |
|   <strong>範囲</strong>   | <strong>✗</strong>  | <strong>⭕</strong> | <strong>⭕</strong> | <strong>⭕</strong> |
|   <strong>算術</strong>   | <strong>⭕</strong> | <strong>⭕</strong> | <strong>⭕</strong> | <strong>✗</strong>  |

数値系の入力フォームはテンプレート編集画面の左パネルから追加できます。

{{<icatch filename="img/add-parts-num" msg="売上、生産数、点検値など、実績記録やデータ分析に必要な数値入力フォームをテンプレートに追加してみましょう" alice="here">}}

## 通常の数値入力 - 基本的な数値データを記録{#commonNumber}

最も一般的な数値の入力フォームを日報に追加できます。売上高や訪問件数、<strong>生産数、出荷数、在庫数</strong>など、様々な数値を記録するのに適しています。小数点や負数も入力可能です。「円」「個」「キロ」などの**単位も任意に設定**できます。

[<strong>実際の入力イメージはこちら</strong>](/docs/manual/write-report/parts/#number)

{{<icatch filename="img/math-input" msg="金額、走行距離、生産個数、設備稼働時間など、あらゆる数値の入力に最適です。単位も自由に設定できます" alice="ok">}}

数値入力フォーム詳細設定は以下の通りです。

<dl class="basic">
<dt><strong>入力必須</strong></dt>
<dd>ONにすると、数値が空欄だと日報の提出ができなくなります。<strong>重要なKPI（例：生産数、契約件数）の入力漏れを防ぐ</strong>際に設定します。</dd>
<dt><strong>初期値</strong></dt>
<dd>日報の新規作成時に値をセットしたい場合は数値を入力してください。不要の場合は空欄にしておきます。<strong>ゼロからのスタート</strong>や<strong>基準値</strong>を設定する際に便利です。</dd>
<dt><strong>集計する</strong></dt>
<dd>ONにすると[集計機能](/docs/manual/analytics/)で利用できます。集計が不要の場合はOFFにします。<strong>数値の合計、平均、最大値、最小値などを自動で算出</strong>し、データ分析に役立ちます。</dd>
<dt><strong>単位</strong></dt>
<dd>数値入力の右端に表示されます。「個」「枚」「箱」「トン」「リットル」「℃」など、用途にあった文字を入力してください。<strong>データの意味を明確にする</strong>ために重要です。</dd>
</dl>

補足：[共通設定事項](/docs/template/make/#common_setting)もご確認ください。

**データ分析とCSV出力:**
数値データは[集計やグラフ化](/docs/manual/analytics/chart/)に適しています。 NipoPlusのグラフ化機能を使えば、アプリ内の日報データをほぼリアルタイムに<strong>推移グラフや内訳グラフ</strong>として表示できます。これにより、<strong>売上実績の推移、生産数の変動、訪問件数の傾向</strong>などを簡単に可視化できます。

{{<icatch filename="img/math_charts" msg="数値データをグラフ化してみました。売上や生産数の推移、訪問件数の変動など、様々な実績を視覚的に把握できます" alice="ok">}}

数値の日報はCSVに出力できます。
設定で指定した数値の<strong>単位</strong>については、CSV上のラベル（1行目）に【】に囲まれて出力されます。

{{< excelTable >}}
提出日, 【Km】走行距離, 【リットル】消費ガソリン, 【件】訪問件数, 【件】内見込み, 【件】契約件数, 【千円】契約総額
2023/06/16, 3, 4, 2, 3, 22, 8
2023/06/15, 3, 5, 6, 2, 7, 9
2023/06/13, 25, 73, 36, 2, 4, 9
2023/06/11, 12, 3, 6, 1, 9, 45
2023/06/08, 11, 23, 33, 4, 16, 22
{{< /excelTable >}}

---

## レート入力 - 直感的な評価や満足度を記録{#rate}

ネットショップやレビューサイトでおなじみの★を使った評価入力フォームです。星の上限は変更可能で、<strong>製品やサービスの満足度、従業員の作業評価、検査項目の重要度</strong>など、直感的な評価を数値として記録するのに適しています。

[<strong>実際の入力イメージはこちら</strong>](/docs/manual/write-report/parts/#rate)

{{<icatch filename="img/input-rating" msg="レビューでおなじみ⭐⭐⭐⭐⭐風な入力方式です。直感的な評価や満足度、重要度を簡単に記録できます" alice="please">}}

レートはPDFに出力可能ですが、使用可能フォントの関係上、★などのアイコンの代わりに●と◯で代用されます。

レートフォーム詳細設定は以下の通りです。

<dl class="basic">
<dt><strong>入力必須</strong></dt>
<dd>ONにすると、レートが0だと日報の提出ができません（レートは2回同じレートをクリックすると0にできます）。<strong>必須の評価項目</strong>に設定します。</dd>
<dt><strong>集計する</strong></dt>
<dd>ONにすると[集計機能](/docs/manual/analytics/)で利用できます。集計が不要の場合はOFFにします。<strong>評価の傾向や平均値を把握</strong>するのに役立ちます。</dd>
<dt><strong>最大値</strong></dt>
<dd>レートの最大数を設定します。推奨は5〜10です。<strong>評価スケールに合わせて調整</strong>してください。</dd>
<dt><strong>アイコンの種類</strong></dt>
<dd>星・ハート・いいね・ペット・ペンの5種類から選択できます。初期値は「星」です。見た目が変わりますが機能としては一緒です。<strong>報告内容のイメージに合うアイコン</strong>を選べます。</dd>
<dt><strong>アイコンの大きさ</strong></dt>
<dd>小さめ・大きめ・最大の3種類から選択できます。初期値は「小さめ」です。</dd>
</dl>

補足：[共通設定事項](/docs/template/make/#common_setting)もご確認ください。

**データ分析とCSV出力:**
レートフォームのデータは[集計・グラフ化](/docs/manual/analytics/chart/)が可能です。レート入力は2つの集計方式があります。

- 単純に星の数を合計した集計方法（<strong>総評価点の算出</strong>）
- 各レート毎の回数をカウントする方法（<strong>評価の内訳把握</strong>）

【グラフ化】

レート入力の結果をグラフにした例です。<strong>顧客満足度の推移、製品評価の分布</strong>などを視覚的に把握できます。

{{<icatch filename="img/rate-charts" msg="日報に含まれるレートのデータを使って円グラフや折れ線グラフを作成できます。評価の傾向を視覚的に把握しましょう" alice="ok">}}

{{< link-card title="日報をグラフ化する" description="操作ガイド" href="/docs/manual/analytics/chart/" >}}

【CSV出力】

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

---

## スライダ入力 - 直感的な範囲入力と視覚的な記録{#slider}

キーボードを使わずに、**つまみをドラッグする直感的な操作で数値を入力できる**フォームです。特にスマートフォンやタブレットなどのタッチパネルからの入力に適しています。上限、下限があるため、**特定の範囲内に収まる数値入力**に限定されます。

[<strong>実際の入力イメージはこちら</strong>](/docs/manual/write-report/parts/#slider)

{{<icatch filename="img/slider-input" msg="つまみをスライドさせて数値を入力できます。キーボード不要で、気温、湿度、圧力など、特定の範囲内の数値を手軽に記録しましょう" alice="ok">}}

**主な用途例:**

- <strong>室温、湿度、圧力、騒音レベル</strong>など、上限下限がある程度決まっている環境データの記録。
- <strong>パーセンテージ</strong>で表現する進捗度や達成率の入力。
- <strong>設備の異常度合い</strong>を段階的に示す記録。

{{< callout context="caution" title="不向きな用途に注意" icon="outline/alert-triangle" >}}
「本日の来客者」のように、<strong>上限が予測できない、あるいは変動幅が非常に大きい項目</strong>には不向きです。このような場合は[数値入力（汎用）](#commonNumber)をご利用ください。
{{< /callout >}}

**設定項目詳細:**

<dl class="basic">
<dt><strong>初期値</strong></dt>
<dd>日報新規作成時にスライダのつまみが配置される位置です。<strong>最小値と最大値の中間となる値を推奨</strong>します。<strong>基準値</strong>として設定することも可能です。</dd>
<dt><strong>最小値</strong></dt>
<dd>スライダーの左端の値です。負数も利用できます。<strong>測定の下限値</strong>や<strong>許容範囲の最低値</strong>を設定します。</dd>
<dt><strong>最大値</strong></dt>
<dd>スライダーの右端の値です。負数も利用できます。<strong>測定の上限値</strong>や<strong>許容範囲の最大値</strong>を設定します。</dd>
<dt><strong>集計する</strong></dt>
<dd>ONにすると[集計機能](/docs/manual/analytics/)で利用できます。集計が不要の場合はOFFにします。<strong>数値の平均値や推移をグラフで把握</strong>するのに役立ちます。</dd>
<dt><strong>刻み</strong></dt>
<dd>つまみを動かしたときに増減する値です。小数点以下の指定も可能です。初期値は1です。<strong>より細かい単位で記録したい</strong>場合に設定します。</dd>
<dt><strong>単位</strong></dt>
<dd>スライダの数値の右側に表示されます。初期値は「ポイント」です。「℃」「％」「hPa」など、用途に合わせた単位を設定してください。<strong>データの意味を明確にする</strong>ために重要です。</dd>
<dt><strong>入力必須</strong></dt>
<dd>ONにすると、提出時に未入力だと提出ができません。<strong>重要な環境データや測定値の入力漏れを防ぐ</strong>際に設定します。</dd>
</dl>

{{< callout context="caution" title="操作性の低下に注意" icon="outline/alert-triangle" >}}
<strong>レートの上限下限が極端に広い</strong>、または<strong>刻みの単位が極端に小さい</strong>と、スライダの密度が高くなり操作性が低下する可能性があります。適切な範囲と刻み幅を設定してください。
{{< /callout >}}

補足：[共通設定事項](/docs/template/make/#common_setting)もご確認ください。

**データ分析とCSV出力:**
スライダで入力された値は数値データとして[集計・グラフ化](/docs/manual/analytics/chart/)に対応しています。<strong>特定の環境データの推移</strong>、<strong>設備のパフォーマンス変化</strong>などを視覚的に把握できます。

【グラフ化】

スライダフォームのデータをグラフにした例です。

{{<icatch filename="img/slider_charts" msg="スライダフォームのデータをグラフ化してみました。気温や湿度、圧力などの環境データの推移を視覚的に把握できます" alice="ok">}}

【CSV出力】

スライダで入力された値は数値データとしてCSVに出力できます。単位は【】内に記載されます。

{{< excelTable >}}
提出日, 【mm】線形誤差, 【mm】軸ズレ幅, 【mg】重量誤差, 検査報告
2023/06/13 11:04, 0, -4, 6,
2023/06/11 11:04, -3, -4, 4,
2023/06/10 11:04, -1, -2, -9,
2023/06/08 11:04, -7, 0, 9, 重量誤差過大
{{< /excelTable >}}

---

## 範囲入力 - 数値の変動範囲を記録{#range}

スライダにつまみが2つあり、これらを操作して**最小値から最大値までの「範囲」を入力できる**フォームです。<strong>日報における活動時間の目安、製造工程での温度・圧力の許容範囲、環境モニタリングでの水温・気圧の変動範囲</strong>など、ある程度の幅を持った数値を記録するのに適しています。用途としてはやや限定的ですが、特定の業務では非常に役立ちます。

[<strong>実際の入力イメージはこちら</strong>](/docs/manual/write-report/parts/#range)

{{<icatch filename="img/range-input" msg="最低〜最大など、数値の範囲を入力できます。例えば、製造ラインの許容温度範囲や、環境データの変動幅の記録に" alice="ok">}}

**設定項目詳細:**

<dl class="basic">
<dt><strong>入力必須</strong></dt>
<dd>これがONの場合、範囲が未入力だと日報の提出ができなくなります。<strong>必須の測定範囲</strong>を記録する際に設定します。</dd>
<dt><strong>初期値</strong></dt>
<dd>日報新規作成時に最初から文字を入力済みにできます。不要の場合は空欄にしておきます。<strong>一般的な許容範囲</strong>などを初期値として設定すると便利です。</dd>
<dt><strong>最小値</strong></dt>
<dd>スライダーの左端の値を指定します。負数も扱えます。<strong>計測値の下限</strong>や<strong>設計上の最低値</strong>を設定します。</dd>
<dt><strong>最大値</strong></dt>
<dd>スライダーの右端の値を指定します。負数も扱えます。<strong>計測値の上限</strong>や<strong>設計上の最大値</strong>を設定します。</dd>
<dt><strong>初期値（最小）</strong></dt>
<dd>日報作成時にスライダーの最小つまみが配置される位置を指定します。</dd>
<dt><strong>初期値（最大）</strong></dd>
<dd>日報作成時にスライダーの最大つまみが配置される位置を指定します。</dd>
<dt><strong>刻み</strong></dt>
<dd>つまみの1メモリ単位を指定します。例えば2なら2, 4, 6のように増えていきます。小数点も指定できます。初期値は1です。<strong>測定値の精度</strong>に合わせて設定します。</dd>
<dt><strong>単位</strong></dt>
<dd>数値の単位を指定します。例えば気温であれば「℃」と入力します。単位は入力時の画面左上にヒントとして表示されます。<strong>データの意味を明確に</strong>します。</dd>
</dl>

{{< callout context="caution" title="操作性の低下に注意" icon="outline/alert-triangle" >}}
<strong>レートの上限下限が極端に広い</strong>、または<strong>刻みの単位が極端に小さい</strong>と、スライダの密度が高くなり操作性が低下する可能性があります。適切な範囲と刻み幅を設定してください。
{{< /callout >}}

補足：[共通設定事項](/docs/template/make/#common_setting)もご確認ください。

**CSV出力:**
最小値と最大値がそれぞれ独立した列に展開されてCSVに出力されます。

{{< excelTable >}}
提出日, 【最小】水槽A水温範囲, 【最大】水槽A水温範囲, 【最小】水槽B水温範囲, 【最大】水槽B水温範囲, 点検報告
2023/06/11 01:28, 22, 27, 11, 20,
2023/06/10 01:28, 24, 29, 14, 16,
2023/06/09 01:28, 20, 23, 12, 20,
2023/06/08 01:28, 22, 28, 14, 19, 水温異常なし
{{< /excelTable >}}

---

## 算術フォーム - 自動計算で入力ミスをなくす{#calc}

算術フォームは他のフォームと大きく異なります。**ユーザーが直接データを入力することはできず、他の数値入力フォームの値を参照し、自動で計算後の結果を表示する特殊なフォーム**です。これにより、**手計算によるミスをなくし、正確なデータに基づく日報作成**を可能にします。

{{<icatch filename="img/calc-icatch" msg="簡単な四則演算ができる特殊なフォームです。自動で入力されるから手動入力は不要。生産量、不良率、コスト計算などを自動化できます" alice="pc">}}

最も重要なのは、**正しい計算式を作成すること**です。

{{<icatch filename="img/make-fomula" msg="参照したいフォームの値を使い、四則演算とカッコで計算式を作ってあげましょう" alice="guide">}}

計算式に使えるエレメントは以下の通りです。

- **基本的な四則演算**（＋・ー・✕・÷）
- **カッコ**（計算の優先度を変える）
- <strong>他の入力フォーム</strong>（詳細は本ページ末尾参照）

割り算で端数が出る可能性があるものは、四捨五入する位を指定できます。
電卓の要領で式を入力し、「保存して終了」ボタンをクリックして式を保存します。
式が正しく機能するかはプレビューで確認してください。

{{<nextArrow>}}

### 算術で利用可能な入力フォーム{#required}

計算式として利用できる入力フォームは以下のとおりです。これらのフォームに数値が入力されると、算術フォームが自動で計算を行います。

- [<strong>数値入力フォーム</strong>](#commonNumber)
- [<strong>レート入力フォーム</strong>](#rate)
- [<strong>スライダ入力フォーム</strong>](#slider)
- [<strong>選択式入力フォーム</strong>](/docs/template/selects/#plain)

選択式入力フォームの場合、選択肢の単語中に数字が含まれていると、その数字が計算式に利用されます。
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

※この例でいうと「3.みかん」が選ばれると、算術上は「3」として計算されます。

また、各種フォームの設定で「集計する」の機能をOFFにすると、算術の参照元として使用できません。必要に応じて「集計する」をONにしてご利用ください。

### 反復入力フォームの中で算術を使う{#form_arithmetic}

Version1.60.0から反復入力の中で算術フォームを利用できるようになりました。反復入力の中で使う場合、その反復の中で計算を完結させる必要があります（反復の外のデータは参照できません）。
これにより、<strong>複数行にわたる作業の合計時間やコスト、生産数などを、行ごとに自動計算</strong>できるようになります。
