+++
description = "E-mailとパスワードの組み合わせがただしくて初めてログインが可能です。ログイン・ログアウトに関する操作ガイドになります"
tags = []
title = "🔓ログインとログアウト"
toc = true
weight = 101009001
aliases = ["/docs/manual/account/_about/"]
images = ["signin_tablet.png"]
+++

## Nipo+にログインする{#signin}

E-mailとパスワードを入力し、ログインボタンをクリックします。

{{<icatch filename="signin" msg="E-mailとパスワードを入力してログインします">}}

E-mailとパスワードの組み合わせが正しくない場合はログインに失敗します。パスワードは大文字・小文字を異なる文字と認識するため打ち間違いに注意してください。  
何度か連続でログインに失敗すると**数分の間ログイン操作がロックされます**。ロックが掛かった場合は5分ほど時間をおいてやり直してください。  
また、ログインに成功すると次回以降はブラウザ上にログイン情報が記録されるため意図的にログアウトしないかぎり次回以降は自動でログインが行われます。
もしログインパスワードがわからない場合は[パスワードの再設定](/docs/manual/account/email/#password)を行ってください。

{{<alice pos="right" icon="ok">}}
パスワードの再設定にはアカウントのメールアドレスが必要になるよ
{{</alice>}}

## ログアウトする{#signout}

NipoPlusは手動でログアウトしない限りはログイン状態を維持します。
ネットカフェや図書館など**公のPCなどからNipoPlusにアクセスした場合は必ずログアウト**をするようにしてください。



1. メニューから「アカウント」をクリック
1. ログアウトボタンをクリック

{{<icatch filename="signout" msg="ご利用中の端末からログアウトするにはアカウント＞ログアウトの順にクリックします">}}

複数の端末でログインしている場合、1つの端末でログアウトしても他の端末ではログイン状態が維持され続けます。
すべての端末からログアウトする専用の機能は有りませんがもし全ての端末から強制的にログアウトさせたい場合は、[ログインメールアドレスの変更](/docs/manual/account/email/)か[ログインパスワードの変更](/docs/manual/account/email/#password)を行うことで強制的に全端末からログアウトできます。
