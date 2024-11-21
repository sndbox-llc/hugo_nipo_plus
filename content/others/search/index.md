+++
url = "/others/search/"
description = "サイト内のコンテンツを簡単に検索して見つけることができます。キーワードを入力して、関連する記事や情報をすぐにリストアップ。NipoPlusの機能や活用法を探すのに便利な検索ページです。データベースには速度と精度に定評のあるAlgoliaを使用しています。"
# tags = []
title = "検索"
toc = true
weight = 103000018
aliases = []
images = []
[sitemap]
  changefreq = "yearly"
  priority = 0.3
+++


<div id="searchBoxModal" tabindex="-1" aria-labelledby="searchBoxModalLabel">
<h5 class="modal-title" id="searchBoxModalLabel">検索</h5>

<div class="modal-body">
<div id="app">
<input type="text" v-model="word" class="w-100">
<hr>

<div v-if="isNotFound">見つかりませんでした。</div>
<a v-else v-for="row in resultArr" :href="[[row.relpermalink]]" class="list-group-item list-group-item-action mb-2" style="border-bottom: 1px solid #ccc;">
<div class="d-flex w-100 justify-content-between">
<h6 class="my-0">[[ row.shortTitle ]]</h6>
</div>
<p class="mb-1" style="font-size: 15px; color: #666;" v-html="row.shortSummary"></p>
<span class="badge rounded-pill bg-primary mx-2 mb-2" v-for="tag in row.tags">[[ tag ]]</span>
</a>
</div>
</div>

<div class="modal-footer">
<div style="font-size: 13px;">
検索にはAlgoliaを利用
<a href="https://www.algolia.com/" target="_blank">
<img src="/images/Algolia-logo-blue.svg" width="100" alt="algolia logo" loading="lazy">
</a>
</div>
</div>

</div>


<script src="https://cdnjs.cloudflare.com/ajax/libs/vue/3.3.4/vue.global.prod.min.js" integrity="sha512-39BSQXI5q1XlvVhLfFRidKG8KM6Tr6VS/XSnNo6N/A0ZXexHCeoUI/s+ulujQy3UREjoLNrMnFat8VI0mMugWA==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/algoliasearch/4.17.1/algoliasearch-lite.umd.min.js" integrity="sha512-dYj47Cv0or11Y6jtjdZ/Il4fCZYQPVaGmQNgZmRsStgPZfASZ8lWgbOD9GpkV+2Mu8LvspZW+AhlL8BmQnEOyg==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>

<script defer src="/js/search.js"></script>
