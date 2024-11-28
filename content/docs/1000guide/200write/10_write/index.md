+++
url = "/docs/manual/write-report/write/"
title = "✍️レポートを書くまでの流れ"
menuTitle = "✍️レポートを書く"
description = "テンプレートを選ぶ▶レポートを書く▶提出先を選ぶ（初回のみ）▶提出ボタンクリック。これでレポートが提出できます。"
toc = true
weight = 210
# tags = []
# aliases = []
# images = []
+++

レポートを書く大まかな流れは以下のとおりです。

1. レポート作成をクリック
2. [使用するテンプレートの選択](#select_template)（1種類しか無い場合は省略されます）
3. [テンプレートに沿って内容を記入](#write)
4. [提出先や提出日などの情報をセット](#dist)
5. [提出ボタンをクリック](#post)

## 使用するテンプレートを選ぶ{#select_template}

レポート作成をクリックすると使用可能なテンプレート一覧が表示されますので、使用するテンプレートを選びます。
（※テンプレートが1種類の場合はこの画面は省略されます）

{{< callout context="note" title="Note" icon="outline/info-circle" >}}
スタッフごとに[使用可能なテンプレートを制御](/docs/manual/initial-setting/staff-local/template/)することもできます
{{< /callout >}}

{{<icatch filename="report-template-select" msg="まずは使うテンプレートを選ぼう。テンプレートは名前順に並ぶよ" alice="guide">}}

テンプレート選択画面では、その日何件提出したかがテンプレートごとに表示されます。[提出枚数目安](/docs/manual/initial-setting/template/make/#memo)が設定されている場合は進捗バーで表示されます。

## テンプレートに沿って記入する{#write}

テンプレートを選ぶと入力画面に切り替わります。所定の項目を適切に記入してください。
入力画面はPCとスマートフォンでは大きく異なりますが、内容は同一です。

{{<icatch filename="write-report" msg="レポートの作成画面です。設問に沿って内容を入力して行きます" alice="pc">}}

レポート入力画面は大きく分けて3つのセクションに分離できます。

<dl class="basic">
<dt>レポート作成エリア</dt>
<dd>選択したテンプレートをもとに表示される入力エリアです。スマートフォンでは縦1列に表示されます。タブレット以上の画面では普通のレイアウトで表示されます</dd>
<dt><a href="/docs/manual/initial-setting/advanced-setting/tag/">タグエリア</a></dt>
<dd>タグが一覧で表示されます。クリックするとレポートににタグを付けることができます。タグは<a href="/docs/manual/read-report/list/#searchFunction">検索</a>や目印として使用できます</dd>
<dt>ヘッダーエリア</dt>
<dd>提出日付や、<a href="/docs/manual/write-report/dist/">提出先共有先</a>、<a href="/docs/manual/write-report/draft/">下書き</a>などの情報を設定します</dd>
</dl>

### 本文を書き上げる{#finish}

まずはテンプレートに沿って報告内容を書き終えましょう。文字入力や選択式入力など様々な入力方式があります。それぞれの入力方法については[入力フォームごとの入力方法](/docs/manual/write-report/parts/)御覧ください。

### 提出先を選択する{#dist}

本文が終わったらヘッダー周りの指定です。特に重要なのは<a href="/docs/manual/write-report/dist/">提出先の指定</a>です。誰宛にレポートを提出するのかを選んでください。 提出先は一度選べば次回以降は自動でセットされます。

{{< callout context="note" title="Note" icon="outline/info-circle" >}}
[提出先は管理者が固定する](/docs/manual/initial-setting/staff-local/dist/)こともできます。
{{< /callout >}}

{{<icatch filename="report-header" msg="レポートの提出日・提出先といったヘッダ情報を入力します">}}

ヘッダーの各項目については以下の対応表を御覧ください。

<dl class="basic">
<dt>提出日時</dt>
<dd>自動で本日の現在時刻が入ります。必要に応じて修正可能（実際の提出時間も別途記録されます）</dd>
<dt><a href="/docs/manual/write-report/dist/">提出先</a></dt>
<dd>レポートの提出先です。提出先に指定されたスタッフはそのレポートを<a href="/docs/manual/read-report/state/#agree">承認</a>・<a href="/docs/manual/read-report/state/#reject">棄却</a>できます。提出先は複数名指定でき、その場合は指定された順に<a href="/docs/manual/read-report/state/#relay">承認のリレー</a>が行われます。</dd>
<dt>他に読める人（共有先）</dt>
<dd>承認はできませんがこの<a href="/docs/manual/read-report/state/#readed">レポートを読める人</a>を指定します。複数名指定可能です。提出先に指定しているスタッフを共有先に指定する必要はありません</dd>
</dl>

### 提出ボタンをクリック{#post}

最後に提出ボタンをクリックして完了です。これでレポートが作成され提出先に送られます。
提出したレポートは[カレンダー](/docs/manual/read-report/list/#calendar)や[保存BOX](/docs/manual/read-report/list/#listbox)からアクセス可能です。

{{< callout context="caution" title="注意" icon="outline/alert-triangle" >}}
[権限がゲスト](/docs/manual/initial-setting/staff/rank/#others)の場合、自分で書いたレポートを読むこともできません
{{< /callout >}}

{{< callout context="note" title="Note" icon="outline/info-circle" >}}
提出ボタンが押せないときは入力必須が残っていないか確認してみましょう
{{< /callout >}}

## 提出後のアクション{#then}

レポートの提出後は次のアクションを選びます。特にこれ以上やることがなければこの時点でアプリを閉じてしまってもOKです。
品質チェックなど製造現場ではチェックー＞提出ー＞チェックー＞提出の繰り返しになるためこのような機能が用意されています

<dl class="basic">
<dt>続けて書く</dt>
<dd>同じテンプレートを使用してレポートを新規作成します</dd>
<dt>テンプレートを変更</dt>
<dd><a href="#select_template">テンプレート選択画面</a>に切り替わります</dd>
<dt>提出したレポート表示</dt>
<dd>先程提出したレポートを表示します(<a href="/docs/manual/read-report/list/">保存箱へ移動</a>)</dd>
<dt>提出者にメールを送信する</dt>
<dd>お使いのメールソフトが起動します。<a href="/docs/manual/utils/notice/#email">メール通知</a>とは別にメールを送りたいときにご利用ください</dd>
</dl>

## 【補足】リカバリーについて{#hint}

レポート記入中にアプリがフリーズしたり誤って閉じてしまった場合でも書きかけのデータを復旧できます。復旧データがある場合はレポート作成画面表示時に「書きかけのデータがあります。復元しますか？」というメッセージが表示されます。
「はい」を選択すると書きかけの内容を復元し、いいえを選ぶと新規作成になります。
書きかけの自動バックアップデータはレポートが提出された時点でクリアされます。
類似の機能に[下書き機能](/docs/manual/write-report/draft/)があります。
