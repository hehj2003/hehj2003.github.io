/* =============================================================
 * 答疑讨论区 · 密码门逻辑
 * 纯前端 SHA-256 校验（无需 https / crypto.subtle，本地 file:// 也能跑）。
 * ============================================================= */

/* 紧凑版 SHA-256（ASCII 输入） */
function sha256Hex(ascii) {
  function rightRotate(value, amount) {
    return (value >>> amount) | (value << (32 - amount));
  }
  var mathPow = Math.pow;
  var maxWord = mathPow(2, 32);
  var lengthProperty = 'length';
  var i, j;
  var result = '';
  var words = [];
  var asciiBitLength = ascii[lengthProperty] * 8;

  var hash = sha256Hex.h = sha256Hex.h || [];
  var k = sha256Hex.k = sha256Hex.k || [];
  var primeCounter = k[lengthProperty];

  var isComposite = {};
  for (var candidate = 2; primeCounter < 64; candidate++) {
    if (!isComposite[candidate]) {
      for (i = 0; i < 313; i += candidate) {
        isComposite[i] = candidate;
      }
      hash[primeCounter] = (mathPow(candidate, 0.5) * maxWord) | 0;
      k[primeCounter++] = (mathPow(candidate, 1 / 3) * maxWord) | 0;
    }
  }

  ascii += '\x80';
  while (ascii[lengthProperty] % 64 - 56) ascii += '\x00';
  for (i = 0; i < ascii[lengthProperty]; i++) {
    j = ascii.charCodeAt(i);
    if (j >> 8) return; // 仅支持 ASCII
    words[i >> 2] |= j << ((3 - i) % 4) * 8;
  }
  words[words[lengthProperty]] = ((asciiBitLength / maxWord) | 0);
  words[words[lengthProperty]] = (asciiBitLength);

  for (j = 0; j < words[lengthProperty];) {
    var w = words.slice(j, j += 16);
    var oldHash = hash;
    hash = hash.slice(0, 8);

    for (i = 0; i < 64; i++) {
      var w15 = w[i - 15], w2 = w[i - 2];
      var a = hash[0], e = hash[4];
      var temp1 = hash[7]
        + (rightRotate(e, 6) ^ rightRotate(e, 11) ^ rightRotate(e, 25))
        + ((e & hash[5]) ^ ((~e) & hash[6]))
        + k[i]
        + (w[i] = (i < 16) ? w[i] : (
            w[i - 16]
            + (rightRotate(w15, 7) ^ rightRotate(w15, 18) ^ (w15 >>> 3))
            + w[i - 7]
            + (rightRotate(w2, 17) ^ rightRotate(w2, 19) ^ (w2 >>> 10))
          ) | 0);
      var temp2 = (rightRotate(a, 2) ^ rightRotate(a, 13) ^ rightRotate(a, 22))
        + ((a & hash[1]) ^ (a & hash[2]) ^ (hash[1] & hash[2]));

      hash = [(temp1 + temp2) | 0].concat(hash);
      hash[4] = (hash[4] + temp1) | 0;
    }

    for (i = 0; i < 8; i++) {
      hash[i] = (hash[i] + oldHash[i]) | 0;
    }
  }

  for (i = 0; i < 8; i++) {
    for (j = 3; j + 1; j--) {
      var b = (hash[i] >> (j * 8)) & 255;
      result += ((b < 16) ? 0 : '') + b.toString(16);
    }
  }
  return result;
}

(function () {
  var config = window.QA_CONFIG || {};
  var gate = document.getElementById('gate');
  var content = document.getElementById('content');

  function loadGiscus() {
    var host = document.getElementById('giscus');
    if (!host) return;
    var g = config.giscus || {};
    if (!g.repo || !g.repoId || !g.category || !g.categoryId) {
      host.innerHTML = '<div class="giscus-placeholder">⚠️ 尚未配置留言板，请在 <code>config.js</code> 中填入 repo / repoId / category / categoryId 四项。</div>';
      return;
    }
    var s = document.createElement('script');
    s.src = 'https://giscus.app/client.js';
    s.setAttribute('data-repo', g.repo);
    s.setAttribute('data-repo-id', g.repoId);
    s.setAttribute('data-category', g.category);
    s.setAttribute('data-category-id', g.categoryId);
    s.setAttribute('data-mapping', g.mapping || 'specific');
    s.setAttribute('data-term', g.term || document.title);
    s.setAttribute('data-reactions-enabled', '1');
    s.setAttribute('data-emit-metadata', '0');
    s.setAttribute('data-input-position', 'top');
    s.setAttribute('data-theme', 'light');
    s.setAttribute('data-lang', 'zh-CN');
    s.setAttribute('data-loading', 'lazy');
    s.crossOrigin = 'anonymous';
    s.async = true;
    host.appendChild(s);
  }

  function reveal() {
    if (gate) gate.style.display = 'none';
    if (content) content.hidden = false;
    loadGiscus();
  }

  var unlocked = false;
  try {
    unlocked = sessionStorage.getItem(config.unlockKey) === '1';
  } catch (e) { unlocked = false; }

  if (unlocked) {
    reveal();
  } else if (gate) {
    var form = document.getElementById('gate-form');
    var input = document.getElementById('gate-input');
    var error = document.getElementById('gate-error');
    if (form && input) {
      form.addEventListener('submit', function (e) {
        e.preventDefault();
        var val = (input.value || '').trim();
        if (val && sha256Hex(val) === config.passwordHash) {
          try { sessionStorage.setItem(config.unlockKey, '1'); } catch (err) {}
          reveal();
        } else {
          if (error) error.style.display = 'block';
          input.value = '';
          input.focus();
        }
      });
    }
  }
})();
