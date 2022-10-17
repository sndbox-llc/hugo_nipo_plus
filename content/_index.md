+++
description = "日報テンプレート自作可能。会社独自の日報を手軽に設計できます。PC/スマホ/タブレット対応。CSV出力やPDF出力も対応。日報やチェックシート管理に"
draft = false
menuTitle = "Home"
title = "自作可能な日報アプリ"
toc = false
reqMermaid = false
+++

# 日報アプリ NipoPlus

## NipoPlusってなに？1分で解説します

百聞は一見にしかず。まずはNipoPlusの画面を御覧ください。

{{<imgproc nipoplus.png "nipoPLusのアプリ画面イメージをiPadサイズで表示した例" />}}

もう少し詳しく見てみましょう。
日報本体にはレビューでおなじみの[★★★☆☆のような形式](/org/groupsetting/template/rate/)や[ラジオボタン](/org/groupsetting/template/select/)、果ては[署名](/org/groupsetting/template/sign/)まで埋め込まれているのが確認できます。  
日報上部には管理者の[承認](/report/read/state/)印が押され、あと二人の承認を待っている状態です。  
右に目を向けると[コメント欄](/report/read/comment/)や、[PDF出力、CSV出力](/report/totalling/)といったボタンが目に付きます。

{{<alice pos="left" icon="phone">}}
つまり[テンプレートを自由に設計](/org/groupsetting/template/make/)でき、承認のリレーやCSV出力・PDF変換もできる日報アプリです。スマホで利用もOK
{{</alice>}}

---

## 使うとどんなメリットがあるの？

ではNipoPlusを導入すると一体どのような利点があるのでしょうか？紙による日報との違いはあるのでしょうか？導入までの道のりやコストは？
気になるポイントをまとめてご紹介します。

### 日報アプリの自作に近い感覚でテンプレートを作成可能


日報のテンプレートを自由に作成できるので業務内容に応じた日報をオーダーメイドに頼ること無く**自分たちの手で簡単に作成**できます。
「うちの日報ちょっと特殊だから・・・」と諦めていませんか？プログラミングの知識がなくてもブロックを積み重ねる感覚で簡単にオリジナルの日報テンプレートが作成できます。

{{<imgproc maketemplate.png "日報テンプレートを作るのは簡単です。必要な部品をブロックのように並べていくだけです" />}}


部品1つ1つをNipoPlusでは「入力フォーム」と呼んでいます。入力フォームを好きなように配置して重ねていくだけであっという間に日報テンプレートが自作できます。
入力フォームによっては細かい設定ができるものもあります。例えば上の画像では[選択肢入力フォーム](/org/groupsetting/template/select/)に「晴れ・雨・曇り」のような解答を指定しています。

日報を作成する際は保存された[テンプレートから1つを選ぶ](/report/write/write/)と日報作成画面が表示されます。

{{<alice pos="right" icon="ok">}}
つまり日報・月報・クレーム報告など用途に応じて使い分けができます
{{</alice>}}

### 日報の記入漏れ・チェック漏れを防ぐ

テンプレートに沿って日報を入力するため、スタッフ全員で記述ルールを統一化できます。
書き手にとっては記入すべき項目が明確になり、読み手にとっても統一されたフォーマットのため読みやすくなります。

また、入力フォームに対して**入力必須の設定**をすることで、記入漏れを未然に防ぐことも可能です。

またそもそも提出自体を忘れているスタッフが居る場合でも、[提出簿](/report/read/list/)や、カレンダーなどから未提出者をかんたんに発見できます。

{{<imgproc required.png "入力必須を指定することで記入漏れを事前に防ぎます" />}}


### スマートフォン・タブレット・PCすべての機器から日報作成が可能

インターネットに接続可能な環境にいればどこからでも日報の作成が可能です。日報を書くためだけに事務所へ戻る必要はありません。
自宅や移動中の電車の中からでも、スマートフォン1つで手軽に日報の作成が可能です。  
NipoPlusはレスポンシブに対応しています。画面幅が狭いスマートフォンから日報を読み書きする際は、テンプレートのレイアウトが自動でスマートフォンに最適化されます。
例えば次の画像はタブレットとスマートフォンで同じ日報作成画面を表示した比較です。

{{<imgproc responsive2.png "スマートフォンとタブレットの画面比較。スマートフォンでも全ての項目を入力できるようにレイアウトが変わります" />}}

[Android](/system/android/) /[iOS](/system/ios/)はそれぞれ専用Appを用意していますが、専用アプリをインストールしなくても利用可能です。

### 日報をCSV出力して集計分析。手動でエクセルに書き写す必要はありません

日報テンプレートがあるからそれぞれのデータを項目ごとに分けてCSVに出力できます。
例えば「売上高」や「走行距離」といった数値データを[数値入力フォーム](/org/groupsetting/template/math/)として日報テンプレートを作成しておくと、それらのデータは数値としてそのままCSVに出力できます。
もし今まで日報を手動でエクセルに書き写していたのであれば、その作業をまるごと省略できます。

[本文](/org/groupsetting/template/text/)などの文章データは集計にはどちらかというと不向きですが、[選択肢入力フォーム](/org/groupsetting/template/select/)などは単語として扱われるため、選ばれた回数を集計するといった使い方も可能です。
集計や加工がしやすい形で手元に[ダウンロード](/report/totalling/csv/)することが可能です。

{{<imgproc csv.png "チェックシートのデータをCSV出力し、spleadsheetで開いた画面" />}}

[GoogleSheet](https://www.google.com/intl/ja_jp/sheets/about/)や[Microsoft Office Excel](https://www.microsoft.com/ja-jp/microsoft-365/excel)でも開くことができます。Macであれば[Numbers](https://www.apple.com/jp/numbers/)でも開けます。
[エクセルを使った集計テクニック](/blog/sales_report/)についてのページも御覧ください。

### コメントや日報の共有でスタッフ同士の情報共有やコミュニケーションに

グループ内で日報を共有することができます。スタッフと上司の直通ラインでは無いため、同僚や部下など、同じグループに所属するスタッフ同士がお互いの日報を読み合うことができます。
グループ内のスタッフの情報共有が自然に行える様になり、ひいてはノウハウの蓄積にも役立ちます。
またコメント機能を使うことでコミュニケーションを図るきっかけにもなります。

{{<alice pos="right" icon="ok">}}
[設定で決まった人しか読めない設定](/org/groupsetting/dist/)にすることも可能です
{{</alice>}}

「情報が多すぎて追いきれなくなるのでは？」と不安になる方もいるかも知れません。
NipoPlusではグループ内の共有を前提としており、グループはかんたんに作成できます。プロジェクト単位・部署単位・支店単位・極端に言えば「2022年新卒研修」といったスポット単位でもグループを作成できます。
グループの役目を終えたら全データをエクスポートしてグループをクローズすることもかんたんです。

{{<imgproc posted.png "スマートフォンとタブレットの画面比較。スマートフォンでも全ての項目を入力できるようにレイアウトが変わります" />}}


### 紙が不要=保管スペースの節約。そして紙より安全に長期保存可能

手書きの日報であれば紙を使用しますが、日報アプリではその紙は不要です。小さな問題に聞こえるかもしれませんがこれは意外に大きなことです。
製造現場において品質管理シートを作成しますが、業種によっては長期の保存が必要な場合があります。膨大な紙のチェックシートはダンボール箱何段にも及び、保管場所を圧迫します。
これが電子データに置き換えたらどうでしょう？物理的な保管場所は不要になります。

もし、一介の日報アプリに長期間データを預けるのが心配であれば、データを定期的にダウンロードしてより安全なストレージに保管することも可能です。例えばGoogle Driveのように世界的な信用のあるオンラインストレージに保管すれば、ダンボール箱よりも高い安全性を保証してくれます。
NipoPlusではユーザのロックインを行いません。すべてのデータは外部へエクスポート可能です。

{{<alice pos="right" icon="here">}}
紙の日報は「火災」「盗難」「紛失」のリスクがあるから大切なデータは[Google Drive](https://workspace.google.com/intl/ja/products/drive/)のほうが確実です。[ウイルスチェック](https://support.google.com/drive/answer/141702)や[復元](https://support.google.com/drive/answer/2375102)なども備わっています
{{</alice>}}



## 業界最安値を目指す180円のリーズナブル価格設定！更に60日間の無料お試し期間付き

{{<imgproc price.png "1名180円の料金設定" />}}

1ユーザ1ヶ月あたり180円で、10名〜ご利用可能です。つまり**1ヶ月あたり1,800円**〜でご利用可能です。  
**無料お試し期間も2ヶ月間**と余裕のある期間を設定しました。無料お試し時にクレジットカードの登録は必要ありませんので、
気づいたら勝手に課金されていたという心配も一切有りません。

{{<alice pos="right" icon="guide">}}
[ご利用料金について詳しくはこちら](/price/)をどうぞ
{{</alice>}}

規模については小規模な事業者さまから、最大で999名までご利用可能です。

<div id="call_to_action" style="background-color: #722ed2d4;padding:20px">
  <div class="flexmain">
    <div class="dp25">
      <img src='/images/app-iconx200.png' style="width:100%; max-height: 200px;" width="200" height="200" alt="nipoplusアプリ起動ボタン">
    </div>  
    <div class="dp75" style="color: white">
      <h3 style="color:white">一切の企業情報を入力せずに手軽に体験できます</h3>
      <ul>
        <li style="color:white">メール・パスワードの設定なしで体験可能（<a href="/account/tokumei/">匿名機能</a>）</li>
        <li style="color:white">クレジットカードの登録も不要</li>
        <li style="color:white">Webアプリだからインストール不要</li>
      </ul>
    </div>
  </div>
  <div style="text-align: center;margin-top: 3em;margin-bottom: 3em;">
    <a href="https://nipo-plus.web.app/" class="cta_btn" target="_blank" onclick="gtag('event', 'footerCtaClick', {'value': '1'});" >Webではじめる</a>
  </div>  
</div>
<footer class="footline" style="border-top: 1px solid #ccc; margin-top: 10px">
<div class="flexmain">
<div class="dp33">
<a href="https://nipo-plus.web.app/" target="_blank" onclick="gtag('event', 'footerCtaClick', {'value': '1'});">
<img src='/images/banner2.webp' style="border-radius: 10px;" width="573" height="173" alt="nipoplusアプリ起動ボタン">
</a>
</div>
<div class="dp33">
<a href="/system/ios/">
<img src='/images/ios-app.webp' width="573" height="173" alt="ios App Store">
</a>
</div>
<div class="dp33">
<a href="/system/android/">
<img src='/images/android-app.webp' width="573" height="173" alt="Android Google Play Store">
</a>
</div>
</div>
</footer>
