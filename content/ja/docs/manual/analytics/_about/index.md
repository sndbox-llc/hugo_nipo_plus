+++
description = "報告書の作成から集計・グラフ化まで一括で行え、業務効率化と情報活用に貢献します。スマホでも利用可能。ここでは集計・グラフ化について詳しい使い方を徹底解説します。"
title = "報告書データ集計概要"
toc = true
tags = ["有料プラン限定"]
weight = 101004000
contributors = []
aliases = ["/manual/analytics/"]

+++

報告書のテンプレートに数値や選択肢が含まれている場合はそれらのデータを集計、グラフ化できます。
集計に対応している入力フォーム一覧は以下参照

{{<btnCenter "/tags/集計可能フォーム/" "集計可能フォーム一覧">}}

データの推移や累積、目標と実績など様々な分析が可能です。このページは概要のため各機能を大まかに紹介しています。  
詳しくみたい場合はそれぞれのページを参照してください。

## 報告書データの推移

同一テンプレートで書かれた報告書を今回の分も含めて過去に遡りデータの表を自動で作成します。
今回の報告書が過去に比べてどのように変化したのかを俯瞰できます。

{{<appscreen filename="history" msg="これは推移の例です 前回との比較が容易" title="集計機能の例" fontsize="30px" alice="here" >}}


{{<alice pos="right" icon="here">}}
品質検査で前回と比べ異常か判断したり、営業件数が昨日と比べ増えたかすぐわかるっ
{{</alice>}}

{{<btnCenter "/docs/manual/analytics/list/" "操作ガイドを見る">}}


## 報告書データの累積

前述の推移は前回、前々回...のように回ごとの一覧を見ることができました。累積は直近N回の報告書を合算し、スタッフごとに集計した結果を表示します。
訪問件数や売上高などスタッフの成績をスタッフ同士で比較する際に最適です。



{{<btnCenter "/docs/manual/analytics/list/" "操作ガイドを見る">}}

## 報告書データのグラフ化

前述の推移・累積のデータをもとにアプリ上でグラフを作成できます。
折れ線・棒・積上棒・円・レーダー・複合のグラフを用意しています。
予め複数種類作成でき、ボタン1つでグラフを切り替えて表示できます。

{{<icatch filename="chart" msg="グラフはワンクリック でいつでも切替可" title="日報をグラフ化する" fontsize="30px" alice="guide" >}}

{{<btnCenter "/docs/manual/analytics/chart/" "グラフ化のマニュアル">}}


## 予定と実績の対比表

予め目標を設定することで、報告書から当該目標に対する実績を一覧で俯瞰できます。

{{<icatch filename="list" msg="予定と実績 進捗の管理" title="予定と実績の進捗表" fontsize="30px" alice="guide" >}}

この機能は製造業の生産管理からリクエストを頂いたため、生産予定に対する進捗なども機能として組み込まれています。
販売目標、訪問目標など非製造業でも利用可能です。

{{<btnCenter "/docs/manual/analytics/list/" "予定／実績">}}

## 報告書データを表計算ソフトで集計

報告書データをCSVに一括出力する機能があります。
CSVデータはエクセルでそのまま開くことが可能です。CSVで出力してエクセル上から様々な加工や集計分析が可能です。

次の画像はGoogle SpleadSheetで開いた例です。
<span style="color:red">赤背景</span>のセルはNipoPlusのCSVで出力したデータで、これをもとに合計や平均、順位と行った計算をしています。

{{<icatch filename="csv" msg="日報をCSV出力し 表計算ソフトで開く" title="日報をCSV出力し表計算ソフトで開く" fontsize="30px" alice="guide" >}}

<div class="row justify-content-center">
<div class="col-sm-16 col-md-8">{{<button "/docs/manual/read-report/csv/" "1件の報告書をCSV出力する">}}</div>
<div class="col-sm-16 col-md-8">{{<button "/docs/manual/analytics/csv/" "複数の報告書を一括CSV出力する">}}</div>
</div>


## 集計方式の違い

大きく分けて２つの集計ルールがあります。

<dl>
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

{{<appscreen filename="calc" title="集計が可能な入力フォームのみで構成されたチェックシートのテンプレート例"  >}}
