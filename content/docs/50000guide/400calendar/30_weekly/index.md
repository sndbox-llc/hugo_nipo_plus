+++
url = "/docs/manual/calendar/weekly/"
# aliases = []
title = "週カレンダーについて"
menuTitle = "週カレンダー"
description = "レポートや予定を週単位で管理できる「週カレンダー」機能について詳しく解説します。予定の確認や管理が容易にでき、任意の期間も柔軟に設定可能です。"
toc = true
weight = 50430
tags = ["有料プラン限定"]
contributors = []
+++

{{< callout context="note" title="カレンダがメニューに無いときは[グループ設定](/docs/setup/setting-group/#optionalFunction)から機能を有効にしてください" icon="outline/info-circle" />}}

{{< callout context="note" title="スタッフ別に予定を見たいときは[日カレンダー](/docs/manual/calendar/dayly/)をご利用ください" icon="outline/info-circle" />}}

## 週カレンダーに切り替える{#calendar_switch}

カレンダーの表示モードを「週」に切り替えることで、1週間やそれ以上の任意の期間にわたるレポートや予定を確認できます。週カレンダーは縦軸に時間、横軸に日付が表示される形式で、特に予定の管理に適しています。レポートも合わせて表示されるため、効率的な作業の進捗確認が可能です。
週カレンダーとは言いますが、週以外にも任意の期間を設定できます。

{{<icatch filename="img/weekly-calendar" msg="「週」とは言うけど3日とか10日とか自由に選べます" alice="guide">}}

## 週カレンダーの各種設定{#calendar_settings}

右パネルにある各種設定から週カレンダーを自由にカスタマイズできます。この設定は個人にのみ適用されるため、他のスタッフには影響しません。作業に合わせて最適な表示形式に変更でき、効率的に予定やレポートを確認できます。

<dl class="basic">
<dt>高さを短く（高く）する</dt>
<dd>縦軸の長さを切替できます。短くするとスクロールが少なくて済みますが、予定が密集すると過密になり視認性が落ちます</dd>
<dt>カレンダの並びを反転する</dt>
<dd>列の並びを逆転させます。ONだと左端が最も未来の日付となり、OFFだと左端が最も古い日付になります。</dd>
<dt>レポートを表示</dt>
<dd>ONにするとカレンダ上にレポートが描画されます。「新規」や「承認」など条件を細かく絞ることもできます</dd>
<dt>予定を表示</dt>
<dd>ONにするとカレンダ上に予定が描画されます。「新規」や「完了」など条件を細かく絞ることもできます</dd>
<dt>予定担当者絞込</dt>
<dd>予定の担当者による絞り込みができます。担当者は複数選択可</dd>
</dl>

## 週カレンダからレポートや予定を読む{#read_report}

週カレンダー上の時間軸に描画されている予定やレポートをクリックすると、該当データがポップアップ表示されます。1日の中で複数の予定やレポートがある場合、ポップアップ画面でページ送りが可能です。例えば、1/23日に6件の予定がある場合、そのうちの1件をクリックすると「1/6」と表示され、左右のボタンで他の予定に切り替えられます。

{{<icatch filename="img/show-event" msg="週カレンダーから予定をポップアップで表示した例です">}}

## カレンダから予定を登録する{#add_event}

時間軸上でドラッグすることで指定範囲に対して予定を追加できます。
スマートフォンの場合、スクロールとドラッグの動きが同じため少しコツが要ります。
スマートフォンでは、時間軸に指をおいて1秒ほどホールドし、「ドラッグ可能」と表示が出たらドラッグを開始します。

{{<icatch filename="img/drag-event-add" msg="予定をドラッグ操作で簡単に追加できます。スマホの場合は「ホールド」して「スワイプ」します。" alice="phone">}}

[予定登録](/docs/manual/event/add/)も参照してください。
