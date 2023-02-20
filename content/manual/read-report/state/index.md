+++
description = "日報やチェックシートを読み、承認や棄却する手順についてのガイドです。承認者が複数いる場合はリレー方式で承認のバトンが連鎖していき、全員が承認した時点で初めて承認状態になります。"
menuTitle = "承認・棄却・既読"
tags = []
title = "日報を読んで承認をする"
toc = true
weight = 10
aliases = ['/report/read/state/']
+++

## 日報の状態は新規・進行・修正・棄却・承認の5種類

1つ1つの日報やチェックシートにはそれぞれ状態があります。状態は承認されたり修正したりすることで常に変化していきますが、**最終的には承認の状態**に向かって進みます。
承認がされるとその日報はロックが掛かり凍結されます。

{{<appscreen filename="report-status" title="1件の日報をPDFに変換してダウンロード"  >}}

|名称|説明|削除|修正|
|---|---|:---:|:---:|
|新規|日報が作成され、まだ承認や棄却が行われていない状態|●|●|
|進行|（提出先が2名以上の場合に限る）1名以上が承認をし、かつ最後の承認がされていない状態|✗|✗|
|棄却|棄却された状態です。修正が必要です|✗|●|
|修正|日報を修正したあとで、まだ承認や棄却が行われていない状態です。新規と違い削除はできません|✗|●|
|承認|提出先の全員がが日報を承認した状態です|✗|✗|

{{<alice pos="right" icon="here">}}承認された日報を消したい場合は[日報の一括削除](/manual/remove/reportbatch/)を御覧ください{{</alice>}}

## 日報を承認する

日報の提出先に指定されたスタッフは日報の検印欄に名前が記載されます。**検印欄の左から順に承認を進めていく**ことになります。一番左のスタッフが承認すると承認・棄却の権限が一つ隣の検印欄に移ります。
なお提出先が1名の場合は一人の承認で完了です。

さてここで一番左のスタッフが承認を押したときの画面を見てみましょう。承認ボタンは「承認」と「承認して次へ」の２つがありますがどちらを使っても承認できます。
※「承認して次へ」というボタンは承認と同時に2枚目の日報へページを切り替えるという意味です

{{<appscreen filename="eye-catch" title="承認が可能な日報やチェックシートを開いた例。画面右側に承認や棄却ボタンが表示されていることが確認できます。"  >}}

一人目の検印欄にハンコが捺印されました。と同時に日報の状態が「進行」に変化します。進行中は前述の通り、その日報を削除・修正できなくなります。
**承認ボタンが消えた**点にも注目です。承認ボタンは次の検印欄に書かれたアカウントの画面へ移動したため消えたように見えるのです。
また**検印欄が1名しかない場合は日報の状態が進行ではなく完了**になります。

{{<alice pos="right" icon="ok">}}提出先を1名しか指定しないのであればここで話はおしまいです。{{</alice>}}

検印欄に載っている名前の数だけこの承認リレーが続きます。
一番最後の承認者が承認を押した時点でその日報の状態が晴れて「承認」に変化します。

{{<appscreen filename="report-approval" title="日報の状態が承認になる"  >}}

上の画像は検印欄最後のアカウントから見ています。最後の承認をするアカウントは、承認後も**承認や棄却といったボタンが消えず**に残ります。

## 日報を棄却する

日報に不備がある場合はその不備を修正する必要があります。日報を棄却して修正してもらいましょう。
棄却の際は不備の理由をコメント欄に書いてあげると親切です。

{{<appscreen filename="report-rejected" title="承認リレー中に誰かが棄却するとその時点で日報の状態は「棄却」となります。"  >}}

棄却の際は承認の権限が次のスタッフへ移動しません。そのため承認や棄却ボタンはそのまま表示され続けます。
棄却された事実は**日報の作成者に通知**されます。棄却された日報をその後どうするのかは各会社でルールを明確に決めておくと良いでしょう。
一般的には修正して再提出という流れになるかと思います。もし修正が必要な場合は[日報・チェックシートの修正](/manual/write-report/rewrite/)を御覧ください

## 日報の修正という状態について

もし仮に先程の日報を修正するとどうなるのか見ておきましょう。状態は「修正」となり、承認のハンコはすべてクリアされて最初からとなります。

{{<appscreen filename="report-fixed" title="修正された日報は承認のハンコがクリアされます"  >}}

## 日報を既読にする

ここまでは日報の承認や棄却といった状態を変化させる事柄について見てきました。
一方で日報を読めるだけの権限（他に日報を読める人＝共有先）として設定されたアカウントは承認や棄却などの日報の状態変化には関わりませんが日報を読むことができます。
読んだことを伝えるための機能として**既読ボタン**があります。

既読ボタンは自分が読んだという目印としても使えるので積極的に活用していきましょう。

{{<appscreen filename="readed" title="日報を既読する。既読は承認できないスタッフが日報を読んだことを伝えるための機能です"  >}}

### 既読と承認の混在

承認のバトンが回ってくる前にその日報を見ようとすると既読ボタンが表示される場合があります。
承認の順番がまだだけど、他に日報を読める人リストに追加されているとこの現象が発生します。
既読ボタンを押したあとで承認の順番が回ってきたら承認ボタンを押せばいいだけですので、大きな問題にはなりませんが、少し紛らわしく感じる可能性がありますのでご注意ください。

対策としては「共有先と提出先を正しく指定する」ことと、グループ設定で日報の共有ルールを「通常」にすることで回避できます。