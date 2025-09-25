+++
url = "/docs/manual/api/report/"
title = "📄API取得のデータ構造"
menuTitle = "📄API取得のデータ構造"
description = "WebAPIで取得した日報データの構造に関する操作ガイドです"
toc = true
weight = 53030
tags = ["有料プラン限定"]

+++

普段見慣れた日報の形ではなくJSON形式で取得されます。
JSON形式は { key: value }の形で表現されたデータ構造です。

## 日報のJSON構造{#report}

| キー       | 型               | 説明                                                                                                                                                                |
| ---------- | ---------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| id         | String           | 20文字で構成されるランダムな文字列です。ユニークです(厳密には異なるが考慮の必要はない)                                                                              |
| no         | NumberまたはNull | 日報に採番された番号です。連番は日報作成後に非同期で振られるためタイミングによってはNull                                                                            |
| body       | Object           | 日報文書本体                                                                                                                                                        |
| createTs   | Number           | 13桁の数値（ミリ秒含むUnixタイムスタンプ）。日報がサーバに初回保存された時刻                                                                                        |
| updateTs   | Number           | 13桁の数値（ミリ秒含むUnixタイムスタンプ）。日報が最後に更新された時刻                                                                                              |
| userTs     | Number           | 13桁の数値（ミリ秒含むUnixタイムスタンプ）。日報作成者が指定した表示上の日時                                                                                        |
| distId     | String           | 今現在その日報を承認・棄却出来る権限のスタッフID                                                                                                                    |
| dists      | String配列       | 日報の提出先スタッフIDの配列です。配列の序列順に承認を行います。承認や棄却ができるのは上記のdistIdに一致したスタッフのみ                                            |
| observer   | String配列       | その日報を読むことができるスタッフのID郡です。承認や棄却の権限はありません。                                                                                        |
| readed     | String配列       | その日報を読んだフラグを立てたスタッフIDの配列です。承認や棄却をしたスタッフもreadedに含まれます                                                                    |
| tags       | String配列       | 日報に付けられたタグのID配列                                                                                                                                        |
| sign       | コレクション     | 承認や棄却日時を記録したコレクションです。コードで書くと sign:{ uid: string, ts: number, agree: boolean}[]です。承認した日時や承認者IDを確認可能                    |
| state      | String           | 承認・棄却・修正・新規・進行　いづれかの文字                                                                                                                        |
| owner      | String           | 日報を作成したスタッフのID。[共用](/docs/setup/staff-local/share/)を使うときに作成者IDとしてセットされる。共用を使わない場合は後述する「account」と常に同じ値が入る |
| account    | String           | 日報を作成したFirebase上のユーザID                                                                                                                                  |
| templateId | String           | その日報を作成するために使用されたテンプレートのID                                                                                                                  |
| taskId     | String           | 日報と予定を紐付けられたとき、予定のIDがセットされる                                                                                                                |

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
};
```

## タイムカードのJSON構造 {#timecard}

| キー          | 型             | 説明                                                                                   |
| ------------- | -------------- | -------------------------------------------------------------------------------------- |
| id            | String（任意） | 20文字で構成されるランダムな文字列です。ユニークです(厳密には異なるが考慮の必要はない) |
| date          | String         | 日付を表す文字列。形式は "YYYY-MM-DD"（例: "2023-03-21"）                              |
| day           | Number         | 日付のUnixタイムスタンプ（ミリ秒）。JSTの0時基準                                       |
| start         | String         | 出勤時刻。\"08:00\" のような文字列                                                     |
| end           | String         | 退勤時刻。\"17:00\" のような文字列                                                     |
| breaks        | Array<Object>  | 休憩時間の配列。各要素は `{ start: string, end: string }` 形式                         |
| redacted      | Boolean        | 編集済みフラグ。ユーザーが編集した場合 true                                            |
| isHolydayWork | Boolean        | 休日出勤フラグ。休日に勤務した場合 true                                                |
| memo          | String         | 備考欄の文字列。自由記述                                                               |
| generator     | String         | このタイムカードを作成したスタッフID                                                   |
| staffId       | String         | このタイムカードの対象スタッフのID                                                     |
| createTs      | Number         | 初回作成日時。Unixタイムスタンプ（ミリ秒）                                             |
| updateTs      | Number         | 最終更新日時。Unixタイムスタンプ（ミリ秒）                                             |
| calcData      | Object         | 下記の計算結果データ（打刻や休憩などを元に算出された集計値）                           |

### calcData の中身{#document_details}

| キー               | 型     | 説明                              |
| ------------------ | ------ | --------------------------------- |
| editStart          | String | 丸め後の出勤時刻（例: \"08:00\"） |
| editEnd            | String | 丸め後の退勤時刻（例: \"17:00\"） |
| dayWork            | Number | 日勤労働時間（分）                |
| nightWork          | Number | 夜勤労働時間（分）                |
| totalWorkTime      | Number | 実労働時間（分）。日勤＋夜勤−休憩 |
| overWorkTime       | Number | 超過労働時間（分）                |
| calcBreakTimeDay   | Number | 日勤中の休憩時間（分）            |
| calcBreakTimeNight | Number | 夜勤中の休憩時間（分）            |
| dayWorkHolyDay     | Number | 休日の日勤労働時間（分）          |
| nightWorkHolyDay   | Number | 休日の夜勤労働時間（分）          |

### 📌 備考{#columns_info}

- `calcData` はサーバ側で勤務情報から自動算出される集計値。
- `breaks` に複数の休憩時間がある場合も、`calcBreakTimeDay` や `calcBreakTimeNight` に反映されます。
- `isHolydayWork` が true のとき、`dayWorkHolyDay` や `nightWorkHolyDay` に値が入る場合があります。
- `memo` や `redacted` はユーザー操作により変更される要素です。

### タイムカードのAPIレスポンス例{#timecard_result}

```json
{
  "error": false,
  "result": {
    "data": [
      {
        "id": "vY8ovmFPaaz3z41GzKAy",
        "date": "2023-03-21",
        "breaks": [{ "start": "12:00", "end": "13:00" }],
        "redacted": false,
        "isHolydayWork": false,
        "start": "08:00",
        "generator": "mMSejOQa21d9OtXo1BtjFzrEt6J3",
        "memo": "",
        "createTs": 1679400813656,
        "end": "17:00",
        "day": 1679353200000,
        "updateTs": 1679400813656,
        "staffId": "mMSejOQa21d9OtXo1BtjFzrEt6J3",
        "calcData": {
          "calcBreakTimeDay": 60,
          "calcBreakTimeNight": 0,
          "dayWorkHolyDay": 0,
          "nightWorkHolyDay": 0,
          "dayWork": 480,
          "nightWork": 0,
          "totalWorkTime": 480,
          "overWorkTime": 0,
          "editStart": "08:00",
          "editEnd": "17:00"
        }
      }
    ],
    "count": 10,
    "totalCalc": {
      "totalWorkTime": 5040,
      "overWorkTime": 240,
      "dayWorkHolyDay": 0,
      "nightWorkHolyDay": 0,
      "dayWork": 5040,
      "nightWork": 0,
      "calcBreakTimeDay": 540,
      "calcBreakTimeNight": 0
    }
  }
}
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

| キー       | 型         | 説明                                                                                        |
| ---------- | ---------- | ------------------------------------------------------------------------------------------- |
| labelSize  | String     | 見出しの文字サイズ。label_sのような値が入る                                                 |
| label      | String     | 見出しの文字列                                                                              |
| key        | String     | 入力のデータとテンプレートを紐付けるための鍵。この値が日報本体データ上のKeyとして使用される |
| labelColor | 見出しの色 |
| req        | Boolean    | 入力必須ならTrue                                                                            |
| type       | String     | 文字入力や数値入力など、データの構造に応じた値が入る                                        |
| w          | Number     | テンプレートで専有する幅 1〜12                                                              |
| any        | any        | その他、入力フォームに応じて必要なパラメータが追加されます...                               |

### テンプレートと日報本文の対応{#map}

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

このテンプレートを使って作成された日報のBodyは次のようになります

```json
"body": {
  "N70": "やきうどん",
  "1ST": "長谷川研究員",
  "A4x": 100
}
```

テンプレート上の keyが、日報本文のキーとして使われています。
