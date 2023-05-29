+++
description = "日報にチェックボックスパーツを追加できます。Yes/NOのように２択で回答できる項目で力を発揮します。シンプルでほとんどの人が使い方を説明せずに直感的に利用できます。"
menuTitle = "チェックボックス"
title = "チェックボックス-日報構成部品"
toc = true
weight = 109002002
isNipo = true
tags = ["旧バージョン"]
contributors = []
aliases = ['/old/parts/checkbox/']

+++

{{<button "/docs/manual/initial-setting/template/checkbox/" "この機能は後続のNipoPlusでもサポートされています">}}

## チェックボックスの入力画面

チェックボックスは **「はい・いいえ」の回答が簡単**にできるシンプルな項目です。見た目もわかりやすく、誰でも簡単に操作できます。
入力必須の指定がされた場合、チェックがONになっていないと、提出ができません。（入力必須の設定については後述）

{{<imgproc parts_chkbox1.png "チェックボックスの日報を入力する画面" />}}


## チェックボックスを含んだ日報の各種出力画面

[PDFに出力](/old/manual/pdf/)すると次のように表示されます。

{{<imgproc parts_chkbox2.png "チェックボックスを含む日報をPDFに変換した出力結果" />}}

チェックボックスはCSV出力時に列を展開して出力することもできます。

列を展開せずに[CSVに出力](/old/manual/analytics/)すると次のように表示されます。

{{<imgproc parts_chkbox3.png "チェックボックスを含む日報をCSV出力し、エクセルで開いた例ー列の展開を無効" />}}

列を展開してCSV出力すると次のように表示されます

{{<imgproc parts_chkbox4.png "チェックボックスを含む日報のCSV出力し、エクセルで開いた例ー列の展開を有効" />}}

Nipoの受信・送信BOXからは次のように表示されます

{{<imgproc parts_chkbox5.png "クラウド日報Nipoのアプリ上からチェックボックスを表示した画面" />}}

## 設定画面

日報テンプレートの編集画面では次のような設定画面となっております。
{{<imgproc parts_chkbox6.png "チェックボックスの初期設定画面" />}}

|名称|説明|
|---|---|
|タイトル|タイトルを編集できます。改行も扱えます|
|表示形式|ボックス風かトグルスイッチ風を選べます。見た目以外に違いはありません|
|プレビュー|実際に動きの確認ができます|
|[入力必須](/tips/required/)|ONにすると0チェックボックスにチェックが入ってないと日報の提出ができなくなります。この機能は無料プランでは無視されます|
|説明文|日報作成者が何を書くべきか迷わないようにするために説明を付すことができます。|