+++
description = "Android/IOSを搭載したモバイル機器でもNipoPlusを利用できます。ブラウザで動作する日報アプリのため専用の知識やアプリは不要です。もっと手軽にインストールしたい場合はGoogle Play / App Store上に専用アプリも用意しております。"
tags = ["モバイル"]
title = "Android/iOS/PCでNipoPlusを使用する方法"
menuTitle = "🍏iOS・🤖Android・PCで使う"
toc = true
weight = 103000003
aliases = []
images = ["android-install-pwa.png"]
[sitemap]
  changefreq = "monthly"
  priority = 0.6
+++

NipoPlusはWebアプリケーションのため、ブラウザが利用できる端末であれば利用可能です。一般的な端末はブラウザが利用できるため、多くの端末でご利用可能です。  
また、Android/iOSについては各アプリストアにて専用アプリも用意しています。ブラウザ・専用アプリどちらを使っても問題有りません。


## PCで使用する{#web}

今このページをPCでご覧頂いている方は、そのまま下の「NipoPlusを起動する」ボタンをクリックして使用できます。

{{<btnCenter "https://nipoplus.sndbox.jp/" "NipoPlusを起動" "_blank">}}


<dl class="basic">
<dt>OS</dt>
<dd>Windows / Mac / iOS / Androidで動作を確認しました</dd>
<dt>推奨ブラウザ</dt>
<dd>
<a href="https://www.google.co.jp/chrome/">Google Chrome</a> / <a href="https://www.apple.com/jp/safari/">Safari</a>
</dd>
<dt>動作確認ブラウザ</dt>
<dd>
<a href="https://www.microsoft.com/ja-jp/windows/microsoft-edge">Microsoft Edge</a> / <a href="https://www.mozilla.org/ja/firefox/new/">FireFox</a> / <a href="https://www.opera.com/ja">Opera</a>
</dd>
<dt>その他補足</dt>
<dd>
<div>
  <ul>
    <li>モニタサイズは13インチ以上を推奨</li>
    <li>タッチ対応ディスプレイを搭載したPCであれば、手書き機能を有効に活用できます</li>
    <li>※Internet Explorerは動作しません</li>
    <li>※レガシーなMicrosoft Edige（非Chromiumベース板）は一部機能が動作しません</li>
    <li>※レガシーなSafari（Version14以前）は一部機能が動作しません</li>
  </ul>
</div>
</dd>
</dl>

注意点はいくつかありますが、Windows7以降のPCであれば問題なく動作します


---

## AndroidにNipoPlusをインストールする{#android}

AndroidでNipoPlusを使うには2つの方法があります

- WebのNipoPlusをインストール（推奨）
- Google Play Storeからインストール





### WebのNipoPlusをインストール（推奨）{#pwa}

WebのNipoPlusはPWAという技術が使われているため**Webでありながらインストールが可能**です。

1. Google ChoromeからNipoPlusを起動する
1. 画面下部に「ホーム画面にNipoPlusを追加」が表示された場合はそれをタップで完了（表示がない場合は次の手順へ）
1. 画面右上のメニューをタップ
1. アプリをインストールをタップ
1. ホーム画面にアイコンが追加される

NipoPlusは下のボタンから起動できます

{{<btnCenter "https://nipoplus.sndbox.jp/" "NipoPlusを起動する" "_blank">}}

{{<imgproc android-install-pwa.png "ChoromeからPWA対応サイトを開くとインストールの通知が表示されます。ホーム画面に追加をタップするだけでインストールが完了し、ホーム画面にアイコンが追加されます。" />}}

起動後にメニューから「アプリをインストール」をタップすることでインストールが完了します。
インストール後は普通のアプリと同様に利用可能です。

### Google Playで手に入れる{#googlePlay}

一般的に広く知られている方法です。下のボタンをクリックしてダウンロードします。

<div  style="max-width:300px">

[![google play](google-play-badge.png)](https://play.google.com/store/apps/details?id=jp.sndbox.nipoplus)

</div>


<dl class="basic">
  <dt>AndroidVersion</dt>
  <dd>Pie(API Lv28)以上</dd>
  <dt>必要な容量</dt>
  <dd>8MB以上のストレージ</dd>
  <dt>推奨モニタサイズ</dt>
  <dd>4インチ以上を推奨します。極端に小さなスマートフォンは操作性が低下します  タブレットの場合は、9.7インチ以上を推奨</dd>
</dl>



---

## iOSにNipoPlusをインストールする {#ios}


iPhone・iPadでNipoPlusを使うには2つの方法があります。

- WebのNipoPlusをインストール（推奨）
- App Storeからインストール

### WebのNipoPlusをインストール（推奨）{#pwa}

WebのNipoPlusはPWAという技術が使われているため**Webでありながらインストールが可能**です。

1. Safariから[NipoPlusを起動](https://nipo-plus.web.app)する
1. メニューをタップ
1. ホーム画面に追加をタップ
1. 名前を任意に決めます
1. ホーム画面にアイコンが追加されたことを確認する

NipoPlusは下のボタンから起動できます

{{<btnCenter "https://nipoplus.sndbox.jp/" "NipoPlusを起動する" "_blank">}}

{{<imgproc ios-pwa-install1.png "PWAをiOSにインストールするにはSafariを起動してインストールしたいページを開きます。その後メニューから「ホーム画面に追加」をタップします" />}}
{{<nextArrow>}}
{{<imgproc ios-pwa-install2.png "名前はNipoPlusが初期値ですが任意に決めることもできます。画面右上の「追加」をタップするだけでインストールは完了です。あとは一般のアプリと同じように利用できます" />}}

以上でインストールは完了です。

{{<alice pos="right" icon="phone">}}
消すときはアイコンを長押し。普通のアプリと同じだね
{{</alice>}}

インストールと紹介していますが厳密には**Webページへのショートカットリンク**に過ぎません。
ですが全画面表示とホーム画面のアイコンが工夫されるだけでまるでアプリのように振る舞っているようにみえますね。

### アプリストアから手に入れる{#appStore}

一般的に広く知られている方法はこちらです。下のボタンをクリックしてダウンロードします。

<a href="https://apps.apple.com/jp/app/id1625797169" target="_blank"><img src="/images/apple.svg" width="300px" alt="app store logo"></a>


<dl class="basic">
  <dt>iOSバージョン</dt>
  <dd>iOS14.0以上のiPhone / iPad</dd>
  <dt>必要な容量</dt>
  <dd>8MB以上のストレージ</dd>
  <dt>推奨モニタサイズ</dt>
  <dd>5.4インチ以上（iPhone SE2のサイズ）以上を推奨します。これ以下のサイズでは操作性が低下します  iPad(9.7inch)サイズ以上が適しています。※iPhone SE以下の小さなディスプレイは非推奨</dd>
</dl>

## 専用アプリの制限{#limit}

AppStore・GooglePlay版のNipoPlusはストア規約や技術的な理由により、いくつかの機能が制限されます。


- CSV出力などの「ダウンロード」を伴う処理ができません
- [有料プラン](/docs/price/_about/#fee)のお申し込みや解約ができません
- 操作ガイドへのリンクボタンが表示されません
- [更新頻度](/docs/system/release-note/)がPWA版に比べて遅れます

以上の理由からフル機能が利用できるWeb版のインストールを推奨しています。






---

