+++
description = "テンプレート機能は、ユーザーが自分の業務に合わせた報告書、チェックシート、点検表などを自由にカスタマイズできる機能です。項目を自由に設定することができ、必要な情報を簡単に入力できます。また、カスタマイズしたテンプレートを共有することもでき、チーム全体で使い回すことも可能です"
menuTitle = "日報テンプレート"
title = "テンプレートから各種報告書や点検シートを作る"
toc = true
weight = 101001100
tags = []
mermaid = true
contributors = []
+++


## テンプレートとは報告書の枠組みのことです

テンプレートは「フォーマット」や「雛形」とも呼ばれることがあります。同じ形式で作成された**報告書を簡単に再利用できる**ようにするために使用されます。  
テンプレートがあれば文書作成プロセスを効率化し、時間と手間を節約し、報告の記入漏れを防ぐことができます。  

テンプレートの作り方によって、日報にもチェックシートにもなります。どちらも呼び方が異なるだけで「**テンプレートに沿って記入する**」という本質は同じものだからです。
NipoPlusでは報告書とチェックシートを明確に分けず同じものとして扱います。

NipoPlusではグループ内にテンプレートを作ると、グループ内のメンバーがテンプレートを使って報告書や日報を作成できるようになります。

{{<alice pos="right" icon="ok">}}
つまり１回作ればみんなで再利用できるよ
{{</alice>}}

{{<button "/tips/template/" "色々なテンプレートのサンプル">}}

## 入力フォームを組み合わせてオリジナルの報告書テンプレートを作成

NipoPlusのテンプレートは、さまざまな「入力フォーム」を組み合わせることで作成できます。
選択式入力フォームや数値入力フォーム、スライダ入力フォーム、レート入力フォームなど、多彩な入力フォームを自由に並べ替えて、組織やプロジェクトに最適なテンプレートを作成することができます。
並べたあとは各入力フォームごとにタイトルを付けたり、入力必須や幅の調整を行いレイアウトを整えます。

報告書を書くときに、PCやタブレットでは指定したレイアウトが適用されますが、**スマートフォンの場合は幅が狭いので自動でレイアウトが変化**します。

{{<icatch filename="template" msg="入力フォーム部品を 並べるだけで完成" title="入力フォームという個々の部品を自由に組み合わせてレイアウトし、オリジナルの日報テンプレートを簡単に作成できます" fontsize="30px" alice="here" >}}

具体的な作り方については次のページで記載しています。

## テンプレートはグループ単位で管理される

製造部と営業部では業務に使用するテンプレートは全く違うはずです。
営業部のスタッフが「品質管理シート」や「設備点検シート」を使う機会はほぼ有りません。同様に製造部の現場スタッフが「営業報告書」を使う機会は無いでしょう。

NipoPlusではグループ分けの機能があります。テンプレートはこの「グループ」単位で保存されます。（最大999種類）
他にも新人研修会などスポットで報告業務が必要になった場合に、「研修」というグループを作りそこに研修報告用のテンプレートを作れば、
研修に関係のない人には邪魔にならず、必要な人だけがそのテンプレートを使えるクローズドな領域が作れます。

もちろんグループ分けは必須では有りません。小規模であれば１つのグループ内に全スタッフを配置して管理することもできます。
異なるグループで同じテンプレートを使いたい場合はテンプレートの取込機能で複製できます

{{<icatch filename="group" msg="製造部や営業部 グループ分けで見やすく" title="報告書のテンプレートはグループ単位で利用可能です" fontsize="30px" alice="here" >}}


{{<mermaid align="center">}}
graph LR;
  classDef class2 fill:#ffa23e
  classDef class1 fill:#66cdaa
  classDef class3 fill:#f9d930
  組織 --> 営業グループ:::class2
  組織 --> 製造グループ:::class2
  製造グループ .-> X部品品質管理シート:::class3
  製造グループ .-> 不良品報告書:::class3
  営業グループ .-> 営業報告日報:::class3
{{< /mermaid >}}


## 報告書テンプレートを作るときは使う人の立場で考える

どのような報告書を作るかによって必要な項目が異なってくるため、目的に合わせた項目の洗い出しが重要です。
例えば、日報を作る場合には、その日の業務内容や進捗状況、問題点や課題、改善案などが必要です。
一方、点検表を作る場合には、点検項目や点検結果、修正対応などが必要になることがあります。
また、項目を設定する際には、スタッフが記入する際に分かりやすく、漏れがないように注意する必要があります。

テキストボックスの代わりにラジオボタンやチェックボックスを使うことで、入力の手間を減らすことができます。
入力の手間を減らすコラムにも目を通して見てください

{{<button "/tips/userfriendly/" "報告書の入力の手間を減らす">}}

負担を軽減するといっても難しい話ではありません。例えば日報のテンプレートに「天気」を記入する欄を作りたいとします。
キーボードから「晴れ」や「雨」などと入力するほうが楽ですか？それとも、予め用意されている解答から選ぶほうが楽でしょうか？

{{<icatch filename="select" msg="結果が同じなら楽な 入力の方が絶対良い" title="同じ「天気」の入力一つとっても様々なやり方がある" fontsize="30px" alice="shield" >}}


さて準備はよろしいでしょうか？次のページから実際に日報テンプレートを作成する具体的な手順について解説していきます。

{{<button "/docs/manual/initial-setting/template/make/" "テンプレート作成へ進む">}}