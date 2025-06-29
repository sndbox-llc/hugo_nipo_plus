+++
url = "/legacy/manual/write-report/"
# aliases = []
title = "レポートを書いて提出する"
menuTitle = "レポートを書いて提出する"
description = "Nipo【旧版】で日報や点検表を簡単に作成・提出する方法を紹介しています。テンプレートの選択、記入、提出までの手順を3ステップで説明し、スマホやタブレットからも手軽に操作可能です。後継バージョンのNipoPlusでも同様の機能が利用できます。"
toc = true
weight = 2045
isNipo = true

[sitemap]
  changefreq = "yearly"
  priority = 0.2
+++

{{< callout context="tip" title="[後続のNipoPlusでも利用可能](/docs/manual/write-report/write/)です" icon="outline/note" />}}

## たったの3ステップで日報が書けます{#howto}

初めてNipo【旧版】で日報を書いてみましょう。手書きやWordで作る日報よりもずっと簡単です。流れとしては

1. 使用するテンプレートの選択
1. テンプレートに従って日報を書く
1. 提出先を選んで「提出」をクリック

の３ステップです

### Step1:使用するテンプレートを選ぶ{#choose_template}

メニューから「日報作成」をクリックすると、使用するテンプレートの選択画面に変わります。

{{<iTablet filename="img/chooseTemplate" msg="使用するテンプレートを選択しよう"  alice="ok">}}

用意されているテンプレート一覧が表示されます。テンプレートの種類が多い場合は分類をしておくことで分類による絞り込みが簡単に行なえます。
また、**テンプレート一覧はテンプレート名の順に並ぶ**ため、頻繁に使用されるテンプレート名には\_（アンダーバー）などをテンプレート名の先頭につけることで上位に表示させることもできます。

{{< callout context="note" title="テンプレートが1種類しか無い場合は日報作成画面が表示されます" icon="outline/info-circle" />}}

### テンプレートに沿って日報を書きましょう{#write_report}

使用するテンプレートをクリックすると、入力画面が表示されます。

{{<iTablet filename="img/writeReport" msg="日報記入画面。選んだテンプレートによって項目が変わります"  alice="ok">}}

テンプレートの内容に従って日報を書きあげます。
日報入力欄のすぐ下にタグが並んでいることに気付きましたか？タグは日報に付ける目印のようなもので、誰でも簡単にタグを付けたり外したりできます。
日報を書いている最中にタグを付けることもできます。

{{< callout context="note" title="タグの活用方法" icon="outline/info-circle" >}}
タグは受信BOXや送信BOXから簡単に視認できる他、タグによる絞り込みの検索にも使えるためうまく活用してみましょう
{{< /callout >}}

実際にタグがどのように見えるかを確認したいなら、[日報受信ボックスについて](/legacy/manual/postbox/)のページを御覧ください

### 提出先と共有先を選んで「提出」します{#choose_dist}

提出する相手や、日付といった情報を入力しましょう。

<dl class="basic">
  <dt>提出日時</dt>
  <dd>日報の提出日を選択します。初期値は「本日の現在時刻」です。前日に日報を書き忘れた場合など、必要に応じて変更してください。日付を変えることで集計の期間などに影響を与えますので、正しい日付を選択してください</dd>
  <dt>提出先（承認権限者）</dt>
  <dd>その日報を承認できるスタッフを指定します。一般的には直属の上司になるかと思います。提出先に指定されたメンバーが、あなたのレポートに対して「承認／棄却」できる相手になります。提出先は１名しか指定できません。複数人に日報を呼んでほしい場合は、後述する「共有先」を使用してください</dd>
  <dt>共有先（他に日報を読める人）</dt>
  <dd>提出先以外に日報を読んでほしいスタッフの名前を指定します。共有先に指定されたスタッフは承認・棄却ができません。しかしそれ以外（日報を読む・日報にコメントするなど）の操作は行える状態になります</dd>
  <dt>下書き</dt>
  <dd>書きかけの日報を保存する場合は下書きのチェックをONにしてください。下書きの日報は他のスタッフが読めない隔離された場所（送信BOX）に保存されます。</dd>
  <dt>提出</dt>
  <dd>提出ボタンをクリックすると日報が提出されます。入力必須の項目が残っていたり、提出先が指定されていない場合は提出ができません</dd>
</dl>

{{< callout context="note" title="提出先や共有先は１度セットすると次回以降は記録されます" icon="outline/info-circle" />}}

#### 提出先と共有先についての捕捉{#about}

基本的にNipo【旧版】は日報の作成者が**主体となって提出先や共有先を指定できる**仕組みになっています。
しかしグループの管理者が強制的に提出先と共有先を指定している場合もあります。この場合は自分で提出先・共有先の設定ができません。

提出先や共有先は、グループのモードによっても影響を受けます。
例えばグループのモードが**共有するモード**の場合、共有先に全スタッフの名前が自動でセットされ、変更することができない状態になります。
詳しくは[グループのモード](/legacy/manual/group#mode)についてを御覧ください

## 日報の自動保存機能について{#auto_save}

日報を書くと、書きかけの情報が全てローカルストレージ（ブラウザ上の保存領域）に自動で保存されます。これを「オートセーブ機能」といいます。
万が一、日報の作成中にアプリがフリーズしたり、不具合で日報の提出に失敗したときにも入力中のデータは失われず、続きから日報作成が可能です。

{{<iTablet filename="img/recovery" msg="ブラウザに記録されたデータから書きかけの日報を復旧する"  alice="ok">}}

自動保存されているデータがない場合は、復元ボタン自体が表示されません。
自動保存データは日報の提出完了のタイミングで毎回リセットされます。

{{< callout context="note" title="リセットの影響はそのテンプレート内" icon="outline/info-circle" >}}
リセットされるのは提出したテンプレートの自動保存データのみになります。例えば日報と月報はそれぞれ別のテンプレートなのでこれらの自動保存データが同時に消えることはありません。
{{< /callout >}}

## 日報の下書き保存について{#draft}

下書き機能を使えば、日報を途中まで書いて作業をやめることができます。「下書き」にチェックを入れ、「下書きとして保存」ボタンをクリックしてください。

下書きの状態では、誰も読むことができません。後で忘れずに日報の修正を行い、下書きから本番用へ書き直します。
下書きした日報は「送信済」に保存されるため、「送信済」から編集して下書きから清書へかきあげます

下書きというマークの付いた日報が下書き日報です。クリックして編集し、今度は「下書き」のチェックを外して提出しましょう。
[日報の編集](/legacy/manual/postbox#edit/)について詳しくはこちらをご覧ください

## プロジェクトの指定について{#project}

この機能は応用機能です。プロジェクト機能を使わない場合は必要ありません。
選択したテンプレートがプロジェクトの工程用として用いられている場合はプロジェクト名を選択する項目が追加されます。

プロジェクトについて詳しくはプロジェクト概要を御覧ください

## 【捕捉】日報の提出日と受信BOXの並び順について{#sort}

日報の日付を修正して提出すると、受け取る側はどのようにみえるのでしょうか？正解は「提出された順」に並びます。**提出日は関係ありません**。

{{<iTablet filename="img/reportOrderby" msg="受信BOXの画面例。新着順に並びます"  alice="ok">}}

上の図の例では、12月1日が一番上に来ていますが、この日報は12/11に作成して提出しました。日報の作成者が提出日に指定した日付ではなく、Nipo【旧版】のサーバに保存された日付が優先されます。
唯一の例外として、[グループのモード](/legacy/manual/group#mode)が「共有する」であり、かつ「日報の並び順を日付順にする」がOnになっている場合に限り、日報に指定された提出日をもとに並びます。
