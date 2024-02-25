+++
description = "NipoPlusに関するご質問、ご要望、お問い合わせはこちらからお送りください。24時間以内に返信いたします。自動返信メールにて受け付け完了のお知らせを送信しています"
tags = []
title = "📩お問い合わせ"
toc = true
weight = 103000016
aliases = ["/docs/system/inquery/", "/system/inquery/"]
images = []
[sitemap]
  changefreq = "yearly"
  priority = 0.3
+++

利用者の皆様に高い満足度を得ていただくことを目指しています！フィードバックは私達にとって非常に重要です。
使いにくい点・わかりにくい点・改善してほしい点があれば遠慮なく次のフォームからメッセージを送ってください。  

あなたの心に留まっているだけでは問題に対処することができません。メッセージを送ることがすべての始まりです。
皆様からのご意見・ご要望を心よりお待ちしております。


- お問い合わせ内容につきましては、24時間以内に担当者より返信させていただきます。  
- 自動返信メールもお送りいたしますので、もし返信が届かない場合は、お手数ですが迷惑メールフォルダをご確認いただくか、再度ご連絡ください。  
- システムのトラブルの場合は問い合わせの前にトラブルシューティングをお試しください（案外すんなり解決することもあります）




{{<btnCenter "/docs/system/fix/" "トラブルシューティング">}}

<div id="contactForm">
  <div>
    <label for="mail" class="form-label">Email address</label>
    <input type="email" class="form-control" id="mail" />
  </div>
  <div>
    <label for="content" class="form-label">お問い合わせ内容</label>
    <textarea id="content" class="form-control" rows="10"></textarea>
  </div>
  <div>
  対象製品を選択してください<br>
  <label><input type="radio" name="targetRadio" value="Nipo">Nipo</label>
  <label><input type="radio" name="targetRadio" value="NipoPlus">NipoPlus</label>
  <div id="iconField"></div>
  </div>

  <div style="margin-top: 15px;margin-bottom:15px;border:1px solid #ccc">
  お客様のお問い合わせ用です。<span  style="color:red">営業メールは絶対に送らないで</span>ください🚫<br>
  SEO対策・IT人材派遣・BAAS比較サイト掲載。全部間に合っております✋
  </div>

  <button onclick="submit()" class="btn btn-primary btn-lg mt-5" id="sendButton">送信</button>
  <div id="errormessage" style="color:red"></div>
</div>
<div id="thanks"></div>

<script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>

<script>
  // キーワードベースのフィルタリング処理を追加
const filterKeywords = [
  "特別なキャンペーン", "メール広告", "成果報酬型",
  "資料ダウンロード"
];

// メッセージにキーワードが含まれているかチェックする関数
function containsKeyword(message) {
  return filterKeywords.some(keyword => message.includes(keyword));
}

  // let mail = document.getElementById("mail")
  const form = document.getElementById("contactForm");
  const thanks = document.getElementById("thanks");
  const sendButton = document.getElementById("sendButton");
  const errorMessage = document.getElementById("errormessage");
  const checkOption = document.getElementsByName("targetRadio");
  const iconField = document.getElementById("iconField")
  const EMAIL_REG_EXP = /^[A-Za-z0-9]{1}[A-Za-z0-9_.-]*@{1}[A-Za-z0-9_.-]+.[A-Za-z0-9]+$/;
  // ラジオボタン（Nipo/NipoPLus)のクリックイベントを監視。選ばれた方のバナーをセットする
  checkOption.forEach(function(e) {
    e.addEventListener("click", function() {
      const selectNode = document.querySelector("input:checked[name=targetRadio]")
      if (selectNode === null) return
      let img = document.createElement("img")
      img.src = selectNode.value === "Nipo" ? "/images/nipologo.svg" : "/images/favicon.svg"
      img.id = "icon"
      img.width = 200
      const oldimg = document.getElementById("icon")
      if (oldimg) {
        iconField.removeChild(oldimg)
      }
      iconField.appendChild(img)
    });
  });
  // メール送信処理（更新版）
async function submit() {
  sendButton.disabled = true;
  const email = document.getElementById("mail");
  const content = document.getElementById("content");
  const target = document.querySelector("input:checked[name=targetRadio]");

  try {
    if (target === null) throw "問い合わせの製品をNipo/NipoPlusから選択してください";
    if (EMAIL_REG_EXP.test(email.value) === false) throw "メールアドレスが不正です";
    if (content.value.length === 0) throw "本文が空欄です";
    if (containsKeyword(content.value.toLowerCase())) throw "営業関連のメッセージはご遠慮ください。"; // 小文字に変換してからチェック
  } catch (e) {
    errorMessage.innerHTML = e;
    sendButton.disabled = false;
    return;
  }

  const config = {
    method: "POST",
    url: "https://us-central1-nipo-plus.cloudfunctions.net/inqueryWeb",
    params: {
      email: email.value,
      text: `${content.value}\n【${target.value}】`
    }
  };

  // 完了を待つ必要はない
  axios(config);
  form.setAttribute("style", "display:none");
  const textNode = document.createTextNode(`お問い合わせありがとうございます。${email.value}宛に確認メールを送ります。5分経過してもメールが届かない場合は再度お問い合わせください`);
  thanks.appendChild(textNode);
  return;
}
  // メール送信処理
  async function submitBk () {
    sendButton.disabled = true
    const email = document.getElementById("mail")
    const content = document.getElementById("content")
    const target = document.querySelector("input:checked[name=targetRadio]")
    try {
      if (target === null) throw "問い合わせの製品をNipo/NipoPlusから選択してください"
      if (EMAIL_REG_EXP.test(email.value) === false) throw "メールアドレスが不正です"
      if (content.value.length === 0) throw "本文が空欄です"
    } catch (e) {
      errorMessage.innerHTML = e
      sendButton.disabled = false
      return
    }

    const config = {
      method: "POST",
      url: "https://us-central1-nipo-plus.cloudfunctions.net/inqueryWeb",
      params: {
        email: email.value,
        text: `${content.value}\n【${target.value}】`
      }
    }
    // 完了を待つ必要はない
    axios(config)

    form.setAttribute("style", "display:none")
    const textNode = document.createTextNode(`お問い合わせありがとうございます。${email.value}宛に確認メールを送ります。5分経過してもメールが届かない場合は再度お問い合わせください`)
    thanks.appendChild(textNode)
    return
  }

</script>
