+++
url = "/legacy/manual/email-verify/"
description = "Nipo【旧版】に登録されたE-mailに誤りが無いかを確認することを「メールの確認」といいます。このページではE-mailの確認について解説しています"
title = "メールアドレスを確認する"
toc = true
weight = 8110
isNipo = true
# tags = ["旧バージョン"]
# aliases = []
[sitemap]
  changefreq = "yearly"
  priority = 0.2
+++

## E-mailの役割はログインの他にもある非常に重要な情報です{#email}

Nipo【旧版】では利用者様を識別するためのアカウントとして、E-mailアドレスを使用しています。E-mailアドレスはログイン時に入力したり、
万が一パスワードを忘失してしまったときの復元などに使用する、とても重要な情報です。
登録されたE-mailアドレスが間違っていたり、受信できない場合、パスワードを忘れたときの再発行ができなくなる恐れがあるため、アドレスに誤りが無いことを確認ましょう。

## アカウントにメールアドレスを登録すると確認メールが届きます{#verify}

メールアドレスの確認メールは次のようなタイミングで送信されます

- Nipo【旧版】のアカウントを作成したとき（匿名アカウントを除く）
- アカウントのメールアドレスを変更したとき
- 匿名アカウントから正規アカウントに変更したとき

送られてくる確認のメールは次のような文面です

<blockquote>

クラウド日報Nipo<br>
Nipo メールアドレスの確認<br>
宛先: XXXX<br>
返信先: nipo.cloud@gmail.com<br>

お客様<br>

メールアドレスを確認するには、次のリンクをクリックしてください。

https://nipo-77c25.firebaseapp.com/__auth/action?mode=verifyEmail&oobCode=6BQFVJbWcug&apiKey=AlzaSyCOpbwJGcoYkU7J279Fw8qCmLhgz2xy6x0&lang=ja

このアドレスの確認を依頼していない場合は、このメールを無視してください。<br>
よろしくお願いいたします。<br>
Nipo チーム
</blockquote>


受信したメールを開き、メール文面にある確認用リンクをクリックすることでメールアドレスの確認は完了です。
もしも確認メールが届かない場合は、そもそもメールアドレスが間違えていないか？また、迷惑メールフォルダに割り振られていたり、フィルタリングで自動削除されていないことを確認してください。

{{<alice pos="left" icon="default">}}
特にフィルタリングは無言で削除される場合もあるので注意です！
{{</alice>}}

## メールアドレスの確認が済んでいない場合{#pre}

メールの確認が完了していないアカウントでは、Nipo【旧版】の画面上部にメールの確認を促すバナーが表示されます。
このバナーはメールアドレスの確認が完了するまで表示されます。


もしメールアドレスの確認が完了したのにバナーが消えない場合は、バナーに上の**更新ボタン**をクリックしてください。
また、確認メールが届かない場合は**再送ボタン**をクリックしてください。
登録されているE-mailを確認するには、画面右上の**アカウントボタン**をクリックします。


もしメールアドレス自体を間違えていた場合は、メールアドレスの変更を済ませた上で再度メールの確認作業を行ってください。