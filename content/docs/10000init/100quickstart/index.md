+++
url = "/docs/manual/quickstart/"
# aliases = ["/docs/manual/quickstart/"]
title = "🔰初めての方向けスタートガイド"
menuTitle = "🔰初めての方へ"
description = "初めてNipoPlusを使う方向けのチュートリアルガイドです"
toc = true
weight = 10100
tags = []
contributors = []
+++

必要最小限の手順で基本的な流れを一通りご紹介します。  
このページに沿って操作していただくことで基本操作をマスターできます。

{{< callout context="note" title="最初はPCを使おう" icon="outline/info-circle" >}}
初期設定は細かい作業もあるため、PCで行うことをおすすめします。本ガイドもPC画面を前提にお伝えします。スマホやタブレットは初期設定後に使いましょう
{{< /callout >}}

## 手順1:NipoPlusを起動する{#start}

初期設定関係は画面の小さいスマートフォンだと操作性が低下しますのでPCをご利用下さい。
起動するには画面右上の「<a  href="https://nipoplus.sndbox.jp/" target="_blank">起動</a>」ボタンをクリックします

{{<nextArrow>}}

## 手順2:アカウントを作成する{#create_acount}

手軽に体験できる[匿名アカウント](/docs/manual/utils/tokumei/)が用意されています。E-mailやパスワードの設定を後回しにできるためお試しに最適です。
匿名アカウントで始めてみましょう。「匿名アカウントを発行」ボタンをクリックします

{{< callout context="caution" title="匿名はWeb版限定です" icon="outline/alert-triangle" >}}
[Android](/docs/system/mobile-install/#googlePlay) / [iOS](/docs/system/mobile-install/#appStore)版では匿名アカウントは利用できません。[Web版](/docs/system/mobile-install/#web)をご利用ください
{{< /callout >}}

1. 「匿名アカウントを発行」をクリック
2. 確認メッセージが表示されるので「はじめる」をクリック
3. [システム利用規約](/docs/system/agree/)の同意画面が表示されるため同意をお願いします
4. データの初期化が行われます。少し時間がかかります（10秒〜20秒ほど）
5. 初期化処理が完了すると画面がグループ設定画面へ切り替わります。

{{<icatch filename="img/temp-id" msg="お試しで使うのにわざわざアカウント作るの面倒だよね。あとから昇格できるから安心して" alice="ok">}}

{{<nextArrow>}}

## 手順3: レポートのテンプレートを作る{#make_template}

テンプレートとは日報やチェック表の雛形です。フォーマットや様式と表現されることもあります。
テンプレートを作り、その**テンプレートに沿ってデータの入力をする**ことが最も基本的な操作となります。
テンプレートは簡単に作成できます。最初にサンプルのテンプレートも用意されていますがシンプルなテンプレートを作ってみましょう。

1. メニュー「グループ設定」＞「テンプレート管理」＞「新規作成」をクリック
2. テンプレート名を入力

{{<icatch filename="img/new-template" msg="初めてのテンプレートを作ってみよう！" alice="ok">}}

テンプレートの編集画面へ切り替わります。
「午前作業・午後作業・明日の予定・備考」計4つの入力フォームで構成されたシンプルなテンプレートを作ってみます。

1. 画面左パネルから「文字入力」を4回クリックします
2. 追加されたフォームのそれぞれタイトルを変更します（午前作業・午後作業・明日の予定・備考）
3. 画面下部にある「保存して終了」をクリックします

{{<icatch filename="img/make-template" msg="入力フォームを並べるだけで簡単にテンプレートが作れるよ" alice="ok">}}

お疲れさまでした。これで初めてのテンプレート作成は完了です。次章でこのテンプレートを使って実際に[レポートを書いて](/docs/manual/write-report/write/)みましょう。
より詳しいガイドについては[テンプレート作成ガイド](/docs/manual/initial-setting/template/make/)の記事をご覧ください

{{<nextArrow>}}

## 手順4:レポートを書いて自分宛てに提出する{#write_report}

早速[レポートを書いて](/docs/manual/write-report/write/)みましょう。本来レポートは上司に対して提出するものですが、まだこの時点では管理者であるあなた一人しか居ないはずです。
上司の追加はひとまずおいておいて、自分に向けて[レポートを書いて](/docs/manual/write-report/write/)、自分の[レポートを承認する](/docs/manual/read-report/state/)流れを見てみましょう。

1. レポート作成をクリック
2. テンプレート一覧から「初めてのレポート」をクリック
3. テンプレートに沿って報告内容を記入する
4. 提出先を「管理者」（あなたのアカウントです）にして提出する

{{<icatch filename="img/write-report2" msg="初めてのレポート作成です。自分宛てにレポートを書いてみよう">}}

チュートリアルなのでレポートの内容は適当で大丈夫です。提出先を「管理者」にして提出ボタンをクリックします。

お疲れ様でした。これでレポートが作成されて管理者宛に提出されました。提出後は引き続き[レポートを書く](/docs/manual/write-report/write/)か、書いたレポートを確認するか選びます。
ここでは「作成したレポート表示」を選び、先程のレポートを見てみましょう。

{{<icatch filename="img/next" msg="レポート提出したあとどうするか選んでね" alice="here">}}

{{<nextArrow>}}

## 手順5:提出されたレポートを承認してみよう{#read_report}

レポート作成後に「作成したレポート表示」を選ぶとその[レポートを読む画面](/docs/manual/read-report/state/)へ移動します。
ここからはレポートを受け取る上司の立場になってみましょう。
レポートに対して[コメントを書く](/docs/manual/read-report/state/#comment)ことや、レポートを[承認](/docs/manual/read-report/state/#agree)したり、[PDF出力](/docs/manual/read-report/state/#pdf_export)したりできます。

右側メニューから「承認」をクリックしてレポートを承認してみましょう。

{{<icatch filename="img/report-agree" msg="自分の書いたレポートを承認してみましょう" alice="here">}}

承認はレポートのロックも兼ねています。一度承認するとそのレポートは管理者でないと削除出来なくなるため、不正防止に役立ちます。
内容に不備があれば棄却したり、コメントで指摘したり、[上司が直接修正](/docs/manual/write-report/rewrite/#agent)することも出来ます。

## 手順6:上司や部下など他のスタッフのアカウントを作成しよう{#add_member}

スタッフアカウントを追加して、[レポートを読む](/docs/manual/read-report/state/)人と[レポートを書く](/docs/manual/write-report/write/)人を明確に区別しましょう。
[スタッフのアカウントを作る](/docs/manual/initial-setting/staff/make/)必要があります。

1. メニュー「グループ設定」＞「スタッフ管理」＞「アカウント作成」の順にクリック
2. スタッフが使用するE-mailを入力（パスワードは自動で用意しますが手動で変更も可）

{{<icatch filename="img/create-account" msg="スタッフアカウントを作ってみましょう。" alice="guide">}}

スタッフのアカウントを作ると「スタッフ」という[権限](/docs/manual/initial-setting/staff/rank/)になります。
スタッフ権限は[テンプレートの編集](/docs/manual/initial-setting/template/make/)やアカウント作成はできないので安心です。

## 手順7： スタッフにNipoPlusのログイン情報を伝えて相互にやり取りしてみよう{#join_staff}

チュートリアルも最後の工程です。
先程作ったスタッフアカウントのログインE-mailアドレスとログインパスワードをスタッフに伝えてください。
スタッフのPCやスマートフォンからNipoPlusを開き、E-mailとログインパスワードを入力してログインをします。

{{<icatch filename="img/sign-in" msg="他のタブレットやPCから先程作ったアカウントでログインしてみよう" alice="tablet">}}

これでスタッフアカウントとしてログインができました。これでスタッフがレポートを書いてあなた宛に提出できるようになります。

---

## 💡ちょっと便利な機能について紹介💡{#tips_about}

チュートリアルには掲載しきれなかった便利な機能が色々ありますので、利便性の高い順にいくつかご紹介します

### レポートの提出先を固定する{#locked}

スタッフが誤って別の人にレポートを提出してしまわないように、管理者が予め[レポートの提出先を固定](/docs/manual/initial-setting/staff-local/dist/)することができます。
固定するとスタッフはレポート作成時に提出先の指定をする必要が無いため、余分な手間を減らすことができるようになります。
また、「**誰に提出すればいいかわからない？**」という問題も未然に防げます

{{<icatch filename="img/locked" msg="提出先を固定することでスタッフが誤って別のスタッフに提出してしまうミスを防止できます" alice="ok">}}

### タグでレポートや予定を効率よく管理する{#tags}

タグって便利ですよね。受信したレポートや予定、テンプレートなど色々なものに[タグを付ける](/docs/manual/initial-setting/advanced-setting/tag/)ことができます。

{{<icatch filename="img/tag" msg="レポートにタグを付けると目印になるし、検索にも使えるよ" alice="here">}}

### グループをわけて目的別のレポート管理をする{#group}

新人研修会用のレポート、製造部、営業部、経理部のレポートなど、目的や部署に応じてグループを分けることができます。
グループが変わればその中で**使えるテンプレートも、タグも、設定も全部個別に指定**できます。
グループ機能は特に人数が多いと便利です。
（※逆に少人数の利用ではレポートが四散して管理しにくくなる場合もあります。ケースバイケースで使い分けてください）

{{<icatch filename="img/switch-group" msg="グループを分ければレポートの管理もしやすくなるね"  alice="ok">}}

{{< callout context="note" title="グループについて" icon="outline/info-circle" >}}
チュートリアルでは意図的に触れませんでしたが、「デフォルトグループ」が自動で作成されております。これまでの作業も全てグループ内での作業です
{{< /callout >}}

{{< link-card title="マニュアル:グループの作成"  description="操作ガイド"  href="/docs/manual/initial-setting/make-group/" >}}

---

## 匿名アカウントは早期に昇格しましょう{#last}

チュートリアルで作成した[匿名アカウント](/docs/manual/utils/tokumei/)はあくまでも仮のIDです。継続して利用を検討される際は**必ず正規アカウントへ昇格させて**ください。
正規アカウントへ昇格することで複数の端末で[ログイン・ログアウト](/docs/manual/account/signin/)が可能になります。

{{< callout context="caution" title="匿名アカウントは不安定な状態？" icon="outline/alert-triangle" >}}
匿名アカウントは**パスワードが未登録**のため何らかのはずみで接続が途絶えてしまうとこれまでのデータにアクセスできなくなります
{{< /callout >}}

{{< link-card title="匿名アカウントを正規アカウントへ昇格" description="操作ガイド"  href="/docs/manual/utils/tokumei/" >}}

ここまで御覧いただきありがとうございました。
他にも便利な機能がありますので詳しくは[マニュアル](/docs/manual/)を御覧ください。
「こんなことはできる？」など、ご不明な点がございましたらいつでも遠慮なく[お問い合わせ](/others/inquery/)ください。
