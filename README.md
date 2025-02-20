# クラウド日報NipoPlus公式Webサイト

このリポジトリはクラウド日報 NipoPlusの公式Webサイトです。

- 静的サイトジェネレータ「[Hugo](https://gohugo.io/)」で作成されています。
- テーマには Doksを使用しています。

## リンク切れのチェック

localhost環境下で同サイト内のリンク切れをチェックします。 quasarのターミナルで赤文字が出ないことを確認してください

```sh
hugo
quasar serve public
muffet  http://127.0.0.1:4000 -b 100000

```

## 使いかた

基本的な流れとしては

1. 記事を書く
1. masterブランチへコミットする

これだけです。コミットを検知してGit Actionsが自動でビルド＆デプロイしてくれます。ビルドされたデータはgh-pagesブランチに保存されます。

## よく使うコマンド

ローカルでサーバ起動

```sh
hugo server -D
```

## ポートが何故か開放されないとき強制的にポートをあける

```sh
killall -9 hugo
```

## callout

お知らせ
{{< callout context="note" title="データも引き継ぎ可能" icon="outline/info-circle" />}}

注意
{{< callout context="caution" title="予期せぬログアウトに注意" icon="outline/info-triangle" >}}
