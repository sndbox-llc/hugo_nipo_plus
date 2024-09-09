+++
description = "日報に１行だけ入力ができるパーツを追加できます"
title = "1行入力・本文入力"
toc = true
weight = 109002003
isNipo = true
tags = ["旧バージョン"]
aliases = ["/old/parts/text/"]
[sitemap]
  changefreq = "yearly"
  priority = 0.2
+++



## 1行テキスト入力フォーム{#display}

{{<note>}}
[後続のNipoPlusでも利用可能](/docs/manual/initial-setting/template/text/)。NipoPlusでは１行と複数行は同じフォームに合併しました
{{</note>}}


その名の通り、１行しか入力できません。例えば**担当者名**や**地名**、**管理番号**などの入力に最適です。  
実際に日報を作成する画面では次のように表示されます。  

{{<iTablet filename="oneline" msg="１行入力なので名前や電話番号、住所などに"  alice="ok">}}



{{<alice pos="left" icon="default">}}
OKと表示されているのは入力必須が有効になっている項目です。空欄だと赤文字でエラーを表示します
{{</alice>}}

1行テキストは最大で128文字まで入力ができます。PDFに出力する際、長すぎると折り返される可能性があります。

### 1行テキストを含んだ日報の各種出力画面{#outputOneline}

[PDF出力](/legacy/manual/pdf/)と[CSVに出力](/legacy/manual/analytics/)が可能です。
CSV出力時は次のように表示されます。

{{< excelTable >}}
a, e, o, コメント
1行のみ, 改行はできません, 例えば作業担当者名の入力などに適しています, _
{{< /excelTable >}}





### 1行テキストの設定画面{#settingOneline}

テンプレートの編集画面では次のような設定画面となっております。



<dl class="basic">
  <dt>タイトル</dt>
  <dd>タイトルを編集できます。改行も扱えます</dd>
  <dt>初期値の設定</dt>
  <dd>日報作成時にデフォルトでセットされる値を設定できます。不要な場合は空欄にしておきます</dd>
  <dt>入力必須</dt>
  <dd>ONにすると0文字だった場合に日報の提出ボタンが押せなくなります。この機能は無料プランでは無視されます</dd>
  <dt>説明文</dt>
  <dd>日報作成者が何を書くべきか迷わないようにするために説明を付すことができます。</dd>
</dl>


---



## 複数行入力フォーム{#display}



{{<note>}}
[後続のNipoPlusでも利用可能](/docs/manual/initial-setting/template/text/)。NipoPlusでは１行と複数行は同じフォームに合併しました
{{</note>}}


通常よく使われる、普通の[テキスト入力フォーム](/docs/manual/initial-setting/template/text/)エリアです。
文字の入力や色変え・マスクがけなどができます。**業務内容**や**ひきつぎ**など、さまざまな項目として使える最も一般的な項目と言えます


{{<iTablet filename="multiline" msg="本文や引き継ぎ、明日の予定などに"  alice="ok">}}



### 本文を含んだ日報の各種出力画面{#outputText}

[PDF出力](/legacy/manual/pdf/)と[CSVに出力](/legacy/manual/analytics/)が可能です。
CSV出力時は次のように表示されます。


{{< excelTable >}}
サンプル, sample, サンプル2, 備考, コメント
サンプルです。削除・修正して下さい。改行も利用できます, サンプル本文などに, テスト, 拡張機能で文字に色を付けることも可能です, _
{{< /excelTable >}}








### 本文の設定画面{#settingText}

テンプレートの編集画面では次のような設定画面となっております。

 

<dl class="basic">
  <dt>タイトル</dt>
  <dd>タイトルを編集できます。改行も扱えます</dd>
  <dt>多機能エディタを使う</dt>
  <dd>本文に色付けやマスクがけができるようになります。モバイル版では無視されます。マスクがけはPDF出力に反映されません</dd>
  <dt>初期値の設定</dt>
  <dd>日報作成時にデフォルトでセットされる値を設定できます。不要な場合は空欄にしておきます</dd>
  <dt>入力必須</dt>
  <dd>ONにすると0文字だった場合に日報の提出ボタンが押せなくなります。この機能は無料プランでは無視されます</dd>
  <dt>説明文</dt>
  <dd>日報作成者が何を書くべきか迷わないようにするために説明を付すことができます。</dd>
</dl>
