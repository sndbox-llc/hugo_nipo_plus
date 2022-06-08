# クラウド日報NipoPlus公式Webサイト

このリポジトリはクラウド日報 NipoPlusの公式Webサイトです。  

- 静的サイトジェネレータ「[Hugo](https://gohugo.io/)」で作成されています。
- テーマには [Hugo Learn](https://learn.netlify.app/en/)を使用しています。
- このリポジトリは[https://nipo-plus-doc.sndbox.jp/](https://nipo-plus-doc.sndbox.jp/)に展開されるホームページの元ネタとなります

## 使いかた

基本的な流れとしては

1. 記事を書く
1. masterブランチへコミットする

これだけです。コミットを検知してGit Actionsが自動でビルド＆デプロイしてくれます。ビルドされたデータはgh-pagesブランチに保存されます。

## 記事を書くところ

contentフォルダ以下に記事を書きます。
_index.mdとindex.mdは似ていますが微妙に違うため注意が必要です。もちろんそれ以外のファイル名も使用できますが、基本的には全てのページをフォルダで分けてindex.mdのみで運用する方針です。  
（一部の利用規約など画像が一切使われないページに置いてはこの限りでは有りません）

|項目|説明|
|---|---|
|_index.md|チャプターなどの大きな区切りページとして使うことが多いです|
|index.md|各ページによく使われます|

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
muffet --exclude="https://.*" http://localhost:1313 
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
