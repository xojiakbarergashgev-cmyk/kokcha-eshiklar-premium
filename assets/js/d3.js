/* Ko'kcha — mukofotli saytlar uslubidagi animatsiyalar (dizayn.html): yuklanish, harflar, kengayadigan rasm, yuguruvchi yozuv, so'zlar, gorizontal galereya, taxlanadigan kartochkalar, kursor */
(() => {
  const $ = (s, r = document) => r.querySelector(s), $$ = (s, r = document) => Array.from(r.querySelectorAll(s));
  const T = {
    uz: {
      "nav.models": "Modellar", "nav.process": "Jarayon", "nav.try": "Uyingizda sinang", "nav.contact": "Aloqa", "cta.order": "Buyurtma",
      "h.k1": "Eshiklar fabrikasi", "h.k2": "Toshkent — 2021 yildan", "h.sub1": "eshiklari", "h.sub2": "— uyingiz yuzi", "h.p": "Toshkentdagi o'z fabrikamizda MDF'dan yasalgan eshiklar. Har biri sizning o'lchamingizga, qo'lda pardozlanadi.", "h.scroll": "(Pastga suring)",
      "g.t1": "Har bir eshik ortida —", "g.t2": "sizning uyingiz.",
      "mq.1": "O'z fabrikamiz", "mq.2": "MDF eshiklar", "mq.3": "Bepul o'lchov", "mq.4": "Italiya furniturasi", "mq.5": "Toshkent",
      "m.eye": "(Biz haqimizda)", "m.text": "Biz 2021 yildan beri Toshkentdagi o'z fabrikamizda eshik yasaymiz. Har bir eshik sizning eshik o'rningiz o'lchamiga chiziladi, MDF'dan kesiladi, qo'lda pardozlanadi va Italiya furniturasi bilan o'rnatiladi.",
      "z.eye": "(Kolleksiya)", "z.t1": "Tanlangan", "z.t2": "modellar", "z.p": "Pastga suring — eshiklar yonga suriladi. Har biri bizning ustaxonada yasalgan.", "z.all": "Barcha modellar",
      "type.full": "To'liq", "type.glass": "Oynali", "type.hidden": "Yashirin",
      "p.eye": "(Jarayon)", "p.title": "O'lchovdan o'rnatishgacha",
      "p.1t": "O'lchov", "p.1": "Usta uyingizga kelib, eshik o'rnini millimetrgacha o'lchaydi.",
      "p.2t": "Kesish", "p.2": "Avtomat arra MDF listni eshik o'lchamiga aniq kesadi.",
      "p.3t": "Pardoz", "p.3": "Naqsh, lak va bo'yoq — har bir qirra qo'lda silliqlanadi.",
      "p.4t": "O'rnatish", "p.4": "Eshik Italiya furniturasi bilan o'rnatiladi, 10 yillik kafolat.",
      "c.t1": "Eshigingizni", "c.t2": "birga tanlaymiz", "c.btn": "Bepul o'lchov",
      "f.addr": "Shourum", "f.addrv": "Toshkent, Olmazor tumani,\nSebzor massivi, 7-uy", "f.phone": "Telefon", "f.site": "Sayt", "f.main": "Asosiy sayt",
      "cur.view": "Ko'rish", "cur.drag": "Suring"
    },
    ru: {
      "nav.models": "Модели", "nav.process": "Процесс", "nav.try": "Примерить дома", "nav.contact": "Контакты", "cta.order": "Заказать",
      "h.k1": "Фабрика дверей", "h.k2": "Ташкент — с 2021", "h.sub1": "двери", "h.sub2": "— лицо вашего дома", "h.p": "Двери из МДФ, сделанные на нашей фабрике в Ташкенте. Каждая — по вашему размеру, с ручной отделкой.", "h.scroll": "(Листайте)",
      "g.t1": "За каждой дверью —", "g.t2": "ваш дом.",
      "mq.1": "Своя фабрика", "mq.2": "Двери МДФ", "mq.3": "Бесплатный замер", "mq.4": "Итальянская фурнитура", "mq.5": "Ташкент",
      "m.eye": "(О нас)", "m.text": "С 2021 года мы делаем двери на своей фабрике в Ташкенте. Каждая дверь чертится по размеру вашего проёма, вырезается из МДФ, отделывается вручную и устанавливается с итальянской фурнитурой.",
      "z.eye": "(Коллекция)", "z.t1": "Избранные", "z.t2": "модели", "z.p": "Листайте вниз — двери поедут вбок. Каждая сделана в нашей мастерской.", "z.all": "Все модели",
      "type.full": "Глухая", "type.glass": "Со стеклом", "type.hidden": "Скрытая",
      "p.eye": "(Процесс)", "p.title": "От замера до установки",
      "p.1t": "Замер", "p.1": "Мастер приедет и замерит проём с точностью до миллиметра.",
      "p.2t": "Раскрой", "p.2": "Автоматическая пила точно режет лист МДФ под размер двери.",
      "p.3t": "Отделка", "p.3": "Узор, лак и краска — каждая кромка шлифуется вручную.",
      "p.4t": "Установка", "p.4": "Ставим с итальянской фурнитурой, гарантия 10 лет.",
      "c.t1": "Подберём", "c.t2": "вашу дверь вместе", "c.btn": "Бесплатный замер",
      "f.addr": "Шоурум", "f.addrv": "Ташкент, Олмазорский р-н,\nмассив Себзор, 7", "f.phone": "Телефон", "f.site": "Сайт", "f.main": "Основной сайт",
      "cur.view": "Смотреть", "cur.drag": "Листайте"
    },
    en: {
      "nav.models": "Models", "nav.process": "Process", "nav.try": "Try at home", "nav.contact": "Contact", "cta.order": "Order",
      "h.k1": "Door factory", "h.k2": "Tashkent — since 2021", "h.sub1": "doors", "h.sub2": "— the face of your home", "h.p": "MDF doors made in our own factory in Tashkent. Each one to your size, finished by hand.", "h.scroll": "(Scroll down)",
      "g.t1": "Behind every door —", "g.t2": "your home.",
      "mq.1": "Our own factory", "mq.2": "MDF doors", "mq.3": "Free measuring", "mq.4": "Italian hardware", "mq.5": "Tashkent",
      "m.eye": "(About us)", "m.text": "Since 2021 we have been making doors in our own factory in Tashkent. Every door is drawn to the size of your doorway, cut from MDF, finished by hand and installed with Italian hardware.",
      "z.eye": "(Collection)", "z.t1": "Selected", "z.t2": "models", "z.p": "Scroll down — the doors slide sideways. Each one made in our workshop.", "z.all": "All models",
      "type.full": "Solid", "type.glass": "Glass", "type.hidden": "Hidden",
      "p.eye": "(Process)", "p.title": "From measuring to installation",
      "p.1t": "Measuring", "p.1": "A craftsman comes over and measures the doorway to the millimetre.",
      "p.2t": "Cutting", "p.2": "An automatic saw cuts the MDF sheet precisely to door size.",
      "p.3t": "Finishing", "p.3": "Ornament, lacquer and paint — every edge sanded by hand.",
      "p.4t": "Installation", "p.4": "Installed with Italian hardware and a 10-year warranty.",
      "c.t1": "Let's choose", "c.t2": "your door together", "c.btn": "Free measuring",
      "f.addr": "Showroom", "f.addrv": "Tashkent, Olmazor district,\nSebzor, 7", "f.phone": "Phone", "f.site": "Website", "f.main": "Main site",
      "cur.view": "View", "cur.drag": "Scroll"
    }
  };
  let lang = "uz";
  try { lang = new URLSearchParams(location.search).get("lang") || localStorage.getItem("kp_lang") || "uz"; } catch (e) {}
  if (!T[lang]) lang = "uz";
  const t = k => T[lang][k] || k;
  const GLASS = ["k1034", "k1033", "k1032", "k1030", "k1028", "k1026", "k1022", "k1020", "k1019", "k1016", "k1005"], HIDDEN = ["k1006", "k1029", "k1018"];
  const typeOf = id => GLASS.includes(id) ? "glass" : HIDDEN.includes(id) ? "hidden" : "full";
  const name = id => (window.PRODUCTS && PRODUCTS.find(p => p.id === id) || {}).name || id;
  const CARDS = [["kc02", "#d9c6ad"], ["k1035", "#e2ddd5"], ["k1027", "#c5cbd8"], ["k1013", "#d6c2a6"], ["kc03", "#ece3d3"], ["k1016", "#dcd6cc"], ["k1010", "#c7ccd6"], ["k1031", "#e6dfd2"], ["k1012", "#d9c3c0"], ["k1006", "#d4c4b0"]];

  // matnlar va bo'linmalar (harf / so'z)
  function splitChars(el) { el.innerHTML = [...el.textContent].map(c => `<span class="ch">${c === " " ? "&nbsp;" : c}</span>`).join(""); }
  function render() {
    document.documentElement.lang = lang;
    $$("[data-t]").forEach(el => { el.textContent = t(el.dataset.t); });
    $$(".hd-lang button").forEach(b => b.classList.toggle("on", b.dataset.lang === lang));
    $$(".split").forEach(splitChars);
    const w = $("#words"); w.innerHTML = w.textContent.split(" ").map(x => `<span class="w">${x}</span>`).join(" ");
    $$(".mq-track").forEach(tr => { const one = [1, 2, 3, 4, 5].map(i => `<span>${t("mq." + i)}<i></i></span>`).join(""); tr.innerHTML = one + one + one; });
    $("#hzCards").innerHTML = CARDS.map(([id, c], i) => `<a class="hz-card" style="--c:${c}" href="mahsulot.html?id=${id}" data-cur="view"><span class="no">${String(i + 1).padStart(2, "0")}</span><img src="assets/img/products/png/${id}.png" alt=""><b>${name(id)}</b><span>${t("type." + typeOf(id))}</span></a>`).join("");
  }
  render();

  const ok = window.gsap && window.ScrollTrigger;
  if (!ok) { document.body.classList.remove("is-loading"); $("#ld").remove(); return; }
  gsap.registerPlugin(ScrollTrigger);
  const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;

  // silliq scroll (Lenis)
  let lenis = null;
  if (window.Lenis && !reduce) {
    lenis = new Lenis({ lerp: .09 });
    lenis.on("scroll", ScrollTrigger.update);
    gsap.ticker.add(time => lenis.raf(time * 1000));
    gsap.ticker.lagSmoothing(0);
    $$('a[href^="#"]').forEach(a => a.addEventListener("click", e => { e.preventDefault(); lenis.scrollTo(a.getAttribute("href"), { offset: -60 }); }));
  }

  /* yuklanish: 0 → 100, eshik chiziladi, pardalar ochiladi, harflar ko'tariladi */
  const num = { v: 0 };
  const intro = gsap.timeline();
  intro.to(".ld-door path", { strokeDashoffset: 0, duration: 1.4, ease: "power2.inOut", stagger: .15 }, 0)
    .to(num, { v: 100, duration: 1.6, ease: "power2.inOut", onUpdate: () => { $("#ldNum").textContent = Math.round(num.v); } }, 0)
    .to(".ld-in", { opacity: 0, y: -20, duration: .4 }, 1.75)
    .to(".ld-panel.t", { yPercent: -100, duration: 1, ease: "expo.inOut" }, 1.9)
    .to(".ld-panel.b", { yPercent: 100, duration: 1, ease: "expo.inOut" }, 1.9)
    .add(() => { document.body.classList.remove("is-loading"); $("#ld").style.display = "none"; ScrollTrigger.refresh(); }, 2.9)
    .from(".hero-title .ch", { yPercent: 110, rotate: 6, duration: 1.1, ease: "expo.out", stagger: .035 }, 2.25)
    .from(".hero-door", { scale: 0, rotate: -12, duration: 1, ease: "back.out(1.6)" }, 2.6)
    .from(".hero-top > *, .hero-bot > *", { opacity: 0, y: 14, duration: .8, stagger: .08 }, 2.6);
  // brauzer animatsiyani to'xtatib qo'ysa ham, sahifa yopiq qolmasin
  setTimeout(() => { if (document.body.classList.contains("is-loading")) intro.progress(1); }, 4500);

  /* rasm kichik oynadan butun ekranga kengayadi */
  const mob = innerWidth < 900;
  gsap.timeline({ scrollTrigger: { trigger: "#grow", start: "top top", end: "bottom bottom", scrub: true } })
    .fromTo("#growFrame", { clipPath: mob ? "inset(30% 22% 30% 22% round 14px)" : "inset(32% 38% 32% 38% round 18px)" }, { clipPath: "inset(0% 0% 0% 0% round 0px)", ease: "none", duration: 1 })
    .fromTo("#growFrame img", { scale: 1.3 }, { scale: 1, ease: "none", duration: 1 }, 0)
    .to("#growTxt", { opacity: 1, y: 0, duration: .3 }, .65)
    .from("#growTxt", { y: 60, duration: .3 }, .65);

  /* yuguruvchi yozuv: tezlikka qarab tezlashadi va egiladi */
  const tracks = $$(".mq-track").map(el => ({ el, dir: +el.dataset.dir, x: 0 }));
  let vel = 0;
  ScrollTrigger.create({ trigger: "#mq", start: "top bottom", end: "bottom top", onUpdate: s => { vel = s.getVelocity() / 300; } });
  gsap.ticker.add(() => {
    vel *= .92;
    tracks.forEach(o => {
      const w = o.el.scrollWidth / 3;
      o.x += (1.2 + Math.abs(vel)) * o.dir;
      if (o.x <= -w) o.x += w; if (o.x >= 0) o.x -= w;
      o.el.style.transform = `translateX(${o.x}px) skewX(${gsap.utils.clamp(-12, 12, -vel * 2)}deg)`;
    });
  });

  /* so'zlar birma-bir yonadi */
  gsap.to("#words .w", { opacity: 1, stagger: .05, ease: "none", scrollTrigger: { trigger: ".mani", start: "top 70%", end: "bottom 60%", scrub: true } });

  /* gorizontal galereya */
  const track = $("#hzTrack");
  const dist = () => track.scrollWidth - innerWidth;
  gsap.to(track, { x: () => -dist(), ease: "none", scrollTrigger: { trigger: ".hz", start: "top top", end: () => "+=" + dist(), pin: ".hz-pin", scrub: 1, invalidateOnRefresh: true, onUpdate: s => { $("#hzBar").style.transform = `scaleX(${s.progress})`; } } });

  /* taxlanadigan kartochkalar: oldingisi kichrayib, xiralashadi */
  const cards = $$(".st-card");
  cards.forEach((c, i) => {
    if (i === cards.length - 1) return;
    gsap.to(c, { scale: .9, opacity: .55, ease: "none", scrollTrigger: { trigger: cards[i + 1], start: "top bottom", end: "top 90px", scrub: true } });
  });
  gsap.from(".cta-t", { yPercent: 30, opacity: 0, duration: 1, ease: "expo.out", scrollTrigger: { trigger: ".cta", start: "top 70%" } });
  gsap.from(".ft-word", { yPercent: 60, ease: "none", scrollTrigger: { trigger: ".ft", start: "top bottom", end: "bottom bottom", scrub: true } });

  /* kursor va magnit tugmalar */
  const cur = $("#cur"), ctx = $("#curTxt");
  const qx = gsap.quickTo(cur, "x", { duration: .45, ease: "power3" }), qy = gsap.quickTo(cur, "y", { duration: .45, ease: "power3" });
  addEventListener("mousemove", e => { qx(e.clientX); qy(e.clientY); });
  document.addEventListener("mouseover", e => {
    const v = e.target.closest("[data-cur]"), l = e.target.closest("a, button");
    cur.classList.toggle("big", !!v); cur.classList.toggle("link", !v && !!l);
    ctx.textContent = v ? t("cur." + v.dataset.cur) : "";
  });
  $$(".mag").forEach(el => {
    el.addEventListener("mousemove", e => { const r = el.getBoundingClientRect(); gsap.to(el, { x: (e.clientX - r.left - r.width / 2) * .35, y: (e.clientY - r.top - r.height / 2) * .35, duration: .4 }); });
    el.addEventListener("mouseleave", () => gsap.to(el, { x: 0, y: 0, duration: .7, ease: "elastic.out(1, .4)" }));
  });

  // til almashganda matnlar qayta yig'iladi
  $$(".hd-lang button").forEach(b => b.addEventListener("click", () => { try { localStorage.setItem("kp_lang", b.dataset.lang); } catch (e) {} location.href = "dizayn.html?lang=" + b.dataset.lang; }));
  addEventListener("load", () => ScrollTrigger.refresh());
})();
