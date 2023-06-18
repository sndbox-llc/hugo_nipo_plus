+++
description = "charts.jsを使ってグラフを表示させます。vue-chart.jsは使いません。この記事はChart.jsのVersion2を利用していますが、今の最新はVersion3です。"
tags = []
title = "Vue composition APIでchart.jsを使いグラフを作成(vue-chart.jsは使わない)"
toc = true
images = []
date = "2022-11-14"
code = true
[sitemap]
  changefreq = "yearly"
  priority = 0.5
+++


## Vue-chart.jsを使わずにグラフを作ってみる

Vueでグラフを作るには、Vue-chart.jsを使うのが結構簡単ですが、できるだけ依存度を減らしたいので、直接chart.jsを使ってVue.jsでグラフを作成できるようにしてみました。
やってみると意外と簡単でした。
主な環境

- vue 2 Compotision API
- Chart.js Version 2.9.4
- TypeScript

### サンプルコード

Chart.jsは最近Version3に更新されましたが、この記事は**Chart.js Version2.9.4**を使っています。  
実際のコードは次の通り。まずはテンプレート部分 。canvasタグにrefをもたせて、プログラム部分からも使えるように紐付けします。

```html
<template>
  <div>
    charts
    <button @click="createCharts()">シャッフル</button>
    <canvas ref="canvasRef" />
  </div>
</template>
```

続いてScript部分。

```javascript
<script lang="ts">

import { defineComponent, ref, onMounted } from "@vue/composition-api";
import { Chart } from "chart.js";

export default defineComponent({
  setup () {
    const canvasRef = ref<HTMLCanvasElement | null>(null);
    onMounted(() => {
      createCharts();
    })
    // ランダムな数値製造マシーン
    function getRand () {
      const arr: number[] = [];
      for (let i = 0; i < 6; i++) {
        arr.push(Math.random());
      }
      return arr;
    }
    function createCharts () {
      if (canvasRef.value === null) return;
      const canvas = canvasRef.value.getContext("2d");
      if (canvas === null) return;
      console.log(canvasRef.value?.getContext("2d"));
      const c = new Chart(canvas, {
        type: "bar",
        data: {
          labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
          datasets: [{
            label: "てすと",
            data: getRand()
          }]
        }
      });
      console.log(c);
    }
    return {
      canvasRef,
      createCharts
    }
  }
})
</script>
```

canvasRefはonMountedで初期化処理が終わってからじゃないと使えませんので、onMountedの中でグラフ生成の関数を呼び出しています。  
getRand関数はランダムな数値の配列を作って返すだけの処理で、グラフ更新の動きを確認するために用意しました。実際に実行した画面は次の画像のようになります。  

{{<imgproc bar_chart.png "chart.jsを使って棒グラフを作成" />}}

シャッフルボタンを押すとグラフが再描画されます。
なおChart.js Version3では再描画時、すでにグラフが生成されているとエラーが発生しますので、先に生成済みのグラフを破壊する必要があります。  
参考：[公式ガイド](https://www.chartjs.org/docs/latest/developers/api.html#destroy)

## TypescriptとChart.js

今回はTypeScriptで実装しましたが、Typescriptは本当にありがたいです。  
型があることでプログラマの間違いを教えてくれるので、開発の効率も上がり、つまらないバグの混入リスクも軽減できます。
Chart.jsでも型による恩恵を受けることができます。  

{{<imgproc chart_ts.png "chart.jsを使って棒グラフを作成" />}}

## Vue-Chart.jsは不要です。意外と簡単に実装できたchart.js

Vue-chart.jsはMixinを使うなど、記述の仕方が少しわかりにくく、どうにかならないかなーと思っていました。  
直接Chart.jsを使うというやり方も思いの外簡単だったので、ぜひ皆さんも試してみてください。特にVue3でグラフが必要な場合、Vue-Chart.jsはまだVue3に対応していない（2021年4月現在)ため、必然的にChart.jsで直接グラフを作成するやり方が必須になるかと思います。  
開発は進んでいるようですが、自分で実装できるので、無くてもいいかな？と個人的には思いました。  

開発にあたっては、「できるだけ依存は減らす」方がうまく場合もあると今回学びました。今回のような、Vue2からVue3への大きなアップデートがあると、周辺の依存まで対応されるのを待つとかなり時間がかかってしまいます。
簡易的なラッパーであれば、自分で実装するくらいの気持ちで開発する方が精神的にも良いでしょう。
