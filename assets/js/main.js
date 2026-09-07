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
      "hero.overline": "开源施工中 · 阶段 1 / 计算内核",
      "hero.sub": "由 AI 智能体编排的开源参数化船舶初步设计工具链",
      "hero.desc": "给它一份设计任务书——船型、载重吨、服务航速、航区——智能体流水线自动完成主尺度迭代、静水力计算、型线生成、阻力 / 推进 / 稳性评估，直至 DXF 图纸与设计报告。",
      "hero.cta1": "查看 GitHub 仓库",
      "hero.cta2": "了解它如何工作",
      "stats.l1": "语种 README",
      "stats.l2": "艘公开基准船 · JBC / Series 60",
      "stats.l3": "大开发阶段 · 从骨架到 v1.0",
      "stats.l4": "输出可追溯 · 项目宪法要求",
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
      "process.s1d": "从载重吨与航速反推主尺度（算法可插拔注册表：载重系数法 / Watson 1977 / 母型船比例法），重量浮力平衡迭代，辛普森积分静水力内核，初稳性与干舷校核——全部对 JBC 实船值控制误差。当前进行到任务 1.2 · 主尺度初估。",
      "process.s2t": "阶段 2 · 参数化型线生成",
      "process.s2d": "母型船型值数字化，Lackenby 变换把 Cb 精确变换到目标值，生成横剖面 / 半宽水线 / 纵剖线三视图，光顺性数值检查，静水力改吃真型值，DXF 图纸输出。",
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
      "doc.title": "OpenHull — Design the shell that carries it all."
    },
    en: {
      "nav.intro": "Introduction",
      "nav.process": "Development",
      "nav.advantages": "Advantages",
      "hero.overline": "UNDER CONSTRUCTION · STAGE 1 / CALCULATION CORE",
      "hero.sub": "The open-source parametric ship preliminary-design toolchain, orchestrated by AI agents",
      "hero.desc": "Hand it a design task book — ship type, deadweight, service speed, trading area — and the agent pipeline performs principal-dimension iteration, hydrostatics, hull-form generation and resistance / propulsion / stability assessment, all the way to DXF drawings and design reports.",
      "hero.cta1": "View on GitHub",
      "hero.cta2": "See how it works",
      "stats.l1": "language README",
      "stats.l2": "benchmark ships · JBC / Series 60",
      "stats.l3": "development stages · skeleton to v1.0",
      "stats.l4": "traceable outputs · required by the constitution",
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
      "process.s1d": "Deriving principal dimensions from deadweight and speed (pluggable algorithm registry: deadweight-coefficient / Watson 1977 / parent-hull ratio methods), weight–buoyancy balance iteration, Simpson-integral hydrostatics, initial stability and freeboard checks — all error-controlled against published JBC values. Currently on task 1.2 · principal-dimension estimation.",
      "process.s2t": "Stage 2 · Parametric hull-form generation",
      "process.s2d": "Digitizing the parent hull's offsets, Lackenby transformation to hit the target Cb, generating body plan / half-breadth / sheer views, numeric fairness checks, hydrostatics switched to true offsets, DXF output.",
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
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -6% 0px" });
    document.querySelectorAll(".reveal").forEach(function (el) { io.observe(el); });
  } else {
    document.querySelectorAll(".reveal").forEach(function (el) { el.classList.add("in"); });
  }

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
