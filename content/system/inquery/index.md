+++
description = "NipoPlusのお問い合わせフォームです。ご不明な点がありましたらこちらのフォームよりお問い合わせください。24時間以内に返信いたします"
menuTitle = "お問い合わせ"
quasar = true
tags = []
title = "お問い合わせ"
toc = false
weight = 900
+++


<div id="q-app">
  <div v-if="close">
    <q-banner class="bg-secondary text-white q-my-md">
      お問い合わせを受け付けました
    </q-banner>
    <q-card>
      <q-card-section class="text-bold">ご連絡先E-mail: {{ email }}</q-card-section>
      <q-card-section>内容: <div style="white-space: pre">{{ msg }}</div></q-card-section>
      <q-card-section>
      自動返信メールをご確認ください。<span class="text-negative text-bold">届いていない場合はこちらからの回答メールが送れません。</span>
      自動返信メールが届かない場合、メールアドレスが間違えていないかご確認ください。迷惑メールフォルダに入っている可能性もありますのでご確認ください。
      自動返信メールは通常1分以内に送られます。
      </q-card-section>
    </q-card>
  </div>
  <div v-else>
    Nipo / NipoPlusについてご不明な点があればこちらからお問い合わせください。
    <q-form>
    <q-input v-model="email" label="メールアドレス"></q-input>
    <q-input v-model="msg" label="お問い合わせ内容" type="textarea"></q-input>
    どちらのAppに関するお問い合わせでしょう？ nipo / nipoPlusから選んでください
    <q-option-group v-model="version" :options="option" inline></q-option-group>
    <div style="max-width:200px">
      <div v-if="version === 'nipo'">
        <img src="/images/nipologo.png" style="width:200px" />
      </div>
      <div v-else-if="version === 'nipoPlus'">
        <img src="/images/app-icon.png" style="width:200px" />
      </div>
    </div>
    <q-btn color="primary" size="lg" label="送信" @click="submit" :disable="!checkOk"></q-btn>
    <div v-if="!emailVerify" class="text-negative">メールアドレスの形式を確認してください</div>
    <div>お預かりしたメールアドレスはご質問に対する返信にのみ使用します</div>
    </q-form>
  </div>
</div>
<script src="https://cdn.jsdelivr.net/npm/vue@3/dist/vue.global.prod.js"></script>
<script src="https://cdn.jsdelivr.net/npm/quasar@2.7.1/dist/quasar.umd.prod.js"></script>
<script src="https://cdn.jsdelivr.net/npm/quasar@2.7.1/dist/lang/ja.umd.prod.js"></script>
<script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/es6-promise@4/dist/es6-promise.auto.min.js"></script> 
<script>
  // 問い合わせフォーム
  const app = Vue.createApp({
    setup () {
      const EMAIL_REG_EXP = /^[A-Za-z0-9]{1}[A-Za-z0-9_.-]*@{1}[A-Za-z0-9_.-]+.[A-Za-z0-9]+$/
      const emailVerify = Vue.computed(() => { return EMAIL_REG_EXP.test(email.value) })
      const checkOk = Vue.computed(() => {
        if (emailVerify.value === false) return false
        if (msg.value === '') return false
        if (version.value === '') return false
        return true
      })
      const close = Vue.ref(false)
      const email = Vue.ref('')
      const msg = Vue.ref('')
      const version = Vue.ref('')
      const option = Vue.ref([{ label: 'nipo', value: 'nipo' }, { label: 'nipoPlus', value: 'nipoPlus' }])
      async function submit () {
        Quasar.Loading.show()
        const body = {
          email: email.value,
          text: msg.value + '\n------\n' + version.value
        }
        const config = {
          method: 'POST',
          url: 'https://us-central1-nipo-plus.cloudfunctions.net/inqueryWeb',
          params: body
        }
        try {
          const res = await axios(config)
          console.log(res)
          Quasar.Notify.create({ message: 'ありがとうございました', color: 'primary' })
          close.value = true
        } catch (e) {
          console.error(e)
          Quasar.Notify.create({ message: 'エラーが発生しました。時間をおいてやり直してください', color: 'negative' })
        } finally {
          Quasar.Loading.hide()
        }
      }
      return {
        option,
        version,
        checkOk,
        emailVerify,
        close,
        submit,
        email,
        msg
      }
    }
  })
  app.use(Quasar)
  Quasar.lang.set(Quasar.lang.ja)
  app.mount('#q-app')
</script>
