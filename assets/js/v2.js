/* Ko'kcha — yangi dizayn (yangi.html): tarjima, hero eshiklari, eshik ochiladigan portal, xonalar */
(() => {
  const $ = (s, r = document) => r.querySelector(s), $$ = (s, r = document) => Array.from(r.querySelectorAll(s));
  const T = {
    uz: {
      "nav.catalog": "Katalog", "nav.try": "Uyingizda sinang", "nav.about": "Biz haqimizda", "nav.contact": "Aloqa", "cta.quote": "Narx so'rash",
      "h.t1": "Har bir eshik —", "h.t2": "bir hikoya", "h.fact": "yillik tajriba · Toshkent", "h.since1": "2021", "h.since2": "yildan beri",
      "h.sub": "Biz odamlar to'xtab qaraydigan eshiklar yasaymiz va o'rnatamiz — o'z fabrikamizda, sizning o'lchamingizda.", "h.cta": "Katalogni ko'rish",
      "p.eye": "Har bir eshik ortida", "p.title": "Sizning uyingiz.", "p.hint": "Pastga suring — eshik ochiladi",
      "r.tag": "Turar-joy\ninteryerlari",
      "r1.k": "Mehmonxona", "r1.t": "Yashash\nmaskani", "r1.s": "Kun shu yerda yig'iladi. Eshik rangini tanlang:",
      "r2.k": "Oshxona", "r2.t": "Oila\ndasturxoni", "r2.s": "Uzun dasturxonlar va uzoq suhbatlar uchun.",
      "r3.k": "Yo'lak", "r3.t": "Uy\nyo'laklari", "r3.s": "Har bir xonaga o'z eshigi.",
      "c.1": "Oq", "c.2": "To'q ko'k", "c.3": "Bordo", "c.4": "Zaytun", "c.5": "Grafit", "c.6": "Yashirin",
      "w.eye": "Nega Ko'kcha", "w.title": "Oilangiz uchun mustahkam eshik", "w.sub": "Eshiklar Toshkentdagi o'z fabrikamizda yasaladi — o'lchovdan o'rnatishgacha bitta jamoa javob beradi.",
      "w.1t": "O'z fabrikamiz", "w.1": "Vositachisiz: MDF kesishdan bo'yashgacha hammasi bizning ustaxonada.",
      "w.2t": "Bepul o'lchov", "w.2": "Usta uyingizga kelib, eshik o'rnini aniq o'lchab beradi.",
      "w.3t": "10 yillik kafolat", "w.3": "Italiya furniturasi va kafolat bilan o'rnatamiz.",
      "e.eye": "Bepul o'lchov", "e.t1": "Eshigingizni", "e.t2": "birga tanlaymiz.", "e.addr": "Toshkent, Olmazor tumani, Sebzor massivi, 7-uy", "e.old": "Eski dizayn"
    },
    ru: {
      "nav.catalog": "Каталог", "nav.try": "Примерить дома", "nav.about": "О нас", "nav.contact": "Контакты", "cta.quote": "Узнать цену",
      "h.t1": "Каждая дверь —", "h.t2": "это история", "h.fact": "лет опыта · Ташкент", "h.since1": "с", "h.since2": "2021",
      "h.sub": "Мы делаем и устанавливаем двери, перед которыми останавливаются, — на своей фабрике, по вашим размерам.", "h.cta": "Смотреть каталог",
      "p.eye": "За каждой дверью", "p.title": "Ваш дом.", "p.hint": "Листайте вниз — дверь откроется",
      "r.tag": "Жилые\nинтерьеры",
      "r1.k": "Гостиная", "r1.t": "Жилое\nпространство", "r1.s": "Здесь собирается день. Выберите цвет двери:",
      "r2.k": "Столовая", "r2.t": "Семейный\nстол", "r2.s": "Для длинных столов и долгих разговоров.",
      "r3.k": "Коридор", "r3.t": "Коридоры\nдома", "r3.s": "Каждой комнате — своя дверь.",
      "c.1": "Белая", "c.2": "Тёмно-синяя", "c.3": "Бордо", "c.4": "Оливковая", "c.5": "Графит", "c.6": "Скрытая",
      "w.eye": "Почему Ko'kcha", "w.title": "Надёжная дверь для вашей семьи", "w.sub": "Двери делаются на нашей фабрике в Ташкенте — от замера до установки отвечает одна команда.",
      "w.1t": "Своя фабрика", "w.1": "Без посредников: от раскроя МДФ до покраски — всё в нашей мастерской.",
      "w.2t": "Бесплатный замер", "w.2": "Мастер приедет и точно замерит дверной проём.",
      "w.3t": "Гарантия 10 лет", "w.3": "Устанавливаем с итальянской фурнитурой и гарантией.",
      "e.eye": "Бесплатный замер", "e.t1": "Подберём", "e.t2": "вашу дверь вместе.", "e.addr": "Ташкент, Олмазорский р-н, массив Себзор, 7", "e.old": "Старый дизайн"
    },
    en: {
      "nav.catalog": "Catalog", "nav.try": "Try at home", "nav.about": "About", "nav.contact": "Contact", "cta.quote": "Get a quote",
      "h.t1": "Every door", "h.t2": "tells a story", "h.fact": "years of craft · Tashkent", "h.since1": "since", "h.since2": "2021",
      "h.sub": "We design and install doors that stop people in their tracks — in our own factory, to your size.", "h.cta": "Explore collection",
      "p.eye": "Behind every door", "p.title": "Your home.", "p.hint": "Scroll down — the door opens",
      "r.tag": "Residential\ninteriors",
      "r1.k": "Living", "r1.t": "The living\nspace", "r1.s": "Where the day gathers. Pick a door colour:",
      "r2.k": "Dining", "r2.t": "The dining\nroom", "r2.s": "Made for long tables and longer evenings.",
      "r3.k": "Hallway", "r3.t": "The\nhallways", "r3.s": "Every room its own door.",
      "c.1": "White", "c.2": "Navy", "c.3": "Burgundy", "c.4": "Olive", "c.5": "Graphite", "c.6": "Hidden",
      "w.eye": "Why Ko'kcha", "w.title": "A stronger door for your family", "w.sub": "Doors are made in our own factory in Tashkent — one team answers for everything from measuring to installation.",
      "w.1t": "Our own factory", "w.1": "No middlemen: from cutting MDF to painting, all in our workshop.",
      "w.2t": "Free measuring", "w.2": "A craftsman comes to your home and measures the doorway precisely.",
      "w.3t": "10-year warranty", "w.3": "Installed with Italian hardware and a warranty.",
      "e.eye": "Free measuring", "e.t1": "Let's choose", "e.t2": "your door together.", "e.addr": "Tashkent, Olmazor district, Sebzor, 7", "e.old": "Old design"
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

  /* 1. hero: o'rtadagi katta eshik va ostidagi eshiklar qatori */
  const LIST = ["k1035", "k1011", "k1014", "kc02", "k1013", "k1027", "k1010", "k1031"];
  const name = id => (PRODUCTS.find(p => p.id === id) || {}).name || id;
  const png = id => `assets/img/products/png/${id}.png`;
  let ci = 0;
  const door = $("#vDoor"), row = $("#vRow");
  LIST.forEach(id => { const im = new Image(); im.src = png(id); });
  function renderRow() {
    // markaziy eshikdan boshqalari: 2 tasi chapda, qolgani o'ngda
    const rest = LIST.map((id, i) => i).filter(i => i !== ci);
    const btn = i => `<button data-i="${i}" aria-label="${name(LIST[i])}"><img src="${png(LIST[i])}" alt=""></button>`;
    row.innerHTML = `<div class="side l">${rest.slice(0, 2).map(btn).join("")}</div><div class="gap"></div><div class="side r">${rest.slice(2, 6).map(btn).join("")}</div>`;
  }
  function show(i) {
    ci = (i + LIST.length) % LIST.length;
    door.classList.add("out");
    setTimeout(() => { door.src = png(LIST[ci]); $("#vName").textContent = name(LIST[ci]); door.classList.remove("out"); }, 380);
    renderRow();
  }
  row.addEventListener("click", e => { const b = e.target.closest("button"); if (b) show(+b.dataset.i); });
  $("#vPrev").addEventListener("click", () => show(ci - 1));
  $("#vNext2").addEventListener("click", () => show(ci + 1));
  renderRow();

  /* 2. portal: scroll bilan eshik ochiladi va ichkariga kiramiz */
  const portal = $("#vPortal"), scene = $("#vScene"), leaf = $("#vLeaf"), ptxt = $(".v-portal-txt");
  const seg = (p, a, b) => Math.min(1, Math.max(0, (p - a) / (b - a)));
  const ease = t => t < .5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;
  let target = 0, cur = 0, run = false;
  function draw(p) {
    const o = ease(seg(p, .05, .5)), z = ease(seg(p, .4, 1));
    leaf.style.transform = `rotateY(${-o * 98}deg)`;
    scene.style.transform = `scale(${1 + z * 2.6})`;
    ptxt.style.opacity = 1 - seg(p, .3, .55);
  }
  function tick() {
    cur += (target - cur) * .12;
    if (Math.abs(target - cur) < .0005) cur = target;
    draw(cur);
    if (cur !== target) requestAnimationFrame(tick); else run = false;
  }
  function onScroll() {
    const r = portal.getBoundingClientRect(), total = portal.offsetHeight - innerHeight;
    target = Math.min(1, Math.max(0, -r.top / (total || 1)));
    if (!run) { run = true; requestAnimationFrame(tick); }
  }
  addEventListener("scroll", onScroll, { passive: true });
  addEventListener("resize", onScroll);
  draw(0); onScroll();

  /* 3. xonalar */
  const io = new IntersectionObserver(es => es.forEach(en => { if (en.isIntersecting) en.target.classList.add("in"); }), { threshold: .3 });
  $$(".v-room").forEach(r => io.observe(r));
  $("#vSwatch").addEventListener("click", e => {
    const b = e.target.closest("button");
    if (!b) return;
    $$("#vSwatch button").forEach(x => x.classList.toggle("on", x === b));
    $$("#vLiving img").forEach(im => im.classList.toggle("on", im.dataset.v === b.dataset.v));
  });
})();
