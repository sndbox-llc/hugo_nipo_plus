+++
description = "NipoPlusでお支払い頂いた領収証は管理画面からダウンロードできます"
tags = ["Web版限定", "要管理者権限"]
title = "領収証をダウンロードする"
menuTitle = "🧾領収証の発行"
toc = true
weight = 102000006
aliases = ["/price/invoice/"]
images = []
+++

領収証は過去の決済履歴からダウンロードできます。

1. 左のメニューから「組織設定」をクリック（項目がない場合は権限が不足しています）
2. 右のサイドバーから「決済履歴」をクリック
3. 領収証のダウンロード

{{<appscreen filename="goto-org-setting" title="左上のメニューから「組織設定」をクリックします">}}

組織設定画面に切り替わります。右のサイドバーから「決済履歴」をクリックするか、画面を一番下までスクロールします。  
過去のお支払い履歴が一覧で表示されます。ここから領収証のダウンロードが可能です。

{{<appscreen filename="receipt" title="これまでの決済履歴を確認。領収証のダウンロードもここからできます">}}

ダウンロードをクリックするとStripeの領収証（請求書）発行画面が新しいウインドウで起動します。
ここで「領収証のダウンロード」をクリックします。

{{<imgproc stripe-receipt.webp "Stripeの領収証発行画面。領収証のダウンロードをクリックして領収証を取得できます" />}}




領収証に記載される会社名は発行時点で登録された会社名です。名前を変更する際は注意してください。
領収証はPDF形式でダウンロードされます。

{{<imgproc receipt-sample.webp "領収証のサンプル" />}}

