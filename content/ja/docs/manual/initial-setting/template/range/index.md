+++
description = "日報テンプレートカスタムパーツの1つ。特定の範囲の入力枠を日報に追加できます。"
tags = ["テンプレートパーツ", "テンプレート"]
title = "【範囲入力】を日報に追加"
menuTitle = "🧩範囲入力"
toc = true
weight = 101001110
aliases = ["/manual/initial-setting/template/range/", "/manual/org/groupsetting/template/range/"]
images = []
+++

スライダにつまみが2つあります。これらを操作して範囲を入力できます。

{{<icatch filename="range-input" msg="最低〜最大など 範囲の数値入力に" title="範囲入力フォーム" fontsize="30px" alice="ok">}}

|[集計可否](/docs/manual/analytics/)|[CSV出力](/docs/manual/analytics/csv/)|[PDF出力](/docs/manual/read-report/pdf/)|[文字検索](/docs/manual/read-report/list/)|
|:---:|:---:|:---:|:---:|
|✗|○|○|○|

用途としては次のようなものがあります

- 最低気温と最大気温の入力のような用途

他の入力フォームに比べると用途が限定的なフォームになります。

## フォームをテンプレートに追加する{#add}

1. テンプレート編集画面を開く
1. フォームリストから「範囲」をクリックして追加
1. 上限・下限を指定する
1. 必要に応じてその他の設定を行う

範囲フォームの設定は下の通り

<dl class="basic">
  <dt><a href="/tips/required/">入力必須</a></dt>
  <dd>これがONの場合、ファイルが添付されていない場合日報の提出ができなくなります</dd>
  <dt>初期値</dt>
  <dd>日報新規作成時に最初から文字を入力済みにできます。不要の場合は空欄にしておきます</dd>
  <dt>最小値</dt>
  <dd>スライダーの左端の値を指定します。負数も扱えます</dd>
  <dt>最大値</dt>
  <dd>スライダーの右端の値を指定します。負数も扱えます</dd>
  <dt>初期値（最小）</dt>
  <dd>日報作成時にスライダーの最小つまみが配置される位置を指定します</dd>
  <dt>初期値（最大）</dt>
  <dd>日報作成時にスライダーの最大つまみが配置される位置を指定します</dd>
  <dt>刻み</dt>
  <dd>つまみの1メモリ単位を指定します。例えば2なら 2 , 4 , 6のように増えていきます。小数点も指定できます。初期値は1です</dd>
  <dt>単位</dt>
  <dd>数値の単位を指定します。例えば気温であれば「度」と入力します。単位は入力時の画面左上にヒントとして表示されます</dd>
</dl>

{{< warning >}}
レートの上限下限が極端に広い、または刻みの単位が極端に小さいと密度が高くなり操作性が低下します。
{{< /warning >}}

共通設定事項については以下を参照してください。
{{<btnCenter "/docs/manual/initial-setting/template/make/#common_setting" "共通設定項目">}}

{{<appscreen filename="template-edit-range" title="範囲入力フォームをテンプレートに追加">}}

{{<nextArrow>}}

{{<appscreen filename="range-preview"  title="範囲選択入力イメージ">}}

## CSV出力{#csv}

最小と最大がそれぞれ独立した列に展開されます。



{{< excelTable >}}
提出日, 【最小】水槽A水温範囲, 【最大】水槽A水温範囲, 【最小】水槽B水温範囲, 【最大】水槽B水温範囲, 点検報告
2023/06/11 01:28, 22, 27, 11, 20, 
2023/06/10 01:28, 24, 29, 14, 16, 
2023/06/09 01:28, 20, 23, 12, 20, 
2023/06/08 01:28, 22, 28, 14, 19, 水温異常なし
{{< /excelTable >}}
