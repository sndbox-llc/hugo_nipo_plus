+++
description = "日報テンプレートカスタムパーツの1つ。日報内に10:00〜15:00のような期間の入力枠を追加します"
tags = ["集計可能フォーム", "日報構成部品", "テンプレート"]
title = "【期間入力】を日報に追加"
menuTitle = "🧩期間入力"
toc = true
weight = 101001107
aliases = ["/manual/initial-setting/template/datetimes/"]
images = []
+++

作業にかかった時間や日数を入力するのに最適のフォームです。
次のようなイメージです。

<div class="container my-3" style="padding:20px;border:1px solid #ccc">
  <form>
    <div class="row">
      <div class="col">
        <div class="form-group">
          <label for="start-time">開始時間</label>
          <input type="time" class="form-control" id="start-time">
        </div>
      </div>
      <div class="col">
        <div class="form-group">
          <label for="end-time">終了時間</label>
          <input type="time" class="form-control" id="end-time">
        </div>
      </div>
    </div>
  </form>
</div>

{{<icatch filename="datetimes-icatch" msg="作業時間や期間 日付の計算も可能" title="期間入力フォーム" fontsize="30px" alice="ok">}}

|[集計可否](/docs/manual/analytics/)|[CSV出力](/docs/manual/analytics/csv/)|[PDF出力](/docs/manual/read-report/pdf/)|[文字検索](/docs/manual/read-report/list/)|
|:---:|:---:|:---:|:---:|
|○|○|○|○|

入力種類は以下から選択できます

- 時刻のみ
- 日付と時刻
- 日付

## フォームをテンプレートに追加する{#add}

1. テンプレート編集画面を開く
1. フォームリストから「日付時刻（期間）」をクリックして追加
1. 形式を選ぶ
1. 必要に応じてその他の設定を行う

期間入力フォームの設定は以下の通り

<dl class="basic">
  <dt>入力必須</dt>
  <dd>これがONの場合、数値が空欄だと日報の提出ができなくなります</dd>
  <dt>初期状態でONにする</dt>
  <dd>これがONの場合、日報作成時にこのチェックボックスはONの状態でスタートします</dd>
  
  <dt>集計する</dt>
  <dd>ON:集計機能で利用できます。集計が不要の場合はOFFにします</dd>

  <dt>形式</dt>
  <dd><ul><li>日付（西暦あり）</li><li>日付（西暦無し）</li><li>時刻のみ</li><li>日付と時刻</li></ul>4種類から選択します</dd>
  <dt>スライダ上の最小（時刻のみ）</dt>
  <dd>スライダ式で時刻入力する際のスライダの左端を何時にするか設定します。初期値は8:00です</dd>
  <dt>スライダ上の最大（時刻のみ）</dt>
  <dd>スライダ式で時刻入力する際のスライダの右端を何時にするか設定します。初期値は20:00です</dd>
  <dt>刻み（時刻のみ）</dt>
  <dd>1目盛りあたり何分進めるか設定します。初期値は30分です</dd>
</dl>


入力形式の4種類については次のような形式になります。

|入力形式|フォーマット|例|入力切替|
|---|---|---|---|
|日付（西暦有り)|YYYY/MM/DD|2022/12/01|可|
|日付（西暦なし）|MM/DD|12/01|不可|
|時刻のみ|HH:mm|13:21|可|
|日付と時刻|YYYY/MM/DD HH:mm|2022/12/01 13:21|不可|

共通設定事項については以下を参照してください。
{{<btnCenter "/docs/manual/initial-setting/template/make/#common_setting" "共通設定項目">}}

{{<appscreen filename="template-edit-datetimes" title="期間入力フォームのみで構成されたテンプレートの例">}}

{{<nextArrow>}}

{{<appscreen filename="datetimes-preview" title="期間入力の入力イメージ。時刻の場合はスライダーを使った入力方式も可能">}}


スライダは便利ですがこの状態だと宵越しの入力はできません。**深夜12時をまたぐ入力が必要な場合は入力方式を切り替える**ことで入力が可能です。

{{< warning >}}
反復入力（可変長）と組み合わせることで時刻の始点が自動セットされる入力補助が発動します。詳しくは[反復入力のページ](/docs/manual/initial-setting/template/array/)を御覧ください。
{{< /warning >}}


## 期間入力の集計は分単位で行われる{#subtotal}

期間は時間のため集計が可能です。集計は単位が分に統一されることに注意してください。
例えば10:00 - 11:30は1時間半ですが集計上は 90(分)となります。

{{<appscreen filename="charts" title="期間のデータ（単位：分）を使って積み上げたて棒グラフを作成した例。他にも折れ線や円グラフなど自由に作成できます">}}

{{<btnCenter "/docs/manual/analytics/chart/" "報告書をグラフ化する">}}

### CSVs出力{#csv}

CSV出力時は開始時点・終了時点の2列に分けて出力されます。

<div class="excelTable">

|=|A|B|C|D|E|F|G|H|
|---|---|---|---|---|---|---|---|---|
1|提出日|【自】総稼働時間|【至】総稼働時間|【休憩】総稼働時間|【自】内停止した時間|【至】内停止した時間|【休憩】内停止した時間|業務報告
2|2023/06/13 08:44|11:00|23:00||21:10|22:00||
3|2023/06/12 08:44|14:00|19:00||18:00|18:39||
4|2023/06/09 08:44|11:11|22:22||14:00|15:00||
5|2023/06/08 08:44|08:00|22:00||15:45|19:00||停止した時間が長い

</div>

## おまけ：その他の入力方式{#hint}

時刻以外の期間入力を一覧で記載します。

{{<appscreen filename="input" title="報告書に期間入力を追加した例。いくつかのパタンーンがある">}}
