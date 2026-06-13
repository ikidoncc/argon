export const languages = {
  en: 'EN',
  pt: 'PT',
};

export const defaultLang = 'en';

export const ui = {
  en: {
    'nav.home': 'Home',
    'nav.tags': 'Tags',
    'nav.search': 'Search',
    'nav.about': 'About',
    'footer.desc':
      'A blog about Systems Engineering & Distributed Infrastructure.',
    'footer.rights': 'All rights reserved.',
    'hero.title': 'Exploring Technology, Science, and Lifelong Learning',
    'hero.subtitle':
      'Argon is a personal blog and knowledge repository where I share articles, notes, experiments, and insights about software engineering, computer science, mathematics, physics, and anything else worth understanding.',
    'home.latest': 'Latest Articles',
    'home.noPosts': 'No articles published yet. Check back soon!',
    'search.title': 'Search Articles',
    'search.desc': 'Search the entire knowledge repository instantly.',
    'about.title': 'About Argon',
    'about.desc': 'Learn more about the project, the author, and the stack.',
    'about.mission': 'The Mission',
    'about.mission.1':
      'Argon was created to serve as a high-quality, personal journal for documenting technical explorations, implementation details, and systems engineering concepts.',
    'about.mission.2':
      'By sharing detailed write-ups on networking protocols, database engines, and runtime systems, the goal is to contribute clean, accessible reference material to the developer community.',
    'about.stack': 'The Technology Stack',
    'about.stack.desc':
      'Argon is built on modern static-site architectures to achieve near-instantaneous load times, top-tier SEO rating, and simple maintenance:',
    'about.stack.astro':
      'The web framework for building content-focused websites.',
    'about.stack.tailwind':
      'Utilizes the new Vite engine for high-speed utility compilation.',
    'about.stack.github': 'Automated integration and deployment pipeline.',
    'about.stack.markdown':
      'Formatted content verified through Content Collections schemas.',
    'about.maintainer': 'Argon Maintainer',
    'about.maintainer.title': 'Systems & Infrastructure Engineer',
    'about.maintainer.bio':
      'Passionate about building highly scalable distributed backends, investigating database internals, and optimizing software performance.',
    'about.githubProfile': 'GitHub Profile',
    'tags.title': 'Tags',
    'tags.desc': 'Browse articles by topic.',
    'tags.count': 'articles',
    'tags.count.one': 'article',
    'tags.back': 'Back to tags',
    'tags.tagged': 'Articles tagged with',
    'post.back': 'Back to articles',
    'post.divider': '•',
    'post.readMore': 'Read Article',
    '404.title': '404: Page Not Found',
    '404.desc':
      'The page you are looking for does not exist or has been moved.',
    '404.body':
      "We couldn't find the resource you were looking for. Use the links below to find your way back.",
    '404.home': 'Go Back Home',
    '404.search': 'Search Articles',
  },
  pt: {
    'nav.home': 'Início',
    'nav.tags': 'Tags',
    'nav.search': 'Buscar',
    'nav.about': 'Sobre',
    'footer.desc':
      'Um blog sobre Engenharia de Sistemas e Infraestrutura Distribuída.',
    'footer.rights': 'Todos os direitos reservados.',
    'hero.title': 'Explorando Tecnologia, Ciência e Aprendizado Contínuo',
    'hero.subtitle':
      'Argon é um blog pessoal e repositório de conhecimento onde compartilho artigos, notas, experimentos e insights sobre engenharia de software, ciência da computação, matemática, física e qualquer outra coisa que valha a pena entender.',
    'home.latest': 'Artigos Recentes',
    'home.noPosts': 'Nenhum artigo publicado ainda. Volte em breve!',
    'search.title': 'Buscar Artigos',
    'search.desc':
      'Busque em todo o repositório de conhecimento instantaneamente.',
    'about.title': 'Sobre o Argon',
    'about.desc': 'Saiba mais sobre o projeto, o autor e a stack utilizada.',
    'about.mission': 'A Missão',
    'about.mission.1':
      'O Argon foi criado para servir como um diário pessoal de alta qualidade para documentar explorações técnicas, detalhes de implementação e conceitos de engenharia de sistemas.',
    'about.mission.2':
      'Ao compartilhar análises detalhadas sobre protocolos de rede, motores de banco de dados e sistemas de runtime, o objetivo é contribuir com material de referência limpo e acessível para a comunidade de desenvolvedores.',
    'about.stack': 'A Stack Tecnológica',
    'about.stack.desc':
      'O Argon é construído sobre arquiteturas modernas de sites estáticos para alcançar tempos de carregamento quase instantâneos, excelente classificação de SEO e manutenção simples:',
    'about.stack.astro':
      'O framework web para construir sites focados em conteúdo.',
    'about.stack.tailwind':
      'Utiliza o novo motor do Vite para compilação rápida de utilitários.',
    'about.stack.github': 'Pipeline automatizado de integração e deploy.',
    'about.stack.markdown':
      'Conteúdo formatado e verificado através dos esquemas do Content Collections.',
    'about.maintainer': 'Mantenedor do Argon',
    'about.maintainer.title': 'Engenheiro de Sistemas e Infraestrutura',
    'about.maintainer.bio':
      'Apaixonado por construir backends distribuídos altamente escaláveis, investigar o funcionamento interno de bancos de dados e otimizar a performance de software.',
    'about.githubProfile': 'Perfil no GitHub',
    'tags.title': 'Tags',
    'tags.desc': 'Navegue pelos artigos por tópico.',
    'tags.count': 'artigos',
    'tags.count.one': 'artigo',
    'tags.back': 'Voltar para tags',
    'tags.tagged': 'Artigos marcados com',
    'post.back': 'Voltar para os artigos',
    'post.divider': '•',
    'post.readMore': 'Ler Artigo',
    '404.title': '404: Página Não Encontrada',
    '404.desc': 'A página que você está procurando não existe ou foi movida.',
    '404.body':
      'Não conseguimos encontrar o recurso solicitado. Use os links abaixo para retornar.',
    '404.home': 'Voltar para o Início',
    '404.search': 'Buscar Artigos',
  },
} as const;

export function useTranslations(lang: keyof typeof ui) {
  return function t(key: keyof (typeof ui)[typeof defaultLang]) {
    return ui[lang][key] || ui[defaultLang][key];
  };
}

export function getLangFromUrl(url: URL) {
  const base = import.meta.env.BASE_URL;
  let relativePath = url.pathname;
  if (url.pathname.startsWith(base)) {
    relativePath = url.pathname.slice(base.length);
  }
  const [lang] = relativePath.split('/');
  if (lang in ui) return lang as keyof typeof ui;
  return defaultLang;
}

export function getLocalizedPath(url: URL, targetLang: string) {
  const pathname = url.pathname;
  const base = import.meta.env.BASE_URL;

  let relativePath = pathname;
  if (pathname.startsWith(base)) {
    relativePath = pathname.slice(base.length);
  }

  const pathParts = relativePath.split('/').filter(Boolean);

  if (pathParts[0] === 'pt') {
    if (targetLang === 'en') {
      pathParts.shift();
    }
  } else {
    if (targetLang === 'pt') {
      pathParts.unshift('pt');
    }
  }

  // Join and reconstruct absolute path with base
  const reconstructed =
    `/${base}/${pathParts.join('/')}/`.replace(/\/+/g, '/').replace(/\/$/, '') +
    '/'; // ensure trailing slash

  // Match root slash logic if empty pathParts and target is English
  if (pathParts.length === 0) {
    return base;
  }

  return reconstructed;
}

export function getLocalizedLink(path: string, lang: string) {
  const base = import.meta.env.BASE_URL;
  const cleanPath = path.replace(/^\//, '');
  if (lang === 'en') {
    return `${base}${cleanPath}`;
  }
  return `${base}pt/${cleanPath}`;
}
