+++
description = "日報データをAPI経由で取得することができます"
menuTitle = "API"
menuPre = "<b>10. </b>"
title = "API"
toc = false
tags = []
weight = 101010000
+++

NipoPlusではWebAPIを公開しています。このWebAPIを使うことで日報データを直接取得できます。
NipoPlusを起動しなくでも日報のデータを取得できるので、例えば機関システムや社内DBに定期的にデータを取り込む処理を自動化するといったことができます。

{{<alice pos="right" icon="ok">}}
自動化は多少のプログラミングの知識が必要になりますが覚えると便利ですよ
{{</alice>}}

2022年10月にWeb API Version 0が公開されました。Version 0は当面の間無償で公開されますが、Version1からAPI機能は有料オプションとして提供される予定です。
費用は1企業単位で1ヶ月800円〜1000円、または売り切りでの販売を予定しています。（人数は関係ありません）

## 次の記事

{{% children description="true" containerstyle="dl" style="dt" %}}
