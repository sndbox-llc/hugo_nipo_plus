+++
url = "/legacy/parts/sign/"
title = "署名・イラスト・写真"
description = "タッチペン対応端末であればスタイラスペンを使って日報にサイン（署名）を入力できます。電子署名ではなく、直筆という意味での署名です。お客様から署名を貰う必要がある場合などに活用できます"
toc = true
weight = 8230
isNipo = true

[sitemap]
  changefreq = "yearly"
  priority = 0.2
+++

## 署名入力フォーム{#signetureCanvas}

{{< callout context="tip" title="ご存知ですか？" icon="outline/note" >}}
[後続のNipoPlusでも利用可能](/docs/manual/initial-setting/template/binarys/#sign)。NipoPlusでは署名とイラストは同じフォームに合併しました
{{< /callout >}}

署名（サイン）に特化したパーツです。手描きメモを署名代わりに使うのであればこちらのパーツを使う方が良いでしょう。
手描きメモと非常に似ていますが以下の点により手描きメモとは分けて考えられます。

- 描画エリアがどの端末を使っても固定なので同じ大きさの署名を得られる
- 日報のコピー機能を使っても署名はコピーされない（手描きメモは上書きしない限り同じ画像がセットされます）
- PDF出力の際、手書きメモは画面サイズ最大に表示するが署名は適切なサイズで表示されます

{{<iTablet filename="img/sign1" msg="署名を日報に添付した様子"  alice="ok">}}

### 署名を含んだ日報の各種出力画面{#outputSign}

[PDF出力](/legacy/manual/pdf/)が可能です。CSV出力は対応していません。CSV上には「対象外」との文字だけが出力されます

### 設定画面{#settingSign}

署名に関しては設定項目はタイトルしかありません。

---

## イラスト入力フォーム{#display}

{{< callout context="tip" title="ご存知ですか？" icon="outline/note" >}}
[後続のNipoPlusでも利用可能](/docs/manual/initial-setting/template/binarys/#sign)。NipoPlusでは署名とイラストは同じフォームに合併しました
{{< /callout >}}

iPadやSurfaceのような**タッチパネルが使える**場合に便利な入力項目です。指でスラスラとイラストや文字が描けます。また、Apple PencilやSurface Penも利用できます。図・イラストを日報に付与したい場合におすすめです。
また、いちいちキーボードを使っていられない煩雑な状況でササッとペンで描いて提出するという使い方もできます。描いたイラストは、ご利用のデバイスによってサイズが自動で変わります。

{{<iTablet filename="img/canvas" msg="手書きメモを日報に添付した様子"  alice="ok">}}

### 手書きメモを含んだ日報の各種出力画面{#outputCanvas}

[PDF出力](/legacy/manual/pdf/)が可能です。CSV出力は対応していません。CSV上には「対象外」との文字だけが出力されます

### 設定画面{#settingCanvas}

設定項目はタイトルのみです。事実上初期設定は不要です。

---

## 写真{#pictures}

{{< callout context="tip" title="ご存知ですか？" icon="outline/note" >}}
[後続のNipoPlusでも利用可能](/docs/manual/initial-setting/template/binarys/#picture)。
{{< /callout >}}

タブレットやスマートフォンで撮影した画像を添付したり、PCに保存されている画像データを添付したりできます。対応ファイルはJpeg・Pngになります。
画像をNipo【旧版】のサーバにアップする前に、画像の圧縮処理が行われ通信量を削減しています。圧縮されると、画像の容量はおおよそ１００KB程度になります。
写真データはCSV出力されません。（PDF出力時は写真が出力可能です）

{{<iTablet filename="img/picture" msg="日報に画像を添付する画面イメージ"  alice="ok">}}

### 写真画像を含んだ日報の各種出力画面{#outputPicture}

[PDF出力](/legacy/manual/pdf/)が可能です。CSV出力は対応していません。CSV上には「対象外」との文字だけが出力されます

{{< excelTable >}}
sample, test, dummy, mock, コメント
画像は出力不可, 画像は出力不可, 画像は出力不可, 画像は出力不可, \_
{{< /excelTable >}}

### 設定画面{#settingPicture}

テンプレートの編集画面では次のような設定項目があります。

<dl class="basic">
  <dt>タイトル</dt>
  <dd>タイトルを編集できます。改行も扱えます</dd>
  <dt>説明文</dt>
  <dd>日報作成者が何を書くべきか迷わないようにするために説明を付すことができます。</dd>
</dl>
