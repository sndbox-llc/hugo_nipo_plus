+++
description = "チェックシートや日報は適切な権限のあるスタッフのみ読むことができます。様々な検索や絞り込みを使って効率よく日報を探せます。"
menuTitle = "日報を読む"
menuPre = "<b>3. </b>"
title = "日報を読む"
toc = false
tags = []
weight = 30
aliases = ['/report/read/']
+++

## 日報受信BOXから目的の日報を見つける

スタッフが書いた日報はNipoPlusのサーバ上に保存されます。それぞれの日報には読める権限が設定されています。
読むことができる日報は[カレンダー上](/manual/calendar/)や日報受信BOXの一覧に表示されます。
このページセクションでは**日報受信BOXを基準**に紹介しています。カレンダーについては別のセクションを設けて居ます。

日報受信BOXは次のような画面です。
{{<icatch filename="report-box" msg="検索条件保存や 一括CSV出力も可能" title="通常の日報受信BOX" fontsize="30px" alice="ok" >}}

受信BOXには新しい日報の順に並んで表示されています。そこから1つをクリックすると**日報の詳細表示画面**へ切り替わります。
補足ですが画面切り替えを伴わない**ポップアップでの表示**も可能です。
また日報受信BOXでは期間を絞って日報の表示期間を変更したり、特定の単語やテンプレートによる検索も可能です。**検索した条件は保存できる**ので利便性もバッチリです。
タブを切り替えれば送信BOXになり、こちらではその名の通り自分が書いた日報を確認できます。

{{<button "/manual/report/read/list/" "受信BOXのマニュアルを見る">}}

## 日報を詳細に表示する

さて日報の詳細画面は次のような見た目をしています。

{{<icatch filename="report-read" msg="集計やグラフ も同画面に表示可能" title="日報の閲覧画面" fontsize="30px" alice="guide" >}}

画面左には日報の本体が表示され、左下には[過去のデータ推移](/manual/analytics/list/)や[グラフ](/manual/analytics/chart/)が表示されます。
画面右には「承認」や「PDF出力」「コピー」「コメント」といった様々な機能が並んでいますね。

日報の[承認](/manual/report/read/state/)をするとその日報は修正・削除ができなくなりますので誤操作による削除や改ざん防止としての側面も期待できます。
承認しなくともNipoPlusは利用できますが、可能であれば承認を使っていきましょう。
その他にも日報に対して[コメント](/manual/report/read/comment/)を書いたり、日報を[PDF出力](/manual/report/read/pdf/)したりできます。
もちろん[集計やグラフ化](/manual/analytics/)もできますが、これらの機能は別のセクションで紹介しています。

## 次の記事

{{% children description="true" containerstyle="dl" style="dt" %}}
