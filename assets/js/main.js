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
      "hero.overline": "开源施工中 · 阶段 2 型线生成 · v0.1 已发布",
      "hero.sub": "由 AI 智能体编排的开源参数化船舶初步设计工具链",
      "hero.desc": "给它一份设计任务书——船型、载重吨、服务航速、航区——智能体流水线自动完成主尺度迭代、静水力计算、型线生成、阻力 / 推进 / 稳性评估，直至 DXF 图纸与设计报告。",
      "hero.cta1": "查看 GitHub 仓库",
      "hero.cta2": "了解它如何工作",
      "stats.l1": "语种 README",
      "stats.l2": "艘公开基准船 · JBC / Series 60",
      "stats.l3": "大开发阶段 · 从骨架到 v1.0",
      "stats.l4": "项测试全绿 · CI 运行中",
      "intro.kicker": "— 简介 / INTRODUCTION",
      "intro.title": "一份任务书，一整套初步设计",
      "intro.p1": "船舶初步设计的知识内核——教科书里的经验公式、系列试验图谱、规范里的查表计算——本来就是公开的。真正缺的，是一层把它们编排成完整设计循环的自动化。OpenHull 把这些知识数字化为可组合、可验证的 Python 模块，再由 AI 智能体按《项目宪法》编排成流水线。",
      "intro.p2": "人负责专业判断，AI 负责代码与搬运数据的手。",
      "intro.core": "智能体编排 · 公式白名单 · 基准验证",
      "intro.o1": "主尺度方案 · L / B / D / d / Cb",
      "intro.o2": "静水力表 · △ / KM / TPC / MTC",
      "intro.o3": "型线图 · 母型船 Lackenby 变换",
      "intro.o4": "阻力 / 推进 / 稳性评估",
      "intro.o5": "DXF 图纸 · 设计报告",
      "process.kicker": "— 开发进程 / DEVELOPMENT",
      "process.title": "六个阶段，验收只认数字",
      "process.lead": "每个任务颗粒度不超过一晚。AI 先出实现方案，人审定公式，编码完成后再对公开基准船数据逐项核对误差——「完成了」三个字不算数，数字达标才算数。",
      "process.s0t": "阶段 0 · 立项与立宪",
      "process.s0d": "项目宪法《AGENTS.md》九节：单位制、公式白名单、适用边界守卫、禁区与验收容差表；例题船选定 JBC + Series 60；设计任务书 TB-001 获批；代码骨架落地，21 项测试全绿。",
      "process.s1t": "阶段 1 · 主尺度与静水力内核",
      "process.s1d": "任务 1.1–1.9 全部完成并发布 v0.1：解释性数据结构、可插拔主尺度初估注册表、重量浮力平衡迭代、辛普森积分静水力内核、初稳性与干舷校核、命令行入口——158 项测试全绿，GitHub Actions CI 上线。",
      "process.s2t": "阶段 2 · 参数化型线生成",
      "process.s2d": "任务 2.1–2.5 已完成：母型船型值数字化、Lackenby 变换、以 FreeCAD 精确切片替代 gmsh 网格，从 JBC 官方 IGES 与 DXF 型值表重建 93 m / 116.6 m 实船三视图，光顺性数值检查对母型零报警。下一步 2.6 · 静水力联动（吃真型值）。",
      "process.s3t": "阶段 3 · 性能闭环",
      "process.s3d": "Holtrop-Mennen 阻力预报、推进与航速反算、螺旋桨初步设计、大倾角稳性与 IMO 衡准逐条校核；最后由智能体编排自动寻优——在约束内扫描主尺度空间，输出可行方案集与帕累托权衡图。",
      "process.s4t": "阶段 4 · 出图与报告",
      "process.s4d": "静水力曲线图、总布置简图、自动生成带编号图表与结论段的设计报告——一条命令从任务书跑到成果包，成品可直接当课程设计提交。",
      "process.s5t": "阶段 5 · 开源发布",
      "process.s5d": "v1.0 的定义：两种以上不同船型跑通全流程且验证达标，附完整文档、学术引用条目与 CI。十语 README 已提前就位。",
      "badge.done": "已完成",
      "badge.doing": "进行中",
      "badge.plan": "规划中",
      "process.wf": "每个任务的工作循环",
      "process.w1": "AI 出实现方案",
      "process.w2": "人审定公式与出处",
      "process.w3": "编码实现",
      "process.w4": "对基准船数字验收",
      "process.w5": "存档发布",
      "adv.kicker": "— 优势 / ADVANTAGES",
      "adv.title": "把工程纪律写进宪法",
      "adv.a1t": "可追溯",
      "adv.a1d": "每一个输出结果都必须可追溯至某条公式或公开文献。经验公式强制声明适用范围——Fn、Cb 超出边界的输入一律报错拒绝，而不是悄悄给出一个行家一眼看穿的错误数字。",
      "adv.a2t": "基准验证优先",
      "adv.a2d": "与 JBC、Series 60 等公开基准船数据逐项对比，验证优先于新功能开发。静水力误差 <1%、KM 误差 <2%、TPC 误差 <3%——每个数字分开报告，藏在哪个总评里都不行。",
      "adv.a3t": "人机各司其职",
      "adv.a3d": "公式对不对、量级合不合理，由工程师拍板；代码、集成、数据搬运交给 AI。公式先入白名单再实现，页码级出处备查——AI 幻觉公式在制度上就无法进入代码库。",
      "adv.a4t": "解释性报错",
      "adv.a4d": "数据结构逐字段与跨字段校验，报错必须讲清四件事：哪个字段、输入了什么、允许范围是什么、物理或数学上为什么——比如 Cb=1.5 会被告知「排水体积塞不进外接矩形，所以 Cb ≤ 1」。",
      "adv.a5t": "算法可插拔",
      "adv.a5d": "每种算法自带 id、出处与适用范围元数据，挂在注册表上随取随用；任务书可以按 id 钉死算法，未来的前端下拉框直接生成——工程知识以可组合的方式沉淀。",
      "adv.a6t": "彻底开源",
      "adv.a6d": "MIT 许可，不替代解算器、不遥控 CAD 软件，只做「替代人在软件间搬运数据的手」。核心资产是仓库里经得起核对的 Python 代码与文档，谁都可以审阅、复算、fork。",
      "adv.posLabel": "POSITION · 卡位",
      "adv.posText": "商业船舶软件垄断的是交付环节，而初步设计的知识内核是公开的。2026 年的生态调研显示：基础件齐全、学术先例俱在，唯独「AI 智能体编排层」无人做成——全世界尚无同类开源项目，这就是 OpenHull 的核心价值。",
      "cta.title": "从一份任务书开始",
      "cta.sub": "项目正在施工，欢迎围观、验收与共建。",
      "cta.constitution": "阅读项目宪法 AGENTS.md",
      "footer.line": "由 AI 智能体与人类工程师协作建造。",
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
      "nav.intro": "Introduction",
      "nav.process": "Development",
      "nav.advantages": "Advantages",
      "hero.overline": "UNDER CONSTRUCTION · STAGE 2 HULL LINES · v0.1 RELEASED",
      "hero.sub": "The open-source parametric ship preliminary-design toolchain, orchestrated by AI agents",
      "hero.desc": "Hand it a design task book — ship type, deadweight, service speed, trading area — and the agent pipeline performs principal-dimension iteration, hydrostatics, hull-form generation and resistance / propulsion / stability assessment, all the way to DXF drawings and design reports.",
      "hero.cta1": "View on GitHub",
      "hero.cta2": "See how it works",
      "stats.l1": "language README",
      "stats.l2": "benchmark ships · JBC / Series 60",
      "stats.l3": "development stages · skeleton to v1.0",
      "stats.l4": "unit tests passing · and counting",
      "intro.kicker": "— INTRODUCTION",
      "intro.title": "One task book, one complete preliminary design",
      "intro.p1": "The knowledge core of ship preliminary design — empirical formulas from textbooks, series-test atlases, table lookups from the rules — has always been public. What is missing is an automation layer that orchestrates them into a complete design loop. OpenHull turns that knowledge into composable, verifiable Python modules, then lets AI agents orchestrate them into a pipeline under a written constitution.",
      "intro.p2": "Humans own the engineering judgment; AI owns the code — and the hands that move data.",
      "intro.core": "Agent orchestration · formula whitelist · benchmark validation",
      "intro.o1": "Principal dimensions · L / B / D / d / Cb",
      "intro.o2": "Hydrostatics · △ / KM / TPC / MTC",
      "intro.o3": "Lines plan · Lackenby parent-hull transformation",
      "intro.o4": "Resistance / propulsion / stability",
      "intro.o5": "DXF drawings · design reports",
      "process.kicker": "— DEVELOPMENT",
      "process.title": "Six stages — only numbers pass acceptance",
      "process.lead": "Every task fits in one evening. The AI proposes an implementation plan, the engineer approves the formulas, then every result is checked against public benchmark ships. The word 'done' counts for nothing until the numbers land within tolerance.",
      "process.s0t": "Stage 0 · Foundation & constitution",
      "process.s0d": "The project constitution AGENTS.md in nine sections: units, formula whitelist, applicability guards, forbidden zones and acceptance tolerances; benchmark ships JBC + Series 60; task book TB-001 ratified; code skeleton in place, 21 tests green.",
      "process.s1t": "Stage 1 · Dimensions & hydrostatics core",
      "process.s1d": "Tasks 1.1–1.9 complete and v0.1 released: explanatory data structures, the pluggable principal-dimension registry, weight–buoyancy balance iteration, the Simpson-integral hydrostatics core, initial stability and freeboard checks, and a command-line entry — 158 tests green, GitHub Actions CI live.",
      "process.s2t": "Stage 2 · Parametric hull-form generation",
      "process.s2d": "Tasks 2.1–2.5 complete: parent-hull offset digitizing, the Lackenby transformation, FreeCAD precise slicing replacing the gmsh mesh, and 93 m / 116.6 m cargo-ship lines plans rebuilt from the official JBC IGES and a DXF offset table — numeric fairness checks report zero warnings on the parent hull. Next: 2.6 · hydrostatics on true offsets.",
      "process.s3t": "Stage 3 · Performance loop",
      "process.s3d": "Holtrop–Mennen resistance prediction, propulsion and speed-power iteration, preliminary propeller design, large-angle stability checked against IMO criteria item by item; finally an agent-orchestrated search over the principal-dimension space, producing feasible designs and Pareto trade-off charts.",
      "process.s4t": "Stage 4 · Drawings & reports",
      "process.s4d": "Hydrostatic curves, general-arrangement sketches, and automatically generated design reports with numbered figures and conclusions — one command from task book to deliverable package.",
      "process.s5t": "Stage 5 · Open-source release",
      "process.s5d": "The definition of v1.0: two or more ship types through the full pipeline with validation within tolerance, complete documentation, a citation entry and CI. The ten-language README is already in place.",
      "badge.done": "DONE",
      "badge.doing": "IN PROGRESS",
      "badge.plan": "PLANNED",
      "process.wf": "The working loop of every task",
      "process.w1": "AI proposes a plan",
      "process.w2": "Engineer approves formulas",
      "process.w3": "Implementation",
      "process.w4": "Numbers checked vs. benchmarks",
      "process.w5": "Archive & release",
      "adv.kicker": "— ADVANTAGES",
      "adv.title": "Engineering discipline, written into a constitution",
      "adv.a1t": "Traceable",
      "adv.a1d": "Every output must trace back to an equation or a published reference. Empirical formulas must declare their applicability range — inputs beyond it are rejected with an error, never silently turned into a number any naval architect would spot as wrong.",
      "adv.a2t": "Validation first",
      "adv.a2d": "Results are compared item by item against public benchmark ships — JBC, Series 60. Validation comes before new features. Hydrostatics error <1%, KM <2%, TPC <3% — each reported separately; nothing hides inside an average.",
      "adv.a3t": "Humans and AI, each in their place",
      "adv.a3d": "Whether a formula is right and whether magnitudes make sense — engineers decide. Code, integration and data shuffling belong to the AI. A formula enters the whitelist before it enters code, with page-level citations on file — hallucinated formulas are institutionally locked out.",
      "adv.a4t": "Errors that explain themselves",
      "adv.a4d": "Data structures validate field by field and across fields; every error must state four things: which field, what was given, what is allowed, and why — physically or mathematically. Cb = 1.5, for instance, is told that 'the displaced volume cannot fit inside the bounding box, therefore Cb ≤ 1'.",
      "adv.a5t": "Pluggable algorithms",
      "adv.a5d": "Every algorithm carries an id, a citation and applicability metadata in a registry; a task book can pin one by id, and a future frontend dropdown writes itself. Engineering knowledge accumulates as composable parts.",
      "adv.a6t": "Open, all the way down",
      "adv.a6d": "MIT licensed. OpenHull replaces no solver and drives no CAD software — it replaces 'the human hands moving data between programs'. The core assets are reviewable Python code and documents; anyone may audit, recompute, and fork.",
      "adv.posLabel": "POSITION",
      "adv.posText": "Commercial ship software monopolizes delivery, while the knowledge core of preliminary design has always been public. A 2026 ecosystem survey shows the building blocks and academic precedents all exist — only the 'AI-agent orchestration layer' remains unbuilt. No comparable open-source project exists anywhere in the world; that is exactly OpenHull's core value.",
      "cta.title": "Start from a task book",
      "cta.sub": "The project is under construction — watching, auditing and contributing are all welcome.",
      "cta.constitution": "Read the constitution, AGENTS.md",
      "footer.line": "Built by AI agents and human engineers, together.",
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
