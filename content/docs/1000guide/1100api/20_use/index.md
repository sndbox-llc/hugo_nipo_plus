+++
url = "/docs/manual/api/ref/"
title = "APIを使いレポートやテンプレートを取得する"
menuTitle = "🤖APIを使う"
description = "WebAPIを使用してレポートやテンプレートのデータを取得する方法について解説します。APIコマンドの使用方法や、エンドポイント、パラメータの設定方法を詳しく説明しています。外部システムとの連携やデータの自動取得に最適です。"
toc = true
weight = 1120
tags = ["有料プラン限定"]
contributors = []
+++

APIの利用には少し技術者の知識が必要です。

- CURL
- JSON

このあたりの基本が理解できれば問題有りません。本ガイドはCURLを使用しています。コマンドが苦手な方は[Postman](https://www.postman.com/)などのGUIツールをご利用ください。

## APIへリクエストを投げる基本の形をレポート取得の例から見る{#sample}

```bash {frame="none"}
curl -X POST https://us-central1-nipo-plus.cloudfunctions.net/v0/【エンドポイント】 \
-H "Content-Type:application/json;charset=UTF-8" \
-H "Authorization: Bearer 【取得したAPIキー（200文字程度)】" \
-d "{ "【パラメータ1】": "【値1】", "【パラメータ2】": "【値2】" }"
```

{{< callout context="caution" title="Mac/Linux向けのCurl記法です。[Windows版](https://ascii.jp/elem/000/004/021/4021036/)は若干形式が変わる可能性があります" icon="outline/alert-triangle" />}}

【】で囲まれた部分には、独自の値を指定してください。

### 【エンドポイント】{#endpoint}

ここではレポートの取得に関するエンドポイントのみ紹介します。以下のいづれかの値を指定します。必須です。

<dl class="basic">
  <dt>reports/admin</dt>
  <dd>管理者のみ実行可能。全てのレポートを取得できるAPI</dd>
  <dt>reports/outbox</dt>
  <dd>自分が送信したレポートのデータのみ取得できるAPI</dd>
  <dt>reports/inbox</dt>
  <dd>自分が受信したレポートのデータのみ取得できるAPI</dd>
  <dt>report/:レポートのID</dt>
  <dd>IDを指定して1件のレポートを取得できるAPI</dd>
</dl>

他のエンドポイントについては本ページ末尾で解説します。

### 【パラメータ】・【値】{#param}

レポート取得に感るうパラメータを紹介します。
パラメータをセットします。**グループIDは必須**です。必要に応じて複数パラメータを指定できます。

| 属性名    | 型           | 説明                                                                                  |
| --------- | ------------ | ------------------------------------------------------------------------------------- |
| groupId   | String(必須) | 取得するグループのID                                                                  |
| size      | Number       | 取得するレポートの件数。1〜1000の間で指定します。未指定の場合は10が自動で適用されます |
| from      | String       | 期間（開始) 2022/08/01 00:00:00のような形で指定。必ずtoとセットで使用                 |
| to        | String       | 期間（終了) 2022/09/31 23:59:59のような形で指定。必ずfromとセットで使用               |
| tags      | String配列   | タグのIDを配列で指定                                                                  |
| states    | String配列   | レポートの状態で絞り込み。["承認", "棄却", "修正", "新規", "進行"]のように指定        |
| templates | String配列   | 使用したテンプレートのIDで絞り込み。テンプレートIDの配列で指定                        |
| owners    | String配列   | レポート作成者IDで絞り込み。スタッフのIDを配列で指定                                  |

### 【取得したAPIキー】{#auth}

取得したAPIキーをCurlに含めてください。長いので必ずコピーペーストして使用してください。
APIキーの取得が済んでいないかたは先にAPIキーの取得を行ってください。

{{< link-card title="APIキーの取得" description="操作ガイド" href="/docs/manual/api/key/" >}}

本ガイドではこれ以降も実際のAPIキーは使用せず解説します。

### エンドポイントとパラメータを指定した最小限のCurl{#smallest}

```bash {frame="none"}
curl -X POST https://us-central1-nipo-plus.cloudfunctions.net/v0/reports/admin \
-H "Content-Type:application/json;charset=UTF-8" \
-H "Authorization: Bearer 【取得したAPIキー】" \
-d "{"groupId": "nipodefaultgroup" }"
```

このコマンドはレポートを取得する命令を送っています。パラメータに期間の指定が無いため、直近10件のレポートがAPI経由で取得できます。

### パラメータを色々指定した実用性のあるCurl{#long_sample}

設定可能なパラメータを追加した例です。

```bash {frame="none"}
# パラメータが多いためヒアドキュメントを使っています
curl -X POST https://us-central1-nipo-plus.cloudfunctions.net/v0/reports/admin \
-H "Content-Type:application/json;charset=UTF-8" \
-H "Authorization: Bearer 【取得したAPIキー】" \
-d @- <<EOS
{
  "groupId": "nipodefaultgroup",
  "size": 1000,
  "from": "2022/08/01 00:00:00",
  "to": "2022/09/30 23:59:59",
  "tags": ["oSGoygpZYCBlldTWGewA", "bo6wwrUSVrE6UbqlJjkf"]
  "states": ["新規", "進行", "棄却"],
  "templates": ["iELPWHa3ZjXYJS62Hn3N"],
  "owners": ["mMSejOQa21d9OtXo1BtjFzrEt6J3"]
}
EOS
```

{{< callout context="note" title="見やすさを重視してヒアドキュメント（EOSの箇所）を使っています。" icon="outline/alert-circle" />}}

この例を少し詳しく見てみます

<dl class="basic">
<dt>groupId</dt>
<dd>グループIDを指定します。グループIDはグループ全般やURLから確認できます。</dd>
<dt>size</dt>
<dd>レポートを1000件リクエストしています</dd>
<dt>from・to</dt>
<dd>検索期間を2022年8月1日〜2022年9月30日に指定しています　</dd>
<dt>tags</dt>
<dd>タグによるフィルタを使う場合に指定します。タグ名ではなくタグのIDで指定します。タグのIDは<a href="/docs/manual/initial-setting/advanced-setting/tag/">タグ管理</a>から確認できます</dd>
<dt>states</dt>
<dd>レポートの状態によるフィルタを使う場合に指定します。この例では新規、進行、棄却のレポートのみを取得します（承認や修正のレポートは除外）</dd>
<dt>templates</dt>
<dd>テンプレートによるフィルタを使う場合に指定します。テンプレートIDを指定します。複数件指定できるため配列です</dd>
<dt>owners</dt>
<dd>レポートを書いたスタッフによるフィルタを使う場合に指定します。スタッフIDを指定します</dd>
</dl>

補足：URLからグループIDを確認する際はURLの意味を見てください。

```url
https://nipoplus.sndbox.jp/#/room/組織ID/グループID/__/path/to/any...
```

例えばURLが次のようなデータだった場合

```url
https://nipoplus.sndbox.jp/#/room/BLyx3SG72rId24BnKcGC/eZu8bXFNh73YtVoR83ic/teal/home/PageNameGroupSettingAbout
```

グループIDは「eZu8bXFNh73YtVoR83ic」となります。

## その他のエンドポイント{#other}

レポートの取得以外に用意されているエンドポイントとパラメータについてまとめています。

### テンプレートの取得エンドポイント{#template}

<dl class="basic">
  <dt>/templtes</dt>
  <dd>パラメータで指定したグループ内の全てのテンプレートを取得します</dd>
  <dt>/template/:テンプレートのID</dt>
  <dd>IDで指定された1件のテンプレートを取得します</dd>
</dl>

パラメータ:

| 名称    | 型     | 説明                 | 必須 |
| ------- | ------ | -------------------- | ---- |
| groupId | String | 取得するグループのID | ○    |

```bash {frame="none"}
# 記述例
curl -X POST https://us-central1-nipo-plus.cloudfunctions.net/v0/templates \
-H "Content-Type:application/json" \
-H "Authorization: Bearer 【取得したAPIキー】" \
-d "{ "groupId": "nipodefaultgroup" }"
```

### ログデータ取得エンドポイント{#log}

<dl class="basic">
<dt>/logs</dt>
<dd>ログデータを取得する</dd>
</dl>

パラメータ:

| 名称    | 型     | 説明                                                                | 必須 |
| ------- | ------ | ------------------------------------------------------------------- | ---- |
| groupId | String | 取得するグループのID                                                | ○    |
| size    | Number | 取得するレポートの件数。1〜1000の間で指定                           | ○    |
| from    | String | 取得するレポートの期間（開始点) 2022/08/01 00:00:00のような形で指定 | ○    |
| to      | string | 取得するレポートの期間（終了点) 2022/09/31 23:59:59のような形で指定 | ○    |

```bash {frame="none"}
# 記述例
curl -X POST https://us-central1-nipo-plus.cloudfunctions.net/v0/logs \
-H "Content-Type:application/json" \
-H "Authorization: Bearer 【取得したAPIキー】" \
-d "{"groupId": "nipodefaultgroup", "size": 1000, "from": "2022/08/01 10:00:00", "to": "2022/08/01 10:59:59"}"
```

### スタッフ取得エンドポイント{#staff}

<dl class="basic">
<dt>/staffs</dt>
<dd>スタッフ情報を取得する</dd>
</dl>

| 名称    | 型     | 説明                 | 必須 |
| ------- | ------ | -------------------- | ---- |
| groupId | String | 取得するグループのID | ○    |

```bash {frame="none"}
# 記述例
curl -X POST https://us-central1-nipo-plus.cloudfunctions.net/v0/staffs \
-H "Content-Type:application/json" \
-H "Authorization: Bearer 【取得したAPIキー】" \
-d "{ "groupId": "nipodefaultgroup" }"
```

### 組織全体のエンドポイント{#org}

組織全体に関する情報のためアクセスには[管理者権限](/docs/manual/initial-setting/staff/rank/)が必要です。

<dl class="basic">
  <dt>/staffs/admin</dt>
  <dd>組織に所属している全スタッフのデータを取得します</dd>
  <dt>/group/admin</dt>
  <dd>組織内に作成された全てのグループを取得します</dd>
</dl>

パラメータはありません。

```bash {frame="none"}
# 記述例
curl -X POST https://us-central1-nipo-plus.cloudfunctions.net/v0/staffs/admin \
-H "Content-Type:application/json" \
-H "Authorization: Bearer 【取得したAPIキー】" \
```

## エラーの種類と対策{#error}

WebAPIにリクエストを投げたとき、戻り値に{ error: true }がかえってきたときは何かしらのエラーが発生しています。
エラーの内容が messageプロパティにセットされていますので、メッセージを確認の上正しいパラメータを設定してください。

以下は代表的なエラーの例です

<dl class="basic">
  <dt>トークンの更新に失敗</dt>
  <dd>Bearerトークンが失効しています.<a href="/docs/manual/api/key/">APIキーの管理</a>から再度取得してください</dd>
  <dt>グループIDが不正です</dt>
  <dd>パラメータ groupIdに誤りがあります。groupIdを見直してください</dd>
  <dt>このグループに対する権限がありません</dt>
  <dd>指定したgroupIdに所属していないと権限不足が発生します。グループに所属してください</dd>
  <dt>権限が足りません</dt>
  <dd>エンドポイントの中にadminが含まれるものは管理者権限のBearerトークンでアクセスする必要があります</dd>
  <dt>日付不正</dt>
  <dd>パラメータ from / toの指定が誤っています。必ず yyyy/MM/dd hh:mm:ss の形式で指定する必要があります</dd>
  <dt>データベースアクセスエラー</dt>
  <dd>何らかの原因でデータベースへの問い合わせに失敗しました。少し時間を追いてリトライしてください</dd>
  <dt>文法に誤りがあります</dt>
  <dd>正しい文法に修正してください。json最後の , を消し忘れるなど初歩的なミスである場合が多いです</dd>
  <dt>Expected X, received Y</dt>
  <dd>パラメータが間違っています。Xの型を要求しているのにY型を渡されたという意味です。正しい型を指定してください</dd>
  <dt>Number must be less than or equal to X</dt>
  <dd>指定された数値が大きすぎます。X以下になるように指定します</dd>
</dl>
