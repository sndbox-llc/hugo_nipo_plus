+++
url = "/reverse-lookup/report/reportrange/"
description = "過去の日報を探す時、探す期間が決まっていれば期間を指定して簡単に検索ができます"
title = "特定の時期の日報を探したい"
toc = false
# images = []
# tags = []
aliases = ['/function/reportrange/']
weight = 21210
isDictionaly = true
date = "2024-10-04"
[sitemap]
  changefreq = "weekly"
  priority = 0.3
+++

## カレンダーを操作して任意の期間の日報を検索する

受信BOXの右パネルに配置されているカレンダーを操作することで、特定の時期の日報のみを簡単に検索できます。
カレンダーは起動時に自動で直近3日間にセットされますが、クリック操作で任意の期間に切り替えが可能です。

1. 左メニュー「レポート保存箱」をクリック
2. 「受信BOX」になっていることを確認（デフォルトでこれがセットされています）
3. 右パネルのカレンダーを操作して期間を選択します

{{<iTablet filename="range" msg="1回目のクリックで開始時点、2回目のクリックで終了時点をセットします" alice="pc">}}

指定された範囲内の日報のみが、一覧に表示されます。

{{< callout context="caution" title="注意" icon="outline/alert-triangle" >}}
日報の日付は「サーバに保存された日」「更新された日」「日報上に記載された日」の３種類あります。検索で利用される日付は「日報上に記載された日」です
{{< /callout >}}
