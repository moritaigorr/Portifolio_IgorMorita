const sharedImages = {
  financial:
    'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=900&q=80',
  financialGallery: [
    'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=900&q=80',
    'https://images.unsplash.com/photo-1554224154-26032fced8bd?auto=format&fit=crop&w=900&q=80',
    'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=900&q=80',
  ],
  saas:
    'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=900&q=80',
  saasGallery: [
    'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=80',
    'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=900&q=80',
    'https://images.unsplash.com/photo-1559028006-448665bd7c7f?auto=format&fit=crop&w=900&q=80',
  ],
  tasks:
    'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&w=900&q=80',
  tasksGallery: [
    'https://images.unsplash.com/photo-1506784365847-bbad939e9335?auto=format&fit=crop&w=900&q=80',
    'https://images.unsplash.com/photo-1517842645767-c639042777db?auto=format&fit=crop&w=900&q=80',
    'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=900&q=80',
  ],
  portfolio:
    'https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=900&q=80',
  portfolioGallery: [
    'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=900&q=80',
    'https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=900&q=80',
    'https://images.unsplash.com/photo-1558655146-9f40138edfeb?auto=format&fit=crop&w=900&q=80',
  ],
  support:
    'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=900&q=80',
  supportGallery: [
    'https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=900&q=80',
    'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=900&q=80',
    'https://images.unsplash.com/photo-1560264280-88b68371db39?auto=format&fit=crop&w=900&q=80',
  ],
  ai:
    'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=900&q=80',
  aiGallery: [
    'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=900&q=80',
    'https://images.unsplash.com/photo-1674027444485-cec3da58eef4?auto=format&fit=crop&w=900&q=80',
    'https://images.unsplash.com/photo-1675557009875-436f71457474?auto=format&fit=crop&w=900&q=80',
  ],
}

export const portfolios = {
  pt: {
    ui: {
      localeLabel: 'Idioma',
      projects: 'Projetos',
      project: 'Projeto',
      backToProjects: 'Voltar para projetos',
      projectNotFound: 'Projeto não encontrado.',
      mainIdea: 'Ideia principal',
      technologies: 'Tecnologias',
      narrative: 'Narrativa',
      thinking: 'Linha de pensamento',
      moreImages: 'Mais imagens',
      openProject: 'Abrir',
      footerTitle: 'Fico feliz que você tenha chegado até aqui.',
      footerText:
        'Espero que meu portfólio tenha deixado um pouco de curiosidade e inspiração.',
      contact: 'Contato',
      navigation: 'Navegação',
      home: 'Início',
      about: 'Sobre',
      resume: 'Currículo',
    },
    navigation: [
      { label: 'Sobre', href: '/sobre' },
    ],
    profile: {
      name: 'Igor Morita',
      role: 'desenvolvedor full-stack',
      heroPrefix: 'Oi, eu sou Igor Morita, um ',
      heroSuffix: '.',
      heroSubtitle:
        'DESENVOLVEDOR FULL-STACK @ EVERTEC BRASIL.',
      location: 'Brasil',
      intro:
        'Crio interfaces modernas, responsivas e performáticas com React, foco em experiência do usuário e atenção aos detalhes.',
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
      availability: 'Disponível para projetos e oportunidades',
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
      title: 'Transformo ideias em experiências digitais bonitas e funcionais.',
      description:
        'Sou uma pessoa curiosa, dedicada e apaixonada por construir produtos digitais. Gosto de trabalhar com React, organizar componentes reutilizáveis e criar interfaces que parecem simples porque foram bem pensadas.',
      cards: [
        'Interfaces responsivas para desktop e celular.',
        'Componentes limpos, reutilizáveis e fáceis de manter.',
        'Atenção à performance, acessibilidade e detalhes visuais.',
      ],
    },
    projects: [
      {
        slug: 'dashboard-financeiro',
        title: 'Painel Financeiro',
        image: sharedImages.financial,
        gallery: [
          {
            image: sharedImages.financialGallery[0],
            caption: 'Resumo de indicadores para acompanhar receita, custos e variações.',
          },
          {
            image: sharedImages.financialGallery[1],
            caption: 'Filtros e comparações para analisar períodos com mais clareza.',
          },
          {
            image: sharedImages.financialGallery[2],
            caption: 'Visualização pensada para tomada de decisão rápida.',
          },
        ],
        mainIdea:
          'Centralizar indicadores financeiros em uma interface clara para facilitar leitura rápida, comparação de métricas e tomada de decisão.',
        story:
          'O projeto nasceu da necessidade de transformar dados soltos em uma leitura visual simples. A proposta foi criar uma tela que ajudasse a entender o desempenho financeiro rapidamente, sem depender de planilhas longas ou navegação confusa.',
        thinking:
          'Minha linha de pensamento foi priorizar clareza: primeiro destacar os indicadores principais, depois organizar os gráficos e filtros para que o usuário conseguisse explorar os dados sem se perder.',
        description:
          'Painel responsivo com gráficos, cartões de métricas e filtros para acompanhar resultados em tempo real.',
        tags: ['React', 'CSS Grid', 'Gráficos'],
        link: '#',
      },
      {
        slug: 'landing-page-saas',
        title: 'Página SaaS',
        image: sharedImages.saas,
        gallery: [
          {
            image: sharedImages.saasGallery[0],
            caption: 'Seção principal com mensagem direta e chamada em destaque.',
          },
          {
            image: sharedImages.saasGallery[1],
            caption: 'Seções organizadas para explicar valor, benefícios e confiança.',
          },
          {
            image: sharedImages.saasGallery[2],
            caption: 'Detalhes visuais para guiar o usuário até a conversão.',
          },
        ],
        mainIdea:
          'Apresentar um produto digital com mensagem objetiva, navegação simples e chamadas visuais que guiam o usuário até a conversão.',
        story:
          'A ideia foi construir uma apresentação digital com ritmo claro: primeiro chamar atenção, depois explicar valor e, por fim, conduzir o usuário para uma ação. Cada seção foi pensada para reduzir dúvidas e aumentar confiança.',
        thinking:
          'Minha linha de pensamento foi montar a página como uma narrativa de conversão: chamar atenção, apresentar benefícios, reduzir objeções e deixar a ação principal sempre fácil de encontrar.',
        description:
          'Página de apresentação com seções comerciais, animações suaves e chamada clara para conversão.',
        tags: ['Vite', 'React', 'Experiência do usuário'],
        link: '#',
      },
      {
        slug: 'app-de-tarefas',
        title: 'Aplicativo de Tarefas',
        image: sharedImages.tasks,
        gallery: [
          {
            image: sharedImages.tasksGallery[0],
            caption: 'Criação rápida de tarefas com prioridade e contexto.',
          },
          {
            image: sharedImages.tasksGallery[1],
            caption: 'Organização visual para separar pendências, progresso e concluídas.',
          },
          {
            image: sharedImages.tasksGallery[2],
            caption: 'Fluxo simples para revisar o dia sem perder informação importante.',
          },
        ],
        mainIdea:
          'Criar uma experiência leve para organizar tarefas do dia a dia, deixando prioridades e estados sempre visíveis.',
        story:
          'Esse projeto partiu de uma dor simples: perder o controle das tarefas quando tudo fica espalhado. A solução foi desenhar uma experiência direta, onde criar, visualizar e acompanhar atividades fosse rápido e sem atrito.',
        thinking:
          'Minha linha de pensamento foi remover atrito. A interface precisava ser simples o bastante para uso diário, mas organizada o suficiente para mostrar prioridade, estado e progresso rapidamente.',
        description:
          'Aplicação simples para organizar tarefas, prioridades e estados com uma experiência rápida e fluida.',
        tags: ['JavaScript', 'LocalStorage', 'Interface'],
        link: '#',
      },
      {
        slug: 'portfolio-interativo',
        title: 'Portfólio Interativo',
        image: sharedImages.portfolio,
        gallery: [
          {
            image: sharedImages.portfolioGallery[0],
            caption: 'Página inicial focada em apresentação clara e personalidade visual.',
          },
          {
            image: sharedImages.portfolioGallery[1],
            caption: 'Projetos organizados para facilitar leitura e navegação.',
          },
          {
            image: sharedImages.portfolioGallery[2],
            caption: 'Estrutura editável para trocar textos, links e imagens com facilidade.',
          },
        ],
        mainIdea:
          'Criar uma experiência de portfólio mais viva, onde cada projeto pudesse contar uma história e mostrar decisões de design.',
        story:
          'O projeto surgiu da vontade de transformar uma página simples em uma experiência mais completa. A ideia foi organizar apresentação, projetos e contato de um jeito direto, mas com personalidade.',
        thinking:
          'Minha linha de pensamento foi equilibrar clareza e identidade visual: deixar o conteúdo fácil de navegar, mas com detalhes que mostrassem cuidado no acabamento.',
        description:
          'Portfólio responsivo com animações, páginas individuais de projeto e estrutura de conteúdo fácil de editar.',
        tags: ['React', 'Vite', 'CSS'],
        link: '#',
      },
      {
        slug: 'sistema-de-atendimento',
        title: 'Sistema de Atendimento',
        image: sharedImages.support,
        gallery: [
          {
            image: sharedImages.supportGallery[0],
            caption: 'Lista de chamados com status e prioridades bem visíveis.',
          },
          {
            image: sharedImages.supportGallery[1],
            caption: 'Histórico de interações para entender cada atendimento rapidamente.',
          },
          {
            image: sharedImages.supportGallery[2],
            caption: 'Filtros para equipes encontrarem demandas urgentes sem atrito.',
          },
        ],
        mainIdea:
          'Organizar chamados e interações em uma tela simples para ajudar equipes a acompanhar prioridades e status.',
        story:
          'A proposta nasceu de um fluxo comum em equipes: muitas demandas chegando ao mesmo tempo e pouca clareza sobre o que precisa de atenção primeiro.',
        thinking:
          'Minha linha de pensamento foi criar uma organização visual por prioridade, estado e histórico, reduzindo a quantidade de informação espalhada.',
        description:
          'Interface para controle de atendimentos com cartões de status, filtros e visualização rápida das solicitações.',
        tags: ['React', 'JavaScript', 'Experiência do usuário'],
        link: '#',
      },
      {
        slug: 'painel-de-ia',
        title: 'Painel de IA',
        image: sharedImages.ai,
        gallery: [
          {
            image: sharedImages.aiGallery[0],
            caption: 'Entrada de prompts com foco em contexto, objetivo e revisão.',
          },
          {
            image: sharedImages.aiGallery[1],
            caption: 'Comparação de respostas para escolher o melhor resultado gerado.',
          },
          {
            image: sharedImages.aiGallery[2],
            caption: 'Histórico organizado para rastrear gerações e ajustes.',
          },
        ],
        mainIdea:
          'Explorar uma interface para acompanhar respostas, prompts e resultados gerados por IA de forma organizada.',
        story:
          'Esse projeto parte da ideia de que ferramentas de IA precisam ser claras, rastreáveis e simples de revisar, principalmente quando várias gerações acontecem no mesmo fluxo.',
        thinking:
          'Minha linha de pensamento foi separar entrada, resultado e histórico, criando uma leitura mais limpa para comparar respostas e entender o processo.',
        description:
          'Painel conceitual para fluxos com IA, com foco em organização de prompts, resultados e histórico de uso.',
        tags: ['IA', 'React', 'Interface'],
        link: '#',
      },
    ],
    contact: {
      email: 'moritaigorr@gmail.com',
      links: [
        { label: 'GitHub', href: 'https://github.com/moritaigorr' },
        { label: 'LinkedIn', href: 'https://www.linkedin.com/in/igor-morita-206650341/' },
        { label: 'Currículo', href: '#', type: 'resume' },
      ],
    },
  },
  en: {
    ui: {
      localeLabel: 'Language',
      projects: 'Projects',
      project: 'Project',
      backToProjects: 'Back to projects',
      projectNotFound: 'Project not found.',
      mainIdea: 'Main idea',
      technologies: 'Technologies',
      narrative: 'Narrative',
      thinking: 'Thought process',
      moreImages: 'More images',
      openProject: 'Open',
      footerTitle: 'I am glad you made it this far.',
      footerText: 'I hope my portfolio sparked a little curiosity and inspiration.',
      contact: 'Contact',
      navigation: 'Navigation',
      home: 'Home',
      about: 'About',
      resume: 'Resume',
    },
    navigation: [
      { label: 'About', href: '/sobre' },
    ],
    profile: {
      name: 'Igor Morita',
      role: 'full-stack developer',
      heroPrefix: 'Hi, I am Igor Morita, a ',
      heroSuffix: '.',
      heroSubtitle: 'FULL-STACK DEVELOPER @ EVERTEC BRAZIL.',
      location: 'Brazil',
      intro:
        'I build modern, responsive, high-performing interfaces with React, focusing on user experience and attention to detail.',
      heroDetails: [
        {
          text: 'Full-stack developer at',
          company: {
            label: 'Evertec Brazil',
            href: 'https://evertecinc.com/pt-br/',
          },
        },
        {
          text: 'Currently working with React and Java Spring Boot',
          href: '#projetos',
        },
      ],
      availability: 'Available for projects and opportunities',
      primaryAction: {
        label: 'View projects',
        href: '#projetos',
      },
      secondaryAction: {
        label: 'Get in touch',
        href: '#contato',
      },
    },
    stats: [],
    about: {
      eyebrow: 'About me',
      title: 'I turn ideas into beautiful and functional digital experiences.',
      description:
        'I am curious, dedicated, and passionate about building digital products. I enjoy working with React, organizing reusable components, and creating interfaces that feel simple because they were carefully designed.',
      cards: [
        'Responsive interfaces for desktop and mobile.',
        'Clean, reusable, and easy-to-maintain components.',
        'Attention to performance, accessibility, and visual details.',
      ],
    },
    projects: [
      {
        slug: 'dashboard-financeiro',
        title: 'Financial Dashboard',
        image: sharedImages.financial,
        gallery: [
          {
            image: sharedImages.financialGallery[0],
            caption: 'Metric summary to track revenue, costs, and changes.',
          },
          {
            image: sharedImages.financialGallery[1],
            caption: 'Filters and comparisons to analyze periods with more clarity.',
          },
          {
            image: sharedImages.financialGallery[2],
            caption: 'Visualization designed for fast decision-making.',
          },
        ],
        mainIdea:
          'Centralize financial indicators in a clear interface to make quick reading, metric comparison, and decision-making easier.',
        story:
          'The project came from the need to turn scattered data into a simple visual reading experience. The goal was to create a screen that helped users understand financial performance quickly, without relying on long spreadsheets or confusing navigation.',
        thinking:
          'My thought process was to prioritize clarity: first highlight the key indicators, then organize charts and filters so users could explore the data without getting lost.',
        description:
          'Responsive dashboard with charts, metric cards, and filters to track results in real time.',
        tags: ['React', 'CSS Grid', 'Charts'],
        link: '#',
      },
      {
        slug: 'landing-page-saas',
        title: 'SaaS Page',
        image: sharedImages.saas,
        gallery: [
          {
            image: sharedImages.saasGallery[0],
            caption: 'Main section with direct messaging and a highlighted call to action.',
          },
          {
            image: sharedImages.saasGallery[1],
            caption: 'Sections organized to explain value, benefits, and trust.',
          },
          {
            image: sharedImages.saasGallery[2],
            caption: 'Visual details that guide users toward conversion.',
          },
        ],
        mainIdea:
          'Present a digital product with clear messaging, simple navigation, and visual calls that guide users toward conversion.',
        story:
          'The idea was to build a digital presentation with a clear rhythm: first capture attention, then explain value, and finally lead users to an action. Each section was designed to reduce doubt and increase trust.',
        thinking:
          'My thought process was to structure the page as a conversion narrative: capture attention, present benefits, reduce objections, and keep the main action easy to find.',
        description:
          'Presentation page with commercial sections, smooth animations, and a clear conversion goal.',
        tags: ['Vite', 'React', 'User experience'],
        link: '#',
      },
      {
        slug: 'app-de-tarefas',
        title: 'Task App',
        image: sharedImages.tasks,
        gallery: [
          {
            image: sharedImages.tasksGallery[0],
            caption: 'Fast task creation with priority and context.',
          },
          {
            image: sharedImages.tasksGallery[1],
            caption: 'Visual organization for pending, in-progress, and completed items.',
          },
          {
            image: sharedImages.tasksGallery[2],
            caption: 'A simple flow to review the day without losing important information.',
          },
        ],
        mainIdea:
          'Create a lightweight experience for organizing daily tasks while keeping priorities and states visible.',
        story:
          'This project started from a simple pain point: losing control of tasks when everything is scattered. The solution was to design a direct experience where creating, viewing, and tracking activities felt fast and frictionless.',
        thinking:
          'My thought process was to remove friction. The interface needed to be simple enough for daily use, but organized enough to show priority, state, and progress quickly.',
        description:
          'Simple application to organize tasks, priorities, and states with a fast and fluid experience.',
        tags: ['JavaScript', 'LocalStorage', 'Interface'],
        link: '#',
      },
      {
        slug: 'portfolio-interativo',
        title: 'Interactive Portfolio',
        image: sharedImages.portfolio,
        gallery: [
          {
            image: sharedImages.portfolioGallery[0],
            caption: 'Home page focused on clear presentation and visual personality.',
          },
          {
            image: sharedImages.portfolioGallery[1],
            caption: 'Projects organized to make reading and navigation easier.',
          },
          {
            image: sharedImages.portfolioGallery[2],
            caption: 'Editable structure for changing text, links, and images easily.',
          },
        ],
        mainIdea:
          'Create a more expressive portfolio experience where each project can tell a story and show design decisions.',
        story:
          'The project came from the desire to turn a simple page into a more complete experience. The idea was to organize presentation, projects, and contact in a direct way, but with personality.',
        thinking:
          'My thought process was to balance clarity and visual identity: keep the content easy to navigate while adding details that show care in the finish.',
        description:
          'Responsive portfolio with animations, individual project pages, and an easy-to-edit content structure.',
        tags: ['React', 'Vite', 'CSS'],
        link: '#',
      },
      {
        slug: 'sistema-de-atendimento',
        title: 'Support System',
        image: sharedImages.support,
        gallery: [
          {
            image: sharedImages.supportGallery[0],
            caption: 'Ticket list with clearly visible status and priorities.',
          },
          {
            image: sharedImages.supportGallery[1],
            caption: 'Interaction history to understand each support case quickly.',
          },
          {
            image: sharedImages.supportGallery[2],
            caption: 'Filters that help teams find urgent requests without friction.',
          },
        ],
        mainIdea:
          'Organize tickets and interactions in a simple screen to help teams track priorities and status.',
        story:
          'The proposal was born from a common team workflow: many requests arriving at the same time and little clarity about what needs attention first.',
        thinking:
          'My thought process was to create visual organization by priority, state, and history, reducing scattered information.',
        description:
          'Interface for support management with status cards, filters, and quick request visualization.',
        tags: ['React', 'JavaScript', 'User experience'],
        link: '#',
      },
      {
        slug: 'painel-de-ia',
        title: 'AI Panel',
        image: sharedImages.ai,
        gallery: [
          {
            image: sharedImages.aiGallery[0],
            caption: 'Prompt input focused on context, objective, and review.',
          },
          {
            image: sharedImages.aiGallery[1],
            caption: 'Response comparison to choose the best generated result.',
          },
          {
            image: sharedImages.aiGallery[2],
            caption: 'Organized history to track generations and adjustments.',
          },
        ],
        mainIdea:
          'Explore an interface to track AI-generated responses, prompts, and results in an organized way.',
        story:
          'This project starts from the idea that AI tools need to be clear, traceable, and easy to review, especially when multiple generations happen in the same flow.',
        thinking:
          'My thought process was to separate input, output, and history, creating a cleaner view for comparing responses and understanding the process.',
        description:
          'Conceptual panel for AI workflows, focused on organizing prompts, results, and usage history.',
        tags: ['AI', 'React', 'Interface'],
        link: '#',
      },
    ],
    contact: {
      email: 'moritaigorr@gmail.com',
      links: [
        { label: 'GitHub', href: 'https://github.com/moritaigorr' },
        { label: 'LinkedIn', href: 'https://www.linkedin.com/in/igor-morita-206650341/' },
        { label: 'Resume', href: '#', type: 'resume' },
      ],
    },
  },
}

export const portfolio = portfolios.pt
