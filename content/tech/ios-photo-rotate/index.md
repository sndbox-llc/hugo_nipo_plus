+++
url = "/tech/ios-photo-rotate/"
title = "iOS13.4.1で写真をアップロードすると画像が横向きになる問題"
description = "iOSで撮影した画像をブラウザにアップすると画像が勝手に変な方向に回転するという経験はありませんか？Androidでは発生しませんがiOSではこの問題がよく起こります。この問題に対する解決に奔走したときのお話です"
toc = true
date = "2022-11-14"
# images = []
# tags = []
+++

## iPhoneで写真を日報に添付すると画像が回転してしまいます{#iphone_photo_rotation_issue}

iOSのバージョンがiOS13.4.1でご利用の方は、Nipoに画像を添付すると画像が回転してしまいます。
縦向きで撮影しても全ての画像が横向きに変換されてしまいます。
サンプルの画像は、縦向きの外側カメラを使って撮影しましたが、勝手に横向きになっている様子がわかります。
これはiOSのバージョンを最新の13.4.1に更新すると発生するようです。このバグはNipo Version5.11.2にて修正されました。

{{<figure src="rotateimage.png"  alt="画像が回転してしまう問題" caption="画像が回転してしまう問題" >}}

## Blueimp load imageを使った画像回転の制御{#control_image_rotation_with_blueimp_load_image}

もともと、iOSの画像はWeb上にUploadすると回転するという問題がありました。iOSで撮影した画像データ自体は、横向きや逆さまであっても、そのまま記憶されています。
それとは別に回転方向を記録しており、表示時に画像を回転させて正しい向きに修正して表示していました。
しかしブラウザ上にUpするとその回転方向の処理が無いため、横向きになったりひっくり返ったりしていました。
この問題を解決するため、やり方は様々ですがNipoでは[Blueimp load image](https://github.com/blueimp/JavaScript-Load-Image)を利用して回転処理を加え、正しい向きにするようなコードを記述していました。

### iOS13.4.1のWKWebViewでは正しい回転方向を自動で解釈する{#correct_rotation}

前述のように、回転をプログラマ側で処理しなければなりませんでしたが、iOS13.4.1ではまたしても画像が回転して表示されるというバグが発生しました。
アプリストアに公開されている最新版のNipoを、iOS13.4.1のiPhoneと１つ前のiOSのiPhoneで試したところ、最新iOSの方でのみ画像が回転したことからも、OSのアップデートがバグにつながったと見て間違いないです。
情報を探っても的を得た情報がなかったため、手探りで修正を施しました。
修正は至ってシンプル。回転処理を書かなければそれで治りました。

```javascript
if (data.exif) {
  // blueimp load imageのOrientationをセットするとバグるので、したの行をコメントアウトする
  // options.orientation = data.exif.get('Orientation')
}
```

挙動からの推測であり、確かなことは言えませんが、iOS13.4.1では画像が横向きになるバグを修正してくれたのだと思います。WKWebviewではこの挙動が確認できました。
※UIWebViewは確認していません

### 画像回転処理の全コード{#full_code_for_image_rotation_processing}

```javascript
  // 一部省略しています。拙いコードですみません。
  async onFileChange (e) {
    const file = e.target.files[0];

    loadImage.parseMetaData(file, data => {
      const options = {
        maxHeight: 1024,
        maxWidth: 1024,
        canvas: true
      }
      // 今回のポイント ▼この処理を消さば良い
      // if (data.exif) {
      // ios13.4.1以降以下の行は不要となった
      // options.orientation = data.exif.get('Orientation')
      // }

      loadImage(file, canvas => {

        const base64 = canvas.toDataURL(file.type);
        const blob = FN.b64toBlob(base64.split(',')[1], file.type, 512);

        // FireStoreに fileのパス・サイズ・名前 Nipo
        const dd = {
          size: `${Math.round(blob.size / 1000)}KB`,
          base64: base64,
          uploadFile: blob,
          type: 'pict'
        }
        Vue.set(this.inputData, this.item.key, dd);
      }, options);
    })
  }
```

### Orientationの値をスルーすることで旧iOSではまた回転してしまう{#rotation_again}

写真が勝手に回転する問題をわざわざ記述したのに、この度のアップデートで不要となりました。
しかし回転処理を削除することは、「旧バージョンのiOSユーザ」はまたしても回転してしまう問題が発生すると思います。
基本的には最新版に合わせて開発しますので、画像が勝手に回転して困る場合は、iOSのアップデートをお願いします。

今回のバグについてはネットで探しても情報が見つかりませんでした。
Blueimp load imageのissueにも上がっておりません。Nipoではアップした画像をBase64に変換し、表示しているのですが、この処理がもしかしたら原因の可能性もありますね。
同じ悩みで苦しんでいる方がいれば、ぜひ参考にしてみてください。
