+++
description = ""
menuTitle = "QuasarでAndroidアプリを作成"
tags = []
title = "Quasar FrameworkでAndroidアプリをビルドしてストア提出する(AABファイル)"
toc = true
# weight = 105000009
contributors = []
excerpt = 'QuasarでAndroidアプリを作成'
images = []
date = "2022-11-14"
lastmod = "2022-11-14"
pinned = true
homepage = false
+++

NipoPlusは[Quasar Framework](https://quasar.dev/)を使用してWebアプリ、Androidアプリ、iOSアプリの3つに変換してそれぞれにリリースを行っています。
iOSについてはこれまでそこまで大きなトラブルは比較的少ない方でしたが、ことAndroidについては定期的に仕様が変更になるためその都度トラブルを解決するために多くの労力を必要とします。
ここでは2022年8月現在、Android AppをQuasar Frameworkでビルドしてストアに提出するまでの流れについて備忘録を兼ねて記載しています。
開発にはMacBook Air(M1)を使用しております。NodeJSのバージョンは16を使用しています。変換にはCapacitor3を使用しています。

## Android Appとしてビルドする前に

初回ビルド時は必要ありませんが、2回目、3回目の更新の際はApp Versionを更新しないとGoogle Play Storeに提出できません。そのためビルド前にApp Versionの値を現在より大きな値に更新する必要があります。

{{<alice pos="right" icon="here">}}
初回ビルド時はこの手順は不要です
{{</alice>}}

src-capacitor/android/app/build.gradleを開く

```sh
versionCode 123
```

と記載された箇所（123はここでは適当な値です）を見つけ、123より大きな数値に書き換えする（例えば124など）

## ideモードでビルドする

続いてソースコードのビルドを行います。Quasarのコマンドを叩くとCapacitorなどが自動で良しなに行ってくれるはずです。

```sh
quasar build -m capacitor -T android --ide
```

ideパラメータを付けたほうが安定します。上記コマンドを叩くとビルドが開始され、ビルドが完了するとAndroid Studioが起動します。もし自動で起動しない場合はターミナルから以下のコマンドを叩いて起動できます

```sh
cd src-capacitor
npx cap open android
```

Android Studioの上部メニューから以下を選択
Build -> Build Bundle(s) / APK (s)-> Build Bundle(s)

{{<imgproc android-studio-build.png "AndroidStudioのメニューからBuildBundlesを選びます" />}}

少し待つとビルドが完了します。完了後にビルド後に上部メニューから以下を選択します。
Build -> Generate Signed Bundle / Apk...

{{<imgproc android-studio-generate-sign-app.png "署名付きファイルとしてビルドします" />}}

ダイアログボックスが表示されるので「Android App bundle」を選択します。
署名用鍵などの情報を入力し、Nextボタンをクリックします（※鍵がない場合は同じ画面上から作成できる模様）

{{<imgproc signed-app-bundle.png "署名用の鍵やエイリアスなどの情報を入力する。一度入力すると次回以降は記録されるので設定自体は最初の1回だけ行えば良い" />}}

最後にreleaseを選択して、Finishボタンをクリックします。署名が完了するとsrc-capacitor/android/app/release　の中に app-release.aabが出力されています。
このAABファイルをAndroid StudioにアップロードすることでAndroid Studioにアプリのリリースが行なえます。

### 作成した鍵ファイルはなくさないように注意

署名に使用する鍵ファイルは紛失しないように気をつけてください。筆者は実際一度誤って紛失させてしまったことがあります。
万が一紛失した場合はGoogle Play Storeのヘルプセンターに問い合わせをすることで、鍵をリセットしてもらうことが可能です。
しかしリセットを依頼するにしても一定の時間（1週間程度）はかかるので注意してください。なくさないように大切に保管することが重要です。

## Web / Android / iOSアプリの開発にはQuasarがおすすめ

Quasar Framewrorkの良い点としてWebアプリはもちろんのこと、Androidアプリ・iOSアプリそれぞれへの変換が比較的簡単に行える点があります。
特に小規模な開発現場で同じアプリを3つ分けて開発するのは非常に大変です。
Quasarを使えば1つのHTMLコードをCapacitorやCordovaといった変換ツールを使ってAndroi / iOS用に簡単に変換してくれます。
もちろん、Quasarを使わずCapacitorなどを直接使用することも可能ですが、Quasarはおしゃれなデザインや便利な機能など、必要なものが全部セットになっているため
開発のスタートがかなりスムーズに行なえます。

NipoPlusはQuasarを使用して開発されていますが、テーブルやボタン・ヘッダーフッターなどのレイアウト、すべてがQuasar Frameworkの力を借りて作られています。
もし今後Webアプリを開発したいとお考えの方は是非一度Quasarをお試しください。

{{<alice pos="right" icon="ok">}}
国内だと[Vuetify](https://vuetifyjs.com/ja/)などが人気ですが個人的にはQuasarのほうが好きです
{{</alice>}}
