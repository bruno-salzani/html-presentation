# 🚀 HTML Presentation / Portfolio (HTML5 + CSS3)

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![Responsive](https://img.shields.io/badge/Responsive-Mobile%20Friendly-green?style=for-the-badge)
![Status](https://img.shields.io/badge/Status-Active-brightgreen?style=for-the-badge)

Uma página de apresentação pessoal e portfólio desenvolvida com HTML5 e CSS3 puro, priorizando semântica, organização de código e design responsivo. O projeto apresenta uma estrutura modular de estilos e utiliza a metodologia BEM para nomenclatura de classes.

---

# 🎯 Objetivo do Projeto

Criar uma interface web elegante e funcional para apresentação profissional, cobrindo:

- **Apresentação Pessoal**: Foto, nome, cargo e biografia resumida.
- **Projetos**: Exibição de trabalhos realizados em formato de cards.
- **Linha do Tempo**: Histórico profissional ou educacional visualmente estruturado.
- **Links de Contato**: Acesso rápido a redes sociais e e-mail.

Foco em:

- Design limpo e moderno.
- Código organizado e fácil manutenção.
- Carregamento rápido (sem frameworks pesados).
- Responsividade para diferentes dispositivos.

---

# 🧠 Estratégia e Arquitetura

O projeto segue uma arquitetura front-end clássica e robusta:

1.  **HTML5 Semântico**: Uso correto de tags (`main`, `section`, `header`, `footer`) para melhor acessibilidade e SEO.
2.  **CSS Modular**: Estilos divididos por responsabilidade em `src/css/` (reset, componentes, seções).
3.  **Metodologia BEM**: Nomenclatura de classes (ex: `presentation__container`, `presentation__title`) para evitar conflitos de estilo e facilitar a leitura.
4.  **Tipografia Personalizada**: Uso de `@font-face` para carregar fontes locais (Heebo) e Google Fonts (Raleway).
5.  **Ícones Vetoriais**: Integração com FontAwesome para ícones escaláveis.

---

# 🔄 Seções do Portfólio

1.  **Apresentação (Hero Section)**
    - Foto de perfil destacada.
    - Introdução com tipografia hierarquizada.
    - Ícones de redes sociais com links funcionais.

2.  **Projetos**
    - Grid de cards exibindo imagens e descrições de projetos.
    - Layout adaptável (Flexbox/Grid).

3.  **Timeline (Linha do Tempo)**
    - Estrutura vertical para exibir experiências passadas.
    - Design limpo com marcadores visuais.

---

# 📁 Estrutura do Projeto

```
html-presentation/
│
├── src/
│   ├── assets/
│   │   ├── fonts/           # Fontes locais (Heebo)
│   │   └── img/             # Imagens de perfil, background e thumbs
│   │
│   └── css/
│       ├── reset.css        # Normalização de estilos entre navegadores
│       ├── style.css        # Estilos globais e variáveis
│       ├── presentation.css # Estilos da seção de apresentação
│       ├── projects.css     # Estilos da seção de projetos
│       ├── timeline.css     # Estilos da linha do tempo
│       ├── card.css         # Componente de card
│       └── section.css      # Estrutura base das seções
│
├── index.html               # Arquivo principal (Markup)
└── README.md                # Documentação do projeto
```

---

# 🏗️ Engineering & Developer Experience (DX)

Este projeto segue padrões rigorosos de engenharia de software, focados em manutenibilidade, escalabilidade e qualidade de código.

## 🛠️ Tooling & Scripts

O projeto utiliza um conjunto moderno de ferramentas para garantir a consistência do código:

-   **Linting**:
    -   `npm run lint:html`: Validação de boas práticas HTML via [HTMLHint](https://htmlhint.com/).
    -   `npm run lint:css`: Validação de padrões CSS via [Stylelint](https://stylelint.io/) (configuração `stylelint-config-standard`).
-   **Formatting**:
    -   `npm run format`: Formatação automática de código via [Prettier](https://prettier.io/).
-   **Git Hooks**:
    -   `husky` e `lint-staged`: Garante que nenhum código mal formatado ou com erros de lint seja commitado no repositório.

## 🚀 CI/CD Pipeline

O projeto conta com um workflow de Integração Contínua (GitHub Actions) configurado em `.github/workflows/audit.yml`. A cada Push ou Pull Request para a branch `main`, os seguintes checks são executados automaticamente:

1.  Instalação de dependências com cache.
2.  Auditoria de qualidade HTML.
3.  Auditoria de qualidade CSS.
4.  Verificação de formatação (Prettier).

## ⚡ Performance & Core Web Vitals

Otimizações implementadas para garantir pontuação máxima no Lighthouse:

-   **Font Loading**: Uso de `font-display: swap` e formato correto (`truetype`) para evitar FOIT (Flash of Invisible Text).
-   **Image Optimization**: Atributos `decoding="async"` e `fetchpriority="high"` na imagem LCP (Largest Contentful Paint).
-   **Modern CSS**: Uso de variáveis CSS (`:root`) para evitar repetição e facilitar theming.
-   **Bundling**: Uso do **Vite** para minificação e otimização de assets em produção.

## ✨ Features (UX & Polish)

-   **Dark Mode**: Suporte nativo a tema escuro com persistência via `localStorage` e detecção automática de preferência do sistema.
-   **Scroll Animations**: Elementos surgem suavemente ao rolar a página (Intersection Observer API).
-   **Smooth Navigation**: Header fixo com links de âncora e compensação de scroll (`scroll-margin-top`).

## 🧪 Testing (QA)

Testes End-to-End (E2E) configurados com **Playwright** para garantir a estabilidade das funcionalidades críticas:

-   `npm test`: Executa a suíte de testes (Navegação, Dark Mode, Renderização).

---

## Design Responsivo

- Adaptação fluida para diferentes tamanhos de tela (Desktop, Tablet, Mobile).

## Estilização Avançada

- Uso de variáveis CSS (`:root`) para consistência de cores e fontes.
- Gradientes (`linear-gradient`) e sombras suaves (`box-shadow`).
- Transições e efeitos de hover nos elementos interativos.
- **Print Styles**: Otimização para impressão (`print.css`).

## Acessibilidade (A11y)

- Uso correto de tags semânticas e atributos ARIA (`role="list"`, `aria-label`).
- Navegação por teclado e suporte a leitores de tela.
- Meta tags completas para SEO e compartilhamento social (Open Graph).

## Tipografia

- Combinação de fontes serifadas e não-serifadas para contraste visual.
- Correção de carregamento de fontes personalizadas (Heebo).

---

# 🧪 Boas Práticas

- **Reset CSS**: Garante que o site tenha a mesma aparência em todos os navegadores.
- **Separação de Preocupações**: HTML cuida da estrutura, CSS cuida do estilo.
- **Organização de Arquivos**: Imagens, fontes e estilos em pastas dedicadas.
- **Nomenclatura Clara**: Classes descritivas facilitam o entendimento do código por outros desenvolvedores.

---

# 🛠️ Tecnologias

- **HTML5**: Estruturação semântica.
- **CSS3**: Estilização, Flexbox, Grid, Animações.
- **JavaScript (ES6+)**: Interatividade, Dark Mode, Scroll Animations.
- **Vite**: Build tool e dev server.
- **FontAwesome**: Biblioteca de ícones.
- **Playwright**: Testes End-to-End.
- **Google Fonts**: Fontes web otimizadas.

---

# ▶️ Como Executar

Este projeto utiliza Node.js e Vite para desenvolvimento.

1.  **Clonar o repositório**

    ```bash
    git clone https://github.com/seu-usuario/html-presentation.git
    cd html-presentation
    ```

2.  **Instalar dependências**

    ```bash
    npm install
    ```

3.  **Rodar servidor de desenvolvimento**

    ```bash
    npm run dev
    ```
    O projeto estará disponível em `http://localhost:5173`.

4.  **Rodar Testes**

    ```bash
    npm test
    ```

5.  **Gerar Build de Produção**

    ```bash
    npm run build
    ```
    Os arquivos otimizados serão gerados na pasta `dist/`.

---

# 🤝 Conclusão

Uma base sólida para apresentações pessoais, demonstrando domínio dos fundamentos do desenvolvimento web (HTML e CSS) com foco na experiência do usuário e qualidade de código.

---
