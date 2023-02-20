+++
description = "業務に添った日報・チェックシートのテンプレートを簡単に作成できます。プログラミングの知識は一切不要。入力フォームを組み合わせるだけで簡単にオリジナルのテンプレートが作成できます。スマホやタブレットから日報の作成が可能です"
menuTitle = "日報テンプレート"
title = "日報テンプレートを自作する"
toc = false
weight = 30
tags = []
reqMermaid = true
aliases = ['/org/groupsetting/template/']
+++

## 入力フォームを並べるだけでテンプレートが作れます

詳しい作り方は次のページに譲るとして、ここではテンプレートの大まかな仕組みを見てください。

{{<icatch filename="template" msg="入力フォーム部品を 隙間なく詰めて完成" title="入力フォームという個々の部品を自由に組み合わせてレイアウトし、オリジナルの日報テンプレートを簡単に作成できます" fontsize="30px" alice="here" >}}

「**入力フォーム**」というアイテム群をブロックのように並べるだけでテンプレートはつくられています。並び順は左から右です。表示いっぱいになったら次の行に自動で折り返されてまた左から右へ。この繰り返しです。
1行に表示できる最大の幅は12です。入力フォーム毎に幅を自由に設定できるので、バランスを見て幅を調整してください。

{{<alice pos="right" icon="here">}}
入力フォームを追加すると最初は全部幅6となるよ
{{</alice>}}

### レスポンシブに対応！スマートフォンは自動でレイアウトが変わります

スマートフォンのように画面幅が狭い端末でテンプレートを開くと、指定したレイアウトは無力化されて自動ですべてのの入力フォームの幅が12として振る舞います。つまり直列（1列）の日報テンプレートに自動で変化します。

{{<alice pos="right" icon="pc">}}
PCからでも画面幅を狭くすると動きが確認できますよ
{{</alice>}}

## 日報？チェックシート？報告書？ テンプレート次第です

テンプレートの作り方によって、「**日報**」にも「**チェックシート**」にもなります。どちらも「テンプレートに沿って記入する」という共通の特徴を持っているからです。
その他にも月報・トラブル報告書・部品の点検シートなどでもなんでも作れます。
作成したテンプレートは最大999種類まで保存できるので様々なテンプレートを作って管理できます。

同じテンプレートを用いて書かれた日報（あえて日報と呼びます）は持っているデータの構造が同じため、複数の日報を1枚のエクセルシートにまとめたり、集計したり、グラフを生成したりできます。

{{<alice pos="right" icon="here">}}
違うテンプレートで書かれた日報同士は集計できません
{{</alice>}}

ただあまりにもたくさんのテンプレートがあると一覧から目的のテンプレートを探す手間が増えてしまいます。
そんなときはグループを分けることを検討してみましょう。

### テンプレートはグループ単位で管理される

テンプレートはグループ毎に保存され、各グループ毎に最大999種類まで保存できます。
グループ毎にテンプレートが管理されるため、例えば製造部グループと営業部グループで異なる日報のテンプレートを用意することが可能です。

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

{{<alice pos="right" icon="here">}}
異なるグループで同じテンプレートを使いたい場合はテンプレートの取込機能で複製できます
{{</alice>}}

## テンプレートを自作するメリット

日報やチェックシートの内容は会社によって全然違います。同業者であっても会社が変われば日報の内容も当然違うものになります。
このように日報は会社独自の文化により統一化されにくいため、自分たちでテンプレートを自作できることは大きなメリットになります。
各種テンプレートは1度作ればあとはそれをもとにスタッフの方々が**日々の報告として繰り返し使用**できます。
自由に作れる反面、使いにくいテンプレートになってしまう危険性もあります。入力の手間を減らすコラムにも目を通して見てください

{{<button "/blog/userfriendly/" "入力の手間を減らせる方法">}}

負担を軽減するといっても難しい話ではありません。例えば日報のテンプレートに「天気」を記入する欄を作りたいとします。
キーボードから「晴れ」や「雨」などと入力するほうが楽ですか？それとも、予め用意されている解答から選ぶほうが楽でしょうか？

{{<icatch filename="select" msg="結果が同じなら楽な 入力の方が絶対良い" title="同じ「天気」の入力一つとっても様々なやり方がある" fontsize="30px" alice="shield" >}}

## 日報テンプレートの自作に使用可能な各種入力フォーム

{{% children description="true" containerstyle="dl" style="dt" %}}

さて準備はよろしいでしょうか？次のページから実際に日報テンプレートを作成する具体的な手順について解説していきます。

{{<button "/manual/initial-setting/group-setting/template/make/" "テンプレート作成へ進む">}}