+++
description = "NipoPlusを利用する前に初期設定を済ませておきましょう。日報テンプレートの作成や一緒に使用するスタッフアカウントの用意、必要に応じてグループ分けなどを行います"
menuTitle = "初期設定"
menuPre = "<b>1. </b>"
title = "初期設定を行う"
toc = false
reqMermaid = true
weight = 10
tags = []
aliases = ['/org/']
+++

初期設定とは例えばグループを作成したり、[スタッフアカウントを追加](/manual/initial-setting/staff/make/)したり、日報・チェックシートの[テンプレートを作成する](/manual/initial-setting/group-setting/template/make/)といった作業です。
通常は導入初期に１度だけ行います。

## 組織とグループについて

大切なことは「**組織とグループの親子関係がある**」という1点のみです。
組織は常に1つで、組織の中に[グループ](/manual/initial-setting/group-setting/make/)をいくつでも作成できます。組織内に作られたそれぞれのグループが日報の作成や閲覧などを行う場所で、**組織自体はグループを束ねる役割**しかありません。
またグループ分けが不要であっても**最低1つのグループは必須**です。
アカウント作成直後は自動で1つのグループ（サンプルグループと言う名称）が自動で作成されています。

{{<mermaid align="center">}}
graph LR;
  classDef class2 fill:#ffa23e
  classDef class1 fill:#66cdaa
  組織 --> 営業グループ
  組織 --> 製造グループ
  組織 --> 新人研修グループ
{{< /mermaid >}}

作成したグループにスタッフを配置していくわけですが、スタッフは複数のグループに所属することもできます。複数のグループに所属しているスタッフは、画面左上の「切替」ボタンからいつでも簡単にグループを切替可能です。

{{<icatch filename="switch" msg="グループの切替 色分けもできます" title="作業グループの切り替え" fontsize="30px" alice="ok" >}}

## 組織とスタッフアカウントについて

スタッフのアカウント登録も組織の設定から行います。スタッフのアカウントを作成したらどのグループに所属させるのかを選択します。
組織で行うことはつまりこの2つ（グループの作成とスタッフの登録）になります。

## 次の記事

{{% children description="true" containerstyle="dl" style="dt" %}}