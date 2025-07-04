+++
url = "/docs/manual/read-report/state/"
# aliases = []
title = "📖レポートの詳細表示 - 日報・点検記録の承認・分析・履歴確認" # 機能の核とメリットを強調
menuTitle = "📖レポートを読む"
description = "NipoPlusでは、提出された日報や点検記録の詳細を閲覧し、承認・棄却、コメント追加、タグ付け、PDF出力といった様々なアクションが可能です。特に製造業の点検業務で重宝される「過去データ推移」機能により、数値やグラフで異常の兆候を早期発見。レポートの信頼性を高め、データに基づいた意思決定を支援します。" # メリットとユニークな機能、SEOキーワードを網羅
toc = true
weight = 50220
tags = ["レポート閲覧", "日報詳細", "点検記録表示", "レポート承認", "データ分析", "過去データ推移", "異常発見", "品質管理", "監査証跡", "コメント機能", "PDF出力", "CSV出力", "レポート状態", "承認リレー"] # SEOタグを拡充
contributors = []
+++

{{< callout context="caution" title="閲覧権限にご注意ください" icon="outline/alert-triangle" >}}
[権限が「ゲスト」](/docs/setup/staff-global/rank/#others)のアカウントは、自分が書いた日報も含め、レポートを閲覧できません。レポートを見るには、あなた自身がレポートの提出先または共有先に含まれている必要があります。
{{< /callout >}}

[保存箱](/docs/manual/read-report/list/#listbox)や[カレンダー](/docs/manual/read-report/list/#calendar)からレポートをクリックすると、そのレポートの詳細画面が表示されます。
ポップアップで表示されるケースとページ遷移して表示されるケースがありますが、表示される内容と行えるアクションは同一です。

この詳細画面では、レポートの内容を確認するだけでなく、承認、棄却、コメントの追加、タグ付け、そして特に**製造業の点検業務で重要となる過去データの推移確認**など、様々なアクションを取ることが可能です。

## あなたが読めるレポートとは？ - 閲覧権限の基本{#canReadRport}

閲覧権限について先に確認しておきましょう。レポートは会社の情報であり、誰でも見れるとまずい場合があります。
NipoPlusでは、レポートを読むには「[提出先](/docs/manual/write-report/dist/)」か「[共有先](/docs/manual/write-report/dist/)」にあなたの名前が含まれている必要があります。
あなたが読めないレポートは受信BOX一覧に表示されません。また集計の対象にもなりません。

{{< callout context="note" title="全体共有モードがONの場合" icon="outline/info-circle" >}}
グループ設定で[日報共有モード](/docs/setup/setting-group/#reportShare)が有効な場合、権限に関係なく、グループに所属しているすべてのスタッフがレポートを閲覧可能です。社内全体での情報共有を重視する際に利用します。
{{< /callout >}}

## レポートの状態 - 承認フローの進捗を把握{#status}

レポートの状態はレポート内の左上に表示されています。この状態表示によって、そのレポートが承認プロセスの中でどの段階にあるのかを一目で把握できます。

{{<icatch filename="img/report-status" msg="レポートには「新規」「進行」「承認済み」「棄却」「修正中」などいくつかの状態があります。状態に応じて取るべきアクションが異なります" alice="book">}}

レポートの状態は「新規」から始まり、最終的に「承認済み」へ向けて進みます。各段階の状態は以下のとおりです。

<dl class="basic">
<dt><strong>新規</strong></dt>
<dd>レポートが作成され、まだ承認や棄却が行われていない初期状態です。</dd>
<dt><a href="/docs/manual/read-report/state/#relay"><strong>進行</strong></a></dt>
<dd>（提出先が2名以上の場合に限る）1名以上が承認をし、かつ最後の承認がされていない状態です。この状態になるとレポートはロックされ、直接修正はできません。<strong>承認リレーの途中</strong>であることを示します。</dd>
<dt><a href="/docs/manual/read-report/state/#reject"><strong>棄却</strong></a></dt>
<dd>レポートが提出先のスタッフによって棄却された状態です。<a href="/docs/manual/write-report/rewrite/">修正が必要</a>です。棄却された理由は[コメント欄](#comment)で確認できます。</dd>
<dt><a href="/docs/manual/read-report/state/#state"><strong>修正</strong></a></dt>
<dd><a href="/docs/manual/write-report/rewrite/">レポートを修正</a>した直後で、まだ承認や棄却が行われていない状態です。新規と違い、この状態のレポートは削除できません。</dd>
<dt><a href="/docs/manual/read-report/state/#agree"><strong>承認</strong></a></dt>
<dd>全ての提出先スタッフによって承認された最終状態です。レポートはロックされ、内容の変更はできません。<strong>正式な記録として確定した</strong>ことを意味します。</dd>
</dl>

## レポートを読んだあとのアクション - 承認・既読・棄却{#action}

レポートの詳細画面では、あなたの権限とレポートの状態に応じて、様々なアクションを取ることができます。基本的には表示されるボタンに従うだけで、そこまで複雑な操作は必要ありません。

- 「承認」または「棄却」ボタンが見えている場合は、承認または棄却を行います。
- それ以外の場合は「既読」ボタンを押します。

たったこれだけです。

### レポートの既読について{#readed}

「既読」は、レポートを読んだことを示す意思表示です。既読ボタンはあなたが「[共有先](/docs/manual/write-report/dist/)」に指定されたレポートで表示されます。

{{<icatch filename="img/readed" msg="レポートを読んだことを意思表示するには「既読」ボタンをクリックしましょう。あなたの書いたレポートは自動で既読扱いになります" alice="ok">}}

レポートを開いたら「既読」ボタンを押してください。これで完了です。共有された情報を確認したことを明確にできます。

### レポートを承認する{#agree}

レポートの検印欄にあなたの名前があれば、そのレポートを承認または棄却できます。検印は左の枠から順番に押印されていきます。
検印欄の数は[提出先の設定](/docs/manual/write-report/dist/)により変動します。
右端の検印欄に押印された時点で、レポートは最終的な「承認」の状態に変わります。

{{<icatch filename="img/done" msg="レポートを承認すると内容がロックされ、修正や削除ができなくなります。これは記録の信頼性を保証するための仕組みです" alice="ok">}}

### レポートの承認リレー{#relay}

あなたの検印欄の右側にさらに検印欄があれば、次の人へ承認権限が回ります。この時点であなたは承認権限がなくなることに注意してください。
あなたが右端の検印欄である場合は、これでレポートが最終的に承認済みとなります。

{{<icatch filename="img/report-approval" msg="承認リレーがある場合、最後の承認者が承認した時点ではじめてレポートは「承認済み」となります。承認フローの明確化に役立ちます" alice="here">}}

{{< callout context="note" title="検印欄が1つしか無い場合はリレーにならず直接承認になります" icon="outline/alert-circle" />}}

### レポートを棄却する{#reject}

レポートに不備がある場合や、内容に疑問点がある場合は、その不備を修正してもらう必要があります。レポートを棄却して[修正](/docs/manual/write-report/rewrite/)してもらいましょう。
棄却の際は、不備の理由を[コメント欄](#comment)に具体的に書いてあげると、レポート作成者にとって親切です。

{{<icatch filename="img/report-rejected" msg="承認リレー中に誰かが棄却すると、その時点でレポートの状態は「棄却」となります。問題点を明確にし、迅速な修正を促しましょう" alice="guide">}}

棄却の際は承認の権限が次のスタッフへ移動しません。そのため承認や棄却ボタンはそのまま表示され続けます。
棄却された事実はレポートの作成者に[通知](/docs/manual/utils/notice/)されます。棄却されたレポートをその後どうするのかは、各会社でルールを明確に決めておくと良いでしょう。
一般的には修正して再提出という流れになるかと思います。修正手順については[レポートの修正](/docs/manual/write-report/rewrite/)を御覧ください。

### レポートの修正という状態について{#state}

もし仮に先程のレポートを修正するとどうなるのか見ておきましょう。状態は「修正」となり、承認のハンコはすべてクリアされて最初からとなります。

{{<icatch filename="img/report-fixed" msg="レポートが修正されると、内容は変わったため承認リレーも最初からやり直しになります。データの正確性を保証するNipoPlusの仕組みです" alice="guide">}}

## レポートの詳細状況を確認する - 内部データと履歴{#detail}

レポート本文の下にある「詳細」をクリックすると、その文書データの詳細な情報を確認できます。
これを見れば、例えば本当にサーバーに保存された時間や、レポートの内部的なIDなどを知ることができます。監査証跡の確認や、データ管理の際に役立ちます。

<dl class="basic">
<dt><strong>作者ID</strong></dt>
<dd>レポートを作成したスタッフの内部的なIDです。通常は下の「作成者アカウント」と同じものになりますが、<a href="/docs/setup/staff-local/share/">共用アカウント</a>を使って書かれたレポートの場合に限り、共用先のIDがセットされます。</dd>
<dt><strong>作成者アカウント</strong></dt>
<dd>レポートを作成したスタッフのアカウント名です。</dd>
<dt><strong>文書ID</strong></dt>
<dd>レポート1つ1つに割り当てられたランダムなユニークIDです。システム内部でのレポート識別に使用されます。</dd>
<dt><strong>作成日（サーバ基準）</strong></dt>
<dd>レポートが初めてサーバー上に保存された日時です。実際の提出日時とは別に、システムが記録したタイムスタンプです。</dd>
<dt><strong>更新日（サーバ基準）</strong></dt>
<dd>レポートが保存後に書き換えられた（修正された）日時です。レポートの変更履歴を追跡できます。</dd>
<dt><strong>レポート上の日付</strong></dt>
<dd>レポート作成者が提出時に指定した日付です。集計や日付による検索はこのレポート上の日付を基準に行われます。</dd>
<dt><strong>予定との紐付け</strong></dt>
<dd><a href="/docs/manual/event/list/">予定の報告</a>として書かれたレポートの場合、ここに紐付けられた予定のIDが表示されます。セットされていない場合は「none」と表示されます。</dd>
<dt><strong>承認</strong></dt>
<dd>そのレポートが<a href="/docs/manual/read-report/state/">承認</a>された日時を表示します。承認者が複数名いる場合、この項目は承認者の数だけ増えます。</dd>
</dl>

---

## 【重要】過去データ推移で異常を早期発見 - 製造業の点検業務に最適{#dataTransition}

NipoPlusのユニークな強みの一つが、**数値データを含むレポートの「過去データ推移」を、その場で視覚的に確認できる機能**です。

これは、日々の点検や測定の記録において、**単なる数値の累積ではなく、「変化の傾向」や「ブレ」を捉えること**が極めて重要だという、製造業の現場の声から生まれた機能です。

例えば、設備点検で特定の測定値を記録している場合、今見ているレポートの数値だけでなく、**過去の同じ測定値がどう推移しているか**を、その場でグラフや数値で確認できます。

- <strong>数値をグラフで確認：</strong> 測定値が徐々に上昇している、または下降しているといった<strong>「異常の兆候」</strong>を早期に発見できます。
- <strong>ブレの確認：</strong> 正常範囲内の数値であっても、極端なブレがある場合は何らかの異常を示唆している可能性があります。

これにより、**故障の予兆管理、品質の安定性確認、設備の劣化状況把握**といった、**予防保全や品質管理**に不可欠な分析を、専門知識なしに、日々の点検記録の中から行うことが可能になります。

---

## レポートにコメントを書く - チーム内のコミュニケーションを促進{#comment}

{{< callout context="tip" title="この機能はGOLDPLAN限定です" icon="outline/info-circle" >}}
レポートにコメントを残す機能は[GOLDPLAN](/docs/price/#fee)でご利用いただけます。
{{< /callout >}}

レポートを読む権限があれば、そのレポートに対してコメントを残すことができます。
これにより、<strong>日報に対するフィードバック、点検結果に対する指示、業務報告に関する質疑応答</strong>など、レポートを介したチーム内の円滑なコミュニケーションを実現します。

1.  コメントを書きたいレポートを開く
2.  コメントを記入し、「<strong>投稿</strong>」ボタンを押す

{{<icatch filename="img/write-comment" msg="1つのレポートに最大500コメントまで書き込み可能です。日報へのフィードバックや点検記録への指示など、コミュニケーションツールとしても活用ください" alice="ok">}}

- 自分の書いたコメントは右側にグレーの吹き出しで表示されます。
- 自分以外が書いたコメントは左側に緑色の吹き出しで表示されます。
- コメント自体は新しいものが上位に表示されます。
- 1つのレポートに対してコメントは<strong>最大で500件</strong>まで書込みが可能です。
- 自分の書いたコメントのみ、削除することができます。

チーム内のコミュニケーションを図るツールとしてぜひご活用ください。

### コメントの通知とログ - コミュニケーションの履歴を管理{#log}

コメントが作成されると、レポートのオーナー（作成者や提出先）に対して[通知が発行](/docs/manual/utils/notice/)されます。
コメントの内容は[ログ](/docs/manual/utils/log/)上にも記録されるため、<strong>誰が、いつ、どのようなコメントを残したか</strong>というコミュニケーションの履歴を追跡できます。
また、コメントの活動はスタッフの[活動実績](/docs/setup/staff-local/_about/#activity)としてもカウントされます。

---

## レポートをエクスポートする - 外部での活用へ{#exportReport}

表示中のレポートをNipoPlus以外の場所で使いたいケースもあります。
NipoPlusでは、レポートデータを「<strong>CSV出力</strong>」と「<strong>PDF出力</strong>」でエクスポートすることをサポートしています。
これらの機能はWeb版のNipoPlusでご利用ください。（[Android](/docs/system/mobile-install#googlePlay/)・[iOS](/docs/system/mobile-install#appStore/) アプリは非対応）

### 表示中のレポートをCSV出力する📊{#csv_export}

レポートの生データや集計しやすい形式で出力したい場合に利用します。

{{< callout context="note" title="複数のレポートをまとめてCSV出力する場合" icon="outline/info-circle" >}}
複数のレポートをまとめてCSV出力するには[一括CSV出力](/docs/manual/analytics/csv/)をご覧ください。
{{< /callout >}}

出力する手順は次の通りです。

1.  CSV出力したいレポートを表示
1.  メニューから「<strong>CSV出力</strong>」をクリック

クリック後の挙動はお使いのブラウザの設定により異なります。ダウンロードフォルダに自動で保存されるケース、保存先を自分で設定するケースなどがあるので各自環境をご確認ください。
[CSV出力形式の設定](/docs/manual/analytics/csvoption/)も、レポートの種類やデータ分析の目的に合わせてある程度設定可能です。

### 表示中のレポートをPDF出力する📄{#pdf_export}

レポートを印刷したり、外部に共有したりする際に、視覚的に分かりやすいPDF形式で出力します。

{{< callout context="note" title="複数のレポートをまとめてPDF出力する場合" icon="outline/info-circle" >}}
複数のレポートをまとめて出力するには[一括PDF出力](/docs/manual/pdf/pdfbatch/)をご覧ください。
{{< /callout >}}

{{< callout context="note" title="PDF出力設定の詳細" icon="outline/info-circle" >}}
レポートのレイアウト、余白、透かしといった[PDF出力設定](/docs/manual/pdf/pdfoption/)についてはこちらをご覧ください。
{{< /callout >}}

PDFに変換する手順は次のとおりです。

1.  PDFに変換したいレポートを表示する
2.  「<strong>PDF出力</strong>」ボタンをクリック
3.  PDF作成完了まで待つ
4.  作成処理が完了後にダウンロード通知が発行される

{{<icatch filename="img/report-to-pdf" msg="レポートをPDF形式で出力します。日報や点検記録を印刷したり、外部に共有したりする際に便利です" alice="ok">}}

PDFの作成には少し時間がかかる場合があります。完了後、画面右下に通知が届くので、その通知からPDFをダウンロードできます。
なおPDF作成中に他の作業へ切り替えても問題有りません。

- 生成されたPDFファイルは安全性の観点から2時間でダウンロードできなくなります。
- 期限が切れてしまった場合は再度生成してください。

ダウンロードしたPDFは普通のPDFファイルとして扱えます。

{{<icatch filename="img/pdf-download" msg="ダウンロードしたPDFファイルは、ブラウザで直接表示されたり、PCに保存されたりします。これはブラウザ表示の例です" alice="ok">}}
