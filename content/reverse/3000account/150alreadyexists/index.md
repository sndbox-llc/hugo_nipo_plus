+++
url = "/reverse-lookup/account/already-exists/"
# aliases = []
title = "重複したメールアドレスの問題を解決"
menuTitle = "「すでに使用済みのメールアドレスです」と表示される"
description = "スタッフのアカウントを新規に作成しようとしたとき、すでに使用済みのメールアドレスと表示されて作成できない場合の対処法について説明します"
isDictionaly = true
toc = false
weight = 3150
date = "2024-12-27"
tags = ["アカウント設定"]
contributors = []
+++

## 「すでに使用済みのメールアドレスです」と表示されてアカウントが作れないとき{#email_in_use}

組織内にスタッフのアカウントを作成する際、「すでに使用済みのメールアドレスです」というエラーが表示されてアカウントの作成に失敗することがあります。

{{<iTablet filename="img/alreadyexists" msg="エラーが起きてアカウントが作れない場合はどうすればいいの？" alice="question">}}

このエラーは内容の通りで、すでにNipoPlusのサーバ上に当該メールアドレスが登録されているときに発生します。  
NipoPlusでは同じメールアドレスを登録することができないため、このようなエラーが起きます。  
一番シンプルな解決法は違うメールアドレスを使うことですが、どうしてもそのアドレスを使用したい場合、先にそのアドレスのアカウントを削除するか、メールアドレスを変更する必要があります。

この問題が起きるケースの最も多いパターンが、先行してテスト用としてNipoPlusのアカウントを作っており、いざ本番導入時に新しい組織を作った際にテスト用アカウントをそのまま残してしまっているケースです。

### メールアドレスを変更して使いたいメールアドレスを空き状態にする{#change_email_to_free}

アカウント削除よりもメールアドレス変更のほうが簡単です。

1. 当該メールアドレスとパスワードを使ってログインします
2. 左メニューから「アカウント」をクリック
3. E-mailの行にある「メールアドレス変更」ボタンをクリック
4. 適当なメールアドレスと、ログインパスワードを入力し「変更」ボタンをクリック

これで使用したいメールアドレスが「空席」の状態になります。

### アカウント自体を削除することでも空席にできます{#delete_account_to_free_email}

テスト用アカウントが完全に不要であれば、退会処理をすることでもアカウントの削除ができます。
詳しくは[退会処理についてのページ](/docs/manual/utils/org/)を御覧ください。
