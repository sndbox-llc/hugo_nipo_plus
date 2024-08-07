+++
description = "月カレンダーにレポートや予定を表示します"
title = "表カレンダーについて"
menuTitle = "表カレンダー"
toc = true
tags = ["有料プラン限定"]
weight = 101005003
images = []
+++


{{<info>}}
カレンダがメニューに無いときは[グループ設定](/docs/manual/initial-setting/setting-group/#edit)から機能を有効にしてください
{{</info>}}


## 表カレンダーに切り替える{#calendar_switch}

カレンダーの表示モードを「表」に切り替えることでレポートや予定をスタッフ別に確認できます。


{{<icatch filename="table-calendar" msg="「スタッフ」を軸に据えた格子状の表だよ。人別に見たいとき便利です" alice="ok">}}

表カレンダーは縦軸にスタッフ、横軸に日付の格子状のカレンダーです。

## 月カレンダーの各種設定{#calendar_settings}

右パネルにある各種設定から月カレンダを独自にカスタマイズできます。この設定はあなた自身にのみ記録され、他のスタッフには影響しません。


<dl class="basic">
<dt>レポート０件警告</dt>
<dd>ONにするとレポートが0件のセルに警告を表示します</dd>
<dt>カレンダの並びを反転する</dt>
<dd>列の並びを逆転させます。ONだと左端が最も未来の日付となり、OFFだと左端が最も古い日付になります。</dd>
<dt>レポートを表示</dt>
<dd>ONにするとカレンダ上にレポートが描画されます。「新規」や「承認」など条件を細かく絞ることもできます</dd>
<dt>予定を表示</dt>
<dd>ONにするとカレンダ上に予定が描画されます。「新規」や「完了」など条件を細かく絞ることもできます</dd>
<dt>予定担当者絞込</dt>
<dd>予定の担当者による絞り込みができます。担当者は複数選択可</dd>
</dl>

レポートの描画基準については以下のとおりです。
<dl class="basic">
<dt>スタッフが指定した日付</dt>
<dd>レポートを開いたとき、右上に表示される日付のことです。この日付を基準にカレンダ上にレポートを配置します</dd>
<dt>サーバ上の最終更新日時</dt>
<dd>レポートの最終更新日を基準にカレンダ上に配置します。レポートを修正したりするとカレンダ上の表示もずれます。（レポート保存箱はこのモードです）</dd>
<dt>サーバ上の最初の保存日時</dt>
<dd>当該レポートが初めてサーバに保管された日を基準にします。レポートの修正をしても変化しません。ただし宵越しで提出されたレポートが正しい日に表示されない点に注意が必要です</dd>
</dl>

### 縦軸スタッフの並び順と非表示の設定

表の１行１列目（一番左上のボタン）をクリックすると表の縦軸の表示非表示・及び並べかえができます。
並び順は二重線のハンドルを掴んでドラッグで操作します。（もし並び順が反映されないときは再起動してください）
非表示にしたいスタッフは「表示しない」にチェックを入れることで非表示になります。


{{<icatch filename="orderby" msg="スタッフが多い場合は並べ替えや非表示をうまく使いましょう" alice="here">}}

これらの設定はスタッフ別に記録されるので各自で任意に設定が可能です。設定は自動で保存されます。

## 表カレンダからレポートや予定を読む

- 塗りつぶされているボタンが「予定」です。
- 白抜きのボタンが「レポート」です。

それぞれのボタンをクリックすることで該当のレポートまたは予定がポップアップで表示されます。
同セル内に複数の予定やレポートがある場合、ポップアップ後のウインドウにページ切り替えボタンがあるのでそこで切り替えします。
例として1/30に8件のレポートがあったとします。するとポップアップでは 1分の8と表示されます。

{{<icatch filename="pagination" msg="同セル内のレポートや予定が１つの塊として表示されます">}}


## 表カレンダから予定を登録する{#add_event}

各セルに配置された「＋」ボタンをクリックして予定を追加できます。クリックしたセルに応じて「担当者」と「予定日」が自動でセットされますが、任意に修正可能です。  
また、担当者は複数名指定可能です。

{{<icatch filename="add-event" msg="セル内の＋ボタンをクリックして予定を追加できます">}}


[予定登録](/docs/manual/event/add/)も参照してください。