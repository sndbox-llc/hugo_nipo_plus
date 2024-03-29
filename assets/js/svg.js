  const bleakPoint = 767;
  let mode = (window.innerWidth > bleakPoint) ? 'tablet' : 'phone';
  const nodes = {}
  const alreadyLoadedImages = [];
  const observer = new IntersectionObserver(frameInFire, { threshold: 1});
  
  /* クエリセレクタで諸々初期化: DOM生成後に */
  function valiableInit () {
    nodes.withAliceNodes = document.querySelectorAll('.withAliceNode');
    nodes.nonAlicesNodes = document.querySelectorAll('.nonAliceNode');
    nodes.withAliceFrameClass = document.querySelectorAll('.withAliceFrameClass');
    nodes.frameNonAliceClass = document.querySelectorAll('.nonAliceFrameClass');
    nodes.images = document.querySelectorAll("image[data-src]");
    nodes.alices = document.querySelectorAll("image[data-alice]");
  }
  valiableInit();
  
  // フレームイン時の処理.アニメーションを追加する.フレームインは画像下部がウインドウをクロスしたとき発火
  function frameInFire (entries) {
    if (entries[0].intersectionRatio === 0) return;
    const aliceXPos = mode === 'tablet' ? 700 : 220;
    const svgAliceClass = entries[0].target.querySelectorAll(`:scope .svgAliceClass`)[0];
    if(entries[0].isIntersecting && svgAliceClass) {
      svgAliceClass.setAttribute('x', aliceXPos);
      svgAliceClass.classList.add('animeAT');
      const msg = svgAliceClass.dataset.msg || '';
      const fontSize = svgAliceClass.dataset.fontsize || '22px';
      var myTextElement = document.createElementNS("http://www.w3.org/2000/svg", "text");
      const stringArray = msg.split(' ');
      stringArray.forEach((node, index) => {
        const dy = index === 0 ? 0 : '1.2em';
        var tspan = document.createElementNS("http://www.w3.org/2000/svg", "tspan");
        const textNode = document.createTextNode(node);
        tspan.appendChild(textNode);
        tspan.setAttribute('x', 10);
        tspan.setAttribute('textLength', 250);
        tspan.setAttribute('lengthAdjust', 'spacing');
        tspan.setAttribute('dy', dy);
        myTextElement.appendChild(tspan);
      })
      myTextElement.setAttribute("x", "10");
      myTextElement.setAttribute("y", "35");
      myTextElement.setAttribute("fill", "green");
      myTextElement.setAttribute('text-anchor', 'start');
      myTextElement.setAttribute("font-family", "sans-serif");
      myTextElement.setAttribute("font-weight", "bold");
      myTextElement.setAttribute("font-size", fontSize);
      svgAliceClass.appendChild(myTextElement);
    }
  }
  // 画面幅変更を検知して適切なレイアウトをセットする
  function resizeWindow(){
    let preMode = mode;
    mode = (window.innerWidth > bleakPoint) ? 'tablet' : 'phone';
    if (preMode !== mode) {
      // 使用する画像の切り替え・すでに読み込み済みの画像フラグをリセットする
      alreadyLoadedImages.length = 0;
      const svgAliceClass = document.querySelectorAll(`.svgAliceClass`);
      svgAliceClass.forEach(i => i.classList.remove('animeAT'));
    }
    const viewBox = mode === 'tablet' ? '0 0 1000 520' : '0 0 500 520';
    const frameWidth = mode === 'tablet' ? 800 : 300;
    const frameHeight = mode === 'tablet' ? 530 : 530;
    const strokeWidth = mode === 'tablet' ? 20 : 14;
    // 全部のViewboxサイズを変更
    nodes.withAliceNodes.forEach(root => root.setAttribute('viewBox', viewBox));
    nodes.withAliceFrameClass.forEach(node => {
      node.setAttribute('stroke', 'black');
      node.setAttribute('width', frameWidth);
      node.setAttribute('height', frameHeight);
      node.setAttribute('stroke-width', strokeWidth);
    })
    // アリスなしの場合は縦列費を少し変えたViewboxにする
    const nonAliceViewBox = mode === 'tablet' ? '0 0 1000 630' : '0 0 500 645';
    nodes.nonAlicesNodes.forEach(i => i.setAttribute('viewBox', nonAliceViewBox));
    
    const widthNonAlice = mode === 'tablet' ? 900 : 400;
    // アリスなしのクリッピング
    nodes.frameNonAliceClass.forEach(i => {
      i.setAttribute('stroke', 'black');
      i.setAttribute('width', widthNonAlice);
      i.setAttribute('height', 650);
      i.setAttribute('stroke-width', strokeWidth);
    })
  }
  function loadImageExe (image, className) {
    const double = '//';
    const chop = location.pathname.split('index.html');
    const getPort = () => location.port ? `:${location.port}` : '';

    let path = `${window.location.origin}${image.dataset.tabletPath}`
    if (mode === 'phone') {
      path = `${window.location.origin}${image.dataset.phonePath}`
    }
    if (image.dataset.tabletPath === 'none') {
      // TOPなどWebP変換がされないデータ用
      path = `${location.protocol}${double}${location.hostname}${getPort()}${chop[0]}${image.dataset.src}${mode}.png`;
    }
    var targetFileName = path
    // すでにロード済みなら処理を中断
    if (alreadyLoadedImages.findIndex(i => i === targetFileName) !== -1) return;
    const width = (function (mode, className) {
      if (mode === 'tablet' && className === 'nonAlicePicture') return 900;
      if (mode === 'tablet' && className === 'withAlicePicture') return 800;
      if (mode === 'phone' && className === 'nonAlicePicture') return 400;
      if (mode === 'phone' && className === 'withAlicePicture') return 300;
      return 300;
    }(mode, className))

    const height = (function (mode, className) {
      if (mode === 'tablet' && className === 'nonAlicePicture') return 627;
      if (mode === 'tablet' && className === 'withAlicePicture') return 556;
      if (mode === 'phone' && className === 'nonAlicePicture') return 711;
      if (mode === 'phone' && className === 'withAlicePicture') return 533;
      return 300;
    }(mode, className))

    image.setAttribute('width', width);
    image.setAttribute('height', height);
    image.setAttribute('xlink:href', targetFileName);
    image.setAttribute('href', targetFileName);
    alreadyLoadedImages.push(targetFileName);
  }
  
  
   function initSVGLoading () {
    // フレームインのリスナー登録
    nodes.withAliceNodes.forEach(i => { observer.observe(i) });
    nodes.nonAlicesNodes.forEach(i => { observer.observe(i) });
    // 1枚目の画像は起動後すぐに読み込む
    if (nodes.images.length !== 0) {
      const firstImage = nodes.images[0]
      const className = firstImage.getAttribute('class');
      const target = firstImage.getBoundingClientRect().top;
      loadImageExe(firstImage, className)
    }
  
    // 画像遅延ロードリスナー登録
    for (let i = 0; i < nodes.images.length; i++) {
      const image = nodes.images[i];
  
      window.addEventListener("scroll", () => {
        const className = image.getAttribute('class');
        const target = image.getBoundingClientRect().top;
        if (window.innerHeight * 0.9 >= target) {
          loadImageExe(image, className)
        }
      }, {passive: true})
    }
    // アリスの画像遅延リスナー。こちらはスクロールイベント使わず一気に読んでしまいます
    for (let i = 0; i < nodes.alices.length; i++) {
      const alice = nodes.alices[i];
      alice.setAttribute('xlink:href', alice.dataset.alice);
      alice.setAttribute('href', alice.dataset.alice);
    }
    resizeWindow();
    window.addEventListener('resize', resizeWindow, {passive: true});
  }

  window.onload = function() {
    initSVGLoading();
  };

