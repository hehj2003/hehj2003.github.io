/* =============================================================
 * PDF 课件内嵌查看器
 * 无下载按钮；加载时自动用 config.js 的 pdfPassword 解密。
 * 依赖：lib/pdfjs/pdf.min.js（全局 pdfjsLib）+ config.js
 * ============================================================= */
(function () {
  var config = window.QA_CONFIG || {};
  var pdfPassword = config.pdfPassword || '';

  var viewer = document.getElementById('pdf-viewer');
  var canvas = document.getElementById('pdf-canvas');
  var ctx = canvas ? canvas.getContext('2d') : null;
  var canvasWrap = document.getElementById('pdf-canvas-wrap');
  var pageLabel = document.getElementById('pdf-page');
  var titleEl = document.getElementById('pdf-title');

  var pdfDoc = null;
  var currentPage = 1;
  var totalPages = 0;
  var renderTask = null;

  function renderPage(num) {
    if (!pdfDoc || !ctx) return;
    pdfDoc.getPage(num).then(function (page) {
      var base = page.getViewport({ scale: 1 });
      var wrapWidth = (canvasWrap && canvasWrap.clientWidth) ? canvasWrap.clientWidth - 40 : 800;
      var scale = wrapWidth / base.width;
      scale = Math.max(0.4, Math.min(scale, 2.0));
      var viewport = page.getViewport({ scale: scale });

      var dpr = window.devicePixelRatio || 1;
      canvas.width = Math.floor(viewport.width * dpr);
      canvas.height = Math.floor(viewport.height * dpr);
      canvas.style.width = Math.floor(viewport.width) + 'px';
      canvas.style.height = Math.floor(viewport.height) + 'px';
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      if (renderTask) renderTask.cancel();
      renderTask = page.render({ canvasContext: ctx, viewport: viewport });
      renderTask.promise.then(function () {
        currentPage = num;
        if (pageLabel) pageLabel.textContent = currentPage + ' / ' + totalPages;
      }).catch(function () {});
    }).catch(function (err) {
      if (pageLabel) {
        pageLabel.textContent = (err && err.name === 'PasswordException')
          ? '密码错误' : '加载失败';
      }
    });
  }

  function openPdf(url, title) {
    if (!viewer || !canvas) return;
    if (titleEl) titleEl.textContent = title || '';
    viewer.hidden = false;
    document.body.style.overflow = 'hidden';
    if (pageLabel) pageLabel.textContent = '加载中…';
    currentPage = 1; totalPages = 0; pdfDoc = null;

    var params = { url: url };
    if (pdfPassword) params.password = pdfPassword;

    pdfjsLib.getDocument(params).promise.then(function (pdf) {
      pdfDoc = pdf;
      totalPages = pdf.numPages;
      renderPage(1);
    }).catch(function (err) {
      if (pageLabel) pageLabel.textContent = '无法加载课件（' + (err && err.message ? err.message : '未知错误') + '）';
    });
  }

  function closePdf() {
    if (!viewer) return;
    viewer.hidden = true;
    document.body.style.overflow = '';
    if (renderTask) { renderTask.cancel(); renderTask = null; }
    pdfDoc = null;
  }

  // 课件列表点击
  var items = document.querySelectorAll('.material-item');
  for (var i = 0; i < items.length; i++) {
    (function (btn) {
      btn.addEventListener('click', function () {
        openPdf(btn.getAttribute('data-pdf'), btn.getAttribute('data-title'));
      });
    })(items[i]);
  }

  function bind(id, handler) {
    var el = document.getElementById(id);
    if (el) el.addEventListener('click', handler);
  }
  bind('pdf-prev', function () { if (pdfDoc && currentPage > 1) renderPage(currentPage - 1); });
  bind('pdf-next', function () { if (pdfDoc && currentPage < totalPages) renderPage(currentPage + 1); });
  bind('pdf-close', closePdf);

  if (viewer) {
    viewer.addEventListener('click', function (e) {
      if (e.target === viewer) closePdf();
    });
  }

  document.addEventListener('keydown', function (e) {
    if (!viewer || viewer.hidden) return;
    if (e.key === 'Escape') closePdf();
    else if (e.key === 'ArrowLeft' && pdfDoc && currentPage > 1) renderPage(currentPage - 1);
    else if (e.key === 'ArrowRight' && pdfDoc && currentPage < totalPages) renderPage(currentPage + 1);
  });

  // 指定 pdf.js worker 路径
  if (window.pdfjsLib) {
    pdfjsLib.GlobalWorkerOptions.workerSrc = 'lib/pdfjs/pdf.worker.min.js';
  }
})();
