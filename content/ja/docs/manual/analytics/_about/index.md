+++
description = "レポートの作成から集計・グラフ化まで一括で行え、業務効率化と情報活用に貢献します。スマホでも利用可能。ここでは集計・グラフ化について詳しい使い方を徹底解説します。"
title = "ℹ️レポートデータを様々な方法で集計分析する"
menuTitle = "ℹ️概要"
toc = true
tags = ["有料プラン限定"]
weight = 101004000
aliases = []
images = ["chart_tablet.png"]
+++

スタッフが[作成したレポート](//docs/manual/write-report/write/)によっては集計が可能なものも有ります。集計が可能なものとしては[数値入力フォーム](/docs/manual/initial-setting/template/selects/)や[選択式入力フォーム](/docs/manual/initial-setting/template/selects/)があります。詳しくは本ページ末尾の[集計可能な入力フォームとその特性](#hint)を御覧ください。


{{<info>}}
あなたが閲覧可能なレポート（[提出先か共有先に含まれているもの](/docs/manual/write-report/dist/)）のみが集計の対象となります。
{{</info>}}


<dl class="basic">
<dt><a href="#line">推移表</a></dt>
<dd>一定期間のデータの移り変わりを見るのに適しています</dd>
<dt><a href="#stack">累積表</a></dt>
<dd>一定期間のスタッフ別の合計を見るのに適しています</dd>
<dt><a href="#schedule">予定・実績表</a></dt>
<dd>目標とそれに対する進捗を見るのに適しています</dd>

</dl>


## データの推移を見る{#line}

機械の点検シートなど、定期的な検査の結果の推移を見るのに適しています。
前回や前々回と比較して今回の検査結果がどの位置にいるかを瞬時に把握できます。  
スタッフごとの分別はされず、全員のレポートがリスト化されます。

{{<icatch filename="history" msg="集計機能:レポート内のデータを時系列に見ることが可能。前回、前々回との比較に便利">}}


{{<btnCenter "/docs/manual/analytics/transition/" "推移表について詳しく見る">}}

## データの累積を見る{#stack}

レポートの作成者ごとに分けて一定期間の累積合計を表示することができます。  
単純な合計を見る他にも、スタッフ同士の成績比較などにも活用できます。
レポート自体の提出件数を知ることもできますので提出漏れのチェックにも有用です。

{{<icatch filename="acc-table" msg="レポートをスタッフ別に累積して手軽に比較が可能です">}}

{{<btnCenter "/docs/manual/analytics/accumn/" "累積表について詳しく見る">}}

### 推移や累積をグラフにする{#charts}

前述の[推移表](#line)・[累積表](#stack)のデータをもとにして折れ線や円グラフ、積み上げ縦棒グラフなどを作成可能です。  
グラフは複数種類作成でき、ワンクリックで瞬時に切り替えが可能です。


{{<icatch filename="chart" msg="グラフはワンクリックでいつでも切替可" alice="guide">}}

{{<btnCenter "/docs/manual/analytics/chart/" "グラフ化のマニュアル">}}

## 予定と実績の対比表{#schedule}

生産管理の方からいただいたリクエストで、今月の生産ノルマと実績を比較する機能として実装されました。  
目標とそれに対する実績のため、生産管理以外でも例えば売上に対する目標と実績など、多目的に利用可能です。
目標を予め定めておくことで日別の達成・未達を簡単に確認できます。  
前月の繰越を使うことで実績の調整も可能です。


{{<icatch filename="list" msg="予定と実績・進捗の管理" alice="guide">}}


{{<btnCenter "/docs/manual/analytics/progress/" "予定実績機能を見る">}}

## エクセルを用いた集計・分析{#excel}

NipoPlusの集計でカバーできない範囲はCSV出力してエクセルから様々な集計や分析が可能です。  
例えば次のような形でCSV出力したあと、⭕の数を数えたり、提出日で並び替えるといったことはエクセルで容易に行うことができます。

{{< excelTable >}}
提出日, 調査地住所, 【0】日当たり, 【1】日当たり, 【2】日当たり, 【3】日当たり, 【4】日当たり, 【5】日当たり
2023/06/11 09:35, 栃木県日光市XXX-X, -, -, ⭕, -, -, -
2023/06/10 09:35, 栃木県那須烏山市XXX-X, -, -, ⭕, -, -, -
2023/06/09 09:35, 栃木県真岡市XXX, -, -, ⭕, -, -, -
2023/06/08 09:35, 栃木県宇都宮市XXXX, -, -, -, -, ⭕, -
{{< /excelTable >}}


{{<btnCenter "/tips/sales_report/" "エクセルにて集計する">}}

## 集計可能な入力フォームとその特性{#hint}

大きく分けて２つの集計ルールがあります
<dl class="basic">
<dt>回数の集計</dt>
<dd>
選ばれた回数を集計できます。以下のフォームが該当します
<ul>
<li><a href="/docs/manual/initial-setting/template/selects/#plain">選択式（単）フォーム</a></li>
<li><a href="/docs/manual/initial-setting/template/selects/#multiple">選択式（複）フォーム</a></li>
<li><a href="//docs/manual/initial-setting/template/selects/#layerd">選択式（階層）フォーム</a></li>
<li><a href="/docs/manual/initial-setting/template/digital/#rate">レート入力フォーム</a></li>
</ul>
</dd>
<dt>合計の集計</dt>
<dd>
単純に合算した集計ができます。以下のフォームが該当します
<ul>
<li><a href="/docs/manual/initial-setting/template/datetimes/">期間入力フォーム</a> (単位は分:1時間半は90分として出力)</li>
<li><a href="/docs/manual/initial-setting/template/digital/#commonNumber">数値入力フォーム</a></li>
<li><a href="/docs/manual/initial-setting/template/digital/#slider">スライダ入力フォーム</a></li>
</ul>
</dl>


