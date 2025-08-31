+++
url = "/docs/setup/staff-local/template/"
aliases = ["/docs/manual/initial-setting/staff-local/template/"]
title = "🚫 スタッフが利用できるテンプレートを制限する"
subtitle = "現場の混乱を防ぎ、日報をスムーズに"
menuTitle = "🚫利用可能テンプレートの制限"
description = "NipoPlusの「テンプレートの制限」機能は、スタッフごとに使用可能な日報テンプレートを制御し、現場の混乱を防ぎます。膨大なテンプレートの中から探す手間をなくし、よりスムーズな日報作成を実現する方法を解説します。"
toc = false
weight = 10603
tags = ["スタッフ管理", "編集者権限"]
contributors = []
+++

{{< callout context="caution" title="この設定には[編集者権限以上](/docs/setup/staff-global/rank/#manager)が必要です" icon="outline/info-triangle" />}}

製造業など、業種によっては入力テンプレートの種類が膨大になることがあります。テンプレートが多いと次のようなデメリットがあります。

- 使用するテンプレートを一覧から探す手間がかかる
- 誤って違うテンプレートを使ってしまう

スタッフごとに 「**使えるテンプレート**」をあらかじめ絞り込むことで、不要な選択肢をなくし、**混乱を防ぎ、探す手間を削減**します。

{{< callout context="note" title="制限ではなく[フォルダ分けによる管理](/docs/template/directory/)も有効です" icon="outline/info-circle" />}}

---

## テンプレート制限機能の目的とメリット {#limit-purpose}

この機能は、特に以下のような場面で大きなメリットを発揮します。

<dl class="basic">
<dt>現場の混乱防止</dt>
<dd>スタッフが使うべきテンプレートが一目でわかり、誤ったテンプレートでの提出を防ぎます。</dd>
<dt>探す手間を削減</dt>
<dd>膨大なテンプレートリストの中から、目的のものを探す時間がなくなります。</dd>
<dt>シンプルな操作画面</dt>
<dd>選択肢が少ないことで、日報作成画面がスッキリし、操作性が向上します。</dd>
<dt>特定の業務への集中</dt>
<dd>スタッフは自分の担当業務に必要なテンプレートだけに集中できます。</dd>
</dl>

## スタッフ毎に利用可能なテンプレートを設定する {#limitUsageTemplate}

1.  左メニューから「グループ設定」をクリック
2.  上部メニューの「スタッフ管理」をクリック
3.  テンプレートを制限したいスタッフの行にある「**テンプレートを制限**」ボタンをクリック
4.  ポップアップで設定画面が開く

{{<icatch filename="img/show-template-setting" msg="制限すると情報ノイズが減るからストレス軽減だね" alice="shield">}}

{{<nextArrow>}}

1.  「**利用可能なテンプレートを制限する**」のチェックを**ON**にする
2.  リストから**利用を許可するテンプレート**を選択する
3.  設定後、「**閉じる**」ボタンをクリック

{{<icatch filename="img/template-control-setting" msg="利用可能なテンプレートだけを選ぶのです" alice="here">}}

{{< callout context="note" title="選択されたテンプレートだけが、そのスタッフの日報作成画面に表示されます" icon="outline/info-circle" />}}

この設定により、該当スタッフの[レポート作成時](/docs/manual/write-report/write/#select_template)には、ここで選ばれたテンプレートだけが一覧に表示されるようになります。

## 制限はレポート作成時にのみ適用されます {#info}

「利用可能なテンプレートの制限」機能は、**レポート作成時**にスタッフが選択できるテンプレートを制御するためのものです。
それ以外の操作、例えば[レポートの集計](/docs/manual/analytics/_about/)や、制限されたテンプレートで既に作成された[過去のレポートを閲覧する](/docs/manual/read-report/state/)ことについては、この制限は適用されません。
