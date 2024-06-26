+++
description = "テンプレートカスタムパーツの1つ。1つ目の回答によって2つめの回答リストが変化する特殊な入力フォームです。"
tags = ["テンプレートパーツ", "テンプレート"]
title = "【選択式入力（2層式）】レポートテンプレートに追加"
menuTitle = "⛔選択式入力（2層式）"
toc = true
weight = 101001106
mermaid = true
aliases = ["/manual/initial-setting/template/selectcalc/", "/manual/org/groupsetting/template/selectcalc/"]
images = []
+++



{{<warning>}}
この機能は非推奨です。[動的変化](/docs/manual/initial-setting/template/dinamic_selection/)を使うことで同様の機能をもたせることができます。

{{</warning>}}


{{<icatch filename="select-step" msg="Q1の答によって Q2の選択が変化" title="選択肢二槽式入力フォーム" fontsize="30px" alice="ok">}}

|[集計可否](/docs/manual/analytics/)|[CSV出力](/docs/manual/analytics/csv/)|[PDF出力](/docs/manual/read-report/pdf/)|[文字検索](/docs/manual/read-report/list/)|
|:---:|:---:|:---:|:---:|
|○|○|○|○|

問１の設問によって問２の解凍リストが変化する入力フォームです。
例えば問1の回答が「野菜」だった場合と、「果物」だった場合でそれぞれ問2の選択肢が変わります。

{{<mermaid align="center">}}
graph LR;
    C{野菜<br>果物}
    C -->|野菜を選択| D[白菜<br>人参<br>きゅうり<br>etc...]
    C -->|果物を選択| E[いちご<br>ばなな<br>パイナップル<br>etc...]
{{< /mermaid >}}

階層分けが不要であれば類似の入力フォームである[選択式入力フォーム](/docs/manual/initial-setting/template/select/)を使用してください。

## 選択肢（2層式）の初期設定{#setting}

問１のリストと問２のリストを作成する必要があるため初期設定は少し手間がかかります。
{{<appscreen filename="template" title="テンプレート編集。選択肢二槽式の初期設定">}}

質問1の選択肢を追加するごとに、質問2の選択肢欄も自動で追加されていきます。
以下は本入力フォームにのみ存在する設定項目です

<dl class="basic">
  <dt><a href="/tips/required/">入力必須</a></dt>
  <dd>これがONの場合、選択肢が選ばれていないとレポートの提出ができません</dd>
  <dt>入力方式</dt>
  <dd>ラジオ式・プルダウン式から選択できます。これは初期値であり、レポート作成時に執筆者は自由に切り替えることができます</dd>
  <dt>選択肢</dt>
  <dd>問1の選択肢を入力します。改行で区切ります</dd>
  <dt>〜〜が選ばれたときに表示する選択肢</dt>
  <dd>〜〜には「選択肢」で追加した項目が入ります。選択肢の数だけこの項目が生成されます。</dd>

</dl>

共通設定事項については以下を参照してください。
{{<btnCenter "/docs/manual/initial-setting/template/make/#common_setting" "共通設定項目">}}

## 選択肢(2層式)のレポート入力画面イメージ{#preview}

レポート作成直後の画面では問1しか表示されませんが、問1を選択すると自動で問2が出現します。**問2の内容は問1によって変化**します。

{{<appscreen filename="input" title="問1の選択によって問2の解凍リストが変化します">}}

入力方式はラジオ式とプルダウン式の2種類があります。プルダウンでは文字入力による絞り込みが利用できるため**選択肢が多い場合はプルダウンを推奨**します。
入力必須が設定されている場合は、**問2まで回答して初めて提出が可能**になります。

### 選択肢(2層式)のレポートを受け取ったときの画面{#receive}

受け取ったレポートを表示すると、答1・答2といった形で分けて画面に表示されます。

{{<appscreen filename="post" title="受け取ったレポートを表示する。問1・問2のように分けて表示される">}}

表示切り替えをすることでラジオ式に切り替えることも可能です。ラジオ式の場合は選ばれなかった他の選択肢を見ることができます。
選択肢(2層式)は**自動集計にも対応**しています。

{{<appscreen filename="charts" title="問1の選択によって問2の回答リストが変化します">}}

答2のデータのみが集計対象となります。円グラフを作ればどのお酒が一番選ばれたか？といったことが瞬時にわかります。

{{<btnCenter "/docs/manual/analytics/chart/" "レポートをグラフ化する">}}

{{<alice pos="right" icon="please">}}アードベッグ(ウイスキー)大好きな筆者です{{</alice>}}

データシートの集計方式を累積にすることで、選ばれた回数をスタッフアカウントごとにカウントできます。

{{<appscreen filename="totaling" title="選択肢が何回選ばれたのかをスタッフアカウントごとに集計できます。">}}

単語に数値が含まれていれば数値を基準とした集計等も可能です。

レポート表示画面の集計は**直近数件のレポートを集計**するため実用的ではないことに注意してください。一般的には「今月」や「先月」といった単位で集計したいはずです。

{{<btnCenter "/docs/manual/analytics/transition/" "期間指定してレポートを集計する">}}

## データ活用編{#fire}

選択肢(2層式)では以下の機能に対応しています。

### CSV出力{#csv}

選択肢(2層式)をCSVに出力すると、答1・答2の2列に展開されてCSVに出力されます。

{{<imgproc csv.png "選択肢(2層)入力フォームを含んだレポートをCSVに出力し、エクセルで開いた画面" />}}
