+++
description = "iPhone / iPadにNipoPlusをインストールするにはPWAとしてインストールする方法、App Storeからダウンロードする方法があります。PWAを推奨しています。"
tags = ["モバイル"]
title = "iPhone/iPadにNipoPlusをインストール"
menuTitle = "iOSで使う"
toc = true
weight = 103000002
aliases = ["/system/ios/"]
images = []
[sitemap]
  changefreq = "monthly"
  priority = 0.6
+++

iPhone・iPadでNipoPlusを使うには2つの方法があります。

- WebのNipoPlusをインストール（推奨）
- App Storeからインストール

## WebのNipoPlusをインストール（推奨）

WebのNipoPlusはPWAという技術が使われているため**Webでありながらインストールが可能**です。


1. Safariから[NipoPlusを起動](https://nipo-plus.web.app)する
1. メニューをタップ
1. ホーム画面に追加をタップ
1. 名前を任意に決めます
1. ホーム画面にアイコンが追加されたことを確認する

NipoPlusは下のボタンから起動できます

{{<btnCenter "https://nipo-plus.web.app/" "NipoPlusを起動する" "_blank">}}

{{<imgproc ios-pwa-install1.png "PWAをiOSにインストールするにはSafariを起動してインストールしたいページを開きます。その後メニューから「ホーム画面に追加」をタップします" />}}
{{<nextArrow>}}
{{<imgproc ios-pwa-install2.png "名前はNipoPlusが初期値ですが任意に決めることもできます。画面右上の「追加」をタップするだけでインストールは完了です。あとは一般のアプリと同じように利用できます" />}}

以上でインストールは完了です。

{{<alice pos="right" icon="phone">}}
消すときはアイコンを長押し。普通のアプリと同じだね
{{</alice>}}

インストールと紹介していますが厳密には**Webページへのショートカットリンク**に過ぎません。
ですが全画面表示とホーム画面のアイコンが工夫されるだけでまるでアプリのように振る舞っているようにみえますね。

## アプリストアから手に入れる

一般的に広く知られている方法はこちらです。下のボタンをクリックしてダウンロードします。

<a href="https://apps.apple.com/jp/app/id1625797169" target="_blank"><img src="/images/apple.svg" width="400px" alt="app store logo"></a>

App Store版はいくつか機能制限があります。


- CSV出力などの「ダウンロード」を伴う処理ができません
- 有料プランのお申し込みや解約ができません
- 操作ガイドへのリンクボタンが表示されません
- [更新頻度](/docs/system/release-note/)がPWA版に比べて遅れます

以上の理由からフル機能が利用できるWeb版のインストールを推奨しています。
