# クラウド日報NipoPlus公式Webサイト

このリポジトリはクラウド日報 NipoPlusの公式Webサイトです。  

- 静的サイトジェネレータ「[Hugo](https://gohugo.io/)」で作成されています。
- テーマには Doksを使用しています。

## png -> webP変換

HugoのWebp変換もあるが、ファイル名がランダムになるデメリットがあるためコマンドで変換するように運用方針変更。
ディレクトリを変更して以下のコマンドを叩くと変換してくれます

pngファイル
```sh
for file in *.png; do cwebp -q 80 -resize 1800 0 -sharp_yuv -mt "$file" -o "${file%.*}.webp"; done
```

jpgファイル
```sh
for file in *.jpg; do cwebp -q 75 -resize 2000 0 -mt "$file" -o "${file%.*}.webp"; done
```

※※※※ 注意 ※※※※
⚡再帰的に行うには以下の通り。⚡取り扱いには注意するべし！！！！！
ls -d $(find -E `pwd` -iregex ".*\.(jpg|jpeg|png)" -type f) | xargs -L 1 -I {} cwebp {} -o {}.webp


-sharp_yuv
これをつけると境界線がくっきるするらしい？


詳しいガイドはこちら
https://cruw.co.jp/blog/webp-conversion/

## 使いかた

基本的な流れとしては

1. 記事を書く
1. masterブランチへコミットする

これだけです。コミットを検知してGit Actionsが自動でビルド＆デプロイしてくれます。ビルドされたデータはgh-pagesブランチに保存されます。

## よく使うコマンド

ローカルでサーバ起動

``` sh
hugo server -D
```

Macの DS_Storeファイルを駆逐する

``` sh
find . -name '.DS_Store' -type f -ls -delete
```

リンク切れのチェック(localhost環境下で同サイト内のリンク切れをチェックしてください)

```sh
hugo
quasar serve public
muffet  http://127.0.0.1:4000 -b 100000

```

フォルダの中身サイズ順に表示する

```sh
ls -lS -R -x /content

```

ポートが何故か開放されないとき強制的にポートをあける

``` sh
killall -9 hugo
```

### ビルド系コマンド（基本的にGit Actionsで処理するためあまり使わない）

minifyビルド

``` sh
hugo --minify
```

存在しない記事を消してくれるぱらめた

``` sh
hugo --cleanDestinationDir
```


## 記事Weightリスト

manual                    600
    account         101009000
        about       101009000
        email       101009002
        passw       101009003
        signin      101009001
        tokumei     101009004
    analytics       101004000
    anken           101004500
    api             101010000
    calendar        101005000
    event           101008000
    inisetting      101000000
        staff       101001000
        staff(lo)   101001033
        template    101001100
    notice          101006000
    timecard        101007000
    その他           101012000
    writeReport     101002000
    READREPORT      101003000
    system          103000000
excel               108000000
OLD                 109000000
    parts           109002000
news                108000000
tips                104000000




