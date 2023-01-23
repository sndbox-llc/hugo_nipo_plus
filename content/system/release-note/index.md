+++
description = "Nipoの新しいバージョンが公開されるたびにこのページでご案内します。Android/iOS/Web版それぞれで最新のバージョンが異なる場合があります。最も早く更新されるWeb版の利用を推奨しております"
menuTitle = "システム更新履歴"
tags = []
title = "システム更新履歴"
toc = true
weight = 5
+++

現在ご利用中のNipoPlusのバージョンは、サイドメニュー下部に記載されております。ここからバージョンを確認してください。

{{<icatch filename="version" msg="画面左下にバージョン が記載されています" title="バージョンの確認" desc="ご利用のアプリバージョンは左メニュー下部に記載されています" fontsize="30px" alice="ok" >}}

## バージョンを更新する方法

ご利用のアプリ形態によってバージョンの更新手順は異なります。

### android / ios版

[Android](https://play.google.com/store/apps/details?id=jp.sndbox.nipoapp) / [iOS](https://itunes.apple.com/jp/app/nipo/id1385965600?mt=8)版のNipoPlusをご利用の方は、各アプリストアからの更新を行うことでバージョンを更新できます。
更新はご利用の端末にもよりますが、基本的には手動で更新が必要です。

### web版(PWA版)

Web版(PWA版)のNipoPlusをご利用の方は起動時に更新の確認が行われます。更新が確認されるとバックグラウンドでダウンロード＆インストールが行われ、完了すると更新通知の旨が画面右下に表示されます。
この通知をクリックして更新が完了します。

## リリースノート

### 2023/01/23 Version 1.26.0

{{% badge style="green" icon="check-circle" %}}Web{{% /badge %}}

- テンプレートに付する説明用画像の画質を「低・中・高」の3段階から選択可能になりました（リクエスト）
- 細かい文言の修正を行いました

### 2023/01/16 Version 1.25.2

{{% badge style="green" icon="check-circle" %}}Web{{% /badge %}}

- [チェックボックス](/org/groupsetting/template/checkbox/)をグラフ化した際に項目が３種類に分類されるバグを修正しました
- [テンプレート](/org/groupsetting/template/make/)一覧をリストモード、カードモードの切替表示が可能になりました
- 長らく放置されていた全体設定の色に関するバグを修正しました

### 2023/01/13 Version 1.25.1

{{% badge style="green" icon="check-circle" %}}Web{{% /badge %}}

- 日報一括削除機能でIDの取得に失敗するバグを修正しました
- （[組織全体設定](/org/staff/make/)）スタッフ管理の画面切替機能を追加しました

### 2023/01/03 Version 1.25.0

{{% badge style="green" icon="check-circle" %}}Web{{% /badge %}}
{{% badge style="red" icon="check-circle" %}}ios{{% /badge %}}
{{% badge style="blue" icon="check-circle" %}}Android{{% /badge %}}

- 積み上げ棒グラフが作成可能になりました
- 日報受信BOXで表示期間を拡張するボタンが実装されました（日報が０件の場合にのみ）
- カレンダーがデフォルトで先月が表示されるバグを修正しました
- 日報テンプレートの編集をスマートフォンでも操作しやすいようにレイアウトを変更しました

### 2022/12/23 Version 1.24.0

{{% badge style="green" icon="check-circle" %}}Web{{% /badge %}}
{{% badge style="red" icon="check-circle" %}}ios{{% /badge %}}
{{% badge style="blue" icon="check-circle" %}}Android{{% /badge %}}

今回のアップデートは管理者に関する機能がメインです。
2022年最後のリリースになる予定です。メリークリスマス＆ハッピーニューイヤー

また来年お会いしましょう。

- 管理者の権限でスタッフのログインパスワードを変更できるようになりました
- 管理者の権限でスタッフのログインE-mailを変更できるようになりました
- スタッフアカウント作成時にログインパスワードや権限の初期設定ができるようになりました
- グループのページから直接スタッフのアカウント作成ができるようになりました

※スタッフのログインパスワードやメールアドレスを変更するとそのスタッフは次回NipoPlus起動時に再ログインが必要になります

### 2022/12/17 Version 1.23.1

{{% badge style="green" icon="check-circle" %}}Web{{% /badge %}}

- カレンダーが「月間」モードではじまるとき、正しい期間の取得がされないバグを修正しました
- 日報テンプレートの作成画面を一部変更しました

### 2022/12/14 Version 1.23.0

{{% badge style="green" icon="check-circle" %}}Web{{% /badge %}}

- カレンダーに「[月間カレンダー](/calendar/)」機能が追加されました
- カレンダーから日報を一括でPDFに変換できるようになりました
- カレンダーから日報を一括でCSV出力できるようになりました

### 2022/12/12 Version 1.22.1

{{% badge style="green" icon="check-circle" %}}Web{{% /badge %}}
{{% badge style="red" icon="check-circle" %}}ios{{% /badge %}}
{{% badge style="blue" icon="check-circle" %}}Android{{% /badge %}}

- バナー表示機能が追加されました。「グループ設定」から設定できます
- 特定の条件で休憩時間の入力フォームが表示されないバグを修正しました

### 2022/12/10 Version 1.21.2

{{% badge style="green" icon="check-circle" %}}Web{{% /badge %}}

- 検索モード中に一括CSVを行うと正しく出力されないバグを修正しました
- 検索モードで期間指定「直近30日」を選んだ際、当日の日報が検索に含まれないバグを修正しました

### 2022/12/09 Version 1.21.1

{{% badge style="green" icon="check-circle" %}}Web{{% /badge %}}
{{% badge style="red" icon="check-circle" %}}ios{{% /badge %}}
{{% badge style="blue" icon="check-circle" %}}Android{{% /badge %}}

- 軽微なバグを修正しました。
- 選択肢入力フォームの単語を削除しても過去のデータ推移やグラフで単語が消えないように修正しました。
- 期間入力フォームにおいて休憩時間の入力に「簡易モード」を追加しました。

### 2022/12/08 Version 1.21.0

{{% badge style="green" icon="check-circle" %}}Web{{% /badge %}}

- 受信BOXで検索設定の保存ができるようになりました。
- 受信BOXでPDF一括出力が使えるようになりました
- 受信BOXでCSV一括出力が使えるようになりました
- 受信BOXで提出簿の表示オプションが増えました
- 旧Nipoのテンプレートをインポートできるようになりました
- 日報テンプレート編集時、追加したパーツの場所に画面が自動でスクロールするように修正しました
- CSV出力時、特定の条件でコメントが取得できないバグを修正しました
- 入力フォームに「スペーサー」が追加されました
- 日報検索処理の動作を高速化しました

### 2022/12/02 Version 1.20.0

{{% badge style="green" icon="check-circle" %}}Web{{% /badge %}}
{{% badge style="red" icon="check-circle" %}}ios{{% /badge %}}

[グラフ作成機能](/report/analytics/chart/)が実装されました。Android版はSDKVersionの問題で更新を保留しています

### 2022/11/07 Version 1.19.0

{{% badge style="green" icon="check-circle" %}}Web{{% /badge %}}
{{% badge style="red" icon="check-circle" %}}ios{{% /badge %}}
{{% badge style="blue" icon="check-circle" %}}Android{{% /badge %}}

日報の集計機能が強化され、日ごとや時間毎の集計ができるようになりました。独自の計算式を追加し、集計することができるようになりました。（例えば生産数と破損数を計算して独自に破損率を算出できるようになりました）。細かいバグの修正を行いました。右サイドナビの開閉ボタンの位置を画面右上に移動しました。パフォーマンス面を少し改善しました。

### 2022/10/25 Version 1.18.0

{{% badge style="green" icon="check-circle" %}}Web{{% /badge %}}
{{% badge style="red" icon="check-circle" %}}ios{{% /badge %}}
{{% badge style="blue" icon="check-circle" %}}Android{{% /badge %}}

日報テンプレートの編集画面で各入力フォームに説明用の画像を添付できるようになりました。PDF単体出力ボタンを独立させました

### 2022/10/21 version 1.17.0

{{% badge style="green" icon="check-circle" %}}Web{{% /badge %}}
{{% badge style="red" icon="check-circle" %}}ios{{% /badge %}}
{{% badge style="blue" icon="check-circle" %}}Android{{% /badge %}}

PDF出力に関する機能が変更になりました。テンプレート編集画面でコピー機能が追加されました。ログ機能の画面位置を変更しました。カレンダー機能で日報未提出のセルに警告を表示できるようになりました。ポイント消費管理のバグを修正しました。スマートフォンからも日報提出簿を表示できるようになりました。

### 2022/10/15 Version 1.16.0

{{% badge style="green" icon="check-circle" %}}Web{{% /badge %}}
{{% badge style="red" icon="check-circle" %}}ios{{% /badge %}}
{{% badge style="blue" icon="check-circle" %}}Android{{% /badge %}}

CSV出力時、各項目ごとに列の展開ON/OFFの指定ができるようになりました。日報テンプレート作成画面を使いやすく修正しました。在庫管理機能を一部拡張しました。

### 2022/10/03 Version1.15.0

{{% badge style="green" icon="check-circle" %}}Web{{% /badge %}}
{{% badge style="red" icon="check-circle" %}}ios{{% /badge %}}
{{% badge style="blue" icon="check-circle" %}}Android{{% /badge %}}
期間入力で休憩時間の入力ができるようになりました。過去データ推移で1に関する表示を修正しました。日報データのヘッダーエリアを非表示にできるようになりました

### 2022/10/01 Version1.14.0

{{% badge style="green" icon="check-circle" %}}Web{{% /badge %}}
受信BOXで日報をポップアップ表示出来るようになりました

### 2022/09/29 version 1.13.2

{{% badge style="green" icon="check-circle" %}}Web{{% /badge %}}
カレンダー表示の1行目・1列目をそれぞれ固定化しました。過去データ推移の1列目の幅を調整しました

### 2022/09/14 version 1.13.1

{{% badge style="green" icon="check-circle" %}}Web{{% /badge %}}
{{% badge style="red" icon="check-circle" %}}ios{{% /badge %}}
{{% badge style="blue" icon="check-circle" %}}Android{{% /badge %}}
[過去データ推移](/report/analytics/list/)の色分け機能にバグがあったため修正を行いました。（すでに設定済みの場合、設定はクリアされます）

### 2022/09/13 Version 1.13.0

{{% badge style="green" icon="check-circle" %}}Web{{% /badge %}}
{{% badge style="red" icon="check-circle" %}}ios{{% /badge %}}
{{% badge style="blue" icon="check-circle" %}}Android{{% /badge %}}
[過去データ推移](/report/analytics/list/)で最大取得件数を10件から30件に拡張しました。（オプションから選択します）過去データ推移で各行ごとに任意の色付けをすることが出来るようになりました。スタッフのアカウントを無効化するとAPIキーも同時に破壊されるように修正しました。手動でAPIキーを破壊できる機能を追加しました。

### 2022/09/07 Version 1.12.3

{{% badge style="green" icon="check-circle" %}}Web{{% /badge %}}
Windows・一部のAndroidでのみ表示されていた日報のスクロールバーを非表示にしました。日報保存箱で表示形式の切替機能が実装されました。アプリ更新プロセスにバグがあったため修正を行いました（PWAとして利用中の方対象）

### 2022/09/02 v1.12.2

{{% badge style="green" icon="check-circle" %}}Web{{% /badge %}}
{{% badge style="red" icon="check-circle" %}}ios{{% /badge %}}
{{% badge style="blue" icon="check-circle" %}}Android{{% /badge %}}
[CSV出力](/report/analytics/csv/)時、バイナリの出力をスタッフ名ごとにフォルダ分けして出力するように修正しました。[ログ表示](/org/group2/log/)の日付入力を使いやすく改良しました。[期間入力フォーム](/org/groupsetting/template/datetimes/)で算出される経過時間の計算が特定の条件で負数になるバグを修正しました。

### 2022/08/31 v1.12.1

{{% badge style="green" icon="check-circle" %}}Web{{% /badge %}}
{{% badge style="red" icon="check-circle" %}}ios{{% /badge %}}
{{% badge style="blue" icon="check-circle" %}}Android{{% /badge %}}
[可変長の入力](/org/groupsetting/template/array/)時に見出し項目を1行目以外非表示にしました。[期間入力フォーム](/org/groupsetting/template/datetimes/)の表示を一部変更しました

### 2022/08/29 Version 1.12.0

{{% badge style="green" icon="check-circle" %}}Web{{% /badge %}}
{{% badge style="red" icon="check-circle" %}}ios{{% /badge %}}
{{% badge style="blue" icon="check-circle" %}}Android{{% /badge %}}

[CSV出力](/report/analytics/csv/)オプションに「画像の出力」「コメントの出力」が追加されました

### 2022/08/23 Version 1.11.2

{{% badge style="green" icon="check-circle" %}}Web{{% /badge %}}
日報作成時のテンプレート選択画面で画面表示切り替えの設定を記憶するように修正しました。ログイン画面のデザインを一部変更しました。

### 2022/08/22 Version 1.11.1

{{% badge style="green" icon="check-circle" %}}Web{{% /badge %}}
[CSV出力](/report/analytics/csv/)オプションに「可変長」に関するオプションが追加されました。[可変長の日報](/org/groupsetting/template/array/)のデザインを変更しました

### 2022/08/21 Version 1.11.0

{{% badge style="green" icon="check-circle" %}}Web{{% /badge %}}
{{% badge style="red" icon="check-circle" %}}ios{{% /badge %}}
{{% badge style="blue" icon="check-circle" %}}Android{{% /badge %}}

集計CSV出力の機能が強化され、複数のテンプレートをまとめてCSV出力出来るようになりました。集計機能の画面レイアウトを一部変更しました。日報作成時のテンプレート選択画面においてスマートフォンのように画面幅が狭い端末は見た目をカードレイアウトに切り替えました。

### 2022/08/18 Version 1.10.1

{{% badge style="green" icon="check-circle" %}}Web{{% /badge %}}
{{% badge style="red" icon="check-circle" %}}ios{{% /badge %}}
{{% badge style="blue" icon="check-circle" %}}Android{{% /badge %}}
[ログアウト](/account/signin/)時にエラーメッセージが表示されるバグの修正を行いました

### 2022/08/16 Version 1.10.0

{{% badge style="green" icon="check-circle" %}}Web{{% /badge %}}
[匿名アカウント](/account/tokumei/)によるログインがサポートされました（Web版限定）

### 2022/08/13 Version 1.9.0

{{% badge style="green" icon="check-circle" %}}Web{{% /badge %}}
{{% badge style="red" icon="check-circle" %}}ios{{% /badge %}}
{{% badge style="blue" icon="check-circle" %}}Android{{% /badge %}}
[PDF出力機能](/report/read/pdf/)が強化されました。[一括PDF](/report/analytics/pdf/)・QRコード埋め込み・本文の編集などが可能になりました

### 2022/08/03 Version 1.8.2

{{% badge style="green" icon="check-circle" %}}Web{{% /badge %}}
集計可能な入力フォームごとに集計するか否かの設定ができるようになりました

### 2022/08/03 Version 1.8.1

{{% badge style="green" icon="check-circle" %}}Web{{% /badge %}}
日報検索時、無効化したテンプレートを検索対象に含めることができるようになりました

### 2022/07/30 Version 1.8.0

{{% badge style="green" icon="check-circle" %}}Web{{% /badge %}}
{{% badge style="red" icon="check-circle" %}}ios{{% /badge %}}
{{% badge style="blue" icon="check-circle" %}}Android{{% /badge %}}
日報テンプレート選択時に本日の作成枚数が表示されるようになりました。チェックボックス入力フォームのデータが集計可能になりました。

### 2022/07/30 Version 1.7.5

{{% badge style="green" icon="check-circle" %}}Web{{% /badge %}}
{{% badge style="red" icon="check-circle" %}}ios{{% /badge %}}
{{% badge style="blue" icon="check-circle" %}}Android{{% /badge %}}
グループ切替時に同じ日報が分裂して表示されるバグを修正しました。CSV出力時に選択肢にカラー機能が使われている場合にカラーコードがそのまま出力されてしまうバグを修正しました。

### 2022/07/27 Version 1.7.4

{{% badge style="red" icon="check-circle" %}}ios{{% /badge %}}
{{% badge style="blue" icon="check-circle" %}}Android{{% /badge %}}
モバイルデバイスに限り影響のあった一部不具合の修正を行いました

### 2022/07/27 Version 1.7.3

{{% badge style="green" icon="check-circle" %}}Web{{% /badge %}}
色分けを行ったデータが適切に集計されないバグの修正を行いました。[CSV出力](/report/analytics/csv/)に「昇順出力」オプションが追加されました

### 2022/07/23 Version 1.7.1

{{% badge style="green" icon="check-circle" %}}Web{{% /badge %}}
選択肢入力フォームの色付けを目立つように修正しました。テンプレートの編集でKeyの修正ができるようになりました。

### 2022/07/21 Version 1.7.0

{{% badge style="green" icon="check-circle" %}}Web{{% /badge %}}
{{% badge style="red" icon="check-circle" %}}ios{{% /badge %}}
{{% badge style="blue" icon="check-circle" %}}Android{{% /badge %}}
選択肢入力フォームに色分け機能が実装されました

### 2022/07/19 Version 1.6.0

{{% badge style="green" icon="check-circle" %}}Web{{% /badge %}}
{{% badge style="red" icon="check-circle" %}}ios{{% /badge %}}
{{% badge style="blue" icon="check-circle" %}}Android{{% /badge %}}
日報・チェックシートの[CSV出力オプション](/report/analytics/csv/)が変更されました

### 2022/07/16 Version 1.5.7

{{% badge style="green" icon="check-circle" %}}Web{{% /badge %}}
{{% badge style="red" icon="check-circle" %}}ios{{% /badge %}}
{{% badge style="blue" icon="check-circle" %}}Android{{% /badge %}}

日報の修正後に続けて日報を書くと上書きされてしまうバグを修正しました

### 2022/07/12 Version 1.5.6

{{% badge style="green" icon="check-circle" %}}Web{{% /badge %}}
特定の環境で過去の[データ推移](/report/analytics/list/)が取得できないバグを修正しました

### 2022/07/12 Version 1.5.5

{{% badge style="green" icon="check-circle" %}}Web{{% /badge %}}
{{% badge style="red" icon="check-circle" %}}ios{{% /badge %}}
{{% badge style="blue" icon="check-circle" %}}Android{{% /badge %}}
バグの修正を行いました。過去データ推移の1列目を固定にしました

### 2022/07/11 Version 1.5.4

{{% badge style="green" icon="check-circle" %}}Web{{% /badge %}}
[共用機能](/org/group2/share/)について提出先の指定が適用されないバグが確認されたため修正を行いました。
[グループへの所属画面](/org/staff/manage/)をより見やすく変更しました。本サイトのページ一部URL変更に伴いアプリ内のリンクを修正しました

### 2022/07/07 Version 1.5.3

{{% badge style="green" icon="check-circle" %}}Web{{% /badge %}}
NipoPlusで使用している[Quasarフレームワーク](https://quasar.dev/)のバージョンを最新版に変更しました。サイトURLの一部変更に伴うリンクの修正を行いました

### 　2022/07/02 Version 1.5.2

{{% badge style="green" icon="check-circle" %}}Web{{% /badge %}}
{{% badge style="red" icon="check-circle" %}}ios{{% /badge %}}
{{% badge style="blue" icon="check-circle" %}}Android{{% /badge %}}

[選択肢（複）フォーム](/org/groupsetting/template/select2/)で特定の条件が整うと1つしか入力できないバグを修正しました

### 2022/07/01 Version 1.5.1

{{% badge style="green" icon="check-circle" %}}Web{{% /badge %}}
{{% badge style="red" icon="check-circle" %}}ios{{% /badge %}}
{{% badge style="blue" icon="check-circle" %}}Android{{% /badge %}}
[CSV出力設定が保存可能](/report/analytics/csv/)になりました。グループのテーマカラーがうまく反映されないバグを修正しました。グループ毎にメニュー項目の表示・非表示切替ができるようになりました

### 2022/06/28 Version 1.5.0

{{% badge style="green" icon="check-circle" %}}Web{{% /badge %}}
{{% badge style="red" icon="check-circle" %}}ios{{% /badge %}}
{{% badge style="blue" icon="check-circle" %}}Android{{% /badge %}}
日報作成後にメール送信ボタンが追加されました。提出専用アカウントでも[自分の日報に限り集計](/report/analytics/)できるようになりました

### 2022/06/23 Version 1.4.0

{{% badge style="green" icon="check-circle" %}}Web{{% /badge %}}
{{% badge style="red" icon="check-circle" %}}ios{{% /badge %}}
{{% badge style="blue" icon="check-circle" %}}Android{{% /badge %}}
承認の印をはんこ風に変更しました。日報詳細表示画面で過去のデータ推移が確認できるようになりました。日報テンプレートの文字が長くて見切れてしまう問題を修正しました

### 2022/06/16 Version 1.3.2

{{% badge style="green" icon="check-circle" %}}Web{{% /badge %}}

脱字を修正しました。サイトのページ一部変更に伴いリンクを修正しました

### 2022/06/16 Version 1.3.1

{{% badge style="green" icon="check-circle" %}}Web{{% /badge %}}
カレンダー上で日報の表示する方式を「報告者指定日時」と「サーバ基準」から選べるようになりました。日報テンプレートの編集時に表示がずれるバグを修正しました

### 2022/06/16 Version 1.3.0

{{% badge style="green" icon="check-circle" %}}Web{{% /badge %}}
{{% badge style="red" icon="check-circle" %}}ios{{% /badge %}}
{{% badge style="blue" icon="check-circle" %}}Android{{% /badge %}}

「承認して次へ」機能の実装  メール送信機能実装  日報修正時に文書番号が欠落するバグの修正

### 2022/06/14 Version 1.2.3

{{% badge style="green" icon="check-circle" %}}Web{{% /badge %}}
{{% badge style="red" icon="check-circle" %}}ios{{% /badge %}}
{{% badge style="blue" icon="check-circle" %}}Android{{% /badge %}}

[選択肢(複)](/org/groupsetting/template/select2/)の[集計](/report/analytics/transition/)が行われないバグを修正しました

### 2022/06/13 Version 1.2.2

{{% badge style="green" icon="check-circle" %}}Web{{% /badge %}}
日報作成後に他のテンプレートを選択できるように修正しました

### 2022/06/10 Version 1.2.0

{{% badge style="green" icon="check-circle" %}}Web{{% /badge %}}
[日報テンプレート](/org/groupsetting/template/)のラベルを色分けできる機能が追加されました

### 2022/06/08 Version 1.1.0

{{% badge style="green" icon="check-circle" %}}Web{{% /badge %}}
 CSV出力に「縦列入れ替えオプション」が追加されました

### 2022/05/30 Version 1.0.2

{{% badge style="green" icon="check-circle" %}}Web{{% /badge %}}
{{% badge style="red" icon="check-circle" %}}ios{{% /badge %}}
{{% badge style="blue" icon="check-circle" %}}Android{{% /badge %}}

Android版・iOS版・Web版が出揃いました

### 2022/05/08 Version 0.2.9

RC版

### 2022/04/22 Version 0.0.1

プレリリース
