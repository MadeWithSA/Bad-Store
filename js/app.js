// Telegram Bot Config
const BOT_TOKEN = '9055522301:AAGUQOJ2f08UukjNbJb4yGg0ZhzROaLfTl8';
const CHAT_ID = '5249728466';

// Luxury SVG Vector Icons
const ICONS = {
  cart: `<svg class="icon icon-cart" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>`,
  heart: `<svg class="icon icon-heart" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>`,
  heartFilled: `<svg class="icon icon-heart filled" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="1.8"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>`,
  moon: `<svg class="icon icon-moon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>`,
  sun: `<svg class="icon icon-sun" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>`,
  search: `<svg class="icon icon-search" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>`,
  plus: `<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>`,
  minus: `<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><line x1="5" y1="12" x2="19" y2="12"/></svg>`,
  trash: `<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/><line x1="10" y1="11" x2="10" y2="17"/><line x1="14" y1="11" x2="14" y2="17"/></svg>`,
  arrowLeft: `<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/></svg>`,
  arrowRight: `<svg class="icon icon-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>`,
  arrowUp: `<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="19" x2="12" y2="5"/><polyline points="5 12 12 5 19 12"/></svg>`,
  check: `<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>`,
  sparkle: `<svg class="icon icon-sparkle" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 2l2.4 6.6L21 11l-6.6 2.4L12 20l-2.4-6.6L3 11l6.6-2.4z"/></svg>`
  ,shield: `<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3l7 3v5c0 4.5-3 8.2-7 10-4-1.8-7-5.5-7-10V6z"/><path d="M9 12l2 2 4-4"/></svg>`,
  gift: `<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="8" width="18" height="4" rx="1"/><path d="M12 8v13M5 12v8a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-8"/><path d="M12 8c-1.5-3-5-3.5-5-1.3C7 8.5 9 8 12 8zM12 8c1.5-3 5-3.5 5-1.3 0 1.8-2 1.3-5 1.3z"/></svg>`,
  truck: `<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M3 6h11v10H3z"/><path d="M14 9h4l3 3v4h-7"/><circle cx="7" cy="18" r="2"/><circle cx="17" cy="18" r="2"/></svg>`,
  star: `<svg class="icon" viewBox="0 0 24 24"><path d="M12 2.5l2.9 6.1 6.6.9-4.8 4.6 1.2 6.6L12 17.4l-5.9 3.3 1.2-6.6L2.5 9.5l6.6-.9z"/></svg>`,
  bottle: `<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M9 3h6v3H9z"/><path d="M10 6v2M14 6v2"/><rect x="6" y="8" width="12" height="13" rx="3"/><path d="M12 12v5M9.5 14.5h5"/></svg>`
};

// i18n
const translations = {
  en: {
    home: "Home", catalog: "Catalog", cart: "Cart", favorites: "Favorites", profile: "Profile",
    heroTitle: "Discover Your Signature Scent", heroSub: "Premium fragrances crafted for those who appreciate true luxury. Exclusive scents at marketplace prices.",
    shopNow: "Shop Collection", featured: "Featured Fragrances", allProducts: "All Products",
    addToCart: "Add to Cart", added: "Added to Cart!", size: "Size", price: "Price",
    search: "Search fragrances...", filterAll: "All Categories", filterMen: "Men's", filterWomen: "Women's", filterUnisex: "Unisex",
    sortName: "Alphabetical", sortPriceLow: "Price: Low to High", sortPriceHigh: "Price: High to Low",
    emptyCart: "Your cart is empty", emptyFav: "No favorites yet", goCatalog: "Browse Catalog",
    total: "Total", subtotal: "Subtotal", packaging: "Luxury Gift Packaging", free: "Free", checkout: "Place Order", qty: "Qty", remove: "Remove",
    orderSuccess: "Order sent! We will contact you soon.", orderFail: "Failed to send order.",
    profileTitle: "My Profile", name: "Name", phone: "Phone", address: "Address", save: "Save Profile",
    saved: "Profile saved!", orderNote: "Your order will be securely sent to our Telegram concierge.",
    productDetails: "Product Details", back: "Back to Catalog", inStock: "In Stock & Ready to Ship",
    desc: "Description", related: "You may also like",
    viewDetails: "View Details"
  },
  ru: {
    home: "Главная", catalog: "Каталог", cart: "Корзина", favorites: "Избранное", profile: "Профиль",
    heroTitle: "Найдите свой идеальный аромат", heroSub: "Премиальные парфюмы для тех, кто ценит настоящую роскошь. Эксклюзивные ароматы по ценам маркетплейса.",
    shopNow: "Смотреть коллекцию", featured: "Популярные ароматы", allProducts: "Все товары",
    addToCart: "В корзину", added: "Добавлено!", size: "Объём", price: "Цена",
    search: "Поиск духов...", filterAll: "Все категории", filterMen: "Мужские", filterWomen: "Женские", filterUnisex: "Унисекс",
    sortName: "По названию", sortPriceLow: "Сначала дешевле", sortPriceHigh: "Сначала дороже",
    emptyCart: "Корзина пуста", emptyFav: "Избранного пока нет", goCatalog: "В каталог",
    total: "Итого", subtotal: "Сумма товаров", packaging: "Фирменная упаковка", free: "Бесплатно", checkout: "Оформить заказ", qty: "Кол-во", remove: "Удалить",
    orderSuccess: "Заказ отправлен! Мы свяжемся с вами.", orderFail: "Не удалось отправить заказ.",
    profileTitle: "Мой профиль", name: "Имя", phone: "Телефон", address: "Адрес", save: "Сохранить",
    saved: "Профиль сохранён!", orderNote: "Ваш заказ будет отправлен нашему консьержу в Telegram.",
    productDetails: "О товаре", back: "Назад в каталог", inStock: "В наличии на складе",
    desc: "Описание", related: "Вам также может понравиться",
    viewDetails: "Подробнее"
  },
  uz: {
    home: "Bosh sahifa", catalog: "Katalog", cart: "Savat", favorites: "Sevimlilar", profile: "Profil",
    heroTitle: "O'zingizning ideal atiringizni toping", heroSub: "Haqiqiy hashamatni qadrlaydiganlar uchun premium atirlar. Marketplace narxlarida eksklyuziv hidlar.",
    shopNow: "Kolleksiyani ko'rish", featured: "Mashhur atirlar", allProducts: "Barcha mahsulotlar",
    addToCart: "Savatga", added: "Qo'shildi!", size: "Hajmi", price: "Narxi",
    search: "Atir qidirish...", filterAll: "Barcha toifalar", filterMen: "Erkaklar", filterWomen: "Ayollar", filterUnisex: "Unisex",
    sortName: "Nomi bo'yicha", sortPriceLow: "Narx: arzondan", sortPriceHigh: "Narx: qimmatdan",
    emptyCart: "Savat bo'sh", emptyFav: "Sevimlilar yo'q", goCatalog: "Katalogga o'tish",
    total: "Jami", subtotal: "Mahsulotlar narxi", packaging: "Brendli sovg'a qutisi", free: "Bepul", checkout: "Buyurtma berish", qty: "Soni", remove: "O'chirish",
    orderSuccess: "Buyurtma yuborildi! Tez orada bog'lanamiz.", orderFail: "Buyurtma yuborilmadi.",
    profileTitle: "Mening profilim", name: "Ism", phone: "Telefon", address: "Manzil", save: "Saqlash",
    saved: "Profil saqlandi!", orderNote: "Buyurtmangiz Telegram konsyerjiga yuboriladi.",
    productDetails: "Mahsulot haqida", back: "Katalogga qaytish", inStock: "Omborda mavjud",
    desc: "Tavsif", related: "Sizga ham yoqishi mumkin",
    viewDetails: "Batafsil"
  }
};

let currentLang = localStorage.getItem('lang') || 'ru';
let currentTheme = localStorage.getItem('theme') || 'light';

function t(key) {
  return (translations[currentLang] && translations[currentLang][key]) ||
         (translations.ru && translations.ru[key]) ||
         (translations.en && translations.en[key]) || key;
}

function setLang(lang) {
  currentLang = lang;
  localStorage.setItem('lang', lang);
  document.documentElement.lang = lang;
  updateUI();
}

function setTheme(theme, animate) {
  currentTheme = theme;
  localStorage.setItem('theme', theme);
  document.documentElement.setAttribute('data-theme', theme);
  const btn = document.getElementById('theme-btn');
  if (btn) {
    btn.innerHTML = theme === 'dark' ? ICONS.sun : ICONS.moon;
    btn.setAttribute('title', theme === 'dark' ? 'Light Theme' : 'Dark Theme');
    if (animate) { btn.classList.remove('spin'); void btn.offsetWidth; btn.classList.add('spin'); }
  }
}

// Storage helpers
function getCart() {
  try {
    return JSON.parse(localStorage.getItem('cart') || '[]');
  } catch (e) {
    return [];
  }
}

function saveCart(cart) {
  localStorage.setItem('cart', JSON.stringify(cart));
  updateBadges(true);
}

function getFavs() {
  try {
    return JSON.parse(localStorage.getItem('favs') || '[]');
  } catch (e) {
    return [];
  }
}

function saveFavs(favs) {
  localStorage.setItem('favs', JSON.stringify(favs));
  updateBadges(true);
}

// Cart interactions
function addToCart(id) {
  const cart = getCart();
  const item = cart.find(i => i.id === id);
  if (item) item.qty += 1;
  else cart.push({ id, qty: 1 });
  saveCart(cart);
  showToast(t('added'), 'check');
}

function addToCartWithFeedback(btn, id) {
  addToCart(id);
  flashButton(btn, t('added'));
}

// Favorite interactions
function toggleFav(id) {
  let favs = getFavs();
  const wasFav = favs.includes(id);
  if (wasFav) {
    favs = favs.filter(f => f !== id);
    showToast(currentLang === 'en' ? 'Removed from favorites' : currentLang === 'uz' ? 'Sevimlilardan o\'chirildi' : 'Удалено из избранного', 'sparkle');
  } else {
    favs.push(id);
    showToast(currentLang === 'en' ? 'Added to favorites!' : currentLang === 'uz' ? 'Sevimlilarga qo\'shildi!' : 'Добавлено в избранное!', 'sparkle');
  }
  saveFavs(favs);
  instantRender(updateUI);
}

function updateBadges(animate = false) {
  const cart = getCart();
  const favs = getFavs();
  const cartCount = cart.reduce((s, i) => s + i.qty, 0);

  document.querySelectorAll('.cart-badge').forEach(el => {
    el.textContent = cartCount;
    el.style.display = cartCount ? 'flex' : 'none';
    if (animate) {
      el.classList.remove('badge-bounce');
      void el.offsetWidth; // Trigger reflow
      el.classList.add('badge-bounce'); bumpIcon(el);
    }
  });

  document.querySelectorAll('.fav-badge').forEach(el => {
    el.textContent = favs.length;
    el.style.display = favs.length ? 'flex' : 'none';
    if (animate) {
      el.classList.remove('badge-bounce');
      void el.offsetWidth;
      el.classList.add('badge-bounce'); bumpIcon(el);
    }
  });
}

// Toast
function showToast(msg, iconType = 'check') {
  const old = document.querySelector('.toast');
  if (old) old.remove();

  const toast = document.createElement('div');
  toast.className = 'toast';
  const iconSvg = iconType === 'sparkle' ? ICONS.sparkle : ICONS.check;
  toast.innerHTML = `<span class="toast-icon">${iconSvg}</span><span>${msg}</span>`;
  document.body.appendChild(toast);

  setTimeout(() => {
    toast.classList.add('toast-out');
    setTimeout(() => toast.remove(), 400);
  }, 2600);
}

function getProduct(id) {
  if (typeof products === 'undefined') return null;
  return products.find(p => p.id === Number(id));
}

// Luxury Product Card Renderer
function renderProductCard(p, index = 0) {
  const favs = getFavs();
  const isFav = favs.includes(p.id);
  const name = (p.name && (p.name[currentLang] || p.name.en || p.name.ru)) || 'Fragrance';
  const desc = (p.desc && (p.desc[currentLang] || p.desc.en || p.desc.ru)) || '';
  const delay = Math.min(index * 0.04, 0.4);

  return `
    <article class="product-card">
      <div class="product-img-wrap">
        <a href="product.html?id=${p.id}" class="product-img-link" aria-label="${name}">
          <img class="product-img" src="${p.image}" alt="${name}" loading="lazy" onerror="this.onerror=null;this.src='https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=500&auto=format&fit=crop&q=80'">
          <div class="product-card-shine"></div>
        </a>
        <button class="card-fav-btn ${isFav ? 'is-fav' : ''}" onclick="event.preventDefault();toggleFav(${p.id})" title="${isFav ? 'В избранном' : 'В избранное'}" aria-label="Favorite">
          ${isFav ? ICONS.heartFilled : ICONS.heart}
        </button>
        <div class="product-quick">
          <button class="btn btn-card-cart" onclick="event.preventDefault();addToCartWithFeedback(this, ${p.id})">
            ${ICONS.cart}
            <span>${t('addToCart')}</span>
          </button>
        </div>
      </div>
      <div class="product-body">
        <div class="product-meta-top">
          <span class="product-cat">${p.category}</span>
          <span class="product-size-badge">${p.size}</span>
        </div>
        <a href="product.html?id=${p.id}"><h3 class="product-name">${name}</h3></a>
        <p class="product-desc">${desc}</p>
        <div class="product-meta">
          <div class="product-price-block">
            <span class="price-label">${t('price')}</span>
            <span class="product-price">$${p.price.toFixed(2)}</span>
          </div>
          <a href="product.html?id=${p.id}" class="product-view-btn" title="${t('viewDetails')}">
            ${ICONS.arrowRight}
          </a>
        </div>
      </div>
    </article>
  `;
}

// Back to Top Button
function initBackToTop() {
  let btn = document.getElementById('back-to-top');
  if (!btn) {
    btn = document.createElement('button');
    btn.id = 'back-to-top';
    btn.className = 'back-to-top';
    btn.setAttribute('aria-label', 'Scroll to top');
    btn.innerHTML = ICONS.arrowUp;
    document.body.appendChild(btn);
  }

  window.addEventListener('scroll', () => {
    if (window.scrollY > 350) {
      btn.classList.add('visible');
    } else {
      btn.classList.remove('visible');
    }
  });

  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

// Update text on page
function updateUI() {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    el.textContent = t(key);
  });
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    el.placeholder = t(el.getAttribute('data-i18n-placeholder'));
  });

  if (typeof renderPage === 'function') {
    renderPage();
  }
  updateBadges();
  if (typeof syncAllCustomSelects === 'function') syncAllCustomSelects();
}

// Order through Telegram Concierge
async function sendOrder() {
  const cart = getCart();
  if (!cart.length) return;
  const profile = JSON.parse(localStorage.getItem('profile') || '{}');

  let text = `✨ *НОВЫЙ ЗАКАЗ — BAD STORE HAUTE PARFUMERIE*\n\n`;
  text += `👤 *Клиент:* ${profile.name || 'Не указано'}\n`;
  text += `📞 *Телефон:* ${profile.phone || 'Не указано'}\n`;
  text += `📍 *Адрес:* ${profile.address || 'Не указано'}\n\n`;
  text += `📦 *Состав заказа:*\n`;

  let total = 0;
  cart.forEach(item => {
    const p = getProduct(item.id);
    if (p) {
      const name = p.name.ru || p.name.en;
      const sum = p.price * item.qty;
      total += sum;
      text += `• ${name} (${p.size}) × ${item.qty} шт. = $${sum.toFixed(2)}\n`;
    }
  });

  text += `\n🎁 *Упаковка:* Фирменный бокс Bad Store (Бесплатно)\n`;
  text += `💰 *ИТОГО К ОПЛАТЕ: $${total.toFixed(2)}*`;

  const checkoutBtn = document.querySelector('.checkout-btn');
  if (checkoutBtn) {
    checkoutBtn.disabled = true;
    checkoutBtn.innerHTML = '<span class="spinner"></span><span>Отправка...</span>';
  }

  try {
    const res = await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ chat_id: CHAT_ID, text, parse_mode: 'Markdown' })
    });

    if (res.ok) {
      showToast(t('orderSuccess'), 'check');
      saveCart([]);
      setTimeout(() => location.href = 'index.html', 1600);
    } else {
      showToast(t('orderFail'));
      if (checkoutBtn) {
        checkoutBtn.disabled = false;
        checkoutBtn.innerHTML = `<span>${t('checkout')}</span>${ICONS.arrowRight}`;
      }
    }
  } catch (e) {
    showToast(t('orderFail'));
    console.error(e);
    if (checkoutBtn) {
      checkoutBtn.disabled = false;
      checkoutBtn.innerHTML = `<span>${t('checkout')}</span>${ICONS.arrowRight}`;
    }
  }
}

/* ===== Premium motion layer ===== */
const REDUCED = matchMedia('(prefers-reduced-motion: reduce)').matches;

// re-render without replaying entrance animations (favorites, qty, search typing)
function instantRender(fn) {
  window.__instant = true;
  try { fn(); } finally { clearTimeout(window.__it); window.__it = setTimeout(() => window.__instant = false, 150); }
}
function bumpIcon(badge) {
  const b = badge.closest('.btn-icon');
  if (b) { b.classList.remove('bump'); void b.offsetWidth; b.classList.add('bump'); }
}
function flashButton(btn, label) {
  if (!btn || btn.dataset.flash) return;
  btn.dataset.flash = '1';
  const orig = btn.innerHTML;
  btn.classList.add('btn-added');
  btn.innerHTML = `${ICONS.check}<span>${label}</span>`;
  setTimeout(() => { btn.classList.remove('btn-added'); btn.innerHTML = orig; delete btn.dataset.flash; }, 1400);
}

// Scroll reveal (starts only after the preloader opens)
const RV = '.pillar-card,.section-header,.filters,.product-card,.product-detail,.cart-item,.cart-total,.profile-card,.empty-state,.pagination,.footer-inner';
let revealIO, pendingReveal = [];
function showReveal(list) { list.forEach((el, i) => { el.style.setProperty('--d', Math.min(i, 8) * 0.07 + 's'); el.classList.add('in'); }); }
function scanReveal(root) {
  if (!revealIO || !root.querySelectorAll) return;
  const els = [...root.querySelectorAll(RV)];
  if (root.matches && root.matches(RV)) els.unshift(root);
  els.forEach(el => {
    if (el.dataset.rv) return;
    el.dataset.rv = '1';
    el.classList.add('reveal');
    if (window.__instant) el.classList.add('instant'); else revealIO.observe(el);
  });
}
function initReveal() {
  if (REDUCED || !('IntersectionObserver' in window)) return;
  revealIO = new IntersectionObserver(entries => {
    const vis = entries.filter(e => e.isIntersecting).map(e => e.target);
    vis.forEach(el => revealIO.unobserve(el));
    if (document.body.classList.contains('is-ready')) showReveal(vis); else pendingReveal.push(...vis);
  }, { threshold: 0.1, rootMargin: '0px 0px -5% 0px' });
  scanReveal(document.body);
  new MutationObserver(m => m.forEach(r => r.addedNodes.forEach(n => n.nodeType === 1 && scanReveal(n)))).observe(document.body, { childList: true, subtree: true });
}

// Preloader: bottle fills with gold, then curtains part
function initPreloader() {
  const pl = document.getElementById('preloader');
  const ready = () => { document.body.classList.add('is-ready'); showReveal(pendingReveal.splice(0)); };
  if (!pl) return ready();
  document.documentElement.classList.add('is-loading');
  const quick = pl.classList.contains('is-quick');
  const dur = REDUCED ? 150 : quick ? 450 : 2500;
  const liquid = document.getElementById('plLiquid'), bar = document.getElementById('plBar'), num = document.getElementById('plNum');
  let loaded = document.readyState === 'complete';
  if (!loaded) window.addEventListener('load', () => loaded = true, { once: true });
  const t0 = performance.now();
  const paint = p => {
    liquid && liquid.setAttribute('transform', `translate(0,${(150 - p * 112).toFixed(1)})`);
    bar && (bar.style.transform = `scaleX(${p})`);
    num && (num.textContent = Math.round(p * 100));
  };
  const exit = () => {
    paint(1);
    setTimeout(() => {
      pl.classList.add('is-exit');
      setTimeout(() => { document.documentElement.classList.remove('is-loading'); ready(); }, REDUCED ? 0 : 420);
      setTimeout(() => pl.remove(), 1500);
    }, quick ? 60 : 380);
  };
  const frame = now => {
    const el = now - t0;
    let p = 1 - Math.pow(1 - Math.min(el / dur, 1), 2.6);
    if (!loaded) p = Math.min(p, 0.94);
    paint(p);
    if ((el >= dur && loaded) || el > 7000) return exit();
    requestAnimationFrame(frame);
  };
  requestAnimationFrame(frame);
  try { sessionStorage.setItem('bs_seen', '1'); } catch (e) {}
}

function initExtras() {
  document.querySelectorAll('[data-icon]').forEach(el => el.innerHTML = ICONS[el.dataset.icon] || '');
  // gold ripple on buttons
  document.addEventListener('pointerdown', e => {
    const b = e.target.closest && e.target.closest('.btn');
    if (!b || b.disabled) return;
    const r = b.getBoundingClientRect(), s = Math.max(r.width, r.height) * 2;
    const sp = document.createElement('span');
    sp.className = 'ripple';
    sp.style.cssText = `width:${s}px;height:${s}px;left:${e.clientX - r.left - s / 2}px;top:${e.clientY - r.top - s / 2}px`;
    b.appendChild(sp);
    setTimeout(() => sp.remove(), 800);
  });
  // scroll progress line under the header
  const h = document.querySelector('.header');
  if (h) {
    const bar = document.createElement('div');
    bar.className = 'scroll-progress';
    h.appendChild(bar);
    const upd = () => { const m = document.documentElement.scrollHeight - innerHeight; bar.style.setProperty('--sp', m > 0 ? Math.min(scrollY / m, 1) : 0); };
    addEventListener('scroll', () => requestAnimationFrame(upd), { passive: true });
    upd();
  }
  // floating gold dust in the hero
  const hero = document.querySelector('.hero');
  if (hero && !REDUCED) {
    const w = document.createElement('div');
    w.className = 'hero-dust';
    for (let i = 0; i < 22; i++) {
      const s = document.createElement('span'), z = 1 + Math.random() * 3;
      s.style.cssText = `left:${Math.random() * 100}%;width:${z}px;height:${z}px;animation-duration:${8 + Math.random() * 10}s;animation-delay:${-Math.random() * 14}s`;
      w.appendChild(s);
    }
    hero.appendChild(w);
  }
}


// Custom Luxury Dropdowns (replaces ugly native OS <select> menus)
function initCustomSelects() {
  const selects = document.querySelectorAll('.lang-select, .filter-select');
  selects.forEach(select => {
    if (select.dataset.customized) return;
    select.dataset.customized = '1';

    const isLang = select.classList.contains('lang-select');
    const wrapper = document.createElement('div');
    wrapper.className = `c-select ${isLang ? 'c-select--lang' : 'c-select--filter'}`;

    select.parentNode.insertBefore(wrapper, select);
    wrapper.appendChild(select);
    select.classList.add('c-select-native');

    const trigger = document.createElement('button');
    trigger.type = 'button';
    trigger.className = 'c-select-trigger';
    trigger.setAttribute('aria-haspopup', 'listbox');
    trigger.setAttribute('aria-expanded', 'false');

    const menu = document.createElement('div');
    menu.className = 'c-select-menu';
    menu.setAttribute('role', 'listbox');

    wrapper.appendChild(trigger);
    wrapper.appendChild(menu);

    function syncMenu() {
      const selectedOpt = select.options[select.selectedIndex] || select.options[0];
      trigger.innerHTML = `
        <span class="c-select-label">${selectedOpt ? selectedOpt.textContent : ''}</span>
        <svg class="c-select-chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg>
      `;

      menu.innerHTML = '';
      Array.from(select.options).forEach(opt => {
        const item = document.createElement('button');
        item.type = 'button';
        const active = opt.value === select.value;
        item.className = `c-select-option ${active ? 'is-selected' : ''}`;
        item.setAttribute('role', 'option');
        item.setAttribute('aria-selected', active ? 'true' : 'false');
        item.innerHTML = `
          <span>${opt.textContent}</span>
          <svg class="c-select-check" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
        `;
        item.addEventListener('click', e => {
          e.stopPropagation();
          if (select.value !== opt.value) {
            select.value = opt.value;
            select.dispatchEvent(new Event('change', { bubbles: true }));
          }
          wrapper.classList.remove('is-open');
          trigger.setAttribute('aria-expanded', 'false');
          syncMenu();
        });
        menu.appendChild(item);
      });
    }

    trigger.addEventListener('click', e => {
      e.stopPropagation();
      const isOpen = wrapper.classList.contains('is-open');
      document.querySelectorAll('.c-select.is-open').forEach(el => {
        el.classList.remove('is-open');
        const btn = el.querySelector('.c-select-trigger');
        if (btn) btn.setAttribute('aria-expanded', 'false');
      });
      if (!isOpen) {
        syncMenu();
        wrapper.classList.add('is-open');
        trigger.setAttribute('aria-expanded', 'true');
      }
    });

    select._syncCustom = syncMenu;
    syncMenu();
  });

  if (!window.__cSelectDocBound) {
    window.__cSelectDocBound = true;
    document.addEventListener('click', () => {
      document.querySelectorAll('.c-select.is-open').forEach(el => {
        el.classList.remove('is-open');
        const btn = el.querySelector('.c-select-trigger');
        if (btn) btn.setAttribute('aria-expanded', 'false');
      });
    });
    document.addEventListener('keydown', e => {
      if (e.key === 'Escape') {
        document.querySelectorAll('.c-select.is-open').forEach(el => el.classList.remove('is-open'));
      }
    });
  }
}

function syncAllCustomSelects() {
  document.querySelectorAll('.c-select-native').forEach(s => {
    if (typeof s._syncCustom === 'function') s._syncCustom();
  });
}

// Initialize on DOM load
document.addEventListener('DOMContentLoaded', () => {
  initReveal();
  initPreloader();
  setTheme(currentTheme);
  setLang(currentLang);

  const langSelect = document.getElementById('lang-select');
  if (langSelect) {
    langSelect.value = currentLang;
    langSelect.addEventListener('change', e => instantRender(() => setLang(e.target.value)));
  }

  const themeBtn = document.getElementById('theme-btn');
  if (themeBtn) {
    themeBtn.addEventListener('click', () => {
      const next = currentTheme === 'dark' ? 'light' : 'dark';
      if (!document.startViewTransition || REDUCED) return setTheme(next, true);
      // circular reveal from the button
      const r = themeBtn.getBoundingClientRect(), x = r.left + r.width / 2, y = r.top + r.height / 2;
      const end = Math.hypot(Math.max(x, innerWidth - x), Math.max(y, innerHeight - y));
      document.startViewTransition(() => setTheme(next, true)).ready.then(() =>
        document.documentElement.animate(
          { clipPath: [`circle(0px at ${x}px ${y}px)`, `circle(${end}px at ${x}px ${y}px)`] },
          { duration: 750, easing: 'cubic-bezier(.65,0,.35,1)', pseudoElement: '::view-transition-new(root)' }
        )).catch(() => {});
    });
  }

  initCustomSelects();
  initBackToTop();
  updateBadges();
  initExtras();

  const header = document.querySelector('.header');
  if (header) {
    window.addEventListener('scroll', () => header.classList.toggle('scrolled', window.scrollY > 20));
  }
});
