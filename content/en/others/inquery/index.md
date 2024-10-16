+++
description = "NipoPlusに関するご質問やご要望、お問い合わせはこちらからお送りください。内容に応じて1営業日以内に返信いたします。システムトラブルが発生している場合は、問い合わせ前にトラブルシューティングのページもご確認ください。皆様のフィードバックをお待ちしています。"
tags = []
title = "📩お問い合わせ"
toc = true
weight = 103000016
aliases = ["/docs/system/inquery/"]
images = []
[sitemap]
  changefreq = "yearly"
  priority = 0.3
+++



<div id="contactForm">


利用者の皆様に高い満足度を得ていただくことを目指しています！フィードバックは私達にとって非常に重要です。
使いにくい点・わかりにくい点・改善してほしい点があれば遠慮なく次のフォームからメッセージを送ってください。  


- お問い合わせ内容につきましては、１営業日以内に担当者より返信させていただきます（土日祝日は返信が遅れます）
- 自動返信メールもお送りいたしますので、もし返信が届かない場合は、お手数ですが迷惑メールフォルダをご確認いただくか、再度ご連絡ください。  
- システムのトラブルの場合は問い合わせの前にトラブルシューティングをお試しください（案外すんなり解決することもあります）


[▶Nipo【旧版】の解約手順がわからない方はお問い合わせ前にこちらを御覧ください](/legacy/system/leave/)。  
[▶Nipo【旧版】からNipoPlusへ乗り換えを検討の方はお問い合わせ前にこちらを御覧ください](/legacy/about/diff/#disabled)  
[▶トラブルシューティング](/docs/system/fix/)




{{<info>}}
お客様のお問い合わせ用です。営業メールは絶対に送らないでください🚫  
SEO対策・IT人材派遣・BAAS比較サイト掲載。全部間に合っております✋
{{</info>}}


<div>
  <label for="mail" class="form-label">メールアドレス（返信先）</label>
  <input type="email" class="form-control" id="mail" />
</div>
<div>
  <label for="content" class="form-label">お問い合わせ内容</label>
  <textarea id="content" class="form-control" rows="10"></textarea>
</div>
<div>
対象製品を選択してください<br>
<label><input type="radio" name="targetRadio" value="Nipo">Nipo【旧版】</label>
<label><input type="radio" name="targetRadio" value="NipoPlus">NipoPlus</label>
<div id="iconField"></div>
</div>


<button onclick="submit()" class="btn btn-primary btn-lg mt-5" id="sendButton">送信</button>
<div id="errormessage" style="color:red"></div>


<details>
  <summary>使用できない単語について</summary>
  迷惑メールの徹底排除に力を入れています。ご不便をおかけしますが以下の単語がメッセージ内に含まれている場合、送信に失敗します。あらかじめご了承ください  
  
  <hr />

  "ウェビナー",
  "オンライン商談",
  "お得な情報",
  "コスト削減",
  "ご案内です",
  "ご検討",
  "ご提案",
  "ソリューション",
  "パートナーシップ",
  "メール広告",
  "リスク0",
  "求職",
  "求人",
  "経営・営業責任者様",
  "広告費用",
  "最新技術",
  "資料ダウンロード",
  "実績",
  "受注率",
  "掲載",
  "人材派遣",
  "成果保証型",
  "成功事例",
  "特別オファー",
  "特別なキャンペーン",

</details>


</div>

<div id="thanks"></div>



<script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>

<script>
  // キーワードベースのフィルタリング処理を追加
const filterKeywords = [
  "ウェビナー",
  "オンライン商談",
  "お得な情報",
  "コスト削減",
  "ご案内です",
  "ご検討",
  "ご提案",
  "ソリューション",
  "パートナーシップ",
  "メール広告",
  "リスク0",
  "求職",
  "求人",
  "経営・営業責任者様",
  "広告費用",
  "最新技術",
  "資料ダウンロード",
  "実績",
  "受注率",
  "掲載",
  "人材派遣",
  "成果保証型",
  "成功事例",
  "特別オファー",
  "特別なキャンペーン",
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
  // ラジオボタン（NipoまたはNipoPLus)のクリックイベントを監視。選ばれた方のバナーをセットする
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
    if (containsKeyword(content.value.toLowerCase())) throw "営業関連のメッセージはご遠慮ください。あなたのメッセージは営業に関するキーワードが含まれています。本当のお問い合わせの方へ。誤検知でご不便をおかけして申し訳ありません。ページ下部にある「使用できない単語」のうえ、該当ワードを削除して再送してください。営業の方へ。今すぐブラウザバックしてどうぞ"; // 小文字に変換してからチェック
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
  

</script>
