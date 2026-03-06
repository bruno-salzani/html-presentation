# 🚀 HTML Presentation / Portfolio (HTML5 + CSS3)

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![Responsive](https://img.shields.io/badge/Responsive-Mobile%20Friendly-green?style=for-the-badge)
![Status](https://img.shields.io/badge/Status-Active-brightgreen?style=for-the-badge)

Uma página de apresentação pessoal e portfólio desenvolvida com HTML5 e CSS3 puro, priorizando semântica, organização de código e design responsivo. O projeto apresenta uma estrutura modular de estilos e utiliza a metodologia BEM para nomenclatura de classes.

---

# 🎯 Objetivo do Projeto

Criar uma interface web elegante e funcional para apresentação profissional, cobrindo:

-   **Apresentação Pessoal**: Foto, nome, cargo e biografia resumida.
-   **Projetos**: Exibição de trabalhos realizados em formato de cards.
-   **Linha do Tempo**: Histórico profissional ou educacional visualmente estruturado.
-   **Links de Contato**: Acesso rápido a redes sociais e e-mail.

Foco em:

-   Design limpo e moderno.
-   Código organizado e fácil manutenção.
-   Carregamento rápido (sem frameworks pesados).
-   Responsividade para diferentes dispositivos.

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
    -   Foto de perfil destacada.
    -   Introdução com tipografia hierarquizada.
    -   Ícones de redes sociais com links funcionais.

2.  **Projetos**
    -   Grid de cards exibindo imagens e descrições de projetos.
    -   Layout adaptável (Flexbox/Grid).

3.  **Timeline (Linha do Tempo)**
    -   Estrutura vertical para exibir experiências passadas.
    -   Design limpo com marcadores visuais.

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

# ⚙️ Funcionalidades Principais

## Design Responsivo
-   Adaptação fluida para diferentes tamanhos de tela (Desktop, Tablet, Mobile).

## Estilização Avançada
-   Uso de gradientes (`linear-gradient`).
-   Sombras suaves (`box-shadow`) para profundidade.
-   Transições e efeitos de hover nos elementos interativos.

## Tipografia
-   Combinação de fontes serifadas e não-serifadas para contraste visual.
-   Carregamento otimizado de fontes.

---

# 🧪 Boas Práticas

-   **Reset CSS**: Garante que o site tenha a mesma aparência em todos os navegadores.
-   **Separação de Preocupações**: HTML cuida da estrutura, CSS cuida do estilo.
-   **Organização de Arquivos**: Imagens, fontes e estilos em pastas dedicadas.
-   **Nomenclatura Clara**: Classes descritivas facilitam o entendimento do código por outros desenvolvedores.

---

# 🛠️ Tecnologias

-   **HTML5**: Estruturação semântica.
-   **CSS3**: Estilização, Flexbox, Grid, Animações.
-   **FontAwesome**: Biblioteca de ícones.
-   **Google Fonts**: Fontes web otimizadas.

---

# ▶️ Como Executar

Este é um projeto estático, não requer instalação de dependências ou build tools complexos.

1.  **Clonar o repositório**
    ```bash
    git clone https://github.com/seu-usuario/html-presentation.git
    ```

2.  **Abrir o projeto**
    -   Navegue até a pasta do projeto.
    -   Abra o arquivo `index.html` em seu navegador de preferência (Chrome, Firefox, Edge, etc.).

    OU, se estiver usando VS Code com a extensão Live Server:
    -   Clique com o botão direito em `index.html`.
    -   Selecione "Open with Live Server".

---

# 🤝 Conclusão

Uma base sólida para apresentações pessoais, demonstrando domínio dos fundamentos do desenvolvimento web (HTML e CSS) com foco na experiência do usuário e qualidade de código.

---
