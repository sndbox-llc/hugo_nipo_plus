+++
description = ""
title = "Excel"
menuTitle = "報告書を電子化してP管理図を自動で作る"
toc = true
images = ["charts_tablet.png"]
tags = ["エクセル", "集計"]
date = "2023-04-01"
draft = true
aliases = ["/checksheet/factory/", "/tips/progress/"]
[sitemap]
  priority = 0.9
+++



## エクセルで数人のスタッフの営業成績をスタッフごとに集計する

シナリオとしてはシンプルです。Aさん、Bさん、Cさん３人の営業スタッフが毎日営業日報を提出します。
営業日報の中に売上高という項目があります。この日報をエクセルにまとめたイメージが次の表です。。。。

<div class="excelTable">

-|A|B|C
---|---|---|---
1|10月1日 | A  | 12000
2|10月2日 | B  | 50000
3|10月3日 | A  | 15000
4|10月4日 | C  | 6300
5|10月5日 | A  | 22000
6|10月6日 | C  | 6300
7|10月7日 | B  | 21000
8|10月8日 | A  | 88000
9|10月9日 | C  | 3000

</div>


てすと

{{< excelTable >}}
10月1日, , 12000
10月2日, B, 50000
10月3日, A, 15000
{{< /excelTable >}}