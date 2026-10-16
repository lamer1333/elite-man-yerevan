/* Shared script for the inner pages of the Elite Man Yerevan prototype.
   One place for: the T dictionary (HY/RU/EN), header + drawer + footer, photo slots,
   soft reveal, procedural cloth, the product list, product cards and the booking form.
   A page adds its own words with EM.add(), registers renderers with EM.onLang() and calls EM.start(). */
(function () {
  document.documentElement.classList.add("js");

  var T = { ru: {}, hy: {}, en: {} };
  function add(d) { ["ru", "hy", "en"].forEach(function (l) { if (d[l]) Object.keys(d[l]).forEach(function (k) { T[l][k] = d[l][k]; }); }); }

  add({
    ru: {
      cta_book: "Записаться", tab_book: "Записаться на примерку", menu: "Меню", close: "Закрыть",
      nav_home: "Главная", nav_catalog: "Каталог", nav_atelier: "Пошив на заказ", nav_fabrics: "Ткани", nav_look: "Образ месяца", nav_groom: "Жениху", nav_contacts: "Контакты", nav_pages: "Все страницы прототипа",
      season: "Осень–зима 2026", quick: "Быстрый просмотр", more: "Подробнее",
      cat_all: "Все", cat_suits: "Костюмы", cat_tuxedo: "Смокинги", cat_jackets: "Пиджаки", cat_coats: "Верхняя одежда", cat_shoes: "Обувь",
      fb_wool: "Шерсть", fb_cashmere: "С кашемиром", fb_linen: "Лён", fb_velvet: "Бархат", fb_leather: "Кожа и замша",
      all: "Все", aw: "Осень–зима", ss: "Весна–лето", yr: "Круглый год",
      lin_silk: "Шёлк и вискоза", lin_visc: "Вискоза", lin_cupro: "Купро", lin_half: "Полуподкладка из купро", lin_leather: "Телячья кожа",
      btn_horn: "Натуральный рог", btn_satin: "Обтянуты атласом", btn_pearl: "Перламутр", btn_metal: "Золотистый металл", btn_none: "Без пуговиц",
      sole_leather: "Кожаная, рантовая", sole_rubber: "Кожа с резиновой вставкой",
      d_comp: "Состав", d_upper: "Верх", d_sole: "Подошва", qv_lining: "Подкладка", qv_buttons: "Пуговицы", qv_fit: "Подгонка", qv_fit_v: "В ателье бутика",
      qv_size: "Размер", qv_ask: "Спросить в WhatsApp", band_btn: "Записаться на примерку",
      gm: "г/м", it: "Италия", en: "Англия", au: "Австралия",
      b_label: "Запись", b_title: "Запишитесь на примерку", b_sub: "Выберите день и время. Мы подтвердим запись в WhatsApp.",
      b_service: "Услуга", o_rtw: "Примерка готовой коллекции", o_mtm: "Пошив на заказ", o_wed: "Свадебный образ",
      b_day: "День", b_time: "Время", b_name: "Имя", b_phone: "Телефон", b_note: "Комментарий", b_note_ph: "Например, ткань или повод",
      b_wdate: "Дата свадьбы", b_count: "Сколько костюмов", c_1: "Только жених", c_2: "2–3", c_4: "4–6", c_7: "7 и больше",
      b_submit: "Отправить заявку", e_slot: "Выберите день и время.", e_contact: "Укажите имя и телефон.",
      b_done: "Спасибо, {name}! Мы приняли заявку на {date}, {time}.",
      b_proto: "Это прототип: заявка никуда не отправляется. На рабочем сайте она придёт в WhatsApp бутика.", b_again: "Новая заявка",
      f_about: "Мужские костюмы из итальянских, английских и австралийских тканей. Готовая коллекция и пошив на заказ.",
      f_clients: "Покупателям", f_contacts: "Контакты", f_follow: "Следите за нами",
      addr: "Ереван, ул. Туманяна, 10", hours: "Ежедневно 11:00–20:00", sample: "(для примера)", map: "Открыть в картах",
      copy: "Копировать", copied: "Скопировано", selected: "Выделено", foot: "Прототип от WebSpace", pages: "Все страницы"
    },
    hy: {
      cta_book: "Գրանցվել", tab_book: "Գրանցվել այցի", menu: "Մենյու", close: "Փակել",
      nav_home: "Գլխավոր", nav_catalog: "Կատալոգ", nav_atelier: "Պատվերով կարում", nav_fabrics: "Գործվածքներ", nav_look: "Ամսվա կերպարը", nav_groom: "Փեսային", nav_contacts: "Կապ", nav_pages: "Նախատիպի բոլոր էջերը",
      season: "Աշուն–ձմեռ 2026", quick: "Արագ դիտում", more: "Մանրամասն",
      cat_all: "Բոլորը", cat_suits: "Կոստյումներ", cat_tuxedo: "Սմոքինգներ", cat_jackets: "Պիջակներ", cat_coats: "Վերնահագուստ", cat_shoes: "Կոշիկներ",
      fb_wool: "Բուրդ", fb_cashmere: "Քաշմիրով", fb_linen: "Վուշ", fb_velvet: "Թավիշ", fb_leather: "Կաշի և թավշակաշի",
      all: "Բոլորը", aw: "Աշուն–ձմեռ", ss: "Գարուն–ամառ", yr: "Ամբողջ տարին",
      lin_silk: "Մետաքս և վիսկոզա", lin_visc: "Վիսկոզա", lin_cupro: "Կուպրո", lin_half: "Կիսաաստառ կուպրոյից", lin_leather: "Հորթի կաշի",
      btn_horn: "Բնական եղջյուր", btn_satin: "Ատլասապատ", btn_pearl: "Սադափ", btn_metal: "Ոսկեգույն մետաղ", btn_none: "Առանց կոճակների",
      sole_leather: "Կաշվե, կարված", sole_rubber: "Կաշի՝ ռետինե ներդիրով",
      d_comp: "Բաղադրություն", d_upper: "Վերին մաս", d_sole: "Ներբան", qv_lining: "Աստառ", qv_buttons: "Կոճակներ", qv_fit: "Հարմարեցում", qv_fit_v: "Բուտիկի ատելյեում",
      qv_size: "Չափս", qv_ask: "Հարցնել WhatsApp-ով", band_btn: "Գրանցվել այցի",
      gm: "գ/մ", it: "Իտալիա", en: "Անգլիա", au: "Ավստրալիա",
      b_label: "Գրանցում", b_title: "Գրանցվեք այցի", b_sub: "Ընտրեք օրը և ժամը։ Գրանցումը կհաստատենք WhatsApp-ով։",
      b_service: "Ծառայություն", o_rtw: "Պատրաստի հավաքածուի փորձում", o_mtm: "Պատվերով կարում", o_wed: "Հարսանեկան կերպար",
      b_day: "Օր", b_time: "Ժամ", b_name: "Անուն", b_phone: "Հեռախոս", b_note: "Մեկնաբանություն", b_note_ph: "Օրինակ՝ գործվածքը կամ առիթը",
      b_wdate: "Հարսանիքի օրը", b_count: "Քանի կոստյում", c_1: "Միայն փեսան", c_2: "2–3", c_4: "4–6", c_7: "7 և ավելի",
      b_submit: "Ուղարկել հայտը", e_slot: "Ընտրեք օրը և ժամը։", e_contact: "Նշեք ձեր անունը և հեռախոսահամարը։",
      b_done: "Շնորհակալություն, {name}։ Ձեր հայտն ընդունված է՝ {date}-ին, ժամը {time}-ին։",
      b_proto: "Սա նախատիպ է, և հայտը ոչ մի տեղ չի ուղարկվում։ Իրական կայքում այն կստացվի բուտիկի WhatsApp-ում։", b_again: "Նոր հայտ",
      f_about: "Տղամարդկանց կոստյումներ իտալական, անգլիական և ավստրալիական գործվածքներից։ Պատրաստի հավաքածու և պատվերով կարում։",
      f_clients: "Հաճախորդներին", f_contacts: "Կապ", f_follow: "Հետևեք մեզ",
      addr: "Երևան, Թումանյան 10", hours: "Ամեն օր՝ 11:00–20:00", sample: "(օրինակի համար)", map: "Բացել քարտեզում",
      copy: "Պատճենել", copied: "Պատճենվեց", selected: "Ընտրված է", foot: "Նախատիպը պատրաստել է WebSpace-ը", pages: "Բոլոր էջերը"
    },
    en: {
      cta_book: "Book", tab_book: "Book a fitting", menu: "Menu", close: "Close",
      nav_home: "Home", nav_catalog: "Catalogue", nav_atelier: "Made to measure", nav_fabrics: "Fabrics", nav_look: "Look of the month", nav_groom: "For the groom", nav_contacts: "Contact", nav_pages: "All prototype pages",
      season: "Autumn–Winter 2026", quick: "Quick view", more: "Discover",
      cat_all: "All", cat_suits: "Suits", cat_tuxedo: "Tuxedos", cat_jackets: "Jackets", cat_coats: "Outerwear", cat_shoes: "Shoes",
      fb_wool: "Wool", fb_cashmere: "With cashmere", fb_linen: "Linen", fb_velvet: "Velvet", fb_leather: "Leather & suede",
      all: "All", aw: "Autumn–winter", ss: "Spring–summer", yr: "All year",
      lin_silk: "Silk and viscose", lin_visc: "Viscose", lin_cupro: "Cupro", lin_half: "Half-lined in cupro", lin_leather: "Calf leather",
      btn_horn: "Natural horn", btn_satin: "Satin-covered", btn_pearl: "Mother of pearl", btn_metal: "Gilt metal", btn_none: "No buttons",
      sole_leather: "Leather, Goodyear welted", sole_rubber: "Leather with rubber inset",
      d_comp: "Composition", d_upper: "Upper", d_sole: "Sole", qv_lining: "Lining", qv_buttons: "Buttons", qv_fit: "Alterations", qv_fit_v: "In our boutique atelier",
      qv_size: "Size", qv_ask: "Ask on WhatsApp", band_btn: "Book a fitting",
      gm: "g/m", it: "Italy", en: "England", au: "Australia",
      b_label: "Appointments", b_title: "Book a fitting", b_sub: "Choose a day and time. We'll confirm on WhatsApp.",
      b_service: "Service", o_rtw: "Ready-to-wear fitting", o_mtm: "Made to measure", o_wed: "Wedding look",
      b_day: "Day", b_time: "Time", b_name: "Name", b_phone: "Phone", b_note: "Notes", b_note_ph: "A cloth you liked, or the occasion",
      b_wdate: "Wedding date", b_count: "How many suits", c_1: "The groom only", c_2: "2–3", c_4: "4–6", c_7: "7 or more",
      b_submit: "Send request", e_slot: "Please choose a day and time.", e_contact: "Please add your name and phone number.",
      b_done: "Thank you, {name}. We've received your request for {date} at {time}.",
      b_proto: "This is a prototype, so the request isn't sent anywhere. On the live site it will go to the boutique's WhatsApp.", b_again: "New request",
      f_about: "Men's suits in Italian, English and Australian cloth. Ready-to-wear and made to measure.",
      f_clients: "Clients", f_contacts: "Contact", f_follow: "Follow us",
      addr: "10 Tumanyan St, Yerevan", hours: "Daily 11:00–20:00", sample: "(example)", map: "Open in Maps",
      copy: "Copy", copied: "Copied", selected: "Selected", foot: "Prototype by WebSpace", pages: "All pages"
    }
  });

  var LOCALE = { ru: "ru-RU", hy: "hy-AM", en: "en-GB" };
  var HY = {
    wd: ["Կիր", "Երկ", "Երք", "Չրք", "Հնգ", "Ուրբ", "Շբթ"],
    wdl: ["կիրակի", "երկուշաբթի", "երեքշաբթի", "չորեքշաբթի", "հինգշաբթի", "ուրբաթ", "շաբաթ"],
    m: ["հունվ", "փետր", "մարտ", "ապր", "մայ", "հուն", "հուլ", "օգոս", "սեպտ", "հոկտ", "նոյ", "դեկ"],
    ml: ["հունվարի", "փետրվարի", "մարտի", "ապրիլի", "մայիսի", "հունիսի", "հուլիսի", "օգոստոսի", "սեպտեմբերի", "հոկտեմբերի", "նոյեմբերի", "դեկտեմբերի"]
  };
  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var lang = "ru";
  try { var saved = localStorage.getItem("em-lang"); if (saved && T[saved]) lang = saved; } catch (e) {}
  function t(k, vars) {
    var s = (T[lang] && T[lang][k]) || T.ru[k] || k;
    if (vars) Object.keys(vars).forEach(function (v) { s = s.replace("{" + v + "}", vars[v]); });
    return s;
  }
  function L(o) { return o ? (o[lang] || o.ru) : ""; }
  function amd(n) {
    if (lang === "en") return "֏" + new Intl.NumberFormat("en-US").format(n);
    return new Intl.NumberFormat("ru-RU").format(n).replace(/ | /g, " ") + " ֏";
  }
  function from(n) { return lang === "en" ? "from " + amd(n) : lang === "hy" ? amd(n) + "-ից" : "от " + amd(n); }
  function esc(s) { return String(s).replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; }); }

  /* Photo slots */
  function watchImg(img) {
    var box = img.parentElement, mark = function () { box.classList.add("missing"); };
    if (img.complete && img.naturalWidth === 0 && img.getAttribute("src")) mark();
    img.addEventListener("error", mark);
    img.addEventListener("load", function () { box.classList.remove("missing"); });
  }

  /* Reveal on scroll */
  var io = ("IntersectionObserver" in window) ? new IntersectionObserver(function (es) {
    es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } });
  }, { rootMargin: "0px 0px -8% 0px", threshold: 0.08 }) : null;
  function observe(el) { if (!io || reduce) { el.classList.add("in"); return; } io.observe(el); }

  /* Letters come out of the blur once the title is on screen */
  var blurIO = ("IntersectionObserver" in window) ? new IntersectionObserver(function (es) {
    es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add("in"); blurIO.unobserve(e.target); } });
  }, { threshold: 0.4 }) : null;
  function blurTitle(el, text) {
    el.classList.remove("in"); el.innerHTML = ""; el.setAttribute("aria-label", text);
    Array.from(text).forEach(function (ch, i) { var s = document.createElement("span"); s.setAttribute("aria-hidden", "true"); s.textContent = ch; s.style.setProperty("--i", i); el.appendChild(s); });
    if (!blurIO || reduce) { el.classList.add("in"); return; }
    blurIO.unobserve(el); blurIO.observe(el);
  }

  /* Procedural cloth (same code as on the homepage) */
  function rng(seed) { var s = seed % 2147483647; if (s <= 0) s += 2147483646; return function () { s = s * 16807 % 2147483647; return (s - 1) / 2147483646; }; }
  function sizeCanvas(cv, fw, fh) {
    var r = Math.min(window.devicePixelRatio || 1, 2), w = fw || cv.clientWidth || 300, h = fh || cv.clientHeight || 300;
    cv.width = Math.round(w * r); cv.height = Math.round(h * r);
    var ctx = cv.getContext("2d"); ctx.setTransform(r, 0, 0, r, 0, 0); return { ctx: ctx, w: w, h: h };
  }
  function noise(ctx, w, h, amt, seed) {
    var R = rng(seed || 7), n = Math.round(w * h * amt);
    for (var i = 0; i < n; i++) { var x = R() * w, y = R() * h, l = R();
      ctx.fillStyle = l > .5 ? "rgba(255,255,255," + (0.03 + R() * 0.05) + ")" : "rgba(0,0,0," + (0.05 + R() * 0.08) + ")";
      ctx.fillRect(x, y, 1, 1 + R() * 1.6); }
  }
  function twill(ctx, w, h, col, step, alpha) {
    ctx.strokeStyle = col; ctx.globalAlpha = alpha; ctx.lineWidth = 1;
    for (var x = -h; x < w; x += step) { ctx.beginPath(); ctx.moveTo(x, h); ctx.lineTo(x + h, 0); ctx.stroke(); }
    ctx.globalAlpha = 1;
  }
  function drawCloth(cv, f, scale, fw, fh) {
    var o = sizeCanvas(cv, fw, fh), ctx = o.ctx, w = o.w, h = o.h, s = scale || 1, c = f.c;
    ctx.fillStyle = c[0]; ctx.fillRect(0, 0, w, h);
    switch (f.p) {
      case "herringbone":
        var col = 14 * s;
        for (var cx = 0; cx < w; cx += col) { var dir = Math.round(cx / col) % 2 ? 1 : -1;
          ctx.save(); ctx.beginPath(); ctx.rect(cx, 0, col, h); ctx.clip(); ctx.strokeStyle = c[1]; ctx.lineWidth = 2 * s; ctx.globalAlpha = .55;
          for (var y = -col; y < h + col; y += 4 * s) { ctx.beginPath(); ctx.moveTo(cx, y); ctx.lineTo(cx + col, y + dir * col * .9); ctx.stroke(); }
          ctx.restore(); }
        ctx.globalAlpha = 1; break;
      case "glen":
        twill(ctx, w, h, c[1], 3 * s, .25); ctx.fillStyle = c[1]; ctx.globalAlpha = .28; var big = 48 * s;
        for (var gx = 0; gx < w; gx += big) for (var gy = 0; gy < h; gy += big) { ctx.fillRect(gx, gy, big / 2, big / 2); ctx.fillRect(gx + big / 2, gy + big / 2, big / 2, big / 2); }
        ctx.globalAlpha = .35; ctx.fillStyle = c[2];
        for (var lx = 0; lx < w; lx += big) ctx.fillRect(lx + big * .73, 0, 1.2 * s, h);
        for (var ly = 0; ly < h; ly += big) ctx.fillRect(0, ly + big * .73, w, 1.2 * s);
        ctx.globalAlpha = 1; break;
      case "chalk":
        twill(ctx, w, h, c[1], 3 * s, .18);
        for (var sx = 10 * s; sx < w; sx += 26 * s) { var gr = ctx.createLinearGradient(sx - 3 * s, 0, sx + 3 * s, 0);
          gr.addColorStop(0, "rgba(0,0,0,0)"); gr.addColorStop(.5, c[2]); gr.addColorStop(1, "rgba(0,0,0,0)");
          ctx.fillStyle = gr; ctx.globalAlpha = .55; ctx.fillRect(sx - 3 * s, 0, 6 * s, h); }
        ctx.globalAlpha = 1; break;
      case "pin":
        twill(ctx, w, h, c[1], 3 * s, .2); ctx.fillStyle = c[2]; ctx.globalAlpha = .75;
        for (var px = 6 * s; px < w; px += 15 * s) for (var py = 0; py < h; py += 3 * s) ctx.fillRect(px, py, 1 * s, 2 * s);
        ctx.globalAlpha = 1; break;
      case "flannel": noise(ctx, w, h, 0.9, 11); noise(ctx, w, h, 0.5, 23); break;
      case "plain": twill(ctx, w, h, c[1], 2.5 * s, .22); break;
      case "hound":
        var u = 10 * s; ctx.fillStyle = c[1];
        for (var ux = -u; ux < w + u; ux += u) for (var uy = -u; uy < h + u; uy += u) { ctx.beginPath();
          ctx.moveTo(ux, uy); ctx.lineTo(ux + u / 2, uy); ctx.lineTo(ux + u, uy + u / 2); ctx.lineTo(ux + u, uy + u);
          ctx.lineTo(ux + u / 2, uy + u / 2); ctx.lineTo(ux + u / 2, uy + u); ctx.lineTo(ux, uy + u / 2); ctx.closePath(); ctx.globalAlpha = .55; ctx.fill(); }
        ctx.globalAlpha = 1; break;
      case "window":
        twill(ctx, w, h, c[1], 3 * s, .2); ctx.fillStyle = c[2]; ctx.globalAlpha = .6;
        for (var wx = 20 * s; wx < w; wx += 56 * s) ctx.fillRect(wx, 0, 1.5 * s, h);
        for (var wy = 20 * s; wy < h; wy += 56 * s) ctx.fillRect(0, wy, w, 1.5 * s);
        ctx.globalAlpha = 1; break;
      case "linen":
        var R = rng(31);
        for (var ln = 0; ln < h; ln += 2 * s) { ctx.fillStyle = R() > .5 ? c[1] : c[2]; ctx.globalAlpha = .12 + R() * .2; ctx.fillRect(0, ln, w, (0.6 + R() * 1.2) * s); }
        for (var lv = 0; lv < w; lv += 2.2 * s) { ctx.fillStyle = c[1]; ctx.globalAlpha = .08 + R() * .12; ctx.fillRect(lv, 0, (0.5 + R()) * s, h); }
        ctx.globalAlpha = 1; break;
      case "barathea":
        for (var bx = 0; bx < w; bx += 3 * s) for (var by = (bx / (3 * s)) % 2 ? 0 : 1.5 * s; by < h; by += 3 * s) { ctx.fillStyle = c[1]; ctx.globalAlpha = .35; ctx.fillRect(bx, by, 1.4 * s, 1.4 * s); }
        ctx.globalAlpha = 1; break;
      case "velvet":
        var vg = ctx.createLinearGradient(0, 0, w, h); vg.addColorStop(0, c[1]); vg.addColorStop(.5, c[0]); vg.addColorStop(1, c[1]);
        ctx.fillStyle = vg; ctx.globalAlpha = .6; ctx.fillRect(0, 0, w, h); ctx.globalAlpha = 1; noise(ctx, w, h, 0.6, 41); break;
      case "leather":
        noise(ctx, w, h, 0.5, 51); var LR = rng(61); ctx.strokeStyle = c[1]; ctx.lineWidth = .6 * s;
        for (var k = 0; k < w * h / 900; k++) { var lx2 = LR() * w, ly2 = LR() * h; ctx.globalAlpha = .25; ctx.beginPath(); ctx.moveTo(lx2, ly2); ctx.lineTo(lx2 + (LR() - .5) * 10 * s, ly2 + (LR() - .5) * 6 * s); ctx.stroke(); }
        ctx.globalAlpha = 1; break;
    }
    noise(ctx, w, h, f.p === "flannel" ? 0.2 : 0.35, 3);
    var sh = ctx.createLinearGradient(0, 0, w, h); sh.addColorStop(0, "rgba(255,255,255,0.06)"); sh.addColorStop(1, "rgba(0,0,0,0.16)");
    ctx.fillStyle = sh; ctx.fillRect(0, 0, w, h);
  }
  var urlCache = {};
  function clothURL(f, size, scale) {
    var key = (f.id || f.p + f.c.join("")) + "-" + size + "-" + (scale || ""); if (urlCache[key]) return urlCache[key];
    var cv = document.createElement("canvas"); drawCloth(cv, f, scale || size / 160, size, size);
    return (urlCache[key] = cv.toDataURL("image/jpeg", 0.85));
  }

  /* Fabric library (same twelve cloths as the homepage) */
  var FAB = [
    { id: "f1", p: "herringbone", c: ["#1E2638", "#3A4766"], n: { ru: "Тёмно-синяя ёлочка", hy: "Մուգ կապույտ եղևնանախշ", en: "Navy herringbone" }, comp: "wool", cs: { ru: "100% шерсть, Super 120S", hy: "100% բուրդ, Super 120S", en: "100% wool, Super 120S" }, g: 280, o: "it", s: "aw", price: 690000 },
    { id: "f2", p: "glen", c: ["#6E6C68", "#3E3C39", "#8B6F55"], n: { ru: "Клетка «Принц Уэльский»", hy: "«Ուելսի արքայազն» վանդակ", en: "Prince of Wales check" }, comp: "wool", cs: { ru: "100% шерсть, Super 110S", hy: "100% բուրդ, Super 110S", en: "100% wool, Super 110S" }, g: 300, o: "en", s: "aw", price: 720000 },
    { id: "f3", p: "chalk", c: ["#2B2C30", "#1E1F22", "#C9C5BC"], n: { ru: "Графитовая меловая полоска", hy: "Գրաֆիտե՝ կավճե գծով", en: "Charcoal chalk stripe" }, comp: "wool", cs: { ru: "100% шерсть, Super 130S", hy: "100% բուրդ, Super 130S", en: "100% wool, Super 130S" }, g: 270, o: "it", s: "yr", price: 740000 },
    { id: "f4", p: "pin", c: ["#1A2134", "#0F1422", "#D8D6D0"], n: { ru: "Синяя тонкая полоска", hy: "Կապույտ՝ բարակ գծով", en: "Navy pinstripe" }, comp: "wool", cs: { ru: "100% шерсть, Super 140S", hy: "100% բուրդ, Super 140S", en: "100% wool, Super 140S" }, g: 250, o: "it", s: "yr", price: 790000 },
    { id: "f5", p: "flannel", c: ["#5A4636"], n: { ru: "Коричневая фланель", hy: "Շագանակագույն ֆլանել", en: "Brown flannel" }, comp: "wool", cs: { ru: "100% шерсть", hy: "100% բուրդ", en: "100% wool" }, g: 340, o: "en", s: "aw", price: 680000 },
    { id: "f6", p: "plain", c: ["#A9825A", "#7E5E3E"], n: { ru: "Кэмел, шерсть с кашемиром", hy: "Ուղտագույն բուրդ՝ քաշմիրով", en: "Camel wool & cashmere" }, comp: "cashmere", cs: { ru: "90% шерсть, 10% кашемир", hy: "90% բուրդ, 10% քաշմիր", en: "90% wool, 10% cashmere" }, g: 360, o: "it", s: "aw", price: 860000 },
    { id: "f7", p: "plain", c: ["#141A2C", "#232B44"], n: { ru: "Полночный синий", hy: "Կեսգիշերային կապույտ", en: "Midnight blue" }, comp: "wool", cs: { ru: "100% шерсть мериноса, Super 150S", hy: "100% մերինոսի բուրդ, Super 150S", en: "100% merino wool, Super 150S" }, g: 240, o: "au", s: "yr", price: 890000 },
    { id: "f8", p: "barathea", c: ["#101012", "#2A2A2E"], n: { ru: "Чёрная смокинговая", hy: "Սև՝ սմոքինգի համար", en: "Black evening barathea" }, comp: "wool", cs: { ru: "100% шерсть, Super 130S", hy: "100% բուրդ, Super 130S", en: "100% wool, Super 130S" }, g: 260, o: "en", s: "yr", price: 850000 },
    { id: "f9", p: "linen", c: ["#B7B4AD", "#8E8B84", "#D6D3CC"], n: { ru: "Светло-серый лён с шёлком", hy: "Բաց մոխրագույն վուշ մետաքսով", en: "Light grey linen & silk" }, comp: "linen", cs: { ru: "70% лён, 30% шёлк", hy: "70% վուշ, 30% մետաքս", en: "70% linen, 30% silk" }, g: 230, o: "it", s: "ss", price: 650000 },
    { id: "f10", p: "hound", c: ["#CDBB9C", "#5C4A36"], n: { ru: "Песочная «гусиная лапка»", hy: "Ավազագույն «սագի թաթ»", en: "Sand houndstooth" }, comp: "cashmere", cs: { ru: "85% шерсть, 15% кашемир", hy: "85% բուրդ, 15% քաշմիր", en: "85% wool, 15% cashmere" }, g: 290, o: "it", s: "aw", price: 760000 },
    { id: "f11", p: "window", c: ["#5D6878", "#3F4856", "#B9A283"], n: { ru: "Серо-голубое «окно»", hy: "Մոխրակապույտ «պատուհան»", en: "Grey-blue windowpane" }, comp: "wool", cs: { ru: "100% шерсть, Super 120S", hy: "100% բուրդ, Super 120S", en: "100% wool, Super 120S" }, g: 260, o: "en", s: "yr", price: 710000 },
    { id: "f12", p: "linen", c: ["#C9B596", "#A38C69", "#E0D2B8"], n: { ru: "Бежевый лён", hy: "Բեժ վուշ", en: "Beige linen" }, comp: "linen", cs: { ru: "100% лён", hy: "100% վուշ", en: "100% linen" }, g: 250, o: "it", s: "ss", price: 620000 }
  ];
  var byId = {}; FAB.forEach(function (f) { byId[f.id] = f; });

  /* Ready-to-wear. Prices are examples. img = photo base name: <img>.jpg, <img>-model.jpg, -detail, -back */
  var SUIT = [46, 48, 50, 52, 54, 56], SHOE = ["s40", "s41", "s42", "s43", "s44", "s45", "s46"];
  var PRODUCTS = [
    { id: "s1", cat: "suits", fb: "wool", s: "yr", price: 690000, img: "product-suit", alt: "product-suit-model", cl: { p: "chalk", c: ["#1C2335", "#121827", "#C9C5BC"] }, sizes: SUIT, lin: "lin_silk", btn: "btn_horn",
      n: { ru: "Синий костюм в меловую полоску", hy: "Կապույտ կոստյում՝ կավճե գծերով", en: "Navy chalk-stripe suit" },
      d: { ru: "Двубортный костюм из итальянской шерсти Super 130S. Для деловых встреч, ужинов и важных дней.", hy: "Երկշարք կոճակներով կոստյում՝ իտալական Super 130S բրդից։ Գործնական հանդիպումների, ընթրիքների և կարևոր օրերի համար։", en: "A double-breasted suit in Italian Super 130S wool. For meetings, dinners and the days that matter." },
      c: { ru: "100% шерсть Super 130S, Италия", hy: "100% բուրդ Super 130S, Իտալիա", en: "100% Super 130S wool, Italy" } },
    { id: "s2", cat: "suits", fb: "wool", s: "yr", price: 790000, img: "suit-charcoal", cl: { p: "plain", c: ["#2E2F33", "#1F2023"] }, sizes: SUIT, lin: "lin_cupro", btn: "btn_horn",
      n: { ru: "Графитовый костюм Super 150S", hy: "Գրաֆիտե կոստյում Super 150S", en: "Charcoal Super 150S suit" },
      d: { ru: "Однобортный костюм на две пуговицы из тонкой австралийской шерсти. Главный костюм гардероба.", hy: "Միակողմանի երկկոճակ կոստյում բարակ ավստրալիական բրդից։ Զգեստապահարանի գլխավոր կոստյումը։", en: "A two-button single-breasted suit in fine Australian wool. The suit every wardrobe is built around." },
      c: { ru: "100% шерсть мериноса Super 150S, Австралия", hy: "100% մերինոսի բուրդ Super 150S, Ավստրալիա", en: "100% Super 150S merino wool, Australia" } },
    { id: "s3", cat: "suits", fb: "wool", s: "aw", price: 760000, img: "suit-threepiece", cl: { p: "herringbone", c: ["#1E2638", "#3A4766"] }, sizes: SUIT, lin: "lin_silk", btn: "btn_horn",
      n: { ru: "Синий костюм-тройка в ёлочку", hy: "Կապույտ եռյակ կոստյում եղևնանախշով", en: "Navy herringbone three-piece" },
      d: { ru: "Пиджак, брюки и жилет из плотной итальянской шерсти. Тёплый и строгий костюм для зимы.", hy: "Պիջակ, տաբատ և ժիլետ խիտ իտալական բրդից։ Տաք և խիստ կոստյում ձմռան համար։", en: "Jacket, trousers and waistcoat in a dense Italian wool. A warm, formal suit for winter." },
      c: { ru: "100% шерсть Super 120S, Италия", hy: "100% բուրդ Super 120S, Իտալիա", en: "100% Super 120S wool, Italy" } },
    { id: "s4", cat: "suits", fb: "wool", s: "aw", price: 680000, img: "suit-flannel", cl: { p: "flannel", c: ["#5A4636"] }, sizes: [48, 50, 52, 54], lin: "lin_visc", btn: "btn_horn",
      n: { ru: "Коричневый фланелевый костюм", hy: "Շագանակագույն ֆլանելե կոստյում", en: "Brown flannel suit" },
      d: { ru: "Мягкая английская фланель и свободная посадка брюк. Для холодных дней и неформальных встреч.", hy: "Փափուկ անգլիական ֆլանել և ազատ նստող տաբատ։ Ցուրտ օրերի և ոչ պաշտոնական հանդիպումների համար։", en: "Soft English flannel with an easy trouser. For cold days and less formal meetings." },
      c: { ru: "100% шерсть, Англия", hy: "100% բուրդ, Անգլիա", en: "100% wool, England" } },
    { id: "s5", cat: "suits", fb: "wool", s: "yr", price: 710000, img: "suit-windowpane", cl: { p: "window", c: ["#5D6878", "#3F4856", "#B9A283"] }, sizes: [46, 48, 50, 52, 54], lin: "lin_cupro", btn: "btn_horn",
      n: { ru: "Серо-голубой костюм в клетку «окно»", hy: "Մոխրակապույտ կոստյում «պատուհան» վանդակով", en: "Grey-blue windowpane suit" },
      d: { ru: "Крупная клетка на спокойном фоне. Костюм носится целиком или пиджак отдельно с серыми брюками.", hy: "Խոշոր վանդակ հանգիստ ֆոնի վրա։ Կրվում է ամբողջությամբ կամ պիջակը՝ առանձին մոխրագույն տաբատով։", en: "A bold check on a quiet ground. Wear it as a suit or the jacket alone with grey trousers." },
      c: { ru: "100% шерсть Super 120S, Англия", hy: "100% բուրդ Super 120S, Անգլիա", en: "100% Super 120S wool, England" } },
    { id: "s6", cat: "suits", fb: "linen", s: "ss", price: 650000, img: "suit-linen", cl: { p: "linen", c: ["#B7B4AD", "#8E8B84", "#D6D3CC"] }, sizes: [46, 48, 50, 52], lin: "lin_half", btn: "btn_pearl",
      n: { ru: "Светло-серый костюм из льна и шёлка", hy: "Բաց մոխրագույն կոստյում վուշից և մետաքսից", en: "Light grey linen and silk suit" },
      d: { ru: "Лёгкий костюм на полуподкладке для ереванского лета, летних свадеб и вечеров на террасе.", hy: "Թեթև կոստյում կիսաաստառով՝ երևանյան ամռան, ամառային հարսանիքների և պատշգամբում երեկոների համար։", en: "A light, half-lined suit for a Yerevan summer, summer weddings and evenings on the terrace." },
      c: { ru: "70% лён, 30% шёлк, Италия", hy: "70% վուշ, 30% մետաքս, Իտալիա", en: "70% linen, 30% silk, Italy" } },
    { id: "x1", cat: "tuxedo", fb: "wool", s: "yr", price: 560000, img: "product-tuxedo", alt: "product-tuxedo-model", cl: { p: "barathea", c: ["#101012", "#2A2A2E"] }, sizes: SUIT, lin: "lin_silk", btn: "btn_satin",
      n: { ru: "Чёрный смокинг с атласными лацканами", hy: "Սև սմոքինգ՝ ատլասե օձիքով", en: "Black tuxedo with satin lapels" },
      d: { ru: "Смокинг из английской шерсти с атласными лацканами. Для свадьбы и торжественных вечеров.", hy: "Սմոքինգ անգլիական բրդից՝ ատլասե օձիքով։ Հարսանիքի և հանդիսավոր երեկոների համար։", en: "A tuxedo in English wool with satin lapels. For weddings and black-tie evenings." },
      c: { ru: "100% шерсть Super 130S, Англия", hy: "100% բուրդ Super 130S, Անգլիա", en: "100% Super 130S wool, England" } },
    { id: "x2", cat: "tuxedo", fb: "wool", s: "yr", price: 620000, img: "tuxedo-midnight", cl: { p: "plain", c: ["#141A2C", "#232B44"] }, sizes: SUIT, lin: "lin_silk", btn: "btn_satin",
      n: { ru: "Полночно-синий смокинг с шалевым воротником", hy: "Կեսգիշերային կապույտ սմոքինգ շալ օձիքով", en: "Midnight blue shawl-collar tuxedo" },
      d: { ru: "При вечернем свете полночный синий выглядит глубже чёрного. Шалевый воротник обтянут шёлком.", hy: "Երեկոյան լույսի տակ կեսգիշերային կապույտը սևից ավելի խորն է երևում։ Շալ օձիքը պատված է մետաքսով։", en: "Under evening light midnight blue reads deeper than black. The shawl collar is faced in silk." },
      c: { ru: "100% шерсть мериноса Super 150S, Австралия", hy: "100% մերինոսի բուրդ Super 150S, Ավստրալիա", en: "100% Super 150S merino wool, Australia" } },
    { id: "x3", cat: "tuxedo", fb: "velvet", s: "aw", price: 480000, img: "tuxedo-velvet", cl: { p: "velvet", c: ["#4A1E26", "#2C1016"] }, sizes: [46, 48, 50, 52, 54], lin: "lin_silk", btn: "btn_satin",
      n: { ru: "Бархатный вечерний пиджак цвета бордо", hy: "Բորդո գույնի թավշյա երեկոյան պիջակ", en: "Burgundy velvet dinner jacket" },
      d: { ru: "Хлопковый бархат и атласные лацканы. Носится с чёрными смокинговыми брюками.", hy: "Բամբակյա թավիշ և ատլասե օձիք։ Կրվում է սև սմոքինգային տաբատով։", en: "Cotton velvet with satin lapels. Worn with black tuxedo trousers." },
      c: { ru: "100% хлопковый бархат, Италия", hy: "100% բամբակյա թավիշ, Իտալիա", en: "100% cotton velvet, Italy" } },
    { id: "j1", cat: "jackets", fb: "wool", s: "aw", price: 390000, img: "product-jacket", alt: "product-jacket-model", cl: { p: "glen", c: ["#6E6C68", "#3E3C39", "#8B6F55"] }, sizes: [46, 48, 50, 52, 54], lin: "lin_visc", btn: "btn_horn",
      n: { ru: "Пиджак в клетку «Принц Уэльский»", hy: "«Ուելսի արքայազն» վանդակավոր պիջակ", en: "Prince of Wales check jacket" },
      d: { ru: "Пиджак из английской шерсти в классическую клетку. Подойдёт и к брюкам, и к джинсам.", hy: "Պիջակ անգլիական բրդից՝ դասական վանդակով։ Կարելի է կրել և՛ տաբատի, և՛ ջինսի հետ։", en: "An English wool jacket in a classic check. Wear it with tailored trousers or with jeans." },
      c: { ru: "100% шерсть, Англия", hy: "100% բուրդ, Անգլիա", en: "100% wool, England" } },
    { id: "j2", cat: "jackets", fb: "cashmere", s: "aw", price: 460000, img: "jacket-houndstooth", cl: { p: "hound", c: ["#CDBB9C", "#5C4A36"] }, sizes: [48, 50, 52, 54, 56], lin: "lin_cupro", btn: "btn_horn",
      n: { ru: "Пиджак в «гусиную лапку» с кашемиром", hy: "«Սագի թաթ» պիջակ քաշմիրով", en: "Houndstooth jacket with cashmere" },
      d: { ru: "Мягкое плечо и тёплая песочная гамма. Хорошо смотрится с водолазкой и фланелевыми брюками.", hy: "Փափուկ ուս և տաք ավազագույն երանգ։ Լավ է համադրվում բարձրավզիկի և ֆլանելե տաբատի հետ։", en: "A soft shoulder in a warm sand palette. Good with a roll-neck and flannel trousers." },
      c: { ru: "85% шерсть, 15% кашемир, Италия", hy: "85% բուրդ, 15% քաշմիր, Իտալիա", en: "85% wool, 15% cashmere, Italy" } },
    { id: "j3", cat: "jackets", fb: "wool", s: "yr", price: 360000, img: "jacket-blazer", cl: { p: "plain", c: ["#1A2134", "#2A3350"] }, sizes: SUIT, lin: "lin_visc", btn: "btn_metal",
      n: { ru: "Тёмно-синий блейзер", hy: "Մուգ կապույտ բլեյզեր", en: "Navy blazer" },
      d: { ru: "Двубортный блейзер с золотистыми пуговицами. С серыми брюками, чинос или джинсами.", hy: "Երկկողմանի բլեյզեր ոսկեգույն կոճակներով։ Մոխրագույն տաբատով, չինոսով կամ ջինսով։", en: "A double-breasted blazer with gilt buttons. With grey trousers, chinos or jeans." },
      c: { ru: "100% шерсть хопсак, Италия", hy: "100% բուրդ հոփսաք, Իտալիա", en: "100% wool hopsack, Italy" } },
    { id: "j4", cat: "jackets", fb: "linen", s: "ss", price: 320000, img: "jacket-linen", cl: { p: "linen", c: ["#C9B596", "#A38C69", "#E0D2B8"] }, sizes: [46, 48, 50, 52], lin: "lin_half", btn: "btn_pearl",
      n: { ru: "Бежевый льняной пиджак", hy: "Բեժ վուշե պիջակ", en: "Beige linen jacket" },
      d: { ru: "Неконструированный пиджак без плечевых накладок. Мнётся красиво, как и положено льну.", hy: "Ոչ կոնստրուկտիվ պիջակ՝ առանց ուսադիրների։ Ճմրթվում է գեղեցիկ, ինչպես վուշին է վայել։", en: "An unstructured jacket with no shoulder pads. It creases well, as linen should." },
      c: { ru: "100% лён, Италия", hy: "100% վուշ, Իտալիա", en: "100% linen, Italy" } },
    { id: "c1", cat: "coats", fb: "cashmere", s: "aw", price: 620000, img: "product-coat", alt: "product-coat-model", cl: { p: "plain", c: ["#A9825A", "#7E5E3E"] }, sizes: [48, 50, 52, 54, 56], lin: "lin_visc", btn: "btn_horn",
      n: { ru: "Пальто цвета кэмел с кашемиром", hy: "Ուղտագույն վերարկու՝ քաշմիրով", en: "Camel overcoat with cashmere" },
      d: { ru: "Однобортное пальто из шерсти с кашемиром. Тёплое, лёгкое и хорошо держит форму.", hy: "Միաշարք կոճակներով վերարկու՝ բրդից և քաշմիրից։ Տաք է ու թեթև, լավ է պահում ձևը։", en: "A single-breasted overcoat in wool and cashmere. Warm and light, and it holds its shape." },
      c: { ru: "90% шерсть, 10% кашемир, Италия", hy: "90% բուրդ, 10% քաշմիր, Իտալիա", en: "90% wool, 10% cashmere, Italy" } },
    { id: "c2", cat: "coats", fb: "wool", s: "aw", price: 580000, img: "coat-navy", cl: { p: "plain", c: ["#1B2236", "#262F4A"] }, sizes: [48, 50, 52, 54], lin: "lin_visc", btn: "btn_horn",
      n: { ru: "Тёмно-синее двубортное пальто", hy: "Մուգ կապույտ երկկողմանի վերարկու", en: "Navy double-breasted overcoat" },
      d: { ru: "Пальто длиной ниже колена с широкими лацканами. Надевается поверх костюма и смокинга.", hy: "Ծնկից ցածր վերարկու լայն օձիքով։ Հագնվում է կոստյումի և սմոքինգի վրայից։", en: "A below-the-knee coat with broad lapels. Goes over a suit or a tuxedo." },
      c: { ru: "100% шерсть, Англия", hy: "100% բուրդ, Անգլիա", en: "100% wool, England" } },
    { id: "c3", cat: "coats", fb: "wool", s: "aw", price: 540000, img: "coat-herringbone", cl: { p: "herringbone", c: ["#5B5853", "#7C7871"] }, sizes: [46, 48, 50, 52, 54], lin: "lin_visc", btn: "btn_horn",
      n: { ru: "Серое пальто в ёлочку", hy: "Մոխրագույն վերարկու եղևնանախշով", en: "Grey herringbone overcoat" },
      d: { ru: "Твидовая ёлочка и потайная застёжка. Пальто на каждый день с костюмом и без.", hy: "Թվիդե եղևնանախշ և թաքնված կոճկվածք։ Ամենօրյա վերարկու՝ կոստյումով և առանց դրա։", en: "Herringbone tweed with a fly front. An everyday coat, with or without a suit." },
      c: { ru: "100% шерсть, Англия", hy: "100% բուրդ, Անգլիա", en: "100% wool, England" } },
    { id: "o1", cat: "shoes", fb: "leather", s: "yr", price: 180000, img: "shoes-oxford", cl: { p: "leather", c: ["#161514", "#000000"] }, sizes: SHOE, upper: "up_calf", sole: "sole_leather",
      n: { ru: "Чёрные оксфорды", hy: "Սև օքսֆորդներ", en: "Black oxfords" },
      d: { ru: "Гладкая телячья кожа и закрытая шнуровка. Обувь к деловому костюму и к смокингу.", hy: "Հարթ հորթի կաշի և փակ քուղակապ։ Կոշիկ գործնական կոստյումի և սմոքինգի համար։", en: "Smooth calf leather with closed lacing. For a business suit and a tuxedo alike." } },
    { id: "o2", cat: "shoes", fb: "leather", s: "yr", price: 190000, img: "shoes-brogue", cl: { p: "leather", c: ["#4A2C1A", "#2A180D"] }, sizes: SHOE, upper: "up_calf", sole: "sole_leather",
      n: { ru: "Коричневые броги", hy: "Շագանակագույն բրոգեր", en: "Brown brogues" },
      d: { ru: "Перфорация по носку и рантовая подошва. Носятся с фланелью, твидом и джинсами.", hy: "Ծակոտկեն քթամաս և կարված ներբան։ Կրվում են ֆլանելի, թվիդի և ջինսի հետ։", en: "Brogued toe and a welted sole. With flannel, tweed and denim." } },
    { id: "o3", cat: "shoes", fb: "leather", s: "ss", price: 160000, img: "shoes-loafer", cl: { p: "flannel", c: ["#8A6444"] }, sizes: SHOE, upper: "up_suede", sole: "sole_rubber",
      n: { ru: "Замшевые лоферы", hy: "Թավշակաշվե լոֆերներ", en: "Suede loafers" },
      d: { ru: "Мягкая замша без подкладки. К льняному костюму и на лето без носков.", hy: "Փափուկ թավշակաշի առանց աստառի։ Վուշե կոստյումի հետ և ամռանը՝ առանց գուլպաների։", en: "Soft, unlined suede. With a linen suit, and sockless in summer." } },
    { id: "o4", cat: "shoes", fb: "leather", s: "yr", price: 210000, img: "shoes-patent", cl: { p: "barathea", c: ["#0E0E10", "#3A3A40"] }, sizes: SHOE, upper: "up_patent", sole: "sole_leather",
      n: { ru: "Лакированные туфли к смокингу", hy: "Լաքապատ կոշիկներ սմոքինգի համար", en: "Patent evening shoes" },
      d: { ru: "Лакированная кожа и тонкая подошва. Завершают смокинг и свадебный образ.", hy: "Լաքապատ կաշի և բարակ ներբան։ Ավարտուն են դարձնում սմոքինգը և հարսանեկան կերպարը։", en: "Patent leather on a slim sole. They finish a tuxedo and a wedding look." } }
  ];
  add({
    ru: { up_calf: "Телячья кожа, Италия", up_suede: "Замша, Италия", up_patent: "Лакированная кожа, Италия" },
    hy: { up_calf: "Հորթի կաշի, Իտալիա", up_suede: "Թավշակաշի, Իտալիա", up_patent: "Լաքապատ կաշի, Իտալիա" },
    en: { up_calf: "Calf leather, Italy", up_suede: "Suede, Italy", up_patent: "Patent leather, Italy" }
  });
  var PBY = {}; PRODUCTS.forEach(function (p, i) { p.ord = i; PBY[p.id] = p; });
  function pName(p) { return L(p.n); }
  function sizeLabel(s) { return String(s).replace(/^s/, ""); }
  function photo(p, kind) { return kind === "model" && p.alt ? p.alt : p.img + (kind ? "-" + kind : ""); }
  function clothBg(p, size, scale) { return "url(" + clothURL({ id: "p-" + p.id, p: p.cl.p, c: p.cl.c }, size || 360, scale) + ")"; }
  function specs(p) {
    if (p.cat === "shoes") return [[t("d_upper"), t(p.upper)], [t("d_sole"), t(p.sole)], [t("qv_lining"), t("lin_leather")]];
    return [[t("d_comp"), L(p.c)], [t("qv_lining"), t(p.lin)], [t("qv_buttons"), t(p.btn)], [t("qv_fit"), t("qv_fit_v")]];
  }
  function productCard(p, i, opts) {
    opts = opts || {};
    var a = document.createElement("article"); a.className = "product" + (opts.enter ? " enter" : "") + (opts.reveal ? " rv" : ""); a.style.setProperty("--d", i);
    var href = "product.html#" + p.id, m = photo(p, "model");
    a.innerHTML = '<div class="p-media"><a class="p-img" href="' + href + '" tabindex="-1" aria-hidden="true">' +
      '<div class="ph" style="background-image:' + clothBg(p) + '"><img data-ph src="img/' + p.img + '.jpg" alt=""><span class="ph-label">' + p.img + '.jpg · 3:4</span>' +
      '<div class="alt" style="background-image:' + clothBg(p, 360, 3.6) + '"><img data-ph src="img/' + m + '.jpg" alt=""><span class="ph-label">' + m + '.jpg</span></div></div></a>' +
      (opts.quick ? '<button class="quick" type="button">' + esc(t("quick")) + '</button>' : '') + '</div>' +
      '<a class="p-name" href="' + href + '">' + esc(pName(p)) + '</a>' +
      '<div class="p-meta"><span class="p-cat">' + esc(t("cat_" + p.cat)) + '</span><span class="p-price">' + amd(p.price) + '</span></div>' +
      (opts.sizes ? '<div class="p-sizes num">' + p.sizes.map(function (s) { return "<span>" + sizeLabel(s) + "</span>"; }).join("") + '</div>' : '');
    a.querySelectorAll("img").forEach(watchImg);
    if (opts.quick) a.querySelector(".quick").addEventListener("click", function () { opts.quick(p, a); });
    return a;
  }

  /* Header, drawer, footer */
  var ICON_MENU = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.3"><path d="M3 7h18M3 12h18M3 17h18"/></svg>';
  var ICON_X = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.3"><path d="M5 5l14 14M19 5L5 19"/></svg>';
  var NAV = [["home", "elite-man-home.html", "nav_home"], ["catalog", "catalog.html", "nav_catalog"], ["atelier", "atelier.html", "nav_atelier"],
    ["fabrics", "atelier.html#fabrics", "nav_fabrics"], ["look", "atelier.html#look", "nav_look"], ["groom", "groom.html", "nav_groom"]];
  function chrome(opt) {
    opt = opt || {};
    var page = opt.page || "";
    var nav = NAV.map(function (n) { return '<a href="' + n[1] + '" data-i18n="' + n[2] + '"' + (n[0] === page ? ' aria-current="page"' : '') + '></a>'; }).join("");
    var top = '<div class="ribbon" data-i18n="ribbon"></div>' +
      '<header class="hdr" id="hdr"><div class="wrap hdr-in"><div><button class="icon-btn" type="button" id="menuBtn" aria-expanded="false" data-i18n-aria="menu">' + ICON_MENU + '</button></div>' +
      '<a class="logo" href="elite-man-home.html" aria-label="Elite Man Yerevan"><b>Elite Man</b><i>Yerevan</i></a>' +
      '<div class="hdr-right"><div class="langs" role="group" aria-label="Language"><button type="button" data-lang="hy" id="lang-hy">HY</button><button type="button" data-lang="ru" id="lang-ru">RU</button><button type="button" data-lang="en" id="lang-en">EN</button></div>' +
      '<a class="hdr-book" href="#booking" data-i18n="cta_book"></a></div></div></header>' +
      '<div class="drawer" id="drawer" hidden><nav class="drawer-panel" aria-label="Menu"><button class="icon-btn" type="button" id="menuClose" data-i18n-aria="close">' + ICON_X + '</button>' +
      nav + '<a href="#booking" data-i18n="cta_book"></a><a href="#contacts" data-i18n="nav_contacts"></a><a class="small" href="index-pages.html" data-i18n="nav_pages"></a></nav>' +
      '<button class="drawer-scrim" type="button" id="menuScrim" data-i18n-aria="close"></button></div>' +
      '<a class="sidetab" href="#booking" data-i18n="tab_book"></a>';
    document.body.insertAdjacentHTML("afterbegin", top);
    var bottom = '<footer id="contacts"><div class="wrap"><div class="fcols">' +
      '<div><h4>Elite Man Yerevan</h4><p data-i18n="f_about"></p></div>' +
      '<div><h4 data-i18n="f_clients"></h4><ul><li><a href="catalog.html" data-i18n="nav_catalog"></a></li><li><a href="atelier.html" data-i18n="nav_atelier"></a></li><li><a href="atelier.html#fabrics" data-i18n="nav_fabrics"></a></li><li><a href="groom.html" data-i18n="nav_groom"></a></li><li><a href="#booking" data-i18n="cta_book"></a></li></ul></div>' +
      '<div><h4 data-i18n="f_contacts"></h4><ul><li data-i18n="addr"></li><li><span class="num" id="phone">+374 99 40 40 66</span><button class="copy" type="button" id="copyPhone" data-i18n="copy"></button></li><li><a href="https://wa.me/37499404066" target="_blank" rel="noopener">WhatsApp</a></li><li><span data-i18n="hours"></span> <span data-i18n="sample"></span></li></ul></div>' +
      '<div><h4 data-i18n="f_follow"></h4><ul><li><a href="https://www.instagram.com/elitemanyerevan/" target="_blank" rel="noopener">Instagram</a></li><li><a href="https://www.google.com/maps/search/?api=1&query=Tumanyan+10+Yerevan" target="_blank" rel="noopener" data-i18n="map"></a></li></ul></div>' +
      '</div><div class="fbottom"><span>© 2026 Elite Man Yerevan</span><a href="index-pages.html" data-i18n="pages"></a><span data-i18n="foot"></span></div></div></footer>' +
      '<div class="mbar"><a class="btn btn-accent" href="#booking" data-i18n="cta_book"></a><a class="btn btn-dark" href="https://wa.me/37499404066" target="_blank" rel="noopener">WhatsApp</a></div>';
    document.body.insertAdjacentHTML("beforeend", bottom);

    var drawer = document.getElementById("drawer"), menuBtn = document.getElementById("menuBtn");
    EM.setMenu = function (open) { drawer.hidden = !open; menuBtn.setAttribute("aria-expanded", String(open)); if (open) document.getElementById("menuClose").focus(); };
    menuBtn.addEventListener("click", function () { EM.setMenu(true); });
    document.getElementById("menuClose").addEventListener("click", function () { EM.setMenu(false); menuBtn.focus(); });
    document.getElementById("menuScrim").addEventListener("click", function () { EM.setMenu(false); });
    drawer.querySelectorAll("a").forEach(function (a) { a.addEventListener("click", function () { EM.setMenu(false); }); });
    document.addEventListener("keydown", function (e) { if (e.key === "Escape" && !drawer.hidden) { EM.setMenu(false); menuBtn.focus(); } });

    document.querySelectorAll(".langs button").forEach(function (b) {
      b.addEventListener("click", function () { setLang(b.dataset.lang); });
    });
    var copyBtn = document.getElementById("copyPhone");
    copyBtn.addEventListener("click", function () {
      var el = document.getElementById("phone"), text = el.textContent.trim();
      var reset = function () { setTimeout(function () { copyBtn.textContent = t("copy"); }, 1600); };
      var fallback = function () { var r = document.createRange(); r.selectNodeContents(el); var s = window.getSelection(); s.removeAllRanges(); s.addRange(r); copyBtn.textContent = t("selected"); reset(); };
      try { navigator.clipboard.writeText(text).then(function () { copyBtn.textContent = t("copied"); reset(); }, fallback); } catch (e) { fallback(); }
    });
  }

  /* Booking form. opt: { service, title, sub, points: [keys], wedding } */
  var bk = null;
  function dayOf(i) { var n = new Date(); return new Date(n.getFullYear(), n.getMonth(), n.getDate() + i); }
  function dayLabel(i) {
    var d = dayOf(i);
    if (lang === "hy") return HY.wdl[d.getDay()] + ", " + HY.ml[d.getMonth()] + " " + d.getDate();
    try { return d.toLocaleDateString(LOCALE[lang], { weekday: "long", day: "numeric", month: "long" }); } catch (e) { return d.toDateString(); }
  }
  function booking(host, opt) {
    opt = opt || {};
    var pts = (opt.points || []).map(function (k) { return '<li data-i18n="' + k + '"></li>'; }).join("");
    host.innerHTML = '<div class="wrap booking"><div class="sec-head rv"><div class="label" data-i18n="b_label"></div><h2 class="title" data-i18n="' + (opt.title || "b_title") + '"></h2><p data-i18n="' + (opt.sub || "b_sub") + '"></p>' + (pts ? '<ul class="b-points">' + pts + '</ul>' : '') + '</div>' +
      '<div class="rv" style="--d:1"><form class="form" id="form" novalidate>' +
      '<div class="fld"><label for="fService" data-i18n="b_service"></label><select id="fService"><option value="rtw" data-i18n="o_rtw"></option><option value="mtm" data-i18n="o_mtm"></option><option value="wed" data-i18n="o_wed"></option></select></div>' +
      (opt.wedding ? '<div class="two"><div class="fld"><label for="fWedDate" data-i18n="b_wdate"></label><input id="fWedDate" type="date"></div><div class="fld"><label for="fCount" data-i18n="b_count"></label><select id="fCount"><option data-i18n="c_1"></option><option data-i18n="c_2"></option><option data-i18n="c_4"></option><option data-i18n="c_7"></option></select></div></div>' : '') +
      '<div class="fld"><span data-i18n="b_day"></span><div class="days" id="days"></div></div>' +
      '<div class="fld"><span data-i18n="b_time"></span><div class="times" id="times"></div></div>' +
      '<div class="two"><div class="fld"><label for="fName" data-i18n="b_name"></label><input id="fName" autocomplete="name"></div><div class="fld"><label for="fPhone" data-i18n="b_phone"></label><input id="fPhone" type="tel" autocomplete="tel" placeholder="+374"></div></div>' +
      '<div class="fld"><label for="fNote" data-i18n="b_note"></label><textarea id="fNote" data-i18n-ph="b_note_ph"></textarea></div>' +
      '<p class="err" id="err" role="alert"></p><div><button class="btn btn-accent" type="submit" data-i18n="b_submit"></button></div></form>' +
      '<div class="form done" id="done" hidden><div class="label" data-i18n="b_label"></div><h3 id="doneTitle"></h3><p class="proto" data-i18n="b_proto"></p><div><button class="btn btn-dark" type="button" id="again" data-i18n="b_again"></button></div></div></div></div>';
    var form = host.querySelector("#form"), done = host.querySelector("#done"), err = host.querySelector("#err");
    form.querySelector("#fService").value = opt.service || "rtw";
    bk = { selDay: null, selTime: null, form: form, done: done, service: opt.service || "rtw" };
    form.addEventListener("submit", function (ev) {
      ev.preventDefault();
      var name = form.querySelector("#fName").value.trim(), phone = form.querySelector("#fPhone").value.trim();
      if (!bk.selDay || !bk.selTime) { err.textContent = t("e_slot"); return; }
      if (!name || phone.replace(/\D/g, "").length < 6) { err.textContent = t("e_contact"); return; }
      err.textContent = "";
      host.querySelector("#doneTitle").textContent = t("b_done", { name: name, date: dayLabel(bk.selDay), time: bk.selTime });
      form.hidden = true; done.hidden = false;
    });
    host.querySelector("#again").addEventListener("click", function () {
      form.reset(); form.querySelector("#fService").value = bk.service; bk.selDay = null; bk.selTime = null; renderSlots(); done.hidden = true; form.hidden = false;
    });
  }
  var TIMES = ["11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00"];
  function renderSlots() {
    if (!bk) return;
    var box = document.getElementById("days"); box.innerHTML = "";
    for (var i = 1; i <= 7; i++) {
      var d = dayOf(i), b = document.createElement("button"), wd, dm;
      b.type = "button"; b.className = "day"; b.id = "day-" + i;
      if (lang === "hy") { wd = HY.wd[d.getDay()]; dm = d.getDate() + " " + HY.m[d.getMonth()]; }
      else try { wd = d.toLocaleDateString(LOCALE[lang], { weekday: "short" }); dm = d.toLocaleDateString(LOCALE[lang], { day: "numeric", month: "short" }); }
      catch (e) { wd = ""; dm = d.getDate() + "." + (d.getMonth() + 1); }
      b.innerHTML = "<small>" + wd + "</small>" + dm; b.dataset.i = i; b.setAttribute("aria-pressed", String(bk.selDay === i));
      b.addEventListener("click", function () { bk.selDay = +this.dataset.i; bk.selTime = null; renderSlots(); });
      box.appendChild(b);
    }
    var tb = document.getElementById("times"); tb.innerHTML = "";
    TIMES.forEach(function (tm, k) {
      var b = document.createElement("button"); b.type = "button"; b.className = "time num"; b.textContent = tm; b.id = "time-" + k;
      if (bk.selDay && ((bk.selDay * 3 + k) % 5 === 0)) b.disabled = true;
      b.setAttribute("aria-pressed", String(bk.selTime === tm));
      b.addEventListener("click", function () { bk.selTime = tm; renderSlots(); });
      tb.appendChild(b);
    });
    if (!bk.done.hidden && bk.selDay) document.getElementById("doneTitle").textContent = t("b_done", { name: document.getElementById("fName").value.trim(), date: dayLabel(bk.selDay), time: bk.selTime });
  }
  /* Called by "book" buttons: preset the service and the comment, then the anchor scrolls to the form */
  function prefill(service, note) {
    if (!bk) return;
    if (!bk.done.hidden) { bk.done.hidden = true; bk.form.hidden = false; }
    if (service) bk.form.querySelector("#fService").value = service;
    if (note != null) bk.form.querySelector("#fNote").value = note;
    bk.form.classList.remove("flash-form"); void bk.form.offsetWidth; bk.form.classList.add("flash-form");
  }

  /* Language */
  var renders = [];
  function onLang(fn) { renders.push(fn); }
  function applyLang() {
    document.documentElement.lang = lang;
    document.querySelectorAll("[data-i18n]").forEach(function (el) { el.textContent = t(el.dataset.i18n); });
    document.querySelectorAll("[data-i18n-ph]").forEach(function (el) { el.placeholder = t(el.dataset.i18nPh); });
    document.querySelectorAll("[data-i18n-aria]").forEach(function (el) { el.setAttribute("aria-label", t(el.dataset.i18nAria)); });
    document.querySelectorAll(".langs button").forEach(function (b) { b.setAttribute("aria-pressed", String(b.dataset.lang === lang)); });
    if (T[lang].doc_title) document.title = t("doc_title");
    renderSlots();
    renders.forEach(function (fn) { fn(); });
  }
  function setLang(l) { if (!T[l]) return; lang = l; try { localStorage.setItem("em-lang", lang); } catch (e) {} applyLang(); }
  function start() {
    applyLang();
    document.querySelectorAll("img[data-ph]").forEach(watchImg);
    document.querySelectorAll(".rv").forEach(observe);
  }

  var EM = window.EM = {
    add: add, t: t, L: L, amd: amd, from: from, esc: esc, lang: function () { return lang; }, reduce: reduce,
    watchImg: watchImg, observe: observe, blurTitle: blurTitle,
    drawCloth: drawCloth, clothURL: clothURL, FAB: FAB, byId: byId,
    PRODUCTS: PRODUCTS, PBY: PBY, pName: pName, sizeLabel: sizeLabel, photo: photo, clothBg: clothBg, specs: specs, productCard: productCard,
    chrome: chrome, booking: booking, prefill: prefill, onLang: onLang, applyLang: applyLang, setLang: setLang, start: start
  };
})();
