export const portfolio = {
  navigation: [
    { label: 'Sobre', href: '/sobre' },
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
        href: '#projetos',
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
  stats: [],
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
  projects: [
    {
      slug: 'dashboard-financeiro',
      title: 'Dashboard Financeiro',
      image:
        'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=900&q=80',
      gallery: [
        'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=900&q=80',
        'https://images.unsplash.com/photo-1554224154-26032fced8bd?auto=format&fit=crop&w=900&q=80',
        'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=900&q=80',
      ],
      mainIdea:
        'Centralizar indicadores financeiros em uma interface clara para facilitar leitura rapida, comparacao de metricas e tomada de decisao.',
      story:
        'O projeto nasceu da necessidade de transformar dados soltos em uma leitura visual simples. A proposta foi criar uma tela que ajudasse a entender o desempenho financeiro rapidamente, sem depender de planilhas longas ou navegacao confusa.',
      thinking:
        'Minha linha de pensamento foi priorizar clareza: primeiro destacar os indicadores principais, depois organizar os graficos e filtros para que o usuario conseguisse explorar os dados sem perder contexto.',
      description:
        'Painel responsivo com graficos, cards de metricas e filtros para acompanhar resultados em tempo real.',
      tags: ['React', 'CSS Grid', 'Charts'],
      link: '#',
    },
    {
      slug: 'landing-page-saas',
      title: 'Landing Page SaaS',
      image:
        'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=900&q=80',
      gallery: [
        'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=80',
        'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=900&q=80',
        'https://images.unsplash.com/photo-1559028006-448665bd7c7f?auto=format&fit=crop&w=900&q=80',
      ],
      mainIdea:
        'Apresentar um produto digital com mensagem objetiva, navegacao simples e chamadas visuais que guiam o usuario ate a conversao.',
      story:
        'A ideia foi construir uma apresentacao digital com ritmo claro: primeiro chamar atencao, depois explicar valor e por fim conduzir o usuario para uma acao. Cada secao foi pensada para reduzir duvida e aumentar confianca.',
      thinking:
        'Minha linha de pensamento foi montar a pagina como uma narrativa de conversao: chamar atencao, apresentar beneficios, reduzir objeções e deixar a acao principal sempre facil de encontrar.',
      description:
        'Pagina de apresentacao com secoes comerciais, animacoes suaves e chamada clara para conversao.',
      tags: ['Vite', 'React', 'UX'],
      link: '#',
    },
    {
      slug: 'app-de-tarefas',
      title: 'App de Tarefas',
      image:
        'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&w=900&q=80',
      gallery: [
        'https://images.unsplash.com/photo-1506784365847-bbad939e9335?auto=format&fit=crop&w=900&q=80',
        'https://images.unsplash.com/photo-1517842645767-c639042777db?auto=format&fit=crop&w=900&q=80',
        'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=900&q=80',
      ],
      mainIdea:
        'Criar uma experiencia leve para organizar tarefas do dia a dia, deixando prioridades e estados sempre visiveis.',
      story:
        'Esse projeto partiu de uma dor simples: perder o controle das tarefas quando tudo fica espalhado. A solucao foi desenhar uma experiencia direta, onde criar, visualizar e acompanhar atividades fosse rapido e sem atrito.',
      thinking:
        'Minha linha de pensamento foi remover atrito. A interface precisava ser simples o bastante para uso diario, mas organizada o suficiente para mostrar prioridade, estado e progresso rapidamente.',
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
