+++
url = "/tech/onauthstatechanged/"
description = "onAuthStateChangedの使い方"
# tags = ["firebase"]
title = "FirebaseのonAuthStateChangedが複数回呼ばれないように正しく使う（Vuejs3)"
toc = true
images = ["firebase-icatch.png"]
date = "2022-11-14"
code = true
[sitemap]
  changefreq = "yearly"
  priority = 0.2
+++

NipoPlusのバックエンドはFirebaseを使用しています。Firebaseではアカウントのログイン状態が変化するとonAuthStateChangedというオブザーバが変化を検知し、所定の動作を行います。
このonAuthStateChangedはアプリのどこかのタイミングでオブザーバを起動させる必要がありますが、起動させる箇所を誤ってしまうとonAuthStateChangedが複数回呼び出されることがあるため注意が必要です。

## Vue.js3でonAuthStateChangedを登録する{#register_onAuthStateChanged_in_vuejs3}

本来、このonAuthStateChangedはアプリ起動時に1回だけ起動させるのが理想です。最も親のコンポーネント上に登録すればアプリ起動時の1回だけオブザーバが登録されるため、複数回発火する心配はなくなります。
NipoPlusではこのonAuthStateChangedをログイン画面のコンポーネントに登録しています。
VueRouterで起動時は必ずこのログインコンポーネントへリダイレクトされるため、ここでオブザーバが必ず登録される仕組みです。

```javascript

import { defineComponent, ref, inject, defineAsyncComponent, computed, onBeforeUnmount } from 'vue';
import { initializeApp, getApps, getApp, FirebaseApp } from 'firebase/app';
import { useRoute, useRouter } from 'vue-router';
import { onAuthStateChanged } from 'firebase/auth';
const app = getApps().length === 0 ? initializeApp() : getApp();

/**
 * ログインコンポーネント
 */
export default defineComponent({
  name: 'PageNameLogin',
  setup () {
    /**
     * ログイン検知するオブザーバをここで登録する
     */
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // ログイン時に行いたい処理などをここに書く
        loginStart();
      }
    })
    function loginStart () {
      console.log('ログインしました！');
    }
    return {
      //
    }
  }
})

```

通常であればログイン画面は1度しか表示されないため、これでも問題なく動作します。
しかしユーザがログアウトなどを行って再びこのログインコンポーネントが呼び出されると、初回時とログアウト後の2回、onAuthStateChangedがアプリ上に起動してしまうことになります。
これで何が困るかというとログイン時にonAuthStateChangedが2回実行されてしまうわけです。上のコードの例であれば、

```javascript
loginStart();
```

このloginStart関数が2度呼び出されてしまいます。何度呼ばれても大丈夫なように冪等性を考慮して開発していれば大きな問題にはなりませんが、それでもあまり気持ちのいいものでは有りません。
なので本来はログインコンポーネントよりも更に上の最も最上位に位置するコンポーネント上でonAuthStateChangedを登録すべきですが、NipoPlusではどうしてもログインコンポーネント内でonAuthStateChangedを登録したい理由が有りました。

{{<alice pos="right" icon="default">}}
極論ログアウトしたらアプリを再起動させる処理にすれば問題は無いのですがあまりユーザに親切とは言えませんね
{{</alice>}}

## コンポーネント破壊時にonAuthStateChangedをunsubscribeする{#unsubscribe_onAuthStateChanged_on_component_destroy}

どうしてもルートコンポーネント以外でonAuthStateChangedを使う場合は、そのコンポーネント（ログインコンポーネント）が破壊されるタイミングでonAuthStateChangedのオブザーバも破壊すれば問題は解決します。
onAuthStateChangedはそれ自体がunsubscribeを返すため、起動時に変数へ格納し、コンポーネントが破壊されるタイミングでunsubscribeを行うことで何度もonAuthStateChangedが呼び出される問題が解決します。

```javascript
// ログインコンポーネントこれ
export default defineComponent({
  name: 'PageNameLogin',
  setup () {
    //ログイン検知するオブザーバをここで登録する
    cons unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        //ログイン時に行いたい処理などをここに
        loginStart();
      }
    })
    function loginStart () {
      console.log('ログインしました！');
    }
    // ログインコンポーネントが破壊されるときにonAuthStateChangedをunsubscribeする
    onBeforeUnmount(() => {
      unsubscribe();
    })

    return {
      //
    }
  }
})
```

Vueのライフサイクルでログインコンポーネントが破壊されてもonAuthStateChangedは手動でunsubscribeしない限り残り続けてしまいます。そのため手動でunsubscribeして上げる必要があります。
一見すると気づきにくい問題ですので注意しましょう。

### ログアウトの検知もできなくなるので注意{#beware_of_unable_to_detect_logout}

unsubscribeをしてしまうとonAuthStateChangedが監視を辞めてしまいます。ログアウト時にも本来発生する検知が行われなくなるため注意が必要です。

```javascript
const unsubscribe = onAuthStateChanged(auth, (user) => {
  if (user) {
    // ログイン時に行いたい処理などをここに書く
    loginStart()
  } else {
    // ここはログアウトである。ログアウト時に何かしらの後処理をここで行っている場合はunsubscribeしてしまうとこの処理が呼ばれなくなるため注意が必要
  }
})
```

NipoPlusではログアウト時の処理は別のコンポーネントが担当するため、onAuthStateChangedの監視は不要でした。そのためunsubscribeを行っても問題はありませんが、そうでない場合は注意してください。
