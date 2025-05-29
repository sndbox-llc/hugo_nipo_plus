+++
url = "/reverse-lookup/report/reportsearchsave/"
# aliases = []
description = "細かい条件を毎回指定するのが大変だと感じませんか？検索条件は保存すれば次からはワンクリックで検索できます"
isDictionaly = true
title = "よく使う検索条件を保存して作業効率を上げたい"
menuTitle = "よく使う検索条件を保存して作業効率を上げたい"
toc = false
date = "2024-10-04"
weight = 2230
+++

## 煩雑な検索条件指定をバイパスしよう{#shortcut_search_method}

NipoPlusでは様々な検索機能がありますが、通常業務では検索条件って、毎回同じものを入力することが多くありますよね。
検索条件を保存することで、毎回ポチポチと条件を指定する煩雑さから開放できます。

1. 予め検索をする（[検索の仕方を参照](/reverse-lookup/report/reportsearch/)してください）
2. 検索条件保存をクリック
3. わかりやすい名前を付けて保存

{{<iTablet filename="img/searchSave" msg="検索名称はわかりやすいものをつけよう" alice="pc">}}

保存した検索条件は「保存した検索」の欄にボタンとして追加されます。呼び出したいときはボタンをクリックすれば保存した条件で即時検索が行えます。

{{<iTablet filename="img/useSearch" msg="ワンクリックで簡単検索" alice="pc">}}

{{< callout context="caution" title="注意" icon="outline/alert-triangle" >}}
日報上に記載された日付を基準に表示されます
{{< /callout >}}

### 期間指定は相対と絶対があります{#range_search}

保存する検索条件のうち、期間については「今日」や「今月」といった相対的なものと、「●月●日〜●月●日」といった絶対的なものの２種類があります。
相対の場合、検索ボタンを押す日によって検索の範囲が変化します。
一方で絶対的なものは、いつ検索ボタンを押しても検索範囲は固定です。
