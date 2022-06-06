+++
title = "お問い合わせ"
description = "お問い合わせフォーム"
tags = ["お問い合わせ"]
weight = 100
+++

## ご質問についての窓口

お問い合わせフォームについては現在準備中です。お問い合わせフォームが完成するまでの間は、代わりに[Nipo（旧バージョン）のお問い合わせフォーム](https://guide-nipo.web.app/inquery/)をご利用ください。
<!--
<div id="counter">
  Counter: {{ counter }}
  <input v-model="email" />
  {{ email }}
</div>
-->

<script src="https://unpkg.com/vue@next"></script>
<script>
  const Counter = {
    setup() {
      const counter = Vue.ref(10)
      const email = Vue.ref('hogehoge@sndbox.jp')
      return {
        email,
        counter
      }
    }
  }
  Vue.createApp(Counter).mount('#counter')
</script>
