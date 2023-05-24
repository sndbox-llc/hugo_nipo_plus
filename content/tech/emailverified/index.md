+++
description = "Firebaseでユーザが登録したE-mailが本当に正しいかを確認する一連の流れについて紹介しています。FirebaseではE-mail確認に関する機能が用意されているため比較的簡単に実装できます"
menuTitle = "FirebaseのEmail認証"
tags = []
title = "FirebaseのE-mail認証でアドレスが正しいことを確認する"
toc = true
weight = 105000019
+++


Firebaseの認証機能を使えば、面倒なログイン回りの処理がほとんど省略できて幸せになれます。
ほとんどの処理がかなり簡単に使えるのですが、1つ、E-mailが正しいことを確認する処理が若干マニュアルではわかりにくいので備忘録として残します

## currentUser.emailVerified

Firebaseでは、E-mailでアカウントを作成した場合、すぐにアカウントが作成されてそのまま利用可能です。しかしユーザが本当に正しいメールアドレスを入力している保証はありません。
ちゃんと確認のメールを送って、それが届いて、メール本文中の確認用リンクを踏んで初めて「正しい」と確認できるのです。

ありがたいことにFireBaseではこの確認作業もあらかじめ用意されているので、いちいち自前で用意しなくても済みます。

ユーザがログインした際、

```javascript
firebase.auth().currentUser
```

でログインユーザの情報を取得できます。同様に、

```javascript
firebase.auth().currentUser.emailVerified
```

でログイン中のユーザが入力したメールアドレスが認証済みか否かを取得できます。これはBoolで帰ってきます。  
なお、googleアカウントによるログインでは、.currentUser.emailVerifiedは常にTrueを返すようです。

## 認証が終わってないなら認証メールを投げる

ユーザがアカウントを作成したときに入力したメールアドレスは、

```javascript
firebase.auth().currentUser.email
```

で取得できます。
firebase.auth().currentUser.emailVerifiedがFalseだったときに、firebase.auth().currentUser.emailのメールアドレス宛に確認メールを投げます。確認メールは

```javascript
firebase.auth().currentUser.sendEmailVerification()
```

で送信できます。メールアドレスは特に指定しなくても、勝手にログインユーザ宛に送ってくれます。
実際にプログラムするとこんな感じです

```javascript
// Nipoのソースからコピペしたので、独自の命令とかもあります。
async emailAuthMixin_sendVerifyMail () {
  try {
    await this.$firebase.auth().currentUser.sendEmailVerification()
    alert('E-mailをおくりました')
  } catch (e) {
    console.error(e)
    alert('なんか失敗したようですね') 
  }
}
```

[公式ガイドのリンク](https://firebase.google.com/docs/auth/web/manage-users?hl=ja#send_a_user_a_verification_email)も載せておきます

認証メールの件名は、FireBaseの設定画面から変更できますが、文面は変更できません。（言語を日本語にすることはできます）

{{<imgproc firebase-email.png "Firebaseの管理コンソール画面。確認メールの件名や言語は変更できますが本文の変更は制限されています" />}}
