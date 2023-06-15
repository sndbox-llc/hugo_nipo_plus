+++
description = "入力必須の指定により報告書の「うっかり記入漏れ」を未然に防ぐことができます。うっかり提出忘れも「提出簿」を見ればすぐに分かります"
title = "日報のよくある「記入/提出忘れ」を0にする"
toc = true
aliases = ["/blog/leak/", "/blog/required/"]
excerpt = "入力必須の指定により報告書の「うっかり記入漏れ」を未然に防ぐことができます。うっかり提出忘れも「提出簿」を見ればすぐに分かります"
images = ["input-order_tablet.png"]
categories = []
tags = []
date = "2023-05-14"
[sitemap]
  priority = 0.9
+++


<dl class="faq">
<dt>日報の必要事項が空欄で提出されることがあり困っている</dt>
<dd>入力必須の指定で日報作成者にミスを知らせます</dd>
</dl>

記入する項目が多いと見落としてしまい、ミスに気づかず提出してしまうことがあります。
ただこの問題は入力必須指定で簡単に回避することが可能です。

## テンプレート作成時に入力必須をONにする

1. 必ず入力しなければならない項目がある場合は入力必須をONにします。
1. 入力必須がONの項目は左上に「入力必須」と表示され、報告書の作成者に注意を促します。
1. 入力がされると警告は消えます（すべての警告が消えるまで報告書の提出ボタンは押せません）
1. すべての警告を解消して提出します


入力必須にすると日報作成時に次のように表示されます。

{{<icatch filename="required" msg="警告があるため 提出ボタンを無効化" title="入力必須の指定がされた日報" fontsize="30px" alice="here" >}}

入力必須がたくさん出ていますね。この警告をすべて消すまで報告書の提出はできません。これにより入力漏れを提出時点でしっかりブロックできます。
なお[下書きとして保存](/docs/manual/write-report/draft/)する際は入力必須が空欄でも保存が可能です。


### 入力必須の各フォームごとのクリア条件

入力必須の挙動は各種入力フォームによって微妙に異なります。


<dl class="basic">
  <dt><a href="/docs/manual/initial-setting/template/text/">本文入力</a></dt>
  <dd>1文字以上文字を入力する</dd>
  <dt><a href="/docs/manual/initial-setting/template/select/">選択式入力</a></dt>
  <dd>選択肢から1つ選ぶ</dd>
  <dt><a href="/docs/manual/initial-setting/template/select2/">選択式入力（複）</a></dt>
  <dd>選択肢から少なくとも1つ選ぶ</dd>
  <dt><a href="/docs/manual/initial-setting/template/selectcalc/">選択式入力（2層）</a></dt>
  <dd>問2の選択肢から1つ選ぶ</dd>
  <dt><a href="/docs/manual/initial-setting/template/datetime/">日付・時刻入力</a></dt>
  <dd>日付または時刻を入力する</dd>
  <dt><a href="/docs/manual/initial-setting/template/datetimes/">期間入力</a></dt>
  <dd>期間（開始・終了両方とも）を入力する</dd>
  <dt><a href="/docs/manual/initial-setting/template/checkbox/">チェックボックス入力</a></dt>
  <dd>チェックボックスにチェックを入れる（同意や確認として利用を推奨します）</dd>
  <dt><a href="/docs/manual/initial-setting/template/range/">範囲入力</a></dt>
  <dd>この項目は入力必須の指定ができません</dd>
  <dt><a href="/docs/manual/initial-setting/template/sign/">署名入力</a></dt>
  <dd>イラスト・署名を書く（空白のイラストでも入力必須は解除されます）</dd>
  <dt><a href="/docs/manual/initial-setting/template/picture/">写真入力</a></dt>
  <dd>少なくとも1枚以上のJpeg・またはPngの画像を添付する</dd>
  <dt><a href="/docs/manual/initial-setting/template/file/">ファイル入力</a></dt>
  <dd>少なくとも1つ以上のファイルを添付する</dd>
  <dt><a href="/docs/manual/initial-setting/template/step/">スライダ入力</a></dt>
  <dd>スライダにつまみを置く</dd>
  <dt><a href="/docs/manual/initial-setting/template/rate/">レート入力</a></dt>
  <dd>星ゼロ(☆☆☆☆☆）以外の状態にする</dd>
  <dt><a href="/docs/manual/initial-setting/template/math/">数値入力</a></dt>
  <dd>数値を入力する</dd>
  <dt><a href="/docs/manual/initial-setting/template/calc/">算術</a></dt>
  <dd>この項目は入力必須の指定ができません</dd>
  <dt><a href="/docs/manual/initial-setting/template/array/">反復入力</a></dt>
  <dd>反復の中に配置した各種入力フォームに対してそれぞれ入力必須の指定が可能</dd>
</dl>

## 入力順序を制御してケアレスミスを防ぐ

人間は慣れや慢心により、手順の省略や手順に沿わない操作を行うことがあります。
報告書を書く際に記入の順番を設定することで、少なくても報告書に関しては記入の順番を矯正（強制）することができます。
入力必須と組み合わせることも可能です。

{{<icatch filename="input-order" msg="入力必須と 入力順指定の併用" title="入力の必須が空欄の場合は日報が提出できません" fontsize="30px" alice="here" >}}

入力順序の指定は手順遵守の他にも、次に入力すべき項目がわかりやすいので特に操作に不慣れなスタッフには有益な機能として活用できます。
入力必須の指定はテンプレート作成のページを御覧ください。

{{<btnCenter "/docs/manual/initial-setting/template/make/" "テンプレート作成">}}


---


## 提出簿から報告書の作成を忘れているスタッフを瞬時に特定

入力必須により記入漏れを防ぐことはできました。ではそもそも報告書自体を書き忘れた場合はどうでしょう？  
出席簿ならぬ「提出簿」を使えば誰が提出し忘れているかをすぐ特定できます。

{{<icatch filename="submission-status-list" msg="提出簿を見れば 提出漏れも一目瞭然" title="報告書の未提出者を瞬時に把握できる提出簿機能" fontsize="30px" alice="here" >}}


{{<alice pos="right" icon="please">}}
上の画像は未提出ばかりですが、サンプルなのでご容赦ください
{{</alice>}}

各セルには「提出した枚数」が表示されます。誤って2枚以上提出している場合も簡単に判定できますね。未提出者を見つけたらそっと本人に教えて上げてください。

{{<btnCenter "/docs/manual/read-report/list/" "提出簿について">}}

{{<info>}}
<a href="/docs/manual/calendar/_about/">カレンダーから未提出者を見つけることもできます</a>
{{</info>}}



## 報告書テンプレートに提出目安を指定し提出の必要件数を指示する

提出簿やカレンダーは日報を読む側目線での提出漏れチェックでした。逆に日報を書く側の目線から提出漏れを防ぐ方法として、日報テンプレートに提出目安を設定するという方法があります。

{{<icatch filename="goal-submission" msg="1日の提出ノルマを 設定することが可能" title="日報テンプレート選択画面から本日の提出予定枚数を確認可能です" fontsize="30px" alice="here" >}}

提出枚数目安を設定すると1日に提出する予定の件数とすでに提出した件数の進捗バーが表示されるため、日報を作成するスタッフが未提出に気づくことができます。
提出枚数目安を設定していないテンプレートでは、その日に何件提出したかだけが表示されます。
定休日などもあるため警告が表示されることはありませんが、スタッフ自らが提出漏れを気づくことができるため、設定しておくと提出漏れを減らすことができます。
