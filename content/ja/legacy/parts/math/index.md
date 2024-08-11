+++
description = "数値のデータレポートテンプレートに追加できます。数値は集計にも対応しております。"
title = "数値"
toc = true
weight = 109002017
isNipo = true
tags = ["旧バージョン"]
aliases = []
[sitemap]
  changefreq = "yearly"
  priority = 0.2
+++

{{<btnCenter "/docs/manual/initial-setting/template/digital/#commonNumber" "新バージョンでも使えます">}}

## 数値の入力画面{#display}

数値項目はその名の通り**数値のみ入力が可能**です。（整数・負数・小数点が指定可能です）この項目の特徴は、集計され、グラフ化の対象となることです。
数値の範囲が限定的であれば、数値ではなく[スライダー](/legacy/parts/slide/)の利用を検討してください。

{{<imgproc parts_math1.png "数値を日報に添付した様子" />}}

## 数値を含んだ日報の各種出力画面{#output}

[PDFに出力](/legacy/manual/pdf/)すると次のように表示されます。

{{<imgproc parts_math2.png "数値を含む日報をPDFに変換した出力結果" />}}

[CSVに出力](/legacy/manual/analytics/)すると次のように表示されます。

{{<imgproc parts_math3.png "数値を含む日報をCSVに出力し、Excelで開いた画面" />}}

数値パーツは[集計](/legacy/manual/analytics/)ができます。例えばスタッフごとの期間推移を表示した例は次のとおりです

{{<imgproc parts_math4.png "数値を含む日報を集計し、折れ線グラフ付きで表示した例" />}}

Nipo【旧版】の受信・送信BOXからは次のように表示されます

{{<imgproc parts_math5.png "クラウド日報Nipo【旧版】のアプリ上から数値を含むレポートを表示した画面" />}}

## 設定画面{#setting}

テンプレートの編集画面では次のような設定画面となっております。

{{<imgproc parts_math6.png "数値の初期設定画面" />}}

<dl class="basic">
  <dt>タイトル</dt>
  <dd>タイトルを編集できます。改行も扱えます</dd>
  <dt>単位</dt>
  <dd>円やKm・個など任意の単位を設定できます</dd>
  <dt>初期値の設定</dt>
  <dd>日報作成時にデフォルトでセットされる値を設定できます。不要な場合は空欄にしておきます</dd>
  <dt>入力必須</dt>
  <dd>ONにすると0文字だった場合に日報の提出ボタンが押せなくなります。この機能は無料プランでは無視されます</dd>
  <dt>補助科目の設定</dt>
  <dd>補助科目を使う場合はOnにします。補助科目は数値の総額に対する内訳として入力できますが、集計には対応していない、簡易的な機能です</dd>
  <dt>説明文</dt>
  <dd>日報作成者が何を書くべきか迷わないようにするために説明を付すことができます。</dd>
  <dt>補助科目登録画面</dt>
  <dd>補助科目の設定がONの場合に表示されます。補助科目名を入力することで補助科目として登録されます</dd>
</dl>
