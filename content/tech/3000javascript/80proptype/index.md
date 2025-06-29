+++
url = "/tech/js/proptype/"
aliases = ["/tech/proptype/"]
title = "Vue3 Propsの型推論"
menuTitle = "Vue3 Propsの型推論"
description = "JavaScriptからTypeScriptへの移行は初めは挑戦的かもしれませんが、型安全性と効率的な開発プロセスを提供します。本記事では、Vue3でpropsの型指定をInterfaceを使用する方法を紹介し、PropTypeを利用してよりクリーンで効率的なコードを書くためのテクニックを解説します。TypeScriptの強力な型システムを活用し、Vue3の開発において型推論のメリットを最大限に引き出す方法を学びましょう。"
toc = true
date = "2020-10-18"
weight = 3080
+++

今までJavascriptばかりで、TypeScriptは使っていませんでしたが、実際にTypeScriptを使い始めると、もうTypeScript抜きでの開発は怖くてできなくなります。

TypeScriptの強力な機能の１つが「型」を持つことです。

Vue3はpropsを受け取る際に型を指定できます。このやり方について無知ゆえに変な書き方をしていましたが、どうやらもっと良い書き方があるようです。今日はそんな記事を書いてみました

## Interfaceを使って型を指定する？{#using_interfaces_to_specify_types}

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
    propsReports: { required: false, default: undefined }, // &#x25c0;これの型指定を interfaceで定義
  },
  setup(props: Props) {
    // &#x25c0; Props型にすればpropsの型推論が効く
  },
})
```

これでも動きますが、似たような記述を２回書かなければならず、ちょっと面倒です。あとリンターがWarningを飛ばしてきます。

```bash {frame="none"}
vue/require-prop-types: Prop "propsReports" should define at least its type.
```

これに対応するため、 propsReportsに対して type: Object と書いてもいいのですが、なんか違う・・・これじゃない感がありました。

## type: Object as PropType &lt;型&gt;を使う{#use_object_as_proptype}

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

## TypeScriptはなれるまで大変だけど便利{#typescript_challenging_but_useful}

まだまだTypeScriptはわからないことがたくさんあります。今回Vue3のリリースからTypeScriptを正式に始めようと思いましたが、最初はワーニングの雨あられ。心が折れそうになりました。
しかし１週間も四苦八苦しているとだんだんやり方が分かってきます。Vue3ではTypeScriptと相性が良くなったので、ぜひ活用したいですね
