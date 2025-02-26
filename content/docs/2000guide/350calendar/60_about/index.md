+++
url = "/docs/manual/calendar/_about/"
title = "レポートや予定をまとめて表示できる万能管理画面です"
menuTitle = "カレンダー概要"
description = "カレンダー上にレポートや予定が表示され、日別や月別にレポートを管理できる便利なツールです。週ごとの確認やスタッフ別の予定管理にも対応しており、業務の効率化に役立ちます。"
toc = true
weight = 2360
tags = ["有料プラン限定"]
contributors = []
+++

{{< callout context="note" title="カレンダがメニューに無いときは[グループ設定](/docs/manual/initial-setting/setting-group/#optionalFunction)から機能を有効にしてください" icon="outline/info-circle" />}}

[レポート保存箱](/docs/manual/read-report/list/#listbox)と[予定管理](/docs/manual/event/list/)、２つの機能を一箇所で管理できます。
カレンダを表示するには左メニューから「カレンダー」を選択します。

{{<icatch filename="img/calendar" msg="カレンダーモードではレポートの提出日や枚数が月単位で俯瞰できます"  alice="here">}}

カレンダは[レポート保存箱](/docs/manual/read-report/list/#listbox)にあるレポートを決まったルールで各セルに描画します。
予定についても同様で、決まったルールで各セルに描画します。各セルにあるボタンをクリックすることで、該当のレポートや予定をポップアップで表示します。

## カレンダーの表示対象切替{#switch_dist}

カレンダーの右パネルにあるボタンで表示対象を切り替えられます。

<dl class="basic">
<dt>受</dt>
<dd>自分が受け取ったレポートをカレンダーに表示します。保存箱の「受信BOX」と同じです</dd>
<dt>送</dt>
<dd>自分が書いたレポートをカレンダーに表示します。保存箱の「送信BOX」と同じです</dd>
</dl>

## カレンダーの表示モード切替{#switch_view}

カレンダー画面右パネルにある表示切替からカレンダーの表示形式を変更できます。

<dl class="basic">
<dt><a href="/docs/manual/calendar/monthly/">月</a></dt>
<dd>１ヶ月単位で表示します。ページ送りも月単位で行われます。</dd>
<dt><a href="/docs/manual/calendar/dayly/">日</a></dt>
<dd>このモードでは1日単位の表示で、縦軸に時刻、横軸にスタッフを表示します。各スタッフの空き時間や予定を確認する際に便利です。</dd>
<dt><a href="/docs/manual/calendar/weekly/">週</a></dt>
<dd>縦軸に時刻、横軸に日を表示します。週と言いますが10日や15日など、範囲は自由に決められます。直近の全体の予定を俯瞰したいときに便利です</dd>
<dt><a href="/docs/manual/calendar/table/">表</a></dt>
<dd>縦軸にスタッフ、横軸に日付の形をしたカレンダーです。横軸の日付の範囲は自由に変更できます。スタッフごとに提出状況を見たいときに便利</dd>
</dl>

## 保存箱との違い{#diff}

カレンダーは月や週などの期間を俯瞰するのに便利で、全体の状況を一目で確認できますが、詳細な絞り込みや検索機能は保存箱の方が優れています。
[保存箱](/docs/manual/read-report/list/#listbox)は高度な検索や並べ替え機能が備わっています。
用途に応じて適切な方法をご利用ください。
