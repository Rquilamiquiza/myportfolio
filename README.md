# Portfolio React — Romão Quilamiquiza

Versão React do portfolio, construída com **Vite + React 18 + Tailwind CSS**.

## Requisitos

- Node.js 18+ (recomendado 20+)
- npm (vem com o Node)

## Setup

```bash
cd portfolio-react
npm install
npm run dev
```

Abre em `http://localhost:5173`.

## Build para produção

```bash
npm run build        # gera /dist
npm run preview      # serve /dist localmente
```

## Estrutura

```
src/
├── main.jsx               # entry point
├── App.jsx                # monta tudo
├── index.css              # Tailwind + animações custom
├── hooks/
│   └── useScrollReveal.js # IntersectionObserver para fade-in
├── data/
│   ├── skills.js          # skills, tools, soft skills
│   └── projects.js        # lista de projetos
└── components/
    ├── Navbar.jsx
    ├── Hero.jsx
    ├── Typewriter.jsx
    ├── MatrixRain.jsx
    ├── About.jsx
    ├── Skills.jsx
    ├── Projects.jsx
    ├── Contact.jsx
    └── Footer.jsx
```

## Editar conteúdo

- **Projetos:** `src/data/projects.js`
- **Skills & ferramentas:** `src/data/skills.js`
- **Frases do typewriter:** topo de `src/components/Typewriter.jsx`
- **Links sociais:** `src/components/Contact.jsx`
- **Texto "about":** `src/components/About.jsx`

## Notas

- As fontes (Inter, JetBrains Mono) e o Font Awesome são carregados via CDN em `index.html`.
- O formulário de contacto é só frontend — integra com Formspree/EmailJS/backend próprio para envio real.
