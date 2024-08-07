+++
description = "スタッフが作成したレポートは保存箱に蓄積されます。提出簿を見れば未提出者を素早く特定可能。検索機能で素早く目的のレポートを探し出せます"
tags = []
title = "🔍保存箱からレポートを探す"
menuTitle = "🔍保存箱から探して読む"
toc = true
weight = 101003001
aliases = []
images = []
+++


{{<warning>}}
権限が「ゲスト」のアカウントは「保存箱」自体表示されません。
権限が「書き込みのみ」のアカウントは「受信BOX」が表示されません。
{{</warning>}}

## レポートを読む最小限の機能{#about}

保存箱は書いた日報や受信した日報、下書きの日報が格納される箱です。外観は次のように見えます。

{{<icatch filename="report-box1" msg="提出されたレポートは保存箱からアクセスできます。権限によっては保存箱にアクセスできないので注意">}}

使い方はシンプルです。

1. 右パネルのカレンダーから表示したい期間を選択する
2. 表示された一覧から任意のレポートをクリック

これだけです。  

<button class="playBtn" style="padding: 1px 20px">▶</button> 

一覧には上のようなボタンが表示されます。このボタンをクリックすると **ページ遷移を伴ってレポートを表示** します。それ以外をクリックすると**ポップアップでレポートを表示**します 



## 検索を使いこなす{#searchFunction}

受信BOXは高速モードと検索モードがあります。高速モードはその名の通り一瞬で期間内のレポートを表示しますが細かい検索ができません。検索や並べかえをつかうと自動で「検索モード」に切り替わります。

1. 並べ替えをするには並べ替えしたい列でクリックします。１度のクリックで昇順、もう一度クリックで降順となります。
1. 提出者やタグ、テンプレートで絞り込みたい場合、それぞれの列で絞り込む対象を選択します。

様々な条件を組み合わせて指定できます。例えば次の画像は「検索期間が今月で提出日の昇順」「提出者がueda」「レポートに「重要」タグがセットされている」という条件で検索した例です。


{{<icatch filename="search-report"  msg="タグや提出者など様々な方法でレポートを検索できます" alice="here">}}

一部の検索条件は[無料プラン](/docs/price/free/)ではご利用できません。ご了承ください。


### 検索の条件を保存する{#saveQuery}

※この機能はGOLDプラン限定です。  

頻繁に使用する条件は保存することで次回以降ワンクリックで検索ができます。
保存したい検索条件で検索を行ったあと、その画面で「検索条件保存」ボタンをクリックします。

{{<icatch filename="save-query" msg="よく使う検索は保存すれば次回以降はワンクリックで検索できるよっ" alice="ok">}}

保存した検索は受信BOXの画面上部にボタン形式で表示されます。
検索の条件は複数保存できます。

検索条件の保存は基本的に絶対値ですが、検索期間については「今日・昨日・先週」といった**相対的表現で保存した場合、実行日が変わると検索される条件範囲も相対的に変化する**ことに注意してください。


### 検索条件の削除と検索のクリア{#clearQuery}


保存した検索条件を削除するには、削除したい検索ボタンの▼をクリックして削除します。
また、今の検索条件をすべて解除して通常の「高速モード」に戻るには「クリア」ボタンをクリックします。

{{<icatch filename="clear-query"  msg="不要になった保存検索は削除しましょう" >}}


## 表示対象と表示形式について{#viewMode}

表示対象と表示形式は画面でいうと以下の位置に配置されています。画像を参照してください。

{{<icatch filename="view-mode"  msg="スマホだと「カード」、PCだと「表」が見やすいかな？使いやすいのを選んでね" alice="please">}}


表示対象は「受信BOX」と「送信BOX」と「下書きBOX」があります。

<dl class="basic">
<dt>受信BOX</dt>
<dd>あなたが読めるレポートが表示されます</dd>
<dt>送信BOX</dt>
<dd>あなたが書いたレポートが表示されます</dd>
<dt>下書きBOX</dt>
<dd>下書きに保存したレポートが表示されます</dd>
</dl>


表示されるレポートのタイプが変わるだけで基本的な使い方はどのBOXも一緒です。  
※「書き込みのみの権限」アカウントは受信BOXが表示されません（読み込み権限が無いため）  
  
表示形式は次の3種類があります

<dl class="basic">
<dt>カード</dt>
<dd>スマートフォンにおすすめ。レポート１つ１つがカードで表示されます。縦長のスマートフォンで見やすい</dd>
<dt>表</dt>
<dd>PCにおすすめ。レポートが一覧で表示されます。検索機能も組み込まれて使いやすい</dd>
<dt>提出状況</dt>
<dd>縦軸にスタッフ、横軸に日付の表で表示されます。未提出者を見つけるときに便利です</dd>
</dl>

カードと表については特筆すべき点はありませんが、提出状況については次の章で補足説明をしています

## 提出状況のレイアウト{#teishutuMap}

提出状況はその名の通り「レポートの提出状況」を表にまとめたものです。
列に日付、行にスタッフを取り、交差したセルにはレポートの件数が表示されます。この数字はクリックすることで該当レポートをポップアップで表示します。

提出状況は**検索や表示件数による影響を受ける**ことに注意してください。これはバグではなく意図的な動作です。  
例えば検索で「承認済みの日報のみ」という絞り込みを行った状態で提出状況を表示すると、承認済みの日報のみで提出状況が表示され、未承認の日報は提出状況にそもそも反映されません。
  
この特性を活かして承認された日報だけの提出状況を把握することができますが、意図せず検索した状態で提出状況を表示してしまうと、本来意図した結果とは異なる結果になる可能性があります。
絞り込みがされていないことを確認するには「高速モード」であることを見れば一目瞭然です。

{{<icatch filename="report-map"  msg="未提出者は誰ですか？すぐ見つけられるね♫" alice="ok">}}


{{<info>}}
提出状況表に欠勤やメモを書きたい場合は[シフト表](/docs/manual/utils/shift/)をご利用ください。提出状況表とシフト表は連動します
{{</info>}}


