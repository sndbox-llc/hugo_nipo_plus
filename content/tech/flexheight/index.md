+++
url = "/tech/flexheight/"
description = "Quasar FrameworkのGridを使ってQcardの高さを揃える"
# tags = []
title = "Quasar Framework QCardの高さを揃えて見た目を良くする"
toc = true
images = []
date = "2023-01-01"
code = true
[sitemap]
  changefreq = "yearly"
  priority = 0.3
+++


Quasar Frameworkでは行、列を制御するために row・columnといったクラスが予め用意されています。

```bash
display: flex
```

など自分で書かずとも、 class="row"と書くだけでよく、とても効率よくコーディングが進められます。
次のように書くと縦３列に分かれたFlexboxが作成できます。レスポンシブに対応しており、スマートフォンのように狭い幅であれば１列３行に変わります。

```html
<div class='row'>
  <div class='col-xs-12 col-md-4'>some data</div>
  <div class='col-xs-12 col-md-4'>some data</div>
  <div class='col-xs-12 col-md-4'>some data</div>
</div>

```


## 高さを揃えるには items-stretchではなくheight:100%{#height_flex}

とまあ、ここまでは前置きです。rowやcolといった便利なクラスですが、要素の高さが違うと見た目が不格好になるというデメリットがあります。

{{<imgproc card.png "カードの高さが揃わずに不格好である" >}}

よく見る光景です。高さを揃えるには items-stretchクラスを使うとのことが書かれていますが、うまくいきませんでした。
（機能しないわけではないが別の問題が起こる）

columnsクラスとrowクラスをネストさせたり色々考えましたが、答えは意外とシンプルでした。

height: 100%　これをつけるだけで解決です。

{{<imgproc card2.png "カードの高さを最も高いカードに併せて揃える" >}}

こちらは紆余曲折して色々試行錯誤していたときのコードです。失敗例なので真似しないほうが良いです。

```html
<div class="column">
  <div class="row items-stretch">
    <div v-for="template in templateIdAndName" :key="template.id" class="col-xs-12 col-md-3 q-pa-xs">
      <q-card style="cursor:pointer; height: 100%" @click="addTemplateRow(template)" :class="{'myDisableCard' : template.useNodeCnt === 0}">
        <q-card-section class="text-bold bg-teal-4 dense">{{ template.name }}</q-card-section>
        <q-card-section>
          計測可能なフォーム:{{ template.useNodeCnt }}件
          <div v-for="node in template.nodes" :key="node.key">
            {{ node.label }}
          </div>
        </q-card-section>
      </q-card>
    </div>
  </div>
</div>
```

最終的にheight: 100%だけで良いことがわかったため、余分ものは全部排除しました。

```html
<div class="row">
  <div v-for="template in templateIdAndName" :key="template.id" class="col-xs-12 col-md-3 q-pa-xs">
    <q-card style="cursor:pointer; height: 100%" @click="addTemplateRow(template)" :class="{'myDisableCard' : template.useNodeCnt === 0}">
      <q-card-section class="text-bold bg-teal-4 dense">{{ template.name }}</q-card-section>
      <q-card-section>
        計測可能なフォーム:{{ template.useNodeCnt }}件
        <div v-for="node in template.nodes" :key="node.key">
          {{ node.label }}
        </div>
      </q-card-section>
    </q-card>
  </div>
</div>
```
