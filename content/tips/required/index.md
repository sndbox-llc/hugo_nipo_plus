+++
description = "日報アプリで日報の記入漏れや提出漏れを素早くチェック。未提出者を素早く発見、記入漏れを事前にブロック"
menuTitle = "記入・提出漏れを防ぐ"
tags = []
title = "日報の記入漏れ・提出漏れを防ぐ"
toc = true
weight = 20221118
aliases = ['/blog/leak/', '/blog/required/']
+++


## 記入漏れは日報アプリで事前にチェック可能です

うっかり記入しなければならない項目を書き忘れてしまう経験は誰でも1度はあることでしょう。
紙やWord/Excelによる日報でこの問題を防ぐことは難しいですが例えば問合せフォームなどで空欄があるとエラーが表示されるのを目にしたことはありませんか？
NipoPlusでは問合せフォームと似たような仕組みを日報に組み込むことができます。

{{<icatch filename="required" msg="空欄があるため 提出ボタンを無効化" title="入力必須の指定がされた日報" fontsize="30px" alice="here" >}}

一部だけを入力必須にすることも、全て入力必須にすることも設計段階で自由に調整できます。
記入漏れは読み手も書き手も無駄な手間が増えます。入力必須をうまく使い、効率の良い日報システムにしましょう。


### 絶対に入力してほしい項目には入力必須をONにすることで空欄状態だと日報の提出ができないように制御できます

NipoPlusは1つ1つの入力フォームに対して個別に「入力必須」の条件を追加できます。  
[※スライダー入力フォーム](/manual/initial-setting/template/step/)など一部は利用不可

入力必須が有効になったフォームは空欄の場合に**入力必須の警告**が表示され、日報作成者が見落とさないように赤文字で表示されます。
文字を入力したり、選択肢のチェックを入れることで入力されたと判断し、この警告は消えます。すべての警告が消えるまで提出ボタンは押せません。
なお誤って記入済みの項目を削除した場合は再び警告が表示されます。

{{<icatch filename="clear" msg="空欄を埋めて 入力必須を解消" title="入力必須を埋めて提出" fontsize="30px" alice="here" >}}

このように入力必須の指定をうまく使うことで、不備がある日報をそもそも提出できないように事前にブロックすることができます。
なお[下書きとして保存](/manual/write-report/draft/)する際は入力必須が空欄でも保存が可能です。

入力必須の挙動は各種入力フォームによって微妙に異なります。詳しくは以下の表を御覧ください。

|入力フォーム名|クリア条件|
|---|---|
|[テキスト入力フォーム](/manual/initial-setting/template/text/)|1文字以上文字を入力する|
|[選択肢入力フォーム](/manual/initial-setting/template/select/)|選択肢から1つ選ぶ|
|[選択肢入力フォーム（複数回答）](/manual/initial-setting/template/select2/)|選択肢から少なくとも1つ選ぶ|
|[選択肢入力フォーム（２層式）](/manual/initial-setting/template/selectcalc/)|問2の選択肢から1つ選ぶ|
|[日付・時刻入力フォーム](/manual/initial-setting/template/datetime/)|日付または時刻を入力する|
|[期間入力フォーム](/manual/initial-setting/template/datetimes/)|期間（開始・終了両方とも）を入力する|
|[チェックボックス入力フォーム](/manual/initial-setting/template/checkbox/)|チェックボックスにチェックを入れる（同意や確認として利用を推奨します）|
|[範囲入力フォーム](/manual/initial-setting/template/range/)|この項目は入力必須の指定ができません|
|[署名・イラスト入力フォーム](/manual/initial-setting/template/sign/)|イラスト・署名を書く（空白のイラストでも入力必須は解除されます）|
|[写真入力フォーム](/manual/initial-setting/template/picture/)|少なくとも1枚以上のJpeg・またはPngの画像を添付する|
|[ファイル入力フォーム](/manual/initial-setting/template/file/)|少なくとも1つ以上のファイルを添付する|
|[スライダ入力フォーム](/manual/initial-setting/template/step/)|この項目は入力必須の指定ができません|
|[レート入力フォーム](/manual/initial-setting/template/rate/)|星ゼロ(☆☆☆☆☆）以外の状態にする|
|[数値入力フォーム](/manual/initial-setting/template/math/)|数値を入力する|
|[算術](/manual/initial-setting/template/calc/)|この項目は入力必須の指定ができません|
|[反復入力フォーム](/manual/initial-setting/template/array/)|反復入力フォーム自体に入力必須の指定はできませんが、反復の中に配置した各種入力フォームに対してそれぞれ入力必須の指定が可能です|

---

## 日報の提出を忘れているスタッフを瞬時に特定するには日報提出簿で

日報提出簿は横軸にスタッフ、縦軸に日付で構成された格子状の表です。隠せるには日報の提出件数が表示され、0件の場合はバツマークが表示されます。
大勢のスタッフが居ても、バツマークのついているセルを見れば誰が提出を忘れているのか瞬時に把握できます。

{{<imgproc submission-status-list.png "提出簿は日報受信BOXの右カラムに表示されます。スマートフォンの場合は右からスワイプすることで表示できます" />}}

提出簿の各セルには提出件数が表示されるため、1以外の数字がセットされている場合、誤って2回提出してしまったり、日付の指定を間違えているといったミスの発見にも役立てられます。
現地調査のように現場ごとに日報を書く場合は、報告書の件数がそのままタスクの件数として見ることができるため、スタッフの評価判断にも有用です。

{{<alice pos="right" icon="here">}}
提出簿が見切れてしまう範囲はスクロールで表示できます
{{</alice>}}

横軸であるスタッフ一覧はグループに所属しているスタッフが自動でリストアップされます。
休職などの理由でしばらく日報の提出が無い場合は「日報があるスタッフのみ表示」のチェックを入れることで、指定した期間に１件も日報が無いスタッフは提出簿から除外されます。

### カレンダーから日報の提出漏れをチェックする

提出漏れを確認するもう１つの方法としてカレンダー機能があります。カレンダーも提出簿と同じ構成で、縦軸にスタッフ、横軸に日付の格子状カレンダーになります。

{{<imgproc calendar-setting.png "スタッフと日付で構成されたカレンダー画面" />}}

カレンダーは日報が0件であっても警告は表示しませんが、表示オプションから「日報が0件の際警告を表示する」をONにすると未提出者のセルに赤色の警告アイコンが表示されます。
この警告アイコンの交差するセルには日報が無いため、日報の提出漏れを簡単に発見できます。

### 日報テンプレートに提出目安を指定し提出漏れを気づかせる

提出簿やカレンダーは日報を読む側目線での提出漏れチェックでした。逆に日報を書く側の目線から提出漏れを防ぐ方法として、日報テンプレートに提出目安を設定するという方法があります。

{{<imgproc goal-submission.png "日報テンプレート選択画面から本日の提出予定枚数を確認可能です" />}}

提出枚数目安を設定すると1日に提出する予定の件数とすでに提出した件数の進捗バーが表示されるため、日報を作成するスタッフが未提出に気づくことができます。
提出枚数目安を設定していないテンプレートでは、その日に何件提出したかだけが表示されます。
定休日などもあるため警告が表示されることはありませんが、スタッフ自らが提出漏れを気づくことができるため、設定しておくと提出漏れを減らすことができます。

### 日報の提出漏れを見つけたら本人へ通達してください

NipoPlusはチャット機能などがありませんので、もし提出漏れを見つけたらスタッフへメールや口頭で日報提出漏れの旨を伝えてください。
提出漏れのチェックはスタッフが多くなるほど手間が増えますが、NipoPlusなどの日報アプリでは提出漏れを効率よく見つける仕組みが用意されてます。
Wordやエクセル、チャットアプリを日報に使うのではチェック漏れを探すのが困難になりますので、効率よく提出漏れを探せる日報アプリを検討してください。