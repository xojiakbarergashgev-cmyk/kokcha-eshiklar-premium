/* Ko'kcha — yangi dizayn (yangi.html): bitta uzluksiz yo'l — eshik ochiladi, ichkariga kiramiz, xona nomi chiqadi, keyingi qavat eshigiga o'tamiz */
(() => {
  const $ = (s, r = document) => r.querySelector(s), $$ = (s, r = document) => Array.from(r.querySelectorAll(s));
  const T = {
    uz: {
      "nav.catalog": "Katalog", "nav.try": "Uyingizda sinang", "nav.about": "Biz haqimizda", "nav.contact": "Aloqa", "hdr.tag": "MDF eshiklar\nfabrikasi",
      "i.eye": "Ko'kcha — eshiklar fabrikasi", "i.sub": "Uy bitta eshikdan boshlanadi.\nPastga suring — kiring.",
      "m.door": "Eshik",
      "r1.k": "Oshxona", "r1.t": "Oila\ndasturxoni", "r1.s": "Eshik ochiladi — uy to'ladi.",
      "r2.k": "Yo'lak", "r2.t": "Har bir\nxonaga", "r2.s": "O'z eshigi. Qavatma-qavat.",
      "r3.k": "Shourum", "r3.t": "Jonli\nko'ring", "r3.s": "Toshkent, Olmazor, Sebzor 7-uy.",
      "e.eye": "Har bir eshik ortida", "e.title": "Sizning\nuyingiz.", "e.cat": "Katalogni ko'rish", "e.addr": "Toshkent, Olmazor, Sebzor 7-uy", "e.old": "Eski dizayn"
    },
    ru: {
      "nav.catalog": "Каталог", "nav.try": "Примерить дома", "nav.about": "О нас", "nav.contact": "Контакты", "hdr.tag": "Фабрика\nдверей МДФ",
      "i.eye": "Ko'kcha — фабрика дверей", "i.sub": "Дом начинается с одной двери.\nЛистайте вниз — входите.",
      "m.door": "Дверь",
      "r1.k": "Столовая", "r1.t": "Семейный\nстол", "r1.s": "Дверь открывается — дом наполняется.",
      "r2.k": "Коридор", "r2.t": "Каждой\nкомнате", "r2.s": "Своя дверь. Этаж за этажом.",
      "r3.k": "Шоурум", "r3.t": "Вживую", "r3.s": "Ташкент, Олмазор, Себзор 7.",
      "e.eye": "За каждой дверью", "e.title": "Ваш\nдом.", "e.cat": "Смотреть каталог", "e.addr": "Ташкент, Олмазор, Себзор 7", "e.old": "Старый дизайн"
    },
    en: {
      "nav.catalog": "Catalog", "nav.try": "Try at home", "nav.about": "About", "nav.contact": "Contact", "hdr.tag": "MDF door\nfactory",
      "i.eye": "Ko'kcha — door factory", "i.sub": "A home begins with one door.\nScroll to enter.",
      "m.door": "Door",
      "r1.k": "Dining", "r1.t": "The dining\nroom", "r1.s": "A door opens — a home fills up.",
      "r2.k": "Hallway", "r2.t": "Every\nroom", "r2.s": "Its own door. Floor by floor.",
      "r3.k": "Showroom", "r3.t": "See it\nlive", "r3.s": "Tashkent, Olmazor, Sebzor 7.",
      "e.eye": "Behind every door", "e.title": "Your\nhome.", "e.cat": "View catalog", "e.addr": "Tashkent, Olmazor, Sebzor 7", "e.old": "Old design"
    }
  };
  let lang = "uz";
  try { lang = new URLSearchParams(location.search).get("lang") || localStorage.getItem("kp_lang") || "uz"; } catch (e) {}
  if (!T[lang]) lang = "uz";
  function applyLang() {
    document.documentElement.lang = lang;
    $$("[data-t]").forEach(el => { const v = T[lang][el.dataset.t]; if (v != null) el.textContent = v; });
    $$(".f-lang button").forEach(b => b.classList.toggle("on", b.dataset.lang === lang));
  }
  $$(".f-lang button").forEach(b => b.addEventListener("click", () => { lang = b.dataset.lang; try { localStorage.setItem("kp_lang", lang); } catch (e) {} applyLang(); }));
  applyLang();

  const walk = $("#fWalk"), floors = $$(".f-floor"), N = floors.length, intro = $("#fIntro"), prog = $("#fProg i");
  const parts = floors.map(f => ({ f, scene: $(".f-scene", f), leaf: $(".f-leaf", f), way: $(".f-way", f), room: $(".f-room", f), rimg: $(".f-room img", f), title: $(".f-title", f), model: $(".f-model", f) }));
  const seg = (t, a, b) => Math.min(1, Math.max(0, (t - a) / (b - a)));
  const io = t => t < .5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;
  const SW = .14; // qavatlar orasidagi o'tish ulushi
  function draw(p) {
    prog.style.transform = `scaleX(${p})`;
    intro.style.opacity = 1 - seg(p * N, .02, .12);
    parts.forEach((o, k) => {
      const t = p * N - k; // har bir qavatning o'z vaqti (0..1)
      // qavatma-qavat: oldingi qavat tepaga ketadi, keyingisi pastdan keladi
      let y = 0, blur = 0;
      if (t < 0) { const u = seg(t, -SW, 0); y = (1 - io(u)) * 100; blur = Math.sin(u * Math.PI) * 10; }
      else if (t > 1 - SW && k < N - 1) { const u = seg(t, 1 - SW, 1); y = -io(u) * 100; blur = Math.sin(u * Math.PI) * 10; }
      const vis = t > -SW && (t < 1 || k === N - 1);
      o.f.style.visibility = vis ? "visible" : "hidden";
      if (!vis) return;
      o.f.style.transform = `translateY(${y}%)`;
      o.f.style.filter = blur > .3 ? `blur(${blur.toFixed(1)}px)` : "none";
      // eshik ochiladi
      const open = io(seg(t, .1, .38));
      o.leaf.style.transform = `rotateY(${-open * 82}deg)`;
      // eshikdan ichkariga kiramiz
      const zin = io(seg(t, .3, .56));
      // eshik o'rni ekranni to'liq qoplaguncha kattalashadi (offsetWidth — transformsiz o'lcham)
      const fit = Math.max(innerWidth / o.way.offsetWidth, innerHeight / o.way.offsetHeight);
      const s = 1 + zin * (fit * 1.05 - 1);
      o.scene.style.transform = `scale(${s})`;
      // to'liq xona va FORMA uslubidagi sarlavha
      const rm = seg(t, .48, .6);
      o.room.style.opacity = rm;
      o.rimg.style.transform = `scale(${1.12 - .12 * seg(t, .48, .86)})`;
      o.title.style.opacity = seg(t, .58, .68) * (k === N - 1 ? 1 : 1 - seg(t, .82, .86));
      o.title.style.transform = `translateY(${(1 - seg(t, .58, .7)) * 30}px)`;
      o.model.style.opacity = 1 - seg(t, .12, .3);
    });
  }
  let target = 0, cur = 0, run = false;
  function tick() {
    cur += (target - cur) * .1;
    if (Math.abs(target - cur) < .0003) cur = target;
    draw(cur);
    if (cur !== target) requestAnimationFrame(tick); else run = false;
  }
  function onScroll() {
    const r = walk.getBoundingClientRect(), total = walk.offsetHeight - innerHeight;
    target = Math.min(1, Math.max(0, -r.top / (total || 1)));
    if (!run) { run = true; requestAnimationFrame(tick); }
  }
  addEventListener("scroll", onScroll, { passive: true });
  addEventListener("resize", () => { draw(cur); onScroll(); });
  draw(0); onScroll();
})();
