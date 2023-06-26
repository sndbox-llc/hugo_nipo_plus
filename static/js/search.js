
const { createApp } = Vue

createApp({
  delimiters: ['[[', ']]'],
  setup() {
    const resultArr = Vue.ref([]);
    const isNotFound = Vue.ref(false);
    const debounceTime = Vue.ref(300)
    let timeoutId;

    // 入力監視の開始
    let textboxDom = document.getElementById('nipoSBox')
    textboxDom.addEventListener('input', function() {
      clearTimeout(timeoutId); // 前回の遅延実行をキャンセル
      timeoutId = setTimeout(function() {
        mySearch(); // 遅延後に実行
      }, debounceTime.value);
    });

    /* <em>タグの前後30文字を切り抜くマン*/
    function extractTextWithEmTag(text) {
      const startIndex = text.indexOf('<em>');
      const endIndex = text.indexOf('</em>');
      if (startIndex !== -1 && endIndex !== -1) {
        const start = Math.max(0, startIndex - 10);
        const end = Math.min(text.length, endIndex + 100);
        const extractedText = text.substring(start, end);
        return cutStr(extractedText, 50);
      }
      return cutStr(text, 50)
    };
    /** 指定した長さ以上のTextをカット */
    function cutStr (text, len = 30) {
      if (text.length <= len) {
        return text;
      }
      const truncatedText = text.substring(0, len) + '...';
      return truncatedText;
    }
  
    // 検索関数
    function mySearch() {
      isNotFound.value = false;
      resultArr.value = [];
      // 実行したい処理を記述する
      const text = textboxDom.value;
      index.search(text).then(( { hits }) => {
        if (hits.length === 0) {
          isNotFound.value = true;
        }
        hits.forEach(function(hit) {
          const shortTitle = cutStr(hit.title);
          const hilights = hit._highlightResult.summary.value;
          const shortSummary = extractTextWithEmTag(hilights);
          resultArr.value.push({ ...hit, shortSummary: shortSummary, shortTitle });
        });
      }).catch((err) => {
        console.error('エラーが発生しました:', err);
      });
    }
  
    return {
      resultArr,
      isNotFound
    }
  }
}).mount('#app');
