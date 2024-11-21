+++
url = "/docs/manual/event/connect/"
description = "この記事では、予定とレポートを紐付けて管理する方法について説明します。予定が完了した後、その結果をレポートとして報告し、これらを紐付けることで、「予定（計画）」と「レポート（実績）」を対比しながら確認できます。"
# tags = []
title = "予定とレポートを紐付けする"
toc = true
weight = 940
draft = true
mermaid = true
# aliases = []
# images = []
+++

予定が作成された時点では、その予定はまだ着工されていないため予定です。
時が進み予定が完了したときその結果をレポートとして報告します。
レポートと予定を紐付けすることでレポートを受け取るスタッフから見ると、「予定（予定）」と「レポート（実績）」の対比をしながら確認できます。
紐付けするには、予定を表示してから[レポートを書く](/docs/manual/write-report/write/)という手順を踏みます。

1. 予定を詳細表示する
2. 右パネルからテンプレートを選択する
3. レポートを通常通りに作成する

{{<imgproc select.png "予定詳細画面から報告するレポートのテンプレートを選択する" >}}


テンプレートを選択すると選択したテンプレートを元にしたレポート作成画面へ切り替わります。このときレポート作成画面上には**このレポートは予定の報告として紐づきます**という説明バナーが表示されています。

{{<imgproc write.png "予定詳細画面からレポート作成画面へ切り替わります。" >}}

これでレポートと予定は紐付いた状態になりました。あとは通常通りに[レポートを作成](/docs/manual/write-report/write/)してください。保存する際に自動で予定とレポートの紐づきが記録されます。

{{<alice pos="right" icon="here">}}
レポートの画面自体は通常のレポートと全くおなじです。違いは紺色の説明バナーだけです
{{</alice>}}

## 予定とレポートの紐づきを確認する{#relation}

レポートと予定はいわゆる**相互リンク**された状態になります。例えば予定を表示してみると、その予定と紐付けされたレポートが下部に表示されています。

{{<imgproc tasktoreport.png "予定詳細画面下部には紐付けがされたレポートが表示される" >}}

このレポートへのリンクをクリックするとそのレポートがポップアップで表示されます。

{{<alice pos="right" icon="here">}}
カレンダーから見ると、予定のポップアップー＞レポートのポップアップと少し画面がにぎやかになります
{{</alice>}}

予定から見たレポートは一対多の関係になります。1つの予定に対して、複数のレポートを書くことができます。複数のレポートが書かれた場合は予定詳細画面から見たレポートへのリンクがその数だけ増えます。

{{<imgproc onetoany.png "予定とレポートは常に一対多の関係にあります。予定に複数のレポートが紐付けられるとその数だけレポートが一覧に追加されます" >}}

逆に、レポートから見た予定は常に1つです。図で表現すると次のような相関図になります。

```kroki {type=mermaid}
graph LR;
  予定A --> レポートA
  予定A --> レポートB
  予定A --> レポートC
```

{{<alice pos="right" icon="default">}}
レポートの表示画面から予定を確認する機能については現在実装されておりませんが将来的に実装される予定です
{{</alice>}}