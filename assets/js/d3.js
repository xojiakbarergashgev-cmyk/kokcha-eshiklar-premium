/* Ko'kcha — "lyuks shourum" dizayni (dizayn.html): tarjima, eshik slayderi, turlar, sichqonchaga qarab burilish */
(() => {
  const $ = (s, r = document) => r.querySelector(s), $$ = (s, r = document) => Array.from(r.querySelectorAll(s));
  const T = {
    uz: {
      "nav.models": "Modellar", "nav.types": "Turlar", "nav.detail": "Sifat", "nav.try": "Uyingizda sinang", "nav.contact": "Aloqa",
      "h.eye": "Ko'kcha shourumi", "h.t1": "Eshik —", "h.t2": "uyning yuzi.", "h.sub": "Toshkentdagi o'z fabrikamizda MDF'dan yasalgan eshiklar. Har biri sizning o'lchamingizga, Italiya furniturasi bilan.",
      "h.cta": "Bepul o'lchov", "h.cat": "Butun katalog",
      "s.mat": "Material", "s.thick": "Qalinligi", "s.size": "O'lcham", "s.sizev": "Buyurtma bo'yicha", "s.hw": "Furnitura", "s.hwv": "Italiya", "s.more": "Batafsil",
      "type.full": "To'liq eshik", "type.glass": "Oynali eshik", "type.hidden": "Yashirin eshik",
      "t.eye": "Kolleksiya", "t.title": "O'zingizga mos eshik", "t.full": "To'liq", "t.glass": "Oynali", "t.hidden": "Yashirin",
      "d.eye": "Har bir detal", "d.title": "Sifat — mayda narsalarda",
      "d.1t": "O'z fabrikamiz", "d.1": "MDF kesishdan bo'yashgacha hammasi bizning ustaxonada.",
      "d.2t": "Aniq o'lcham", "d.2": "Har bir eshik sizning eshik o'rningizga moslab yasaladi.",
      "d.3t": "Italiya furniturasi", "d.3": "Tutqich va ilmoqlar uzoq yillar jimjit ishlaydi.",
      "d.4t": "10 yillik kafolat", "d.4": "O'rnatishgacha bitta jamoa javob beradi.",
      "r.eye": "Uyingizda", "r.title": "Eshigingizni o'z xonangizda ko'ring",
      "e.t1": "Eshigingizni", "e.t2": "birga tanlaymiz.", "e.addr": "Toshkent, Olmazor tumani, Sebzor massivi, 7-uy", "e.home": "Asosiy sayt"
    },
    ru: {
      "nav.models": "Модели", "nav.types": "Типы", "nav.detail": "Качество", "nav.try": "Примерить дома", "nav.contact": "Контакты",
      "h.eye": "Шоурум Ko'kcha", "h.t1": "Дверь —", "h.t2": "лицо дома.", "h.sub": "Двери из МДФ, сделанные на нашей фабрике в Ташкенте. Каждая — по вашему размеру, с итальянской фурнитурой.",
      "h.cta": "Бесплатный замер", "h.cat": "Весь каталог",
      "s.mat": "Материал", "s.thick": "Толщина", "s.size": "Размер", "s.sizev": "На заказ", "s.hw": "Фурнитура", "s.hwv": "Италия", "s.more": "Подробнее",
      "type.full": "Глухая дверь", "type.glass": "Дверь со стеклом", "type.hidden": "Скрытая дверь",
      "t.eye": "Коллекция", "t.title": "Дверь для вас", "t.full": "Глухие", "t.glass": "Со стеклом", "t.hidden": "Скрытые",
      "d.eye": "Каждая деталь", "d.title": "Качество — в мелочах",
      "d.1t": "Своя фабрика", "d.1": "От раскроя МДФ до покраски — всё в нашей мастерской.",
      "d.2t": "Точный размер", "d.2": "Каждая дверь делается под ваш проём.",
      "d.3t": "Итальянская фурнитура", "d.3": "Ручки и петли служат долгие годы бесшумно.",
      "d.4t": "Гарантия 10 лет", "d.4": "До установки отвечает одна команда.",
      "r.eye": "У вас дома", "r.title": "Посмотрите дверь в своей комнате",
      "e.t1": "Подберём", "e.t2": "вашу дверь вместе.", "e.addr": "Ташкент, Олмазорский р-н, массив Себзор, 7", "e.home": "Основной сайт"
    },
    en: {
      "nav.models": "Models", "nav.types": "Types", "nav.detail": "Quality", "nav.try": "Try at home", "nav.contact": "Contact",
      "h.eye": "Ko'kcha showroom", "h.t1": "A door is", "h.t2": "the face of a home.", "h.sub": "MDF doors made in our own factory in Tashkent. Each one to your size, with Italian hardware.",
      "h.cta": "Free measuring", "h.cat": "Full catalog",
      "s.mat": "Material", "s.thick": "Thickness", "s.size": "Size", "s.sizev": "Made to order", "s.hw": "Hardware", "s.hwv": "Italy", "s.more": "Details",
      "type.full": "Solid door", "type.glass": "Glass door", "type.hidden": "Hidden door",
      "t.eye": "Collection", "t.title": "A door that fits you", "t.full": "Solid", "t.glass": "Glass", "t.hidden": "Hidden",
      "d.eye": "Every detail", "d.title": "Quality lives in the details",
      "d.1t": "Our own factory", "d.1": "From cutting MDF to painting, all in our workshop.",
      "d.2t": "Exact size", "d.2": "Every door is made for your doorway.",
      "d.3t": "Italian hardware", "d.3": "Handles and hinges work silently for years.",
      "d.4t": "10-year warranty", "d.4": "One team answers for everything up to installation.",
      "r.eye": "At home", "r.title": "See the door in your own room",
      "e.t1": "Let's choose", "e.t2": "your door together.", "e.addr": "Tashkent, Olmazor district, Sebzor, 7", "e.home": "Main site"
    }
  };
  // fonsiz PNG eshiklar va turlari (main.js dagi ro'yxat bilan bir xil)
  const GLASS = ["k1034", "k1033", "k1032", "k1030", "k1028", "k1026", "k1022", "k1020", "k1019", "k1016", "k1005"];
  const HIDDEN = ["k1006", "k1029", "k1018"];
  const typeOf = id => GLASS.includes(id) ? "glass" : HIDDEN.includes(id) ? "hidden" : "full";
  const list = PRODUCTS.filter(p => p.real);
  const png = id => `assets/img/products/png/${id}.png`;

  let lang = "uz";
  try { lang = new URLSearchParams(location.search).get("lang") || localStorage.getItem("kp_lang") || "uz"; } catch (e) {}
  if (!T[lang]) lang = "uz";
  const t = k => T[lang][k] || k;
  function applyLang() {
    document.documentElement.lang = lang;
    $$("[data-t]").forEach(el => { el.textContent = t(el.dataset.t); });
    $$(".d-lang button").forEach(b => b.classList.toggle("on", b.dataset.lang === lang));
    $("#dType").textContent = t("type." + typeOf(list[ci].id));
    fillGrid();
  }

  /* 1. shourum slayderi */
  let ci = list.findIndex(p => p.id === "kc02");
  if (ci < 0) ci = 0;
  const box = $("#dBox"), door = $("#dDoor"), mirror = $("#dMirror"), thumbs = $("#dThumbs");
  thumbs.innerHTML = list.map((p, i) => `<button data-i="${i}" aria-label="${p.name}"><img src="${png(p.id)}" alt="" loading="lazy"></button>`).join("");
  $("#dTot").textContent = list.length;
  function show(i, instant) {
    ci = (i + list.length) % list.length;
    const p = list[ci];
    const set = () => {
      door.src = mirror.src = png(p.id);
      $("#dName").textContent = p.name;
      $("#dNum").textContent = String(ci + 1).padStart(2, "0");
      $("#dType").textContent = t("type." + typeOf(p.id));
      $("#dLink").href = "mahsulot.html?id=" + p.id;
      box.classList.remove("out");
    };
    if (instant) set(); else { box.classList.add("out"); setTimeout(set, 380); }
    $$("button", thumbs).forEach((b, j) => b.classList.toggle("on", j === ci));
    const on = $("button.on", thumbs);
    if (on) thumbs.scrollTo({ left: on.offsetLeft - thumbs.clientWidth / 2 + on.clientWidth / 2 });
  }
  thumbs.addEventListener("click", e => { const b = e.target.closest("button"); if (b) show(+b.dataset.i); });
  $("#dPrev").addEventListener("click", () => show(ci - 1));
  $("#dNext").addEventListener("click", () => show(ci + 1));
  addEventListener("keydown", e => { if (e.key === "ArrowRight") show(ci + 1); if (e.key === "ArrowLeft") show(ci - 1); });
  // eshik sichqonchaga qarab yengil buriladi
  $(".d-hero").addEventListener("mousemove", e => {
    const x = e.clientX / innerWidth - .5, y = e.clientY / innerHeight - .5;
    box.style.transform = `rotateY(${(x * 14).toFixed(2)}deg) rotateX(${(-y * 5).toFixed(2)}deg)`;
  });
  $(".d-hero").addEventListener("mouseleave", () => { box.style.transform = ""; });

  /* 2. turlar */
  let type = "full";
  function fillGrid() {
    $("#dGrid").innerHTML = list.filter(p => typeOf(p.id) === type).map(p =>
      `<a class="d-card" href="mahsulot.html?id=${p.id}"><img src="${png(p.id)}" alt="" loading="lazy"><b>${p.name}</b><span>${t("type." + type)}</span></a>`).join("");
  }
  $$("#dTabs button").forEach(b => b.addEventListener("click", () => {
    type = b.dataset.type;
    $$("#dTabs button").forEach(x => x.classList.toggle("on", x === b));
    fillGrid();
  }));

  $$(".d-lang button").forEach(b => b.addEventListener("click", () => { lang = b.dataset.lang; try { localStorage.setItem("kp_lang", lang); } catch (e) {} applyLang(); }));
  show(ci, true);
  applyLang();
})();
