+++
description = "提出したレポートに誤りがあったり棄却された際は修正して再提出できます。または削除して新規に作ることもできます"
tags = []
title = "🛠️レポートの修正"
toc = true
weight = 101002004
aliases = []
images = []
+++

レポートはロックが掛かると修正できません。ロックは以下のケースで発生します

- レポートが承認されたとき
- レポートが承認リレーに入ったとき

ロックを解除するにはそのレポートを一度棄却する必要があります。

{{<btnCenter "/docs/manual/read-report/state/" "承認・棄却・既読について">}}

レポートを修正できるのはレポートを書いた本人、または提出先に指定されたスタッフのみです。

## レポートを書いた本人が修正する{#owner}

1. 修正したいレポートを表示する
1. 右側にある修正ボタンをクリック
1. レポート編集画面に遷移
1. 内容を修正して修正ボタンをクリック

修正するレポートは送信BOXから見つけることができます。あるいは通知エリアから直接、修正するレポートへ飛ぶこともできます。

<div class="row justify-content-center">
<div class="col-sm-16 col-md-5">{{<button "/docs/manual/read-report/list/" "保存箱について">}}</div>
<div class="col-sm-16 col-md-6">{{<button "/docs/manual/utils/notice/" "アプリ内通知">}}</div>
</div>

{{<icatch filename="edit" msg="レポートを開いて修正ボタンをクリック！承認済みのレポートは修正できません" alice="here">}}


修正ボタンをクリックするとレポートの編集画面に切り替わります。一見すると[レポートの作成](/docs/manual/write-report/write/)画面と同じですが細かな違いがあります。

- 「提出」ボタンが「修正」ボタンに変化
- 下書きの利用不可

それ以外は通常のレポート作成と同様の手順で修正できます。

{{<btnCenter "/docs/manual/write-report/write/" "レポートを書く">}}

## 他のスタッフのレポートを代理修正する{#agent}

レポートの提出先に指定されたスタッフが承認前に代理で修正することも可能です。
軽微な誤字脱字の修正の際にご利用ください。
他人のレポートを修正するという行為になりますので**修正は慎重**に行ってください。

{{<alice pos="right" icon="shield">}}代理修正は改ざん防止の観点からログに残ります{{</alice>}}


## 修正後の状態について{#state}

レポートを修正すると状態が「修正」に切り替わります。

{{<icatch filename="report-status-change" msg="修正されたレポートは状態が「修正」になります" alice="guide">}}

もし承認リレーが組まれていたレポート出会った場合は、承認リレーがどこまで進んでいても1から振り出しに戻ります。

