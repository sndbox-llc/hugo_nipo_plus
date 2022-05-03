# hugo_nipo_plus

URL

https://nipo-plus-doc.sndbox.jp/

## クラウド日報Nipo Plus公式Webサイト

このリポジトリはクラウド日報 Nipo Plusの公式Webサイトです。

### よく使うコマンド

ローカルでサーバ起動

```
hugo server -D
```

ポートが何故か開放されないとき強制的にポートをあける

```
killall -9 hugo
```

Macの DS_Storeファイルを駆逐する

```
find . -name '.DS_Store' -type f -ls -delete
```


チャプターの新規作成
```
hugo new --kind chapter name/_index.md
```

普通のページの新規作成
```
hugo new チャプター名/名前/_index.md
```


### ビルド系コマンド（基本的にGit Actionsで処理するためあまり使わない）

minifyビルド
```
hugo --minify
```

存在しない記事を消してくれるぱらめた
```
hugo --cleanDestinationDir
```
