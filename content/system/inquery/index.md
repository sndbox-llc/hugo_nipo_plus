+++
description = "NipoPlusのお問い合わせフォームです。ご不明な点がありましたらこちらのフォームよりお問い合わせください。24時間以内に返信いたします"
menuTitle = "お問い合わせ"
tags = []
title = "お問い合わせ"
toc = false
weight = 900
+++

<div id="contactForm">

  <label>Email</label><input type="email" id="mail" />
  <label>お問い合わせ内容</label><textarea id="content"></textarea>
  <label><input type="radio" name="targetRadio" value="Nipo">Nipo</label>
  <label><input type="radio" name="targetRadio" value="NipoPlus">NipoPlus</label>
  <div id="iconField"></div>

  <button onclick="submit()" id="sendButton">送信</button>
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

  checkOption.forEach(function(e) {
    e.addEventListener("click", function() {
      const selectNode = document.querySelector("input:checked[name=targetRadio]")
      if (selectNode === null) return
      let img = document.createElement('img')
      img.src = selectNode.value === 'Nipo' ? '/images/nipologo.png' : '/images/app-icon.png'
      img.id = 'icon'
      img.width = 200
      const oldimg = document.getElementById('icon')
      if (oldimg) {
        iconField.removeChild(oldimg)
      }
      iconField.appendChild(img)
    });
  });

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
    axios(config)

    form.setAttribute('style', 'display:none')
    const textNode = document.createTextNode(`お問い合わせありがとうございます。${email.value}宛に確認メールを送ります。5分経過してもメールが届かない場合は再度お問い合わせください`)
    thanks.appendChild(textNode)
    return
  }

</script>