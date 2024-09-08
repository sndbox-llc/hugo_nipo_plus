+++
description = "タッチペン対応端末であればスタイラスペンを使って日報にサイン（署名）を入力できます。電子署名ではなく、直筆という意味での署名です。お客様から署名を貰う必要がある場合などに活用できます"
title = "署名・写真"
toc = true
weight = 109002010
isNipo = true
tags = ["旧バージョン"]
aliases = ["/legacy/parts/picture/", '/old/parts/picture/']
[sitemap]
  changefreq = "yearly"
  priority = 0.2
+++

## 署名・イラスト{#signetureCanvas}

{{<btnCenter "/docs/manual/initial-setting/template/binarys/#sign" "NipoPlusでも使えます">}}



### 署名の入力画面{#display}

署名（サイン）に特化したパーツです。手描きメモを署名代わりに使うのであればこちらのパーツを使う方が良いでしょう。  
手描きメモと非常に似ていますが以下の点により手描きメモとは分けて考えられます。  

- 描画エリアがどの端末を使っても固定なので同じ大きさの署名を得られる
- 日報のコピー機能を使っても署名はコピーされない（手描きメモは上書きしない限り同じ画像がセットされます）
- PDF出力の際、手書きメモは画面サイズ最大に表示するが署名は適切なサイズで表示されます

{{<imgproc parts_sign1.png "署名を日報に添付した様子" />}}

#### 署名を含んだ日報の各種出力画面{#output}

[PDFに出力](/legacy/manual/pdf/)すると次のように表示されます。

{{<imgproc parts_sign2.png "署名を含む日報をPDFに変換した出力結果" />}}

実際のPDFファイルはこちらからダウンロードして確認できます

残念ですがCSV出力には対応していません。CSV上には「対象外」との文字だけが出力されます


Nipo【旧版】の受信・送信BOXからは次のように表示されます

{{<imgproc parts_text4.png "クラウド日報Nipo【旧版】のアプリ上から署名を含むレポートを表示した画面" />}}

#### 設定画面{#setting}

テンプレートの編集画面では次のような設定画面となっております。署名に関しては設定項目はタイトルしかありません。
{{<imgproc parts_sign5.png "署名の初期設定画面" />}}



---


{{<btnCenter "/docs/manual/initial-setting/template/binarys/#sign" "NipoPlusでも使えます">}}

### 手書きメモの入力画面{#display}

iPadやSurfaceのような**タッチパネルが使える**場合に便利な入力項目です。指でスラスラとイラストや文字が描けます。また、Apple PencilやSurface Penも利用できます。図・イラストを日報に付与したい場合におすすめです。
また、いちいちキーボードを使っていられない煩雑な状況でササッとペンで描いて提出するという使い方もできます。描いたイラストは、ご利用のデバイスによってサイズが自動で変わります。

{{<imgproc parts_canvas.png "手書きメモを日報に添付した様子" />}}

#### 手書きメモを含んだ日報の各種出力画面{#output}

[PDFに出力](/legacy/manual/pdf/)すると次のように表示されます。
{{<imgproc parts_canvas2.png "手書きメモを含む日報をPDFに変換した出力結果" />}}

新レイアウトのほうが幅をいっぱいに使えるので一回り大きな画像として出力されていることがわかります。  

残念ですがCSV出力には対応していません。CSV上には「対象外」との文字だけが出力されます


Nipo【旧版】の受信・送信BOXからは次のように表示されます

{{<imgproc parts_canvas3.png "クラウド日報Nipo【旧版】のアプリ上から手書きメモを含むレポートを表示した画面" />}}

#### 設定画面{#setting}

テンプレートの編集画面では次のような設定画面となっております。

{{<imgproc parts_canvas4.png "手書きメモの初期設定画面" />}}

設定項目はタイトルのみです。事実上初期設定は不要です。



---


## 写真{#pictures}

{{<btnCenter "/docs/manual/initial-setting/template/binarys/#picture" "NipoPlusでも使えます">}}

### 写真画像の入力画面{#display}

タブレットやスマートフォンで撮影した画像を添付したり、PCに保存されている画像データを添付したりできます。対応ファイルはJpeg・Pngになります。  
画像をNipo【旧版】のサーバにアップする前に、画像の圧縮処理が行われ通信量を削減しています。圧縮されると、画像の容量はおおよそ１００KB程度になります。  
写真データはCSV出力されません。（PDF出力時は写真が出力可能です）  

{{<imgproc parts_pic1.png "日報に画像を添付する画面イメージ" />}}

### 写真画像を含んだ日報の各種出力画面{#output}

[PDFに出力](/legacy/manual/pdf/)すると次のように表示されます。

{{<imgproc parts_pic2.webp "写真画像を含む日報をPDFに変換した出力結果" />}}

CSVに出力すると対応外とのエラーが表示されます

{{< excelTable >}}
sample, test, dummy, mock, コメント
画像は出力不可, 画像は出力不可, 画像は出力不可, 画像は出力不可, _
{{< /excelTable >}}



{{<alice pos="left" icon="default">}}
写真やイラストなどのデータは残念ですがCSVに出力できません
{{</alice>}}

Nipo【旧版】の受信・送信BOXからは次のように表示されます

{{<imgproc parts_pic4.png "クラウド日報Nipo【旧版】のアプリ上から写真画像を含むレポートを表示した画面" />}}

### 設定画面{#setting}

テンプレートの編集画面では次のような設定画面となっております。

{{<imgproc parts_pic5.png "写真画像の初期設定画面" />}}


<dl class="basic">
  <dt>タイトル</dt>
  <dd>タイトルを編集できます。改行も扱えます</dd>
  <dt>説明文</dt>
  <dd>日報作成者が何を書くべきか迷わないようにするために説明を付すことができます。</dd>
</dl>
