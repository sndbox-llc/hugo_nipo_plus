+++
description = "FireStoreは非常に強力なデータベースですが唯一の欠点に「全文検索ができない」という弱点があります。この記事はFireStoreとTypesenseを組み合わせることで全文検索もできるというお話です。"
tags = ["firebase"]
title = "TypesenseとFireStoreを併用してアプリ内検索を実装【Algoliaから移住】"
toc = true
images = ["firebase-icatch.png"]
date = "2022-11-14"
code = true
[sitemap]
  changefreq = "yearly"
  priority = 0.2
url = "/tech/typesense/"
+++

  
この記事のあとに、[Elastic Searchを交えた新たな記事](/tech/fulltext/)を書きました。

## AlgoliaからTypeSenseへ切り替えは可能か？{#switching_from_algolia_to_typesense}

FireStoreを使ってシステムを構築すると、検索機能の貧弱さに頭を抱えることになります。mySQLなどにある「Like検索」は前方一致で行うことは可能ですが、部分一致による検索はできません。  
FireStoreの公式サイトでは、[全文検索を実装するには外部のデータベースを使用](https://firebase.google.com/docs/firestore/solutions/search?provider=algolia)するように案内しています。2021年7月時点では、外部のデータベースとして

- [Algolia](https://www.algolia.com/)
- [Elastic Search](https://www.elastic.co/jp/elasticsearch/)
- [TypeSense](https://typesense.org/)

の3種類が案内されています。現在のNipoではAlgoliaを使って全文検索を実装していますが、実はAlgolia、小規模なプロジェクトでも結構高額になる料金体系のため予算に限りのあるプロダクトでは実装するのが非常に厳しいです。
特に料金形態が変更されてからは事実上の値上げとなりました。

{{<alice pos="right" icon="guide">}}
従量課金型なので最初は安いんだけど、あっという間に月数万円になりますよ。
{{</alice>}}

使い方もかんたんで、速度も申し分ないのですが料金がネックです。
この度、Nipoではない他のプロダクトで試験的にTypeSenseを導入してみました。このページはTypesense導入におけるお話をしていきます。実際に使ってみて感じたことをつらつらと書いていきます。

## TypeSenseは低価格で全文検索が可能な新しいデータベースです{#typesenseCanFulltextSearch}

Typesenseの情報自体はまだまだ少ないです。日本語によるTypesense導入を解説しているページはほとんど有りません。Typesenseがどのようなものかというと、メモリ上だけで保存される全文検索が可能なデータベースです。
制限付きAPIキーなどを使えばマルチテナント型のサービスでも安全にデータを隔離可能で、検索はもちろん、並べ替えなども可能です。
気になる料金ですが、自前でサーバを用意できる場合はそのサーバ費用のみです。サーバを用意するのが大変な場合は、Typesense Cloudを使うこともできます。
[Typesense Cloud](https://cloud.typesense.org/)の料金は使用するメモリ量やCPU、リージョンによって変わりますが、最小構成で、リージョンを「ムンバイ」にすると月額費用はたったの7.2ドルです。

{{<imgproc typesense_price.png "TypesenseCloudの料金はリージョンによっても金額が変わります。ムンバイは特にリーズナブルな価格で提供されています" >}}

メモリが0.5GBは実運用では足りないと思いますが、ちょっと使ってみるにはお手軽です。多少遅くても、Algoliaよりずっと安価で導入できるのは魅力的ですね。（データ0件ならAlgoliaのほうが安いですが・・・）

### リレーショナルデータベースのようにテーブル構造を作成する必要があります{#needsSchemaSetting}

Algoliaでは、Indexというまとまりを作ってそこにデータを入れて保存していきます。これはリレーショナルデータベースで言うところの「テーブル」に該当します。Typesenseではこれを「Collection」と呼びます。
ちょっと面白いなと思ったのが、[テーブルスキーマ](https://typesense.org/docs/0.21.0/api/collections.html#create-a-collection)という概念があることです。Collectionを作る際にスキーマを定義するため、Algoliaに比べるとちょっと面倒くさいですが、そのおかげで任意のキーでソートが可能になります。（Algoliaはソートが1種類に制限されるのでここが大きな違い）
スキーマに定義していないデータを放り込むこともできるので、ある程度の柔軟性も持っています。
例えばスキーマはこんな感じで書きます

```javascript
{
  "name": "sample",
  "fields": [
    {
      "name": "id",
      "type": "string"
    },
    {
      "name": "groupId",
      "type": "string",
      "facet": true
    },
    {
      "name": "bigram",
      "type": "string",
      "facet": true
    },
    {
      "name": "createTime",
      "type": "int64",
      "facet": true
    }
  ],
  "default_sorting_field": "createTime"
}
```

## 半角スペースで単語を区切らない日本語は全文検索に工夫が必要です{#full_text_search_for_cjk}

もともと英語圏で作られたデータベースのためか、半角スペースで単語を区切らない日本語はTypesenseで検索することができません。そのため、日本語でも検索できるように小細工をする必要があります。
この辺も、Algoliaに比べると不便な点です。Algoliaは標準で日本語の全文検索に対応していました。高いけど。
さて小細工といってもやることは単純で、n-Gramという手法を使うだけです。n-Gramは単語を決まった数にぶつ切りにすることです。
ぶつ切りにする粒子の大きさによって呼び方が変わるようです。ぶつ切りサイズを2とした、「バイグラム」だと、こんな感じになります。

```sh
今日はいい天気です。 // ぶつ切り前
今日　日は　はい　いい　い天　天気　気で　です　す。 // ぶつ切り後
```

FireStoreに書き込まれたデータを、バイグラムに変換して、Typesenseに保存しましょう。Cloud Functionで変換のプログラムを書いてあげればいいと思います。
今では絵文字も当たり前に使われるようになりました。開発者からすれば😨な心境です。
絵文字にも対応したBigram生成の関数の例

```javascript
export function makeBigram (dutyVal: string): string {
  const len = 2;
  const resultAry = Array.from(dutyVal); // Array.fromはサロゲート対応をよしなにしてくれます。絵文字の問題はこれで解決
  if (resultAry.length < len) {
    return dutyVal;
  }
  let res = '';
  for (let i = 0; i <= resultAry.length - 1; i++) {
    if (resultAry[i + 1] !== undefined) {
      res += `${resultAry[i]}${resultAry[i + 1]}`;
    }
  }
  return res;
}
```

[Qiita【文字列を1文字ずつ配列化（サロゲートペアを考慮）】](https://qiita.com/sounisi5011/items/aa2d747322aad4850fe7)が参考になります。

こんな関数を用意してあげて、FireStoreのデータ変更を検知したらBigram化させ、Typesenseに書き込みします。
Typesenseへの書き込みなんかは、公式サイトの[データ書き込み](https://typesense.org/docs/0.21.0/api/documents.html#index-a-document)を御覧ください。

{{<imgproc typesense_price.png "Typesenseのコンソールから保存されたデータをGUIで確認できます。" >}}

実際に書き込まれた内容はTypesenseの管理コンソールからも確認できます。GUIで見れるのは嬉しいですね。
そして検索するときも、検索キーワードをバイグラムに変換して検索することで、目的のデータを引っ張ってくることが可能です。

{{<alice pos="right" icon="guide">}}
つまり書き込み時と検索時の2回、文字列をBi-gram化する必要があります
{{</alice>}}

## 他の会社のデータを見れないように制限付きAPIキーをうまく使おう{#securityManagement}

Algliaにもありましたが、制限付きAPIキーを作成することで、複数企業のデータがまとまったデータベースでも、他の企業から盗み見られないように安全に守ることができます。

Adminキーから制限付きAPIキーを作り、FireStoreの適当なところに保存しておきます。
AdminKeyはもちろん、SearchKeyも制限がない場合は他の会社のデータを覗き見れてしまう危険な鍵なので、絶対にフロント側で使ってはいけません。
Cloud Functionから本人確認のプロセスを経て、制限付きのAPIキーを作るようにします。
**functions.https.onCall**を使えば、UserIdが本人であることが保証されるのでこれを使うと便利です。

```javascript
const limitedKey = client.keys().generateScopedSearchKey(
  dangerKey.value, // Typesenseで作成した鍵を渡します。これはそのまま使ったらあかんやつです
  {
    'filter_by': `groupId:${groupId}`, // groupIdでフィルターします。これでこの鍵は他のgroupIdデータにアクセスできません
    'expires_at': expiresAt // 有効期限なども必要に応じて設定できます
  }
)
```

制限付きキーの作り方について詳しくは[Typesense公式ガイド-API Key](https://typesense.org/docs/0.21.0/api/api-keys.html#generate-scoped-search-key)を御覧ください。

ざっくばらんに説明するとfilter_by: フィルターするグループIDをセットすることで、そのグループのデータだけがフィルターされたサブセットから検索されるということです。この鍵はもうフィルターが絶対条件としてついており、利用者側でこの鍵のフィルターを外すことはできません。

{{<alice pos="right" icon="guide">}}
制限付きKeyを使ってフィルターする。実装の考え方自体はAlgoliaとほとんど同じだね
{{</alice>}}

## TypeSenseのイマイチなポイント{#weak_points_of_typesense}

非常に便利なTypesenseですが、イマイチなポイントもありました。いくつかまとめてみます

### 「文字列」のソートには対応していない{#does_not_support_sorting_strings}

地味に不便なポイントです。数値や真偽値でのソートは可能ですが、[文字列によるソートは対応していません](https://github.com/typesense/typesense/issues/73)。Nipo【旧版】なんかでは正直ソートはいりませんが、データをテーブル風に表示する製品においてはテーブルとソートはセットみたいな感じなので、文字によるソートは欲しかったですね。
文字を文字コードの数値にして戦闘からウェイトをもたせて数値として保存する事もできますが、まぁそこまで回りくどいことをしないと実装できないってことで少しマイナスポイントでした。
Algoliaのソートは1種類しか保存できないため、文字によるソートができない弱点は対Algoliaに対してそこまで大きな弱点にはならないでしょう。複数のキーでソートできる点では、TypesenseはAlgoliaより優秀です  

開発者に連絡をしたところ、対応可能か前向きに検討してくれるとのことです。今後に期待ですね！

{{<alice pos="right" icon="guide">}}
TypeSenseの勝ちです
{{</alice>}}

### 日本語など半角スペースで区切らない言語に厳しい{#fulltext_CJK}

すでに上でも書いていますが、日本語ではn-gramを使って文字をぶつ切りにしないと全文検索として利用できません。
n-gramはシンプルですが検索にノイズが入りやすく、精度がイマイチというデメリットがあります。このあたりはAlgoliaのほうが優秀ですね。  
なお、ハイフン区切りの英単語も検索できないとissueが上がっていました。

> 本記事をTypesense開発者のJason Bosco氏が見てくれて、情報を提供してくれました。緩やかにではありますが、日本語のサポートにも着手しているとのことです。将来が楽しみですね。

{{<alice pos="right" icon="guide">}}
現時点ではAlgoliaの勝ちです
{{</alice>}}

### インメモリで動くためサーバ構成を変えることができない{#staticServerSpec}

Typesense_cloudでは起動前にサーバの性能を選択できることは前述しましたが、一度起動すると、構成を変更することができません。

あとになって「あー、メモリが足りない」といったときに、自動でスケールしてくれればいいのですが残念ながらそれは不可能なようです。
サーバを止める(terminate)と、そのサーバは二度と起動できません。これは揮発性メモリにしかデータを保存してないためだと思われますが、何にせよ不便ですね・・・。
そのため、全文検索したいデータはFireStoreからTypesenseへ全プッシュするプログラムを書いておく必要があります。容量がやばくなってきたら新しいクラスターを立ち上げて全プッシュし、古いクラスターを破壊するといった手順が必要です。この辺をサービスを停止せずにスマートに切り替えるにはいくつか細工が必要です。この辺はAlgoliaも同じようですね。ただ、高額な料金に見合うだけの潤沢なメモリを最初に割り当ててくれるため、リソースの枯渇に悩む必要が無いってことらしいです。

> 本記事をTypesense開発者のJason Bosco氏が見てくれて、情報を提供してくれました。クラスターを拡大することは、サポートに連絡することで対応してくれるそうです。また、将来的には管理画面からユーザが任意にクラスターサイズを変更できるようになるようです。

{{<alice pos="right" icon="guide">}}
Typesenseが動的に変えられるとのことでTypesenseの勝ちになりました
{{</alice>}}

### ライセンスがGPL3である（用途によっては問題になるかも？）{#licensed_under_gpl3}

ライセンスの問題で、GPL3を採用しています。開発者側は[「なぜGPL3？」](https://github.com/typesense/typesense#user-content-why-the-gpl-license)と詳しく解説しているので気になる方は目を通してみてください。

### TypeScriptに対応していない{#does_not_support_typescript}

・・・タイプスクリプト化だけはお願いします。

有志の型がデコレーションファイルを共有してくれていますので、公式でTypeScriptがサポートされるまでの間に合わせとしてこちらを使っています。微妙に間違っているところもありますが概ね問題なく動きます。サポートされるまでのつなぎとして、ありがたく使わせてもらいましょう。  
なお、AlgoliaはしっかりTypeScriptがサポートされています。  

と思ったら[Typesense](https://github.com/typesense/typesense-js) Version 1.0.0からTypescriptに対応しました。

### ちらほらバグがある{#occasional_bugs}

時々挙動がおかしいことがあります。ただこれは人が作るものである以上仕方ないと思います。  
ありがたいことにTypsenseのチームは質問に対してのレスポンスや修正がとても早く助かります。もし使ってみて気になることがあれば質問を投げてみるといいです。
TypeScriptに対応したV1.0.0で初期化の引数型似バグがあり、[Issue](https://github.com/typesense/typesense-js/issues/82#issuecomment-963785454)を書いたその10分後には修正完了の返信がきていました。驚きです。
多少の粗はやむを得ないとして開発の勢いはとても強いと感じました。

{{<alice pos="right" icon="guide">}}
英語が話せなくてもGoogle翻訳を使えばなんとかなる！
{{</alice>}}

## 検索ノイズが多いのでもう少し改良した話{#furtherNoise}

予想はしていましたが、Bi-gramだと検索ノイズが多く出てしまう傾向があります。特に数字などはノイズが酷いため、用途によっては数字はN-gram化しないなどの対策が必要になりそうです。
辞書を使った単語の分割も試してみました。日本語を分かち書きする際に有名なものでは[mecab](https://www.mlab.im.dendai.ac.jp/~yamada/ir/MorphologicalAnalyzer/MeCab.html)があります。  
ただ私は自前でサーバを管理する気はないため、もっと手軽に実装できないかと探してみたところGoogleの[Natural Language](https://cloud.google.com/natural-language)というものがあったのでこちらを試しに使ってみました。  
こちらも概ね良好ですがたまにうまく分解されず、検索されない単語などが出てくることもあります。  

{{<alice pos="right" icon="guide">}}
日本語を全文検索対応するのは結構たいへん・・・
{{</alice>}}

- N-gramは検索漏れは出ず、確実に検索できるがノイズが多い
- 形態素解析ではノイズは少ないが検索漏れが発生する可能性がある

結局の所両者を組み合わせることで対応するのがベストのようです。Elastic Searchには[N-gramと形態素解析の組み合わせに関する記事](https://www.elastic.co/jp/blog/how-to-implement-japanese-full-text-search-in-elasticsearch)が書かれており大変参考になります

日本語の全文検索は結構多くの方が苦労してチューニングされていることがわかりました。
日本語対応の手間がなくすぐに使えるという点ではAlgoliaは選択肢として入るかもしれません。

## 総括{#conclusion}

実際に使ってみて、非常に良い製品だと思います。スキーマを定義することで様々なキーでソートが可能になるため、NoSQLの弱点を少し払拭してきた印象です。SQLを書かずともそれっぽい検索が可能なデータベースであり、用途によってはAlgliaより有益な製品になるでしょう。これ以上、より細かい並べ替えが必要なら素直にRMDBを使いなさいってことだと思います。
現在、Nipoの日報検索はTypeSenseが使われています。

{{<imgproc typesense_search.png "Nipoで日報を検索する画面" >}}

実際にTypesenseのサーバから帰ってくる値はこんな感じです

{{<imgproc typesense_result.png "Nipoで日報を検索する画面" >}}

NipoではBi-gramではなくUni-gramで分解しています。つまり1文字づつ分解します。  
数字なんかは分解するとノイズが酷いため、数字は1つのブロックとして分解しないようにしています。
大規模なプロジェクトでは実装するのはよく考えたほうが良いですが、Nipoのように一人で気軽に開発しているプロジェクトでは、
簡単に導入ができて、コストが安く、サーバも自分で管理しなくて良いので私の中ではベストな選択だったと思います。

最後に、Nipoの入力をN-gramにするサンプルプログラム（数値ブロック対応版）の例を載せておきます

```javascript

/**
 * Ngram生成改良プログラム絵文字対応バージョン
 * 数値の列はN-gramにすると検索ノイズがやばいことになるため、除外。
 * ハイフンや句読点は明確な区切りとしてN-gram外のルールとして実装しました。
 */
export function makeNgramWithoutDigit (dutyVal:string | number, len = 2, tobeDigitBlock = false):string {
  if (typeof dutyVal === 'number') {
    return dutyVal.toString();
  }
  const resultAry = Array.from(dutyVal);

  if (resultAry.length <= len) {
    return dutyVal;
  }
  /**
   * 区切り文字列たち
   */
  const breakWord = [' ', '　', '-', '_'];
  const numWord = [
    '0', '1', '2', '3', '4', '5', '6', '7', '8', '9',
    '０', '１', '２', '３', '４', '５', '６', '７', '８', '９',
    ',', '.', '・', '、', '，'
  ];
  /**
   * resは最終的に返す値を蓄える文字列です
   */
  let res = '';
  for (let i = 0; i <= resultAry.length - 1;) {
    // 引数tobeDigitBlockがtrueなら数値はN-gramではなく1つの連なったブロックとして出力する。
    // 例えば 123000という値が来たとき、
    // tobeDigitBlock= trueなら 123000
    // tobeDigitBlock = falseなら123 230 300 000(lenが3と仮定)
    // となる
    if (tobeDigitBlock) {
      const currentChar = resultAry[i];
      if (numWord.includes(currentChar)) {
        let digitNode = '';
        // 現在のポインタは数字を示しているため、連なった数字までポインタを進め、を1つのトークンとする(Ngramにはしない)
        // eslint-disable-next-line no-constant-condition
        while (true) {
          const digitChar = resultAry[i];
          if (!numWord.includes(digitChar)) { break; }
          digitNode += digitChar;
          i++;
        }
        res += `${digitNode} `;
      }
    }
    let charNode = '';
    // nグラムのノードを作成する
    for (let j = 0; j < len; j++) {
      const char = resultAry[i + j];
      if (char === undefined) break;
      if (breakWord.includes(char)) break;
      charNode += char;
    }

    // 出来上がったNgramのノードをスペースでつないであげる
    res += `${charNode} `;
    i++;
  }
  return res;
}
```
