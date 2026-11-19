/* Ko'kcha — yangi dizayn (yangi.html): tarjima, hero eshiklari, scroll bilan yig'ilish, xonalar */
(() => {
  const $ = (s, r = document) => r.querySelector(s), $$ = (s, r = document) => Array.from(r.querySelectorAll(s));
  const T = {
    uz: {
      "nav.catalog": "Katalog", "nav.try": "Uyingizda sinang", "nav.work": "Ishlarimiz", "nav.contact": "Aloqa", "cta.order": "Buyurtma",
      "h.crumb1": "Fabrika", "h.crumb2": "Eshiklar", "h.word2": "ESHIK",
      "h.sub": "Toshkentdagi o'z ustaxonamizda MDF'dan yasalgan eshiklar. Har biri sizning eshik o'rningiz o'lchamiga.", "h.cta": "Katalogni ko'rish",
      "b.eye": "Ko'kcha — o'z fabrikamiz", "b.title": "Uzoq xizmat qiladigan\neshik yasaymiz.", "b.sub": "Pastga suring — eshik ko'z oldingizda yig'iladi.",
      "b.s1": "Karkas", "b.s2": "To'sinlar", "b.s3": "MDF panel", "b.s4": "Naqsh", "b.s5": "Tayyor", "b.scroll": "Pastga suring — yig'iladi",
      "r.tag": "Turar-joy\ninteryerlari",
      "r1.k": "Mehmonxona", "r1.t": "Yashash\nmaskani", "r1.s": "Kun shu yerda yig'iladi. Eshik rangini tanlang:",
      "r2.k": "Oshxona", "r2.t": "Oila\ndasturxoni", "r2.s": "Eshik ochiladi — uy to'ladi.",
      "r3.k": "Yo'lak", "r3.t": "Uy\nyo'laklari", "r3.s": "Har bir xonaga o'z eshigi.",
      "r4.k": "Shourum", "r4.t": "Jonli\nko'ring", "r4.s": "Toshkent, Olmazor, Sebzor 7-uy.", "r4.cta": "Shourumga keling",
      "c.1": "Oq", "c.2": "To'q ko'k", "c.3": "Bordo", "c.4": "Zaytun", "c.5": "Grafit", "c.6": "Yashirin",
      "m.title": "Bizning\nmodellar", "m.all": "Barcha modellar →",
      "e.eye": "Bepul o'lchov", "e.title": "Eshigingizni birga tanlaymiz.", "e.addr": "Toshkent, Olmazor tumani, Sebzor massivi, 7-uy", "e.old": "Eski dizayn"
    },
    ru: {
      "nav.catalog": "Каталог", "nav.try": "Примерить дома", "nav.work": "Наши работы", "nav.contact": "Контакты", "cta.order": "Заказать",
      "h.crumb1": "Фабрика", "h.crumb2": "Двери", "h.word2": "ДВЕРИ",
      "h.sub": "Двери из МДФ, сделанные в нашей мастерской в Ташкенте. Каждая — по размеру вашего проёма.", "h.cta": "Смотреть каталог",
      "b.eye": "Ko'kcha — своя фабрика", "b.title": "Мы делаем двери,\nкоторые служат долго.", "b.sub": "Листайте вниз — дверь соберётся у вас на глазах.",
      "b.s1": "Каркас", "b.s2": "Перекладины", "b.s3": "Панель МДФ", "b.s4": "Узор", "b.s5": "Готово", "b.scroll": "Листайте — собирается",
      "r.tag": "Жилые\nинтерьеры",
      "r1.k": "Гостиная", "r1.t": "Жилое\nпространство", "r1.s": "Здесь собирается день. Выберите цвет двери:",
      "r2.k": "Кухня", "r2.t": "Семейный\nстол", "r2.s": "Дверь открывается — дом наполняется.",
      "r3.k": "Коридор", "r3.t": "Коридоры\nдома", "r3.s": "Каждой комнате — своя дверь.",
      "r4.k": "Шоурум", "r4.t": "Вживую", "r4.s": "Ташкент, Олмазор, Себзор 7.", "r4.cta": "Приходите в шоурум",
      "c.1": "Белая", "c.2": "Тёмно-синяя", "c.3": "Бордо", "c.4": "Оливковая", "c.5": "Графит", "c.6": "Скрытая",
      "m.title": "Наши\nмодели", "m.all": "Все модели →",
      "e.eye": "Бесплатный замер", "e.title": "Подберём вашу дверь вместе.", "e.addr": "Ташкент, Олмазорский р-н, массив Себзор, 7", "e.old": "Старый дизайн"
    },
    en: {
      "nav.catalog": "Catalog", "nav.try": "Try at home", "nav.work": "Our work", "nav.contact": "Contact", "cta.order": "Order",
      "h.crumb1": "Factory", "h.crumb2": "Doors", "h.word2": "DOORS",
      "h.sub": "MDF doors made in our own workshop in Tashkent. Each one to the size of your doorway.", "h.cta": "View catalog",
      "b.eye": "Ko'kcha — our own factory", "b.title": "We build doors\nthat last.", "b.sub": "Scroll down — the door is built before your eyes.",
      "b.s1": "Frame", "b.s2": "Rails", "b.s3": "MDF panel", "b.s4": "Ornament", "b.s5": "Ready", "b.scroll": "Scroll to build",
      "r.tag": "Residential\ninteriors",
      "r1.k": "Living", "r1.t": "The living\nspace", "r1.s": "Where the day gathers. Pick a door colour:",
      "r2.k": "Dining", "r2.t": "The family\ntable", "r2.s": "A door opens — a home fills up.",
      "r3.k": "Hallway", "r3.t": "The\nhallways", "r3.s": "Every room its own door.",
      "r4.k": "Showroom", "r4.t": "See it\nlive", "r4.s": "Tashkent, Olmazor, Sebzor 7.", "r4.cta": "Visit the showroom",
      "c.1": "White", "c.2": "Navy", "c.3": "Burgundy", "c.4": "Olive", "c.5": "Graphite", "c.6": "Hidden",
      "m.title": "Our\nmodels", "m.all": "All models →",
      "e.eye": "Free measurement", "e.title": "Let's choose your door together.", "e.addr": "Tashkent, Olmazor district, Sebzor, 7", "e.old": "Old design"
    }
  };
  let lang = "uz";
  try { lang = new URLSearchParams(location.search).get("lang") || localStorage.getItem("kp_lang") || "uz"; } catch (e) {}
  if (!T[lang]) lang = "uz";
  function applyLang() {
    document.documentElement.lang = lang;
    $$("[data-t]").forEach(el => { const v = T[lang][el.dataset.t]; if (v != null) el.textContent = v; });
    $$(".v-lang button").forEach(b => b.classList.toggle("on", b.dataset.lang === lang));
  }
  $$(".v-lang button").forEach(b => b.addEventListener("click", () => { lang = b.dataset.lang; try { localStorage.setItem("kp_lang", lang); } catch (e) {} applyLang(); }));
  applyLang();

  /* 1. hero: o'rtadagi eshik almashadi */
  const HERO = ["kc02", "k1021", "k1013", "k1035", "kc03", "k1027"];
  const name = id => (PRODUCTS.find(p => p.id === id) || {}).name || id;
  let hi = 0;
  const door = $("#vDoor");
  HERO.forEach(id => { const im = new Image(); im.src = `assets/img/products/png/${id}.png`; });
  function heroTo(i) {
    hi = (i + HERO.length) % HERO.length;
    door.classList.add("out");
    setTimeout(() => {
      door.src = `assets/img/products/png/${HERO[hi]}.png`;
      $("#vName").textContent = name(HERO[hi]);
      $("#vNum").textContent = String(hi + 1).padStart(2, "0") + " / " + String(HERO.length).padStart(2, "0");
      door.classList.remove("out");
    }, 420);
  }
  $("#vNext").addEventListener("click", () => heroTo(hi + 1));
  $("#vName").textContent = name(HERO[0]);
  // tepadan tushayotgan qirindilar
  $("#vChips").innerHTML = Array.from({ length: 14 }, () => {
    const w = 6 + Math.random() * 10;
    return `<i style="left:${44 + Math.random() * 12}%;--w:${w.toFixed(1)}px;--x:${(Math.random() * 260 - 130).toFixed(0)}px;--r:${(Math.random() * 720 - 360).toFixed(0)}deg;--d:${(5 + Math.random() * 5).toFixed(1)}s;--dl:${(Math.random() * 8).toFixed(1)}s"></i>`;
  }).join("");

  /* 2. eshik scroll bilan yig'iladi */
  const sec = $("#vBuild"), kit = $("#vKit"), steps = $$(".v-build-steps span");
  const P = {
    sl: $(".k-stile.l", kit), sr: $(".k-stile.r", kit), rt: $(".k-rail.t", kit), rm: $(".k-rail.m", kit), rb: $(".k-rail.b", kit),
    pn: $(".k-panel", kit), bd: $(".k-band", kit), fn: $(".k-final", kit)
  };
  const seg = (p, a, b) => Math.min(1, Math.max(0, (p - a) / (b - a)));
  const ease = t => 1 - Math.pow(1 - t, 3);
  let target = 0, cur = 0, run = false;
  function draw(p) {
    const a = ease(seg(p, .02, .22)), b = ease(seg(p, .2, .42)), c = ease(seg(p, .4, .6)), d = seg(p, .58, .74), e = seg(p, .74, .9);
    const H = kit.offsetHeight;
    P.sl.style.transform = `translateX(${-(1 - a) * 60}vw) rotate(${-(1 - a) * 25}deg)`; P.sl.style.opacity = a;
    P.sr.style.transform = `translateX(${(1 - a) * 60}vw) rotate(${(1 - a) * 25}deg)`; P.sr.style.opacity = a;
    [P.rt, P.rm, P.rb].forEach((r, k) => { const t = ease(seg(p, .2 + k * .05, .36 + k * .05)); r.style.transform = `translateY(${-(1 - t) * (H + 300)}px) rotate(${(1 - t) * (k % 2 ? 18 : -18)}deg)`; r.style.opacity = t; });
    P.pn.style.transform = `translateY(${(1 - c) * 70}vh) scale(${.9 + .1 * c})`; P.pn.style.opacity = c;
    P.bd.style.clipPath = `inset(0 0 ${(1 - d) * 100}% 0)`; P.bd.style.opacity = d > 0 ? 1 : 0;
    P.fn.style.opacity = e; P.fn.style.transform = `scale(${1.04 - .04 * e})`;
    const n = p < .2 ? 0 : p < .4 ? 1 : p < .58 ? 2 : p < .74 ? 3 : 4;
    steps.forEach((s, i) => s.classList.toggle("on", i === n));
  }
  function tick() {
    cur += (target - cur) * .12;
    if (Math.abs(target - cur) < .0005) cur = target;
    draw(cur);
    if (cur !== target) requestAnimationFrame(tick); else run = false;
  }
  function onScroll() {
    const r = sec.getBoundingClientRect(), total = sec.offsetHeight - innerHeight;
    target = Math.min(1, Math.max(0, -r.top / (total || 1)));
    if (!run) { run = true; requestAnimationFrame(tick); }
  }
  addEventListener("scroll", onScroll, { passive: true });
  addEventListener("resize", onScroll);
  draw(0); onScroll();

  /* 3. xonalar: ko'ringanda kiradi; mehmonxonada eshik rangi tanlanadi */
  const io = new IntersectionObserver(es => es.forEach(en => { if (en.isIntersecting) en.target.classList.add("in"); }), { threshold: .3 });
  $$(".v-room").forEach(r => io.observe(r));
  $("#vSwatch").addEventListener("click", e => {
    const b = e.target.closest("button");
    if (!b) return;
    $$("#vSwatch button").forEach(x => x.classList.toggle("on", x === b));
    $$("#vLiving img").forEach(im => im.classList.toggle("on", im.dataset.v === b.dataset.v));
  });

  /* 4. modellar qatori (fonsiz PNG eshiklar) */
  const MODELS = ["kc02", "k1035", "k1021", "kc03", "k1027", "k1013", "k1033", "k1016", "kn01", "k1006", "k1012", "k1031"];
  $("#vStrip").innerHTML = MODELS.map(id => `<a href="mahsulot.html?id=${id}"><img src="assets/img/products/png/${id}.png" alt="" loading="lazy"><b>${name(id)}</b><span>Ko'kcha · MDF</span></a>`).join("");
})();
