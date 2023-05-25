+++
description = "旧バージョンのNipoからNipoPlusへ移行する際、テンプレートをそのままNipoPlusへ引き継ぐことができます"
menuTitle = "NipoのテンプレートをNipoPlusへ取込"
tags = []
title = "NipoのテンプレートをNipoPlusへ取込"
toc = true
weight = 108999996
contributors = []
+++

Version 1.21.0でテンプレートの取り込み機能が実装されます。

Nipo（旧バージョン）で作成した日報テンプレートをNipoPlusへ取り込みできるようになりました。

まずNipo（旧バージョン）を開き、設定画面から日報テンプレートをエクスポートします。

{{<imgproc template_export.png "日報テンプレートをJsonファイルにエクスポートする" />}}

{{<alice pos="right" icon="shield">}}
ダウンロードしたファイルは編集しないように！壊れてしまいます
{{</alice>}}

続いてNipoPlusを起動し、テンプレート設定画面を開きます。

{{<imgproc template_import.png "NipoPlusから先程のJSONファイルを取り込みます" />}}

数秒ほどで解析が完了し、日報テンプレート一覧が表示されます。

{{<imgproc template_list.png "テンプレート一覧が表示されます" />}}

プレビューボタンを押すと実際に日報作成画面をポップアップで確認できます。
取り込みボタンを押すとNipoPlusへ取り込みが実行されます。（取り込まれたテンプレートは一覧から削除されます。）
削除ボタン（ゴミ箱アイコン）をクリックすると取り込みをせずに削除します。
