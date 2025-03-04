+++
url = "/docs/manual/initial-setting/staff-local/template/"
# aliases = ["/docs/manual/initial-setting/staff-local/template/"]
title = "🚫スタッフが利用できるテンプレートを制限する"
menuTitle = "🚫利用可能テンプレートの制限"
description = "スタッフごとに利用が可能なレポートのテンプレートを指定できます"
toc = false
weight = 10603
tags = ["スタッフ管理", "編集者権限"]
contributors = []
+++

## レポート作成時に使えるテンプレートを制限する{#limitUsageTemplate}

スタッフごとにレポート作成時に選択できるテンプレートを制限できます。
テンプレートの数が多い場合は制限することで操作性を向上できます。

1. グループ設定をクリック
2. スタッフ管理をクリック
3. テンプレートを制限をクリック
4. 「利用可能なテンプレートを制限する」をONにする
5. 利用可能なテンプレートをリストから選ぶ

{{<icatch filename="img/show-template-setting" msg="スタッフが使用できるレポートのテンプレートを制限できます" alice="shield">}}

{{<nextArrow>}}
ポップアップで設定が開きます。
{{<icatch filename="img/template-control-setting" msg="使用可能なテンプレートを選ぶと、それ以外のテンプレートが使えなくなるよ" alice="here">}}

利用可能なテンプレートを制限するのチェックを入れ、テンプレートを選んでください。
[レポート作成時](/docs/manual/write-report/write/#select_template)に選ばれたテンプレートだけが一覧に表示されるようになります。

## 制限がかかるのはレポート作成のみです{#info}

利用可能なテンプレートの制限で制限されるのはレポート作成時のみで、それ以外の「集計」や、制限されたテンプレートで作成されたレポートを読むことは可能です。
