+++
url = "/reverse-lookup/report/reportsearch/"
# aliases = []
title = "細かい条件指定し日報を検索したい"
description = "棄却された日報やタグの付いた日報など、様々な条件を組み合わせて目的の日報を検索できます"
isDictionaly = true
toc = false
date = "2024-10-04"
weight = 2220
+++

## 様々な条件の検索を使いこなそう{#search_about}

レポートは通常、表示期間内のレポートが全て表示されますが、様々な条件を使って絞り込むことができます。
承認済みの日報だけを表示したり、Aさんが書いた日報だけを表示したりできます。
例として、「先月の承認された日報」を一覧で表示してみましょう。

1. 左メニュー「レポート保存箱」をクリック
2. ラジオボタン「表」をクリック
3. 「状態：棄却」を選択
4. 「期間：今月」を選択

{{<iTablet filename="img/search" msg="提出状況は右上のカレンダーと同じ期間を表示するよ" alice="pc">}}

条件にマッチしたレポートが一覧に表示されます。

{{< callout context="caution" title="注意" icon="outline/alert-triangle" >}}
日報上に記載された日付を基準に表示されます
{{< /callout >}}

### その他に指定可能な検索条件{#search_params}

各列の先頭行が検索フィールドとなっており、それぞれに条件を指定して直感的な検索が可能です。指定可能な検索フィールドは以下のとおりです。

<dl class="basic">
<dt>状態</dt>
<dd>レポートの状態による絞り込みができます。複数選択可能</dd>
<dt>提出日時</dt>
<dd>昨日・今日・先週・今週・先月・今月・全期間・任意指定から選択します。任意指定を選択すると右パネルのカレンダーから操作できます</dd>
<dt>提出者</dt>
<dd>レポートを作成したスタッフで絞り込みができます。複数選択可能</dd>
<dt>提出先</dt>
<dd>自分宛てのレポートのみ絞り込みたい場合はチェックをいれます</dd>
<dt>テンプレート</dt>
<dd>特定のテンプレートで作成されたレポートのみを絞り込みできます。複数選択可能</dd>
<dt>タグ</dt>
<dd>レポートにセットされたタグによる絞り込みができます。複数選択可能</dd>
</dl>

### テキストによる検索{#search_to_text}

レポート内の特定の文字で検索したいときは「検索（２文字以上）」の欄に探したいワードを入力してください。
索引付けの関係で、検索は2文字以上である必要があります。画像関係は検索できません。

### STEPUP:よく使う検索条件を保存してワンクリック検索をマスターしよう{#step_up_guide}

頻繁に使う検索は検索条件として保存できます。詳しくは検索条件の保存を御覧ください
