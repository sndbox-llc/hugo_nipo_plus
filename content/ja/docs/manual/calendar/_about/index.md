+++
description = "カレンダー上にレポートが表示されます。日別にレポートを管理したいときに便利です。カレンダーは週・月の２種類用意しています"
title = "レポートや予定をまとめて表示できる万能管理画面です"
menuTitle = "カレンダー概要"
toc = true
tags = ["有料プラン限定"]
weight = 101005000
aliases = ["/docs/manual/calendar/setting/", "/docs/manual/calendar/use/"]
+++



{{<info>}}
カレンダがメニューに無いときは[グループ設定](/docs/manual/initial-setting/setting-group/#optionalFunction)から機能を有効にしてください
{{</info>}}


[レポート保存箱](/docs/manual/read-report/list/)と[予定管理](/docs/manual/event/list/)、２つの機能を一箇所で管理できます。  
カレンダを表示するには左メニューから「カレンダー」を選択します。



{{<icatch filename="calendar" msg="カレンダーモードではレポートの提出日や枚数が月単位で俯瞰できます"  alice="here">}}


カレンダは[レポート保存箱](/docs/manual/read-report/list/)にあるレポートを決まったルールで各セルに描画します。  
予定についても同様で、決まったルールで各セルに描画します。各セルにあるボタンをクリックすることで、該当のレポートや予定をポップアップで表示します。


## カレンダーの表示対象切替{#switch_dist}

カレンダー右パネルにあるボタンから表示対象を切り替えます

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
<dd>このモードは範囲選択できず、１日だけを選びます。縦軸に時刻、横軸に人を表示します。人別に予定の空き時間を見る場合に適しています</dd>
<dt><a href="/docs/manual/calendar/weekly/">週</a></dt>
<dd>縦軸に時刻、横軸に日を表示します。週と言いますが10日や15日など、範囲は自由に決められます。直近の全体の予定を俯瞰したいときに便利です</dd>
<dt><a href="/docs/manual/calendar/table/">表</a></dt>
<dd>縦軸にスタッフ、横軸に日付の形をしたカレンダーです。横軸の日付の範囲は自由に変更できます。スタッフごとに提出状況を見たいときに便利</dd>
</dl>

## 保存箱との違い{#diff}

[レポートを読む](/docs/manual/read-report/state/)際は[保存箱](/docs/manual/read-report/list/)からも読むことができます。カレンダーでも同じことができますがカレンダーは検索機能が有りません。
検索が必要な場合はレポート[保存箱](/docs/manual/read-report/list/)を活用してください。

