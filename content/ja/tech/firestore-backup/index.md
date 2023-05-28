+++
description = "長いことFirestoreはバックアップ機能を提供してきませんでした。この度Firebase公式のバックアップ手順が紹介されたため実際に導入してみたときの記事です"
menuTitle = "FireStoreのバックアップ"
tags = ["firebase"]
title = "Firestoreのデータバックアップを自動で行う一番簡単なやり方"
toc = true
weight = 105000011
contributors = []
excerpt = 'FireStoreのバックアップ'
images = ['firebase-icatch.png']
date = "2022-11-14"
lastmod = "2022-11-14"
pinned = false
homepage = false
+++


## FireStoreのバックアップ機能は最近やっとまともに実装されました

データベースのバックアップはとても重要です。万が一プログラムのバグでデータが消えたり、クラッキングによりデータが破壊、改ざんされたとき、復元するための命綱として、バックアップは必ず取らなければなりません。
FireStoreはちょっと前までβ版だっただけあって、正式なバックアップツールは用意されてきませんでした。しかしバックアップをせずにシステム稼働させるわけには行かないため、様々な人が独自に動きバックアップの方法を模索、実装してきました。
正式に公式サイトからFireStoreのバックアップツールが用意されたのは記憶に新しいです。

### 初めて公式が用意したFireStoreのバックアップツール

Firestoreのバックアップツールとして最初に用意されたのが

```bash
gcloud alpha firestore export gs://firestore-export
```

というエクスポートコマンドでした。その後にalphaからbetaに変わり

```bash
gcloud beta firestore export gs://fs-export
```

となりましたが、特段大きな違いはありません。 cronで自動実行させるなど色々錯誤しましたが今はそんなことする必要はありません。  
公式サイトからより良いバックアップ方法が用意されたのです

## FireStoreのデータを決まった時間に自動でバックアップ

Cloud Functionsを使った自動バックアップ方法です。詳しくは[公式サイト](https://firebase.google.com/docs/firestore/solutions/schedule-export?hl=ja)に記載があります。  
ただ、Firestoreの公式マニュアルってちょっと不親切なんですよね。説明を端折っていたりわかる前提で話が進むので、不慣れな人にとっては結構鬼門です。

### Firestoreのバックアップ先となるバケットを用意する

GCPの管理画面（ストレージ）を開き、バケットを１つこしらえましょう。  
ここで注意するべき点は、バケットのリージョンにusを指定するということです。Asia/Tokyoにすると自動バックアップは失敗しますので注意してください。

<dl>
  <dt>バケットの名前</dt>
  <dd>わかりやすいものが良いでしょう。xxxx-backupとかそんなんでいいと思います。ここで指定した名前は次の章で利用するので控えておきましょう</dd>
  <dt>ロケーションのタイプ</dt>
  <dd>私はMulti Regionを選びました。ロケーションにUSを必ず選択してください</dd>
  <dt>ストレージクラス</dt>
  <dd>用途に合わせて選べばいいと思う</dd>
  <dt>アクセス制御</dt>
  <dd>[均一]を 選択しましたがどちらでも行けると思います。</dd>
</dl>

### Cloud Functionsのコード紹介

Cloud functionsはこんなかんじ

<Alice>どうやらNodeJSのバージョンが10にあがるとエラーで動かなくなるようです。下のコードはNode10にも対応したバージョンです(2020/12/18修正)</Alice>

```typescript
// 【index.ts】
import * as functions from 'firebase-functions'
import * as API from './api' // これはFirestoreのコンソールから引っ張ってくる情報です

const firestore = require('@google-cloud/firestore')
const client = new firestore.v1.FirestoreAdminClient()

const admin = require('firebase-admin')

admin.initializeApp({
  credential: admin.credential.cert(API),
  databaseURL: 'hogehogemogemogefugafuga'
})

// 分 時 日 月 曜日 の順に指定します。cronと一緒。米国時間なので注意してね！
exports.backupPubSub = functions.pubsub.schedule('30 15 * * *').onRun((context) => {
  const projectId = process.env.GCP_PROJECT || process.env.GCLOUD_PROJECT
　const databaseName = client.databasePath(projectId, '(default)')
  const bucket = 'gs://さきほど指定したバケットの名前'
  return client.exportDocuments({
    name: databaseName,
    outputUriPrefix: bucket,
    collectionIds: []
  })
  .then((responses: any[]) => {
    const response = responses[0]
    console.log(`Operation Name: ${response['name']}`)
    return response
  })
  .catch((err: any) => {
    console.error(err)
    throw new Error('Export operation failed')
  })
})
```

いわゆるクラウドファンクションです。ついで依存関係はこんな感じ(こういう情報は公式が書いてくれないので公式は不親切です）

```javascript
{
  "name": "functions",
  "scripts": {
    "lint": "tslint --project tsconfig.json",
    "build": "tsc",
    "serve": "npm run build && firebase serve --only functions",
    "shell": "npm run build && firebase functions:shell",
    "start": "npm run shell",
    "deploy": "firebase deploy --only functions",
    "logs": "firebase functions:log"
  },
  "main": "lib/index.js",
  "dependencies": {
    "@google-cloud/firestore": "^2.6.1",
    "firebase-admin": "~8.8.0",
    "firebase-functions": "^3.3.0"
  },
  "devDependencies": {
    "tslint": "^5.20.1",
    "typescript": "^3.7.3"
  },
  "engines": {
    "node": "8"
  },
  "private": true
}
```

これをクラウドファンクションとして登録してください。

```bash
firestore deploy –only functions
```

というお決まりのコマンドですね。登録完了するとGCPの[クラウドスケジューラ](https://cloud.google.com/scheduler/?hl=ja)という画面に先程追加した関数が追加されています

{{<imgproc pubsub.png "GCP Cloud Pubsubの画面。「今すぐ実行」を押すと予定時刻を待たずに動作確認ができるので便利です" />}}

### アクセス権限を設定する

PROJECT_ID を実際のプロジェクトIDに置き換えて、コンソールから次のコマンドを打ち込みます

```bash
gcloud projects add-iam-policy-bindingPROJECT_ID \
   --member serviceAccount:PROJECT_ID@appspot.gserviceaccount.com\
   --role roles/datastore.importExportAdmin
```

```bash
gsutil iam ch serviceAccount:PROJECT_ID@appspot.gserviceaccount.com:admin\
    gs://BUCKET_NAME
```

このあたりについては公式サイト：[アクセス権限を設定する](https://firebase.google.com/docs/firestore/solutions/schedule-export?hl=ja#configure_access_permissions)のほうがわかりやすいのでそちらも参照してください

### バックアップファイルがバケットに保存されるか確認する

最後にきちんとバケットにバックアップが書き出されているか確認してみましょう

{{<imgproc gcp_storage.png "GCPのバケット確認画面" />}}

### うまく動かないとき

エラーメッセージを確認してみましょう。エラーメッセージはFireBaseのクラウドファンクション上で確認ができます。  
この手のエラーではおそらく、**アクセス権限不足による失敗**が多いと思います

## サーバ不要で自動バックアップも取れるのでこのやり方おすすめです

わざわざCron用にサーバを建てる必要がないのはとても便利ですね。  
公式サイトの情報ですので、一番良いやり方だと思います。まだ

```bash
gcloud aplha
```

とコマンド叩いている人、重い腰を上げて今こそバックアップを自動化しましょう

<Alice>ただしバックアップは１件につき１アクセスとカウントされるため、費用が結構掛かる可能性があります</Alice>
