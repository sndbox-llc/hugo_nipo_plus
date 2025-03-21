+++
url = "/docs/manual/read-report/state/"
# aliases = []
title = "📖レポートを読む"
description = "レポートを読み、承認や棄却する手順についてのガイドです。承認者が複数いる場合はリレー方式で承認のバトンが連鎖していき、全員が承認した時点で初めて承認状態になります。"
toc = true
weight = 50220
+++

{{< callout context="caution" title="[権限が「ゲスト」](/docs/setup/staff-global/rank/#others)のアカウントは自分の書いた日報も読めません" icon="outline/alert-triangle" />}}

[保存箱](/docs/manual/read-report/list/#listbox)や[カレンダー](/docs/manual/read-report/list/#calendar)からレポートをクリックするとレポートの詳細が表示されます。
ポップアップで表示されるケースとページ遷移して表示されるケースがありますが内容としては同一です。

## あなたが読める日報とは？{#canReadRport}

閲覧権限について先に確認しておきましょう。レポートは会社の情報なので誰でも見れるとまずい場合があります。
レポートを読むには「提出先か共有先」に名前が含まれている必要があります。
読めないレポートは受信BOX一覧に表示されません。また集計の対象にもなりません。

{{< callout context="note" title="共有モードがONの場合" icon="outline/info-circle" >}}
グループ設定で [日報共有モード](/docs/setup/setting-group/#reportShare)が有効の場合は権限に関係なく、グループに所属しているスタッフがレポートを閲覧可能です
{{< /callout >}}

## レポートの状態{#status}

レポートの状態はレポート内の左上に表示されています。

{{<icatch filename="img/report-status" msg="レポートは「承認」や「新規」「棄却」などいくつかの状態があるよ" alice="book">}}

状態は新規から始まり、最終的に承認へ向けて進みます。各段階の状態は以下のとおりです。

<dl class="basic">
<dt>新規</dt>
<dd>レポートが作成され、まだ承認や棄却が行われていない状態</dd>
<dt><a href="/docs/manual/read-report/state/#relay">進行</a></dt>
<dd>（提出先が2名以上の場合に限る）1名以上が承認をし、かつ最後の承認がされていない状態。レポートはロックされます🔐</dd>
<dt><a href="/docs/manual/read-report/state/#reject">棄却</a></dt>
<dd>棄却された状態です。<a href="/docs/manual/write-report/rewrite/">修正が必要</a>です</dd>
<dt><a href="/docs/manual/read-report/state/#state">修正</a></dt>
<dd><a href="/docs/manual/write-report/rewrite/">レポートを修正</a>した直後で、まだ承認や棄却が行われていない状態です。新規と違い削除はできません</dd>
<dt><a href="/docs/manual/read-report/state/#agree">承認</a></dt>
<dd>全員が承認した状態です。レポートはロックされます🔐</dd>
</dl>

## レポートを読んだあとのアクションについて{#action}

そのレポートを承認できるか否かによって取るべき行動が変わります。とはいえボタンに従うだけでそこまで複雑な話では有りません。

- 承認・棄却ボタンが見えている場合は承認か棄却をします
- それ以外はレポートを既読ボタンを押します

たったこれだけです。

### レポートの既読について{#readed}

先にシンプルな既読から解説します。既読はレポートを読んだことを示す意思表示です。
既読ボタンはあなたが「[共有先](/docs/manual/write-report/dist/)」に指定されたレポートで表示されます。

{{<icatch filename="img/readed" msg="読んだことを意思表示するには既読しましょう。自分の書いたレポートは自動で既読扱いになります">}}

レポートを開いたら既読ボタンを押してください。これで完了です。

### レポートを承認する{#agree}

レポートの検印欄にあなたの名前があればそのレポートを承認・棄却できます。検印は左の枠から押印されていきます。
検印欄の数は[提出先の設定](/docs/manual/write-report/dist/)により変動します。
右端の検印欄に押印された時点でレポートは「承認」の状態になります。

{{<icatch filename="img/done" msg="レポートを承認するするとロックがかかって修正や削除ができなくなるよ" alice="ok">}}

### レポートの承認リレー{#relay}

あなたの検印欄の右側に更に検印欄があれば次の人へ承認権限が回ります。この時点であなたは承認権限がなくなることに注意してください。
あなたが右端の場合はこれでレポートが承認済みとなります。

※あなたが右端の場合、次の承認者はいないため権限は移行しません。

{{<icatch filename="img/report-approval" msg="承認リレーがある場合は最後の人が承認した時点ではじめて「承認」になるんだ" alice="here">}}

{{< callout context="note" title="検印欄が1つしか無い場合はリレーにならず直接承認になります" icon="outline/alert-circle" />}}

### レポートを棄却する{#reject}

レポートに不備がある場合はその不備を修正する必要があります。レポートを棄却して[修正](/docs/manual/write-report/rewrite/)してもらいましょう。
棄却の際は不備の理由を[コメント欄](#comment)に書いてあげると親切です。

{{<icatch filename="img/report-rejected" msg="承認リレー中に誰かが棄却するとその時点でレポートの状態は「棄却」となります">}}

棄却の際は承認の権限が次のスタッフへ移動しません。そのため承認や棄却ボタンはそのまま表示され続けます。
棄却された事実はレポートの作成者に[通知](/docs/manual/utils/notice/)されます。棄却されたレポートをその後どうするのかは各会社でルールを明確に決めておくと良いでしょう。
一般的には修正して再提出という流れになるかと思います。修正手順については[レポートの修正](/docs/manual/write-report/rewrite/)を御覧ください

### レポートの修正という状態について{#state}

もし仮に先程のレポートを修正するとどうなるのか見ておきましょう。状態は「修正」となり、承認のハンコはすべてクリアされて最初からとなります。

{{<icatch filename="img/report-fixed" msg="【修正される＝内容が変わる】よって、承認リレーも最初からです">}}

## レポートの詳細状況を確認する{#detail}

レポート本文の下にある「詳細」をクリックするとその文書データの詳細な情報を確認できます。
これを見れば例えば本当にサーバに保存された時間等を知ることができます。

<dl class="basic">
<dt>作者ID</dt>
<dd>レポートを作成したスタッフのIDです。通常は下の「作成者アカウント」と同じものになりますが、<a href="/docs/setup/staff-local/share/">共用</a>を使って書かれたレポートの場合にかぎり共用先のIDがセットされます</dd>
<dt>作成者アカウント</dt>
<dd>作成したスタッフのIDです</dd>
<dt>文書ID</dt>
<dd>レポート1つ1つに割り当てられたランダムなIDです</dd>
<dt>作成日（サーバ基準）</dt>
<dd>レポートが初めてサーバ上に保存された日時です</dd>
<dt>更新日（サーバ基準）</dt>
<dd>レポートが保存後に書き換えられた日時です</dd>
<dt>レポート上の日付</dt>
<dd>レポート作成者が提出時に指定した日付です。集計や日付による検索はこのレポート上の日付を基準に行われます</dd>
<dt>予定との紐付け</dt>
<dd><a href="/docs/manual/event/list/">予定の報告</a>として書かれたレポートの場合、ここに紐付けられた予定のIDが表示されます。セットされていない場合は「none」と表示</dd>
<dt>承認</dt>
<dd>そのレポートが<a href="/docs/manual/read-report/state/">承認</a>された日時を表示します。承認者が複数名いる場合、この項目は承認者の数だけ増えます</dd>
</dl>

---

## レポートにコメントを書く{#comment}

{{< callout context="tip" title="[この機能はGOLDPLAN限定です](/docs/price/#fee)" icon="outline/info-circle" />}}

[レポートを読む](/docs/manual/read-report/state/)権限があればレポートにコメントを残すことができます。

1. コメントを書くレポートを開く
2. コメントを記入し、投稿ボタンを押す

{{<icatch filename="img/write-comment" msg="1つのレポートに付き最大で500コメントまで書き込み可能です。コミュニケーションにも活用ください" alice="ok">}}

- 自分の書いたコメントは右側にグレーの吹き出しで表示されます
- 自分以外が書いたコメントは左側に緑色の吹き出しで表示されます。
- コメント自体は新しいものが上位に表示されます。
- 1つのレポートに対してコメントは**最大で500件**まで書込みが可能です。
- 自分の書いたコメントのみ、削除することができます。

コミュニケーション図るツールとしてぜひご活用ください

### コメントの通知とログ{#log}

コメントが作成されるとレポートのオーナーに対して[通知が発行](/docs/manual/utils/notice/)されます。[ログ](/docs/manual/utils/log/)上にもコメントが残ります。
スタッフの[活動実績](/docs/setup/staff-local/_about/#activity)としてもカウントされます。

---

## レポートをエクスポートする{#exportReport}

表示中のレポートをNipoPlus以外の場所で使いたいケースもあります。
NipoPlusでは「CSV出力」と「PDF出力」をサポートしています。
これらの機能はWeb版のNipoPlusでご利用ください。（[Android](/docs/system/mobile-install#googlePlay/)・[iOS](/docs/system/mobile-install#appStore/) 非対応）

### 表示中のレポートをCSV出力する📊{#csv_export}

{{< callout context="note" title="まとめてCSV出力するには[一括CSV出力](/docs/manual/analytics/csv/)をご覧ください" icon="outline/info-circle" />}}

出力する手順は次の通りです。

1. CSV出力したいレポートを表示
1. メニューから「CSV出力」をクリック

クリック後の挙動はお使いのブラウザの設定により異なります。downloadフォルダに自動で保存されるケース、保存先を自分で設定するケースなどがあるので各自環境をご確認ください。
[CSV出力形式の設定](/docs/manual/analytics/csvoption/)もある程度設定可能です。

### 表示中のレポートをPDF出力する📄{#pdf_export}

{{< callout context="note" title="まとめて出力するには[一括PDF出力](/docs/manual/pdf/pdfbatch/)を御覧ください" icon="outline/info-circle" />}}

{{< callout context="note" title="[PDF出力設定](/docs/manual/pdf/pdfoption/)についてはこちらをご覧ください" icon="outline/info-circle" />}}

PDFに変換する手順は次のとおりです。

1. PDFに変換したいレポートを表示する
2. PDF出力ボタンをクリック
3. PDF作成完了まで待つ
4. 作成処理が完了後にダウンロード通知が発行される

{{<icatch filename="img/report-to-pdf" msg="PDF❗PDF❗">}}

PDFの作成には少し時間がかかります。完了後、画面右下に通知が届くのでその通知からPDFをダウンロードできます。
なおPDF作成中に他の作業へ切り替えても問題有りません。

- 生成されたPDFファイルは安全性の観点から2時間でダウンロードできなくなります。
- 期限が切れてしまった場合は再度生成してください。

ダウンロードしたPDFは普通のPDFファイルとして扱えます。

{{<icatch filename="img/pdf-download" msg="環境によって直接PCに保存されたり、ブラウザで表示されたり？これはブラウザ表示の例です">}}
