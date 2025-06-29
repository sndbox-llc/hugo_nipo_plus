+++
url ="/reverse-lookup/report/truetime/"
title = "レポートの提出された本当の時間を知りたい"
menuTitle = "レポートの提出された本当の時間を知りたい"
description = "スタッフが書いた日報の日付は任意に操作できますが、本当に提出されたのはいつなのか？知る方法があります"
isDictionaly = true
toc = false
weight = 2100
date = "2024-10-04"
+++

## サーバに保存された時間を見れば本当の提出日時がわかります{#posted_time}

NipoPlusではレポート作成時に、スタッフがその日報の提出日時を自由に変更できます。
これは意図したもので、前日の日報を書き忘れてしまったり、忙しくて書くことができない場合に備えた措置です。
自由に提出日を操作できると、では本当に書いた時間がいつなのか？がわかりませんね。
そんなときは、サーバに保存された日時を見れば解決です。サーバに保存された時間は本当にそのデータがサーバ上に初回に書き込まれた時刻を記録しており、改ざんはできません。

1. 本当の時刻を見たいレポートを表示
2. ページ末尾までスクロールし、「詳細」をクリック
3. 作成日（サーバ基準）の日付を見る

{{<iTablet filename="img/postTime" msg="サーバ基準の日付を見れば本当の時間がわかるよ" alice="pc">}}

```bash {frame="none"}
12:50:40(631)
```

のように表示されています。これは 12時50分40秒（631ミリ秒）の時点で提出されたことを表しています。

### レポートの持つ様々な時刻情報{#report_time_log}

１つのレポートに対して、３つの時刻情報を持っています。

<dl class="basic">
<dt>作成日（サーバ基準）</dt>
<dd>レポートが初めてサーバ上に保存された日時です。手動で変更はできません。</dd>
<dt>更新日（サーバ基準）</dt>
<dd>レポートが保存後に書き換えられた日時です。手動で変更はできません。</dd>
<dt>レポート上の日付</dt>
<dd>レポート作成者が提出時に指定した日付です。手動で変更ができます。集計や日付による検索はこのレポート上の日付を基準に行われます</dd>
</dl>
