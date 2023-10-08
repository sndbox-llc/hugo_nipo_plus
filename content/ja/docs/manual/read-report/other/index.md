+++
description = ""
tags = []
title = "日報の詳細情報を表示する"
menuTitle = "日報の詳細情報を表示する"
toc = true
weight = 101003006
aliases = ["/manual/read-report/other/"]
images = []
+++

日報本文の下にある「詳細」をクリックするとその文書データの詳細な情報を確認できます。
これを見れば例えば本当にサーバに保存された時間等を知ることができます。

{{<appscreen filename="report-detail" title="日報という１ドキュメントの詳細な情報">}}

<dl class="basic">
<dt>作者ID</dt>
<dd>日報を作成したスタッフのIDです。通常は下の「作成者アカウント」と同じものになりますが、<a href="/docs/manual/initial-setting/staff-local/share/">共用</a>を使って書かれた日報の場合にかぎり共用先のIDがセットされます</dd>
<dt>作成者アカウント</dt>
<dd>作成したスタッフのIDです</dd>
<dt>文書ID</dt>
<dd>日報1つ1つに割り当てられたランダムなIDです</dd>
<dt>作成日（サーバ基準）</dt>
<dd>日報が初めてサーバ上に保存された日時です</dd>
<dt>更新日（サーバ基準）</dt>
<dd>日報が保存後に書き換えられた日時です</dd>
<dt>日報上の日付</dt>
<dd>日報作成者が提出時に指定した日付です。集計や日付による検索はこの日報上の日付を基準に行われます</dd>
<dt>タスクとの紐付け</dt>
<dd><a href="/docs/manual/task/list/">タスクの報告</a>として書かれた日報の場合、ここに紐付けられたタスクのIDが表示されます。セットされていない場合は「none」と表示</dd>
<dt>承認</dt>
<dd>その日報が<a href="/docs/manual/read-report/state/">承認</a>された日時を表示します。承認者が複数名いる場合、この項目は承認者の数だけ増えます</dd>
</dl>
