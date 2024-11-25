+++
url = "/docs/manual/pdf/pdfbatch/"
description = "レポートのデータをPDFに一括で変換します。"
# tags = ["有料プラン限定", "PDF出力"]
title = "📄複数のレポートをまとめてPDFに変換する"
menuTitle = "📄PDF一括出力"
toc = true
weight = 510
# aliases = []
# images = []
+++

{{< callout context="note" title="Note" icon="outline/info-circle" >}}
１件だけPDF出力するには[レポートを読む](/docs/manual/read-report/state/#pdf_export)の記事を御覧ください
{{< /callout >}}

{{< callout context="note" title="Note" icon="outline/info-circle" >}}
[PDF出力の設定](/docs/manual/pdf/pdfoption/)についてはこちらをご覧ください
{{< /callout >}}

{{< callout context="caution" title="注意" icon="outline/alert-triangle" >}}
一括PDF出力は50件を超えない範囲で操作してください
{{< /callout >}}

レポートをまとめてPDFに変換してダウンロードできます。
一括PDF出力はいくつかのやり方があります。

<dl class="basic">
<dt><a href="/docs/manual/read-report/list/#calendar">カレンダーを使う</a></dt>
<dd>カレンダーに表示されているレポートをまとめてPDF出力します</dd>
<dt><a href="/docs/manual/read-report/list">受信BOXからPDF出力</a></dt>
<dd>現在の受信BOX一覧に表示されているレポートをまとめてPDF出力します</dd>
<dt>集計画面からPDF出力</dt>
<dd>集計期間で指定した期間に該当するレポートをまとめてPDF出力します</dd>
</dl>

## カレンダー上に表示されている日報を一括でPDF出力{#exportReportPDF}

カレンダー上に表示されているレポートをまとめてPDF出力することができます。
フィルターで「承認のみ」のように絞り込むことで、必要なPDFのみを効率よく出力可能です。

1. [カレンダー](/docs/manual/read-report/list/#calendar)を開く
2. 「◯件PDF」と表示されたボタンをクリック
3. PDF生成完了を待つ
4. 完了後にポップで通知

{{<icatch filename="calendar-pdf" msg="カレンダー上に表示されているレポートをワンクリックでまとめてPDFに変換する">}}

## 受信BOXからレポートを一括でPDF出力する{#box}

カレンダーと違い受信BOXではレポートの絞り込み検索が可能です。
例えばレポートの状態が修正のステータスになっているものだけをPDF出力するといったことができます。

{{<icatch filename="filter-pdf" msg="レポートを個別に選び、一括でPDFに変換する">}}

## 個別にPDF出力リストへ追加して一括出力する{#pin}

個々のレポートを見てPDF出力リストに追加してまとめてダウンロードすることも可能です。

1. PDFに出力したいレポートを開き「PDF出力(一括)」ボタンをクリックする
1. 上記手順を何度か繰り返す(最大で50ファイルまで)
1. 「登録分をまとめてダウンロード」をクリックする
1. ZIPファイルとしてダウンロードされる

{{<icatch filename="add-pdf" msg="PDFに変換したいレポートをリストに追加する">}}

## ダウンロードしたZipファイルが文字化けする？{#text_shaking}

複数のファイルをダウンロードするとZipで圧縮されます。解凍時に文字化けする場合はこちらの記事を参照してください。

{{< link-card title="ZIPの文字化け対策" description="ダウンロードしたZIPファイルが文字化けする原因と解決策について" href="/tech/mojibake/" >}}

---
