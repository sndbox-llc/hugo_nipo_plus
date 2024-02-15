function updateActiveTocLink() {
  var throttleTimer;
  // 画面幅が800px以下の場合は処理を実行しない
  if (window.innerWidth <= 1200) {
    return;
  }

  // スロットリングのため、一定時間内に複数回呼ばれても処理は1回のみ実行する
  if (throttleTimer) {
    return;
  }

  throttleTimer = setTimeout(function() {
    // 現在のスクロール位置を取得
    var currentScroll = window.pageYOffset + 80 || document.documentElement.scrollTop + 80;
    // 目次のアイテムと見出しのキャッシュ
    var tocItems = document.querySelectorAll('.mainTableOfContents #TableOfContents a');
    var headings = document.querySelectorAll('.content :is(h2, h3, h4, h5, h6)');
    var activeHeadingIndex = null;

    // スクロール位置に基づいてアクティブな見出しを探す
    for (var i = headings.length - 1; i >= 0; i--) {
      var heading = headings[i];
      if (heading.offsetTop <= currentScroll) {
        activeHeadingIndex = i;
        break;
      }
    }

    // 目次のアクティブなリンクを更新
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
  }, 200);
}

// イベントリスナーを設定
window.addEventListener('DOMContentLoaded', updateActiveTocLink);
window.addEventListener('scroll', updateActiveTocLink);
