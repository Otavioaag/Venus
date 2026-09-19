/* =========================================================
   VÊNUS SEMIJOIAS — SCRIPT
   ========================================================= */

/* ---------------------------------------------------------
   1) NÚMERO DO WHATSAPP
   Altere apenas esta constante para trocar o número da loja.
--------------------------------------------------------- */
const WHATSAPP_NUMBER = "5517997514767";

/* ---------------------------------------------------------
   2) INSTAGRAM
   Substitua pela URL real do perfil quando estiver disponível.
--------------------------------------------------------- */
const INSTAGRAM_URL = "https://instagram.com/venussemijoias";

/* ---------------------------------------------------------
   3) PRODUTOS
   Para adicionar uma peça nova, duplique um objeto do array
   e altere os campos abaixo:

   name        -> nome da peça (aparece no card, no modal e na mensagem do WhatsApp)
   category    -> uma das: "Anéis", "Brincos", "Colares", "Pulseiras", "Conjuntos"
   price       -> texto livre, ex: "R$ 129,90"
   description -> frase curta usada no modal
   image       -> caminho da foto real, ex: "./assets/products/colar-aurora.jpg"
                  (enquanto não houver foto, deixe vazio "" que um
                  visual editorial de identidade é gerado automaticamente)
   symbol      -> pequeno símbolo do card enquanto não há foto (opcional)
--------------------------------------------------------- */
const products = [
  {
    name: "Colar Aurora",
    category: "Colares",
    price: "R$ 129,90",
    description: "Corrente fina em banho dourado com pingente de zircônia, para um brilho discreto no dia a dia.",
    image: "./assets/products/colar-aurora.jpg",
    tone: "rose"
  },
  {
    name: "Brinco Afrodite",
    category: "Brincos",
    price: "R$ 89,90",
    description: "Argola vazada com detalhe de estrela, inspirada nos símbolos da identidade Vênus.",
    image: "./assets/products/brinco-afrodite.jpg",
    tone: "gold"
  },
  {
    name: "Anel Vênus",
    category: "Anéis",
    price: "R$ 74,90",
    description: "Aro fino com zircônia central, pensado para uso solo ou combinado em camadas.",
    image: "./assets/products/anel-venus.jpg",
    tone: "lilac"
  },
  {
    name: "Colar Celeste",
    category: "Colares",
    price: "R$ 149,90",
    description: "Corrente dupla com pingente de lua, para compor looks do dia à noite.",
    image: "./assets/products/colar-celeste.jpg",
    tone: "chocolate"
  },
  {
    name: "Brinco Íris",
    category: "Brincos",
    price: "R$ 99,90",
    description: "Ponto de luz em formato gota, leve o suficiente para o uso diário.",
    image: "./assets/products/brinco-iris.jpg",
    tone: "rose"
  },
  {
    name: "Pulseira Éden",
    category: "Pulseiras",
    price: "R$ 84,90",
    description: "Elos delicados com fecho ajustável, feita para ser sobreposta a outras peças.",
    image: "./assets/products/pulseira-eden.jpg",
    tone: "gold"
  },
  {
    name: "Anel Gaia",
    category: "Anéis",
    price: "R$ 79,90",
    description: "Design orgânico com textura martelada, acabamento fosco.",
    image: "./assets/products/anel-gaia.jpg",
    tone: "chocolate"
  },
  {
    name: "Conjunto Áurea",
    category: "Conjuntos",
    price: "R$ 189,90",
    description: "Colar e brinco combinando, com pingentes em formato de estrela de quatro pontas.",
    image: "./assets/products/conjunto-aurea.jpg",
    tone: "lilac"
  },
  {
    name: "Pulseira Flora",
    category: "Pulseiras",
    price: "R$ 69,90",
    description: "Correntinha fina com pequeno pingente floral, para o uso do dia a dia.",
    image: "./assets/products/pulseira-flora.jpg",
    tone: "rose"
  },
  {
    name: "Brinco Selene",
    category: "Brincos",
    price: "R$ 94,90",
    description: "Argola média com acabamento texturizado e brilho suave.",
    image: "./assets/products/brinco-selene.jpg",
    tone: "chocolate"
  },
  {
    name: "Colar Amora",
    category: "Colares",
    price: "R$ 119,90",
    description: "Ponto de luz em formato coração geométrico, discreto e atemporal.",
    image: "./assets/products/colar-amora.jpg",
    tone: "gold"
  },
  {
    name: "Conjunto Bellini",
    category: "Conjuntos",
    price: "R$ 199,90",
    description: "Anel e brinco em conjunto, com zircônias e acabamento acetinado.",
    image: "./assets/products/conjunto-bellini.jpg",
    tone: "rose"
  }
];

/* ---------------------------------------------------------
   Peças escolhidas para a seção "Os favoritos da Vênus"
   (pelo nome; troque livremente)
--------------------------------------------------------- */
const FAVORITE_NAMES = ["Conjunto Áurea", "Colar Aurora", "Brinco Afrodite"];

/* =========================================================
   WHATSAPP — mensagens e função central
   ========================================================= */
function openWhatsApp(message) {
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank", "noopener");
}

function whatsappUrl(message) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

const messages = {
  geral: "Olá! Conheci a Vênus pelo site e gostaria de conhecer as semijoias.",
  colecao: "Olá! Estava vendo a coleção da Vênus no site e gostaria de mais informações.",
  produto: (name) => `Olá! Vi o ${name} no site da Vênus e gostaria de saber mais sobre essa peça.`,
  produtoDetalhe: (name) => `Olá! Tenho interesse no ${name} da Vênus. Poderia me passar mais informações sobre disponibilidade e valor?`
};

/* liga os links estáticos de WhatsApp (header, hero, cta final, footer, flutuante) */
function wireStaticWhatsappLinks() {
  const bindings = [
    ["headerWhatsapp", messages.geral],
    ["heroWhatsapp", messages.geral],
    ["mobileWhatsapp", messages.geral],
    ["finalWhatsapp", messages.colecao],
    ["footerWhatsapp", messages.geral],
    ["floatWhatsapp", messages.geral]
  ];
  bindings.forEach(([id, msg]) => {
    const el = document.getElementById(id);
    if (el) el.href = whatsappUrl(msg);
  });

  const insta = document.getElementById("footerInstagram");
  if (insta) insta.href = INSTAGRAM_URL;
}

/* =========================================================
   VISUAL EDITORIAL DO PRODUTO (usado enquanto não há foto real)
   Gera um bloco com gradiente de marca + símbolo + inicial,
   evitando imagens quebradas ou genéricas.
   ========================================================= */
function jewelVisualHTML(product) {
  const initial = product.name.replace(/^(Colar|Brinco|Anel|Pulseira|Conjunto)\s/, "").charAt(0);
  return `
    <div class="jewel-visual tone-${product.tone}">
      <span class="jewel-mark">
        <span class="jewel-symbol">✦</span>
        <span class="jewel-initial">${initial}</span>
      </span>
    </div>`;
}

const toneGradients = {
  rose: "linear-gradient(150deg, var(--venus-rose) 0%, var(--venus-rose-deep) 100%)",
  gold: "linear-gradient(150deg, var(--venus-gold) 0%, #b9925c 100%)",
  lilac: "linear-gradient(150deg, var(--venus-lilac) 0%, #8b6c93 100%)",
  chocolate: "linear-gradient(150deg, var(--venus-chocolate) 0%, var(--venus-rose-deep) 100%)"
};

function applyToneBackground(container, tone) {
  container.style.background = toneGradients[tone] || toneGradients.rose;
}

/* Substitui o visual por uma foto real quando o arquivo existir em /assets/products */
function trySwapForRealPhoto(imgWrapperEl, product) {
  if (!product.image) return;
  const testImg = new Image();
  testImg.onload = () => {
    imgWrapperEl.style.backgroundImage = `url("${product.image}")`;
    imgWrapperEl.style.backgroundSize = "cover";
    imgWrapperEl.style.backgroundPosition = "center";
    imgWrapperEl.innerHTML = "";
  };
  testImg.onerror = () => { /* mantém o visual editorial */ };
  testImg.src = product.image;
}

/* =========================================================
   RENDER — GRID DE PRODUTOS
   ========================================================= */
const productGrid = document.getElementById("productGrid");

function renderProducts(list) {
  productGrid.innerHTML = list.map((product, i) => `
    <article class="product-card" style="animation-delay:${Math.min(i, 8) * 0.06}s" data-name="${product.name}">
      <div class="product-visual-wrap" data-open-modal data-name="${product.name}">
        <div class="product-visual" data-tone="${product.tone}">
          ${jewelVisualHTML(product)}
        </div>
        <div class="product-quickview">Ver detalhes</div>
      </div>
      <div class="product-info">
        <p class="product-category">${product.category}</p>
        <h3 class="product-name" data-open-modal data-name="${product.name}">${product.name}</h3>
        <p class="product-price">${product.price}</p>
        <a class="product-interest" href="${whatsappUrl(messages.produto(product.name))}" target="_blank" rel="noopener">Tenho interesse</a>
      </div>
    </article>
  `).join("");

  productGrid.querySelectorAll(".product-visual[data-tone]").forEach(el => {
    applyToneBackground(el, el.dataset.tone);
    const product = products.find(p => p.name === el.closest(".product-card").dataset.name);
    if (product) trySwapForRealPhoto(el, product);
  });

  productGrid.querySelectorAll("[data-open-modal]").forEach(el => {
    el.addEventListener("click", () => openProductModal(el.dataset.name));
  });
}

/* =========================================================
   FILTROS
   ========================================================= */
const filterButtons = document.querySelectorAll(".filter-btn");

function applyFilter(category) {
  filterButtons.forEach(btn => {
    const active = btn.dataset.filter === category;
    btn.classList.toggle("is-active", active);
    btn.setAttribute("aria-selected", active ? "true" : "false");
  });
  const list = category === "Todas" ? products : products.filter(p => p.category === category);
  renderProducts(list);
}

filterButtons.forEach(btn => {
  btn.addEventListener("click", () => applyFilter(btn.dataset.filter));
});

/* categorias da seção "Encontre sua Vênus" levam ao catálogo já filtrado */
document.querySelectorAll(".category-card").forEach(card => {
  card.addEventListener("click", () => {
    applyFilter(card.dataset.filter);
    document.getElementById("colecao").scrollIntoView({ behavior: "smooth", block: "start" });
  });
});

/* =========================================================
   RENDER — DESTAQUES
   ========================================================= */
function renderFavorites() {
  const grid = document.getElementById("favoritesGrid");
  const favs = FAVORITE_NAMES
    .map(name => products.find(p => p.name === name))
    .filter(Boolean);

  grid.innerHTML = favs.map(product => `
    <div class="favorite-card" data-open-modal data-name="${product.name}">
      <div class="favorite-visual" data-tone="${product.tone}">
        ${jewelVisualHTML(product)}
      </div>
      <div class="favorite-overlay">
        <p class="favorite-cat">${product.category}</p>
        <h3 class="favorite-name">${product.name}</h3>
        <p class="favorite-price">${product.price}</p>
      </div>
    </div>
  `).join("");

  grid.querySelectorAll(".favorite-visual[data-tone]").forEach(el => {
    applyToneBackground(el, el.dataset.tone);
    const product = favs.find(p => p.name === el.closest(".favorite-card").dataset.name);
    if (product) trySwapForRealPhoto(el, product);
  });

  grid.querySelectorAll("[data-open-modal]").forEach(el => {
    el.addEventListener("click", () => openProductModal(el.dataset.name));
  });
}

/* =========================================================
   MODAL DO PRODUTO
   ========================================================= */
const modalBackdrop = document.getElementById("modalBackdrop");
const modalVisual = document.getElementById("modalVisual");
const modalCategory = document.getElementById("modalCategory");
const modalTitle = document.getElementById("modalTitle");
const modalDescription = document.getElementById("modalDescription");
const modalPrice = document.getElementById("modalPrice");
const modalWhatsapp = document.getElementById("modalWhatsapp");
let lastFocusedEl = null;

function openProductModal(name) {
  const product = products.find(p => p.name === name);
  if (!product) return;

  lastFocusedEl = document.activeElement;

  modalCategory.textContent = product.category;
  modalTitle.textContent = product.name;
  modalDescription.textContent = product.description;
  modalPrice.textContent = product.price;
  modalWhatsapp.href = whatsappUrl(messages.produtoDetalhe(product.name));

  modalVisual.innerHTML = jewelVisualHTML(product);
  applyToneBackground(modalVisual.firstElementChild, product.tone);
  trySwapForRealPhoto(modalVisual.firstElementChild, product);

  modalBackdrop.classList.add("is-open");
  document.body.classList.add("modal-open");
  document.getElementById("modalClose").focus();
}

function closeProductModal() {
  modalBackdrop.classList.remove("is-open");
  document.body.classList.remove("modal-open");
  if (lastFocusedEl) lastFocusedEl.focus();
}

document.getElementById("modalClose").addEventListener("click", closeProductModal);
modalBackdrop.addEventListener("click", (e) => {
  if (e.target === modalBackdrop) closeProductModal();
});
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && modalBackdrop.classList.contains("is-open")) closeProductModal();
});

/* =========================================================
   MENU MOBILE
   ========================================================= */
const menuToggle = document.getElementById("menuToggle");
const mobileNav = document.getElementById("mobileNav");
const mobileNavBackdrop = document.getElementById("mobileNavBackdrop");

function toggleMobileMenu(open) {
  menuToggle.setAttribute("aria-expanded", String(open));
  mobileNav.classList.toggle("is-open", open);
  mobileNavBackdrop.classList.toggle("is-open", open);
  mobileNav.setAttribute("aria-hidden", String(!open));
  document.body.classList.toggle("modal-open", open);
}

menuToggle.addEventListener("click", () => {
  const isOpen = mobileNav.classList.contains("is-open");
  toggleMobileMenu(!isOpen);
});
mobileNavBackdrop.addEventListener("click", () => toggleMobileMenu(false));
mobileNav.querySelectorAll("a").forEach(a => a.addEventListener("click", () => toggleMobileMenu(false)));

/* =========================================================
   HEADER STICKY
   ========================================================= */
const siteHeader = document.getElementById("siteHeader");
function onScrollHeader() {
  siteHeader.classList.toggle("is-stuck", window.scrollY > 40);
}
document.addEventListener("scroll", onScrollHeader, { passive: true });

/* =========================================================
   REVEAL ON SCROLL
   ========================================================= */
function setupScrollReveal() {
  const targets = document.querySelectorAll("[data-reveal]");
  const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (prefersReduced || !("IntersectionObserver" in window)) {
    targets.forEach(el => el.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15, rootMargin: "0px 0px -60px 0px" });

  targets.forEach(el => observer.observe(el));
}

/* =========================================================
   INICIALIZAÇÃO
   ========================================================= */
document.addEventListener("DOMContentLoaded", () => {
  wireStaticWhatsappLinks();
  renderProducts(products);
  renderFavorites();
  setupScrollReveal();
  onScrollHeader();

  requestAnimationFrame(() => {
    document.querySelector(".hero").classList.add("is-loaded");
  });
});
