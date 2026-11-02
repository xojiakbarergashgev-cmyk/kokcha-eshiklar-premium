// Ko'kcha Eshiklar Premium — asosiy skript
(function () {
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));
  const C = window.CONTACT, COLORS = window.COLORS, PRODUCTS = window.PRODUCTS, PORTFOLIO = window.PORTFOLIO;
  const page = document.body.dataset.page;

  /* ---------- Til ---------- */
  const LANGS = ["uz", "ru", "en"];
  const store = {
    get(k) { try { return localStorage.getItem(k); } catch (e) { return null; } },
    set(k, v) { try { localStorage.setItem(k, v); } catch (e) {} }
  };
  let lang = new URLSearchParams(location.search).get("lang");
  if (!LANGS.includes(lang)) lang = store.get("kp_lang");
  if (!LANGS.includes(lang)) lang = "uz";
  const t = k => (I18N[lang][k] != null ? I18N[lang][k] : I18N.uz[k] != null ? I18N.uz[k] : k);
  const fmt = n => (Math.round(n / 1000) * 1000).toLocaleString("ru-RU");
  const esc = s => String(s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const swatch = k => `linear-gradient(135deg,${COLORS[k][0]},${COLORS[k][1]})`;

  function setLang(l) {
    if (!LANGS.includes(l) || l === lang) return;
    lang = l;
    store.set("kp_lang", l);
    renderAll();
  }

  /* ---------- Yordamchi bloklar ---------- */
  const ICON = {
    tg: '<svg viewBox="0 0 24 24"><path d="M9.04 15.5l-.37 5.2c.53 0 .76-.23 1.04-.5l2.5-2.4 5.18 3.8c.95.53 1.62.25 1.88-.88l3.4-15.96c.3-1.4-.5-1.95-1.43-1.6L1.25 10.97c-1.37.53-1.35 1.3-.23 1.65l5.13 1.6L18.06 6.7c.56-.37 1.07-.17.65.2z"/></svg>',
    phone: '<svg viewBox="0 0 24 24"><path d="M6.6 10.8a15.1 15.1 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.25c1.1.37 2.33.57 3.6.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.45.57 3.57a1 1 0 0 1-.25 1z"/></svg>'
  };

  function door(style, color) {
    const c = COLORS[color] || COLORS.white;
    return `<div class="door d-${style}" style="--c1:${c[0]};--c2:${c[1]}"><div class="leaf"><i class="pn p1"></i><i class="pn p2"></i><i class="pn p3"></i><i class="gl"></i><i class="hd"></i></div></div>`;
  }

  /* ---------- Yuklanish ekrani va scroll chizig'i ---------- */
  const seen = (() => { try { return sessionStorage.getItem("kp_seen"); } catch (e) { return null; } })();
  const loader = document.createElement("div");
  loader.className = "loader";
  loader.innerHTML = `<div class="ld-door"><i></i></div><div class="ld-txt">KO'KCHA<span>ESHIKLAR · PREMIUM</span></div>`;
  document.body.append(loader);
  document.body.classList.add("loading");
  const progress = document.createElement("div");
  progress.className = "progress";
  document.body.append(progress);
  let loaderHidden = false;
  function hideLoader() {
    if (loaderHidden) return;
    loaderHidden = true;
    try { sessionStorage.setItem("kp_seen", "1"); } catch (e) {}
    loader.classList.add("done");
    document.body.classList.remove("loading");
    setTimeout(() => loader.remove(), 1100);
  }
  const wait = seen ? 150 : 900;
  if (document.readyState === "complete") setTimeout(hideLoader, wait);
  else addEventListener("load", () => setTimeout(hideLoader, wait));
  setTimeout(hideLoader, 3500);

  /* ---------- Sarlavhalarni so'zlarga bo'lish ---------- */
  function splitText() {
    $$(".h2, .phero h1, .hero h1 > span, .hero h1 > em, .pp h1, .col h3").forEach(el => {
      if (el.querySelector(".w")) return;
      const words = el.textContent.trim().split(/\s+/);
      el.innerHTML = words.map((w, i) => `<span class="w"><span style="--i:${i}">${esc(w)}</span></span>`).join(" ");
      if (!el.closest(".rv")) el.classList.add("split", "rv");
    });
  }

  /* ---------- Raqamlar sanog'i ---------- */
  function countUp(el) {
    if (el._counted) return;
    el._counted = true;
    const end = +el.dataset.count, suf = el.dataset.suf || "", t0 = performance.now() + (loaderHidden ? 0 : 900);
    const step = now => {
      const p = Math.max(0, Math.min(1, (now - t0) / 1800)), e = 1 - Math.pow(1 - p, 3);
      el.textContent = Math.round(end * e).toLocaleString("ru-RU") + suf;
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }

  /* ---------- 3D: eshik sichqonchaga qarab buriladi ---------- */
  let tiltHost = null;
  const resetTilt = h => { const d = h && $(".door", h); if (d) { d.style.removeProperty("--tx"); d.style.removeProperty("--ty"); } };
  document.addEventListener("mousemove", e => {
    const h = e.target.closest(".hero, .media");
    if (tiltHost && tiltHost !== h) resetTilt(tiltHost);
    tiltHost = h;
    if (!h) return;
    const d = $(".door", h);
    if (!d) return;
    const r = h.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5, y = (e.clientY - r.top) / r.height - 0.5;
    d.style.setProperty("--ty", (x * 26).toFixed(1) + "deg");
    d.style.setProperty("--tx", (-y * 8).toFixed(1) + "deg");
  }, { passive: true });
  document.addEventListener("mouseleave", () => resetTilt(tiltHost));

  const logo = () => `<a href="index.html" class="logo" aria-label="Ko'kcha Eshiklar Premium">
    <img class="logo-img" src="assets/img/logo.png" alt="Ko'kcha Eshiklar Premium" onload="this.parentNode.classList.add('has-img')" onerror="this.remove()">
    <span class="logo-fb"><span class="logo-mark"></span><span class="logo-txt"><b>KO'KCHA</b><span>ESHIKLAR · PREMIUM</span></span></span></a>`;

  const NAV = [["home", "index.html"], ["catalog", "katalog.html"], ["portfolio", "ishlarimiz.html"], ["about", "biz-haqimizda.html"], ["ideas", "goyalar.html"], ["contact", "aloqa.html"]];
  const langBtns = () => LANGS.map(l => `<button data-lang="${l}" class="${l === lang ? "on" : ""}">${l.toUpperCase()}</button>`).join("");

  function header() {
    const links = NAV.map(([k, h]) => `<a href="${h}" class="${page === k || (page === "product" && k === "catalog") ? "on" : ""}">${t("nav." + k)}</a>`).join("");
    return `<header class="hdr" id="hdr">
      <div class="hdr-top"><div class="container"><span>${t("top.addr")}</span><span>${t("top.free")}</span><span>${t("top.hours")}</span></div></div>
      <div class="hdr-main"><div class="container">
        ${logo()}
        <nav class="nav">${links}</nav>
        <div class="hdr-r">
          <a class="hdr-phone" href="tel:${C.tel}">${C.phone}</a>
          <div class="langs">${langBtns()}</div>
          <button class="btn btn-gold btn-sm" data-order="">${t("cta.order")}</button>
          <button class="burger" data-drawer aria-label="Menu"><span></span><span></span></button>
        </div>
      </div></div>
    </header>
    <div class="drawer" id="drawer">
      <div class="drawer-top">${logo()}<button class="x" data-drawer aria-label="Close">×</button></div>
      <nav>${links}</nav>
      <div class="langs">${langBtns()}</div>
      <div class="drawer-c">
        <a href="tel:${C.tel}"><b>${C.phone}</b></a>
        <a>${t("top.addr")} · ${t("top.hours")}</a>
        <button class="btn btn-gold" data-order="">${t("cta.measure")}</button>
      </div>
    </div>`;
  }

  function footer() {
    const cats = ["classic", "neoclassic", "modern", "glass", "hidden", "entrance"];
    return `<footer class="ftr"><div class="container">
      <div class="ftr-top">
        <div>${logo()}<p>${t("footer.desc")}</p>
          <div class="soc"><a href="https://t.me/${C.telegram}" target="_blank" rel="noopener">TG</a><a href="${C.instagram}">IG</a><a href="${C.facebook}">FB</a><a href="${C.youtube}">YT</a></div>
        </div>
        <div><h4>${t("nav.catalog")}</h4><ul>${cats.map(c => `<li><a href="katalog.html?cat=${c}">${t("cat." + c)}</a></li>`).join("")}</ul></div>
        <div><h4>${t("footer.company")}</h4><ul>${NAV.slice(2).map(([k, h]) => `<li><a href="${h}">${t("nav." + k)}</a></li>`).join("")}</ul></div>
        <div><h4>${t("footer.contacts")}</h4><ul>
          <li><a href="tel:${C.tel}">${C.phone}</a></li>
          <li><a href="https://t.me/${C.telegram}" target="_blank" rel="noopener">@${C.telegram}</a></li>
          <li><a href="mailto:${C.email}">${C.email}</a></li>
          <li>${t("top.addr")}</li><li>${t("top.hours")}</li>
        </ul></div>
      </div>
      <div class="ftr-bot"><span>© ${new Date().getFullYear()} Ko'kcha Eshiklar Premium. ${t("footer.rights")}</span><span>${t("footer.privacy")}</span></div>
    </div></footer>`;
  }

  function formHTML() {
    return `<form class="js-form"><div class="ff">
      <div class="frow">
        <div class="fld"><label>${t("form.name")}</label><input name="name" autocomplete="name" required></div>
        <div class="fld"><label>${t("form.phone")}</label><input name="phone" type="tel" autocomplete="tel" placeholder="+998" required></div>
      </div>
      <div class="frow">
        <div class="fld"><label>${t("form.type")}</label><select name="type"><option>${t("form.t1")}</option><option>${t("form.t2")}</option><option>${t("form.t3")}</option></select></div>
        <div class="fld"><label>${t("form.qty")}</label><input name="qty" type="number" min="1" value="1"></div>
      </div>
      <div class="fld"><label>${t("form.comment")}</label><input name="comment" placeholder="${t("form.comment_ph")}"></div>
      <button class="btn btn-gold" type="submit">${t("cta.send")} <span class="arr">→</span></button>
      <p class="form-err" role="alert"></p>
      <p class="note">${t("form.privacy")}</p>
    </div><div class="form-ok">${t("form.ok")}</div></form>`;
  }

  function extras() {
    return `<div class="fab">
        <a class="tg" href="https://t.me/${C.telegram}" target="_blank" rel="noopener" aria-label="Telegram">${ICON.tg}</a>
        <a class="ph-btn" href="tel:${C.tel}" aria-label="${t("cta.call")}">${ICON.phone}</a>
      </div>
      <div class="modal" id="orderModal"><div class="modal-box">
        <button class="x" data-close aria-label="Close">×</button>
        <h2>${t("modal.title")}</h2><p>${t("modal.sub")}</p>${formHTML()}
      </div></div>
      <div class="modal lb" id="lb"><div class="lb-box">
        <button class="x" data-close aria-label="Close">×</button>
        <div class="lb-media" id="lbMedia"></div><div class="lb-cap" id="lbCap"></div>
      </div></div>`;
  }

  const priceHTML = p => p.price
    ? `<span>${t("from")}</span><b>${fmt(p.price)} ${t("sum")}</b>`
    : `<span>${t("price.lbl")}</span><b>${t("price.ask")}</b>`;

  function card(p, i = 0) {
    const img = p.real
      ? `<div class="ph" data-img="products/${p.id}-1.jpg"></div>${(p.imgs || 3) > 1 ? `<div class="ph alt" data-img="products/${p.id}-2.jpg"></div>` : ""}`
      : `<div class="ph" data-img="products/${p.id}.jpg"></div>`;
    return `<a class="pcard rv" style="--d:${(i % 3) * 0.1}s" href="mahsulot.html?id=${p.id}">
      <div class="media${p.real ? " photo" : ""}">${p.badge ? `<span class="pbadge ${p.badge}">${t("badge." + p.badge)}</span>` : ""}
        ${img}${door(p.door, p.color)}</div>
      <div class="pinfo">
        <div><small>${t("cat." + p.cat)}</small><h3>${p.name}</h3><div class="mat">${t("mat." + p.mat)}</div>
          <div class="sw">${p.colors.length ? p.colors.map(c => `<i style="background:${swatch(c)}" title="${t("c." + c)}"></i>`).join("") : `<span class="anyc">${t("p.allcolors")}</span>`}</div></div>
        <div class="pprice">${priceHTML(p)}</div>
      </div></a>`;
  }

  function pfItem(it, cls = "", i = 0) {
    const n = PORTFOLIO.indexOf(it) + 1;
    return `<div class="it rv ${cls}" style="--d:${(i % 3) * 0.1}s" data-pf="${n - 1}">
      <div class="media"><div class="ph" data-img="portfolio/${n}.jpg"></div>${door(it.door, it.color)}</div>
      <div class="cap"><small>Ko'kcha Eshiklar</small><h3>${t("pf." + it.type)}</h3></div>
    </div>`;
  }

  /* ---------- Rasmlar ----------
     data-img="a.jpg|b.jpg" — assets/img/ ichidan ketma-ket qidiriladi.
     Rasm topilmasa, chizilgan eshik va rasm nomi ko'rsatiladi. */
  function loadImages(root = document) {
    $$("[data-img]", root).forEach(el => {
      const key = el.dataset.img;
      if (el._src === key) return;
      el._src = key;
      const list = key.split("|");
      const host = el.closest("[data-host]") || el.closest(".media");
      el.dataset.name = list[0];
      el.classList.remove("loaded", "missing");
      el.style.backgroundImage = "";
      if (host) host.classList.remove("has-img");
      let i = 0;
      const next = () => {
        if (i >= list.length) { el.classList.add("missing"); return; }
        const src = "assets/img/" + list[i++];
        const im = new Image();
        im.onload = () => {
          if (el._src !== key) return;
          el.style.backgroundImage = `url("${src}")`;
          el.classList.add("loaded");
          if (host) host.classList.add("has-img");
        };
        im.onerror = next;
        im.src = src;
      };
      next();
    });
  }

  /* ---------- Animatsiya ---------- */
  let io;
  function reveal(root = document) {
    const els = $$(".rv:not(.in)", root);
    if (!("IntersectionObserver" in window)) { els.forEach(e => e.classList.add("in")); $$("[data-count]").forEach(countUp); return; }
    io = io || new IntersectionObserver(es => es.forEach(e => {
      if (!e.isIntersecting) return;
      e.target.classList.add("in");
      $$("[data-count]", e.target).forEach(countUp);
      io.unobserve(e.target);
    }), { threshold: 0.08, rootMargin: "0px 0px -40px 0px" });
    els.forEach(e => io.observe(e));
  }

  function applyI18n(root = document) {
    $$("[data-i18n]", root).forEach(e => { e.textContent = t(e.dataset.i18n); });
    $$("[data-i18n-ph]", root).forEach(e => { e.placeholder = t(e.dataset.i18nPh); });
  }

  /* ---------- Bosh sahifa ---------- */
  const CFG_MODELS = [["classic", "Vena"], ["arch", "Firenze"], ["glass", "Aurora"], ["grid", "Venezia"], ["lines", "Milano"], ["inserts", "Monaco"], ["vglass", "Berlin"], ["flat", "Invisible"]];
  const cfg = { m: "glass", c: "navy" };

  function renderHome() {
    const mq = $("#mq");
    if (mq) {
      const items = [1, 2, 3, 4, 5, 6].map(i => `<span>${t("mq." + i)}</span>`).join("");
      mq.innerHTML = items + items;
    }
    const f = $("#featured");
    if (f) f.innerHTML = PRODUCTS.slice(0, 6).map(card).join("");
    const pf = $("#pfPreview");
    if (pf) pf.innerHTML = PORTFOLIO.slice(0, 4).map((it, i) => pfItem(it, ["big", "tall", "", ""][i], i)).join("");
    renderCfg();
    const art = $(".hero-art");
    if (art && !$(".dust", art)) {
      art.insertAdjacentHTML("beforeend", `<div class="dust">${Array.from({ length: 22 }, () =>
        `<i style="left:${20 + Math.random() * 60}%;--sz:${(1.5 + Math.random() * 2.5).toFixed(1)}px;--dx:${(Math.random() * 60 - 30).toFixed(0)}px;animation-duration:${(6 + Math.random() * 6).toFixed(1)}s;animation-delay:${(Math.random() * 8).toFixed(1)}s"></i>`).join("")}</div>`);
    }
  }

  function renderCfg() {
    const panel = $("#cfgPanel"), stage = $("#cfgStage");
    if (!panel) return;
    stage.innerHTML = door(cfg.m, cfg.c);
    panel.innerHTML = `<div class="cfg-l">${t("cfg.model")}</div>
      <div class="cfg-models">${CFG_MODELS.map(([k, n]) => `<button data-m="${k}" class="${k === cfg.m ? "on" : ""}">${n}</button>`).join("")}</div>
      <div class="cfg-l">${t("cfg.color")}: <b id="cfgName">${t("c." + cfg.c)}</b></div>
      <div class="cfg-colors">${Object.keys(COLORS).map(k => `<button data-c="${k}" class="${k === cfg.c ? "on" : ""}" style="--sw:${swatch(k)}" title="${t("c." + k)}" aria-label="${t("c." + k)}"></button>`).join("")}</div>
      <div class="cfg-btns"><button class="btn btn-gold" id="cfgOrder" data-order="">${t("cta.order")} <span class="arr">→</span></button><a class="btn btn-line" href="katalog.html">${t("cta.catalog")}</a></div>`;
    updateCfg();
  }

  function updateCfg() {
    const d = $("#cfgStage .door"), c = COLORS[cfg.c];
    d.className = "door d-" + cfg.m;
    d.style.setProperty("--c1", c[0]);
    d.style.setProperty("--c2", c[1]);
    $$("#cfgPanel [data-m]").forEach(b => b.classList.toggle("on", b.dataset.m === cfg.m));
    $$("#cfgPanel [data-c]").forEach(b => b.classList.toggle("on", b.dataset.c === cfg.c));
    $("#cfgName").textContent = t("c." + cfg.c);
    $("#cfgOrder").dataset.order = CFG_MODELS.find(x => x[0] === cfg.m)[1] + " — " + t("c." + cfg.c);
  }

  /* ---------- Katalog ---------- */
  const CATS = ["all", "classic", "neoclassic", "modern", "glass", "hidden", "entrance"];
  const PAGE_SIZE = 12;
  const cs = { cat: "all", color: "all", q: "", sort: "pop", limit: PAGE_SIZE };
  const urlCat = new URLSearchParams(location.search).get("cat");
  if (CATS.includes(urlCat)) cs.cat = urlCat;

  function renderCatalog() {
    const root = $("#catalog");
    if (!root) return;
    root.innerHTML = `<div class="tools">
        <div class="chips">${CATS.map(c => `<button class="chip ${cs.cat === c ? "on" : ""}" data-cat="${c}">${c === "all" ? t("cat.all") : t("cat." + c)}</button>`).join("")}</div>
        <div class="tools-r">
          <input class="search" type="search" placeholder="${t("cat.search")}" value="${esc(cs.q)}">
          <select class="sort">${["pop", "asc", "desc"].map(o => `<option value="${o}" ${cs.sort === o ? "selected" : ""}>${t("sort." + o)}</option>`).join("")}</select>
        </div>
      </div>
      <div class="colorbar"><span>${t("cat.colors")}:</span>
        <button class="cdot all ${cs.color === "all" ? "on" : ""}" data-color="all">${t("cat.all")}</button>
        ${Object.keys(COLORS).map(k => `<button class="cdot ${cs.color === k ? "on" : ""}" data-color="${k}" style="--sw:${swatch(k)}" title="${t("c." + k)}" aria-label="${t("c." + k)}"></button>`).join("")}
      </div>
      <div class="count"><span id="count"></span><span>${t("cat.price_note")}</span></div>
      <div class="pgrid" id="grid"></div>
      <div class="more" id="more"></div>`;
    drawGrid();
  }

  function drawGrid() {
    const q = cs.q.trim().toLowerCase();
    let list = PRODUCTS.filter(p =>
      (cs.cat === "all" || p.cat === cs.cat) &&
      (cs.color === "all" || p.colors.includes(cs.color)) &&
      (!q || p.name.toLowerCase().includes(q)));
    const pr = p => p.price || Infinity;
    if (cs.sort === "asc") list = list.slice().sort((a, b) => pr(a) - pr(b));
    if (cs.sort === "desc") list = list.slice().sort((a, b) => (b.price || 0) - (a.price || 0));
    const grid = $("#grid");
    const rest = list.length - cs.limit;
    grid.innerHTML = list.length ? list.slice(0, cs.limit).map(card).join("")
      : `<div class="empty"><span class="serif">${t("cat.empty")}</span><button class="btn btn-line" data-reset>${t("cat.reset")}</button></div>`;
    $("#more").innerHTML = rest > 0 ? `<button class="btn btn-line" data-more>${t("cat.more")} (${rest})</button>` : "";
    $("#count").textContent = `${t("cat.found")} ${list.length} ${t("cat.models")}`;
    loadImages(grid);
    reveal(grid);
  }

  /* ---------- Mahsulot sahifasi ---------- */
  const SIZES = { "600": 0.95, "700": 1, "800": 1, "900": 1.1, custom: 1.25 };
  const product = PRODUCTS.find(p => p.id === new URLSearchParams(location.search).get("id")) || PRODUCTS[0];
  const ps = { color: product.color, size: "800", side: "left", set: "1", img: 1 };

  function seg(attr, cur, opts) {
    return `<div class="seg">${opts.map(([v, label]) => `<button data-${attr}="${v}" class="${v === cur ? "on" : ""}">${label}</button>`).join("")}</div>`;
  }

  function renderProduct() {
    const root = $("#pp");
    if (!root) return;
    const p = product;
    document.body.dataset.titleText = p.name;
    $("#ppName").textContent = p.name;
    $("#ppCrumb").textContent = p.name;
    $("#ppCat").textContent = t("cat." + p.cat);
    $("#ppCat").href = "katalog.html?cat=" + p.cat;
    const price = p.price * SIZES[ps.size] * (ps.set === "2" ? 1.35 : 1);
    const colorTxt = p.colors.length ? t("c." + ps.color) + ", " : "";
    const orderTxt = `${p.name} — ${colorTxt}${ps.size === "custom" ? t("p.custom") : "2000×" + ps.size}, ${ps.set === "2" ? t("p.set2") : t("p.set1")}`;
    const stage = p.real
      ? `<div class="pp-gal"><div class="pp-stage media photo"><div class="ph" data-img="products/${p.id}-${ps.img}.jpg"></div>${door(p.door, ps.color)}</div>
          <div class="pp-thumbs">${(p.imgs === 1 ? [] : [1, 2, 3]).map(n => `<button class="media photo ${n === ps.img ? "on" : ""}" data-pimg="${n}" aria-label="${n}"><div class="ph" data-img="products/${p.id}-${n}.jpg"></div></button>`).join("")}</div></div>`
      : `<div class="pp-stage media"><div class="ph" data-img="products/${p.id}-${ps.color}.jpg|products/${p.id}.jpg"></div>${door(p.door, ps.color)}</div>`;
    root.innerHTML = `<div class="pp">
      ${stage}
      <div>
        ${p.badge ? `<span class="pbadge ${p.badge}" style="position:static;display:inline-block;margin-bottom:22px">${t("badge." + p.badge)}</span>` : ""}
        <div class="cat">${t("cat." + p.cat)} · ${t("mat." + p.mat)}</div>
        <p class="lead" style="margin-top:14px">${t("desc." + p.cat)}</p>
        <div class="pp-price">${p.price ? `${ps.size === "custom" ? t("from") + " " : ""}${fmt(price)} <small>${t("sum")}</small>` : `${t("price.ask")}`}</div>
        <div class="pp-inc">${ps.set === "2" ? t("p.inc2") : t("p.inc1")}</div>
        <div class="opts">
          ${p.colors.length ? `<div class="cfg-l">${t("p.color")}: <b>${t("c." + ps.color)}</b></div>
          <div class="cfg-colors">${p.colors.map(k => `<button data-pc="${k}" class="${k === ps.color ? "on" : ""}" style="--sw:${swatch(k)}" title="${t("c." + k)}" aria-label="${t("c." + k)}"></button>`).join("")}</div>`
          : `<div class="cfg-l">${t("p.color")}: <b>${t("p.allcolors")}</b></div>`}
          <div class="cfg-l">${t("p.size")}</div>
          ${seg("psize", ps.size, Object.keys(SIZES).map(s => [s, s === "custom" ? t("p.custom") : "2000×" + s]))}
          <div class="cfg-l">${t("p.side")}</div>
          ${seg("pside", ps.side, [["left", t("p.left")], ["right", t("p.right")]])}
          <div class="cfg-l">${t("p.set")}</div>
          ${seg("pset", ps.set, [["1", t("p.set1")], ["2", t("p.set2")]])}
        </div>
        <div class="cfg-btns">
          <button class="btn btn-gold" data-order="${esc(orderTxt)}">${t("cta.order")} <span class="arr">→</span></button>
          <a class="btn btn-line" href="https://t.me/${C.telegram}" target="_blank" rel="noopener">${t("p.consult")}</a>
        </div>
        <div class="specs"><h3>${t("p.specs")}</h3><dl>
          <dt>${t("spec.cat")}</dt><dd>${t("cat." + p.cat)}</dd>
          <dt>${t("spec.mat")}</dt><dd>${t("mat." + p.mat)}</dd>
          <dt>${t("spec.base")}</dt><dd>${t("spec.base_v")}</dd>
          <dt>${t("spec.fit")}</dt><dd>${t("spec.fit_v")}</dd>
          <dt>${t("spec.snd")}</dt><dd>${t("spec.snd_v")}</dd>
          <dt>${t("spec.time")}</dt><dd>${t("spec.time_v")}</dd>
          <dt>${t("spec.war")}</dt><dd>${t("spec.war_v")}</dd>
        </dl></div>
      </div>
    </div>`;
    const rel = PRODUCTS.filter(x => x.id !== p.id).sort((a, b) => (b.cat === p.cat) - (a.cat === p.cat)).slice(0, 3);
    $("#related").innerHTML = rel.map(card).join("");
  }

  /* ---------- Portfolio ---------- */
  let pfType = "all";
  function renderPortfolio() {
    const root = $("#pfPage");
    if (!root) return;
    const types = ["all", "interior", "showroom"];
    $("#pfFilters").innerHTML = types.map(k => `<button class="chip ${pfType === k ? "on" : ""}" data-pff="${k}">${k === "all" ? t("cat.all") : t("pf.f." + k)}</button>`).join("");
    root.innerHTML = PORTFOLIO.filter(it => pfType === "all" || it.type === pfType).map((it, i) => pfItem(it, "", i)).join("");
    loadImages(root);
    reveal(root);
  }

  function openLightbox(i) {
    const it = PORTFOLIO[i];
    const src = $(`[data-pf="${i}"] .media`);
    $("#lbMedia").innerHTML = src ? src.outerHTML : "";
    $("#lbCap").innerHTML = `<h3>${t("pf." + it.type)}</h3><span>Ko'kcha Eshiklar</span>`;
    $("#lb").classList.add("open");
  }

  /* ---------- Modal ---------- */
  function openOrder(note) {
    const m = $("#orderModal");
    const f = $("form", m);
    f.classList.remove("sent");
    f.reset();
    if (note) f.elements.comment.value = note;
    m.classList.add("open");
    closeDrawer();
  }
  function closeDrawer() { const d = $("#drawer"); if (d) d.classList.remove("open"); }
  function closeAll() { $$(".modal.open").forEach(m => m.classList.remove("open")); closeDrawer(); }

  /* ---------- Hodisalar ---------- */
  document.addEventListener("click", e => {
    const el = e.target.closest("[data-lang],[data-order],[data-drawer],[data-close],[data-m],[data-c],[data-cat],[data-color],[data-reset],[data-more],[data-pc],[data-psize],[data-pside],[data-pset],[data-pimg],[data-pff],[data-pf]");
    if (!el) { if (e.target.classList.contains("modal")) closeAll(); return; }
    const d = el.dataset;
    if (d.lang) setLang(d.lang);
    else if ("order" in d) { e.preventDefault(); openOrder(d.order); }
    else if ("drawer" in d) $("#drawer").classList.toggle("open");
    else if ("close" in d) closeAll();
    else if (d.m) { cfg.m = d.m; updateCfg(); }
    else if (d.c) { cfg.c = d.c; updateCfg(); }
    else if (d.cat) { cs.cat = d.cat; cs.limit = PAGE_SIZE; renderCatalog(); }
    else if (d.color) { cs.color = d.color; cs.limit = PAGE_SIZE; renderCatalog(); }
    else if ("reset" in d) { Object.assign(cs, { cat: "all", color: "all", q: "", limit: PAGE_SIZE }); renderCatalog(); }
    else if ("more" in d) { cs.limit += PAGE_SIZE; drawGrid(); }
    else if (d.pc) { ps.color = d.pc; renderProduct(); loadImages(); }
    else if (d.psize) { ps.size = d.psize; renderProduct(); loadImages(); }
    else if (d.pside) { ps.side = d.pside; renderProduct(); loadImages(); }
    else if (d.pset) { ps.set = d.pset; renderProduct(); loadImages(); }
    else if (d.pimg) { ps.img = +d.pimg; renderProduct(); loadImages(); }
    else if (d.pff) { pfType = d.pff; renderPortfolio(); }
    else if (d.pf) openLightbox(+d.pf);
  });
  document.addEventListener("input", e => { if (e.target.matches(".search")) { cs.q = e.target.value; cs.limit = PAGE_SIZE; drawGrid(); } });
  document.addEventListener("change", e => { if (e.target.matches(".sort")) { cs.sort = e.target.value; cs.limit = PAGE_SIZE; drawGrid(); } });
  document.addEventListener("keydown", e => { if (e.key === "Escape") closeAll(); });

  // Arizalar Supabase'dagi kokcha_arizalar jadvaliga yoziladi (sozlamalar: data.js → SUPABASE).
  document.addEventListener("submit", async e => {
    const f = e.target.closest(".js-form");
    if (!f) return;
    e.preventDefault();
    const btn = $("button[type=submit]", f), err = $(".form-err", f);
    const v = f.elements;
    const row = {
      name: v.name.value.trim(),
      phone: v.phone.value.trim(),
      door_type: v.type.value,
      qty: Math.max(1, Math.min(1000, parseInt(v.qty.value, 10) || 1)),
      comment: v.comment.value.trim() || null,
      page: location.pathname.split("/").pop() || "index.html",
      lang
    };
    btn.disabled = true;
    if (err) err.textContent = "";
    try {
      const S = window.SUPABASE;
      const res = await fetch(`${S.url}/rest/v1/${S.table}`, {
        method: "POST",
        headers: { apikey: S.anonKey, Authorization: `Bearer ${S.anonKey}`, "Content-Type": "application/json", Prefer: "return=minimal" },
        body: JSON.stringify(row)
      });
      if (!res.ok) throw new Error(res.status);
      f.classList.add("sent");
    } catch (x) {
      if (err) err.textContent = t("form.err");
    } finally {
      btn.disabled = false;
    }
  });

  const onScroll = () => {
    const h = $("#hdr");
    if (h) h.classList.toggle("solid", scrollY > 30);
    const max = document.documentElement.scrollHeight - innerHeight;
    progress.style.transform = `scaleX(${max > 0 ? scrollY / max : 0})`;
  };
  addEventListener("scroll", onScroll, { passive: true });

  /* ---------- Chizish ---------- */
  function renderAll() {
    document.documentElement.lang = lang;
    $("#site-header").innerHTML = header();
    $("#site-footer").innerHTML = footer();
    $("#site-extra").innerHTML = extras();
    $$("[data-form]").forEach(el => { el.innerHTML = formHTML(); });
    applyI18n();
    if (page === "home") renderHome();
    if (page === "catalog") renderCatalog();
    if (page === "product") renderProduct();
    if (page === "portfolio") renderPortfolio();
    const tk = document.body.dataset.title;
    const name = document.body.dataset.titleText || (tk ? t(tk) : "");
    document.title = (name ? name + " — " : "") + "Ko'kcha Eshiklar Premium";
    splitText();
    loadImages();
    reveal();
    onScroll();
  }

  renderAll();
})();
