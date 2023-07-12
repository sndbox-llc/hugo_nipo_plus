+++
description = "初期設定ではグループを作ります"
title = "組織とグループについて"
toc = true
weight = 101000000
tags = []
mermaid = true
aliases = ["/manual/initial-setting/"]
images = ["sample-template_tablet.png"]
+++


先に用語を紹介しておきます。

<dl class="basic">
<dt>組織</dt>
<dd>NipoPlus上の一番上位の単位です。１企業につき１つです</dd>
<dt>グループ</dt>
<dd>組織の中にいくつでも作成できます。<br>アカウント作成時に1つのグループが自動で作成されています</dd>
</dl>

組織の中にグループを作り、グループの中で報告書の作成や閲覧と行った日常業務が行われます。


{{<mermaid align="center">}}
graph LR;
  classDef class2 fill:#ffa23e
  classDef class1 fill:#66cdaa
  classDef class3 fill:#f9d930
  組織 --> 営業グループ:::class2
  組織 --> 製造グループ:::class2
  組織 --> 経理グループ:::class2
{{< /mermaid >}}

小規模な事業所であればグループ分けをしなくても良いですが、最低でも1つのグループは必須です。


{{<alice pos="right" icon="ok">}}
グループ分けが不要ならこれ以降不要なので次のページへGO
{{</alice>}}

## グループはそれぞれ独自の設定が適用されます{#group_by_group}

同じ組織内のグループでもそれぞれ独自の設定が可能です。
アクセス権もグループごとに適用されます。グループに所属しないと同じ組織内のアカウントでもグループにアクセスができません。
どのグループに誰を所属させるかは組織の管理者が設定できます。


## グループの切替え{#switch_group}

グループは「組織設定」から作成・削除が可能です。具体的なグループの作成手順は次のページで説明します。  
複数のグループに所属しているアカウントは画面左上のボタンから作業グループを簡単に切り替えできます。


{{<icatch filename="switch" msg="グループの切替は 画面左上から操作" title="作業グループの切り替え" fontsize="30px" alice="ok">}}

※グループの作成には管理者権限が必要です。


{{<nextBlog>}}
