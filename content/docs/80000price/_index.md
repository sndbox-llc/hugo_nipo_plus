+++
url = "/docs/price/"
aliases = ["/docs/price/_about/"]
menuTitle = "💰️料金"
title = "料金プラン概要｜無料から始められるシンプル料金"
description = "NipoPlusの料金プランについてご紹介します。1ヶ月の無料トライアルから、機能制限付きの無料プラン、月額180円からの有料プランまで、御社の規模に合わせた最適な選択肢をご案内します。"
weight = 80000
toc = true

[sidebar]
collapsed = true


[sitemap]
  changefreq = "monthly"
  priority = 0.2
+++

{{< callout context="caution" title="こちらはNipoPlusの料金ページです" icon="outline/info-triangle" >}}
[旧Nipoの料金](/legacy/system/price/)と混同されないように注意してください
{{< /callout >}}

NipoPlus（にぽぷらす）は、**初期費用・解約金は一切不要**。まずは**無料**でNipoPlusの機能を体験し、納得して使い続けられるシンプルな料金体系が特徴です。

### NipoPlusご利用開始までの流れ{#nipoplus_getting_started}

1.  **まずは無料でお試し！**: ご利用を開始いただくと、1ヶ月間の「トライアル期間」が自動で適用されます。この期間中は、有料プランと同じすべての高機能をご利用いただけます（最大10名まで）。
2.  **無料プランで継続**: トライアル期間終了後は、**自動的に機能制限付きの[無料プラン](/docs/price/free/)へ切り替わります**。もちろん、データが消えることはありませんのでご安心ください。
3.  **有料プランへアップグレード**: さらなる快適さを求める場合は、いつでも[有料プラン（GOLDプラン）](#fee)にお申し込みいただけます。

全体の流れは以下の図でご確認ください。

```kroki {type=mermaid}
graph LR;
classDef class1 fill:#7BCCAC
  利用開始 --> トライアル期間 --> 満了 -->  無料プランへ
  無料プランへ--> 無料で継続利用:::class1
  無料プランへ--> 有料プランへ加入:::class1

```

## トライアルプランについて{#trial}

利用開始に適用される1ヶ月間限定の特殊なプランです。
トライアル期間は有料プランと同じくすべての機能が利用可能です。人数も10名まで利用可能です。
トライアルが満了したら３つの選択肢があります。

- [無料プラン](/docs/price/free/)で使い続ける
- [GOLDプラン（自動更新有り）](/docs/price/fee)に申し込む
- [GOLDプラン（自動更新無し）](/docs/price/invoice)に申し込む

何もしなければ勝手に無料プランへ切り替わります。

### トライアル期間の延長{#extension_span}

もしトライアル期間1ヶ月が足りない場合や、トライアル期間中にもっと大人数で使用したい場合は、1度に限り延長を無償で提供させていただくことが可能です。  
詳しくは[お問い合わせ](/others/inquery/)ください。

## 無料プランについて{#free}

[無料プラン](/docs/price/free/)はいくつかの機能制限がかかりますが、レポートの作成や承認といった基本的な機能は利用が可能です。
申込みは必要なく、トライアルが終了すると自動で無料プランに切り替わります。

## 有料プラン（GOLDプラン）について{#fee}

NipoPlusの有料プランは、**月額180円/名**から利用できる**GOLDプラン**です。
すべての高機能が利用でき、**5名**からお申し込みいただけます。
※大変恐縮ですが、低価格を維持するため、ご利用人数が5名に満たない場合でも5名分の料金が発生いたしますこと、ご了承ください。

有料プランは、お客様の運用スタイルに合わせて2種類からお選びいただけます。

- **最低利用期間の制限なし**
- **解約・再契約も簡単！** 繁忙期だけ利用するといった柔軟な使い方も可能です。
- **初期費用・解約金など、料金以外の費用は一切かかりません。**

どちらのプランも、**月額180円/名**の低価格でご提供しています。
自動更新有りの方が、継続利用に便利でおすすめです。

{{< card-grid >}}
{{< link-card title="月額払い（自動更新有り）" description="1名180円の低価格。継続利用に便利" href="/docs/price/fee/" >}}
{{< link-card title="都度払い（自動更新無し）" description="必要な期間をまとめて購入可能。請求書払いにも対応" href="/docs/price/invoice/" >}}
{{< /card-grid >}}

## 現在のプランを確認する{#current_plan}

あなたの組織がどのプランかを確認してみましょう。

1. [左メニューから組織設定をクリック](/docs/setup/staff-global/rank/#rootSettingBtn)
1. 右メニューから「組織全般」をクリック
1. 「状態」に現在のプランが記載されます

{{<icatch filename="plan" msg="現在の料金プランは組織設定の画面から確認ができます" alice="here">}}

## 他社との価格比較：NipoPlusのコストパフォーマンス{#diff}

NipoPlusは、高機能でありながら、競合のクラウド日報・点検アプリと比較しても**非常にリーズナブルな価格**でご提供しています。
「1名あたりの単価」と「最小利用人数」に注目して、他社サービスとぜひ比較してみてください。(2023年8月の掲載を基準)

<div class="tableWrapper">

| サービス名                                         |                              1名単価 |                         最小利用人数 |                                                   月額総額▼ | 備考                             |
| -------------------------------------------------- | -----------------------------------: | -----------------------------------: | ----------------------------------------------------------: | -------------------------------- |
| [Pace](https://paces.jp/pricing/)                  |                                550円 | <span style="color:blue">不明</span> |                                                     ？550円 | 最小が1名なら最安                |
| [日報くん](https://nippoukun.bpsinc.jp/#price)     |                                165円 |                                  5名 |                                                       825円 | ミニマムプラン登場で安価になった |
| ✅[NipoPlus](/)                                    |                                180円 |                                  5名 | <span style="color:red;background-color:pink;">900円</span> | 無料有                           |
| [ニッピー](https://nippii.info/)                   |                                980円 | <span style="color:blue">不明</span> |                                                     ？980円 | 製造業特化型                     |
| [DeskNetsNeo](https://www.desknets.com/neo/price/) |                                400円 |                                  5名 |                                                     2,000円 | 売切版有                         |
| [Nipo](/legacy/about/quick/)                       |                           200〜500円 |                                  5名 |                                                     2,250円 | 無料有                           |
| [houren.so](https://www.houren.so/)                | <span style="color:blue">不明</span> | <span style="color:blue">不明</span> |                                                     2,500円 | 無料有                           |
| [FieldPlus](https://www.fieldplus.net/price/)      |                                500円 | <span style="color:blue">不明</span> |                                                     5,500円 | 基本料5,000円                    |
| [Gamba](https://www.getgamba.com/price/)           |                                980円 |                                  5名 |                                                     4,900円 | 税別                             |
| [未来レポート](https://www.mirairepo.net/)         |                                330円 |                                 20名 |                                                     6,600円 |
| [Nanoty](https://www.nanotybp.jp/price/)           |                                600円 |                                 20名 |                                                    12,000円 |
| [i-Reporter](https://i-reporter.jp/)               | <span style="color:blue">不明</span> |                                  5名 |                                                    37,500円 | 初期費用50,000円                 |

</div>

## 必要になるアカウント数は人数か端末の少ない方です{#unit_count_method}

1名180円という料金は比較的安価な部類ですが、その1名をどのように捉えるべきでしょうか？従業員が100人いたら100アカウントが必要か？というとそうとも限りません。
基本的には**使用する人数か使用する端末数のうち少ない方**と考えてください。

例えば製造業であれば作業員全員に端末が配られることは稀で、通常は1台の端末を複数人で共通利用します。
作業員が100名いて、入力用タブレットやPCが20台ある場合は、アカウントは20でお申し込みください。

スタッフが全員自分たちのスマートフォンから[レポートを書く](/docs/manual/write-report/write/)場合は、使用する端末数＝スタッフの人数となるため、スタッフ人数分のお申し込みをお願いします。

また、スタッフ別の集計や提出状況表といったアカウントに関する便利機能をフル活用するには人数分の申込みが必要です。

### アカウントの使い回しによるリスク{#warning_lisk}

実際のところ、5名の申し込みで100台の端末にログインするようなことはできます。
ただしこれはスタッフが退職したときにログインIDや**ログインパスワードが知られた状態で会社を抜ける**ということで非常に危険です。

私物のスマートフォンにNipoPlusをインストールして利用されると、退職後も何食わぬ顔でレポートにアクセスできてしまう状態になります。
ログインパスワードは変更できますが使い回しの場合、変更の度に今利用しているスタッフも再ログインが必要になるため手間がかかります。
また、NipoPlusにはスタッフごとの集計機能や[提出状況確認](/docs/manual/read-report/list/#teishutuMap)機能がありますが集計の基準はアカウント別でのものなので、使い回しの場合こういった便利機能もうまく機能しません。
このような理由から、アカウントの使い回しは推奨しません。使い回しは据え置き端末にのみ有効な手段です。

## よくある質問と答え{#faq}

<dl class="faq">

<dt><div>１年のうち半年だけ有料プランを使いたいのですが可能ですか？</div></dt>
<dd><div>可能です。稼働のない期間は無料プランに切替えていただくことで、使用しない間のコストを抑制できます。解約忘れを防ぐため、<a href="/docs/price/invoice/">請求書払い</a>がおすすめです。</div></dd>
<dt><div>有料プランから無料プランへ降格してもデータは残りますか？</div></dt>
<dd><div>はい。データは消えることなくそのまま引き続き利用が可能です</div></dd>

<dt><div>有料プランの最低利用期間はありますか？</div></dt>
<dd><div>特に縛りは有りませんが、決済は1ヶ月単位で行われます。1日使って解約すると残り29日分は料金受領済みのため少しもったいないことになります</div></dd>

<dt><div>最低利用人数はありますか？</div></dt>
<dd><div>最低申し込み人数は5名からとなります。最少人数の場合は月1000円以下で利用可能です</div></dd>

<dt><div>解約に伴う返金は受けられますか？</div></dt>
<dd><div>いいえ。返金には対応していません。</div></dd>

<dt><div>入会金や解約金は掛かりますか？</div></dt>
<dd><div>いいえ。掛かりません。年会費や会員維持費、基本使用料など、名称を変えたその他の費用も一切ありません。ただし<a href="/docs/price/invoice/">請求書払い</a>の場合、決済時に掛かる口座振込手数料はご負担ください。請求書をクレジットカードでお支払いいただく場合、この手数料も掛かりません。</div></dd>

<dt><div>レポートの提出ボタンが押せなくなりました</div></dt>
<dd><div>無料プランでは組織に所属する人数が4名までという制限があります。4名を超えると提出ボタンが押せなくなるので注意してください。スタッフを無効にすることで即座に復旧します</div></dd>

<dt><div>領収証は発行できますか？</div></dt>
<dd><div>アプリ上から<a href="/docs/price/receipt/">領収証</a>の発行が可能です。</div></dd>

<dt><div>●ヶ月後にGOLDPLANを使い始めたいですがそれまでの間、作ってしまったアカウントはそのままにしても大丈夫ですか？</div></dt>
<dd><div>はい。問題有りません。トライアルが失効したあとは自動で無料プランになります。必要になったタイミングでGOLDPLANをお申し込みください</div></dd>

<dt><div>アカウントの使い回しはできますか？</div></dt>
<dd><div>複数の端末に同時ログイン可能のため仕組み上はできますが推奨しません。据え置きで複数人が使用する用途の場合は1台に付き1アカウントでお申し込みください。そうでない場合は利用者数ごとに1アカウントでお申し込みをお願いします</div></dd>

<dt><div>タイムカードの制限解除は1ユーザごとに料金がかかるのですか？</div></dt>
<dd><div>いいえ。<a href="/docs/manual/timecard/setting/#how_to_unlimited">タイムカードの制限解除</a>は１度のお支払いで組織に所属している全スタッフ分のタイムカードが解除されます。その後に追加されたスタッフも全て解除されます</div></dd>

<dt><div>見積書を作っていただくことは可能ですか？</div></dt>
<dd><div>はい、可能です。宛名、ご利用人数、ご利用予定期間、自動更新の有無を記載の上、<a href="/others/inquery/">お問い合わせフォーム</a>からご連絡下さい</div></dd>

<dt><div>今月の決済が出来ないという連絡が来ました。カード自体は有効です。（他の支払いで使用しています。）何か問題があるのでしょうか？</div></dt>
<dd><div>支払いは様々な要因で失敗することがあります。例えば与信を超えた金額を使用した場合や、短期間で通常時よりも異常に多い決済を行った場合などに、カード会社が一時的に取引を拒否することがあります。NipoPlusでは決済に失敗した場合でも、タイミングをずらして最大４回のリトライが自動で行われます。そのため、１度の失敗が起きても特に焦る必要は有りません。４回すべてのリトライに失敗するとGoldPlanが自動で解約となるため（通常ここまで失敗するケースは稀です）その際は再度、GOLDPlanに再加入いただければ大丈夫です。</div></dd>
</dl>
