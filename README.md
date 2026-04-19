# 🎮 GTA VI — Landing Page Animada

Projeto de landing page inspirada no **GTA VI**, com animações de scroll usando **GSAP + ScrollTrigger**. A página utiliza efeitos de máscara CSS e transições suaves para criar uma experiência visual imersiva.

---

## 📁 Estrutura do Projeto

```
GTA/
├── index.html
├── assets/
│   ├── heroKeyArt.webp          # Imagem de fundo principal
│   ├── gta-logo-mascarado.webp  # Logo com efeito de máscara
│   ├── vi.webp                  # Imagem da personagem Vi
│   ├── millki-banner.png        # Banner da Millki
│   └── svg/
│       ├── gta-logo.svg         # SVG usado como máscara da seção 1
│       └── Ellipse.svg          # SVG usado como máscara da seção 3
├── css/
│   └── style.css
└── js/
    └── script.js
```

---

## ✨ Funcionalidades

- **Efeito de máscara com SVG** — a seção principal é revelada/ocultada usando o logo do GTA como `mask-image`
- **Animação de scroll pinada** — o container fica fixo enquanto as animações ocorrem no scroll
- **Transição de fade** — a logo de fundo desaparece suavemente durante o scroll
- **Fundo branco progressivo** — a `secaoBranca` vai de transparente para branco
- **Reveal com blur** — a imagem da seção 2 entra com efeito de desfoque

---

## 🛠️ Tecnologias

| Tecnologia | Uso |
|---|---|
| HTML5 | Estrutura das seções |
| CSS3 | Estilização e `mask-image` |
| [GSAP 3.12.7](https://gsap.com/) | Animações da timeline |
| [ScrollTrigger](https://gsap.com/docs/v3/Plugins/ScrollTrigger/) | Controle das animações por scroll |

---

## 🚀 Como rodar

1. Clone ou baixe o repositório
2. Abra o arquivo `index.html` diretamente no navegador

> **Não é necessário servidor** — o projeto roda localmente sem dependências extras.

---

## ⚠️ Observações importantes

- Os caminhos das `mask-image` no CSS são **relativos à pasta `css/`**, portanto devem usar `../assets/svg/` e não `assets/svg/`
- O CSS utiliza **seletores descendentes** (`.secao2 img`) em vez de CSS aninhado, para garantir compatibilidade com todos os browsers
- O `markers: true` no `script.js` exibe os marcadores de debug do ScrollTrigger — remova para produção

---

## 📌 Animações (timeline GSAP)

```
Scroll inicia
  └─► secao1: mask-size de 2800vw → 20vw  (logo fecha sobre a imagem)
       └─► logoBg: opacity 1 → 0           (logo desaparece)
            └─► secaoBranca: transparent → white
                 └─► secao2 img: blur(20px) + opacity 0 → normal
```