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
        {
          image:
            'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=900&q=80',
          caption: 'Resumo de indicadores para acompanhar receita, custos e variacoes.',
        },
        {
          image:
            'https://images.unsplash.com/photo-1554224154-26032fced8bd?auto=format&fit=crop&w=900&q=80',
          caption: 'Filtros e comparacoes para analisar periodos com mais clareza.',
        },
        {
          image:
            'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=900&q=80',
          caption: 'Visualizacao pensada para tomada de decisao rapida.',
        },
      ],
      mainIdea:
        'Centralizar indicadores financeiros em uma interface clara para facilitar leitura rapida, comparacao de metricas e tomada de decisao.',
      story:
        'O projeto nasceu da necessidade de transformar dados soltos em uma leitura visual simples. A proposta foi criar uma tela que ajudasse a entender o desempenho financeiro rapidamente, sem depender de planilhas longas ou navegacao confusa.',
      thinking:
        'Minha linha de pensamento foi priorizar clareza: primeiro destacar os indicadores principais, depois organizar os graficos e filtros para que o usuario conseguisse explorar os dados sem se perder.',
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
        {
          image:
            'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=80',
          caption: 'Hero section com mensagem direta e chamada principal em destaque.',
        },
        {
          image:
            'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=900&q=80',
          caption: 'Secoes organizadas para explicar valor, beneficios e confianca.',
        },
        {
          image:
            'https://images.unsplash.com/photo-1559028006-448665bd7c7f?auto=format&fit=crop&w=900&q=80',
          caption: 'Detalhes visuais para guiar o usuario ate a conversao.',
        },
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
        {
          image:
            'https://images.unsplash.com/photo-1506784365847-bbad939e9335?auto=format&fit=crop&w=900&q=80',
          caption: 'Criacao rapida de tarefas com prioridade e contexto.',
        },
        {
          image:
            'https://images.unsplash.com/photo-1517842645767-c639042777db?auto=format&fit=crop&w=900&q=80',
          caption: 'Organizacao visual para separar pendencias, progresso e concluidas.',
        },
        {
          image:
            'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=900&q=80',
          caption: 'Fluxo simples para revisar o dia sem perder informacao importante.',
        },
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
    {
      slug: 'portfolio-interativo',
      title: 'Portfolio Interativo',
      image:
        'https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=900&q=80',
      gallery: [
        {
          image:
            'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=900&q=80',
          caption: 'Pagina inicial focada em apresentacao clara e personalidade visual.',
        },
        {
          image:
            'https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=900&q=80',
          caption: 'Projetos organizados para facilitar leitura e navegacao.',
        },
        {
          image:
            'https://images.unsplash.com/photo-1558655146-9f40138edfeb?auto=format&fit=crop&w=900&q=80',
          caption: 'Estrutura editavel para trocar textos, links e imagens com facilidade.',
        },
      ],
      mainIdea:
        'Criar uma experiencia de portfolio mais viva, onde cada projeto pudesse contar uma historia e mostrar decisao de design.',
      story:
        'O projeto surgiu da vontade de transformar uma pagina simples em uma experiencia mais completa. A ideia foi organizar apresentacao, projetos e contato de um jeito direto, mas com personalidade.',
      thinking:
        'Minha linha de pensamento foi equilibrar clareza e identidade visual: deixar o conteudo facil de navegar, mas com detalhes que mostrassem cuidado no acabamento.',
      description:
        'Portfolio responsivo com animacoes, paginas individuais de projeto e estrutura de conteudo facil de editar.',
      tags: ['React', 'Vite', 'CSS'],
      link: '#',
    },
    {
      slug: 'sistema-de-atendimento',
      title: 'Sistema de Atendimento',
      image:
        'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=900&q=80',
      gallery: [
        {
          image:
            'https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=900&q=80',
          caption: 'Lista de chamados com status e prioridades bem visiveis.',
        },
        {
          image:
            'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=900&q=80',
          caption: 'Historico de interacoes para entender cada atendimento rapidamente.',
        },
        {
          image:
            'https://images.unsplash.com/photo-1560264280-88b68371db39?auto=format&fit=crop&w=900&q=80',
          caption: 'Filtros para equipes encontrarem demandas urgentes sem atrito.',
        },
      ],
      mainIdea:
        'Organizar chamados e interacoes em uma tela simples para ajudar equipes a acompanhar prioridades e status.',
      story:
        'A proposta nasceu de um fluxo comum em equipes: muitas demandas chegando ao mesmo tempo e pouca clareza sobre o que precisa de atencao primeiro.',
      thinking:
        'Minha linha de pensamento foi criar uma organizacao visual por prioridade, estado e historico, reduzindo a quantidade de informacao espalhada.',
      description:
        'Interface para controle de atendimentos com cards de status, filtros e visualizacao rapida das solicitacoes.',
      tags: ['React', 'JavaScript', 'UX'],
      link: '#',
    },
    {
      slug: 'painel-de-ia',
      title: 'Painel de IA',
      image:
        'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=900&q=80',
      gallery: [
        {
          image:
            'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=900&q=80',
          caption: 'Entrada de prompts com foco em contexto, objetivo e revisao.',
        },
        {
          image:
            'https://images.unsplash.com/photo-1674027444485-cec3da58eef4?auto=format&fit=crop&w=900&q=80',
          caption: 'Comparacao de respostas para escolher o melhor resultado gerado.',
        },
        {
          image:
            'https://images.unsplash.com/photo-1675557009875-436f71457474?auto=format&fit=crop&w=900&q=80',
          caption: 'Historico organizado para rastrear geracoes e ajustes.',
        },
      ],
      mainIdea:
        'Explorar uma interface para acompanhar respostas, prompts e resultados gerados por IA de forma organizada.',
      story:
        'Esse projeto parte da ideia de que ferramentas de IA precisam ser claras, rastreaveis e simples de revisar, principalmente quando varias geracoes acontecem no mesmo fluxo.',
      thinking:
        'Minha linha de pensamento foi separar entrada, resultado e historico, criando uma leitura mais limpa para comparar respostas e entender o processo.',
      description:
        'Painel conceitual para fluxos com IA, com foco em organizacao de prompts, resultados e historico de uso.',
      tags: ['IA', 'React', 'Interface'],
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
