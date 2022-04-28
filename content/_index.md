---
title: "日報テンプレート"
date: 2022-04-21T11:18:13+09:00
draft: false
---

{{% children  %}}

# Table of Contents
  * [Chapter 1](#h1-heading)
  * [Chapter 2](#chapter-2)
  * [Chapter 3](#chapter-3)

Nipo Plusへようこそ。これは追記です

更に追記してみる。Adddddddd

Git hub actions　テスト
画像をつけるぞ。 ?widthでサイズを指定できるみたいだけどあくまで表示上らしい。実際変換はされないっぽい？

14:05 add

14:24 add

チャプターを作るよ！

```
hugo new --kind chapter name/_index.md
```

普通のページを作る
```
hugo new チャプター名/名前/_index.md
```

# h1 Heading
## h2 Heading
### h3 Heading
#### h4 Heading
##### h5 Heading
##### h5 Heading
##### h5 Heading
###### h6 Heading

> **Fusion Drive** combines a hard drive with a flash storage (solid-state drive) and presents it as a single logical volume with the space of both drives combined.


## Chapter 1 <a id="chapter-1"></a>
Content for chapter one.

## Chapter 2 <a id="chapter-2"></a>
Content for chapter one.

## Chapter 3 <a id="chapter-3"></a>
Content for chapter one.

{{%expand "Is this learn theme rocks ?" %}}Yes !.{{% /expand%}}


{{<mermaid align="left">}}
graph LR;
    A[はじまるお] -->|Link text| B(Round edge)
    B --> C{Decision}
    C -->|One| D[Result one]
    C -->|Two| E[Result two]
{{< /mermaid >}}

{{% notice note %}}
A notice disclaimer
{{% /notice %}}


とめるとき
```
killall -9 hugo
```

## minifyビルド
```
hugo --minify
```

## 存在しない記事を消してくれるぱらめた
```
hugo --cleanDestinationDir
```
