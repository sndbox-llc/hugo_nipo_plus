+++
url = "/legacy/parts/date/"
# aliases = []
title = "日付・時刻"
description = "日報に日付が入力ができるパーツを追加できます。カレンダーから選択して入力する他、キーボードを使って入力する方式も選択できます"
toc = true
weight = 3040
isNipo = true
[sitemap]
  changefreq = "yearly"
  priority = 0.2
+++

## 日付入力フォーム{#dateForm}

{{< callout context="tip" title="[後続のNipoPlusでも利用可能](/docs/manual/initial-setting/template/date_time/#point)です" icon="outline/note" />}}

カレンダーから日付を選んで入力したり、キーボードを使って直接日付を入力できます。
初期値が「本日」になるため、初期値を固定することができません。
なお、日報の提出日についてはテンプレートとは別に用意されているので、提出日のためにこの項目を用意する必要はありません。なお、和暦には非対応です

{{<iTablet filename="img/date" msg="日付はカレンダーから入力可能"  alice="ok">}}

### 各種出力画面{#outputDate}

[PDF出力](/legacy/manual/pdf/)とCSVに出力が可能です。
CSV出力時は次のように表示されます。

{{< excelTable >}}
ダミー, サンプル, テスト, モック, コメント
2021/12/8, 2021/12/1, 2021/12/8, 2021/12/30, \_
{{< /excelTable >}}

### 設定画面{#settingDate}

テンプレートの編集画面では次のような設定項目があります。

<dl class="basic">
  <dt>タイトル</dt>
  <dd>タイトルを編集できます。改行も扱えます</dd>
  <dt>表示形式</dt>
  <dd>常時カレンダーが表示されているレイアウトか、クリック時にカレンダーが表示されるレイアウトお好みの方式を選択してください</dd>
  <dt>プレビュー</dt>
  <dd>実際の動きが確認できます</dd>
  <dt>エラーチェックをする</dt>
  <dd>ONにすると存在しない日付（例えば12月33日)が入力されたときに警告を発します。カレンダーなどから入力する場合はエラーが発生しないうえ、無用な負荷がかかる可能性があるため、通常はOFFを推奨しています</dd>
  <dt>説明文</dt>
  <dd>日報作成者が何を書くべきか迷わないようにするために説明を付すことができます。</dd>
</dl>

---

## 時刻入力フォーム{#timeform}

{{< callout context="tip" title="[後続のNipoPlusでも利用可能](/docs/manual/initial-setting/template/date_time/#point)です" icon="outline/note" />}}

時刻入力は2種類あります。上図をご覧ください。アナログ時計から選択するやり方と、ブラウザ依存から選ぶことができます。ブラウザ依存の場合は使用するブラウザによって入力方式が変わります。
（例えばiPhoneのSafariならドラム式の入力になる）日報作成時の時刻が初期値として設定されるため、初期値の設定はできません。また、時刻パーツを連結して2つ並べると、双方の時間差を自動で計算します

{{<iTablet filename="img/time" msg="時刻を日報に添付した様子"  alice="ok">}}

### 時刻を含んだ日報の各種出力画面{#outputTime}

[PDF出力](/legacy/manual/pdf/)とCSVに出力が可能です。
CSV出力時は次のように表示されます。

{{< excelTable >}}
sample, test, mock, dummy, コメント
12:23, 11:14, 16:24, 22:06, \_
{{< /excelTable >}}

### 設定画面{#settingTime}

テンプレートの編集画面では次のような設定項目があります。

<dl class="basic">
  <dt>タイトル</dt>
  <dd>タイトルを編集できます。改行も扱えます</dd>
  <dt>表示形式</dt>
  <dd>アナログ時計の針をクリックして入力する方式か、キーボードで直接入力する方式からお選びください</dd>
  <dt>入力必須</dt>
  <dd>ONにするとHH:mm以外の形式では日報の提出ができなくなります。この機能は無料プランでは無視されます</dd>
  <dt>説明文</dt>
  <dd>日報作成者が何を書くべきか迷わないようにするために説明を付すことができます。</dd>
</dl>
