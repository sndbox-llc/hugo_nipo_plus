+++
description = "日報テンプレートカスタムパーツの1つ。つまみをドラッグして入力できるフォームを報告書に追加できます"
tags = ["集計可能フォーム", "日報構成部品", "テンプレート"]
title = "【スライダ入力】を日報に追加"
menuTitle = "🧩スライダ入力"
toc = true
weight = 101001113
aliases = ["/manual/initial-setting/template/step/"]
images = []
+++

スライダとは次のようなものです。

<div class="container my-3" style="padding:20px;border:1px solid #ccc">
  <input type="range" class="form-range" id="slider" style="max-width:500px">
  <div id="sliderValue" class="mt-1">スライダーの値: <span id="value"></span></div>
</div>

<script>
  const slider = document.getElementById('slider');
  const valueElement = document.getElementById('value');

  slider.addEventListener('input', function() {
    const value = this.value;
    valueElement.textContent = value;
  });
</script>

このようなスライダーを報告書に追加できます。

{{<icatch filename="slider-input" msg="つまみをスライドさせて 数値の入力ができます" title="スライダ入力フォーム" fontsize="30px" alice="ok">}}


|[集計可否](/docs/manual/analytics/)|[CSV出力](/docs/manual/analytics/csv/)|[PDF出力](/docs/manual/read-report/pdf/)|[文字検索](/docs/manual/read-report/list/)|
|:---:|:---:|:---:|:---:|
|○|○|○|○|

用途としては次のようなものがあります

- 室温など上限下限がある程度決まっているもの
- 湿度などパーセンテージで表現するもの

「本日の来客者」のように上限が予測できない項目では適しません。
スマートフォンやタブレットと相性が良いフォームです。


## フォームをテンプレートに追加する

1. テンプレート編集画面を開く
1. フォームリストから数値入力（スライダ）をクリックして追加
1. スライダの最小・最大値を設定
1. スライダ上の単位を設定
1. 必要に応じてその他の設定を行う

スライダフォームの設定は以下の通り。

<dl class="basic">
  <dt>初期値</dt>
  <dd>日報新規作成時にスライダのつまみが配置される位置です。最小値と最大値の中間となる値を推奨します</dd>
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



{{< warning >}}
レートの上限下限が極端に広い、または刻みの単位が極端に小さいと密度が高くなり操作性が低下します。
{{< /warning >}}

共通設定事項については以下を参照してください。
{{<btnCenter "/docs/manual/initial-setting/template/make/#common_setting" "共通設定項目">}}


{{<appscreen filename="template-edit-slider" title="スライダ入力フォームのみで構成された日報テンプレート">}}


{{<nextArrow>}}

{{<appscreen filename="slider-preview" title="スライダーを使った日報入力画面">}}



## スライダのデータを集計

スライダは数値のためデータ集計に対応しています。

{{<appscreen filename="charts" title="スライダのデータを用いて折れ線グラフを生成">}}

## スライダのデータをCSVに出力

スラライダで入力された値は数値データとしてCSVに出力できます。単位は【】内に記載されます


<div class="excelTable">

|=|A|B|C|D|E|
|---|---|---|---|---|---|
1|提出日|【mm】線形誤差|【mm】軸ズレ幅|【mg】重量誤差|検査報告|
2|2023/06/13 11:04|0|-4|6|
3|2023/06/11 11:04|-3|-4|4|
4|2023/06/10 11:04|-1|-2|-9|
5|2023/06/08 11:04|-7|0|9|重量誤差過大|

</div>