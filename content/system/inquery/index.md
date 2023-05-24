+++
description = "NipoPlusに関するご質問、ご要望、お問い合わせはこちらからお送りください。24時間以内に返信いたします。自動返信メールにて受け付け完了のお知らせを送信しています"
menuTitle = "お問い合わせ"
tags = []
title = "お問い合わせ"
toc = false
weight = 103000016
+++

お問い合わせいただき、ありがとうございます。
NipoPlusについてのご質問、ご要望、不具合の報告など、何でもお気軽にお問い合わせください。
お問い合わせ内容につきましては、24時間以内に担当者より返信させていただきます。  
また、自動返信メールもお送りいたしますので、もし返信が届かない場合は、お手数ですが迷惑メールフォルダをご確認いただくか、再度ご連絡ください。  
NipoPlusをより良いものにするため、皆様からのご意見・ご要望を心よりお待ちしております。


もしシステムのトラブルの場合は、問い合わせの前にトラブルシューティングを見てください。案外簡単に解決することがあります。

{{<button "/system/fix/" "トラブルシューティング">}}


<div id="contactForm">

  <label>Email</label><input type="email" id="mail" />
  <label>お問い合わせ内容</label><textarea id="content"></textarea>
  <label><input type="radio" name="targetRadio" value="Nipo">Nipo</label>
  <label><input type="radio" name="targetRadio" value="NipoPlus">NipoPlus</label>
  <div id="iconField"></div>

  <button onclick="submit()" class="my_button" id="sendButton">送信</button>
  <div id="errormessage" style="color:red"></div>
</div>
<div id="thanks"></div>

<script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>

<script>
  // let mail = document.getElementById('mail')
  const form = document.getElementById('contactForm');
  const thanks = document.getElementById('thanks');
  const sendButton = document.getElementById('sendButton');
  const errorMessage = document.getElementById('errormessage');
  const checkOption = document.getElementsByName('targetRadio');
  const iconField = document.getElementById('iconField')
  const EMAIL_REG_EXP = /^[A-Za-z0-9]{1}[A-Za-z0-9_.-]*@{1}[A-Za-z0-9_.-]+.[A-Za-z0-9]+$/;
  // ラジオボタン（Nipo/NipoPLus)のクリックイベントを監視。選ばれた方のバナーをセットする
  checkOption.forEach(function(e) {
    e.addEventListener("click", function() {
      const selectNode = document.querySelector("input:checked[name=targetRadio]")
      if (selectNode === null) return
      let img = document.createElement('img')
      img.src = selectNode.value === 'Nipo' ? '/images/nipologo.svg' : '/images/favicon.svg'
      img.id = 'icon'
      img.width = 200
      const oldimg = document.getElementById('icon')
      if (oldimg) {
        iconField.removeChild(oldimg)
      }
      iconField.appendChild(img)
    });
  });
  // メール送信処理
  async function submit () {
    sendButton.disabled = true
    const email = document.getElementById('mail')
    const content = document.getElementById('content')
    const target = document.querySelector("input:checked[name=targetRadio]")
    try {
      if (target === null) throw '問い合わせの製品をNipo/NipoPlusから選択してください'
      if (EMAIL_REG_EXP.test(email.value) === false) throw 'メールアドレスが不正です'
      if (content.value.length === 0) throw '本文が空欄です'
    } catch (e) {
      errorMessage.innerHTML = e
      sendButton.disabled = false
      return
    }

    const config = {
      method: 'POST',
      url: 'https://us-central1-nipo-plus.cloudfunctions.net/inqueryWeb',
      params: {
        email: email.value,
        text: `${content.value}\n【${target.value}】`
      }
    }
    // 完了を待つ必要はない
    axios(config)

    form.setAttribute('style', 'display:none')
    const textNode = document.createTextNode(`お問い合わせありがとうございます。${email.value}宛に確認メールを送ります。5分経過してもメールが届かない場合は再度お問い合わせください`)
    thanks.appendChild(textNode)
    return
  }

</script>
