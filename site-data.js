/* =============================================================
 * 学生培养数据（修改名单只需改这个文件）
 *
 * 说明：
 *  - 在读学生用「级」（如 "2022级"），已毕业学生用「届」（如 "2026届"）
 *  - 每项格式：{ name: "姓名", year: "2022级" }
 *  - 新增学生：在对应数组里加一行 { name: "...", year: "..." }
 *  - 删除学生：删掉对应那一行
 * ============================================================= */
window.STUDENT_DATA = {
  /* ---- 在读学生 ---- */
  current: {
    phd: [
      { name: "潘晨健", year: "2022级" },
      { name: "於锦涛", year: "2023级" },
      { name: "何演超", year: "2024级" },
      { name: "李轶彦", year: "2026级" }
    ],
    master: [
      { name: "同卓然", year: "2024级" },
      { name: "谢冰冰", year: "2024级" },
      { name: "吴桐", year: "2025级" },
      { name: "于钟宇", year: "2025级" },
      { name: "杨思行", year: "2026级" },
      { name: "郁雨昂", year: "2026级" },
      { name: "陈子亿", year: "2026级" }
    ],
    undergrad: [
      { name: "谭圣言", year: "2023级" },
      { name: "韩易辰", year: "2023级" },
      { name: "胡志康", year: "2023级" },
      { name: "马汝睿", year: "2023级" },
      { name: "方凯悦", year: "2024级" }
    ]
  },

  /* ---- 已毕业学生 ---- */
  graduated: {
    phd: [
      { name: "郝嘉骏", year: "2026届" }
    ],
    master: [
      { name: "童皖彬", year: "2020届" },
      { name: "赵寒", year: "2021届" },
      { name: "刘琬纯", year: "2021届" },
      { name: "陆婷霞", year: "2022届" },
      { name: "赵璐璐", year: "2022届" },
      { name: "周颖欣", year: "2024届" },
      { name: "汪周", year: "2024届" },
      { name: "王知雪", year: "2025届" },
      { name: "吴一凡", year: "2025届" },
      { name: "毛莹", year: "2025届" },
      { name: "邢芳菲", year: "2026届" },
      { name: "林鹏程", year: "2026届" }
    ],
    undergrad: [
      { name: "何岸", year: "2016届" },
      { name: "张乾", year: "2016届" },
      { name: "陈佩佩", year: "2018届" },
      { name: "屈云飞", year: "2019届" },
      { name: "茅小宇", year: "2021届" },
      { name: "张致远", year: "2021届" },
      { name: "赵锡清", year: "2024届" },
      { name: "戴振宇", year: "2024届" },
      { name: "徐柯楠", year: "2025届" },
      { name: "唐伟豪", year: "2026届" },
      { name: "阮炜挺", year: "2026届" }
    ]
  }
};

/* =============================================================
 * 科研论文 + 科研项目数据（修改只需改这个文件）
 *  - 论文 authors 写纯文本，Hongjin He 会自动加粗
 * ============================================================= */
window.PUBLICATIONS = [
  {
    title: "A symmetric primal-dual algorithmic framework for saddle point problems",
    authors: "Hongjin He, Kai Wang, Jintao Yu",
    journal: "Journal of Computational Mathematics, 44 (2026) 1049–1082",
    links: [{ text: "Link", url: "https://www.global-sci.com/index.php/JCM/article/view/23272/36095" }]
  },
  {
    title: "Enhancing Tucker Tensor Completion via Laplace-Like Nonconvex Surrogates and Structural Regularization",
    authors: "Wenhui Xie, Lei-Hong Zhang, Chen Ling, Hongjin He",
    journal: "Journal of Scientific Computing, 106 (2026) Article No. 78",
    links: [{ text: "DOI", url: "https://doi.org/10.1007/s10915-026-03205-y" }]
  },
  {
    title: "A multi-step inertial Bregman proximal DC algorithm and its application to solving some inverse problems",
    authors: "Zhixue Wang, Chenjian Pan, Hongjin He",
    journal: "Journal of Computational and Applied Mathematics, 473 (2026) 116923",
    links: [{ text: "Link", url: "https://www.sciencedirect.com/science/article/abs/pii/S0377042725004376" }]
  },
  {
    title: "A multi-step inertial extragradient algorithm for nonsmooth and nonconvex composite optimization problems",
    authors: "Zhixue Wang, Hongjin He",
    journal: "Journal of Global Optimization, 93 (2025) 489–521",
    links: [{ text: "DOI", url: "https://doi.org/10.1007/s10898-025-01532-2" }]
  },
  {
    title: "An implementable proximal extragradient method for structured fractional programming",
    authors: "Jiajun Hao, Hongjin He, Liangshao Hou",
    journal: "Journal of Optimization Theory and Applications, 207 (2025) Article No. 35",
    links: [{ text: "Link", url: "https://link.springer.com/article/10.1007/s10957-025-02799-x" }]
  },
  {
    title: "A unified Bregman alternating minimization algorithm for generalized DC programs with application to imaging",
    authors: "Hongjin He, Zhiyuan Zhang",
    journal: "Journal of Scientific Computing, 101 (2024) Article No. 76 (42 pages)",
    links: [{ text: "DOI", url: "https://doi.org/10.1007/s10915-024-02715-x" }]
  },
  {
    title: "Robust tensor recovery via a nonconvex approach with ket augmentation and auto-weighted strategy",
    authors: "Wenhui Xie, Chen Ling, Hongjin He, Lei-Hong Zhang",
    journal: "Numerical Linear Algebra with Applications, 31 (2024) e2580",
    links: [{ text: "Link", url: "https://onlinelibrary.wiley.com/doi/abs/10.1002/nla.2580" }]
  },
  {
    title: "A tensor train approach for internet traffic data completion",
    authors: "Zhiyuan Zhang, Chen Ling, Hongjin He, Liqun Qi",
    journal: "Annals of Operations Research, 339 (2024) 1461–1479",
    links: [{ text: "DOI", url: "https://doi.org/10.1007/s10479-021-04147-4" }]
  },
  {
    title: "A proximal alternating direction method of multipliers for DC programming with structured constraints",
    authors: "Yingxin Zhou, Hongjin He, Linan Zhang",
    journal: "Journal of Scientific Computing, 99 (2024) Article No. 89",
    links: [{ text: "Link", url: "https://link.springer.com/article/10.1007/s10915-024-02550-0" }]
  },
  {
    title: "Structured model selection via ℓ₁-ℓ₂ optimization",
    authors: "Xiaofan Lu, Linan Zhang, Hongjin He",
    journal: "Inverse Problems, 40 (2024) 015011 (28pp)",
    links: [{ text: "DOI", url: "https://iopscience.iop.org/article/10.1088/1361-6420/ad0fad" }]
  },
  {
    title: "A partially inertial customized Douglas-Rachford splitting method for a class of structured optimization problems",
    authors: "Yunfei Qu, Hongjin He, Deren Han",
    journal: "Journal of Scientific Computing, 98 (2024) Article No. 9 (24 pages)",
    links: [{ text: "DOI", url: "https://doi.org/10.1007/s10915-023-02397-x" }]
  },
  {
    title: "Tensor completion via a generalized transformed tensor T-product decomposition without t-SVD",
    authors: "Hongjin He, Chen Ling, Wenhui Xie",
    journal: "Journal of Scientific Computing, 93 (2022) Article No. 47 (35 pages)",
    links: [{ text: "DOI", url: "https://doi.org/10.1007/s10915-022-02006-3" }]
  },
  {
    title: "A unified Douglas-Rachford algorithm for generalized DC programming",
    authors: "Chih-Sheng Chuang, Hongjin He, Zhiyuan Zhang",
    journal: "Journal of Global Optimization, 82 (2022) 331–349",
    links: [{ text: "DOI", url: "https://doi.org/10.1007/s10898-021-01079-y" }]
  },
  {
    title: "A nonnegativity preserving algorithm for multilinear systems with nonsingular M-tensors",
    authors: "Xueli Bai, Hongjin He, Chen Ling, Guanglu Zhou",
    journal: "Numerical Algorithms, 87 (2021) 1301–1320",
    links: [{ text: "DOI", url: "https://doi.org/10.1007/s11075-020-01008-2" }]
  },
  {
    title: "A customized low-rank prior model for structured cartoon-texture image decomposition",
    authors: "Zhiyuan Zhang, Hongjin He",
    journal: "Signal Processing: Image Communication, 96 (2021) 116308",
    links: [{ text: "CODE", url: "https://github.com/Zhiyuan-Zhang510zg/CLRP" }]
  },
  {
    title: "A double extrapolation primal-dual algorithm for saddle point problems",
    authors: "Kai Wang, Hongjin He",
    journal: "Journal of Scientific Computing, 85 (2020) Article 30",
    links: [{ text: "DOI", url: "https://doi.org/10.1007/s10915-020-01330-w" }]
  },
  {
    title: "Further study on tensor absolute value equations",
    authors: "Chen Ling, Weijie Yan, Hongjin He, Liqun Qi",
    journal: "Science China: Mathematics, 63 (2020) 2137–2156",
    links: [{ text: "DOI", url: "https://doi.org/10.1007/s11425-018-9560-3" }]
  },
  {
    title: "Convergence analysis of positive-indefinite proximal ADMM with a Glowinski's relaxation factor",
    authors: "Jiawei Chen, Yijun Wang, Hongjin He, Yibing Lv",
    journal: "Numerical Algorithms, 83 (2020) 1415–1440",
    links: []
  },
  {
    title: "A partially isochronous splitting algorithm for three-block separable convex minimization problems",
    authors: "Hongjin He, Liusheng Hou, Hong-Kun Xu",
    journal: "Advances in Computational Mathematics, 44 (2018) 1091–1115",
    links: [{ text: "DOI", url: "https://doi.org/10.1007/s10444-017-9574-4" }]
  },
  {
    title: "A globally and quadratically convergent algorithm for solving multilinear systems with M-tensors",
    authors: "Hongjin He, Chen Ling, Liqun Qi, Guanglu Zhou",
    journal: "Journal of Scientific Computing, 76 (2018) 1718–1741",
    links: [{ text: "DOI", url: "https://doi.org/10.1007/s10915-018-0689-7" }]
  },
  {
    title: "Splitting methods for split feasibility problems with application to Dantzig selectors",
    authors: "Hongjin He, Hong-Kun Xu",
    journal: "Inverse Problems, 33 (2017) 055003 (28pp)",
    links: [{ text: "DOI", url: "http://iopscience.iop.org/article/10.1088/1361-6420/aa5ec5" }]
  },
  {
    title: "Perturbation resilience and superiorization methodology of averaged mappings",
    authors: "Hongjin He, Hong-Kun Xu",
    journal: "Inverse Problems, 33 (2017) 044007 (11pp)",
    links: [{ text: "DOI", url: "http://iopscience.iop.org/article/10.1088/1361-6420/33/4/044007" }]
  },
  {
    title: "A primal-dual prediction-correction algorithm for saddle point optimization",
    authors: "Hongjin He, Jitamitra Desai, Kai Wang",
    journal: "Journal of Global Optimization, 66 (2016) 573–583",
    links: [{ text: "DOI", url: "http://link.springer.com/article/10.1007/s10898-016-0437-1" }]
  },
  {
    title: "Higher-degree eigenvalue complementarity problem for tensors",
    authors: "Chen Ling, Hongjin He, Liqun Qi",
    journal: "Computational Optimization and Applications, 64 (2016) 149–176",
    links: [{ text: "DOI", url: "http://link.springer.com/article/10.1007/s10589-015-9805-x" }]
  },
  {
    title: "An implementable splitting algorithm for the ℓ₁-norm regularized split feasibility problem",
    authors: "Hongjin He, Chen Ling, Hong-Kun Xu",
    journal: "Journal of Scientific Computing, 67 (2016) 281–298",
    links: [{ text: "DOI", url: "http://link.springer.com/article/10.1007/s10915-015-0078-4" }]
  },
  {
    title: "A distributed Douglas-Rachford splitting method for multi-block convex minimization problems",
    authors: "Hongjin He, Deren Han",
    journal: "Advances in Computational Mathematics, 42 (2016) 27–53",
    links: [{ text: "DOI", url: "http://link.springer.com/article/10.1007/s10444-015-9408-1" }]
  },
  {
    title: "A partially parallel splitting method for multiple-block separable convex programming with applications to robust PCA",
    authors: "Liusheng Hou, Hongjin He, Junfeng Yang",
    journal: "Computational Optimization and Applications, 63 (2016) 273–303",
    links: [{ text: "DOI", url: "http://link.springer.com/article/10.1007/s10589-015-9770-4" }]
  },
  {
    title: "On the cone eigenvalue complementarity problem for higher-order tensors",
    authors: "Chen Ling, Hongjin He, Liqun Qi",
    journal: "Computational Optimization and Applications, 63 (2016) 143–168",
    links: [{ text: "DOI", url: "http://link.springer.com/article/10.1007/s10589-015-9767-z" }]
  },
  {
    title: "A fast splitting method tailored for Dantzig selector",
    authors: "Hongjin He, Xingju Cai, Deren Han",
    journal: "Computational Optimization and Applications, 62 (2015) 347–372",
    links: [{ text: "DOI", url: "http://link.springer.com/article/10.1007/s10589-015-9748-2" }]
  },
  {
    title: "A relaxed projection method for split variational inequalities",
    authors: "Hongjin He, Chen Ling, Hong-Kun Xu",
    journal: "Journal of Optimization Theory and Applications, 166 (2015) 213–233",
    links: [{ text: "DOI", url: "http://link.springer.com/article/10.1007/s10957-014-0598-3" }]
  },
  {
    title: "A customized Douglas-Rachford splitting algorithm for separable convex minimization with linear constraints",
    authors: "Deren Han, Hongjin He, Hai Yang, Xiaoming Yuan",
    journal: "Numerische Mathematik, 127 (2014) 167–200",
    links: [{ text: "DOI", url: "http://link.springer.com/article/10.1007/s00211-013-0580-2" }]
  },
  {
    title: "Some projection methods with the BB step sizes for variational inequalities",
    authors: "Hongjin He, Deren Han, Zhibao Li",
    journal: "Journal of Computational and Applied Mathematics, 236 (2012) 2590–2604",
    links: [{ text: "DOI", url: "http://www.sciencedirect.com/science/article/pii/S0377042711006315" }]
  },
];

window.PROJECTS = {
  led: [
    { source: "国家自然科学基金面上项目", role: "项目负责人（1/12）", date: "2024/01–2027/12", num: "项目号：12371303" },
    { source: "国家自然科学基金面上项目", role: "项目负责人", date: "2018/01–2021/12", num: "项目号：11771113" },
    { source: "国家自然科学基金青年基金项目", role: "项目负责人", date: "2014/01–2016/12", num: "项目号：11301123" },
    { source: "浙江省自然科学基金重点项目", role: "项目负责人（1/7）", date: "2024/01–2026/12", num: "项目号：LZ24A010001" },
    { source: "浙江省自然科学基金探索项目", role: "项目负责人", date: "2020/01–2022/12", num: "项目号：LY20A010018（2021年12月提前结题）" },
    { source: "浙江省自然科学基金一般项目", role: "项目负责人", date: "2017/01–2019/12", num: "项目号：LY17A010028（2018年12月提前结题）" },
    { source: "宁波市自然科学基金重点项目", role: "项目负责人", date: "2023/06–2026/05", num: "项目号：2023J014" },
    { source: "宁波市\"甬江引才工程\"", role: "项目负责人", date: "2022/01–2026/05", num: "城市经济领域创新个人" },
  ],
  participated: [
    { source: "国家自然科学基金面上项目", role: "参与人（2/11）", date: "2020/01–2023/12", num: "项目号：11971138（项目负责人：凌晨教授）" },
    { source: "国家自然科学基金面上项目", role: "参与人（3/10）", date: "2016/01–2019/12", num: "项目号：11571087（项目负责人：凌晨教授）" },
    { source: "国家自然科学基金面上项目", role: "参与人（4/9）", date: "2015/01–2018/12", num: "项目号：71471051（项目负责人：洪世煌教授）" },
    { source: "浙江省自然科学基金重大项目", role: "参与人（5/7）", date: "2019/01–2022/12", num: "项目号：LD19A010002（项目负责人：喻高航教授）" },
    { source: "浙江省自然科学基金重点项目", role: "参与人（3/7）", date: "2014/01–2017/12", num: "项目号：LZ14A010003（项目负责人：凌晨教授）" },
    { source: "浙江省自然科学基金一般项目", role: "参与人（2/4）", date: "2019/01–2021/12", num: "项目号：LY19A010019（项目负责人：凌晨教授）" },
  ]
};
