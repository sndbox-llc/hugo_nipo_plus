+++
title = "日報テンプレート"
weight = 100
chapter = true
# description = "チャプター"
+++

# 日報テンプレート

日報テンプレートを作成しておくことでスタッフはテンプレートに沿って[日報を書く](/report/write/)ことができるようになります。
日報テンプレートは様々な**入力フォームを自由に組み合わせて作成**できます。入力フォームは次の種類があります

|項目|説明|集計可否|
|---|---|---|
|[テキスト入力フォーム](/org/groupsetting/template/text/)|本文や備考など通常の文字入力ができるフォームです|不可|
|[選択肢入力フォーム](/org/groupsetting/template/select/)|予め回答を用意しておき、回答から1つ（[または複数](/org/groupsetting/template/select2/)）選ぶだけで入力できるフォームです。回答によって第2の回答が変わる[2層式](/org/groupsetting/template/selectcalc/)もあります|可|
|[日付と時刻入力フォーム](/org/groupsetting/template/datetime/)|日付や時刻・[期間の入力](/org/groupsetting/template/datetimes/)に特化したフォームです。期間の場合は経過時間が自動で計算されます|可|
|[チェックボックス入力フォーム](/org/groupsetting/template/checkbox/)|Yes/Noのように2択で回答できる場合に使える最もシンプルな入力フォームです|可|
|[範囲入力フォーム](/org/groupsetting/template/range/)|最低気温〜最高気温のように一定の幅のある値を入力する際に最適なフォームです|不可|
|[署名入力フォーム](/org/groupsetting/template/sign/)|お客様や日報作成者の手書きのサインなどが必要な場合に使います。手書きのイラストも挿入できます。タッチパネル対応の端末でご利用ください|不可|
|[写真入力フォーム](/org/groupsetting/template/picture/)|スマートフォンで撮影した写真などをそのまま日報に添付できます|不可|
|[ファイル入力フォーム](/org/groupsetting/template/file/)|PDFやZipファイルなどを日報に添付できます|不可|
|[スライダ入力フォーム](/org/groupsetting/template/step/)|つまみを動かすだけで数値の入力が可能な数値入力フォームです。上限・下限の設定が必要です|可|
|[レート入力フォーム](/org/groupsetting/template/rate/)|ネットショップなどでおなじみの★★☆☆☆のような形式で入力可能なフォームです|可|
|[数値入力フォーム](/org/groupsetting/template/math/)|キーボードから直接数値を入力できるフォームです。スライダやレート入力フォームの原型とも言えるフォームです|可|
|[商品入力フォーム](/org/groupsetting/template/mod/)|在庫の追跡が必要な場合に使える入力フォームです。追加、減少を追跡可能です|不可|
|[可変長入力フォーム](/org/groupsetting/template/array/)|様々な入力フォームを1つのグループにし、入力フォームの数を自由に増減できるようにする入力フォームです|ー|

{{<alice pos="right" icon="here">}}
テンプレートは複数個作成して自由に切り替えて使用できます
{{</alice>}}
