+++
url = "/lp/checksheet/"
title = "業界最安の設備点検チェックシートアプリ"
menuTitle = "点検チェックシートアプリ"
description = "タブレットやスマホで機器点検を楽々に。大きい文字で年配の方も安心。チェック項目は自由に設計OK。初めてのDXを始めよう"
toc = false
showPrice = true
heroTitle = "設備点検やチェックシート入力をクラウド化"
heroText = "NipoPlusはもともと日報アプリとして開発されましたが、カスタマイズ性の高さから自動車部品メーカー等、いくつかの製造業の方々に目をつけていただきました。何度かの改良を経て製造業の設備・機材点検・製品の品質チェック用アプリとしても十分利用可能な水準にあります。<br>ベースが日報アプリのため料金も他の製造業向けアプリに比べてずっと安価でご提供可能です。"
heroLinks = [
  { label = "入力漏れをブロック", url = "/tips/required/" },
  { label = "タブレット点検アプリ", url = "/tips/mobile-device/" },
  { label = "建設業の日報としても", url = "/lp/builder/" }
]
[sitemap]
  priority = 1.0
+++

<!-- ▼ DX -->
<div class="container my-5" id="dx_equip_inspection">
<div class="row rounded-3 border shadow-lg">
<div class="col-lg-7">
<h2 class="display-4 fw-bold text-body-emphasis lh-1 pt-4">点検項目を自由に自作できる</h2>
<p class="lead">

天井クレーンやアーク溶接機、プラズマ切断機、孔あけ機、フォークリフトなど、点検したい機器ごとにテンプレートを作成しましょう。テンプレートは自由に点検項目をカスタマイズ可能です。  
テンプレートは複数保存でき、点検時は使用するテンプレートを選び点検項目に沿って入力するだけです。

</p>
{{< link-card title="テンプレート作成" description="操作ガイド" href="/docs/manual/initial-setting/template/make/">}}
</div>
<div class="col-lg-9  overflow-hidden">
{{<icatch filename="img/checksheet" msg="これはバルブ設備点検シートの例です。簡単に作れるよ"  alice="tablet">}}
</div>
</div>
</div>
<!-- ▲ DX -->

<!-- ▼ MainFunction -->
<div class="container my-5" id="support_functions">
<div class="row rounded-3 border shadow-lg">
<div class="col-lg-7">
<h2 class="display-4 fw-bold text-body-emphasis lh-1 pt-4">点検をサポートする様々な便利機能</h2>
<p class="lead">

点検のうっかりミスや手順飛ばしを防ぐ様々な機能が搭載されています。  
入力漏れを防ぐ入力必須機能や、点検手順を強制的に守らせる入力順序指定など、様々な機能で点検者の点検業務をサポートします。

見やすさにもこだわっています。  
年輩の方でも見やすく大きな文字に変更する機能や、視認性を高めるための色分けなど、点検者の負担を軽減する様々なサポート機能があります。

</p>
</div>
<div class="col-lg-9  overflow-hidden">
{{<icatch filename="img/uservility" msg="点検表に説明画像や色分けを使用しユーザビリティ向上させる。点検者が迷うことのないように作れる">}}
</div>
<div class="col-lg-8">

✅ [入力必須機能で漏れを防止](/tips/required/#setting)  
✅ 点検箇所を画像でわかりやすく説明  
✅ 色分けで視認性向上  
✅ [入力順序をロックして手順遵守](/tips/required/#miss_care)

</div>
<div class="col-lg-8">

✅ 複数の点検シートを簡単に管理  
✅ [大きな文字サイズ](/reverse-lookup/view/fontsize/)で年輩の方も安心  
✅ [英語対応](/reverse-lookup/view/language/)でグローバルに活躍  
✅ [動的な回答変化で無駄を省く](/docs/manual/initial-setting/template/selects/#dinamic_switch_select)

</div>

</div><!-- ROW閉 -->
</div><!-- コンテナ閉 -->
<!-- ▲ MainFunction -->

<!-- ▼ 集計グラフ -->
<div class="container my-5" id="support_functions">
<div class="row rounded-3 border shadow-lg">
<div class="col-lg-7">
<h2 class="display-4 fw-bold text-body-emphasis lh-1 pt-4">点検データを可視化し分析する</h2>
<p class="lead">

紙の点検データとデジタル点検データの大きな違いはそのデータの活用のしやすさにあります。  
日々の点検シートは１枚１枚が独立していますが集計機能やグラフ機能を使って過去の点検データの推移や累積を簡単に可視化できます。  
一覧表として出力するのはもちろん、グラフ作成、CSV出力にも対応しています。

過去のデータと今回の点検結果がどれだけ乖離しているかをチェックすることで異常性の早期発見に繋がります。

</p>
</div>
<div class="col-lg-9  overflow-hidden">

{{<iTablet filename="img/chart" msg="積み上げ棒グラフと折れ線グラフを組み合わせた複合グラフ">}}

</div>
<div class="col-lg-8">

✅ 過去の点検データを[グラフ化](/docs/manual/analytics/chart/)し異常を早期に発見  
✅ データを安全に保管し、ペーパーレス化。保管場所にも困らない

</div>
<div class="col-lg-8">

✅ CSV出力で他システムやExcelなどのアプリとデータ連携も可能。[エクセルでの集計テクニック集](/excel/)も参照して下さい

</div>

</div><!-- ROW閉 -->
</div><!-- コンテナ閉 -->
<!-- ▲ 集計グラフ -->

### 点検データのCSV形式をご紹介{#export_csv}

NipoPlusで出力したCSVは次のような一般的な形をしています。

{{< excelTable>}}
提出日, 【-2mm】線形ズレ, 【-1mm】線形ズレ, 【0】線形ズレ, 【+1mm】線形ズレ, 【+2mm】線形ズレ, 【-2mm】X軸ズレ, 【-1mm】X軸ズレ, 【0】X軸ズレ, 【+1mm】X軸ズレ, 【+2mm】X軸ズレ, 【-2mm】Y軸ズレ, 【-1mm】Y軸ズレ, 【0】Y軸ズレ, 【+1mm】Y軸ズレ, 【+2mm】Y軸ズレ, 【-2mm】Z軸ズレ, 【-1mm】Z軸ズレ, 【0】Z軸ズレ, 【+1mm】Z軸ズレ, 【+2mm】Z軸ズレ, 【合格】合否, 【不合格】合否, 備考
2024/05/14 10:26, , , ⭕, , , , ⭕, , , , , , , , ⭕, , , ⭕, , , ⭕, ,
2023/04/11 01:23, , , ⭕, , , , , ⭕, , , , , ⭕, , , , ⭕, , , , ⭕, ,
2023/02/16 11:35, , , ⭕, , , , , ⭕, , , , , , ⭕, , , ⭕, , , , ⭕, , "サンプルです実在する部品とは無関係です"
2023/02/14 11:35, , , ⭕, , , , ⭕, , , , ⭕, , , , , , , ⭕, , , , ⭕, Y軸ずれ
2023/02/12 11:35, ⭕, , , , , ⭕, , , , , , , , , ⭕, ⭕, , , , , , ⭕, ジャストがない
2023/02/11 11:35, , , ⭕, , , , , ⭕, , , , , ⭕, , , , , , ⭕, , ⭕, ,
2023/02/09 11:51, , , ⭕, , , , , ⭕, , , , , , ⭕, , , ⭕, , , , ⭕, , "サンプルです実在する部品とは無関係です"

{{< /excelTable>}}

これは一例であり、出力オプションを変更することで加工しやすい様々な形式で出力が可能です。NipoPlusでレポートをエクセルで[集計するテクニック](/excel/sales_report/)についても紹介しています。

<!-- ▼ マルチデバイス -->
<div class="container my-5" id="dx_equip_inspection">
<div class="row rounded-3 border shadow-lg">
<div class="col-lg-7">
<h2 class="display-4 fw-bold text-body-emphasis lh-1 pt-4">スマホ・PC・タブレットに対応</h2>
<p class="lead">

NipoPlusはマルチデバイス対応です。  
スマートフォンやタブレットで移動しながら点検を行うことはもちろん、掲載写真のように作業台に固定して点検結果を逐次入力するといった使い方も可能。

機器によって得手不得手があります。初期設定やデータエクスポート時は多目的に使えるPCが適していますし、点検箇所の写真を添付したい場合はカメラ付きのスマートフォンやタブレットが最適です。
適材適所に併せてご利用下さい。データは全てクラウドのため、どのデバイスからでも同じデータにアクセス可能です。

{{< link-card title="モバイルデバイス対応" description="コラム記事"  href="/tips/mobile-device/">}}

</p>

</div>
<div class="col-lg-9  overflow-hidden">

{{<figure src="img/factory-usage.webp"  alt="実際にNipoPlusを工場で使っていただいている写真をお客様から提供いただきました。画面は一部ぼかしています（掲載許諾済）" caption="実際にNipoPlusを工場で使っていただいている写真をお客様から提供いただきました。画面は一部ぼかしています（掲載許諾済）">}}

</div>
</div>
</div>
<!-- ▲ マルチデバイス -->

<!-- ▼ コスト -->
<div class="container my-5" id="csv_output">
<div class="row align-items-center rounded-3 border shadow-lg">
<div class="col-lg-16">
<h2 class="display-4 fw-bold text-body-emphasis lh-1">ベースが日報アプリだから格安- 180円</h2>
<p class="lead">

設備点検や製造業向け点検アプリの料金は比較的高めに設定されている傾向にあります。  
しかしNipoPlusのベースは「日報アプリ」です。日報アプリの相場は点検表アプリに比べて安価です。  
その中でもNipoPlusは業界最安値を目指し、安価な料金で提供しております。

解約時の違約金や、契約時の登録料など、様々な手数料を心配されるかもしれませんがそういった費用は一切かかりませんのでご安心ください。  
(※ただし口座振込決済における振込手数料はご負担をお願いしています)

解約して無料プランに切り替わっても過去のデータはそのまま残り続けますので、「特定のシーズンのみ使用する」といった柔軟な利用法も可能です。

</p>

{{< link-card title="ご利用料金"  description="無料版あり" href="/docs/price/_about/">}}

</div>
</div>
</div>

<!-- ▲ コスト -->

---

{{<nextArrow>}}

## お客様の声{#user_voice}

※お客様の声を書いてくださる方随時募集！[お問い合わせフォーム](/others/inquery/)からご連絡ください

<blockquote>

これでほぼ製造業のベース的な部分（日報、チェックシート、P管理図、不良率集計）は完成したような気がしますね。
国内でここまで製造業用に特化して簡単ですぐ使える格安なアプリは他にないんじゃないでしょうか。
大手企業は高額なアプリの購入でいけますが中小企業はコストをかけれないので
なかなか専用に使えるシステムは導入できませんよね。
NipoPlusならそれらをカバーしているので中小企業に幅広く売れるとおもいますよ。
社内アンケートにも使えそうですし、いろんな活用方法がありそうです。

<cite>三重県: 自動車部品メーカー</cite>

</blockquote>

<blockquote>

弊社は田舎の小さな町工場です。
独自のシステム導入など予算上、厳しいものがあり
自社システム構築となると技術面、人材で厳しいです。
御社のNipoPlusを使用する前は色々他社のシステムをテスト運用しておりましたが自社に合わず苦慮しておりました。
無知な私には御社のシステムが非常に簡単で自由にアレンジができるところに共感しております。

弊社が御社のシステムに依存している状況で一番危惧していますのはクラウドですので突然のサービス終了です。
弊社のアイデア次第でもっと御社のシステムを有効活用できると感じておりますし
多くの企業に御社のシステムを広めて末永くお付き合いできればと思っております。
微力ながらお力添えできればと思っていますので遠慮なくお申しつけください。

弊社のように困っている中小企業様は多いと思います。
そういう機会があれば紹介させていただきます。

<cite>兵庫県：機器（小ロット多品種）の製造・販売者さま</cite>

</blockquote>
