+++
url = "/tips/required/"
description = "日報や点検表で発生しやすい記入漏れや手順飛ばしを防止する方法を紹介します。NipoPlusを使えば、記入漏れを入力必須設定で防ぎ、手順飛ばしを入力順序の制御で防止できます。これにより、ミスを最小限にし、スムーズな業務進行が可能です。さらに、提出状況表やシフト管理機能を活用すれば、提出漏れも素早く発見できます。ヒューマンエラーの防止に役立つ機能を活用して、効率的な報告業務を実現しましょう。"
title = "日報/点検表の「記入漏れ」・「手順飛ばし」を100%減にする"
menuTitle = "日報/点検表の「記入漏れ」・「手順飛ばし」を100%減にする"
toc = true
aliases = ["/blog/leak/", "/blog/required/"]
images = ["input-order_tablet.png"]
# tags = []
date = "2023-05-14"
[sitemap]
  priority = 0.9
+++



人が報告書を書く以上、項目の記入漏れや記入ミス、提出忘れはどうしても発生します。また、点検表などで決まった工程手順で点検すべきところを、慣れによって「決められた手順を守らない」なんてことも。
慣れや慢心によってこういったミスは起こりますが、ある程度はシステムによってある程度防ぐことが可能です。

- 日報の記入漏れは入力必須機能を使うことでミスを防げます
- 手順飛ばしは入力順序の強制機能を使うことで防げます



## テンプレートで入力必須をONにすれば記入漏れを物理的に防ぐことが可能{#setting}

問い合わせフォームや申込みフォームでうっかり空欄にして送信ボタンを押してしまった経験は有りませんか？
そのとき入力必須の項目であればエラーが起きて記入漏れをあなたに伝えてきたはずです。

記入漏れの問題を解決するのは実は簡単です。問い合わせフォームと同じように、「入力必須機能」を日報やチェック表のテンプレートに組み込むことで空欄による提出を防ぐことが可能です。
絶対に記入漏れしては困る項目に対して入力必須をONにすることで、その項目が空欄だった場合に報告書の提出ボタンが押せなくなります。
これにより点検者は自身の記入漏れに提出前の段階で気づくことができます。



{{<icatch filename="required" msg="入力必須の指定がされた日報で、未入力がある場合は提出ボタンが押せません"  alice="here">}}


1. 必ず入力しなければならない項目がある場合は入力必須をONにします。
2. 入力必須がONの項目は左上に「入力必須」と表示され、レポートの作成者に注意を促します。
3. 入力がされると警告は消えます（すべての警告が消えるまでレポートの提出ボタンは押せません）



なお[下書きとして保存](/docs/manual/write-report/draft/)する際は入力必須が空欄でも保存が可能です。

### 正しく入力されたと判断される基準について{#detail}

文字をいれるべきところが空欄であればこれは❌とわかりますね。3つから1つを選ぶとき、まだ選んでいないならこれも❌とわかります。
NipoPlusでは様々な入力フォームがありますが、入力必須は一般的に空っぽなら❌と解釈していただいて大丈夫です。より詳細な条件について知りたい方は詳細をクリックしてください


<details>
  <summary>詳細情報を見る</summary>

<dl class="basic">
  <dt><a href="/docs/manual/initial-setting/template/text/">本文入力</a></dt>
  <dd>1文字以上文字を入力する</dd>
  <dt><a href="/docs/manual/initial-setting/template/selects/#plain">選択式入力</a></dt>
  <dd>選択肢から1つ選ぶ</dd>
  <dt><a href="/docs/manual/initial-setting/template/selects/#multiple">選択式入力（複）</a></dt>
  <dd>選択肢から少なくとも1つ選ぶ</dd>
  <dt><a href="/docs/manual/initial-setting/template/selects/#layerd">選択式入力（2層）</a></dt>
  <dd>問2の選択肢から1つ選ぶ</dd>
  <dt><a href="/docs/manual/initial-setting/template/date_time/#point">日付・時刻入力</a></dt>
  <dd>日付または時刻を入力する</dd>
  <dt><a href="/docs/manual/initial-setting/template/date_time/#range">期間入力</a></dt>
  <dd>期間（開始・終了両方とも）を入力する</dd>
  <dt><a href="/docs/manual/initial-setting/template/selects/#checkbox">チェックボックス入力</a></dt>
  <dd>チェックボックスにチェックを入れる（同意や確認として利用を推奨します）</dd>
  <dt><a href="/docs/manual/initial-setting/template/digital/#range">範囲入力</a></dt>
  <dd>この項目は入力必須の指定ができません</dd>
  <dt><a href="/docs/manual/initial-setting/template/binarys/#sign">署名入力</a></dt>
  <dd>イラスト・署名を書く（空白のイラストでも入力必須は解除されます）</dd>
  <dt><a href="/docs/manual/initial-setting/template/binarys/#picture">写真入力</a></dt>
  <dd>少なくとも1枚以上のJpeg・またはPngの画像を添付する</dd>
  <dt><a href="/docs/manual/initial-setting/template/binarys/#file">ファイル入力</a></dt>
  <dd>少なくとも1つ以上のファイルを添付する</dd>
  <dt><a href="/docs/manual/initial-setting/template/digital/#slider">スライダ入力</a></dt>
  <dd>スライダにつまみを置く</dd>
  <dt><a href="/docs/manual/initial-setting/template/digital/#rate">レート入力</a></dt>
  <dd>星ゼロ(☆☆☆☆☆）以外の状態にする</dd>
  <dt><a href="/docs/manual/initial-setting/template/digital/#commonNumber">数値入力</a></dt>
  <dd>数値を入力する</dd>
  <dt><a href="/docs/manual/initial-setting/template/digital/#calc">算術</a></dt>
  <dd>この項目は入力必須の指定ができません</dd>
  <dt><a href="/docs/manual/initial-setting/template/array/">反復入力</a></dt>
  <dd>反復の中に配置した各種入力フォームに対してそれぞれ入力必須の指定が可能</dd>
</dl>

</details>



## 点検表の入力順序を強制することで手順工程飛ばしを物理的に不可能にする{#miss_care}


記入しやすい欄から埋めていく方法は決して悪いわけでは有りませんが、本来の手順が決められている場合にこのような手順飛ばしをされると困ることがあります。
日報などではあまり問題になりませんが、機器の点検や品質チェックの場合、点検の手順が定められているケースも有り、手順を守ることも重要です。
しかし口頭やマニュアルで手順を書いても、慣れや慢心で工程を飛ばしたり手順を守らなくなるケースもあります。
NipoPlusの**入力順序の強制機能**を使うことで入力の順序を正しくガイドすることができます。手順が重要なケースではこの機能を活用することでヒューマンエラーを軽減させることができます。
入力の順序を指定すると、定められた順序にしか入力ができず、それ以外の入力フォームはグレーで無効化されます。前の入力が終わることで次の入力順序に指定された項目が入力可能状態に変化していきます。




{{<icatch filename="input-order" msg="入力順序の制御により工程飛ばしをブロックします"  alice="here">}}

1. 入力順序の指定で最も若い番号のみ入力待機状態になる
2. 1が入力されると次の入力順序に指定されたフォームが入力待機状態になる
3. 以降最後まで繰り返し

入力順序の指定は手順遵守の他にも、次に入力すべき項目がわかりやすいので特に操作に不慣れなスタッフには有益な機能として活用できます。
※入力必須と組み合わせることも可能です。

{{<btnCenter "/docs/manual/initial-setting/template/make/#input_control" "テンプレート作成:入力順序の指定">}}

---

## 提出状況表を使って提出漏れを早期に発見{#easy_find}

記入漏れや手順飛ばしを防ぐことはできても、そもそも書き忘れた場合これらの機能で防ぐことはできません。
うっかり提出忘れを把握するには**提出状況表**を確認します。
提出状況表とは横軸に日付、縦軸にスタッフの一覧表です。各マスには提出したレポートの件数が表示されます。
未提出の場合、このセルに❌が表示されるため提出を忘れたスタッフを早期に発見することが可能です。
❌だけでもある程度把握は可能ですが、シフト制の職場では「❌印」だけではスタッフが欠勤で提出していないのか、そもそも単純な提出忘れなのかを判断できませんね。
そのようなときはシフト管理機能と組み合わせることでより状況を詳細に把握可能です。
シフト管理で休みのフラグをセットしておけば、❌の代わりに「休」と表示されるため提出漏れと欠勤の判別も容易に行えます。



{{<icatch filename="report-list" msg="提出状況を一覧で確認可能。欠勤か提出漏れかを判別するにはシフトを登録することで解決できます。"  alice="here">}}



各セルには「提出した枚数」が表示されます。誤って2枚以上提出している場合も簡単に判定できますね。未提出者を見つけたらそっと本人に教えて上げてください。

{{<btnCenter "/docs/manual/read-report/list/#teishutuMap" "提出状況表について">}}
{{<btnCenter "/docs/manual/utils/shift/" "シフト管理について">}}

{{< callout context="note" title="Note" icon="outline/info-circle" >}}
<a href="/docs/manual/calendar/_about/">カレンダーから未提出者を見つけることもできます</a>
{{< /callout >}}

---

## 1日に複数枚の報告書作成が必要なときは今日の提出目安を指定する{#target}

この機能は応用的なものです。必要のない企業様も多いと思います。
仮に１日に3回の報告が必要なルールがあったとします。１日の提出目安を設定することで、今何枚提出してあと何枚報告書の提出が必要かを知ることができます。
あくまでも補佐的な機能であり、提出を忘れたからと言って警告が出るわけでは有りませが、進捗バーで表示されるため注意を促すことが可能になります。


{{<icatch filename="goal-submission" msg="テンプレート選択画面から本日の提出予定枚数を確認可能です" alice="here">}}

提出枚数目安を設定すると1日に提出する予定の件数とすでに提出した件数の進捗バーが表示されるため、日報を作成するスタッフが未提出に気づくことができます。
提出枚数目安を設定していないテンプレートでは、その日に何件提出したかだけが表示されます。