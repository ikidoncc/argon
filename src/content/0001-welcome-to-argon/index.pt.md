---
id: '0001'
title: 'Bem-vindo ao Argon: Construindo Blogs de Alta Performance'
slug: 'welcome-to-argon'
date: 2026-06-13
tags:
  - web-development
  - astro
  - static-site
cover: './cover.png'
description: 'Bem-vindo ao Argon, um blog pessoal e repositório de conhecimento onde compartilho artigos, notas, experimentos e insights sobre engenharia de software, ciência da computação e engenharia de sistemas.'
lang: pt
draft: false
---

# Bem-vindo ao Argon

Bem-vindo ao **Argon**, um blog pessoal e repositório de conhecimento projetado para documentar explorações, notas, experimentos e insights sobre engenharia de software, ciência da computação, matemática, física e muito mais.

Este artigo detalha como o projeto foi construído, suas capacidades atuais e quais recursos estão planejados para o futuro.

---

## Como o Argon Foi Construído

O Argon foi projetado do zero como um site totalmente estático para garantir alta performance, segurança e baixa complexidade operacional. A stack tecnológica principal consiste em:

### 1. Astro v6

Selecionamos o Astro como nosso framework fundamental. O Astro foi criado para sites focados em conteúdo, utilizando uma "arquitetura de ilhas" que renderiza páginas em HTML estático em tempo de build, removendo JavaScript desnecessário do lado do cliente por padrão. Aproveitamos o novo motor de Content Collections do Astro para validar schemas de frontmatter e carregar arquivos Markdown dinamicamente.

### 2. Tailwind CSS v4 & Vanilla CSS

A estilização é alimentada pelo mais recente Tailwind CSS v4, que se integra diretamente ao compilador Vite para builds mais rápidos. Combinamos as classes utilitárias do Tailwind com um sistema personalizado de tokens de CSS Vanilla em `src/styles/global.css`. Essa configuração gerencia:

- Cores elegantes para modo escuro e claro.
- Layouts de cards glassmórficos premium.
- Tipografia adaptável para leitura técnica confortável.
- Microanimações para elementos interativos.

### 3. Pipeline Automatizado com Git & GitHub Pages

Não há banco de dados, CMS ou servidor backend. O repositório é a única fonte de verdade. Toda vez que fazemos commit e push de códigos ou artigos para a branch `main`, um fluxo de trabalho do GitHub Actions:

1. Faz checkout do repositório.
2. Configura um ambiente Node.js e `pnpm`.
3. Instala as dependências e executa o script de build.
4. Faz o deploy do HTML estático diretamente no GitHub Pages.

---

## Recursos Atuais

A implementação atual fornece uma base sólida para escrever e ler artigos técnicos:

- **Motor Markdown**: Renderização nativa de conteúdo Markdown, incluindo títulos estilizados, listas, links, código inline e blocos de código.
- **Layout Base & Header Responsivo**: Menu interativo com links de navegação responsivos (Início, Tags, Sobre) e um script inline de alternação de tema que lê as preferências do sistema do usuário e evita o "piscar de tema" (theme flash) no carregamento das páginas.
- **Sistema de Tags Dinâmico**: Extração automática de tags únicas em todos os posts, exibindo um diretório de tags com contagem de posts e gerando páginas de tópicos dinâmicas (`/tags/[tag]`).
- **Página Sobre**: Uma página dedicada que apresenta detalhes do autor, perfis sociais e notas de arquitetura do projeto.
- **Ferramental Organizado**: Configuração completa do ESLint flat configs e regras do Prettier para forçar a formatação limpa de código e conteúdo.

---

## Próximos Passos do Roadmap

O Roadmap do MVP define marcos críticos a serem concluídos antes do lançamento público final:

### 1. Busca Local Estática

Integramos o **Pagefind** para indexar o conteúdo dos artigos durante a fase de build. Isso permite que os usuários busquem em todo o blog localmente usando uma interface rápida e estática, sem depender de APIs externas.

### 2. Melhorias de SEO e Sindicância

Para melhorar a indexação e a leitura em plataformas sociais, implementamos:

- Metadados dinâmicos do Open Graph (OG) e Twitter Card.
- Geração automática de `sitemap.xml` e `robots.txt`.
- Um feed RSS para permitir a sindicância por meio de leitores de feed.

### 3. Validação e Auditoria de Performance

Antes de finalizar o MVP, executamos validações completas:

- Confirmando que nossa pontuação no Lighthouse atende ou supera **95** em todas as categorias (Performance, Acessibilidade, Melhores Práticas, SEO).
- Verificando tamanhos de arquivos (bundle) e otimizações de imagem.

---

Obrigado por visitar o Argon. Fique atento aos próximos artigos e notas técnicas!
