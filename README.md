# Vênus Semijoias — site

Landing page + catálogo de semijoias com contato direto via WhatsApp.
Feito em HTML, CSS e JavaScript puros — sem build, sem dependências.

## Como rodar

Não precisa de `npm install`. Basta abrir o projeto:

1. Abra a pasta `venus-semijoias` no VS Code.
2. Instale a extensão **Live Server** (se ainda não tiver).
3. Clique com o botão direito em `index.html` → **Open with Live Server**.

Ou, mais simples ainda: dê duplo clique em `index.html` para abrir direto no navegador
(alguns efeitos de imagem local podem exigir um servidor local por causa de CORS —
o Live Server resolve isso).

## Estrutura de arquivos

```
venus-semijoias/
├── index.html          → toda a estrutura das seções
├── css/style.css        → cores, tipografia, layout, animações
├── js/script.js          → produtos, filtros, modal, links de WhatsApp
├── assets/
│   ├── brand/            → logo (quando você tiver o arquivo final)
│   ├── hero/              → imagem/colagem do hero (opcional)
│   ├── products/          → fotos reais das joias (veja abaixo)
│   ├── editorial/         → fotos para seções editoriais (opcional)
│   └── icons/
└── README.md
```

## Onde alterar cada coisa

### 1. Fotos reais das joias
Abra `js/script.js` e procure o array `products` (perto do topo).
Cada produto tem um campo `image`, por exemplo:

```js
image: "./assets/products/colar-aurora.jpg",
```

Basta colocar a foto real com esse nome dentro de `assets/products/`.
**Enquanto o arquivo não existir, o site mostra automaticamente um visual
editorial (gradiente com o símbolo ✦ e a inicial da peça) — nada quebra.**

### 2. Nomes, categorias, preços e descrições
Também no array `products`, em `js/script.js`. Para adicionar uma peça nova,
duplique um dos objetos e altere os campos `name`, `category`, `price`,
`description` e `image`.

Categorias válidas (usadas nos filtros): `"Anéis"`, `"Brincos"`, `"Colares"`,
`"Pulseiras"`, `"Conjuntos"`.

### 3. Peças da seção "Os favoritos da Vênus"
No mesmo arquivo, procure `FAVORITE_NAMES` — é só trocar os nomes pelos
produtos que você quer destacar (precisam existir no array `products`).

### 4. Número de WhatsApp
No topo de `js/script.js`:

```js
const WHATSAPP_NUMBER = "5517997514767";
```

### 5. Instagram
Logo abaixo, no mesmo arquivo:

```js
const INSTAGRAM_URL = "https://instagram.com/venussemijoias";
```

Troque pela URL real do perfil.

### 6. Textos (manifesto, frase de impacto, seção de experiência etc.)
Esses textos ficam direto em `index.html`, dentro de cada `<section>`.
Procure pelo texto atual e edite normalmente.

### 7. Cores
No início de `css/style.css`, dentro de `:root`:

```css
--venus-rose: #C56A6A;
--venus-nude: #EAD8D2;
--venus-lilac: #B89BBE;
--venus-gold: #D4B883;
--venus-chocolate: #3D2F2A;
```

Alterar uma dessas variáveis muda a cor em todo o site.

### 8. Logo
Por enquanto o logo é tipográfico (texto "VÊNUS" estilizado em Playfair Display).
Quando você tiver o arquivo final (`logo.svg` ou `logo.png`), coloque-o em
`assets/brand/` e substitua o `<span class="header-logo-mark">VÊNUS</span>`
(e o equivalente no rodapé) por uma tag `<img>` apontando para o arquivo.

## Como funciona o contato via WhatsApp

Não há carrinho nem checkout — o fluxo é:

```
cliente visualiza a peça
        ↓
clica em "Tenho interesse" ou "Falar sobre esta peça"
        ↓
o WhatsApp abre com uma mensagem já preenchida, específica daquela peça
        ↓
cliente envia
        ↓
Vênus responde
```

Toda a lógica está centralizada na função `openWhatsApp()` / `whatsappUrl()`
em `js/script.js` — não há links de WhatsApp duplicados manualmente pelo código.

## Preparado para o futuro

O projeto já foi estruturado (dados de produto separados da renderização,
categorias por dado e não por HTML fixo) para facilitar, no futuro, a adição de
carrinho, checkout, cadastro e painel administrativo — nada disso foi
implementado agora, mas a estrutura não atrapalha essa evolução.

## Checklist testado

- Filtros de categoria
- Modal do produto (abre por clique, fecha por X, ESC e clique fora)
- Todos os links de WhatsApp (header, hero, produtos, destaques, CTA final,
  rodapé, botão flutuante)
- Menu mobile (hamburger)
- Responsividade em 375 / 390 / 414 / 768 / 1024 / 1440px
- `prefers-reduced-motion` respeitado
- Sem erros no console
