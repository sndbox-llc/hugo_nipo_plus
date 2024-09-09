+++
description = "レポートの作成から集計・グラフ化まで一括で行え、業務効率化と情報活用に貢献します。スマホでも利用可能。ここでは集計・グラフ化について詳しい使い方を徹底解説します。"
title = "📊日報集計概要"
menuTitle = "ℹ️概要"
toc = true
tags = ["有料プラン限定"]
weight = 101004000
aliases = []
images = ["chart_tablet.png"]
+++

[テンプレート](/docs/manual/initial-setting/template/make/)内に集計が可能な入力フォームが含まれている場合は、そのデータを抜き出して累積表や推移表、グラフなどを表示できます。
集計可能な入力フォームは以下のとおりです。大きく２種類に分けることができます。

<dl class="basic">
<dt>回数の集計</dt>
<dd>
選ばれた回数を集計できます。
<ul>
<li><a href="/docs/manual/initial-setting/template/selects/#plain">選択式（単）フォーム</a></li>
<li><a href="/docs/manual/initial-setting/template/selects/#multiple">選択式（複）フォーム</a></li>
<li><a href="/docs/manual/initial-setting/template/selects/#layerd">選択式（階層）フォーム</a></li>
<li><a href="/docs/manual/initial-setting/template/digital/#rate">レート入力フォーム</a></li>
</ul>
</dd>
<dt>合計の集計</dt>
<dd>
単純に合算した集計ができます。
<ul>
<li><a href="/docs/manual/initial-setting/template/date_time/#range">期間入力フォーム</a> (単位は分:1時間半は90分として出力)</li>
<li><a href="/docs/manual/initial-setting/template/digital/#commonNumber">数値入力フォーム</a></li>
<li><a href="/docs/manual/initial-setting/template/digital/#slider">スライダ入力フォーム</a></li>
</ul>
</dl>







{{<info>}}
あなたが閲覧可能なレポート（[提出先か共有先に含まれているもの](/docs/manual/write-report/dist/)）のみが集計の対象となります。
{{</info>}}


## 集計の種類について{#category}

NipoPlusでは集計可能データを元にして推移表、累積表を自動で生成できます。それらの表を元にして、折れ線や棒グラフを独自に作成することも可能です。  
主要な集計機能は以下の表のとおりです。

<dl class="basic">
<dt><a href="#line">推移表</a></dt>
<dd>一定期間のデータの移り変わりを見るのに適しています</dd>
<dt><a href="#stack">累積表</a></dt>
<dd>一定期間のスタッフ別の合計を見るのに適しています</dd>
<dt><a href="#charts">グラフ</a></dt>
<dd>推移表・累積表のデータを元に折れ線や棒グラフを生成可能です</dd>
<dt><a href="#schedule">予定・実績表</a></dt>
<dd>目標とそれに対する進捗を見るのに適しています</dd>
<dt><a href="#excel">CSVエクスポート</a></dt>
<dd>エクセルで開いて独自に集計することができます。他にも異なるDBや基幹システムにインポートするといった使い方も可能</dd>
</dl>




## 推移表（データの流れを見る）{#line}

過去の検査結果を一覧で表示します。過去と比べて今回の検査結果がどの程度乖離しているかを手軽に知ることができます。  
スタッフごとの分別はされず、全員のレポートが推移表に掲載されます。

{{<icatch filename="history" msg="前回や前々回と比べて今回がどうだったのかすぐわかるね" alice="ok">}}


{{<btnCenter "/docs/manual/analytics/transition/" "推移表について詳しく見る">}}

## 累積表（スタッフごとの成績比較に便利）{#stack}

推移表と異なり、レポートの作成者ごとに分けて一定期間の累積合計を表示します。  
営業日報内の「訪問件数」など、活動に直結する入力フォームを追加しておくだけで、スタッフ同士の成績比較が簡単に行えます。  
レポート自体の提出件数を知ることもできますので提出漏れのチェックにも有用です。

{{<icatch filename="acc-table" msg="レポートをスタッフ別に累積して手軽に比較が可能です">}}

{{<btnCenter "/docs/manual/analytics/accumn/" "累積表について詳しく見る">}}

### グラフ作成{#charts}

前述の[推移表](#line)・[累積表](#stack)のデータをもとにして折れ線や円グラフ、積み上げ縦棒グラフなどを作成可能です。  
グラフは複数種類作成でき、ワンクリックで瞬時に切り替えが可能です。


{{<icatch filename="chart" msg="グラフはワンクリックでいつでも切替可" alice="guide">}}

{{<btnCenter "/docs/manual/analytics/chart/" "グラフ化について詳しく見る">}}

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
