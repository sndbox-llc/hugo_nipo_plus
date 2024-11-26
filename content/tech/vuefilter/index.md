+++
url = "/tech/vuefilter/"
description = "Vue3で廃止されたfilter機能は関数として定義して呼ぶように修正することで移行できます"
# tags = []
title = "Vue2からVue3への移行-Filterの廃止を修正"
toc = true
# images = []
date = "2022-11-14"
[sitemap]
  changefreq = "yearly"
  priority = 0.2
+++

Nipo【旧版】はVue2で作成されたWebシステムですが、今回Vueが3にバージョンアップしたことに追従し、NipoのソースコードもVue3へ書き換え中です。

## Filter機能の廃止{#discontinuation_of_filter_feature}

Vue2で大変お世話になったFilter機能がなんとVue3では廃止になります。実はNipoの中身はたくさんFilterを使っているので、この処理を別の方法に置き換えなければなりません。
filterは定義すればすぐにすべてのページで使いませたので非常に便利でした。
Vue3へ移行しないという選択肢は考えたくないので、Vue3のルールに従ってFilterを削除し、これに代替する処理を用意しなければなりません。
computedで置き換えるか、関数で置き換える必要があります。

### Filterを関数で置き換える{#replace_filter_with_function}

今回はFilterの処理を関数に置き換えることで対応します。例えばMomentで日付の表示形式を書き換えるフィルター「longformat」はこれまでFilterで書かれていました。

```javascript
Vue.filter('longformat', function (t) {
  return !!t ? '-' : moment(t).format('YYYY年MM月DD日(dddd)')
})
```

様々な箇所で使っているので、関数化してFilterのときと同じように酷使できるようにします

```javascript
export function longformat(t) {
  return !!t ? '-' : moment(t).format('YYYY年MM月DD日(dddd)')
}
```

利用する箇所で importして、リターンしてあげれば使えるようになります。このあたりはVue3だとsetup()構文の中で全部書けるようなので、今後Vue3になるとこんな感じかな？

```javascript
import { defineComponent } from '@vue/composition-api' // vue2でvue3っぽいことをするにはこれを使う
import { longformat } from 'components/myfilters.ts'

export default defineComponent({
  setup() {
    return {
      longformat, // リターンするとtemplate内で利用できるようになる
    }
  },
})
```

### $options.filters.フィルター名の修正も忘れずに{#filterNameFixed}

Filterは主にTemplateの中で利用してきましたが、稀にコード内で利用することもありました。例えばNipoはCSV出力時に日付形式を変換する際に使っていました。コード内でFilterを呼び出すには

```javascript
this.$options.filters.longformat(day)
```

のように呼び出す必要がありました。（今見返すととても見にくいですね・・・）
今回、Filterを廃止したので、このごちゃごちゃした構文も

```javascript
longformat(day)
```

こんな感じでただの関数として呼び出すだけで済むわけですね。

## 結論: VueのFilterは要らない{#conclusion_filters_are_not_needed_in_vue}

Filterは開発当時非常に便利で多用していましたが、改めてコードを見返すと結構見にくいものでした。特にコード内で利用するときとTemplate内で利用するときの記述方法が大きく異なるので、わかりにくいこと山のごとし。Vue3へ移行するにはどのみちFilterと永遠の別れをしなければなりませんので、これから新規に立ち上げるプロジェクトなんかではFilterを使わないほうが良さそうです。
シンプルに関数にしてしまったほうが良いですね。
