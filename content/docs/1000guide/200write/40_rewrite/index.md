+++
url = "/docs/manual/write-report/rewrite/"
title = "🛠️レポートの修正"
description = "提出したレポートに誤りがあったり棄却された際は修正して再提出できます。または削除して新規に作ることもできます"
toc = true
weight = 240
# tags = []
+++

レポートはロックが掛かると修正できません。ロックは以下のケースで発生します

- レポートが[承認](/docs/manual/read-report/state/#agree)されたとき
- レポートが[承認リレー](/docs/manual/read-report/state/#relay)に入ったとき

ロックを解除するにはその[レポートを棄却](/docs/manual/read-report/state/#reject)する必要があります。
レポートを修正できるのはレポートを書いた本人、または[提出先に指定されたスタッフ](/docs/manual/write-report/dist/)のみです。

## レポートを書いた本人が修正する{#owner}

1. 修正したいレポートを表示する
1. 右側にある修正ボタンをクリック
1. レポート編集画面に遷移
1. 内容を修正して修正ボタンをクリック

修正するレポートは[送信BOX](/docs/manual/read-report/list/#listbox)や[カレンダー](/docs/manual/read-report/list/#calendar)から探してください。

{{<icatch filename="edit" msg="レポートを開いて修正ボタンをクリック！承認済みのレポートは修正できません" alice="here">}}

修正ボタンをクリックするとレポートの編集画面に切り替わります。一見すると[レポートの作成](/docs/manual/write-report/write/)画面と同じですが細かな違いがあります。

- 「提出」ボタンが「修正」ボタンに変化
- 下書きの利用不可

それ以外は[通常のレポート作成](/docs/manual/write-report/write/)と同様の手順で修正できます。

## 他のスタッフのレポートを代理修正する{#agent}

レポートの提出先に指定されたスタッフが承認前に代理で修正することも可能です。
軽微な誤字脱字の修正の際にご利用ください。
他人のレポートを修正するという行為になりますので**修正は慎重**に行ってください。
代理修正は改ざん防止の観点から[ログ](/docs/manual/utils/log/)に残ります

## 修正後の状態について{#state}

修正すると[レポートの状態](/docs/manual/read-report/state/#status)が「修正」に切り替わります。

{{<icatch filename="report-status-change" msg="修正されたレポートは状態が「修正」になります" alice="guide">}}

もし承認リレーが組まれていたレポートであった場合は、承認リレーがどこまで進んでいても1から振り出しに戻ります。
