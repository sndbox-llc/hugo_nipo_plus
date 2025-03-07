+++
url = "/docs/manual/pdf/about/"
aliases = ["/legacy/manual/pdf/"]
title = "日報をPDFに変換する"
description = "Nipo【旧版】で作成したレポートはワンクリックでかんたんにPDFに変換できます。PDF変換前の設定で多少の見た目を変更することもできます"
toc = true
weight = 50610
+++

## 日報をかんたんにPDFへ変換できます。スマホからも操作可能{#pdf}

NipoPlusの大きな特徴の1つにPDF変換があります。日報アプリで作成された日報をワンクリックでかんたんにPDFへ変換できます。
スマートフォンやタブレットからも直接変換可能です。PDF表示可能なアプリがあればそのまま表示もできます。

やり方はかんたんです。PDFに変換したいレポートを表示して、**PDF出力**ボタンをクリックするだけ。

{{<icatch filename="img/report-to-pdf" msg="PDF❗PDF❗">}}

### PDF化された日報の保存について{#document}

PDF出力をすると、あなたのPCに日報PDFが保存されます。
Windows/Macでご利用の際、ファイル名は
1741316223067.pdf」
のようになります。

<!--
日付がファイル名になるわけですが、この日付は「日報が提出された日時」となります。

[Android](https://play.google.com/store/apps/details?id=jp.sndbox.nipoapp) /[iOS](https://apps.apple.com/jp/app/nipo/id1385965600)版では挙動が少し変わり、自動で共有機能が立ち上がります。

AndroidやiOSからもWeb版のNipo【旧版】を利用できます。この場合はWindows/Macと同様に「ファイル」として保存されます。
詳しくは[モバイル機器にインストールする](/legacy/system/mobile-install/)を御覧ください
-->

{{< callout context="note" title="Web版との違い" icon="outline/info-circle" >}}
AndroidやiPhoneでもWeb版NipoPlusを使えば、共有機能は立ち上がらずタブとして表示されます。
{{< /callout >}}

## 複数の日報を一括でPDFデータに変換可能{#convert}

複数のレポートをまとめてPDFに変換してダウンロードするには、PDF化したいレポートを表示して「日報を一括PDFに追加」ボタンをクリックします。
ボタンをクリックするたびにボタン上の数字が増えていきます。

ある程度リストに追加したら、▼ボタン（下向きの三角アイコン）をクリックし、「ダウンロード」ボタンを押して下さい。
1件しか追加されていない場合はPDFファイルとしてダウンロードされますが、2件以上追加した場合は、自動でZIPファイルに纏められてダウンロードされます。
なお**一括PDFダウンロードはWebアプリ版でのみ利用可能**です。

もしAndroidやiOSでこの機能が必要な場合は、PWA版としてインストールしてください。

## PDFに出力前の設定で余白やレイアウトを調整する{#edit}

PDF変換前に様々な設定ができます。この設定は「テンプレート単位で保存される」ことに留意して下さい。例えば「月報用テンプレート」と「日報用テンプレート」がある場合、「日報用テンプレート」の設定を変更すると全ての「日報用テンプレート」で作成されたファイルに対してに同じ設定が適用されます。
PDF出力の設定をするには、日報表示画面上で「PDF設定」をクリックします。

PDF出力設定画面に切り替わります。

{{<icatch filename="img/pdf-setting-ini" msg="レポートのPDF出力時の設定画面は折りたたまれているためクリックで展開します">}}

各項目の細かい説明は[PDF出力設定](/docs/manual/pdf/pdfoption/)のページを御覧ください。

{{< callout context="note" title="内容の変更もOK" icon="outline/info-circle" >}}
PDF設定画面では出力される日報の本文自体も変更可能です。本文自体の変更は保存されずPDF出力後にもとの日報の文章に戻ります
{{< /callout >}}

### PDF出力の設定を変えた例{#sample1}

例えばPDF出力の向きを縦にした場合と横にした場合の比較です

<div class="row">
<div class="col-6">

<div >
{{<figure src="img/shuzen.webp"  alt="縦向きPDF出力" caption="縦向きPDF出力" >}}

</div>

</div>
<div class="col-10">

<div>
{{<figure src="img/shuzen_landscape.webp"  alt="横向きで出力もOK" caption="横向きで出力もOK" >}}

</div>

</div>
</div>

新レイアウトは従来に比べてスッキリとした見た目になります。
また、表示されるデータ自体も情報量が増えました（例えば[スライダー](/legacy/parts/math/#slider)入力における大まかな位置などが #と-で表現）

{{<iTablet filename="img/pdf" msg="同じレポートを異なるレイアウトで出力したよ"  alice="ok">}}

## 無料プランにおけるPDF出力の制約{#limited}

[無料プラン](/legacy/system/price/)でも日報をPDFに変換する機能をご利用になれますが、以下の制限があります

- NipoPlusの透かしが強制的に入ります

## PDFと日報の相性について{#hint}

PDFファイルは日報と相性が良いです。なぜならPDFの持つ特徴と日報の用途がマッチしているからです。PDFの特徴をちょっとリストアップしてみました。

- 印刷してもレイアウトが崩れない
- 電子署名することで改ざんを防止できる
- メールで送信ができる

ビジネスのシーンに着目すると、「請求書」や「見積書」といったファイルをメールで送る際、PDF化されたものを送ることが多いでしょう。
なぜなら上記のメリットにより、「請求書」などはPDFが適しているためです。内容の書き換えもWordに比べて行いにくいのも特徴です。
PDFは読み取り専用。永久保存としての側面が強いため、ビジネス文書（日報も含めて）ととても相性が良いのです。

{{< callout context="caution" title="専用ソフトで変更は可能" icon="outline/info-triangle" >}}
Adobe Acrobatなどを使って編集することはできるため、改ざんを100%防ぐことはできません
{{< /callout >}}
