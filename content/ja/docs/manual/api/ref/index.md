+++
description = "WebAPIを使って直接日報のデータを取得できます。CURLを使った具体的な使い方を交えて紹介"
menuTitle = "APIリファレンス"
tags = []
title = "APIリファレンス"
toc = true
weight = 101010002
contributors = []
aliases = ['/manual/api/ref/']
+++

{{<alice pos="right" icon="ok">}}
API機能は当面無償で公開しますが将来有料(月額1000円程度)になる予定です
{{</alice>}}

WebAPIは少なくともCURLやJSONあたりが理解できれば利用可能です。WebAPIを使うことで、NipoPlusを起動しなくてもコマンドを叩くだけで日報データやログデータなどを取得することができます。
取得したそれらのデータを基幹システムに取り込んだり、加工して集計や分析に使うことができます。データの出力には他にもCSV出力などがありますが、WebApiはシステムに組み込むことで自動化出来るなどのメリットがあります。

## WebAPIへリクエストを投げる基本の形

NipoPlusのWebAPIへリクエストを投げる基本の形は次のようになります。なお本ガイドではCURLを使った方法で解説します。コマンドが苦手な方は[Postman](https://www.postman.com/)などのGUIツールで検証するのもオススメです。

```sh
curl -X POST https://us-central1-nipo-plus.cloudfunctions.net/v0/【エンドポイント】 \
-H "Content-Type:application/json;charset=UTF-8" \
-H "Authorization: Bearer 【取得したAPIキー（およそ200文字程度)】" \
-d '{ "key": "value", "key2": "value2" }'
```

{{<alice pos="right" icon="here">}}
Mac/Linux向けのCurl記法です。[Windows版](https://ascii.jp/elem/000/004/021/4021036/)は若干形式が変わる可能性があるので注意
{{</alice>}}

ヘッダーのContent-Typeはapplication/jsonである必要があります。[APIキーの取得方法についてはこちら](/docs/manual/api/key/)を御覧ください。

```url
// URL
https://us-central1-nipo-plus.cloudfunctions.net/v0/
```

### 日報の取得に関するWebAPI

WebAPIを使った日報の取得は4種類用意されています。

<dl>
  <dt>/reports/admin</dt>
  <dd>管理者のみ実行可能。全ての日報を取得できるAPI</dd>
  <dt>/reports/outbox</dt>
  <dd>自分が送信した日報のデータのみ取得できるAPI</dd>
  <dt>/reports/inbox</dt>
  <dd>自分が受信した日報のデータのみ取得できるAPI</dd>
  <dt>/report/:日報のID</dt>
  <dd>IDを指定して1件の日報を取得できるAPI</dd>
</dl>


上記APIに指定可能なパラメータは次の通りです。


|属性名|型|説明|
|---|---|---|
|groupId|String(必須)|取得するグループのID|
|size|Number|取得する日報の件数。1〜1000の間で指定します。未指定の場合は10が自動で適用されます|
|from|String|期間（開始) 2022/08/01 00:00:00のような形で指定。必ずtoとセットで使用|
|to|String|期間（終了) 2022/09/31 23:59:59のような形で指定。必ずfromとセットで使用|
|tags|String配列|タグのIDを配列で指定|
|states|String配列|日報の状態で絞り込み。['承認', '棄却', '修正', '新規', '進行']のように指定|
|templates|String配列|使用したテンプレートのIDで絞り込み。テンプレートIDの配列で指定|
|owners|String配列|日報作成者IDで絞り込み。スタッフのIDを配列で指定|

{{<alice pos="right" icon="here">}}
日報取得系はいずれのAPIも**groupIdの指定必須**です
{{</alice>}}

最低限のパラメータだけ指定してリクエストを投げる例文は次のようになります。

```sh
curl -X POST https://us-central1-nipo-plus.cloudfunctions.net/v0/reports/admin \
-H "Content-Type:application/json;charset=UTF-8" \
-H "Authorization: Bearer 【取得したAPIキー（およそ200文字程度)】" \
-d '{"groupId": "nipodefaultgroup" }'
```

日付（fromとto）の指定が無い場合は直近の日報の順に取得されます。上記コマンドの場合は直近の日報10件がAPI経由で取得されます。
全パラメータを指定した記述例。見やすいようにヒアドキュメントで記述しています

```sh
# パラメータが多いためヒアドキュメントを使っています
curl -X POST https://us-central1-nipo-plus.cloudfunctions.net/v0/reports/admin \
-H "Content-Type:application/json;charset=UTF-8" \
-H "Authorization: Bearer 【取得したAPIキー（およそ200文字程度)】" \
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

この場合は条件が細かく指定されたため、上記の条件に一致する日報のみが取得されます。
取得される日報のデータは生データです。詳しくは[日報データ構造](/docs/manual/api/report/)を参照してください

#### グループIDの確認方法

いくつかの方法がありますが、最も手っ取り早く確認するにはURLを見てください。URLは次のような構造になっています

```url
https://nipo-plus.web.app/#/room/組織ID/グループID/テーマカラー/path/to/any...
```

例えばURLが次のようなデータだった場合

```url
https://nipo-plus.web.app/#/room/BLyx3SG72rId24BnKcGC/eZu8bXFNh73YtVoR83ic/teal/home/PageNameGroupSettingAbout
```

グループIDは「eZu8bXFNh73YtVoR83ic」となります。

### テンプレートの取得API

日報やチェックシートのテンプレートを取得するAPIです。２種類のAPIが用意されています。

|エンドポイント|概要|
|---|---|
|/templtes|パラメータで指定したグループ内の全てのテンプレートを取得します|
|/template/:テンプレートのID|IDで指定された1件のテンプレートを取得します|

パラメータは次のとおりです。

|名称|型|説明|必須|
|---|---|---|---|
|groupId|String|取得するグループのID|○|

{{<alice pos="right" icon="here">}}
テンプレート取得系はいずれのAPIも**groupIdの指定必須**です
{{</alice>}}

```sh
# 記述例
curl -X POST https://us-central1-nipo-plus.cloudfunctions.net/v0/templates \
-H "Content-Type:application/json" \
-H "Authorization: Bearer 【取得したAPIキー（およそ200文字程度)】" \
-d '{ "groupId": "nipodefaultgroup" }'
```

取得されるテンプレートのデータは生データです。詳しくは[日報データ構造](/docs/manual/api/report/)を参照してください。

### ログデータ取得API

エンドポイント: **/logs**

|名称|型|説明|必須|
|---|---|---|---|
|groupId|String|取得するグループのID|○|
|size|Number|取得する日報の件数。1〜1000の間で指定|○|
|from|String|取得する日報の期間（開始点) 2022/08/01 00:00:00のような形で指定|○|
|to|string|取得する日報の期間（終了点) 2022/09/31 23:59:59のような形で指定|○|

ログデータをAPIから取得できます。4つ全てのパラメータが必須です。

```sh
# 記述例
curl -X POST https://us-central1-nipo-plus.cloudfunctions.net/v0/logs \
-H "Content-Type:application/json" \
-H "Authorization: Bearer 【取得したAPIキー（およそ200文字程度)】" \
-d '{"groupId": "nipodefaultgroup", "size": 1000, "from": "2022/08/01 10:00:00", "to": "2022/08/01 10:59:59"}'
```

### スタッフのデータ取得API

特定グループ内に所属しているスタッフを取得します

エンドポイント: **/staffs**

|名称|型|説明|必須|
|---|---|---|---|
|groupId|String|取得するグループのID|○|

```sh
# 記述例
curl -X POST https://us-central1-nipo-plus.cloudfunctions.net/v0/staffs \
-H "Content-Type:application/json" \
-H "Authorization: Bearer 【取得したAPIキー（およそ200文字程度)】" \
-d '{ "groupId": "nipodefaultgroup" }'
```

### 組織全体に関するAPI

グループの上位階層に位置する組織に対するAPIがいくつか用意されています。組織全体に関する情報のため、アクセスには管理者権限が必要です。

|エンドポイント|概要|
|---|---|
|/staffs/admin|組織に所属している全スタッフのデータを取得します|
|/group/admin|組織内に作成された全てのグループを取得します|

パラメータはありません。

```sh
# 記述例
curl -X POST https://us-central1-nipo-plus.cloudfunctions.net/v0/staffs/admin \
-H "Content-Type:application/json" \
-H "Authorization: Bearer 【取得したAPIキー（およそ200文字程度)】" \
```

## その他のAPI

CSV出力など、データを加工したあとで取得できるAPIについては現在開発中です。

## エラーの種類と対策

WebAPIにリクエストを投げたとき、戻り値に{ error: true }がかえってきたときは何かしらのエラーが発生しています。
エラーの内容が messageプロパティにセットされていますので、メッセージを確認の上正しいパラメータを設定してください。

以下は代表的なエラーの例です

|メッセージ|対策|
|---|---|
|トークンの更新に失敗|Bearerトークンが失効しています。[APIキーの管理](/docs/manual/api/key/)から再度取得してください|
|グループIDが不正です|パラメータ groupIdに誤りがあります。groupIdを見直してください|
|このグループに対する権限がありません|指定したgroupIdに所属していないと権限不足が発生します。グループに所属してください|
|権限が足りません|エンドポイントの中に adminが含まれるものは管理者権限のBearerトークンでアクセスする必要があります|
|日付不正|パラメータ from / toの指定が誤っています。必ず yyyy/MM/dd hh:mm:ss の形式で指定する必要があります|
|データベースアクセスエラー|何らかの原因でデータベースへの問い合わせに失敗しました。少し時間を追いてリトライしてください|
|文法に誤りがあります|正しい文法に修正してください。json最後の , を消し忘れるなど初歩的なミスである場合が多いです|
|Expected X, received Y|パラメータが間違っています。Xの型を要求しているのにY型を渡されたという意味です。正しい型を指定してください|
|Number must be less than or equal to X|指定された数値が大きすぎます。X以下になるように指定します|
