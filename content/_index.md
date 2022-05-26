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

NipoPlusは日報テンプレートを自由に設計できます。例えば次のような日報テンプレートを専門的な知識を必要とせずに作成できます。
<div class="css-carousel-slider">
    <div class="slide-wrap-main">
      <div class="slide"><img src="ipad1.png" alt="集計可能な日報テンプレートの例"></div><!-- 最初に表示される画像(*1) -->
    </div>
    <div class="slide-wrap">
      <div class="slide"><img src="ipad2.png" alt="レート入力だけを集めた日報テンプレートの例"></div><!-- スライド画像(*2) -->
      <div class="slide"><img src="ipad3.png" alt="スライダー入力だけを集めた日報テンプレートの例"></div>
      <div class="slide"><img src="ipad4.png" alt="日付入力だけを集めた日報テンプレートの例"></div>
      <div class="slide"><img src="ipad5.png" alt="選択肢入力フォームだけを集めた日報テンプレートの例"></div>
      <div class="slide"><img src="ipad6.png" alt="範囲入力フォームだけを集めた日報テンプレートの例"></div>
    </div>
</div>

テンプレートがあればスタッフが日報を書く際に必要な事項を記入し忘れると言ったミスを未然に防ぐことができるだけでなく、日報を書く側にとっても
所定のフォーマットに従って書けるので日報業務の負担を軽減できます。テンプレートは画面の幅に応じて自動で伸縮するのでPCはもちろん、スマートフォンやタブレットではそれぞれに適したデザインに自動で切り替わります。

{{<alice pos="right" icon="phone">}}
**スマートフォン**から日報が書ければ外出先でも困らないね
{{</alice>}}

## 日報の承認や棄却、コメントを通じてスタッフ間のコミュニケーションにも活用

スタッフが書いた日報を上司が読んでおしまいですか？せっかくですから貴重な報告書をもっと有効に活用したいですね。  
例えば受け取った日報に対してコメントを書くことができます。コメントによって「スタッフー＞上司」への一方通行の流れが双方向になります。

日報の承認はリレーを組む事もできるようになっています。
例えば「A係長」が承認したあとに「B部長」最後に「C社長」が承認することができます。


{{<mermaid align="center">}}
graph LR;
  スタッフ -->|日報提出| A係長
  A係長 -->|承認| B部長
  B部長 -->|承認| C社長
{{< /mermaid >}}

{{<imgproc progress.png Resize "1200x" "日報の承認リレーの図" />}}

## 日報をかんたんに集計&CSV出力

日報テンプレートの入力フォームによっては集計が可能なフォームも多くあります。これらの入力フォームが組み込まれた日報はボタン一つで簡単に集計ができます。
スタッフ毎に集計されるため、各スタッフの頑張りを一目で把握できます。  
また手書きの日報をエクセルに手動でエクセルに打ち込むといった煩わしい手間をごっそり省略できるのもシステム化の大きなメリットです。
{{<imgproc calc.png Resize "1200x" "日報の集計" />}}

集計とは別に、スタッフの活動実績を見ることもできます。

{{<alice pos="right" icon="here">}}
活動実績とは例えば日報を読んだ回数や日報にコメントを書いた回数などです。
{{</alice>}}

## カレンダーから予定と実績を把握

カレンダー上に日報をマッピングすることで日毎、スタッフごとの日報提出状況を俯瞰できます。
提出漏れや重複の提出などを素早く見つけることができます。

<footer class="footline" style="border-top: 1px solid #ccc; margin-top: 10px">
	<a href="https://nipo-plus.web.app/" target="_blank">
		<img src='/images/banner2.png' style="min-width: 40px">
	</a>
	<a href="https://apps.apple.com/jp/app/id1625797169" target="_blank">
		<img src='/images/ios-app.png' style="min-width: 40px">
	</a>
	<a href="https://play.google.com/store/apps/details?id=jp.sndbox.nipoplus" target="_blank">
		<img src='/images/android-app.png' style="min-width: 40px">
	</a>
</footer>
