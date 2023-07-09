+++
description = ""
tags = []
title = "Vue3 Propsの型推論"
toc = true
images = []
date = "2020-10-18"
code = true
[sitemap]
  changefreq = "yearly"
  priority = 0.5
+++


今までJavascriptばかりで、TypeScriptは使っていませんでしたが、実際にTypeScriptを使い始めると、もうTypeScript抜きでの開発は怖くてできなくなります。

TypeScriptの強力な機能の１つが「型」を持つことです。

Vue3はpropsを受け取る際に型を指定できます。このやり方について無知ゆえに変な書き方をしていましたが、どうやらもっと良い書き方があるようです。今日はそんな記事を書いてみました

## Interfaceを使って型を指定する？

最初はよくわからなかったのでこのやり方を使っていました。

```typescript
import { defineComponent, inject, ref, reactive } from '@vue/composition-api'
import { ReportInterface } from 'components/if/common'

interface Props {
  templateId: string
  propsReports: ReportInterface[] | undefined
}

export default defineComponent({
  props: {
    templateId: { required: true, type: String },
    propsReports: { required: false, default: undefined } // &#x25c0;これの型指定を interfaceで定義
  },
  setup (props: Props) { // &#x25c0; Props型にすればpropsの型推論が効く
  }
})

```

これでも動きますが、似たような記述を２回書かなければならず、ちょっと面倒です。あとリンターがWarningを飛ばしてきます。


```sh
vue/require-prop-types: Prop "propsReports" should define at least its type.
```

これに対応するため、 propsReportsに対して type: Object と書いてもいいのですが、なんか違う・・・これじゃない感がありました。

## type: Object as PropType &lt;型&gt;を使う

よくよく調べてみると、propのTypeに自分が作った型を指定できるようです。それがこの **PropType** です。


```typescript
import { defineComponent, inject, ref, reactive, PropType } from '@vue/composition-api'
import { ReportInterface } from 'components/if/common'

export default defineComponent({
  props: {
    templateId: { required: true, type: String },
    propsReports: { required: false, default: undefined, type: Object as PropType &lt;ReportInterface[]&gt; } // &#x25c0;ここに型をかける
  },
  setup (props) { // &#x25c0; Propsは自動で型推論される
  }
})
```

このPropTypeを使えばInterfaceで別途型定義しなくても、propsの中に独自の型を書き込むことができるようです。ちゃんと型推論も機能します。

## TypeScriptはなれるまで大変だけど便利

まだまだTypeScriptはわからないことがたくさんあります。今回Vue3のリリースからTypeScriptを正式に始めようと思いましたが、最初はワーニングの雨あられ。心が折れそうになりました。
しかし１週間も四苦八苦しているとだんだんやり方が分かってきます。Vue3ではTypeScriptと相性が良くなったので、ぜひ活用したいですね
