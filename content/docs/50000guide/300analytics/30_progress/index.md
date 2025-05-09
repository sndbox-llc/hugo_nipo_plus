+++
url = "/docs/manual/analytics/progress/"
# aliases = []
title = "目標と実績の累積を見る"
menuTitle = "目標と実績の管理"
description = "日ごとの目標を設定し、レポートデータから目標の到達率や1ヶ月間の累計達成率を表形式で管理できます。製造業や営業など、進捗管理や目標達成の可視化に役立ちます。"
toc = true
weight = 50330
tags = ["有料プラン限定"]
contributors = []
+++

{{< callout context="note" title="集計がメニューに無いときは[グループ設定](/docs/setup/setting-group/#optionalFunction)から機能を有効にしてください" icon="outline/info-circle" />}}

1ヶ月の目標が決まったらそれを稼働日で按分することで１日あたりの目標が求まります。
1日あたりの目標達成未達、及び累積による目標達成未達を一覧表で表示できます。
前月の繰り延べがあればそれを加算することも可能です（とくに製造業の在庫で有益）

## 目標・実績管理の使い方{#goal_management}

目標・実績管理には次のフォームが利用できます。

- [スライダ入力フォーム](/docs/template/digital/#slider)
- [数値入力フォーム](/docs/template/digital/#commonNumber)
- [算術フォーム](/docs/template/digital/#calc)

上記いずれかのフォームが含まれた[テンプレートを作成](/docs/template/make/)してください。

### 予定・実績表を作成する{#make}

実際に作ってみましょう。手順は次のとおりです。

1. メニューから「集計・CSV出力」をクリック
1. 「予定・実績表」をクリック
1. 「新規作成」をクリック

{{<icatch filename="img/make" msg="予定実績表はレポートの結果（実績）と目標値（予定）を日別に比較する表です">}}

予定実績表の作成ウインドウがポップアップで表示されます。
ウィザードに従って作成していきましょう。３ステップで完成です。

#### Step1.目標・実績表に使用する入力フォームを選択する{#step1_select_form}

目標実績表に使用するフォームを選択します。同じ項目を複数追加することも、異なるテンプレートを横断して追加することも可能です。
追加した順に目標・実績表が作成されるため、並び順が重要な場合はクリックする順番を間違えないようにしてください。

{{<iTablet filename="img/mokuhyou1" msg="複数のテンプレートを横断して選択することも可能です" alice="ok">}}

{{< callout context="tip" title="ご存知ですか？" icon="outline/note" >}}
誤って登録してしまった場合は次のステップで削除することが可能です
{{< /callout >}}

{{<nextArrow>}}

#### Step2.入力フォームごとに初期値などの設定を行う{#step2_set_defaults}

{{<iTablet filename="img/mokuhyou2" msg="選択したデータ事に細かい設定が可能です。特に変更が不要であればそのままにしておきます" alice="ok">}}

選択した入力フォームごとに機能のON/OFFを行います。

<dl class="basic">
<dt>目標手動入力を使う</dt>
<dd>目標が不要で単純に実績を見たいときはこれをOFFにします</dd>
<dt>目標の累積を表示</dt>
<dd>ONにすると目標累積が表示されます。</dd>
<dt>実績の累積を表示</dt>
<dd>同上</dd>
<dt>手動入力のコピー初期値</dt>
<dd>目標一括設定を行う際、毎月の目標が一定であれば初期値をセットすることで入力の手間を省くことができます。</dd>
<dt>計測用フォームを選択</dt>
<dd>【非推奨：削除予定】これは使用しません</dd>
<dt>ゴミ箱アイコン</dt>
<dd>Step1で誤って追加してしまった入力フォームはこのゴミ箱ボタンをクリックすることで削除できます</dd>
</dl>

{{<nextArrow>}}

#### Step3.プレビューを確認する{#step3_preview}

実際の目標・実績表をその場でプレビューで確認できます。イメージ通りに仕上がっているか確認してください。
問題がなければ保存ボタンをクリックして目標・実績表を保存します。問題があれば戻るボタンをクリックして前のステップからやり直してください。
また、１からやり直したい場合は保存せずに右上の❌ボタンをクリックして内容を破棄できます。

### 予定・実績表を見る{#show}

作成した予定実績表のボタンをクリックすることで予定実績表を表示します。予定実績表は複数作成でき、ボタンを押すことで切り替えが可能です。
予定・実績表は縦軸に日付、横軸に監視したいデータで構成された格子状の表です。

{{<icatch filename="img/list" msg="予定実績表の完成">}}

行は6行でワンセットです（設定により少なくなることもある）。
各行の説明は以下の表のとおりです

<dl class="basic">
    <dt>レポート実データ(1行目)</dt>
    <dd>レポートの実データを集計した結果が反映されます。同日に複数件のレポートがある場合は合算されます</dd>
    <dt>目標値(2行目)</dt>
    <dd>その日の目標値を手動で設定します。曜日単位での一括指定も可能です</dd>
    <dt>目標累積(3行目)</dt>
    <dd>目標値の累積です。1日目が10で2日目も10の場合、10+10で20が累積として表示されます</dd>
    <dt>実績累積(4行目)</dt>
    <dd>1行目のレポート実データを累積した数値です。調整に値を入れると調整の値が0日目に追加されたとしてカウントされます</dd>
    <dt>進捗(5行目)</dt>
    <dd>実績累積から目標累積を引いた値です。つまりその日までに何個必要で何個作ったのか、その差を知ることができます。負数の場合は赤字で表示されます</dd>
    <dt>日別結果(6行目)</dt>
    <dd>日単位で目標に対して実績が上回っていれば緑、下回っていれば赤のアイコンが表示されます。目標が設定されていない日は黄アイコンが表示されます</dd>
</dl>

### 予定・実績表の予定数を入力、保存する{#save}

実績はレポートから自動で集計されますが、予定は手動で入力する必要があります。1日ごとに入力するか、1ヶ月の目標を日ごとに按分して設定すると効率的です。
目標一括設定ボタンを押すことで同じ目標値を一括で設定できます。

{{<icatch filename="img/batch" msg="予定実績表の「予定」を一括で指定します。土日は除外するといった指定も可能です"  alice="ok">}}

祝日には対応しておりませんので、お手数ですが祝日は手動で削除してください。
予定は書き込んだだけでは自動で保存されません。予定を保存するには「編集内容の保存」ボタンをクリックしてください。

### 予定・実績表をCSV出力する{#csv}

必要であれば予定・実績表をCSV形式でダウンロードすることができます。
CSVはエクセルやGoogleスプレッドシートなど、一般的な表計算ソフトで開くことができます。
CSVで保存するには表右上にある「CSV」ボタンをクリックしてください。

### 予定・実績表の編集と削除{#remove}

予定・実績表の構造を変更したい場合は編集ボタン（鉛筆のアイコン）をクリックします。編集方法は新規作成時と同様です。
予定・実績表が不要になった場合はゴミ箱アイコンをクリックすることで簡単に削除できます。

{{<icatch filename="img/edit" msg="修正はあまり使う機会はないかもですね" alice="ok">}}
