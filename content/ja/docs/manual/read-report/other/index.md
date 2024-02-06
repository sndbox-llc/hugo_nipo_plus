+++
description = ""
tags = []
title = "レポートの詳細情報を表示する"
menuTitle = "レポートの詳細情報を表示する"
toc = true
weight = 101003006
aliases = ["/manual/read-report/other/"]
images = []
+++

レポート本文の下にある「詳細」をクリックするとその文書データの詳細な情報を確認できます。
これを見れば例えば本当にサーバに保存された時間等を知ることができます。

{{<appscreen filename="report-detail" title="レポートという１ドキュメントの詳細な情報">}}

<dl class="basic">
<dt>作者ID</dt>
<dd>レポートを作成したスタッフのIDです。通常は下の「作成者アカウント」と同じものになりますが、<a href="/docs/manual/initial-setting/staff-local/share/">共用</a>を使って書かれたレポートの場合にかぎり共用先のIDがセットされます</dd>
<dt>作成者アカウント</dt>
<dd>作成したスタッフのIDです</dd>
<dt>文書ID</dt>
<dd>レポート1つ1つに割り当てられたランダムなIDです</dd>
<dt>作成日（サーバ基準）</dt>
<dd>レポートが初めてサーバ上に保存された日時です</dd>
<dt>更新日（サーバ基準）</dt>
<dd>レポートが保存後に書き換えられた日時です</dd>
<dt>レポート上の日付</dt>
<dd>レポート作成者が提出時に指定した日付です。集計や日付による検索はこのレポート上の日付を基準に行われます</dd>
<dt>予定との紐付け</dt>
<dd><a href="/docs/manual/event/list/">予定の報告</a>として書かれたレポートの場合、ここに紐付けられた予定のIDが表示されます。セットされていない場合は「none」と表示</dd>
<dt>承認</dt>
<dd>そのレポートが<a href="/docs/manual/read-report/state/">承認</a>された日時を表示します。承認者が複数名いる場合、この項目は承認者の数だけ増えます</dd>
</dl>
