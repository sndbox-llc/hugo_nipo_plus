# クラウド日報NipoPlus公式Webサイト

このリポジトリはクラウド日報 NipoPlusの公式Webサイトです。  

- 静的サイトジェネレータ「[Hugo](https://gohugo.io/)」で作成されています。
- テーマには Doksを使用しています。

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
muffet --exclude="https://.*" http://localhost:1313
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
