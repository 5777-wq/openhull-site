/* ═══════════════════════════════════════════════
   OpenHull site — i18n · reveal · hull line drawing
   ═══════════════════════════════════════════════ */

(function () {
  "use strict";

  /* ?static — capture mode: everything visible, no animation, hero auto-height */
  var STATIC = /[?&]static/.test(location.search);
  if (STATIC) document.documentElement.classList.add("static");

  /* ─────────────── i18n ─────────────── */

  var I18N = {
    zh: {
      "nav.intro": "简介",
      "nav.process": "开发进程",
      "nav.advantages": "优势",
      "hero.overline": "个人项目，夜间施工 · v0.1 已发布 · 正在写阶段 2：型线",
      "hero.sub": "给一份任务书，AI 帮你把船舶初步设计算出来、画出来。开源，可核查。",
      "hero.desc": "现在它能做：主尺度估算、静水力计算、重量浮力平衡、从型值表画型线图。JBC 基准船的静水力误差压到了 1% 以内。阻力、推进、稳性和报告在路线图上，按阶段来。",
      "hero.cta1": "查看 GitHub 仓库",
      "hero.cta2": "先看它做什么",
      "stats.l1": "种语言的 README",
      "stats.l2": "艘基准船：JBC、Series 60",
      "stats.l3": "个阶段，从骨架到 v1.0",
      "stats.l4": "个测试，都是绿的",
      "intro.kicker": "— 它是什么",
      "intro.title": "它做什么",
      "intro.p1": "造船的第一步是初步设计：定主尺度、算浮性、画型线。这些活儿有大量公式和经验可循，但散落在教科书和规范里，靠人手算、在软件之间来回搬。OpenHull 把它们写成代码：任务书进，方案出，公式全部标出处，算错了自己会报错。",
      "intro.p2": "AI 负责写代码、搬数据；公式对不对，人说了算。",
      "intro.core": "公式有出处 · 算错会报错 · 结果对基准",
      "intro.o1": "主尺度方案 · L / B / D / d / Cb",
      "intro.o2": "静水力表 · △ / KM / TPC / MTC",
      "intro.o3": "型线图 · 母型船 Lackenby 变换",
      "intro.o4": "阻力 / 推进 / 稳性评估",
      "intro.o5": "DXF 图纸 · 设计报告",
      "process.kicker": "— 做到哪了",
      "process.title": "做到哪了",
      "process.lead": "按阶段推进，每个阶段出一个能跑的版本。验收标准写在动手之前，达标才往下走。",
      "process.s0t": "阶段 0 · 立项与立宪",
      "process.s0d": "定规矩：宪法《AGENTS.md》、任务书 TB-001、基准船 JBC + Series 60、代码骨架。",
      "process.s1t": "阶段 1 · 主尺度与静水力内核",
      "process.s1d": "1.1 到 1.9 全部做完：主尺度估算、重量浮力平衡、静水力、初稳性、干舷、命令行。发了个 v0.1，158 个测试，CI 是绿的。",
      "process.s2t": "阶段 2 · 参数化型线生成",
      "process.s2d": "型值数字化和 Lackenby 变换都好了。画图最初走 gmsh，发现它会悄悄丢掉艉部曲面，换成 FreeCAD 逐站切片——Cb 复算 0.8618，官方 0.858，对上了。93m 和 116.6m 两条实船的三视图都画出来了。接着做 2.6：让静水力吃真型值。",
      "process.s3t": "阶段 3 · 性能闭环",
      "process.s3d": "阻力估算（Holtrop-Mennen）、推进与航速、螺旋桨初估、稳性衡准；最后让智能体在约束里扫主尺度，画帕累托图。",
      "process.s4t": "阶段 4 · 出图与报告",
      "process.s4d": "静水力曲线图、总布置简图、自动生成的设计报告——一条命令从任务书跑到成果包。",
      "process.s5t": "阶段 5 · 开源发布",
      "process.s5d": "v1.0 的定义：两种以上船型跑通全流程且验证达标，文档齐全。十语 README 已提前就位。",
      "badge.done": "已完成",
      "badge.doing": "进行中",
      "badge.plan": "规划中",
      "process.wf": "每个任务的流程",
      "process.w1": "AI 出实现方案",
      "process.w2": "人审定公式与出处",
      "process.w3": "编码实现",
      "process.w4": "对基准船数字验收",
      "process.w5": "存档发布",
      "adv.kicker": "— 几条原则",
      "adv.title": "几条原则",
      "adv.a1t": "可追溯",
      "adv.a1d": "每个输出都能指回某条公式、某一页文献。经验公式必须声明适用范围，超了就报错，不出数。",
      "adv.a2t": "基准验证优先",
      "adv.a2d": "JBC、Series 60 的公开数据摆在那里，逐项对：静水力 <1%、KM <2%、TPC <3%，分开报。",
      "adv.a3t": "人机各司其职",
      "adv.a3d": "公式对不对、量级合不合理，工程师拍板；写代码、搬数据是 AI 的活。公式先入白名单，再实现。",
      "adv.a4t": "解释性报错",
      "adv.a4d": "报错要说清四件事：哪个字段、填了什么、允许范围、物理上为什么。Cb=1.5 会被告诉：体积塞不进外接矩形，所以 Cb ≤ 1。",
      "adv.posLabel": "为什么做这个",
      "adv.posText": "商业软件把功夫花在交付环节，而初步设计用的公式和试验数据本来就是公开的。让 AI 把这些公开知识变成能跑、可核查的代码，这件事还没人认真做过——所以有了这个项目。",
      "cta.title": "想看代码？",
      "cta.sub": "还在写，欢迎提 issue 挑错。",
      "cta.constitution": "阅读项目宪法 AGENTS.md",
      "footer.line": "一个人，和几个 AI，晚上写的。",
      "theme.paper": "纸墨",
      "theme.noir": "墨夜",
      "theme.deep": "深海",
      "theme.blueprint": "蓝图",
      "theme.amber": "琥珀",
      "theme.terminal": "终端",
      "style.drafting": "图纸风",
      "style.bento": "Bento 卡片风",
      "style.terminal": "终端文档风",
      "doc.title": "OpenHull — Design the shell that carries it all."
    },
    en: {
      "nav.intro": "What",
      "nav.process": "Progress",
      "nav.advantages": "Principles",
      "hero.overline": "A personal project, built at night · v0.1 out · now writing stage 2: hull lines",
      "hero.sub": "Give it a task book; it computes and draws the preliminary design. Open source, checkable.",
      "hero.desc": "Right now: principal dimensions, hydrostatics, weight-buoyancy balance, lines plans from offset tables. Hydrostatics on the JBC benchmark are within 1%. Resistance, propulsion, stability and reports are on the roadmap.",
      "hero.cta1": "View on GitHub",
      "hero.cta2": "What it does",
      "stats.l1": "language README",
      "stats.l2": "benchmark ships: JBC, Series 60",
      "stats.l3": "stages, skeleton to v1.0",
      "stats.l4": "tests, all green",
      "intro.kicker": "— What it is",
      "intro.title": "What it does",
      "intro.p1": "Step one of ship design is preliminary design: pick dimensions, check buoyancy, draw the lines. The formulas and experience exist, but they live in textbooks and rules, worked by hand and shuffled between programs. OpenHull turns them into code: task book in, design out, every formula cited, and it errors loudly when something is wrong.",
      "intro.p2": "AI writes the code and moves the data; humans decide whether the formulas are right.",
      "intro.core": "cited formulas · loud errors · benchmark-checked",
      "intro.o1": "Principal dimensions · L / B / D / d / Cb",
      "intro.o2": "Hydrostatics · triangle / KM / TPC / MTC",
      "intro.o3": "Lines plan · Lackenby transformation",
      "intro.o4": "Resistance / propulsion / stability",
      "intro.o5": "DXF drawings · reports",
      "process.kicker": "— Where it stands",
      "process.title": "Where it stands",
      "process.lead": "Stage by stage, each one ships a working version. Acceptance criteria are written before the work starts.",
      "process.s0t": "Stage 0 · Foundation",
      "process.s0d": "Set the rules: the AGENTS.md constitution, task book TB-001, benchmark ships JBC + Series 60, code skeleton.",
      "process.s1t": "Stage 1 · Dimensions & hydrostatics",
      "process.s1d": "1.1 through 1.9, all done: dimension estimation, weight-buoyancy balance, hydrostatics, stability, freeboard, CLI. Shipped v0.1 — 158 tests, CI green.",
      "process.s2t": "Stage 2 · Hull lines",
      "process.s2d": "Offsets digitized, Lackenby done. The first drawing pass used gmsh, which silently dropped part of the stern — switched to per-station FreeCAD slicing; recomputed Cb 0.8618 vs official 0.858. Lines plans drawn for two real ships, 93 m and 116.6 m. Next: 2.6, hydrostatics on true offsets.",
      "process.s3t": "Stage 3 · Performance loop",
      "process.s3d": "Resistance (Holtrop-Mennen), propulsion and speed, preliminary propeller, stability criteria; then let the agent sweep the dimension space and draw the Pareto chart.",
      "process.s4t": "Stage 4 · Drawings & reports",
      "process.s4d": "Hydrostatic curves, general arrangement, auto-generated reports — one command from task book to package.",
      "process.s5t": "Stage 5 · Open-source release",
      "process.s5d": "v1.0 means: two ship types through the whole pipeline, validated, with docs. The ten-language README is already in place.",
      "badge.done": "DONE",
      "badge.doing": "IN PROGRESS",
      "badge.plan": "PLANNED",
      "process.wf": "How each task runs",
      "process.w1": "AI proposes a plan",
      "process.w2": "Engineer approves formulas",
      "process.w3": "Implementation",
      "process.w4": "Checked against benchmarks",
      "process.w5": "Archive & release",
      "adv.kicker": "— Principles",
      "adv.title": "A few principles",
      "adv.a1t": "Traceable",
      "adv.a1d": "Every output points back to an equation and a page. Empirical formulas declare their range; violations error out, they don't return numbers.",
      "adv.a2t": "Validation first",
      "adv.a2d": "JBC and Series 60 data are public — check against them item by item: hydrostatics <1%, KM <2%, TPC <3%, reported separately.",
      "adv.a3t": "Humans & AI, in place",
      "adv.a3d": "Engineers decide whether formulas and magnitudes are right; AI writes code and moves data. Formulas enter the whitelist first, then get implemented.",
      "adv.a4t": "Explanatory errors",
      "adv.a4d": "Every error says which field, what you gave, what's allowed, and why. Cb = 1.5 gets told the volume doesn't fit the box, so Cb <= 1.",
      "adv.posLabel": "Why this exists",
      "adv.posText": "Commercial software spends its effort on delivery, but the formulas and test data behind preliminary design were always public. Getting AI to turn that public knowledge into working, checkable code hasn't been done seriously — hence this project.",
      "cta.title": "Want the code?",
      "cta.sub": "Still under construction — issues that point out mistakes are welcome.",
      "cta.constitution": "Read the constitution, AGENTS.md",
      "footer.line": "One person, a few AI agents, written at night.",
      "theme.paper": "Paper",
      "theme.noir": "Noir",
      "theme.deep": "Deep Sea",
      "theme.blueprint": "Blueprint",
      "theme.amber": "Amber",
      "theme.terminal": "Terminal",
      "style.drafting": "Drafting Sheet",
      "style.bento": "Bento Cards",
      "style.terminal": "Terminal Docs",
      "doc.title": "OpenHull — Design the shell that carries it all."
    }
  };
  var lang = "zh";
  try {
    var urlLang = new URLSearchParams(location.search).get("lang");
    if (urlLang === "en" || urlLang === "zh") lang = urlLang;
    else lang = localStorage.getItem("openhull-lang") ||
           (navigator.language && navigator.language.indexOf("zh") === 0 ? "zh" : "en");
  } catch (e) {}

  function applyLang(next) {
    lang = next;
    var dict = I18N[lang];
    var nodes = document.querySelectorAll("[data-i18n]");
    for (var i = 0; i < nodes.length; i++) {
      var key = nodes[i].getAttribute("data-i18n");
      if (dict[key] != null) nodes[i].textContent = dict[key];
    }
    document.documentElement.lang = lang === "zh" ? "zh-CN" : "en";
    if (dict["doc.title"]) document.title = dict["doc.title"];
    var btn = document.getElementById("langToggle");
    if (btn) btn.textContent = lang === "zh" ? "EN" : "中";
    try { localStorage.setItem("openhull-lang", lang); } catch (e) {}
  }

  var toggle = document.getElementById("langToggle");
  if (toggle) {
    toggle.addEventListener("click", function () {
      applyLang(lang === "zh" ? "en" : "zh");
    });
  }
  applyLang(lang);

  /* ─────────────── 主题切换 ─────────────── */

  var THEMES = ["paper", "noir", "deep", "blueprint", "amber", "terminal"];

  function applyTheme(t) {
    if (THEMES.indexOf(t) < 0) t = "paper";
    document.documentElement.setAttribute("data-theme", t);
    try { localStorage.setItem("openhull-theme", t); } catch (e) {}
    var pop = document.getElementById("themePop");
    if (pop) {
      pop.querySelectorAll("[data-theme-set]").forEach(function (b) {
        b.classList.toggle("active", b.getAttribute("data-theme-set") === t);
      });
    }
  }

  function setTheme(t) {
    if (document.startViewTransition) document.startViewTransition(function () { applyTheme(t); });
    else applyTheme(t);
  }

  var themeBtn = document.getElementById("themeBtn");
  var themePop = document.getElementById("themePop");
  if (themeBtn && themePop) {
    themeBtn.addEventListener("click", function (e) {
      e.stopPropagation();
      themePop.hidden = !themePop.hidden;
      themeBtn.setAttribute("aria-expanded", String(!themePop.hidden));
    });
    themePop.querySelectorAll("[data-theme-set]").forEach(function (b) {
      b.addEventListener("click", function () {
        setTheme(b.getAttribute("data-theme-set"));
        themePop.hidden = true;
        themeBtn.setAttribute("aria-expanded", "false");
      });
    });
    document.addEventListener("click", function (e) {
      if (!themePop.hidden && !e.target.closest(".theme-menu")) {
        themePop.hidden = true;
        themeBtn.setAttribute("aria-expanded", "false");
      }
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && !themePop.hidden) {
        themePop.hidden = true;
        themeBtn.setAttribute("aria-expanded", "false");
      }
    });
  }

  var initTheme = "paper";
  try {
    var urlTheme = new URLSearchParams(location.search).get("theme");
    if (urlTheme && THEMES.indexOf(urlTheme) >= 0) initTheme = urlTheme;
    else initTheme = localStorage.getItem("openhull-theme") || "paper";
  } catch (e) {}
  applyTheme(initTheme);

  /* ─────────────── 风格切换（跨页布局） ─────────────── */

  var styleBtn = document.getElementById("styleBtn");
  var stylePop = document.getElementById("stylePop");
  if (styleBtn && stylePop) {
    function goStyle(base) {
      var curLang = document.documentElement.lang === "en" ? "en" : "zh";
      location.href = base + "?theme=" +
        (document.documentElement.getAttribute("data-theme") || "paper") +
        "&lang=" + curLang;
    }
    styleBtn.addEventListener("click", function (e) {
      e.stopPropagation();
      stylePop.hidden = !stylePop.hidden;
      styleBtn.setAttribute("aria-expanded", String(!stylePop.hidden));
    });
    stylePop.querySelectorAll("[data-style-href]").forEach(function (b) {
      b.addEventListener("click", function () {
        goStyle(b.getAttribute("data-style-href"));
      });
    });
    document.addEventListener("click", function (e) {
      if (!stylePop.hidden && !e.target.closest("#styleBtn") && !e.target.closest("#stylePop")) {
        stylePop.hidden = true;
        styleBtn.setAttribute("aria-expanded", "false");
      }
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && !stylePop.hidden) stylePop.hidden = true;
    });
  }

  /* ─────────────── 导航滚动态 ─────────────── */

  var nav = document.getElementById("nav");
  function onScroll() {
    if (window.scrollY > 30) nav.classList.add("nav--scrolled");
    else nav.classList.remove("nav--scrolled");
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* ─────────────── 滚动显现 ─────────────── */

  var reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (!reduced && "IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("in");
          if (!STATIC && entry.target.classList.contains("stat")) countUp(entry.target);
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -6% 0px" });
    document.querySelectorAll(".reveal").forEach(function (el) { io.observe(el); });
  } else {
    document.querySelectorAll(".reveal").forEach(function (el) { el.classList.add("in"); });
  }

  /* ─────────────── 统计数字滚动 ─────────────── */

  function countUp(statEl) {
    var strong = statEl.querySelector("strong[data-count]");
    if (!strong) return;
    var target = parseInt(strong.getAttribute("data-count"), 10);
    if (isNaN(target)) return;
    var t0 = null, dur = 1300;
    function step(ts) {
      if (!t0) t0 = ts;
      var p = Math.min((ts - t0) / dur, 1);
      p = 1 - Math.pow(1 - p, 3); // ease-out cubic
      strong.textContent = Math.round(target * p);
      if (p < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }

  /* ─────────────── bento 卡片聚光灯 ─────────────── */

  document.querySelectorAll(".adv").forEach(function (card) {
    card.addEventListener("pointermove", function (e) {
      var r = card.getBoundingClientRect();
      card.style.setProperty("--mx", (e.clientX - r.left) + "px");
      card.style.setProperty("--my", (e.clientY - r.top) + "px");
    });
  });

  /* ─────────────── 型线描线动画 ─────────────── */

  function drawHull() {
    var paths = document.querySelectorAll("#hullSvg .draw");
    var base = 250;
    paths.forEach(function (p) {
      var len;
      try { len = p.getTotalLength(); } catch (e) { return; }
      if (!len) return;
      var slow = p.classList.contains("draw--slow");
      var dur = slow ? 2600 : 1700;
      p.style.transition = "none";
      p.style.strokeDasharray = len + " " + len;
      p.style.strokeDashoffset = len;
      p.getBoundingClientRect(); // force reflow
      setTimeout(function () {
        p.style.transition = "stroke-dashoffset " + dur + "ms cubic-bezier(.45,0,.2,1)";
        p.style.strokeDashoffset = "0";
      }, base);
      base += 130;
    });
  }

  if (!reduced) {
    if (document.readyState === "complete") drawHull();
    else window.addEventListener("load", drawHull);
  }
})();
