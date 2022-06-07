+++
title = "クラウド日報 NipoPlus"
draft = false
+++

# カスタマイズ可能な日報アプリ NipoPlus

{{<imgproc icatch.png Resize "1200x" "日報作成画面" />}}

{{<alice pos="left" icon="pc">}}
**パソコン**はもちろん
{{</alice>}}

{{<alice pos="right" icon="tablet">}}
**スマートフォン、タブレット**でも使える日報アプリです
{{</alice>}}

## 日報テンプレートを自由にカスタマイズ

NipoPlusは[日報テンプレートを自由に設計](/org/groupsetting/template/)できます。例えば次のような日報テンプレートを専門的な知識を必要とせずに作成できます。
<div class="css-carousel-slider">
    <div class="slide-wrap-main">
      <div class="slide">{{<imgproc ipad1.png Resize "1200x" "集計可能な日報テンプレートの例" />}}<!--<img src="ipad1.png" alt="集計可能な日報テンプレートの例">--></div><!-- 最初に表示される画像(*1) -->
    </div>
    <div class="slide-wrap">
      <div class="slide">{{<imgproc ipad2.png Resize "1200x" "レート入力だけを集めた日報テンプレートの例" />}}<!--<img src="ipad2.png" alt="レート入力だけを集めた日報テンプレートの例">--></div>
      <div class="slide">{{<imgproc ipad3.png Resize "1200x" "スライダー入力だけを集めた日報テンプレートの例" />}}<!--<img src="ipad3.png" alt="スライダー入力だけを集めた日報テンプレートの例">--></div>
      <div class="slide">{{<imgproc ipad4.png Resize "1200x" "日付入力だけを集めた日報テンプレートの例" />}}<!--<img src="ipad4.png" alt="日付入力だけを集めた日報テンプレートの例">--></div>
      <div class="slide">{{<imgproc ipad5.png Resize "1200x" "選択肢入力フォームだけを集めた日報テンプレートの例" />}}<!--<img src="ipad5.png" alt="選択肢入力フォームだけを集めた日報テンプレートの例">--></div>
      <div class="slide">{{<imgproc ipad6.png Resize "1200x" "範囲入力フォームだけを集めた日報テンプレートの例" />}}<!--<img src="ipad6.png" alt="範囲入力フォームだけを集めた日報テンプレートの例">--></div>
    </div>
</div>

テンプレートがあればスタッフが日報を書く際に必要な事項を記入し忘れると言ったミスを未然に防ぐことができるだけでなく、日報を書く側にとっても
所定のフォーマットに従って書けるので日報業務の負担を軽減できます。テンプレートは画面の幅に応じて自動で伸縮するのでPCはもちろん、スマートフォンやタブレットではそれぞれに適したデザインに自動で切り替わります。

{{<alice pos="right" icon="phone">}}
**スマートフォン**から日報が書ければ外出先でも困らないね
{{</alice>}}

## 日報受信BOXから提出状況を表で表示。提出漏れも素早く発見

{{<imgproc inbox.png Resize "1200x" "日報の受信BOX画面。提出状況が右パネルに表示されるので提出漏れがあってもすぐに発見できます" />}}

スタッフの人数と日報の枚数が一致しないときは誰かが提出し忘れている可能性があります。**誰が未提出かを探すのもかんたん**です。
縦軸にスタッフ、横軸に日付の一覧表が常に表示されるのでこの一覧表を見れば誰が提出し忘れているか瞬時に識別できます。

{{<alice pos="right" icon="ok">}}
同じ日に2通、3通と提出された場合はその件数も確認できます。これにより**重複提出などもかんたんにチェック**できます
{{</alice>}}


## 日報の承認や棄却、コメントを通じてスタッフ間のコミュニケーションにも活用

スタッフが書いた日報を上司が読んでおしまいですか？せっかくですから貴重な報告書をもっと有効に活用したいですね。  
例えば受け取った**日報に対してコメントを書く**ことができます。コメントによって「スタッフー＞上司」への一方通行の流れが双方向になります。

日報の承認はリレーを組む事もできるようになっています。
例えば「A係長」が承認したあとに「B部長」最後に「C社長」が承認することができます。

<div style="overflow:scroll">
{{<mermaid align="center">}}
graph LR;
  スタッフ -->|日報提出| A係長
  A係長 -->|承認| B部長
  B部長 -->|承認| C社長
{{< /mermaid >}}
</div>

{{<imgproc progress.png Resize "1200x" "日報の承認リレーとコメントによるコミュニケーション" />}}

## 日報をかんたんに集計&CSV出力

日報テンプレートの入力フォームによっては集計が可能なフォームも多くあります。これらの入力フォームが組み込まれた日報はボタン一つで簡単に集計ができます。
スタッフ毎に集計されるため、各スタッフの頑張りを一目で把握できます。  
また手書きの日報をエクセルに手動でエクセルに打ち込むといった煩わしい手間をごっそり省略できるのもシステム化の大きなメリットです。
{{<imgproc calc2.png Resize "1200x" "日報の集計" />}}

{{<alice pos="right" icon="here">}}

- [数値フォーム](org/groupsetting/template/math/)
- [レートフォーム](/org/groupsetting/template/rate/)
- [選択肢フォーム](/org/groupsetting/template/select/)

などが集計可能な入力フォームです（一例）
{{</alice>}}

## カレンダーから予定と実績を把握

[カレンダー](/calendar/)上に日報をマッピングすることで日毎、スタッフごとの日報提出状況を俯瞰できます。
提出漏れや重複の提出などを素早く見つけることができます。

{{<imgproc calendar.png Resize "1200x" "カレンダー上に日報やタスクをマッピングすることで全体を俯瞰" />}}

## リーズナブルな価格設定

{{<imgproc price.png Resize "1200x" "1ユーザ1ヶ月180円の低価格" />}}

1ユーザ1ヶ月あたり180円で、10名〜ご利用可能です。つまり1ヶ月あたり1,800円〜でご利用可能です。  
**無料お試し期間も2ヶ月間**と、余裕のある期間を設定しました。無料お試し時にクレジットカードの登録は必要ありませんので、
気づいたら勝手に課金されていたという心配も一切有りません。

{{<alice pos="right" icon="guide">}}
[ご利用料金について詳しくはこちら](/price)をどうぞ
{{</alice>}}

<!--
集計とは別に、スタッフの活動実績を見ることもできます。

{{<alice pos="right" icon="here">}}
活動実績とは例えば日報を読んだ回数や日報にコメントを書いた回数などです。
{{</alice>}}
-->

<footer class="footline" style="border-top: 1px solid #ccc; margin-top: 10px">
	<div class="flexmain">
		<div class="dp33">
			<a href="https://nipo-plus.web.app/" target="_blank">
				<img src='/images/banner2.webp' style="border-radius: 10px;" width="573" height="173" alt="nipoplusアプリ起動ボタン">
			</a>
		</div>
		<div class="dp33">
			<a href="https://apps.apple.com/jp/app/id1625797169" target="_blank">
				<img src='/images/ios-app.webp' width="573" height="173" alt="ios App Store">
			</a>		
		</div>
		<div class="dp33">
			<a href="https://play.google.com/store/apps/details?id=jp.sndbox.nipoplus" target="_blank">
				<img src='/images/android-app.webp' width="573" height="173" alt="Android Google Play Store">
			</a>
		</div>
	</div>
</footer>
