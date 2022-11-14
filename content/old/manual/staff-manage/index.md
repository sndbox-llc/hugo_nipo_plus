+++
description = "グループにスタッフを追加したり、各スタッフの権限や提出先の設定を行う手順について解説しています"
menuTitle = "スタッフアカウントの管理"
title = "スタッフアカウントの管理"
toc = false
weight = 400
tags = []
isNipo = true
+++


## グループに所属しているスタッフを確認する

グループにどのスタッフが所属しているかを確認するには、**全体設定**＞**メンバー管理**の順にクリックします。

{{<imgproc staff_list.png "ルームに所属しているスタッフ一覧を表示" />}}

ここで表示されているスタッフ一覧が現在グループに所属しているスタッフになります。初期の状態では１ページあたり5名のスタッフが表示されます。  
５名を超えている場合は、ページ送りボタンを使って次のページへ切り替えるか、１ページあたりの最大表示人数を変更してください。

## グループにスタッフを追加する

新たにスタッフを追加する場合は、スタッフ一覧の左下にある「スタッフ追加セクション」から操作します。
スタッフを追加する際には、**E-mailアドレス**が必要になります。
スタッフを追加するのはかんたんです。E-mailアドレスを入力し、**スタッフ追加ボタン**をクリックするだけです。

{{<imgproc staff_make.png "E-mailを入力してスタッフを追加する" />}}

お疲れさまでした。これでスタッフが１名追加されました。  
そのE-mailと、初期パスワード（赤文字で記載されています）を使い、Nipoにログインすることができます。  
例えば上の画像の例では、

- ログインE-mailアドレス: tes@sndbox.jp
- ログインパスワード: nipoSEeu

でログインできます。

{{<alice pos="left" icon="default">}}
初期パスワードは決して安全とは言えませんのでログイン後にパスワードの変更を行うようにしてください
{{</alice>}}

### スタッフの追加について捕捉

通常では、E-mailを入力してスタッフアカウントを追加するとNipo上にアカウントが１つ新規で追加されます。新規で追加されたアカウントは、デフォルトのパスワードがセットされます。  
しかし何らかの理由ですでに登録済みのE-mailを使った場合は、そのE-mailのアカウント上に、グループが１つ追加されるだけにとどまります。アカウントが新規作成されることはありません。  
つまり**初期パスワードは無視**され、これまでどおりのパスワードでログインするすることになります

### QRコードを使ってスタッフを招待する方法

QRコードを使ったスタッフの追加もできますが、この手順は少し複雑なので非推奨です。
QRコードはひと世代前のやり方で、現在のNipoでは敢えてこの手順を利用するメリットはありません。  
E-mailを使った追加が最もシンプルなのでそちらを使用してください。

{{<alice pos="left" icon="default">}}
以前はこの操作に関するお問い合わせが非常に多くありました。それだけわかりにくかったてことですね
{{</alice>}}

## スタッフの設定を行う

各スタッフごとに名前や各種権限の設定ができます。なお設定変更できる人は「管理者」と「マネージャ」だけです。
ちょうど話に出てきたので、**「管理者」「マネージャ」などのスタッフ権限**について見てみましょう

### スタッフの権限について

スタッフは必ず権限が設定されます。権限は

- 管理者
- マネージャ
- メンバー

の３種類あります。管理者が一番強い権限を持ち、メンバーが一番低い権限となります。
権限によってできることとできないことが決められています。権限の変更は変更したいスタッフの権限をクリックし、権限を選ぶだけです。

{{<imgproc staff_kengen.png "スタッフの権限を変更する" />}}

#### 管理者権限について

グループの管理ができる人です。**管理者は1グループに1名まで**です。最初にグループを作った人が管理者になりますが、必要に応じて管理者の権限を他のスタッフに譲ることもできます。  
他のスタッフに管理者の権限を譲ると自分自身の権限が後述する「**マネージャー権限**」に降格します。

#### マネージャ権限について

マネージャは管理者とほぼ同じ権限ですが、細かいところで若干の違いがあります。具体的には次のような違いがあります。

- 管理者は1名しか設定できませんがマネージャは複数人指定できます
- 管理者がマネージャをメンバーに降格したり追放したりできますが、その逆はできません
- マネージャはグループを解散できません
- 【グループモードが「共有しない」限定】管理者が提出先に指定され、マネージャは共有先に指定されます

とまぁ、違いを並べてみましたが日常業務でこれらの違いを意識する必要性はありません。基本的に管理者とマネージャは管理する側という位置づけです。  

#### メンバー権限について

メンバーは管理権限がありません。グループに関する全体的な設定や、日報テンプレートの編集などはできません。

### スタッフの日報提出先・共有先を指定する

Nipoでは日報を作成する際に、**誰あてに日報を提出するのか**を日報作成者自身で選ぶことができます。  
それとは別に管理者側が各スタッフに対して日報の提出先を強制的に指定することもできます。

{{<alice pos="left" icon="default">}}
例えば「Aさんの書く」「業務日報は」「Cさん宛てで固定する」という具合です。
{{</alice>}}

また、提出先と共有先については次のような違いがあります

{{<alice pos="right" icon="default">}}
提出先は日報を承認できる人のことです。共有先は日報を読める（承認はできない）人のことです。E-mailで例えるなら、こんな感じ

- 宛先=提出先(ただしNipoは１名まで)
- CC = 共有先(人数制限はありません）
{{</alice>}}


{{<imgproc staff_post.png "スタッフごとに日報の提出先を固定させる" />}}

ここで日報の種類と提出先、共有先を指定できます。  
また、日報作成時に日報作成者が自由に提出先を変更できてしまいますが、変更を許可したくない場合は「**日報作成時に提出先、共有先をロックする**」にチェックを入れて下さい。

{{<imgproc staff_post2.png "テンプレート毎に提出先や共有先の設定を行える" />}}

グループのモードによって少し話が変わってきます。細かく指定できるのは「通常モード」です。

- 「共有しないモード」の場合は、指定した日報提出先情報は無視されます。
- 「共有するモード」の場合は、提出先のみ設定可能です。共有先の設定は無視され、日報作成時に全てのスタッフが共有先に含まれることになります
- 「通常モード」の場合は、すべての設定が有効に機能します

詳しくは[グループモード](/old/manual/group-mode/)を御覧ください

### スタッフにタイムカード管理権限を設定する

{{<imgproc staff_tc.png "タイムカードの編集権限" />}}

タイムカードについて詳しくは「タイムカード機能」を御覧ください。ここでは簡単に説明します。タイムカード管理の権限が付与されると、

- 他人のタイムカードを参照できる
- タイムカードを削除できる
- タイムカードの丸めや超過労働時間の設定ができる

といったことができます。詳しくは[タイムカード機能](/old/manual/timecards/)を御覧ください。

### スタッフの名前を変更する

管理者・マネージャの権限があればメンバーの名前を変更できます。変更したいメンバの名前をクリックし、名前を入力して下さい

{{<imgproc staff_name_edit.png "スタッフ名を変更する" />}}

自分自身の名前であればメンバー権限のスタッフも変更できます。詳しくは[個人設定](/old/manual/group-self/)を御覧ください。

### スタッフを追放する

メンバーをグループから追放できます。追放したいメンバを選択後「追放」ボタンをクリックしてください

{{<imgproc staff_ban.png "スタッフをグループから追放する" />}}


{{<alice pos="left" icon="default">}}
追放はメンバをグループから放り出すことです。追放されたスタッフはグループの日報を読み書きできなくなります。追放は一般的には「スタッフが会社を辞めた時」に行います。退職したスタッフは情報漏洩を防ぐためにも忘れずに追放してください。
{{</alice>}}


追放されたスタッフがこれまでに作成した日報などは消えませんが、多少の変化が発生します

- 日報の削除や日報の修正は、オーナー不在のためできなくなります[（管理者の一括削除機能で削除は可能です）](/old/manual/delete/)
- 一部の個所で脱退したスタッフの名前が【退室済み】に変わります

#### 追放したスタッフを再度グループに追加する

誤って追放してしまった場合でも、スタッフの追加から追放したスタッフのE-mailを指定することで、もう一度グループに呼び戻すことができます。
この場合はスタッフのID自体は変わらないため、追放前に書いた日報の権限がそのまま引き継がれることになります。

### スタッフの活動実績を把握する

スタッフが月に何枚、日報を書いたのか？月に何件、コメントを残したのか？といった、スタッフ毎の活動実績を把握できます。スタッフの活動量を把握する一つの目安になります。

{{<imgproc staff_activity.png "スタッフの活動実績を表示する" />}}

各項目については次のとおりです

<dl>
<dt>日報提出回数</dt>
<dd>集計している月の日報提出回数です。下書きは含みません。提出した日報を削除してもカウントは減りません。そのため正確な値ではなく、一つの目安となります</dd>
<dt>タイムカード</dt>
<dd>日報を通じてタイムカードを打刻した回数と、打刻漏れによる手動打刻の回数を表します。こちらもタイムカードを削除したとしても、カウントは減りません。一つの目安としてご利用ください</dd>
<dt>既読</dt>
<dd>日報を既読にした回数です。日報を共有する会社であれば、きちんと既読されるかは大きな関心があると思います。</dd>
<dt>コメント</dt>
<dd>日報に対して書いたコメントの回数です。投稿したコメントを削除しても、カウントは減りません。「コメントを書く」という実績が集計されるのであり、実際のコメント件数を反映するものではありません。</dd>
<dt>承認と棄却</dt>
<dd>
  日報を「承認」した回数です。他の項目同様、棄却に変更しても「承認」のカウントは減りません。
「承認」▶「棄却」▶「承認」と操作した場合、「承認」が2、「棄却」が1とカウントされます。
</dd>
</dl>

それぞれの集計は、活動した日を基準に[集計](/old/manual/analytics/)されます。先月の日報に対してコメントを付けたとしても、「コメントを書く」行為が今月に行われているならばコメントの集計は「今月に＋１」されます。

活動実績は無料プランの場合、「当月分」のみ読むことができます。月の切替には[GOLD PLAN](/old/system/price/)への加入が必要です。