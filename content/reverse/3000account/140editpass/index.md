+++
url = "/reverse-lookup/account/editpass/"
# aliases = []
title = "スタッフのパスワードを管理者権限で変更したい"
menuTitle = "スタッフのパスワードを管理者権限で変更したい"
description = "スタッフのパスワードは管理者権限で強制的に変更することができます。"
isDictionaly = true
toc = false
weight = 3140
date = "2024-12-05"
tags = ["アカウント設定"]
contributors = []
+++

## 管理者がスタッフのパスワードを強制的に変更できます{#update_pass_word}

NipoPlusではログインパスワードの変更を自分自身で行う他に、管理者の権限で強制的に書き換えることができます。  
退職したスタッフのアカウントを他のスタッフに譲渡する際に便利です。また、単純に利用しているスタッフがパスワードを忘れたときの救済措置としても利用できます。

1. [左メニューから組織設定をクリック](/docs/setup/staff-global/rank/#rootSettingBtn)
2. パスワードを変更したいスタッフを探す
3. パスワードの列にあるボタンをクリックし、ダイアログに沿ってパスワードを変更する

{{<iTablet filename="img/editpass" msg="パスワードを変更するとすでにログイン中のアカウントは自動でログアウトします" alice="shield">}}

{{< callout context="note" title="スタッフがパスワードを変更" icon="outline/info-circle" >}}
パスワードは[スタッフ自身が変更する](/docs/manual/account/email/#change_self)こともできます。この際はログイン時に使用するメールアドレスが必要です。
{{< /callout >}}
