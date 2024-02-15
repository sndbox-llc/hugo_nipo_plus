  // スロットリング用の変数
  var throttleTimer;
  
  // ページスクロール時にTable of Contentsのアクティブなリンクを更新する
  function updateActiveTocLink() {
    // スロットリングのため、一定時間内に複数回呼ばれても処理は1回のみ実行する
    if (throttleTimer) {
      return;
    }
  
    // 一定時間後に処理を実行
    throttleTimer = setTimeout(function() {
      // 現在のスクロール位置を取得
      var currentScroll = window.pageYOffset + 80 || document.documentElement.scrollTop + 80;
      // 目次のアイテムをキャッシュしておく
      var tocItems = document.querySelectorAll('.mainTableOfContents #TableOfContents a');
      // 目次の見出しをキャッシュしておく
      var headings = document.querySelectorAll('.content :is(h2, h3, h4, h5, h6)');
      var activeHeadingIndex = null;
      for (var i = headings.length - 1; i >= 0; i--) {
        var heading = headings[i];
        if (heading.offsetTop <= currentScroll) {
          activeHeadingIndex = i;
          break;
        }
      }
  
      for (var i = 0; i < tocItems.length; i++) {
        var tocItem = tocItems[i];
        if (i === activeHeadingIndex - 2 || (activeHeadingIndex === null && i === 0)) {
          tocItem.parentElement.classList.add('active');
        } else {
          tocItem.parentElement.classList.remove('active');
        }
      }
      // スロットリング用のタイマーをリセット
      throttleTimer = null;
    }, 200); // 200ミリ秒のスロットリング時間（適宜調整）
  }
  
  // ページロード時とスクロール時にアクティブなTOCリンクを更新するイベントを設定する
  window.addEventListener('DOMContentLoaded', function() {
    updateActiveTocLink();
  });
  
  window.addEventListener('scroll', updateActiveTocLink);