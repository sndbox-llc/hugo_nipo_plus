+++
url = "/tech/gapi/"
title = "Vue.js（ts）でGoogle API(gapi)を使いカレンダーを取得するまで"
description = "GAPIを使うまでの流れ"
toc = true
date = "2022-11-14"
# tags = []
# images = []
+++

Vue js上でGoogleカレンダーのデータを取得して表示しようと思いましたが思いの外苦労しました。
環境はVue.js(Composition API）＋TypeScriptです。フレームワークは Quasarを使用しています。

## gapiよ、なぜ君はnode moduleに登録されていないのか？{#gapi}

今どきのフロントエンジニアっ子はyarn addとか、npm installって叩くだけでその機能が追加できるnode moduleに慣れきっています。逆に、

```html
<script src="””"></script>
```

なんて書き方は駄目なのです。Google APIは[GitHub](https://github.com/google/google-api-javascript-client)に公開さているので、yarn　の一文を探すも見当たりません。マニュアルには

```html
<script src="https://apis.google.com/js/api.js"></script>
```

そう、まさかの 「scriptタグ」で取り込むスタイルなのでした。

```bash {frame="none"}
yarn add // または npm install
```

に慣れきってしまった私はどうしていいかわかりませんでした。この衝撃、例えるなら今どきの若い子にフィルムカメラを渡すようなものです。

node_moduleとしてインストールできない以上、マニュアルに従いScriptタグで取り込むしかありません。

一応[Vue向けのGapi](https://github.com/vue-gapi/vue-gapi)もありましたがあまり活発な開発とは言えず、
またVue3への移行も検討している中で余計な依存は増やしたくないため、今回は見送りました

## VueJSでGapiを使えるようにしよう{#vue_use_gapi}

index.htmlのヘッダーで

```html
<script src="https://apis.google.com/js/api.js"></script>
```

と書いてもいいのですが、カレンダーのページでしか使わないので今回はCalendar.vueファイル内で呼び出すことにしました。
色々調べたところによると、**onMountedの中でscriptタグを生成してDOMに追加する**ことで使えるようです。

DOMの操作がやりたくないからVueを使うのですが今回は仕方ないですね。

ということでコード

```html
<template>
  <div>
    <p>Google Calendar API Quickstart</p>
    <p id="content">p</p>
  </div>
</template>
```

```javascript

<script lang='ts'>
import { defineComponent, onMounted } from '@vue/composition-api';
export default defineComponent({
  setup () {
    onMounted(() => {
      const script = document.createElement('script');
      script.src = 'https://apis.google.com/js/api.js';
      script.onreadystatechange = script.onload = function () {
        console.log('ロードできた！');
      }
      document.head.appendChild(script);
    })
    return {
    }
  }
})
</script>
```

こんな感じで書くらしい。そして読み込みが終わると、いつのまにかgapiというオブジェクトが使えるようになるのです。

```javascript
function test() {
  console.log('すたーと')
  gapi.load('client:auth2', initClient)
}
```

宣言してないのにいきなり使えるわけで、当然TypeScriptの姉御からはどえらいクレームが入ります。
当然ですよね・・・わたしも文句言いたいです。どこから生えてきたのそのgapiは？誰が使っていいっていったの？はい、おっしゃるとおり

## TypeScriptにGapiを認識させるまでの流れ{#how_to_use_gapi}

gapiの型定義は、いつもの型定義郡からダウンロードできます。gapiの型定義はかなり細分化されて公開されているようでした。今回私が必要だったのは、

- [gapi本体の型定義](https://www.npmjs.com/package/@types/gapi)
- [gapi-Auth2の型定義](https://www.npmjs.com/package/@types/gapi.auth2)
- [gapi-Calenarの型定義](https://www.npmjs.com/package/@types/gapi.calendar)

の3つです。これらをそれぞれインストールします。このインストール自体はおなじみの npm install でできるのでかんたんです。
インストールした型定義を使うために、少し工夫が必要なようです。まず、tsconfig.jsonを開き、次の文を追記します

```javascript
"compilerOptions": {
  "types": [
    "gapi", "gapi.auth2", "gapi.calendar"
  ]
}
```

compilerOptionsの中に、typesという配列を追加し、そこにgapiを書き込みます。gapiを使うVueファイルの中で、次の文を追記します

```javascript
import { defineComponent, onMounted } from '@vue/composition-api';
  // ▼ スラッシュ3こはこのまま維持する必要があるようです。またパスは相対のため、この例と異なる場合があります
  /// <reference path="../../node_modules/@types/gapi/index.d.ts" />

  export default defineComponent({
})
</script>
```

なかなか見慣れない書き方ですが、TypeScriptの公式にもかいてありました。さて、これでgapiに型が付くようになります。

{{<figure src="gapi_type.png"  alt="GAPIの型定義がVSCode上で認識された" caption="GAPIの型定義がVSCode上で認識された" >}}

## gapi is not definedを回避するためのdeclare{#fixed_declare}

さて、gapiに型が当たりましたがgapi自体はVue上に定義されていません。それもそのはずで、

```html
<script src="””"></script>
```

から直接やってくるのですから、未定義として怒られるのは当然です。
この問題を解決するためにTypeScriptにはdeclareという構文が用意されています。これを書けばundefinedの問題は解決できます。

```javascript
declare const gapi: gapi
```

これで良さそうに思いますが、どうもうまくいきません。そもそもgapiはnamespaceとして定義されているらしく、この書き方はできないようです。
せっかく型が決まったのにdeclareを書くとまたany型になってしまいました。

{{<figure src="gapi_any.png"  alt="declareで宣言するとgapiのタイプがanyになってしまう" caption="declareで宣言するとgapiのタイプがanyになってしまう" >}}

色々試行錯誤しましたが、とりあえず次のように書くことでTypeScriptさんを説得します。

```javascript
// eslint-disable-next-line @typescript-eslint/no-namespace
declare namespace gapi {}
```

正しい書き方かどうかはわかりませんが、これでエラーも消え、型もちゃんと持つようになりました。
最後にコード全文をのせておきます。書きかけのコードでゴミデータも混ざっていますがご了承ください。
とりあえず動かし方を確認したかっただけなので、かなり荒削りです。なお、コードの元ネタは[Google公式のサンプル](https://developers.google.com/calendar/api/quickstart/js)をベースにして、VueJS風に少しアレンジしたものです。

```html
<template>
  <div>
    <p>Google Calendar API Quickstart</p>

    <p id="content">ここに予定をだす</p>
    <button @click="handleAuthClick()">ログインボタン</button>
    <button @click="handleSignoutClick()">ログアウトボタン</button>
    <button @click="test()">初期化ボタン。あとで自動化する</button>
  </div>
</template>
```

```javascript

<script lang='ts'>
import { defineComponent, onMounted } from '@vue/composition-api';
/// <reference path="../../../node_modules/@types/gapi/index.d.ts" />

// eslint-disable-next-line @typescript-eslint/no-namespace
declare namespace gapi {}
export default defineComponent({
  setup () {
    const CLIENT_ID = '長い文字ぷらす.apps.googleusercontent.com';
    const API_KEY = 'あなたのAPI-KEYをいれてね';
    const DISCOVERY_DOCS = ['https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest'];
    const SCOPES = 'https://www.googleapis.com/auth/calendar.readonly';
    const calendarID = 'primary';

    function test () {
      console.log('すたーと');
      gapi.load('client:auth2', initClient);
    }
    function initClient () {
      console.log('わん');

      gapi.client.init({
        apiKey: API_KEY,
        clientId: CLIENT_ID,
        discoveryDocs: DISCOVERY_DOCS,
        scope: SCOPES
      }).then(function () {
        console.log('ひゃあああ');
        // Listen for sign-in state changes.
        gapi.auth2.getAuthInstance().isSignedIn.listen(updateSigninStatus);
        // Handle the initial sign-in state.
        updateSigninStatus(gapi.auth2.getAuthInstance().isSignedIn.get());
      }, function (error) {
        console.log('えらあああ', error);
        appendPre(JSON.stringify(error, null, 2));
      })
    }
    function updateSigninStatus (isSignedIn:boolean) {
      console.log('あぷらでーとしぐんすてーたす', isSignedIn);
      if (isSignedIn) {
        listUpcomingEvents();
      }
    }
    function handleAuthClick () {
      // const user = gapi.auth2.getAuthInstance()
      console.log(user);
      gapi.auth2.getAuthInstance().signIn().catch(e => { console.error(e) })
    }
    function handleSignoutClick () {
      console.log('ろぐあーうと', gapi);
      gapi.auth2.getAuthInstance().signOut();
    }
    function appendPre (message) {
      const pre = document.getElementById('content');
      const textContent = document.createTextNode(message + '\n');
      pre.appendChild(textContent);
    }
    function listUpcomingEvents () {
      console.log('イベントとってくるでー');
      gapi.client.calendar.events.list({
        calendarId: calendarID,
        timeMin: (new Date()).toISOString(),
        showDeleted: false,
        singleEvents: true,
        maxResults: 10,
        orderBy: 'startTime'
      }).then(function (response) {
        console.log(response);
        const events = response.result.items;
        appendPre('Upcoming events:');

        if (events.length > 0) {
          for (let i = 0; i < events.length; i++) {
            const event = events[i];
            let when = event.start.dateTime;
            if (!when) {
              when = event.start.date;
            }
            appendPre(event.summary + ' (' + when + ')');
          }
        } else {
          appendPre('No upcoming events found.');
        }
      })
    }
    onMounted(() => {
      const script = document.createElement('script')
      script.src = 'https://apis.google.com/js/api.js'
      // script.setAttribute('src', 'https://apis.google.com/js/api.js')
      script.onreadystatechange = script.onload = function () {
        console.log('ろーどずみ');
      }

      document.head.appendChild(script);
    })
    return {
      handleAuthClick,
      handleSignoutClick,
      test
    }
  }
})
</script>

```

グーグルに認証を通してログインすると、ログイン中のユーザのカレンダー予定が画面に表示されます。なおAPI Keyの取得やCliantIDの作成は[Google Developer Console](https://console.cloud.google.com/)から行います。

## front endで実装するべきか、サーバ側で実装するべきか？{#question}

ここまでの例はすべてフロントで完結するプログラムです。色々調べて見るとnodeJSのgapiも用意されているようです。
FirebaseであればCloud functionsで実装できそうな雰囲気がありますね。認証Tokenのリフレッシュが必要だったりTokenを保存する仕組みだったりと色々宿題もたくさんありますが。
1名で使うサービスであればフロントで十分かな？と思いますがグループでカレンダーを共有したい場合はサーバ側で実装しないと現実的に難しそうですね。
