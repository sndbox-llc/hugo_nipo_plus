+++
description = "クロス集計を使えば製造部品毎にテンプレートを分けた場合に各部品の不良率を求めたり、複数のチェックシートのデータを集めて全体の傾向を把握するなど、様々な分析に利用することができます。"
tags = ["有料プラン限定"]
title = "異なるテンプレートをまとめて集計【クロス集計】"
menuTitle = "クロス集計"
toc = true
weight = 101004008
aliases = []
images = ["previews_tablet.png"]
+++

クロス集計とは異なる複数のテンプレートを横断して比較・集計する機能です。
例えば次のテンプレートがあるとします

- A部品点検シート
- B部品点検シート
- C部品点検シート

AやB、Cそれぞれの生産数や不良数は通常の集計で簡単に集計が可能です。
クロス集計はABCすべての生産数や不良数をテンプレートごとに集計し一覧表を表示する機能です。

## クロス集計を作成する{#make}

クロス集計テーブルは1グループに付き最大で50個まで作成が可能です。

1. メニューから「集計/CSV出力」をクリックし、集計画面を表示します。
1. 画面をスクロールし、「クロス集計を作成」ボタンをクリックします。

{{<icatch filename="table-make" msg="異なるテンプレート同士を同時に集計するクロス集計を作成する">}}

クロス集計テーブル作成ウインドウがポップアップで全画面に表示されます。
この画面からクロス集計テーブルを作って行きます。

### テーブルの行と列を作成する{#row_col}

テーブルは**行と列とセル**で構成されます。
テーブルにテンプレートを追加するごとに1行（横方向）追加されます。テンプレート追加は画面右端の「○件選択」と書かれたプルダウンから行います。
列は「参照列」と「計算列」の2種類があります。参照列はテンプレートの入力フォームを指定できます。（計算列は後述）

{{<icatch filename="table-edit" msg="行と列とセルをそれぞれ設定する">}}

上のテーブルは2つのテンプレート（タイトルを除き2行）と、2つの参照列を追加した例です。
参照列はクリックするだけで追加されますが、そのままだと「列1」のような名前でわかりにくいので鉛筆アイコンから名前を変更しています。
行と列の交差したセルに、どの値を表示するかをプルダウンで選びます。プルダウンで選べるのはテンプレート内の**集計可能な入力フォーム**に限られます。

### 計算列について{#fomula}

計算列は参照列のデータをもとに簡単な四則演算を行うことができる列です。
例えば生産数と破損数の列を使って生産率などを計算するときに使うことができます。
ここではシンプルに1列目の生産数と2列めの品質を単純に掛け算する列を作りたいときは次の画像のように設計します。

{{<icatch filename="calc-field" msg="クロス集計に計算列を追加">}}

### 結果のプレビューと保存{#save}

実際の集計結果はプレビューで確認できます。

{{<icatch filename="previews" msg="クロス集計の結果をプレビューで表示">}}

通常の列ではレポートのデータを集計した結果が表示され、計算列では指定した計算式に従って業務レポートのデータを計算して表示しています。
※数値がすべて0の場合は集計に使用されるレポートのデータが0件の可能性があります。

最後にクロス集計に名前をつけて、保存ボタンをクリックして保存します。
保存されたクロス集計はクロス集計一覧に表示され、クリックで表示します。複数種類のクロス集計がある場合はボタンを押すごとにテーブルが切り替わります。
集計の期間は右パネルのカレンダーで変更可能です。

{{<icatch filename="view" msg="作成したクロス集計を表示する">}}

これでA部品とB部品、異なるテンプレートで作成された業務レポートを同時に比較できるようになりました。

## クロス集計テーブルを編集する{#edit}

作成したクロス集計を修正する必要がある場合は修正するクロス集計を表示後、鉛筆アイコンをクリックします。
編集画面は新規作成画面とほぼ同じです。
