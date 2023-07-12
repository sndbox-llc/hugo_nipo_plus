+++
description = "報告書の作成から集計・グラフ化まで一括で行え、業務効率化と情報活用に貢献します。スマホでも利用可能。ここでは集計・グラフ化について詳しい使い方を徹底解説します。"
title = "報告書データ集計概要"
menuTitle = "概要"
toc = true
tags = ["有料プラン限定"]
weight = 101004000
aliases = ["/manual/analytics/"]
images = ["chart_tablet.png"]
+++

報告書のテンプレートに数値や選択肢が含まれている場合はそれらのデータを集計、グラフ化できます。
集計に対応している入力フォーム一覧は以下参照

{{<btnCenter "/tags/集計可能フォーム/" "集計可能フォーム一覧">}}


様々な集計分析が可能です。このページは概要のため各機能を大まかに紹介します。

## 報告書データの推移表{#line}

- 前回、前々回・・・n回前の結果を並べて表示します
- 過去と今回との比較を見たいときに便利です
- 推移表は全スタッフのデータが混在して表示されます（閲覧権限があるものに限る）

機械のメンテナンスシートなど、定期的な検査の結果を俯瞰するのに適しています。

{{<appscreen filename="history" title="集計機能:報告書内のデータを時系列に見ることが可能。前回、前々回との比較に便利">}}

{{<alice pos="right" icon="here">}}
品質検査で前回と比べ異常か判断したり、営業件数が昨日と比べ増えたかすぐわかるっ
{{</alice>}}

{{<btnCenter "/docs/manual/analytics/transition/" "推移表について詳しく見る">}}

## 報告書データの累積表{#stack}

- スタッフごとに売上や仕入れといったデータを累積します
- スタッフ同士の成績比較に適しています

報告書自体の提出件数を知ることもできますので提出漏れのチェックにも有用です。

{{<appscreen filename="acc-table" title="報告書のデータを集計してグラフ化する">}}

{{<btnCenter "/docs/manual/analytics/accumn/" "操作ガイドを見る">}}

## 報告書データのグラフ化{#charts}

- 前述の累積表・推移表をもとにグラフを作成可能
- 折れ線・円・棒・積み上げ縦棒・レーダー・複合のグラフを作成可能
- 複数のグラフを作成し、ワンクリックで切替可能

{{<icatch filename="chart" msg="グラフはワンクリック でいつでも切替可" title="報告書をグラフ化する" fontsize="30px" alice="guide">}}

{{<btnCenter "/docs/manual/analytics/chart/" "グラフ化のマニュアル">}}

## 予定と実績の対比表{#schedule}

{{<info>}}
生産管理担当者からの要望で実装されました。納期までに目標数を用意する管理に適しています
{{</info>}}

- 目標を予め定めておくことで日別の達成未達を俯瞰できる
- 前月在庫を指定すると実績累積が加算され必要数の調整ができる
- 目標の累積、実績の累積を表示するので遅れの度合いを一目で把握できる

{{<icatch filename="list" msg="予定と実績 進捗の管理" title="予定と実績の進捗表" fontsize="30px" alice="guide">}}

もとは生産管理としてのリクエスト機能ですが、売上に対する目標・実績など他業種でも利用できるように汎用的に作っています。

{{<btnCenter "/docs/manual/analytics/progress/" "予定／実績">}}

## エクセルを用いた集計・分析{#excel}

NipoPlusの集計でカバーできない範囲はCSV出力してエクセルから集計が可能です。

1. 報告書データをCSV形式で一括出力します
1. エクセルでそのまま開けるのでエクセル機能を使って集計や分析が可能です

{{<imgproc work1.png "訪問の件数と約定件数から約定率を計算する" />}}

エクセルによる集計テクニックを別途記事にまとめています。

{{<btnCenter "/tips/sales_report/" "エクセルにて集計する">}}

## 集計方式の違い{#hint}

大きく分けて２つの集計ルールがあります
<dl class="basic">
<dt>回数の集計</dt>
<dd>
単語の選ばれた回数を集計できます。以下のフォームが該当します
<ul>
<li><a href="/docs/manual/initial-setting/template/select/">選択式（単）フォーム</a></li>
<li><a href="/docs/manual/initial-setting/template/select2/">選択式（複）フォーム</a></li>
<li><a href="/docs/manual/initial-setting/template/selectcalc/">選択式（階層）フォーム</a></li>
<li><a href="/docs/manual/initial-setting/template/rate/">レート入力フォーム</a></li>
</ul>
</dd>
<dt>合計の集計</dt>
<dd>
単純に合算した集計ができます。以下のフォームが該当します
<ul>
<li><a href="/docs/manual/initial-setting/template/datetimes/">期間入力フォーム</a> (単位は分:1時間半は90分として出力)</li>
<li><a href="/docs/manual/initial-setting/template/math/">数値入力フォーム</a></li>
<li><a href="/docs/manual/initial-setting/template/step/">スライダ入力フォーム</a></li>
</ul>
</dl>

単純な数値だけでなく単語も集計できるのが面白いですね。

{{<appscreen filename="calc" title="集計が可能な入力フォームで構成された報告書">}}
