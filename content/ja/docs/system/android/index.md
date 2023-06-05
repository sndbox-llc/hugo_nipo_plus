+++
description = "Android端末にNipoPlusをインストールするにはPWAとしてインストールする方法、PlayStoreからダウンロードする方法があります。PWAを推奨しています。"
tags = []
title = "Androidで使う"
toc = true
weight = 103000003
contributors = []
aliases = ["/system/android/"]
+++

AndroidでNipoPlusを使うには2つの方法があります

- WebのNipoPlusをインストール（推奨）
- Google Play Storeからインストール


## WebのNipoPlusをインストール（推奨）

WebのNipoPlusはPWAという技術が使われているため**Webでありながらインストールが可能**です。

1. Google ChoromeからNipoPlusを起動する
1. 画面下部に「ホーム画面にNipoPlusを追加」が表示された場合はそれをタップで完了（表示がない場合は次の手順へ）
1. 画面右上のメニューをタップ
1. アプリをインストールをタップ
1. ホーム画面にアイコンが追加される

NipoPlusは下のボタンから起動できます

{{<btnCenter "https://nipo-plus.web.app/" "NipoPlusを起動する" "_blank">}}

{{<imgproc android-install-pwa.png "ChoromeからPWA対応サイトを開くとインストールの通知が表示されます。ホーム画面に追加をタップするだけでインストールが完了し、ホーム画面にアイコンが追加されます。" />}}

起動後にメニューから「アプリをインストール」をタップすることでインストールが完了します。
インストール後は普通のアプリと同様に利用可能です。

## Google Playで手に入れる

一般的に広く知られている方法です。下のボタンをクリックしてダウンロードします。

[![google play](google-play-badge.png)](https://play.google.com/store/apps/details?id=jp.sndbox.nipoplus)

Google Play版はいくつか機能制限があります。

- CSV出力などの「ダウンロード」を伴う処理ができません
- 有料プランのお申し込みや解約ができません
- 操作ガイドへのリンクボタンが表示されません
- [更新頻度](/docs/system/release-note/)がPWA版に比べて遅れます

以上の理由からフル機能が利用できるWeb版のインストールを推奨しています。
