+++
url = "/others/search/"

title = "検索"
menuTitle = "検索"
description = "サイト内のコンテンツを簡単に検索して見つけることができます。キーワードを入力して、関連する記事や情報をすぐにリストアップ。NipoPlusの機能や活用法を探すのに便利な検索ページです。データベースには速度と精度に定評のあるAlgoliaを使用しています。"
toc = false
weight = 12001
+++

<div id="searchBoxModal" tabindex="-1" aria-labelledby="searchBoxModalLabel">
<h5 class="modal-title" id="searchBoxModalLabel">検索</h5>
<div class="modal-body">
<div id="app">
<input type="text" v-model="word" class="form-control mb-3" placeholder="キーワードを入力してください">
<hr>
<div v-if="isNotFound" class="alert alert-danger">見つかりませんでした。</div>
<div v-else>
<!-- 検索結果をカード表示 -->
<div class="row">
<div class="col-md-16 mb-3" v-for="row in resultArr" :key="row.objectID">
<a :href="row.relpermalink" class="text-decoration-none text-dark">
<div class="card h-100 shadow-sm">
<div class="card-body">
<h6 class="card-title">[[ row.shortTitle ]]</h6>
<p class="card-text" v-html="row.shortSummary" style="font-size: 0.9rem; color: #666;"></p>
<div>
<span class="badge bg-primary" v-for="tag in row.tags" :key="tag">[[ tag ]]</span>
</div>
</div>
</div>
</a>
</div>
</div>
</div>
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
