+++
description = "CORSエラーによってCloud Functionがうまく動かなかった。その原因と解決策に奔走してしまい、３時間を無駄にしました。原因と解決策についてまとめています"
menuTitle = "Firebase CORSの回避"
tags = []
title = "FirebaseのCloud FunctionsでHttps.onRequestのCORS問題を回避"
toc = true
weight = 105000010
+++


## 静的サイトの問い合わせフォームをCloud Functionsで作ろうとしてハマる

みなさん静的サイトは作っていますか？脱Wordpressを掲げて第一弾としてNipoの姉妹アプリであるMaroudのホームページを静的サイトに作り変えました。
静的サイトとはHTMLが生成された状態でサーバに置いておくだけのWebサイトです。WordpressなどはPHPでアクセスの度ページを作成するので「動的サイト」と呼ばれます。

静的サイトのメリットとして

- セキュリティに強い（サーバにプログラムが無いため）
- 高速（サーバでの処理がなく、HTMLを返すだけだから）
- SEO対策もできる（HTMLなので）

といった点がありますが、実は無視できない大きなデメリットが１つあります。それが **「問い合わせフォームでメール送信ができない」**という問題です。  
サーバ側でメールを処理するプログラムが置けないので、問い合わせフォームに関しては別途用意しなければなりません。
今回はMaroudのWebサイトを静的サイトに切り替えたとき、問い合わせフォームの設置に思いの外苦労したことをお話します

## ホスティング先がFireBaseなので問い合わせフォームはCloud Functionsで実装したい

MaroudはアプリもWebページもFirebase上にホスティングされています。なので問い合わせフォームの処理自体もFirebase上に実装するのが一番しっくりきます。  
Firebaseのホスティングではサーバ側のプログラムを設置できないため、FirebaseのCloud Functionsを使うことになります。
ホームページからの問い合わせフォームなのでアカウントが無いユーザでも気軽に問い合わせができる状態にする必要があります。
少し調べたところ、

```javascript
functions.https.onRequest((req, res) => { 処理 }
```

という書き方が可能なことを突き止めました。[詳しくはこちら](https://firebase.google.com/docs/functions/http-events?hl=ja)。
これでかんたんにHttpのリクエストを受けてプログラムを走らせることができます。  
簡易的な問い合わせフォームには十分でしょう。メール送信などのプログラムについてはここでは触れません。

### フロントエンドではAxiosを使ってhttpリクエストを送るように作る。ここでCORS発生

フロント側では問い合わせフォームに入力された内容を元に、httpリクエストを発行します。Axiosを使って実装しました。

```javascript
async function send () {
  // 前略
  const body = {
    email: email.value,
    text: text.value
  }
  try {
    const config:AxiosRequestConfig = {
      method: 'POST',
      url: 'https://us-central1-maroud1.cloudfunctions.net/websiteInquery',
      params: body
    }
    const res = await axios(config)
    if (res.data.status === 1) {
      sendOk.value = true
      email.value = ''
      text.value = ''
    } else {
      alert('メールの送信に失敗しました。少し時間をおいてやり直してください')
    }
  } catch (e) {
    console.error(e)
  } finally {
    nowSending.value = false
  }
}
```

こんな感じですね。

はい、ここで悪名高き**CORSのエラー**が帰ってきます

```javascript
Access to XMLHttpRequest at 'https://us-central1-maroud1.cloudfunctions.net/test?email=info%40sndbox.jp&text=test' from origin 'http://localhost:3000' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.
```

公式サイトによれば、「Express使えばええやん。ExpressのCORSミドルウェアええで」と言わんばかりのマニュアルです。  
しかしWebサイトの問い合わせフォームだけのためにExpressやらCORSをインストールしたく有りません。  
Cloud Functionsはできるだけシンプルに保ちたいと思い、なにか方法が無いか調べたところ、Cloud Functionsの関数の頭に

```javascript
res.set('Access-Control-Allow-Origin', '*')
```

と書くことでいけるらしいではありませんか。

<Alice>*は全てのサイトからのアクセスを許可するので、テスト時はこれでいいけど本番では個別に指定したほうがいいかもです</Alice>

早速Cloud Functionsに追記してみました。

```javascript
export default functions.https.onRequest(async(req, res) => {
  res.set('Access-Control-Allow-Origin', '*') // 追加した１行。これでどのサイトからもリクエストできるようになる？
  // メール送信するプログラムなどをこの下にかくよ
})
```

再度リクエストすると**CORSエラー**。うん、知ってた。
しかしCURLでアクセスするとちゃんと正しくアクセスできていることが確認できました。
ブラウザのネットワークをよく見てみると、Preflightなるアクセスを先に行っており、どうもこれが原因でまたエラーが発生しているようです。

### だらだら書いても仕方ないので、結論を

とりあえず次のように書くと、CORSの問題を回避できました

```javascript
export default functions.https.onRequest(async(req, res) => {
  res.set('Access-Control-Allow-Headers', '*')
  res.set('Access-Control-Allow-Origin', '*')
  res.set('Access-Control-Allow-Methods', 'GET, HEAD, OPTIONS, POST')
  // 何かしらの処理
  res.end()
})
```

CURLでは正しくアクセスできたのに、Webブラウザからリクエストすると弾かれる問題、原因はこのPreFlightであることが濃厚です。  
PreFlight時に発生したエラーメッセージから、**Access-Control-Allow-Headers**が欠けていることがわかったのでそれを追記してあげたところ、無事に動くようになりました。  

フロントエンドの開発ばかりしているので、どうにもこのサーバ周りの話は苦手ですね。サーバの管理をしなくても開発できるようなサービスとしてFirebaseは非常に優秀ですが、今回は久しぶりにハマりました。
解決までに３時間も費やしてしまいました。参考にさせていただいたサイトたち

- [FirebaseのCloud FunctionsでCORSが~とかAccess-Control-Allow-Originが~と言われたらこれ](https://qiita.com/qrusadorz/items/40234ac0b5c5c2315cad)
- [Preflight request (プリフライトリクエスト)](https://developer.mozilla.org/ja/docs/Glossary/Preflight_request)
- [Enabling CORS in Cloud Functions for Firebase](https://stackoverflow.com/questions/42755131/enabling-cors-in-cloud-functions-for-firebase)
- [Cloud Functions for Firebase で CORS エラーを回避する](https://zenn.dev/ryo_kawamata/articles/cors-on-firebase-functions)

同じ悩みを抱えている方に少しでも役に立てればと思い記事を書きました
