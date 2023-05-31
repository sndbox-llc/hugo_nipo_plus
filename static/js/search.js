
/* <em>タグの前後30文字を切り抜くマン*/
function extractTextWithEmTag(text) {
  const startIndex = text.indexOf('<em>');
  const endIndex = text.indexOf('</em>');

  if (startIndex !== -1 && endIndex !== -1) {
    const start = Math.max(0, startIndex - 0);
    const end = Math.min(text.length, endIndex + 30);
    const extractedText = text.substring(start, end);
    return extractedText;
  }
  return cutStr(text)
}
function cutStr (text) {
  if (text.length <= 30) {
    return text;
  }

  const truncatedText = text.substring(0, 30) + '...';
  return truncatedText;
}

function openModal() {
  var modal = document.getElementById('exampleModal');
  modal.classList.add('show');
  modal.style.display = 'block';
}
const { createApp } = Vue

createApp({
  delimiters: ['[[', ']]'],
  setup() {
    const resultArr = Vue.ref([])
    let timeoutId;

    // 入力監視の開始
    let textboxDom = document.getElementById('nipoSBox')
    console.log('DOMは', textboxDom)
    textboxDom.addEventListener('input', function() {
      clearTimeout(timeoutId); // 前回の遅延実行をキャンセル
      timeoutId = setTimeout(function() {
        mySearch(); // 遅延後に実行
      }, 100);
    });
  
    // 検索関数
    function mySearch() {
      resultArr.value = []
      // 実行したい処理を記述する
      console.log('検索処理を実行します');
      const text = textboxDom.value;
      index.search(text).then(( { hits }) => {
        hits.forEach(function(hit) {
          console.log(hit);
          const shortTitle = cutStr(hit.title)
          const hilights = hit._highlightResult.summary.value
          const shortSummary = extractTextWithEmTag(hilights)
          resultArr.value.push({ ...hit, shortSummary: shortSummary, shortTitle })
        });
      }).catch((err) => {
        console.error('エラーが発生しました:', err);
      });
  
    }
  
    return {
      resultArr,
      message: 'waketazoHello Vue!'
    }
  }
}).mount('#app')
