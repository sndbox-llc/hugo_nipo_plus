+++
url = "/excel/sumif/"
# aliases = []
title = "エクセルのSUMIF関数で営業日報の中からスタッフごとの売上を集計する"
menuTitle = "スタッフ別の売上を簡単集計【SUMIF関数】"
description = "SUMとIFを組み合わせたSUMIF関数は例えばスタッフごとの売上高や曜日ごとの売上といった集計を簡単に行うことができる関数です。SUM関数に比べると少しとっつきにくいですが使いこなせれば非常に強力な武器になります"
toc = true
date = "2023-10-22"
tags = ["エクセル",  "集計"]
contributors = []
weight = 1045
+++

概要：
SUMIF関数は、条件を満たすデータだけを対象に合計を求めるExcelの関数です。この関数を使用することで、スタッフごとの売上高や曜日ごとの売上などを簡単に集計することが可能です。

サンプル:
日常の業務において、スタッフの日報をエクセルにまとめると、次のような形になります。

{{< excelTable >}}
提出日, 提出者名, 承認者1, 承認者1詳細, 【件】訪問件数, 【円】売上高, 概要
2023/10/14, アリス, AdminA, 未処理, 5, 13000, 先日に引き続き北海道エリアを回る
2023/10/13, アリス, AdminA, 未処理, 11, 65000, 北海道出張
2023/10/10, ボブ, AdminA, 未処理, 3, 0, 契約獲得なし
2023/10/09, アリス, AdminA, 未処理, 5, 2000, １社のみ契約
2023/10/08, ボブ, AdminA, 未処理, 1, 60000, 遠方出張
2023/10/02, ボブ, AdminA, 未処理, 8, 24000, 大口契約あり
2023/10/01, アリス, AdminA, 未処理, 4, 1000, 特になし
{{< /excelTable >}}

とある日報から訪問件数と売上高、そして概要を抜き出して、１枚のエクセルにまとめました。
このエクセルから**スタッフ別に分けて売上高や訪問件数を集計**してみましょう

## スタッフ別の売上を分けて集計するには「SUMIF関数」を活用{#usageSumifForStaffByStaff}

エクセルを使って上記の表を集計してみましょう。
単純な売上高を集計する場合は「SUM関数」で集計できますが、SUM関数だと「アリス・ボブ」２人の合計を求めてしまいます。
そうではなく「アリス」の売上高合計、「ボブ」の売上高合計を求めます。
F12のセルに =SUMIF(B2:B8,D12,F2:F8)と入力します。

{{<figure src="img/sumif.png"  alt="Sumif関数の使い方。スタッフ名ごとに集計するときに便利な関数です" caption="Sumif関数の使い方。スタッフ名ごとに集計するときに便利な関数です" >}}

Sum関数に比べると少し難しく感じますね。Sum関数は「合計の範囲」を指定するだけで簡単に使えますが、SUMIF関数はこれに加えて「範囲」と「条件」が必要になります。

<dl class="basic">
<dt>範囲</dt>
<dd>スタッフ名の範囲を選択します</dd>
<dt>条件</dt>
<dd>集計したいスタッフの名前のセルを指定します。スタッフ名一覧を別途用意しておくと良いでしょう</dd>
<dt>合計の範囲</dt>
<dd>売上高の範囲を指定します</dd>
</dl>

これで「アリス」の売上高と「ボブ」の売上高を分けて集計することができました。
コツとしては**集計したいスタッフの名前一覧を用意**しておく点です。
エクセルシートの空いている場所にスタッフの名前一覧を記述しておき、計算式の「条件」として使用します。上の画像で言うところの「D11:D12」セルがそれに該当します。
このようにスタッフリストを用意しておくことで、後述する式のフィルコピー時に自動で集計したいスタッフ名をずらすことが可能になります。

## 集計の範囲を変えれば売上高以外のデータも集計できます{#otherDataSubtotal}

すでに上の画像で見えているので今更ですが、SUMIF関数を使ってスタッフごとに「訪問件数」の合計を求めることも可能です。
使い方は売上高を求めるときとほとんど同じです。最後のパラメータである「合計の範囲」をE2〜E8に変更します。他のパラメータは全く同じです。

{{<figure src="img/sumif2.png"  alt="Sumif関数の使い方。合計の範囲を変更することで売上高以外の集計も可能です" caption="Sumif関数の使い方。合計の範囲を変更することで売上高以外の集計も可能です" >}}

## フィルコピー時のコツ：絶対パスと相対パスの組み合わせ{#tips_for_file_copying}

先ほどの例は全て相対パスによる記述でしたが、エクセルをより便利に使いこなすには絶対パスと相対パスを知る必要があります。これらを知ることで式は１つ、あとは全部コピーで答えを求めることができます。

先に答えをお伝えします。数式としては以下の通りです。（セルE11の場合）

```bash
=SUMIF($B$2:$B$8,$D11,E$2:E$8)
```

＄がついたりつかなかったり、非常に複雑に見えますがやっていることは「列を固定したいか」「行を固定したいか」を基準に考えれば簡単です。
詳しくは「絶対パス・相対パス・複合パス」を御覧ください。

{{<figure src="img/sumif-fillcopy.png"  alt="SUMIFをフィルコピーで使う場合の数式の入力。絶対パスと相対パスが組み合わさるので少し複雑になりますが、縦横のコピー２操作で全員の集計が簡単に算出できます" caption="SUMIFをフィルコピーで使う場合の数式の入力。絶対パスと相対パスが組み合わさるので少し複雑になりますが、縦横のコピー２操作で全員の集計が簡単に算出できます" >}}

今回使用したSUMIF関数のエクセルファイルをダウンロードできます。動きを確認したい方は以下のリンクからダウンロードしてご利用ください。

[SUMIFを使ったエクセルサンプルをダウンロード](sumif.xlsx)

## レポートをエクセルへ転記する手間・集計期間の変更など弱点もある（ちょっと宣伝）{#weekedPoint}

SUMIF関数は使いこなせると非常に強力な武器となります。ただしこれはお膳立てがしっかりしていることが前提。
よく考えてみてください。

1. そもそも日々提出される日報を１枚のエクセルシートにまとめるのが大変だ
2. 毎週・毎月・毎年のように集計範囲を手軽に変更できない

一体誰が毎日提出される個々の日報を１枚のエクセルシートにまとめるのでしょう？
最初からエクセルで日報を作る？誰でも書き換えが可能な上に、スマートフォンとの相性は最悪です。

コンピュータの世界には「Garbage In, Garbage Out」という格言があります。
ゴミを入れるとゴミしか出てこないという戒めです。だからこそデータの入力をアプリ化するのが最も近い道です。
手書きによる転記や誰でも操作できるエクセルはデータの信用性が低くなります。（打ち間違い・転記ミス・誤操作によるデータ削除など）

ここでよくある製品紹介。はいすみません。広告です。
クラウド日報NipoPlusでは今回紹介したSUMIFを使ったスタッフごとの集計を全部自動で行います。

{{<icatch filename="img/sumif-app" msg="SUMIFを自動で" title="SUMIFと同様、スタッフごとに売上高や訪問件数を自動で振り分けて集計します" alice="guide">}}

今回のテストデータもNipoPlusのCSV出力機能から用意しました。
日報をアプリで管理でき、必要に応じて今回のようにエクセルで加工することもできます。
無料でも使えるのでぜひ使ってみてね。
