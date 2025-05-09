+++
url = "/tech/js/capacitor4/"
aliases = ["/tech/capacitor4/"]
title = "Android API Level31以上に対応する（QuasarとCapacitor4を利用）"
menuTitle = "Android API Level31以上に対応"
description = "CapacitorでAndroid API Lv31に対応する（Quasar Frameworkを使用)"
toc = true
date = "2022-11-14"
weight = 3030
+++

少し前からGoogle PlayStoreはAPI Level 31以上を必須としました。
Quasar Frame workを使って API Lv31以上のAABを作成してPlay Storeにアップロードするまでに至った手順を紹介します。
色々手間取りましたが無事提出できました。とりあえず以下の作業を進める前に別ブランチで作業することを推奨します。

## Capacitor4を使う{#use_capacitor4}

API LV31以上に対応するにはCapacirot4に更新します。しかし[Quasarの公式サイト](https://quasar.dev/quasar-cli-vite/developing-capacitor-apps/capacitor-version-support)にはCapacitor4に関する言及がありません。
記事はCapacitor3で止まっています。サポートされていないように見えますが、Capasitor4でも動作しました。

### 具体的なフロー{#about}

いつものようにQuasarからAndroidのビルドを行います.

```bash {frame="none"}
quasar build -m capacitor -T android --ide
```

src-capacirorフォルダを開き、package.jsonを修正します。 capacitorのバージョンを4以上にします。

```javascript
{
  "name": "nipo_plus",
  "version": "1.21.0",
  "description": "レポートWeb管理システム",
  "author": "sandbox LLC <info@sndbox.jp>",
  "private": true,
  "dependencies": {
    "@capacitor/android": "^4.0.0",
    "@capacitor/cli": "^4.0.0",
    "@capacitor/core": "^4.0.0",
    "@capacitor/ios": "^4.0.0"
  }
}
```

変更したら作業ディレクトリを移動し、最新版に更新します

```bash {frame="none"}
cd src-capacitor
yarn
```

src-capacitor内で以下のコマンドを入力します。以下の処理は若干時間がかかります。

```bash {frame="none"}
npx cap migrate
```

[Capacitorの公式移行ガイド](https://capacitorjs.com/docs/updating/4-0)も参照してください。

migrate中にエラーが発生する場合は、エラー内容を確認してください。
私の環境では以下のようなエラーが発生しました。

```bash {frame="none"}
[error] gradle wrapper files were not updated
[info] Warning: The Android Gradle plugin was updated and it requires Java 11 to run. You may need to select this in
       Android Studio.
```

java 11を使えということですね。
Android Studio -> Preferenceを開きます。 Build, Execution, Deploymentを開き、Build tools -> Gradleの順にアクセスします。

{{<figure src="img/android-studio.png"  alt="AndroidStudioのメニューからBuildBundlesを選びます" caption="AndroidStudioのメニューからBuildBundlesを選びます" >}}

Gradle JDKを11に修正します。
修正後に再び同じコマンドを入力します。

```bash {frame="none"}
npx cap migrate
```

エラーが出なくなれば成功です。

### android studio上での作業{#android_studio}

npx cap openでAndroid Studioを立ち上げます。起動と同時にビルド処理？が始まりますが、ここでエラーが発生することがあります。

Android Studioで**Gradle sync failed: Timeout waiting to lock journal cache**というエラーが出る場合は、前回のビルドのキャッシュが原因で失敗しています。
プロセスを終了して再実行すれば改善される可能性が高いです。

/Users/ユーザ名/.gradle/caches/journal-1/journal-1.lockというファイルを削除してしまえばOKです。
または

```bash {frame="none"}
sudo kill -9 <Owner PID>
```

とすることでも解消できます。AABファイルとしてビルドする手順については[Androidビルドの記事](/tech/js/androidapp/)を参照してください。

詳しい原因は不明ですが、ビルドを終えてPlay StoreにUPすると「APIレベル22を対象としています」と表示されます。

{{<figure src="img/min-sdk-22.png"  alt="アップロード時に警告が表示される" caption="アップロード時に警告が表示される" >}}

以前は「APIレベル30を対象としています」だったのでむしろ悪化したような感じですね。
valiables.gradleでは以下のようになっています

```javascript
ext {
    minSdkVersion = 28
    compileSdkVersion = 31
    targetSdkVersion = 31
    androidxActivityVersion = '1.4.0'
    androidxAppCompatVersion = '1.4.2'
    androidxCoordinatorLayoutVersion = '1.2.0'
    androidxCoreVersion = '1.8.0'
    androidxFragmentVersion = '1.4.1'
    junitVersion = '4.13.2'
    androidxJunitVersion = '1.1.3'
    androidxEspressoCoreVersion = '3.4.0'
    cordovaAndroidVersion = '10.1.1'
    coreSplashScreenVersion = '1.0.0-rc01'
    androidxWebkitVersion = '1.4.0'
}
```

何故かminSDKを31にしてもこの問題は解決しませんでした。
build.gradleの方で直接バージョンを指定することでこの問題は解決できました。（反映が遅れただけなのか？）

```javascript
android {
    compileSdkVersion 31 // ◀ここで直接バージョンを指定
    defaultConfig {
        applicationId "jp.sndbox.nipoplus"
        minSdkVersion 28 // ◀ここで直接バージョンを指定
        targetSdk 31 // ◀ここで直接バージョンを指定
        versionCode 100
        // 以下略
    }
}
```

これで再度ビルドし、アップロードしたところ無事にAPI Lv31を対象とすることができました。

{{<figure src="img/android-api-lv-31.png"  alt="API Lv31になりました" caption="API Lv31になりました" >}}

## 最後に{#end}

AndroidのAPILv31については当初ビルドが失敗して色々調べました。Quasarでは次のような[Pull Request](https://github.com/quasarframework/quasar/pull/14226)があります。
このプルリクが実装されればもう少しスマートに移行できたかもしれません。ただ更新が止まっているためこのプルリクが実装される見込みは低そうです。
また、[IssueにもAPI Lv31に関する議題](https://github.com/quasarframework/quasar/issues/14821)があがっていました。

今回は色々試行錯誤して問題が解決できましたが、この辺の手順を公式Quasarでしっかり書いてくれないので使う側は色々調べ回る必要があるのが辛いところですね。
