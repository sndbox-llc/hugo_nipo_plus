+++
description = "日報データをAPIで取得する"
menuTitle = "日報データをAPIで取得する"
tags = []
title = "日報データをAPIで取得する"
toc = false
weight = 20
+++

NipoPlusで作成された日報の生データは次のようなJSON形式で構成されています。

|キー|型|説明|
|---|---|---|
|id|String|20文字で構成されるランダムな文字列です。ユニークです(厳密には異なるが考慮の必要はない)|
|no|NumberまたはNull|日報に採番された番号です。連番は日報作成後に非同期で振られるためタイミングによってはNull|
|body|Object|日報文書本体|
|createTs|Number|13桁の数値（ミリ秒含むUnixタイムスタンプ）。日報がサーバに初回保存された時刻|
|updateTs|Number|13桁の数値（ミリ秒含むUnixタイムスタンプ）。日報が最後に更新された時刻|
|userTs|Number|13桁の数値（ミリ秒含むUnixタイムスタンプ）。日報作成者が指定した表示上の日時|
|distId|String|今現在その日報を承認・棄却出来る権限のスタッフID|
|dists|String配列|日報の提出先スタッフIDの配列です。配列の序列順に承認を行います。承認や棄却ができるのは上記のdistIdに一致したスタッフのみ|
|observer|String配列|その日報を読むことができるスタッフのID郡です。承認や棄却の権限はありません。|
|readed|String配列|その日報を読んだフラグを立てたスタッフIDの配列です。承認や棄却をしたスタッフもreadedに含まれます|
|tags|String配列|日報に付けられたタグのID配列|
|sign|コレクション|承認や棄却日時を記録したコレクションです。コードで書くと sign:{ uid: string, ts: number, agree: boolean}[]です。承認した日時や承認者IDを確認可能|
|state|String|承認・棄却・修正・新規・進行　いづれかの文字|
|owner|String|日報を作成したスタッフのID。[共用](/org/groupsetting/share/)を使うときに作成者IDとしてセットされる。共用を使わない場合は後述する「account」と常に同じ値が入る|
|account|String|日報を作成したFirebase上のユーザID|
|templateId|String|その日報を作成するために使用された日報テンプレートのID|
|taskId|String|日報とタスクを紐付けられたとき、タスクのIDガセットされる|

以下は実際にAPIを使ってロードした日報のデータのサンプルです。

```javascript
{
  "readed": ["mMSejOQa21d9OtXo1BtjFzrEt6J3"],
  "id": "V9MGSesp0LUgXUPo0Skv",
  "taskId": "none",
  "no": 3,
  "tags": [],
  "owner": "mMSejOQa21d9OtXo1BtjFzrEt6J3",
  "updateTs": 1659400505426,
  "account": "mMSejOQa21d9OtXo1BtjFzrEt6J3",
  "templateId": "uDE74jrGtn90vZZqsaci",
  "distId": "mMSejOQa21d9OtXo1BtjFzrEt6J3",
  "userTs": 1659400505425,
  "sign": [],
  "createTs": 1659400505426,
  "body": {
    "B2x": "あお",
    "SAl": ["いちご","ごはん","餃子","干瓢"],
    "1ST": ["餃子","うどん","焼きそば","牛乳","ごはん"],
    "N70": ["いちご","干瓢","メロン"],
    "iif": "あか"
  },
  "observer": ["mMSejOQa21d9OtXo1BtjFzrEt6J3"],
  "dists": ["mMSejOQa21d9OtXo1BtjFzrEt6J3"],
  "state": "新規"
}
```
