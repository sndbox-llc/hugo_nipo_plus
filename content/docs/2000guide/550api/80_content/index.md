+++
url = "/docs/manual/api/report/"
title = "📄API取得のデータ構造"
description = "WebAPIで取得したレポートデータの構造に関する操作ガイドです"
toc = true
weight = 2580
tags = ["有料プラン限定"]
contributors = []
+++

普段見慣れたレポートの形ではなくJSON形式で取得されます。
JSON形式は { key: value }の形で表現されたデータ構造です。

## レポートのJSON構造{#report}

| キー       | 型               | 説明                                                                                                                                                                                     |
| ---------- | ---------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| id         | String           | 20文字で構成されるランダムな文字列です。ユニークです(厳密には異なるが考慮の必要はない)                                                                                                   |
| no         | NumberまたはNull | レポートに採番された番号です。連番はレポート作成後に非同期で振られるためタイミングによってはNull                                                                                         |
| body       | Object           | レポート文書本体                                                                                                                                                                         |
| createTs   | Number           | 13桁の数値（ミリ秒含むUnixタイムスタンプ）。レポートがサーバに初回保存された時刻                                                                                                         |
| updateTs   | Number           | 13桁の数値（ミリ秒含むUnixタイムスタンプ）。レポートが最後に更新された時刻                                                                                                               |
| userTs     | Number           | 13桁の数値（ミリ秒含むUnixタイムスタンプ）。レポート作成者が指定した表示上の日時                                                                                                         |
| distId     | String           | 今現在そのレポートを承認・棄却出来る権限のスタッフID                                                                                                                                     |
| dists      | String配列       | レポートの提出先スタッフIDの配列です。配列の序列順に承認を行います。承認や棄却ができるのは上記のdistIdに一致したスタッフのみ                                                             |
| observer   | String配列       | そのレポートを読むことができるスタッフのID郡です。承認や棄却の権限はありません。                                                                                                         |
| readed     | String配列       | そのレポートを読んだフラグを立てたスタッフIDの配列です。承認や棄却をしたスタッフもreadedに含まれます                                                                                     |
| tags       | String配列       | レポートに付けられたタグのID配列                                                                                                                                                         |
| sign       | コレクション     | 承認や棄却日時を記録したコレクションです。コードで書くと sign:{ uid: string, ts: number, agree: boolean}[]です。承認した日時や承認者IDを確認可能                                         |
| state      | String           | 承認・棄却・修正・新規・進行　いづれかの文字                                                                                                                                             |
| owner      | String           | レポートを作成したスタッフのID。[共用](/docs/manual/initial-setting/staff-local/share/)を使うときに作成者IDとしてセットされる。共用を使わない場合は後述する「account」と常に同じ値が入る |
| account    | String           | レポートを作成したFirebase上のユーザID                                                                                                                                                   |
| templateId | String           | そのレポートを作成するために使用されたテンプレートのID                                                                                                                                   |
| taskId     | String           | レポートと予定を紐付けられたとき、予定のIDがセットされる                                                                                                                                 |

以下は実際にAPIを使ってロードしたレポートのデータのサンプルです。

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
};
```

## テンプレートのJSON構造{#template}

| キー   | 型         | 説明                                                       |
| ------ | ---------- | ---------------------------------------------------------- |
| ts     | Number     | テンプレートが作成された日（ミリ秒含むUnixタイムスタンプ） |
| prefix | String     | 文書番号の前に付される記号。初期値は"No."                  |
| active | Boolean    | テンプレートが有効な場合はTrue。無効にするとFalse          |
| memo   | String     | テンプレート自体に付されたメモ。初期値は"テンプレートメモ" |
| name   | String     | テンプレートの大見出し                                     |
| noruma | Number?    | １日あたりの提出枚数目安。初期値は0                        |
| id     | String     | テンプレートのID                                           |
| tags   | String[]   | テンプレートに付与したタグのID                             |
| body   | Collection | テンプレートの本体とも言える項目。詳細は次章               |

### テンプレート内のBody構造{#body}

Bodyはテンプレートの入力フォームを束ねたオブジェクトでCollection（オブジェクトの配列）の構造をしています

| キー       | 型         | 説明                                                                                            |
| ---------- | ---------- | ----------------------------------------------------------------------------------------------- |
| labelSize  | String     | 見出しの文字サイズ。label_sのような値が入る                                                     |
| label      | String     | 見出しの文字列                                                                                  |
| key        | String     | 入力のデータとテンプレートを紐付けるための鍵。この値がレポート本体データ上のKeyとして使用される |
| labelColor | 見出しの色 |
| req        | Boolean    | 入力必須ならTrue                                                                                |
| type       | String     | 文字入力や数値入力など、データの構造に応じた値が入る                                            |
| w          | Number     | テンプレートで専有する幅 1〜12                                                                  |
| any        | any        | その他、入力フォームに応じて必要なパラメータが追加されます...                                   |

### テンプレートとレポート本文の対応{#map}

例えば次のようなテンプレートがあったとします。説明のためBodyのみで、かつ内容も大幅に簡略化しています。

```json
"body": [
  {
      "label": "今日の夜食",
      "key": "N70",
      "type": "text",
      "w": 4
  },
  {
      "label": "担当職員名",
      "key": "1ST",
      "type": "text",
      "w": 4
  },
  {
    "label": "スコア",
    "key": "A4x",
    "type": "number",
    "w": 4
  }
]
```

このテンプレートを使って作成されたレポートのBodyは次のようになります

```json
"body": {
  "N70": "やきうどん",
  "1ST": "長谷川研究員",
  "A4x": 100
}
```

テンプレート上の keyが、レポート本文のキーとして使われています。
