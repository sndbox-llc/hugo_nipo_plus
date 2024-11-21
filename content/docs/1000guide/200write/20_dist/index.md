+++
url = "/docs/manual/write-report/dist/"
description = "レポートを承認できる人が「提出先」レポートを読むことができるのが「共有先」です。"
# tags = []
title = "📤レポートの提出先と共有先について"
menuTitle = "📤提出先と共有先"
toc = true
weight = 220
# aliases = []
# images = []
+++

## 提出先と共有先の意味{#whatisDist}

レポートを提出する際に、提出先と共有先の２種類を指定できます。
いずれかに名前が指定されたスタッフはそのレポートを閲覧可能です。それぞれの違いは以下のとおりです。



<dl class="basic">
<dt>提出先</dt>
<dd>レポートを<a href="/docs/manual/read-report/state/#agree">承認</a>・<a href="/docs/manual/read-report/state/#reject">棄却</a>できるスタッフです。1名以上指定必須。通知有り</dd>
<dt>共有先</dt>
<dd><a href="/docs/manual/read-report/state/#readed">既読する</a>ことはできますが承認棄却はできません。通知無し</dd>
</dl>

提出先は必ず1名以上指定する必要があります。
提出先にも共有先にも指定されなかったスタッフはそのレポートを読めません。
社内全体でレポートを共有したい場合は共有先に全スタッフを指定するか、グループモード設定で、[レポートの共有モード](/docs/manual/initial-setting/setting-group/#reportShare)を「共有する」にします。

## 提出先・共有先の選択と固定化{#fixedDist}

何の設定も無い状況では、[レポート作成時](/docs/manual/write-report/write/#dist)にレポート作成者が提出先・共有先を自由に選択できます。
この設定は記録され、次回以降自動で同じ提出先と共有先がセットされます。

前もって[管理者が提出先や共有先を固定する](/docs/manual/initial-setting/staff-local/dist/)ことも可能です。できればこの設定をしておくことを**強く推奨**します。



## 提出先の数だけ検印欄が表示されます{#stamp}

提出先は複数名設定できます。追加した順に検印欄が設けられ、順番に承認を行う承認フローが自動で適用されます。
承認は承認欄左から進み右端の検印欄に捺印された時点でそのレポートが「承認済み」の状態に変わります。

{{<icatch filename="report-progression" msg="提出先の数だけスタンプラリーします。全員回るとレポートが承認状態になります" alice="book">}}

仮に「管理者A」「C係長」「B社長」の順に提出先を指定すると上画像のように検印欄が並びます。
この例はすでに「管理者A」がレポートを承認し、現在「C係長」の承認を待っている状態のレポートを「管理者A」の画面から見たものです。
この画面に至るまでの流れを箇条書きにしました。

1. レポートを受けて管理者Aが[レポートを承認](/docs/manual/read-report/state/#agree)した
1. この時点で[承認リレー](/docs/manual/read-report/state/#relay)が開始、当該レポートは編集がロックされる🔐
1. 管理者Aはすでに承認したため承認の権限はC係長へ移る（管理者Aの承認権限は無くなる）
1. 現在はC係長の承認を待っている◀画像の状態
1. 同様の処理が繰り返され検印欄が埋まるとレポートが承認になる

承認や棄却については[レポートを読む](/docs/manual/read-report/state/)のページで解説しています。


### ⚠グループのモードが共有の場合は承認リレーが少し乱れます{#hint}

[グループの基本設定](/docs/manual/initial-setting/make-group/)でレポートの共有が「共有する」に設定されているとすべてのスタッフがレポートを読めます。
提出先が複数名いる場合、承認の順番が回ってくるよりも前にそのレポートを読めてしまう点に留意してください。

例えばA管理者が承認する前に後続のC係長がそのレポートを読めてしまいます。ただしこの時点で承認権限はA管理者にあるため、C係長はまだ承認できません。
**承認前に上席に読まれてしまうのがまずい場合はグループのモードを「通常」にして運用することを推奨**します。
