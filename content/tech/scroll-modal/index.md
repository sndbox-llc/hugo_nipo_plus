+++
url = "/tech/scroll-modal/"
description = "Javascriptで特定のDOM要素までスクロールさせる処理（Modal内）について"
title = "QuasarのQ-Dialog内で目的の場所へスクロールさせる処理を書く"
toc = true
# tags = []
# images = []
date = "2022-11-14"
code = true
[sitemap]
  changefreq = "yearly"
  priority = 0.5
+++

## Modalを使うとwindow.scrollでは動かない原因と解決策{#window_scroll_not_working}

私はVue利用者ですがどうしても素のJavascriptを使わないと行けない処理というものが時々でてきます。
例えば特定の位置へ画面をスクロールさせる処理もその１つ。移動先をIDなどで取得し、スクロールさせる処理を書くことでスクロールできます。
縦に長いページで目次のようなものを使う場合に使われます。ちょいちょい使うのでスクロール処理を関数として切り出して使いまわしています。

{{<figure src="scrollbtn.png"  alt="スクロールを使う例" caption="スクロールを使う例" >}}

```javascript
/**
 * スクロール太郎
 */
export function smoothScroll (refId?: string, offsetY = 100) {
  if (refId === undefined) { Notify.create({ message: ('エラーが発生しました') }); return; }
  const targetEl = <HTMLDivElement>document.querySelector(`#${refId}`)
  if (targetEl === null) { Notify.create({ message: ('エラーが発生しました') }); return; }
  const topOfElement = targetEl.offsetTop - offsetY;
  window.scroll({ top: topOfElement, behavior: 'smooth' });
}
```

しかしこの書き方だと、Modal内でスクロールが発動しないことがわかりました。
Modalは浮かんでいるので、window.で処理をしても動かないようですね。
解決策をいくつか探していたとき、Quasarの公式でスクロールに関するページが有りました。

{{< link-card title="Scrolling Utils" href="https://quasar.dev/quasar-utils/scrolling-utils" target="_blank" >}}

QuasarにはScrollについても色々便利なユーティリティを提供してくれているおかげで、非常に簡単に書くことができます。まずサンプル。
縦に長いモーダルがあり、上部のナビボタンをクリックすると対象のIDの行へスムースにスクロールします。

{{<figure src="modals.png"  alt="モーダル内のウインドウに対してスクロールをさせたい" caption="モーダル内のウインドウに対してスクロールをさせたい" >}}

以下、コードです。QuasarFramework環境下であればコピペで動きます。

```html
<template>
  <div>
    <q-btn label="モーダル Open" @click="showModal = true" />
    <q-dialog v-model="showModal" full-width>
      <q-layout view="hHh LpR lFf" container>
        <q-header elevated>
          <q-toolbar>
            <q-btn label="aiueoへ" outline @click="scrollToElement('aiueo')" />
            <q-btn label="hogehogeへ" outline @click="scrollToElement('hogehoge')" />
          </q-toolbar>
        </q-header>
        <q-page-container>
          <q-page>
            <q-card>
              <div v-for="node in dummy" :key="node.id" :id="node.id">{{ node.text }}</div>
            </q-card>
          </q-page>
        </q-page-container>
      </q-layout>
    </q-dialog>
  </div>
</template>
```

```javascript

import { ref } from 'vue';
import { getRandStr } from 'components/utils';
import { scroll } from 'quasar';

const showModal = ref(false);

const dummy = ref<{ id: string, text: string}[]>([]);

// ダミーデータを生成
for (let i = 0; i < 500; i++) {
  // getRandStrはランダムな文字列を作るオリジナル関数です
  const id = getRandStr(3);
  if (i === 100) { dummy.value.push({ id: 'hogehoge', text: '目的のDivノード hogehoge 100 ■■■■■■■■■■■■■■■■■■■■' }); }
  if (i === 300) { dummy.value.push({ id: 'aiueo', text: '目的のDivノード aiueo 300 ■■■■■■■■■■■■■■■■■■■■' }); }
  dummy.value.push({ id, text: `other text contents ---- ${id}` });
}

/**
 * スクロール先のIDへスクロールする処理
 */
function scrollToElement (refId: string, offsetY = 0) {
  const element = <HTMLDivElement>document.querySelector(`#${refId}`);
  const getScrollTarget = scroll.getScrollTarget(element);
  scroll.setVerticalScrollPosition(getScrollTarget, element.offsetTop - offsetY, 300);
}

```

ポイントとなるのは、window.scrollを使わずにQuasarが用意してくれたsetVerticalScrollPositionを使うことです。
これによりWindowではなくモーダルに対してスクロールが走るようになります。

以上、少し躓いたので、備忘録として記事を残しました。
