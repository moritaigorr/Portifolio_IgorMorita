export const portfolio = {
  navigation: [
    { label: 'Sobre', href: '/sobre' },
    { label: 'Skills', href: '/skills' },
  ],
  profile: {
    name: 'Igor Morita',
    role: 'Desenvolvedor Full-stack',
    location: 'Brasil',
    intro:
      'Crio interfaces modernas, responsivas e performaticas com React, foco em experiencia do usuario e atencao aos detalhes.',
    heroDetails: [
      {
        text: 'Desenvolvedor full-stack na',
        company: {
          label: 'Evertec Brasil',
          href: 'https://evertecinc.com/pt-br/',
        },
      },
      {
        text: 'Atualmente trabalhando com React e Java Spring Boot',
        href: '/skills',
      },
      {
        text: 'Graduando meus conhecimentos em JavaScript e experiencia do usuario',
        href: '/sobre',
      },
    ],
    availability: 'Disponivel para projetos e oportunidades',
    primaryAction: {
      label: 'Ver projetos',
      href: '#projetos',
    },
    secondaryAction: {
      label: 'Entrar em contato',
      href: '#contato',
    },
  },
  stats: [
    { value: '12+', label: 'Projetos criados' },
    { value: '3+', label: 'Anos estudando tecnologia' },
    { value: '100%', label: 'Foco em evolucao' },
  ],
  about: {
    eyebrow: 'Sobre mim',
    title: 'Transformo ideias em experiencias digitais bonitas e funcionais.',
    description:
      'Sou uma pessoa curiosa, dedicada e apaixonada por construir produtos digitais. Gosto de trabalhar com React, organizar componentes reutilizaveis e criar interfaces que parecem simples porque foram bem pensadas.',
    cards: [
      'Interfaces responsivas para desktop e mobile.',
      'Componentes limpos, reutilizaveis e faceis de manter.',
      'Atencao a performance, acessibilidade e detalhes visuais.',
    ],
  },
  skills: [
    'React',
    'JavaScript',
    'HTML5',
    'CSS3',
    'Vite',
    'Git',
    'UI Design',
    'Responsividade',
    'APIs REST',
    'Figma',
  ],
  projects: [
    {
      title: 'Dashboard Financeiro',
      description:
        'Painel responsivo com graficos, cards de metricas e filtros para acompanhar resultados em tempo real.',
      tags: ['React', 'CSS Grid', 'Charts'],
      link: '#',
    },
    {
      title: 'Landing Page SaaS',
      description:
        'Pagina de apresentacao com secoes comerciais, animacoes suaves e chamada clara para conversao.',
      tags: ['Vite', 'React', 'UX'],
      link: '#',
    },
    {
      title: 'App de Tarefas',
      description:
        'Aplicacao simples para organizar tarefas, prioridades e estados com uma experiencia rapida e fluida.',
      tags: ['JavaScript', 'LocalStorage', 'UI'],
      link: '#',
    },
  ],
  contact: {
    email: 'moritaigorr@gmail.com',
    links: [
      { label: 'GitHub', href: 'https://github.com/moritaigorr' },
      { label: 'LinkedIn', href: 'https://www.linkedin.com/in/igor-morita-206650341/' },
      { label: 'Curriculo', href: '#' },
    ],
  },
}
