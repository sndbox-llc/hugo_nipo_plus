+++
url = "/docs/price/free/"
# aliases = []
title = "無料プランは4名以下で利用可能です"
menuTitle = "🆓無料プラン"
description = "検索や集計など一部の機能は制限されますが無料でレポートアプリを利用し続けることができます。コストを掛けたくない方はNipoPlusをご検討ください。ずっと無料です"
toc = true
weight = 80020
+++

```kroki {type=mermaid}
graph LR;
classDef class1 fill:#7BCCAC
  利用開始 --> トライアル期間 --> 満了 -->  無料プランへ:::class1
  無料プランへ--> 無料で継続利用:::class1
  無料プランへ--> 有料プランへ加入
```

[トライアル期間](/docs/price/#trial)が終了すると自動で無料プランへ切り替わります。

## 無料でもレポートの作成・閲覧・PDF出力など基本操作は利用可{#free_app}

無料プランと侮るなかれです。[レポートの作成](/docs/manual/write-report/write/)や承認、PDF出力だって。レポート業務に関する基本的な操作は無料プランで全て利用可能です。
スマートフォン・タブレットの専用アプリももちろん利用可能です。
複数台でログインして利用することももちろんOK.
人数も４名まで無料プランの範囲内です。

## 無料プランによる制約{#limit}

申し訳ないのですが全て無料で使えるわけでは有りません。いくつかの付加価値機能は無料版では利用できません。
[スタッフアカウントを5名以上登録](/docs/setup/staff-global/make/)すると制限が掛かり、レポートの提出ができない状態になります

<dl class="basic">
<dt><a href="/docs/manual/analytics/csv/">CSVの一括出力</a></dt>
<dd>１件単位のCSV出力は可能ですが複数のレポートをまとめて出力する機能はロックされます</dd>
<dt><a href="/docs/manual/pdf/pdfbatch/">PDFの一括作成</a></dt>
<dd>最大5件までしか一括出力できません。またNipoPlusの透かしとロゴが自動で挿入されます</dd>
<dt><a href="/docs/manual/analytics/_about/">集計・グラフ作成</a></dt>
<dd>集計に関するすべての機能がロックされます</dd>
<dt><a href="/docs/manual/calendar/_about/">カレンダー機能</a></dt>
<dd>レポートをカレンダー上に表示する機能がロックされます</dd>
<dt><a href="/docs/manual/read-report/state/#comment">レポートのコメント機能</a></dt>
<dd>レポートに対してコメントを書く機能がロックされます</dd>
<dt><a href="/docs/manual/utils/notice/#email">メール通知</a></dt>
<dd>レポートの提出時にメールで通知する機能が利用できません。アプリ内通知は利用可能です</dd>
<dt><a href="/docs/manual/write-report/parts/#picture">日報への画像添付</a></dt>
<dd>画質が有料に比べて低画質化されて保存されます</dd>
</dl>

その他、一度に読み込めるレポートの最大数など細かな制限が随所にあります。[有料プラン限定](/tags/有料プラン限定/)タグを御覧ください。

## 使わない時期は無料プランで休止させることも可能{#switch}

NipoPlusは無料プランになっても過去のデータは消えません。
よって新人研修会や繁忙期などスポット的にNipoPlusを使うことができます。必要な分ときに必要な分だけ有料プランをご活用ください。
[請求書払い](/docs/price/invoice/)であれば自動更新もないため、解約忘れによるうっかり課金の心配も有りません。
