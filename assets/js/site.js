/* ═══════════════════════════════════════════════
   OpenHull — shared wiring for variant layout pages
   页面需在加载本文件前提供 window.OH_I18N = { zh:{…}, en:{…} }
   ═══════════════════════════════════════════════ */

(function () {
  "use strict";

  var I18N = window.OH_I18N || { zh: {}, en: {} };
  var THEMES = ["paper", "noir", "deep", "blueprint", "amber", "terminal"];
  var STATIC = /[?&]static/.test(location.search);
  var reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ── 语言 ── */
  var lang = "zh";
  try {
    var urlLang = new URLSearchParams(location.search).get("lang");
    if (urlLang === "en" || urlLang === "zh") lang = urlLang;
    else lang = localStorage.getItem("openhull-lang") ||
           (navigator.language && navigator.language.indexOf("zh") === 0 ? "zh" : "en");
  } catch (e) {}

  function applyLang(next) {
    lang = next;
    var dict = I18N[lang] || {};
    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var k = el.getAttribute("data-i18n");
      if (dict[k] != null) el.textContent = dict[k];
    });
    document.documentElement.lang = lang === "zh" ? "zh-CN" : "en";
    if (dict["doc.title"]) document.title = dict["doc.title"];
    var btn = document.getElementById("langToggle");
    if (btn) btn.textContent = lang === "zh" ? "EN" : "中";
    try { localStorage.setItem("openhull-lang", lang); } catch (e) {}
  }

  var toggle = document.getElementById("langToggle");
  if (toggle) toggle.addEventListener("click", function () { applyLang(lang === "zh" ? "en" : "zh"); });
  applyLang(lang);

  /* ── 主题 ── */
  function applyTheme(t) {
    if (THEMES.indexOf(t) < 0) t = "paper";
    document.documentElement.setAttribute("data-theme", t);
    try { localStorage.setItem("openhull-theme", t); } catch (e) {}
    var pop = document.getElementById("themePop");
    if (pop) pop.querySelectorAll("[data-theme-set]").forEach(function (b) {
      b.classList.toggle("active", b.getAttribute("data-theme-set") === t);
    });
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
  }

  /* ── 风格跳转（跨页布局） ── */
  var styleBtn = document.getElementById("styleBtn");
  var stylePop = document.getElementById("stylePop");
  if (styleBtn && stylePop) {
    styleBtn.addEventListener("click", function (e) {
      e.stopPropagation();
      stylePop.hidden = !stylePop.hidden;
      styleBtn.setAttribute("aria-expanded", String(!stylePop.hidden));
    });
    stylePop.querySelectorAll("[data-style-href]").forEach(function (b) {
      b.addEventListener("click", function () {
        location.href = b.getAttribute("data-style-href");
      });
    });
  }

  document.addEventListener("click", function (e) {
    [themePop, stylePop].forEach(function (pop) {
      if (pop && !pop.hidden && !e.target.closest(".theme-menu")) pop.hidden = true;
    });
  });
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") [themePop, stylePop].forEach(function (pop) {
      if (pop) pop.hidden = true;
    });
  });

  /* ── 主题初始化（URL > localStorage > 默认） ── */
  var initTheme = "paper";
  try {
    var urlTheme = new URLSearchParams(location.search).get("theme");
    if (urlTheme && THEMES.indexOf(urlTheme) >= 0) initTheme = urlTheme;
    else initTheme = localStorage.getItem("openhull-theme") || "paper";
  } catch (e) {}
  applyTheme(initTheme);

  /* ── 滚动显现 + 数字滚动 ── */
  function countUp(statEl) {
    var strong = statEl.querySelector("strong[data-count]");
    if (!strong) return;
    var target = parseInt(strong.getAttribute("data-count"), 10);
    if (isNaN(target)) return;
    var t0 = null, dur = 1300;
    function step(ts) {
      if (!t0) t0 = ts;
      var p = Math.min((ts - t0) / dur, 1);
      p = 1 - Math.pow(1 - p, 3);
      strong.textContent = Math.round(target * p);
      if (p < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }

  if (STATIC || reduced || !("IntersectionObserver" in window)) {
    document.querySelectorAll(".reveal").forEach(function (el) { el.classList.add("in"); });
  } else {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("in");
          if (entry.target.classList.contains("stat")) countUp(entry.target);
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -6% 0px" });
    document.querySelectorAll(".reveal").forEach(function (el) { io.observe(el); });
  }
})();
