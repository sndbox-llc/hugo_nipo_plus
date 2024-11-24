+++
url = "/docs/manual/initial-setting/template/selects/"
description = "日報や点検シート、機械点検、品質チェックに最適な入力フォームです。これらのパーツを自由に選んで自社オリジナルの点検フォームを簡単に作成できます"
# tags = ["テンプレートパーツ", "テンプレート", "集計可能フォーム"]
title = "選択入力系のパーツ"
menuTitle = "🧩選択入力系"
toc = true
weight = 153
mermaid = true
# aliases = []
# images = []
+++

回答のリストを用意しておき、入力時には一覧から選ぶだけで入力ができる形式のフォームです。
キーボード不要で、スピーディな入力が可能です。
コンピュータに不慣れな方や年配の方でも直感的な入力が可能です。
スマートフォンやタブレットといったタップ操作に対応した端末とも相性の良いフォームです。

NipoPlusでは以下の種類があります。

<dl class="basic">
  <dt><a  href="#plain">選択入力（単回答）</a></dt>
  <dd>一覧の中から1つだけ回答を選べるタイプのものです。見た目はラジオボタンになります</dd>
  <dt><a  href="#multiple">選択入力（複回答）</a></dt>
  <dd>一覧の中から複数個選んで入力できます。見た目はチェックボックスになります</dd>
  <dt><a  href="#layerd">選択入力（２層式）</a></dt>
  <dd>問1の回答に応じて問2の回答リストが自動で変化する入力方式です。単体回答のみです</dd>
  <dt><a  href="#checkbox">チェックボックス入力</a></dt>
  <dd>YESかNOの２択で回答できるとてもシンプルな入力です。選択肢（複）の１こバージョンと解釈することもできます</dd>
</dl>



|名前|[集計可否](/docs/manual/analytics/)|[CSV出力](/docs/manual/analytics/csv/)|[PDF出力](/docs/manual/read-report/state/#pdf_export)|[文字検索](/docs/manual/read-report/list/#searchFunction)|
|:---:|:---:|:---:|:---:|:---:|
|選択入力（単）|⭕|⭕|⭕|✗|
|選択入力（複）|⭕|⭕|⭕|✗|
|選択入力（２層）|⭕|⭕|⭕|✗|
|チェックボックス|⭕|⭕|⭕|✗|


{{<icatch filename="add-select-parts" msg="左のパーツリストから選択入力をクリックで追加します。茶色系のボタンが選択系です">}}


---

## 選択式入力 単体回答{#plain}

{{<icatch filename="eye-catch" msg="選ぶだけの簡単入力♫タブレットやスマホと相性抜群です" alice="phone">}}


複数の回答から1つだけ選ばせたいときに利用してください。機器点検における機器の大まかな状態表示などに適しています
（正常・異常・休止など）


{{< callout context="note" title="Note" icon="outline/info-circle" >}}
[選択入力フォームの入力画面](/docs/manual/write-report/parts/#select)はこちらから確認できます
{{< /callout >}}



### 単体回答の設定{#plainSettings}

<details >
  <summary>選択式フォームの設定</summary>

<dl class="basic">
  <dt>入力切替を無効にする</dt>
  <dd>ON:レポート作成時に入力方式を変更するボタンが非表示になります</dd>
  <dt>入力必須</dt>
  <dd>ON:選択肢が選ばれていないとレポートの提出ができません</dd>
  <dt>集計する</dt>
  <dd>ON:集計機能で利用できます。集計が不要の場合はOFFにします</dd>
  <dt>選択肢を直接指定</dt>
  <dd>すぐ下の「選択肢」エリアに選択肢を入力できます。初期値はこの方式です</dd>
  <dt>選択肢を語録から取得</dt>
  <dd>語録を使って単語を指定。以下のケースで導入を検討してください。<ul><li>選択肢の単語リストを使いまわしたい場合</li><li>選択肢をレポート作成時に自由に追加したい場合</li></ul><br>詳しくは<a href="/docs/manual/initial-setting/advanced-setting/goroku/">語録</a>を参照</dd>
  <dt>入力方式</dt>
  <dd>以下から選択します。<ul><li>ラジオ式</li><li>プルダウン式</li></ul><br>プルダウンは検索が使えるため単語が多い場合に推奨</dd>
</dl>

補足:[共通設定事項](/docs/manual/initial-setting/template/make/#common_setting)

</details>

[単語の色分け](#color)をするにはこちらをご覧ください



### データの活用（CSV出力・グラフ化）{#subtotal_select}



<details>
  <summary>集計とグラフ化</summary>

選択式フォームは集計・グラフ化が可能です。単語が選ばれた回数を自動集計し、円グラフや棒グラフとして表示できます。
選択式の単語に数字が含まれていれば**数値として集計**やグラフ化できます。
たとえば次のような選択肢は集計もグラフ化もできます。
{{<icatch filename="num-select"  msg="選択肢は単語ですが数値に置き換えてグラフ化することも可能です" alice="ok"  >}}

</details>


<details>
  <summary>CSV出力</summary>


[CSV出力オプションを変更](/docs/manual/analytics/csvoption/)することで列展開の出力形式を変更できます。

**列展開がON**の場合のCSV出力例

{{< excelTable >}}
提出日, 【軽自動車】使用車両, 【乗用車】使用車両, 【トラック】使用車両, 【スクーター】使用車両, 【十分にある】ガソリン残量, 【半分を下回った】ガソリン残量, 【四分の１を下回った】ガソリン残量, 【給油が必要】ガソリン残量
2023/06/11, -, ⭕, -, -, -, -, -, ⭕
2023/06/10, ⭕, -, -, -, ⭕, -, -, -
2023/06/09, -, ⭕, -, -, -, ⭕, -, -
2023/06/08, -, -, -, ⭕, ⭕, -, -, -
2023/06/07, -, ⭕, -, -, -, ⭕, -, -
{{< /excelTable >}}


例えば使用車両という１つの項目に対して４列（B〜E列）展開していることがわかります。


**列展開がOFF**の場合のCSV出力例


{{< excelTable >}}
提出日, 使用車両, ガソリン残量, 業務報告
2023/06/11 09:04, 乗用車, 給油が必要, 略
2023/06/10 09:04, 軽自動車, 十分にある, 略
2023/06/09 09:04, 乗用車, 半分を下回った, 略
2023/06/08 09:04, スクーター, 十分にある, 略
2023/06/07 09:04, 乗用車, 半分を下回った, 略
{{< /excelTable >}}

選択肢の数に関係なく、1つの列にまとめて出力されます

</details>

---

## 選択式入力 複数回答{#multiple}

こちらは回答から複数個選択することができるタイプです。見た目はチェックボックスが並んだような表示形式になります。

{{<icatch filename="select2" msg="選ぶだけの簡単入力（複数選択可）♫タブレットやスマホと相性バツグンです"  alice="tablet">}}

使い方についてはほとんど選択肢単回答と同じです。CSV出力時の形式のみ異なります。

[単語の色分け](#color)をするにはこちらをご覧ください






<details>
  <summary>CSV出力</summary>


[CSV出力オプションを変更](/docs/manual/analytics/csvoption/)することで列展開の出力形式を変更できます。

**列展開がON**の場合のCSV出力例


{{< excelTable >}}
提出日, 【のこぎり】使用機材, 【金槌】使用機材, 【かんな】使用機材, 【タッカー】使用機材, 【墨つぼ】使用機材, 略, 略, 略, 略, 略, 略, 略, 略
2023/06/11 11:37, -, ⭕, ⭕, -, -, -, -, -, ⭕, -, -, ⭕,
2023/06/10 11:37, -, ⭕, ⭕, ⭕, -, -, -, ⭕, ⭕, ⭕, -, -,
2023/06/09 11:37, ⭕, -, -, -, -, ⭕, -, -, -, -, ⭕, ⭕,
2023/06/08 11:37, ⭕, ⭕, ⭕, -, ⭕, -, -, -, ⭕, ⭕, ⭕, ⭕, 作業報告内容を書く
{{< /excelTable >}}



（長くなるためF列以降省略しています）

**列展開がOFF**の場合のCSV出力例


{{< excelTable >}}
提出日, 使用機材, 使用車両, 不具合状況, 業務報告
2023/06/11 11:37, "かんな 金槌", トラックB, 工具不足,
2023/06/10 11:37, "かんな 金槌 タッカー", "トラックA トラックB", 遅延あり,
2023/06/09 11:37, のこぎり, 軽トラックA, "機材不足 工具不足",
2023/06/08 11:37, "かんな 金槌 のこぎり 墨つぼ", トラックB, "遅延あり 機材不足 工具不足", 作業報告内容を書く
{{< /excelTable >}}


１つのセルに、複数の回答が詰め込まれるため若干無理のある形に出力されることに注意してください。選ばれた単語ごとにスペースで区切って出力されます。
CSV出力に限っては選択肢（単体）の方が加工がしやすい形です

</details>

---

## 選択式入力 ２層式{#layerd}

{{< callout context="caution" title="注意" icon="outline/alert-triangle" >}}
この機能は[動的変化](/docs/manual/initial-setting/template/selects/#dinamic_switch_select)を使うことで同様の機能をもたせることができるため現在では非推奨です
{{< /callout >}}



問１の設問によって問２の解凍リストが変化する入力フォームです。
例えば問1の回答が「野菜」だった場合と、「果物」だった場合でそれぞれ問2の選択肢が変わります。

```kroki {type=mermaid}
graph LR;
    C{野菜<br>果物}
    C -->|野菜を選択| D[白菜<br>人参<br>きゅうり<br>etc...]
    C -->|果物を選択| E[いちご<br>ばなな<br>パイナップル<br>etc...]
```

### 選択肢（2層式）の初期設定{#settingSelectCalc}

問１のリストと問２のリストを作成する必要があるため初期設定は少し手間がかかります。
{{<icatch filename="template" msg="2層式はあまりおすすめできないかな？動的変化を使ったほうがいいかも？" alice="question">}}

質問1の選択肢を追加するごとに、質問2の選択肢欄も自動で追加されていきます。
以下は本入力フォームにのみ存在する設定項目です



<details>
  <summary>詳細設定</summary>



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

補足:[共通設定事項](/docs/manual/initial-setting/template/make/#common_setting)
[単語の色分け](#color)も可能です


</details>

[単語の色分け](#color)をするにはこちらをご覧ください



### CSV出力{#csv_3}

選択肢(2層式)をCSVに出力すると、答1・答2の2列に展開されてCSVに出力されます。


{{< excelTable >}}
状態, 文書ID, 承認者1, 【答1】野菜, 【答2】野菜, 【答1】パソコン, 【答2】パソコン, 【答1】お酒, 【答2】お酒
進行, u4PIRvw, 管理者A, くだもの, バナナ, デスクトップ, Mac Mini, ウィスキー, ラフロイグ
{{< /excelTable >}}


## 選択肢の色分けについて{#color}

[選択肢単体](#plain)、[選択肢複数](#multiple)、[選択肢２層式](#layerd)の３種類は、各選択肢に色分けをする機能が有ります。
<details>
  <summary>単語の色分けについて</summary>

単語を色分けする場合は単語の後ろに###色名をつけてください。
例:

- りんご###red
- ぶどう###blue

正しく設定されているかはプレビューを見て確認してください。
使用可能な色は以下のとおりです。

<dl class="basic">
<dt>red</dt>
<dd style="color:red">■これはサンプルです</dd>
<dt>pink</dt>
<dd style="color:pink">■これはサンプルです</dd>
<dt>purple</dt>
<dd style="color:purple">■これはサンプルです</dd>
<dt>indigo</dt>
<dd style="color:indigo">■これはサンプルです</dd>
<dt>blue</dt>
<dd style="color:blue">■これはサンプルです</dd>
<dt>cyan</dt>
<dd style="color:cyan">■これはサンプルです</dd>
<dt>teal</dt>
<dd style="color:teal">■これはサンプルです</dd>
<dt>green</dt>
<dd style="color:green">■これはサンプルです</dd>
<dt>lime</dt>
<dd style="color:lime">■これはサンプルです</dd>
<dt>orange</dt>
<dd style="color:orange">■これはサンプルです</dd>
<dt>brown</dt>
<dd style="color:brown">■これはサンプルです</dd>
<dt>gray</dt>
<dd style="color:gray">■これはサンプルです</dd>
</dl>

</details>



---


## チェックボックス入力{#checkbox}

{{<icatch filename="input-method-checkbox" msg="チェックボックス入力フォームはYES・NO 2択で答えるのに便利です" alice="ok">}}

チェックボックスフォームの設定は以下の通り。

<details>
  <summary>選択式フォームの設定</summary>

<dl class="basic">
  <dt>メモ</dt>
  <dd>チェックボックスの右隣に表示される文字</dd>
  <dt>入力必須</dt>
  <dd>ON:提出時にこのチェックボックスがONでないと提出ができないようになります</dd>
  <dt>初期状態でON</dt>
  <dd>ON:レポート作成時にチェックボックスはONの状態でスタート</dd>
  <dt>集計する</dt>
  <dd>ON:集計機能で利用できます。集計が不要の場合はOFFにします</dd>
  <dt>CSV出力時列を展開</dt>
  <dd><a href="/docs/manual/analytics/csvoption/">CSV出力オプションを参照</a></dd>
  <dt>形状</dt>
  <dd><ul><li>スイッチ</li><li>ボックス</li></ul>から選択します</dd>
</dl>
メモの使われ方がチェックボックスだけ他の項目と異なり、ボックスの横に配置されるという点にだけ注意してください。


補足:[共通設定事項](/docs/manual/initial-setting/template/make/#common_setting)

</details>

### チェックボックスのデータを集計{#subtotal_checkbox}

チェックボックスのデータは集計対象です。過去データ推移や累積、そこからグラフの作成も可能です。


<details>
  <summary>グラフ化</summary>


{{<icatch filename="pie-charts" msg="チェックボックスのデータを円グラフにしたイメージ">}}


{{< link-card title="レポートをグラフ化する" description="操作ガイド" href="/docs/manual/analytics/chart/" >}}


</details>


<details>
  <summary>CSV</summary>
出力形式を変えることができます。


{{< link-card title="CSV出力オプション" description="操作ガイド" href="/docs/manual/analytics/csvoption/" >}}


列展開がONの場合のCSV出力例

{{< excelTable >}}
提出日, 【ON】質問A, 【OFF】質問A, 【ON】質問B, 【OFF】質問B, 業務内容
2023/06/06, ◯, -, ◯, -,
2023/06/06, -, ◯, -, ◯,
2023/06/06, -, ◯, ◯, -,
2023/06/06, ◯, -, -, ◯,
2023/06/06, ◯, -, ◯, -, これはサンプルです
{{< /excelTable >}}



列展開がOFFの場合のCSV出力例

{{< excelTable >}}
提出日, 質問A, 質問B, 業務内容
2023/06/06 11:15, ON, ON,
2023/06/05 11:15, OFF, OFF,
2023/06/04 11:15, OFF, ON,
2023/06/02 11:15, ON, OFF,
2023/06/01 11:15, ON, ON, これはサンプルです
{{< /excelTable >}}

</details>

---



## 選択肢のリストを動的に変化させる{#dinamic_switch_select}


{{< callout context="note" title="Note" icon="outline/info-circle" >}}
この機能は有料プラン限定です
{{< /callout >}}

[選択式入力フォーム（単）](/docs/manual/initial-setting/template/selects/#plain)・及び[選択式入力フォーム（複）](/docs/manual/initial-setting/template/selects/#multiple)は他の選択式入力フォームの回答結果により自身の選択肢のリストを動的に変更する機能があります。
これを動的変化機能といいます。

例として、地域に「北関東」を選ぶと支店の選択肢が「栃木県宇都宮支店・栃木県栃木市支店・栃木県日光支店」に変化するような小細工ができます。
下の画像がイメージしやすいでしょう▼


{{<icatch filename="dinamic-selection" msg="他の入力結果に応じて選択肢のリストを動的に変化できます" alice="ok">}}

このように回答に応じて次の回答を変えることで、より柔軟で独創的なレポートフォームを作ることがプログラマ不在でも作れます。

### 動的変化の設定方法{#how_to_setting}

動的変化を使うにはテンプレートの設定画面から行います。設定は３種類有ります。

<details >
  <summary>選択式フォームの設定</summary>

<dl class="basic">
<dt>参照先</dt>
<dd>変化を引き起こす大元のフォームです。先の例でいうと「地域」がこれに該当します
<dt>参照先の値</dt>
<dd>参照先に何が選ばれたとき を決めます。例えば「北関東」が選ばれたとき のように指定します</dd>
<dt>変化後のリスト</dt>
<dd>変化させたいリストを記述します。北関東が選ばれたときは「宇都宮支店・栃木市支店」のように列挙します</dd>
</dl>

</details>

例えば[選択式入力フォーム](/docs/manual/initial-setting/template/selects/#plain)（単）を参照先として指定するには次の画像のようになります。


{{<iTablet filename="dinamic-selection-setting" msg="他のデータによって自分のデータを変化させることができるよ。まるでプログラマみたい" alice="pc">}}



[選択式入力フォーム](/docs/manual/initial-setting/template/selects/#multiple)（複）を参照先として指定する場合、参照先の値は複数選択することになりますが、**すべてにマッチしたとき条件が成立**となります。一部一致ではありません。


#### 複数条件がある場合の優先度{#priolity}

動的変化の条件は複数指定することができます。先の例であれば、「北関東」を選んだとき、「関東」を選んだとき、「北陸」を選んだときで３つの条件を指定する必要があります。
条件は登録した順に並びます。より「上」に配置された条件が優先されます。複数の条件を設定し、この内いくつかが条件を満たしたとしても、条件がより「上」にあるものが優先して適用されます。

### 条件を満たしていませんと表示されるとき{#error_case}

[選択式入力フォーム](/docs/manual/initial-setting/template/selects/#plain)を動的変化させるには、トリガーとなるための参照先フォームが必要です。極端な話、テンプレート内にフォームが１個しかない場合、そもそも参照する対象が無いため利用できません。
条件を満たしていないとき、動的変化の画面には「このテンプレートでは動的変化をつかう条件を満たしていません」と表示され、追加ボタンが表示されなくなります。

{{<icatch filename="disable-dinamic" msg="なんで利用できないのかな？条件をよく見直してみよう"  alice="question">}}


動的変化を使用する具体的な条件は以下のとおりです。

- 自身の[選択式入力フォーム](/docs/manual/initial-setting/template/selects/#plain)の他に別の[選択式入力フォーム](/docs/manual/initial-setting/template/selects/#plain)が存在すること（単・複どちらでも可）
- 上記のフォームが「語録機能」を無効にしていること
- [無料プラン](/docs/price/free/)では無いこと

上記条件を満たすことで動的変化設定が可能になります。


### 動的変化を反復入力と組み合わせて使う{#join}

Version 1.62.0から動的変化を反復入力と組み合わせて使用できるようになりました。反復入力内で動的変化を使う際は通常の変化と異なり、変化の監視対象が同じ反復入力フォーム内の同じ行のデータに依存します。

{{<iTablet filename="dinamicValiable" msg="訪問先エリアを監視対象にしたらその行ごとに動的変化するよ" alice="ok">}}

１行目の訪問先エリア「北関東」が選ばれたとすると、１行目の動的変化は「北関東」を基準として処理が行われます。2行目の訪問先エリアに違う値を選んだとしても、１行目には影響しません。それぞれの行が独立して動的変化を起こします。
反復入力内の選択肢しか監視対象に指定できません。



