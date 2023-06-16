+++
description = "通常の数式を逆ポーランドに変換するサンプル（Typescript）と、逆ポーランドを計算するサンプルプログラムです。入力は電卓風のUIで実装"
tags = []
title = "電卓風の見た目で逆ポーランド記法の式を作成する（vue & Typescript)"
toc = true
images = ["reverce-polish-sample.png"]
date = "2022-11-14"
[sitemap]
  changefreq = "yearly"
  priority = 0.5
+++

NipoPlusに演算機能を実装する必要があり、色々調べたところ「逆ポーランド記法」という方法が電卓の実装として最も良さそうだったので作ってみました。

## 逆ポーランド記法とは

通常の数式は「1 + 1 」のように数値と数値の間に演算子が入ります。（infix)
逆ポーランド記法ではこの式を「1 1 +」のように表します。(postfix)
この逆ポーランド記法の何が良いかというと計算式の優先順位を変化される（）を使わずに表記できることにあります。

例えば「(1+2)×3」を逆ポーランド記法では「1　2　+　3　×」と表現できます。カッコが無くなるため、計算処理を書くのが非常に楽になります。

## 通常の数式を逆ポーランド式に変換する（Typescript)

起動させたときの画面イメージは次のようになります。

{{<imgproc reverce-polish-input.png "逆ポーランド記法に変換する電卓風入力フォーム" />}}

{{<alice pos="right" icon="default">}}
デザインは手抜きです
{{</alice>}}

電卓をポチポチ押して式を作り、最後に「変換」ボタンを押すと逆ポーランド記法の式（厳密には配列）にした結果を下に表示するだけのプログラムです。
通常の数式を逆ポーランドに変換するアルゴリズムは探すと結構たくさんでてきますが、実際にコードとしてのサンプルは思ったより少なかった印象です。
年季の入ったアルゴリズムなのにサンプルが少ないのはちょっと意外でした。

[参考にさせていただいたコード](https://www.geeksforgeeks.org/stack-set-2-infix-to-postfix/)では1文字までしか対応していないため、複数桁や小数点にも対応できるようにコードを改良しています。
また入力もユーザができるように電卓のフォームを用意しました。
コードはTypescript＆Vue3(script setup記法)です。

```html
<template>
  <div style="border:1px solid #ccc; background: #ccc">
    {{ localTemplateIni || '数式を入力してください' }}<hr>
    逆ポーランド：{{ formula }}
  </div>
  <div class="row justify-end">
    <div v-for="(row) in ['(', ')','ac', '変換']" :key="row" class="col-xs-3 col-md-2 q-px-sm q-mb-xs">
      <button style="width:100%;background-color: blue;color:white" @click="pushKey(row)">{{ row }}</button>
    </div>
  </div>
  <div class="row">
    <div class="col-9">
      <div class="row">
        <div v-for="(row) in [1,2,3,4,5,6,7,8,9,0, '.']" :key="row" class="col-xs-4 q-px-sm q-mb-xs">
          <button style="width:100%;background-color: pink;" @click="pushKey(row)">{{ row }}</button>
        </div>
      </div>
    </div>
    <div class="col-3">
      <div v-for="(row) in ['+', '-', '*', '/']" :key="row" class="q-px-sm q-mb-xs">
        <button style="width:100%; background-color: orange;" @click="pushKey(row)">{{ row }}</button>
      </div>
    </div>
  </div>
</template>
```

```typescript

<script setup lang="ts">
/** 逆ポーランドマシーン */
import { ref } from 'vue';

type stringOrNumber = string | number;

const localTemplateIni = ref('');
const formula = ref<stringOrNumber[]>([]);

/**
 * キーが押下されたときの処理
 */
function pushKey (key: string | number) {
  if (key === '変換') {
    // 文字列の数式を逆ポーランド式に変形する
    formula.value = infixToPostfix(localTemplateIni.value);
  } else if (typeof key === 'number' || key === '.') {
    // 数値の場合はスペースを入れずつなげて入力する。小数点も同様
    localTemplateIni.value += `${key}`;
  } else if (key === 'ac') {
    localTemplateIni.value = '';
  } else if (['+', '-', '*', '/', '(', ')'].includes(key)) {
    localTemplateIni.value += ` ${key} `;
  } else {
    // このサンプルではこのルートは通りません
  }
}

/**
 * 演算子
 */
function prec (c: string) {
  if (c === '/' || c === '*') return 2;
  if (c === '+' || c === '-') return 1;
  return -1;
}

const operands = ['+', '-', '*', '/'];
/**
 * 通常の数式を逆ポーランド記法に変換します
 */
function infixToPostfix (s: string) {
  const st:string[] = [];
  const result:stringOrNumber[] = [];
  // 数式を半角スペースを基準に分解する
  const arr = s.split(' ');
  arr.forEach(c => {
    if (c === '(') {
      // カッコの処理。スタックつみ
      st.push('(');
    } else if (c === ')') {
      // 閉じカッコの処理。
      while (st[st.length - 1] !== '(') {
        result.push(st[st.length - 1]);
        st.pop();
      }
      st.pop();
    } else if (operands.includes(c)) {
      // このルートはオペランド + - * / ( )の処理
      while (st.length !== 0 && prec(c) <= prec(st[st.length - 1])) {
        result.push(st[st.length - 1]);
        st.pop();
      }
      st.push(c);
    } else {
      if (c) {
        result.push(parseFloat(c));
      }
    }
  })
  while (st.length !== 0) {
    result.push(st[st.length - 1]);
    st.pop();
  }
  return result;
}

</script>
```

入力された文字は数値の場合つながった文字列として入力され、四則演算記号は半角スペースで区切って入力されます。
これでsplitでスペースをキーとして分解するときに複数桁数の数字が１つの値として扱えます。
逆ポーランド式を最終的には配列の形で利用したかったので、このサンプルでは逆ポーランド式を配列として出力するようになっています。

これらのシンプルな四則演算に加えて、NipoPlusでは「テンプレートの入力フォーム」を式に埋め込めるように少し改良もしています。

{{<imgproc reverce-polish-sample.png "NipoPlusで使った実際の例" />}}

{{<alice pos="right" icon="default">}}
実際の用途としては日報テンプレートの中のある値同士を計算するための式入力用として逆ポーランドを使いました
{{</alice>}}

## 逆ポーランドの式を計算する

逆ポーランド記法の数式を計算するサンプルは少し探すとたくさん出てきましたので、ここではおまけ程度に載せておきます。

```typescript
const calc = computed(() => {
  // 例えば[ 2, 6, "*", 9, "*" ]のような形の配列として渡ってきます
  const formula = props.formula;
  const stack:number[] = [];
  formula.forEach(v => {
    if (v === '+') {
      const b = stack.pop();
      const a = stack.pop();
      if (typeof a === 'number' && typeof b === 'number') {
        const ans = a + b;
        stack.push(ans);
      }
    } else if (v === '-') {
      const b = stack.pop();
      const a = stack.pop();
      if (typeof a === 'number' && typeof b === 'number') {
        const ans = a - b;
        stack.push(ans);
      }
    } else if (v === '*') {
      const b = stack.pop();
      const a = stack.pop();
      if (typeof a === 'number' && typeof b === 'number') {
        const ans = a * b;
        stack.push(ans);
      }
    } else if (v === '/') {
      const b = stack.pop();
      const a = stack.pop();
      if (typeof a === 'number' && typeof b === 'number') {
        const ans = a / b;
        stack.push(ans);
      }
    } else if (typeof v === 'number') {
      stack.push(v);
    } else if (typeof v === 'string') {
      // ここはNipoPlus独自仕様なので省略します
    } else {
      Notify.create({ message: '計算式に問題があります' });
    }
  })
  return stack[0];
})
```

## 逆ポーランド記法はシンプルに計算できるし拡張しやすい

今回NipoPlusの四則演算機能を実装するにあたり、どのようなやり方が一番良いか色々調べました。式をそのまま実行できるevalなどを使いたくなりますがevalは基本的に使わない方針で開発しているので、代替案として浮上したのが今回のテーマである「逆ポーランド記法」でした。
逆ポーランド式さえ作れてしまえば計算は結構簡単ですし、独自の拡張も仕込みやすいので個人的にはとても良いやり方だったと思いました。

他にも色々解決策はあると思いますが、一つの方法としてご紹介させていただきました。
