+++
title = "日報の承認と棄却"
# description = "チャプター"
tags = ["日報", "承認棄却"]
weight = 10
+++


[日報保存箱](/report/read/list/)から１つの日報を選択すると、１件の日報が詳細表示されます

{{<imgproc icatch.png Resize "1200x" "日報の詳細表示" />}}

左側の領域に日報本体が表示され、右側には様々なメニューが表示されます。

## 日報の状態は4種類

日報の状態は次の種類があります

|名称|説明|
|---|---|
|新規|日報が作成され、まだ承認や棄却が行われていない状態|
|進行|1名以上が承認をし、且つ最終承認者がまだ承認していない状態。日報はロックされ修正はできません|
|棄却|棄却された状態|
|承認|最終承認者が日報を承認した状態|
|修正|日報を修正したあとで、まだ承認や棄却が行われていない状態|

{{<alice pos="right" icon="here">}}
承認すると**日報の状態が進行**になります。しかし承認者が1名の場合は進行を飛ばして**承認**状態になります
{{</alice>}}

### 日報の承認リレー

少し具体例をあげます。ある日報の承認者が「管理者」＞「C係長」＞「A部長」となっている場合、最初に「管理者」が日報を承認します。
（C係長やA部長は先に承認できません）

{{<imgproc stateProgress.png Resize "1200x" "「管理者」が日報を承認したことで日報の状態が「進行」に変化した" />}}

その後も順調に「C係長」＞「A部長」が承認をしていきます。
最終承認者が承認すると、日報の状態は**承認**となります。  
（※一番最後の承認者が**最終承認者**です。この例では「A部長」が最終承認者。承認者が1名しか居ない場合はその人が最終承認者です）
{{<imgproc stateDone.png Resize "1200x" "最終承認者が承認したことで日報の状態が「承認」に変化した" />}}

このように承認をバトンリレー式につないで行くことができます。なおリレーの途中で**誰か1名でも棄却すると日報の状態は棄却**になります

{{<imgproc stateReject.png Resize "1200x" "日報の状態が「棄却」の例" />}}

## 日報を承認・棄却する

承認、棄却ができるスタッフの画面では右側のメニューに　**「承認・棄却」ボタンが表示され**ます。

{{<alice pos="right" icon="question">}}
ボタンが出ない場合はまだ承認リレーのバトンが回ってきていないか、提出先に指定されていないか確認しよう
{{</alice>}}

{{<imgproc agree1.png Resize "1200x" "自分が承認できる状態の日報" />}}

|名称|説明|
|---|---|
|承認ボタン|日報を承認します。後続に承認者がいる場合、承認権限が後続のスタッフに移行します（つまり承認権限が無くなりますので承認取り消しできません。注意）。あなたが最終承認者の場合は承認権限が移行せずボタンに変化は有りません|
|棄却ボタン|日報を棄却します。棄却された旨が日報作成者に伝わり、その後の対応は会社によって定めてください。一般的には日報を修正して再提出することになります。棄却時は次の承認権限者への承認権限移転は発生しないため、承認・棄却ボタンはそのまま表示されます。|
|承認して次へボタン|承認ボタンとほぼ同じですが、承認後に次の日報へ画面が自動で切り替わります。承認しなければならない日報がたくさんある場合にご利用ください|

### 日報の棄却とリレーの切断

一度棄却されて修正された日報の承認リレーはどうなるのでしょうか？
正解は「最初からやり直し」になります。（承認後に内容が変わっているためです）