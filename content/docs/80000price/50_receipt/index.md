+++
url = "/docs/price/receipt/"
# aliases = []
title = "領収証をダウンロードする"
menuTitle = "🧾領収証の発行"
description = "NipoPlusでお支払い頂いた領収証は管理画面からダウンロードできます"
toc = false
weight = 80050
tags = ["Web版限定", "管理者権限"]
contributors = []
+++

{{< callout context="caution" title="類似ページ注意" icon="outline/alert-triangle" >}}
このガイドはNipoPlus用です。Nipo【旧版】で領収証発行が必要な方は[Nipo【旧版】の料金ページ](/legacy/system/price/)を御覧ください
{{< /callout >}}

領収証は過去の決済履歴からダウンロードできます。

1. [左メニューから組織設定をクリック](/docs/setup/staff-global/rank/#rootSettingBtn)
2. 右のサイドバーから「決済履歴」をクリック
3. 領収証のダウンロード

左上メニュー「組織設定」をクリックすると組織設定画面に切り替わります。右のサイドバーから「決済履歴」をクリックするか、画面を一番下までスクロールします。
過去のお支払い履歴が一覧で表示されます。ここから領収証のダウンロードが可能です。

{{<icatch filename="img/receipt" msg="必要な領収証をクリックしてダウンロードしてください" alice="pc">}}

ダウンロードをクリックするとStripeの領収証（請求書）発行画面が新しいウインドウで起動します。
ここで「領収証のダウンロード」をクリックします。

{{<iTablet filename="img/stripe-receipt" msg="Stripeの領収証発行画面。領収証のダウンロードをクリックして領収証を取得できます" alice="ok">}}

領収証に記載される会社名は発行時点で登録された会社名です。名前を変更する際は注意してください。
領収証はPDF形式でダウンロードされます。
[インボイス制度に対応](/docs/system/business-deal/#invoiceNo)していますので登録番号もちゃんと表示されます。
