+++
url = "/docs/manual/write-report/rewrite/"
# aliases = []
title = "🛠️レポートの修正 - 改ざん防止と信頼性の高い記録管理" # 機能を魅力的に表現しSEOを意識
menuTitle = "🛠️レポートの修正"
description = "NipoPlusのレポート修正は、データの改ざん防止と信頼性確保のために、承認後に制限されます。提出した日報や点検記録に誤りがあった場合の修正手順、および承認フローの途中で修正が必要になった場合の対応方法を解説。チャット日報との違いを含め、NipoPlusが提供する堅牢な記録管理の価値を説明します。" # メリットと具体的な状況を提示
toc = true
weight = 50125
tags = ["レポート修正", "改ざん防止", "データ信頼性", "監査証跡", "記録管理", "業務報告", "日報編集", "点検記録", "品質記録", "証拠能力", "承認フロー"] # SEOタグを拡充
contributors = []
+++

NipoPlusでは、提出されたレポート（日報、点検記録、業務報告書など）が「承認」されると、**原則としてそのレポートは修正ができなくなります**。

この制限は、データの改ざんを防止し、記録の信頼性と正確性を保証するための重要な特徴です。
チャットツールでの日報のように、一度投稿した内容を簡単に書き換えられるシステムでは、後から「誰が、いつ、何を報告したのか」というデータの正しさを保証することが困難になります。
これは、特に**品質記録・安全点検記録・監査証跡** といった、高い信頼性が求められる業務においては大きなリスクとなります。
NipoPlusがこの「修正の不便さ」を提供しているのは、<strong>「承認」という行為を「太鼓判を押す」ことと同義</strong>と捉えているからです。承認されたデータが後から容易に書き換えられてしまっては、その承認の意味が失われ、まるで白紙の委任状のような状態になってしまいます。
そのためNipoPlusでは、皆様の記録の「**信頼性**」と「**証拠能力**」を最大限に高めるために、修正に制限を設けています。

レポートは以下のケースで**ロックされ、修正できなくなります**。

- レポートが[承認](/docs/manual/read-report/state/#agree)されたとき
- レポートが[承認リレー](/docs/manual/read-report/state/#relay)に入ったとき（承認者が複数名いる場合、最初の承認が行われた時点）

これらのロックを解除し、レポートを修正するには、その[レポートを棄却](/docs/manual/read-report/state/#reject)する必要があります。
レポートを修正できるのは、<strong>レポートを書いた本人</strong>、または<strong>[提出先に指定されたスタッフ](/docs/manual/write-report/dist/)のみ</strong>です。

## レポートを書いた本人が修正する{#owner}

提出したレポートに誤りがあったり、提出先から[棄却](/docs/manual/read-report/state/#reject)されたりした場合、レポートを書いた本人が内容を修正して再提出できます。

1.  修正したいレポートを[送信BOX](/docs/manual/read-report/list/#listbox)や[カレンダー](/docs/manual/read-report/list/#calendar)などから表示する
2.  右側にある「<strong>修正</strong>」ボタンをクリック
3.  レポート編集画面に遷移
4.  内容を修正して「<strong>修正</strong>」ボタンをクリックして再提出

{{<icatch filename="img/edit" msg="提出した日報や点検記録に誤りがあった場合、レポートを開いて「修正」ボタンをクリックします。承認済みのレポートは修正できません" alice="here">}}

「修正」ボタンをクリックするとレポートの編集画面に切り替わります。一見すると[レポートの作成](/docs/manual/write-report/write/)画面と同じですが、細かな違いがあります。

- 「提出」ボタンが「<strong>修正</strong>」ボタンに変化
- 下書きの利用不可

それ以外は[通常のレポート作成](/docs/manual/write-report/write/)と同様の手順で修正できます。

## 他のスタッフのレポートを代理修正する{#agent}

レポートの提出先に指定されたスタッフ（承認者）は、承認前のレポートであれば代理で修正することも可能です。
これは、**軽微な誤字脱字の修正**や、<strong>報告内容の補足</strong>など、提出者に代わって迅速に対応したい場合に便利です。

他人のレポートを修正するという行為になりますので、<strong>修正は慎重</strong>に行ってください。
代理修正は改ざん防止の観点から[ログ](/docs/manual/utils/log/)に残ります。これにより、**いつ、誰が、どのレポートを修正したか**が明確に記録され、監査証跡として利用できます。

## 修正後の状態について{#state}

レポートが修正されると、そのレポートの[状態](/docs/manual/read-report/state/#status)が「<strong>修正</strong>」に切り替わります。

{{<icatch filename="img/report-status-change" msg="修正された日報や点検記録は状態が「修正」になります。これにより、修正履歴を視覚的に把握できます" alice="guide">}}

もし承認リレーが組まれていたレポートであった場合は、
**承認リレーがどこまで進んでいても1から振り出しに戻ります**。これは、「**承認済みの内容に変更を加えた場合は、改めて全ての承認者に再承認を求める**」という、信頼性を重視した運用ルールに基づいています。
