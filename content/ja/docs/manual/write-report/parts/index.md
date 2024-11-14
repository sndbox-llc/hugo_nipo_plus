+++
description = "各種入力フォームごとに入力方式が異なります。それぞれの入力方式についてこのページでまとめています"
title = "入力フォームごとの入力方法"
menuTitle = "🖊入力方法について"
toc = true
weight = 101002009
mermaid = true
aliases = []
images = []
url = "/docs/manual/write-report/parts/"
+++

NipoPlusは設計されたテンプレートに沿って入力します。10種類以上の入力フォームを自由に組み合わせて作られるため、フォームによっては入力方式がわかりにくいものもあるかもしれません。  
このページではNipoPlusで利用できる全ての入力方式について画像を交えて解説しています。  
なお、多くは直感的に操作可能です。


## 文字入力系{#textCategory}

キーボードを使って自由に入力できます。現在は「テキスト入力」の1種類です。

### テキスト入力{#text}


{{<icatch filename="text-preview" msg="シンプルな文字入力です。改行も使えるし、URLを貼ればリンクもできるよ" alice="pc">}}

[▶このフォームを追加する方法](/docs/manual/initial-setting/template/text/)

シンプルな文字入力です。見た目は１行しか入力できそうに有りませんが、改行をいれることで自動で高さが広がります。  
設定で「[リンクを有効にする](/docs/manual/initial-setting/template/text/#settings)」がONの場合、URLなどを入力するとリンクが自動で貼られます。


## 選択入力系{#selectCategory}

あらかじめ回答リストを用意し、選ぶことで入力できるフォームです。手打ちの手間が無く、タブレットやスマートフォンとの相性もバグツンです。
入力方式はラジオ式とプルダウン式の2種類があります。プルダウンでは文字入力による絞り込みが利用できるため**選択肢が多い場合はプルダウンを推奨**します。


### 選択肢入力（単体）{#select}


{{<icatch filename="select" msg="あらかじめ用意したリストから選ぶだけ" alice="ok">}}

[▶このフォームを追加する方法](/docs/manual/initial-setting/template/selects/#plain)

該当する選択肢をタップやクリックで選択します。1つだけ選択可能です。「入力モード切替」を押すとプルダウン・ラジオボタンを交互に切り替えます。  
「入力モード切替」ボタンを非表示にしたい場合はテンプレート[設定](/docs/manual/initial-setting/template/selects/#plainSettings)から「入力切替を無効にする」をONにします。

### 選択肢入力（複数回答）{#select2}


{{<icatch filename="select2" msg="あらかじめ用意したリストから選ぶだけ。見た目はチェックボックス" alice="ok">}}

[▶このフォームを追加する方法](/docs/manual/initial-setting/template/selects/#multiple)

該当する選択肢をタップやクリックで選択します。任意の数を選択可能です。「入力モード切替」を押すとプルダウン・チェックボタンを交互に切り替えます。



### 選択肢(2層式)入力{#selectLayer}



{{<icatch filename="select2-preview" msg="問1の選択によって問2の解凍リストが変化します。問２を忘れずに入力しましょう" alice="ok">}}

[▶このフォームを追加する方法](/docs/manual/initial-setting/template/selects/#layerd)

レポート作成直後の画面では問1しか表示されませんが、問1を選択すると自動で問2が出現します。**問2の内容は問1によって変化**します。
入力必須が設定されている場合は、**問2まで回答して初めて提出が可能**になります。




### チェックボックス{#checkbox}


{{<icatch filename="checkbox-preview"  msg="タップでON.もう一度タップでOFF。それだけです" alice="phone">}}

[▶このフォームを追加する方法](/docs/manual/initial-setting/template/selects/#checkbox)

クリックでONになり、もう一度クリックするとOFFになります。



## 日付時刻入力系{#dateCategory}


### 日付と時刻（時点）{#datetime}

{{<icatch filename="date-time" msg="日付や時刻が入力できます" alice="here">}}

[▶このフォームを追加する方法](/docs/manual/initial-setting/template/date_time/#point)

正しい形式で日付や時刻を入力します。カレンダーなどのデイトピッカーを使うことで正しい値を間違えずに入力可能です。直接キーボードから打ち込む際は入力ミスに注意！

### 日付と時刻（範囲）{#datetimes}


{{<icatch filename="datetimes-preview" msg="開始日時と終了日時を入力します。正しい日時が入力されると経過時間が自動で表示されます">}}

[▶このフォームを追加する方法](/docs/manual/initial-setting/template/date_time/#range)

正しい日付や時刻入力がされると経過時間が自動で表示されます。




## バイナリデータ入力系{#binaryCategory}


### 署名の書き方{#sign}

署名は「書き足す」ボタンを押すことで描画キャンバスが表示されます。

{{<icatch filename="sign-input" msg="署名ボタンをタップすると署名入力ウインドウがポップ表示されます" alice="tablet">}}

[▶このフォームを追加する方法](/docs/manual/initial-setting/template/binarys/#sign)


描画キャンバスは署名用とイラスト用の２種類があります。
署名用キャンパス▼

{{<icatch filename="write-signature" msg="スタイラスペンとタブレットがあると便利です" alice="tablet">}}


イラスト用キャンバス▼

{{<icatch filename="draw-stylus-pen" msg="署名と違い大きなキャンパスとなり、色変えなどの機能も使えます" alice="tablet">}}



### 写真{#picture}

PCからはドラッグ操作で写真をレポートに添付できます。スマートフォン・タブレットの場合はボックスをタップして追加してください。  
※[無料プラン](/docs/price/free/)では低画質でUPされます


{{<icatch filename="picinput" msg="PCはドラッグ＆ドロップで追加、スマホやタブレットの場合はボタンをタップして写真追加します" alice="pc">}}

[▶このフォームを追加する方法](/docs/manual/initial-setting/template/binarys/#picture)


レポート作成時は高さ制限があるため縦長の画像は上下がカットされたように見えますが、単にクロップされているだけです。データ自体は残っているのでご安心ください。
全体の写真はレポート受信時に表示できるようになります。

また、各写真には「表示切り替え」スイッチが付属します。スイッチがOFFの際は縦横比を維持して画像全体を表示します。そのため一般的には画像が小さくなります。
スイッチをONにすると画像を大きく表示し、縦に長い画像は上下をクロップします。  

※スマートフォンでは見え方が変わります。



### ファイル{#file}

{{<icatch filename="file-input" msg="おもにPCで利用を想定しています。ドラッグでファイルを追加できます" alice="pc">}}

[▶このフォームを追加する方法](/docs/manual/initial-setting/template/binarys/#file)


レポートにファイルを添付するにはドラッグ＆ドロップ、またはフォームをタップしてファイルを追加します。
1つの入力フォームに対して10ファイルまで添付可能です。
1ファイルに付き1MBを超えることはできません。

## 数値入力系{#digitCategory}




### 数値入力{#number}

キーボードを使って入力します。電卓キーボタンを押すことで専用テンキーを表示して入力することも可能です。  
テンキーはかなり大きなサイズで、年配の方でもスムーズに入力が可能です。
半角のみ扱えます。
マイナス、小数点も入力可能です。

{{<icatch filename="math-input" msg="キーボードから数値を入力します。タッチパネル対応なら専用入力も使いやすいのでおすすめ" alice="tablet">}}

[▶このフォームを追加する方法](/docs/manual/initial-setting/template/digital/#commonNumber)



### レート入力{#rate}

クリックで任意の星の数を入力できます。同じ数をもう一度クリックすると未入力状態に戻ります。

{{<icatch filename="rate-preview" msg="タップで星の数を選びます。同じ数をもう一度タップすると★0の状態になります">}}


[▶このフォームを追加する方法](/docs/manual/initial-setting/template/digital/#rate)





### スライダ入力{#slider}

ドラッグやスワイプでレール上のつまみを操作し、数値を入力します。レールの上限、下限を超えて入力することはできません。

{{<icatch filename="slider-preview" msg="ドラッグやスワイプでつまみを動かします" alice="here">}}


[▶このフォームを追加する方法](/docs/manual/initial-setting/template/digital/#slider)


### 範囲入力{#range}

ドラッグやスワイプでレール上のつまみを操作し、数値を入力します。２つあるつまみは１つづつ操作してください。

{{<icatch filename="range-preview"  msg="ドラッグやスワイプでつまみを動かします。つまみは2つあるので1つづつ操作します" alice="tablet">}}

[▶このフォームを追加する方法](/docs/manual/initial-setting/template/digital/#range)



### 算術入力{#calc}

算術フォームは自動計算されるため、手動で入力はできません。

{{<icatch filename="calc-preview" msg="自動で入力されるので手動で入力はできません。" alice="guide">}}

[▶このフォームを追加する方法](/docs/manual/initial-setting/template/digital/#calc)



## その他{#otherCategory}


### 在庫入力{#item}

商品管理で登録された商品の状態、及び数量をレポートを通して変更できます。

{{<icatch filename="itemReport" msg="在庫の入力" alice="guide">}}




[▶このフォームを追加する方法](/docs/manual/initial-setting/template/mod/)

商品入力フォームでは、商品名または商品コードから商品を探すことから始まります。
対象の商品を見つけたらクリックして商品を決定します。

商品には「数量管理」を行う商品と「状態管理」を行う商品、そして両方の管理を行う商品の3種類があります。
管理する対象商品によって入力内容が若干変化します。


数量管理の商品は在庫数の増加・減少を行う操作ボタンが表示されます。状態を管理する商品では「状態」を一覧から選択する操作ボタンが表示されます。



### 反復入力{#array}


設計によって見た目が異なります。この画像は一例です。

{{<icatch filename="array-input" msg="反復入力の偶数行は水色の背景で表示されます。視認性UP" alice="ok">}}

[▶このフォームを追加する方法](/docs/manual/initial-setting/template/array/)


表示形式が**表・カードの2種類から切替が可能**です。スマートフォンではカード表示が初期状態になります。
画像では見えていませんが、1行追加ボタンをクリックすると新規の行が一番下に挿入されます。
行を削除したいときは各行の右端にあるゴミ箱アイコンをクリックします。

