/* =============================================================
 * 答疑讨论区 · 共享配置
 * 三门课程共用此文件，修改一次对三门课同时生效。
 * ============================================================= */
window.QA_CONFIG = {

  /* ---- 密码 ----
   * 这里只存密码的 SHA-256 哈希，不存明文（当前密码为 optimization）。
   * 如需修改密码，在任意课程页打开浏览器控制台(F12)运行：
   *     sha256Hex('你的新密码')
   * 把输出的哈希粘贴到下方 passwordHash 即可。
   * 注意：本实现仅支持 ASCII 字符（英文 / 数字 / 常见符号）。
   */
  passwordHash: 'be92e94aba0be148ec1f142becadb01480a3c633ed6e675d98945416a5a3d24d',

  /* 会话解锁标记键：三门课统一密码，解锁一门后，同一浏览器会话内其余两门自动解锁 */
  unlockKey: 'qa-unlocked',

  /* ---- Giscus 留言板 ----
   * 到 https://giscus.app 配置后，把下面 4 个值填入（这是唯一需要你填的地方）。
   */
  giscus: {
    repo: 'hehj2003/teaching',
    repoId: 'R_kgDOUg-eoA',
    category: 'Q&A',
    categoryId: 'DIC_kwDOUg-eoM4DF7io',
    mapping: 'specific',
    term: ''           // 由各课程页覆盖（以课程名作为讨论标题）
  },

  /* ---- PDF 课件密码 ----
   * 课件 PDF 已用此密码加密（AES-128），即使被下载、没有此密码也打不开。
   * 前端需把明文密码传给 PDF.js 自动解密，故与课程页密码相同（optimization）。
   */
  pdfPassword: 'optimization'
};
