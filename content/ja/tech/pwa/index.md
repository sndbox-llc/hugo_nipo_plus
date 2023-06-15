+++
description = ""
title = "VueとRegister Service Workerを使いアプリの更新を制御する"
toc = true
tags = []
weight = 105000026
excerpt = "PWAの更新処理"
images = []
date = "2022-11-14"
+++


PWAは便利ですがその一方で正直分かりにくいというデメリットもあります。
Vueや、私の利用している[Quasar](https://quasar.dev/)などはPWAモードが予め用意されているので、プロジェクト作成時にPWAの指定をするだけで難しい処理もなく、簡単にPWAとしてアプリをビルドすることができます。
非常にありがたい一方で細かい制御のやり方が本当に分かりにくい。そしてデバッグもしにくいという罠もあります。
今回はPWAでアプリの更新が来たときに、ユーザに通知を促してアプリの更新を行ってもらう処理を埋め込むまでの紆余曲折についてまとめました。
主にQuasarを基準としていますが、純粋なVueでもほぼ同様のことが言えると思います。

## Register Service Worker

PWAとしてQuasarをビルドすると、プロジェクト直下にsrc-pwaというディレクトリが作成され、その中に「register-service-worker.js(ts)」というファイルが自動で作成されます。
中身はこんな感じでシンプルです。

```typescript

import { register } from 'register-service-worker';

// The ready(), registered(), cached(), updatefound() and updated()
// events passes a ServiceWorkerRegistration instance in their arguments.
// ServiceWorkerRegistration: https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorkerRegistration

register(process.env.SERVICE_WORKER_FILE, {
  // The registrationOptions object will be passed as the second argument
  // to ServiceWorkerContainer.register()
  // https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorkerContainer/register#Parameter

  // registrationOptions: { scope: './' },

  ready (/* registration */) {
    // console.log('Service worker is active.')
  },

  registered (/* registration */) {
    // console.log('Service worker has been registered.')
  },

  cached (/* registration */) ;{
    // console.log('Content has been cached for offline use.')
  },

  updatefound (/* registration */) {
    // console.log('New content is downloading.')
  },

  updated (/* registration */) {
    // console.log('New content is available; please refresh.')
  },

  offline () {
    // console.log('No internet connection found. App is running in offline mode.')
  },

  error (/* err */) {
    // console.error('Error during service worker registration:', err)
  }
})

```

Service Workerのそれぞれのイベントに応じて、行いたい処理を記述してあげるという感じでしょうか。
今回はアプリの更新が完了したら、ユーザにその旨を通知し、アプリを更新してもらいたいわけです。よって updatedの部分に何かしらの処理を書けば良いわけです。

## Quasar公式サイトの真似をしてみる

実はQuasarの公式Webサイトも更新通知機能が実装されており、最初はこれを真似すればよいのでは？と安易に考えていました。
Quasarの公式サイト自体がGithubに公開されているため、まずはGithubの中身を確認してみます。[そのファイルはここから見れます](https://github.com/quasarframework/quasar/blob/dev/docs/src-pwa/register-service-worker.js)
リンク先と同じコードをここにも書いておきます。ファイル名は register-service-worker.js です。（.tsではありませんでした）

```typescript

import { register } from 'register-service-worker';
import { Notify } from 'quasar';
import { mdiCached } from '@quasar/extras/mdi-v6';

register(process.env.SERVICE_WORKER_FILE, {
  updated () {
    Notify.create({
      color: 'negative',
      icon: mdiCached,
      message: 'Updated content is available. Please refresh the page.',
      timeout: 0,
      multiLine: true,
      position: 'top',
      actions: [
        {
          label: 'Refresh',
          color: 'yellow',
          handler: () => {
            window.location.reload()
          }
        },
        {
          label: 'Dismiss',
          color: 'white',
          handler: () => {}
        }
      ]
    })
  }
})
```

これとは別に、quasar.conf.jsのファイルも一部書き換えが必要です。更新が発生したときに処理を待たずに更新するような設定にします。

{{<alice pos="right" icon="default">}}
quasar.conf.jsはQuasar独自の設定ファイルです。他のフレームワークだと別のファイルになると思います
{{</alice>}}

```javascript
// quasar.conf.jsです
    // コードが長いため上の部分は省略します
    // https://v2.quasar.dev/quasar-cli-webpack/developing-pwa/configuring-pwa
    pwa: {
      workboxPluginMode: 'GenerateSW', // 'GenerateSW' or 'InjectManifest'
      // ▼この項目を追加
      workboxOptions: {
        cleanupOutdatedCaches: true,
        skipWaiting: true,
        clientsClaim: true
      },
      // ▲この項目を追加

      // for the custom service worker ONLY (/src-pwa/custom-service-worker.[js|ts])
      // if using workbox in InjectManifest mode
      // chainWebpackCustomSW (/* chain */) {},

      manifest: {
        // マニフェスト内は省略します。
      }
    },
    // コードが長いので下の部分は省略します
```

これで準備は完了。何度かのテストを行い、問題なくメッセージが表示され更新もうまくいきました。

{{<alice pos="right" icon="default">}}
PWAの効率良いデバッグ方法が知りたい・・・・なんでこんなにデバッグしにくいのかしら
{{</alice>}}

## iPadやAndroidで更新時にアプリがフリーズするトラブルが発覚

PCのブラウザであれば問題なく更新ができていたPWAですが、AndroidやiPadでPWAの更新がうまくできないことがわかりました。
[こちらの手順](/docs/system/ios/)でPWAをタブレットにインストールし、更新をテストしたところ、更新のメッセージが表示され、「後で更新」を選ぶとvue Routerが機能しなくなり、ページ遷移ができなくなります。
余談ですがiPhoneでは正常に更新ができます。（それにより発見が遅れたため悪いケースです）

色々調べてみたところ、Service Worker内ではwindowにアクセスできないようです。ただregister-service-workerを使うと色々アクセス出来るようですし、実際にPCやiPhoneでは正常に更新ができていたため、iPadOSなど特定のOSで対応していないのかもしれません。
正直原因はよくわかりませんが、問題を解決するほうが重要です。

## Service worker上ではなくVue上で更新処理を行うように修正

service workerについて調べると、とにかくよく出てくるコード。

```javascript
if (navigator.serviceWorker) {
  navigator.serviceWorker.register('/service_worker.js').then(registration => {
    // 謎の処理
  })
}
```

どうやらserviceWorkerを使うにはこのような処理を書く必要があるのだと思います。しかしregister-service-workerがこの辺を良しなに自動でやってくれているはずです。
だからこそPC版では正常に更新ができているのです。自分でこの処理を書いたら2回登録されることになってしまうのではないか？といろいろ調べて回った結果、ついに答えとなるWebサイトを発見しました。

{{<alice pos="right" icon="ok">}}
[このWebサイトこそ救世主でした](https://dev.to/drbragg/handling-service-worker-updates-in-your-vue-pwa-1pip)
{{</alice>}}

正解を先に書くと、この記事の章タイトルの通りで、「Register Servie worker上ではなくVue上で更新処理を行う」ことで、iPadなどの機器でも正常に更新が行えるようになりました。
以下、修正の具体的な例です。参考にさせていただいたサイトはVuetifyですが、私はQuasarを使っているのでQuasar基準の解答です。

### register-service-worker.jsで更新イベントを発行する

まずはregister-service-worker.js側の修正です

```javascript

import { register } from 'register-service-worker'

// The ready(), registered(), cached(), updatefound() and updated()
// events passes a ServiceWorkerRegistration instance in their arguments.
// ServiceWorkerRegistration: https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorkerRegistration

register(process.env.SERVICE_WORKER_FILE, {
  // The registrationOptions object will be passed as the second argument
  // to ServiceWorkerContainer.register()
  // https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorkerContainer/register#Parameter

  // registrationOptions: { scope: './' },

  ready (/* registration */) {
    // console.log('Service worker is active.')
  },

  registered (/* registration */) {
    // console.log('Service worker has been registered.')
  },

  cached (/* registration */) {
    // console.log('Content has been cached for offline use.')
  },

  updatefound (/* registration */) {
    // console.log('New content is downloading.')
  },
  updated(registration) {
    // ▼ここを修正しています！イベント名は参考にさせていただいたサイト様に敬意を評し、同じイベント名を使わせていただきました
    document.dispatchEvent(
      new CustomEvent('swUpdated', { detail: registration });
    )
  },
  offline () {
    // console.log('No internet connection found. App is running in offline mode.')
  },

  error (/* err */) {
    // console.error('Error during service worker registration:', err)
  }
})
```

これでService workerがUpdateになったとき、swUpdatedというイベントが発行されます。このイベントをVue側で受け取り処理を引き継ぐ感じですね

### App.vue側でswUpdateイベントを広い、更新通知を行う

Quasarのプロジェクトでは、プロジェクトフォルダ/srcの中にApp.vueというファイルがあります。
今回はこのApp.vue上でイベントを拾ってみます。

{{<alice pos="right" icon="ok">}}
App.vueは最もルートのコンポーネントなので初期化や今回のようなイベントリッスンには最適です
{{</alice>}}

App.vueは次のようになりました。短いので全文掲載します。

```vue
<template>
  <router-view />
</template>
<script lang="ts">

import { defineComponent, provide } from 'vue';
import { baseStoreKey } from 'components/provide/keys';
import BaseStore from 'components/provide/BaseStore';
import { Notify } from 'quasar';

export default defineComponent({
  name: 'App',
  setup () {
    // プロバイダーの登録
    provide(baseStoreKey, BaseStore());
    /**
     * イベント発火元はsrc-pwr/resister-service-worker.jsに記載してます
     */
    document.addEventListener('swUpdated', (e) => { updateAvailable(e as CustomEvent<ServiceWorkerRegistration>) }, { once: true })

    /**
     * Service Workerのイベントがインストール済みになったとき発動。ウインドウを強制リロードさせる
     */
    function skipWaitingListener () {
      if ('serviceWorker' in navigator) {
        let isControlled = Boolean(navigator.serviceWorker.controller);
        navigator.serviceWorker.addEventListener('controllerchange', () => {
          if (isControlled) {
            console.log('☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆Page Reload☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆');
            window.location.reload();
          } else {
            isControlled = true;
          }
        })
      }
    }
    skipWaitingListener()
    /**
     * SWイベント取得。画面更新ダイアログ
     */
    function updateAvailable (e:CustomEvent<ServiceWorkerRegistration>) {
      console.log('☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆UPDATE LV1☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆');
      console.log(e.detail.waiting);
      Notify.create({
        color: 'primary',
        message: '更新準備が整いました.繰り返し表示される場合は一度ウインドウを閉じてください',
        timeout: 0,
        multiLine: true,
        position: 'bottom-right',
        actions: [
          {
            label: '更新',
            color: 'white',
            handler: () => {
              if (e && e.detail.waiting) {
                e.detail.waiting.postMessage({ type: 'SKIP_WAITING' })
              }
            }
          },
          { label: '後で', color: 'white' }
        ]
      })
    }
  }
})

</script>
```

provideとかは今回の話題とは関係ないのでスルーしてください。ポイントは以下のコードです。

```javascript
document.addEventListener('swUpdated', (e:Event) => { updateAvailable(); }, { once: true });
```

register-service-worker.jsで発行した「swUpdated」イベントを、App.vue側で受け取ります。引数としてカスタムイベントも受け取れますが、私の場合は特に使用しませんでした。
さてこのカスタムイベントを受け取ったら更新準備が完了したということなので、あとは簡単です。
更新通知を発行してあげて、ユーザに「今すぐ更新か？あとで更新か？」を選んでもらいます。
私はQuasarが大好きなので、上のコードもQuasar独自の命令が含まれています。そう、通知をトーストで表示する「[Notify](https://quasar.dev/quasar-plugins/notify)」です。
他のフレームワークをお使いの方は、この箇所をそれぞれの通知命令に書き換えてください。

### WebpackのOptionsでskipwaitingを無効化しておくことを忘れずに

私の利用しているQuasarではWebpackの設定をquasar.conf.jsで記述します。

```javascript

workboxPluginMode: 'GenerateSW', // 'GenerateSW' or 'InjectManifest'
// workboxOptions: {}, // only for GenerateSW
workboxOptions: {
  // skipWaiting: true // この処理を無効にしておく必要がある。
},

```

ここでskipWaitingを無効にしておく必要があるので注意。これが有効だと更新通知のボタンを押そうが押すまいが、Skip-waitingが発動してしまい、VueRouterがうまくきのうしなくなります。