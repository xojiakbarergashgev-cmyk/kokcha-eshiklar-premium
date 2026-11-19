/* Ko'kcha — eski sayt ustiga effektlar: silliq scroll, kursor, magnit tugmalar, yuguruvchi yozuv egilishi,
   rasmlar ochilishi, so'zma-so'z yonadigan matn, sahifalar orasidagi parda, pastdagi ulkan nom */
(() => {
  const $ = (s, r = document) => r.querySelector(s), $$ = (s, r = document) => Array.from(r.querySelectorAll(s));
  const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const fine = matchMedia("(hover: hover) and (pointer: fine)").matches;
  const hasG = window.gsap && window.ScrollTrigger;
  if (hasG) gsap.registerPlugin(ScrollTrigger);

  /* silliq scroll */
  let lenis = null;
  if (window.Lenis && !reduce) {
    lenis = new Lenis({ lerp: .1 });
    if (hasG) { lenis.on("scroll", ScrollTrigger.update); gsap.ticker.add(t => lenis.raf(t * 1000)); gsap.ticker.lagSmoothing(0); }
    else { const raf = t => { lenis.raf(t); requestAnimationFrame(raf); }; requestAnimationFrame(raf); }
  }

  /* kursor va magnit tugmalar */
  if (fine && !reduce) {
    const cur = document.createElement("div");
    cur.className = "fx-cur";
    cur.innerHTML = "<span></span>";
    document.body.appendChild(cur);
    const lbl = $("span", cur);
    let x = innerWidth / 2, y = innerHeight / 2, cx = x, cy = y;
    addEventListener("mousemove", e => { x = e.clientX; y = e.clientY; }, { passive: true });
    (function loop() { cx += (x - cx) * .2; cy += (y - cy) * .2; cur.style.transform = `translate(${cx}px, ${cy}px)`; requestAnimationFrame(loop); })();
    const VIEW = { uz: "Ko'rish", ru: "Смотреть", en: "View" };
    document.addEventListener("mouseover", e => {
      const v = e.target.closest(".pcard, .col, .pf-item, .v360-thumbs button, .room-thumbs button");
      const l = e.target.closest("a, button, label, [data-order]");
      cur.classList.toggle("view", !!v);
      cur.classList.toggle("link", !v && !!l);
      lbl.textContent = v ? (VIEW[document.documentElement.lang] || VIEW.uz) : "";
    });
    document.addEventListener("mousemove", e => {
      const b = e.target.closest(".btn, .fab a, .fab button");
      if (!b) return;
      const r = b.getBoundingClientRect();
      b.style.transform = `translate(${(e.clientX - r.left - r.width / 2) * .25}px, ${(e.clientY - r.top - r.height / 2) * .3}px)`;
      b._mag = true;
    });
    document.addEventListener("mouseout", e => {
      const b = e.target.closest(".btn, .fab a, .fab button");
      if (b && b._mag && !b.contains(e.relatedTarget)) { b.style.transition = "transform .6s cubic-bezier(.2,1.6,.4,1)"; b.style.transform = ""; setTimeout(() => { b.style.transition = ""; }, 600); }
    });
  }

  /* yuguruvchi yozuv scroll tezligiga qarab egiladi */
  let lastY = scrollY, skew = 0;
  (function loop() {
    const v = scrollY - lastY; lastY = scrollY;
    skew += (Math.max(-14, Math.min(14, -v * .6)) - skew) * .15;
    $$(".mq-track").forEach(m => { m.style.transform = `skewX(${skew.toFixed(2)}deg)`; });
    requestAnimationFrame(loop);
  })();

  /* rasmlar ko'ringanda ochilib chiqadi */
  const io = new IntersectionObserver(es => es.forEach(en => { if (en.isIntersecting) { en.target.classList.add("fx-in"); io.unobserve(en.target); } }), { threshold: .15 });
  const markImgs = () => $$(".col .media, .pf-item, .ab-img .img, .about-img, .img.rv, .st-img").forEach(el => {
    if (el._fx || reduce) return;
    el._fx = true; el.classList.add("fx-img"); io.observe(el);
  });

  /* lead matnlar so'zma-so'z yonadi */
  function wordify() {
    if (reduce || !hasG) return;
    $$(".lead, .ab-lead").forEach(el => {
      if (el.querySelector(".fw") || !el.textContent.trim()) return;
      el.classList.add("fx-words");
      el.innerHTML = el.textContent.trim().split(/\s+/).map(w => `<span class="fw">${w.replace(/[&<>]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;" }[c]))}</span>`).join(" ");
      gsap.to($$(".fw", el), { opacity: 1, stagger: .06, ease: "none", scrollTrigger: { trigger: el, start: "top 88%", end: "bottom 55%", scrub: true } });
    });
  }

  /* pastdagi ulkan nom (futer qayta chizilsa ham qaytadi) */
  function addWord() {
    const f = $("#site-footer .ftr");
    if (!f || $(".fx-word", f)) return;
    const w = document.createElement("div");
    w.className = "fx-word";
    w.innerHTML = "<span>KO'KCHA</span>";
    f.appendChild(w);
    if (hasG && !reduce) gsap.from($("span", w), { yPercent: 70, ease: "none", scrollTrigger: { trigger: w, start: "top bottom", end: "bottom bottom", scrub: true } });
  }

  /* sahifalar orasidagi parda */
  const curtain = document.createElement("div");
  curtain.className = "fx-curtain";
  curtain.innerHTML = "<b>Ko'kcha</b>";
  document.body.appendChild(curtain);
  try {
    if (sessionStorage.getItem("fx_nav") === "1" && hasG && !reduce) {
      sessionStorage.removeItem("fx_nav");
      gsap.fromTo(curtain, { yPercent: 0 }, { yPercent: -100, duration: .9, ease: "expo.inOut", delay: .1 });
    }
  } catch (e) {}
  document.addEventListener("click", e => {
    const a = e.target.closest("a[href]");
    if (!a || !hasG || reduce || e.metaKey || e.ctrlKey || e.shiftKey || a.target === "_blank") return;
    const href = a.getAttribute("href");
    if (!/^[\w-]+\.html(\?|#|$)/.test(href) || href.startsWith(location.pathname.split("/").pop() + "#")) return;
    e.preventDefault();
    try { sessionStorage.setItem("fx_nav", "1"); } catch (err) {}
    gsap.fromTo(curtain, { yPercent: 100 }, { yPercent: 0, duration: .7, ease: "expo.inOut", onComplete: () => { location.href = href; } });
  });
  addEventListener("pageshow", e => { if (e.persisted && hasG) gsap.set(curtain, { yPercent: 100 }); });

  // main.js sahifani chizib bo'lgach (va til almashganda) effektlarni qayta ulaymiz
  function apply() { markImgs(); wordify(); addWord(); if (hasG) ScrollTrigger.refresh(); }
  const mo = new MutationObserver(() => { clearTimeout(mo._t); mo._t = setTimeout(apply, 120); });
  ["#site-footer", "main", "body"].forEach(s => { const el = $(s); if (el) mo.observe(el, { childList: true, subtree: s !== "body" }); });
  addEventListener("load", apply);
  setTimeout(apply, 300);
})();
