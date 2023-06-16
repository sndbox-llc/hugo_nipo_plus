+++
description = "Firebase Cloud Functionsのコールドスタートに関する問題をcronで定期的に実行して回避する"
tags = ["firebase"]
title = "Cloud Functionsのコールドスタートを回避する"
toc = true
images = ["firebase-icatch.png"]
date = "2022-11-14"
[sitemap]
  changefreq = "yearly"
  priority = 0.5
+++

FirebaseのCloud Functionsは関数をクラウド上に配置できる便利な機能ですが、関数にアクセスが一定時間無いとコールドスリープに入ってしまいます。
次回実行時にコールドスタートとなるため関数の起動が体感でわかるほどに遅くなり、結構不便だったりもします。
ある程度利用者のいるサービスであれば気にする問題ではありませんが、リリースして間もないサービスやあまり利用されない関数の場合はどうしてもコールドスタートになってしまいます。

Cloud Functionsがコールドスタートにならないようにするためには定期的に関数を実行すれば良いだけです。

{{<alice pos="right" icon="here">}}
Firebaseで[Cloud Functions(第二世代)](https://firebase.google.com/docs/functions/beta)が開始されましたがまだベータ版であり、色々注意点も多くあります。
{{</alice>}}

## Cloud SchedulerとPub/subを使って定期的にCloud Functionsを実行する

定期的に関数が実行されればよいので、自動でCloud Functionsにアクセスする処理を別に走らせることで問題を解決できそうです。
FirebaseのCloud Functionsはいくつかのトリガータイプがありますが、ここでは**functions.https.onCall**の関数について対策をしました。

https.onCallは**Firebaseにログインした状態で呼び出す**ことが前提のもので、アクセス時にログイン者のUIDなどいくつかの信用できる認証情報を持っています。
JWTを取得してアクセスするような方法もあるようでしたが、個人的にはフロントのログインと同じように書ける方法のほうが好みだったのでnode.js上でFirebaseにログインし、Cloud Functionsに定期的にアクセスするような処理にしてみました。
以下、コードです。

```typescript
// ファイル名: wakeup.ts
import { initializeApp, getApps, getApp } from 'firebase/app';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import * as functions from 'firebase-functions';
import { getFunctions, httpsCallable } from 'firebase/functions';

/** Firebase API Key */
export const firebaseConfig = {
  apiKey: 'ないしょだよ',
  authDomain: 'ないしょだよ',
  projectId: 'ないしょだよ',
  storageBucket: 'ないしょだよ',
  messagingSenderId: 'ないしょだよ',
  appId: 'ないしょだよ',
  measurementId: 'ないしょだよ'
}

getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();
const auth = getAuth();

async function SignInWithPw () {
  try {
    await signInWithEmailAndPassword(auth, 'ログインに使用するメールアドレス', 'パスワード');
  } catch (e) {
    functions.logger.log('ログインに失敗');
  }
}

// timezone https://support.sas.com/documentation/cdl_alternate/ja/nlsref/67964/HTML/default/p0ratl3impx458n1r8tme646jupm.htm
/**
 * 定期実行プログラム Cloud Functionsへ定期的にアクセスしてコールドスタートになることを防ぎます。
 * 7 - 23時までの毎回5分ごとにこの関数は実行されます
 */
export default functions.pubsub.schedule('*/6 8-22 * * *').timeZone('JST').onRun(async (context) => {
  const fn = getFunctions();
  const param = { wakeup: true};
  try {
    await SignInWithPw();
    await httpsCallable(fn, '定期実行したい関数名1')(param);
    await httpsCallable(fn, '定期実行したい関数名2')(param);
    await httpsCallable(fn, '定期実行したい関数名3')(param);
  } catch (e) {
    functions.logger.log(e);
  }
})

```

さて、処理の流れですがフロントで書くFirebaseの処理とほぼ同じです。
Firebaseにログインする必要があるため、この定期タスクを実行するためのアカウントをFirebase上に登録しておく必要があります。
このFirebaseユーザでログインをする処理がsignInWithEmailAndPasswordです。（フロントと全く同じですね）

functions.https.onCall型の関数にアクセスする際は httpsCallable関数を使います。これもフロントの書き方と全く同じです。簡略のため即時実行の書き方をしています。

定期的な処理は24時間も行う必要がないため、上記の例では8:00〜22:00の間に指定しています。
サイクルは6分間に1回の実行です。
正確にコールドスリープに入る時間がわからないので目測で6分にしています。

定期的な実行は1日あたり140回ということになります。1ヶ月にしても5000回以下です。
この１サイクルで複数のCloud Functionsを実行する場合はその数だけ倍々に増えていきます。

Cloud Functionsは最初の200万回アクセスは無料なので、正直誤差レベルですね。

## Cloud schedulerに登録されていることを確認する

先程の関数はCloud functionsとして記述しています。
functions.pubsub.scheduleの記述があるCloud functionをデプロイすると自動でCloud SchedulerとPub/subにこの関数の情報が登録されるようです。
[GCPの管理画面](https://console.cloud.google.com/cloudscheduler)から登録されていることを確認できます。

{{<imgproc scheduler.png "GCPの管理画面からScherulerを表示した" />}}

同様にPub/subにも登録がされているはずです。

{{<alice pos="right" icon="here">}}
関数をGCPの管理画面から削除してもSchedulerは自動で消えなかったので注意してください
{{</alice>}}

## 定期実行される関数は特定のパラメータがきたらすぐ抜けるように修正

定期的にCloud Functionsを実行するわけですが、バカ正直に最後まで走らせる必要はありません。まぁ普通に考えればパラメータ不足などで途中でエラー終了になるパターンが多そうですが。
呼び出される側の関数で、特定のパラメータが来たらすぐに抜けるような処理を書いてあげるといいと思います。

```typescript
/** コールドスタートにしたくないCloud function。定期的に呼び出すことで問題を解決する */
export default functions.https.onCall(async(data, context) => {
  const codeHead = 'someFunctionName';
  if ('wakeup' in data) {
    // dataに wakeupというパラメータがあったら定期的な実行と判断して関数を即終了
    functions.logger.log(`朝だぞ！起きろ ${codeHead}`);
    return { msg: `${codeHead} wakeup`, result: true};
  }
  // 以下、本来の処理が続く...
})

```

## 実際に実装してみて

NipoPlusはまだ利用者がそこまで多くないため、定期的にコールドスタートが発生していました。
特に頻繁に利用されない日報をPDFに変換するような処理は高確率でコールドスタートとなっていましたが、この定期実行のおかげでコールドスタートの頻度は大幅に減ったと感じています。
6分のサイクルが適切かは正直定かではありませんが、今の所体感としてほぼ問題なさそうです。もしかしたら10分くらいでも行けるかもしれません。

今後、Firebase Cloud Functions（第二世代）が実装されたときにこの方式がそのまま使えるのか？書き換えが必要になるのか？そもそもコールドスタートという問題自体がなくなるのか？まだ不透明な部分はあります。
現状に限って言えばこの書き方でちゃんとイケてるようです。
