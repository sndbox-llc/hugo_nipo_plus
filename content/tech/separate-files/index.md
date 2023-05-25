+++
description = "Cloud Functionはサーバで実行できる関数で、フロントに出しては行けない情報を処理するときに使います。コードの量が増えると可読性が悪くなるため関数ごとにファイルに分割する方法について紹介します"
menuTitle = "Cloud Functionsのファイル分割"
tags = []
title = "肥大化するCloud Functionsのファイルを複数のTsファイルに分ければメンテナンスもしやすい"
toc = true
weight = 105000016
contributors = []
+++



## FirebaseにおけるCloud Functions

Cloud Functionsはアクセスが有ったときだけ動くサーバのようなものだと勝手に解釈しています。通常のサーバと違い、稼働しっぱなしではなく機能が呼ばれたときだけ課金の対象になる点がとてもユニークです.  
サーバから実行されるので、厳重に管理しなければならない処理はCloud Functionsにおまかせです。例えばそうですね、Nipoの例であれば、

- クレジットカード決済
- 新着日報お知らせメールの送信
- Firestoreに書き込まれたデータをTypeSenseに動悸させる処理

などをクラウドファンクションで実行しています。

### 見逃しちゃいけないポイント！Cloud Functionsはセキュリティルールを素通りできます

クライアントから実行するとセキュリティルールの制限を受けます。しかしクラウドファンクションではセキュリティルールを通り越して処理ができます。  
もちろんメリットも大きいですが悪用されないように開発には細心の注意を払う必要があります。

## Cloud Functionsはindex.tsに書きましょう

そんな便利なクラウドファンクションは、index.tsに処理を記述していきます。記述するとこんな感じ

```typescript
import * as functions from 'firebase-functions'
const admin = require('firebase-admin')

const firebaseKey = {
  'type': 'service_account',
  'project_id': 'さんぷる',
  'private_key_id': '長い桁の鍵',
  'private_key': '長い桁の鍵',
  'client_email': 'さんぷる',
  'client_id': 'さんぷる',
  'auth_uri': 'さんぷる',
  'token_uri': 'さんぷる',
  'auth_provider_x509_cert_url': 'さんぷる',
  'client_x509_cert_url': 'さんぷる'
}

admin.initializeApp({
  credential: admin.credential.cert(firebaseKey),
  databaseURL: 'https://salonkarte-87b6a.firebaseio.com'
})
// ↑ここまではほぼ定型文

// 例えばデータが追加されたらカウントアップするサンプルクラウドファンクション
// カウンターみたいな処理もクラウドファンクションに任せたほうがいいかも
exports.addDataCounter = functions.firestore.document('user/{userId}/data/{dataId}').onCreate(async (snap, context) => {
  const userId = context.params.userId
  const ref = await admin.firestore().collection('user').doc(userId).collection('lock').doc('state').get()
  if (ref.exists) {
    let currentCnt = ref.data().dataCnt
    currentCnt = currentCnt + 1
    admin.firestore().collection('user').doc(userId).collection('lock').doc('state').update({ dataCnt: currentCnt})
  } else {
    admin.firestore().collection('user').doc(userId).collection('lock').doc('state').set({ dataCnt: 1})
  }
})
```

上は簡単なクラウドファンクションのサンプルコードです（TypeScript）
addDataCounterの行が実際の処理となる部分です。このサンプルはデータが書き込まれたらカウントと＋１するというものです。
（RMDBの畑から来ると、count関数で集計すればいいと思うかもしれませんがFirestoreはNoSQLなのでそういう処理が苦手です。そのためカウンタを自前で用意したほうが色々便利です）
あとはやりたい処理を書き連ねていくだけです。

```javascript
exports.関数名 = functions.firestore.document(‘監視対象Path’) .onCreate({ 処理 })
```

仕組みは非常にシンプルです。exportsで指定された関数の数だけクラウドファンクションに登録されます。しかしシステムは次から次へと新たしい要望が出てきます。するとクラウドファンクションもあっという間に膨大な行数へ豹変します。
300行を過ぎたくらいから、スクロールするのがだるくなります。600行を超えたあたりから危機感を覚えます。そう、「ファイル分割」しないとまずいぞ。と

## クラウドファンクションのファイルを関数単位で分けよう

普通に考えれば１つのファイルにすべての処理を書くのは得策ではありませんが、公式サイトにはなぜかクラウドファンクションのファイルを分割する方法が書かれていません。Nipoの開発を始めた当時はこの辺の情報が結構少なく、さらにクラウドファンクション自体がβ版でした。（今は正式版です）

さて、クラウドファンクションの関数を１つのファイルに切り出してみましょう。注意点としては、

```javascript
admin.initializeApp
```

この処理は１回しか呼び出せません。複数回呼び出すとエラーで落ちます。

先程のサンプルコードを例に、addDataCounterを別のファイル（myCounter.ts）に切り分けてみましょう。

```typescript
// 【index.ts】
import * as functions from 'firebase-functions'
import * as myCounter from './myCounter' // 追記
const admin = require('firebase-admin')

const firebaseKey = {
  'type': 'service_account',
  'project_id': 'さんぷる',
  'private_key_id': '長い桁の鍵',
  'private_key': '長い桁の鍵',
  'client_email': 'さんぷる',
  'client_id': 'さんぷる',
  'auth_uri': 'さんぷる',
  'token_uri': 'さんぷる',
  'auth_provider_x509_cert_url': 'さんぷる',
  'client_x509_cert_url': 'さんぷる'
}

admin.initializeApp({
  credential: admin.credential.cert(firebaseKey),
  databaseURL: 'https://salonkarte-87b6a.firebaseio.com'
})
// ↑ここまではほぼ定型文
// ↓ここが追記されます
module.exports = {
  myCounter
}
```

続いて分割された側のファイルコードはこちら

```typescript
// 【myCounter.ts】
import * as functions from 'firebase-functions'
import * as admin from 'firebase-admin'

// 例えばデータが追加されたらカウントアップするサンプルクラウドファンクション
// カウンターみたいな処理もクラウドファンクションに任せたほうがいいかも
export default functions.firestore.document('user/{userId}/data/{dataId}').onCreate(async (snap, context) => {
  const userId = context.params.userId
  const ref = await admin.firestore().collection('user').doc(userId).collection('lock').doc('state').get()
  if (ref.exists) {
    let currentCnt = ref.data().dataCnt
    currentCnt = currentCnt + 1
    admin.firestore().collection('user').doc(userId).collection('lock').doc('state').update({ dataCnt: currentCnt})
  } else {
    admin.firestore().collection('user').doc(userId).collection('lock').doc('state').set({ dataCnt: 1})
  }
})
```

このように無事ファイルを分けることができました。めでたしめでたし。

{{<alice pos="right" icon="ok">}}
ファイルの分け方はいくつかあるようです。私はこのやり方ですが必ずしもこれが正解とは限りません。自分流にアレンジしてください
{{</alice>}}
