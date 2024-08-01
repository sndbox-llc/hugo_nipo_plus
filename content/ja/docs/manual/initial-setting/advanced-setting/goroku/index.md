+++
description = "語録管理機能を活用して、選択式入力フォームの効率を大幅に向上させましょう。このガイドでは、語録の作成、編集、および削除方法について詳しく解説します"
tags = ["語録機能", "有料プラン限定", "要編集者権限"]
title = "語録管理"
toc = true
weight = 101001203
aliases = []
images = []
+++

語録とはシンプルな単語の集まり（単語帳）です。  
語録は単体では利用できません。必ず[選択式入力フォーム](/docs/manual/initial-setting/template/selects/#plain)と組み合わせ、選択肢のリストとして使います。
[選択式入力フォーム](/docs/manual/initial-setting/template/selects/#plain)上でもリストは作成できるため語録を無理に使う必要は有りませんが、以下のケースでは語録を使うと効率よく管理ができます。

- 選択肢の数が非常に多い場合
- 流動的に選択肢のリストを追加・削除したい場合
- 複数の[選択式入力フォーム](/docs/manual/initial-setting/template/selects/#plain)を設置しそれぞれに同じリストを使いたい場合

## 語録を作成する{#make}

1. グループ設定をクリック
1. 語録管理をクリック
1. 新規作成をクリック
1. 語録のタイトル及び単語リストを入力（単語リストは１行に１単語）
1. 保存をクリック

{{<icatch filename="make-word-list" msg="語録を作り、その中に単語を追加していきます。語録は選択式入力フォームで使うことができます">}}

<dl class="basic">
  <dt>語録タイトル</dt>
  <dd>語録のタイトルです。わかりやすい名前をつけてください</dd>
  <dt>語録郡</dt>
  <dd>語録の実データ。<br><ul><li>改行で単語を区別します</li><li>重複した語録は保存時に自動で削除されます</li><li>1つの語録に付き、最大で10,000個の語録を登録できます</li></ul></dd>
</dl>

## 語録を使う{#usage}

前述の通り語録は単体では機能しません。[選択式入力フォーム](/docs/manual/initial-setting/template/selects/#plain)と組み合わせて利用します。具体的な設定手順についてはそれぞれの入力フォーム設定ガイドを参照してください。

<div class="row justify-content-center mt-5">
<div class="col-sm-16 col-md-8">{{<button "/docs/manual/initial-setting/template/selects/#plain" "選択式入力フォーム（単）">}}</div>
<div class="col-sm-16 col-md-8">{{<button "/docs/manual/initial-setting/template/selects/#multiple" "選択式入力フォーム（複）">}}</div>
</div>

## 語録の単語を編集する{#edit}

語録に登録された単語はレポート作成時にスタッフが自由に追加可能のため、運用とともに増えていきます。
定期的に単語を整理してください。

1. 編集したい語録を選択
1. 単語を編集する

表記ゆれ（例えばコンピュータとコンピューターなど）などは中々制御できないため定期的にクリーンアップが必要です。

## 語録を削除する{#remove}

語録自体を削除する場合は語録リストのゴミ箱ボタンをクリックします。
すでに使用中の語録を削除するとレポート作成時に「語録がありません」と表示されるため、削除前に当該語録が使用されていないことを確認してください。