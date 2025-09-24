+++
url = "/docs/manual/write-report/write/"
title = "✍️日報の作成・提出 - 日報・点検記録・業務報告の流れ"
menuTitle = "✍️日報を書く"
description = "NipoPlusで日報や点検記録、各種業務報告書を作成・提出するまでのステップを解説します。テンプレートの選択から内容記入、提出先の指定、そして提出ボタンクリックまで、シンプルな流れで日々の記録を効率的にデジタル化できます。"
toc = true
weight = 50110
tags = ["日報作成", "日報提出", "点検記録", "業務報告", "記録アプリ", "デジタル化", "現場記録", "NipoPlus使い方"]
contributors = []
+++

NipoPlusで<strong>日報</strong>や<strong>設備点検記録</strong>、<strong>各種業務報告書</strong>といった「日報」を作成し、提出するまでの大まかな流れは以下のとおりです。

1.  日報作成ボタンをクリック
2.  [使用するテンプレートの選択](#select_template)（1種類しか無い場合は省略されます）
3.  [テンプレートに沿って内容を記入](#write)
4.  [提出先や提出日などの情報をセット](#dist)
5.  [提出ボタンをクリック](#post)

このシンプルな流れで、日々の業務記録を効率的にデジタル化し、関係者への共有やデータ活用へと繋げることができます。

## 1. 使用するテンプレートを選ぶ{#select_template}

日報作成ボタンをクリックすると、使用可能なテンプレートの一覧が表示されますので、使用するテンプレートを選びます。<strong>（日報、点検シート、作業報告書など、目的に合ったテンプレートを選択してください。）</strong>
（※テンプレートが1種類の場合はこの画面は省略されます）

{{< callout context="note" title="スタッフごとに使用可能なテンプレートを制御できます" icon="outline/info-circle" >}}
[スタッフごとに使用可能なテンプレートを制御](/docs/setup/staff-local/template/)することも可能です。これにより、特定のスタッフには必要なテンプレートだけを表示させ、選択の手間を省くことができます。
{{< /callout >}}

{{<icatch filename="img/report-template-select" msg="日報、点検シート、作業報告書など、まずは使うテンプレートを選びましょう。テンプレートは名前順に並びます" alice="guide">}}

テンプレート選択画面では、その日何件提出したかがテンプレートごとに表示されます。[提出枚数目安](/docs/template/make/#memo)が設定されている場合は、進捗バーで表示されます。これは、<strong>日報の毎日提出目標</strong>や、<strong>点検作業の完了状況</strong>などを視覚的に把握するのに役立ちます。

## 2. テンプレートに沿って内容を記入する{#write}

テンプレートを選ぶと入力画面に切り替わります。所定の項目を適切に記入してください。
入力画面はPCとスマートフォンでは大きく異なりますが、内容は同一です。スマートフォンやタブレットでの**現場入力**にも最適化されています。

{{<icatch filename="img/write-report" msg="日報の作成画面です。設問に沿って今日の業務内容や点検結果、作業報告などを入力していきます" alice="pc">}}

日報入力画面は大きく分けて3つのセクションに分離できます。

<dl class="basic">
<dt><strong>日報作成エリア</strong></dt>
<dd>選択したテンプレートをもとに表示される入力エリアです。スマートフォンでは縦1列に表示されます。タブレット以上の画面では通常のレイアウトで表示されます。<strong>日報の本文</strong>、<strong>点検項目</strong>、<strong>作業詳細</strong>などを記入します。</dd>
<dt><a href="/docs/setup/advanced-setting/tag/"><strong>タグエリア</strong></a></dt>
<dd>タグが一覧で表示されます。クリックすると日報にタグを付けることができます。タグは<a href="/docs/manual/read-report/list/#searchFunction">検索</a>や目印として使用できます。<strong>日報の分類（例：「緊急」「要確認」「〇〇工場」）</strong>や、<strong>情報の整理</strong>に役立ちます。</dd>
<dt><strong>ヘッダーエリア</strong></dt>
<dd>提出日付や、<a href="/docs/manual/write-report/dist/">提出先共有先</a>、<a href="/docs/manual/write-report/draft/">下書き</a>などの情報を設定します。<strong>誰に、いつ、この日報を共有するか</strong>を管理します。</dd>
</dl>

### 報告内容を書き上げる{#finish}

まずはテンプレートに沿って報告内容を書き終えましょう。<strong>文字入力</strong>や<strong>選択式入力</strong>など、様々な入力方式があります。それぞれの入力方法については[入力フォームごとの入力方法](/docs/manual/write-report/parts/)をご確認ください。

### 3. 提出先を選択する{#dist}

報告内容の記入が終わったら、ヘッダー周りの指定です。特に重要なのは[<strong>提出先の指定</strong>](/docs/manual/write-report/dist/)です。<strong>誰宛にこの日報（日報、点検記録など）を提出するのか</strong>を選んでください。提出先は一度選べば次回以降は自動でセットされます。

{{< callout context="note" title="提出先は管理者が固定することもできます" icon="outline/info-circle" >}}
[提出先は管理者が固定する](/docs/setup/staff-local/dist/)こともできます。これにより、特定のスタッフからの報告が必ず特定の担当者へ届くように設定できます。
{{< /callout >}}

{{<icatch filename="img/report-header" msg="日報の提出日・提出先・共有先といったヘッダ情報を入力します。日報の提出先や点検記録の報告先を明確にしましょう" alice="ok">}}

<dl class="basic">
<dt><strong>提出日時</strong></dt>
<dd>自動で本日の現在時刻が入ります。必要に応じて修正可能です（実際の提出時間も別途記録されます）。<strong>作業完了時刻や点検実施時刻</strong>を正確に記録できます。</dd>
<dt><a href="/docs/manual/write-report/dist/"><strong>提出先</strong></a></dt>
<dd>日報の提出先です。提出先に指定されたスタッフはその日報を<a href="/docs/manual/read-report/state/#agree">承認</a>・<a href="/docs/manual/read-report/state/#reject">棄却</a>できます。提出先は複数名指定でき、その場合は指定された順に<a href="/docs/manual/read-report/state/#relay">承認のリレー</a>が行われます。<strong>上司への日報提出</strong>や、<strong>責任者への点検報告</strong>に利用します。</dd>
<dt><strong>他に読める人（共有先）</strong></dt>
<dd>承認はできませんが、この<a href="/docs/manual/read-report/state/#readed">日報を読める人</a>を指定します。複数名指定可能です。提出先に指定しているスタッフを共有先に指定する必要はありません。<strong>関連部署への情報共有</strong>や、<strong>プロジェクトメンバーへの進捗共有</strong>に役立ちます。</dd>
</dl>

{{< callout context="note" title="自動承認について" icon="outline/info-circle" >}}
1番目の提出先を自分にすると「自動承認」オプションが選択できます。自動承認をONにすると、提出と同時に承認が行われます。<strong>自己承認で迅速に記録を完了したい</strong>場合に便利です。
{{< /callout >}}

### 4. 提出ボタンをクリック{#post}

最後に提出ボタンをクリックして完了です。これで日報が作成され提出先に送られます。
提出した日報は[カレンダー](/docs/manual/read-report/list/#calendar)や[保存BOX](/docs/manual/read-report/list/#listbox)からアクセス可能です。

{{< callout context="caution" title="権限によっては自分で書いた日報を読めない場合があります" icon="outline/alert-triangle" >}}
[権限がゲスト](/docs/setup/staff-global/rank/#others)の場合、自分で書いた日報を読むことができません。ご注意ください。
{{< /callout >}}

{{< callout context="note" title="提出ボタンが押せないときは入力必須項目を確認しましょう" icon="outline/info-circle" >}}
提出ボタンが押せない場合は、設定されている「入力必須」項目が全て入力されているか確認してみましょう。
{{< /callout >}}

## 提出後のアクション{#then}

日報の提出後は、次のアクションを選ぶことができます。特にこれ以上やることがなければ、この時点でアプリを閉じてしまっても問題ありません。
<strong>品質チェック</strong>や<strong>製造現場での巡回点検</strong>など、続けて同じ種類の記録を何度も行う業務では、以下の機能が非常に便利です。

<dl class="basic">
<dt><strong>続けて書く</strong></dt>
<dd>同じテンプレートを使用して日報を新規作成します。<strong>日報を複数枚書く</strong>場合や、<strong>続けて点検作業を行う</strong>場合に便利です。</dd>
<dt><strong>テンプレートを変更</strong></dt>
<dd><a href="#select_template">テンプレート選択画面</a>に切り替わります。別の種類の日報（例：日報から点検シートへ）を作成したい場合に利用します。</dd>
<dt><strong>提出した日報表示</strong></dt>
<dd>先程提出した日報を表示します（<a href="/docs/manual/read-report/list/">保存箱へ移動</a>）。提出内容を確認したい場合に便利です。</dd>
<dt><strong>提出者にメールを送信する</strong></dt>
<dd>お使いのメールソフトが起動します。<a href="/docs/manual/utils/notice/#email">メール通知</a>とは別に、個別にメールを送りたいときにご利用ください。</dd>
</dl>

## 【補足】書きかけデータのリカバリーについて{#hint}

日報記入中にアプリがフリーズしたり、誤って閉じてしまったりした場合でも、書きかけのデータを自動で復旧できます。復旧データがある場合は、日報作成画面表示時に「書きかけのデータがあります。復元しますか？」というメッセージが表示されます。
「はい」を選択すると書きかけの内容を復元し、「いいえ」を選ぶと新規作成になります。
書きかけの自動バックアップデータは日報が提出された時点でクリアされます。
類似の機能に[下書き機能](/docs/manual/write-report/draft/)があります。
