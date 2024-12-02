+++
url = "/docs/manual/analytics/_about/"
title = "📊日報集計概要"
menuTitle = "ℹ️概要"
description = "NipoPlusでのレポート作成から、データの集計・グラフ化までを効率的に行う方法を詳しく解説します。スマホからもアクセス可能で、業務の効率化とデータ活用をサポート。ここでは推移表、累積表、グラフ作成などの機能を徹底解説します。"
toc = true
weight = 410
# tags = ["有料プラン限定"]
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

{{< callout context="note" title="Note" icon="outline/info-circle" >}}
あなたが閲覧可能なレポート（[提出先か共有先に含まれているもの](/docs/manual/write-report/dist/)）のみが集計の対象となります。
{{< /callout >}}

## 集計の種類について{#category}

NipoPlusでは、集計データをもとに自動で推移表や累積表を作成できます。期間と集計方式を選ぶだけで、自動集計が可能です。また、集計結果から折れ線グラフや棒グラフも簡単に生成できます。

{{<iTablet filename="img/sumtotal" msg="左メニューに集計ボタンが出てない場合はグループ設定から機能を有効にしてね" alice="pc">}}

まず大きな括りとして、次の3種類があります

<dl class="basic">
<dt>推移・累積・グラフ</dt>
<dd>1種類のテンプレートを対象として推移表や累積表、グラフを作成できます</dd>
<dt><a href="#schedule">予定・実績表</a></dt>
<dd>複数のテンプレートを対象に集計できます。目標とそれに対する進捗を見るのに適しています</dd>
<dt>クロス集計</dt>
<dd>複数のテンプレートを対象に集計できます。異なるテンプレート同士の入力フォームをまとめて集計できます</dd>
</dl>

推移・累積・グラフを選択する場合は、更に次の集計方式から選択してください

<dl class="basic">
<dt><a href="#stack">累積</a></dt>
<dd>一定期間のスタッフ別の合計を見るのに適しています</dd>
<dt><a href="#line">推移</a></dt>
<dd>一定期間のデータの移り変わりを見るのに適しています</dd>
<dt><a href="#excel">個別DL</a></dt>
<dd>集計対象のレポートをスタッフ毎、または日付毎に任意にCSV形式でダウンロードできます。CSVはエクセルで開いて独自に集計することができます</dd>
<dt>一覧表</dt>
<dd>集計対象のレポートを一覧表で表示します</dd>
<dt><a href="#charts">グラフ</a></dt>
<dd>推移表・累積表のデータを元に折れ線や棒グラフを生成可能です</dd>
</dl>

## 累積表（スタッフごとの成績比較に便利）{#stack}

レポートの作成者ごとに分けて一定期間の累積合計を表示します。

営業日報の「訪問件数」など、活動に直結する入力フォームを追加するだけで、スタッフごとの成績を簡単に比較できます。また、レポートの提出件数も確認できるため、提出漏れのチェックにも役立ちます。

{{<iTablet filename="img/stack" msg="スタッフ同士の比較に便利だね">}}

{{< link-card title="累積表について" description="操作ガイド"  href="/docs/manual/analytics/accumn/" >}}

## 推移表（データの流れを見る）{#line}

過去の検査結果を一覧で表示します。過去と比べて今回の検査結果がどの程度乖離しているかを手軽に知ることができます。
スタッフごとの分別はされず、全員のレポートが推移表に掲載されます。

{{<iTablet filename="img/flow" msg="過去との比較が見たいときに便利だね" alice="ok">}}

{{< link-card title="推移表について" description="操作ガイド"  href="/docs/manual/analytics/transition/" >}}

### グラフ作成{#charts}

前述の[推移表](#line)・[累積表](#stack)のデータをもとにして折れ線や円グラフ、積み上げ縦棒グラフなどを作成可能です。
グラフは複数種類作成でき、ワンクリックで瞬時に切り替えが可能です。

{{<icatch filename="img/chart" msg="グラフはワンクリックでいつでも切替可" alice="guide">}}

{{< link-card title="グラフ化について" description="操作ガイド"  href="/docs/manual/analytics/chart/" >}}

## 予定と実績の対比表{#schedule}

生産管理の方からいただいたリクエストで、今月の生産ノルマと実績を比較する機能として実装されました。
目標とそれに対する実績のため、生産管理以外でも例えば売上に対する目標と実績など、多目的に利用可能です。
目標を予め定めておくことで日別の達成・未達を簡単に確認できます。
前月の繰越を使うことで実績の調整も可能です。

{{<icatch filename="img/list" msg="予定と実績・進捗の管理" alice="guide">}}

{{< link-card title="予定実績機能" description="操作ガイド"  href="/docs/manual/analytics/progress/" >}}

## エクセルを用いた集計・分析{#excel}

NipoPlusの集計機能でカバーできない場合、CSV出力してエクセルで集計や分析が可能です。例えば、⭕の数を数えたり、提出日で並び替えることがエクセルで簡単に行えます。

{{< excelTable >}}
提出日, 調査地住所, 【0】日当たり, 【1】日当たり, 【2】日当たり, 【3】日当たり, 【4】日当たり, 【5】日当たり
2023/06/11 09:35, 栃木県日光市XXX-X, -, -, ⭕, -, -, -
2023/06/10 09:35, 栃木県那須烏山市XXX-X, -, -, ⭕, -, -, -
2023/06/09 09:35, 栃木県真岡市XXX, -, -, ⭕, -, -, -
2023/06/08 09:35, 栃木県宇都宮市XXXX, -, -, -, -, ⭕, -
{{< /excelTable >}}

{{< link-card title="エクセルにて集計する" description="コラム記事"  href="/excel/sales_report/" >}}
