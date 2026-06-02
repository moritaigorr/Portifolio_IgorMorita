# Regras Para Agentes de IA

Este projeto deve permanecer simples, limpo e facil de manter. Antes de criar, mover ou apagar arquivos, siga estas regras.

## Impedimentos

- Nao crie arquivos novos sem necessidade real. Prefira editar arquivos existentes quando isso resolver o problema com clareza.
- Nao instale dependencias para tarefas que podem ser feitas com React, CSS ou JavaScript ja disponiveis no projeto.
- Nao gere imagens, documentos, exemplos, mocks, testes amplos ou configuracoes extras sem pedido explicito.
- Nao adicione frameworks, bibliotecas de UI, gerenciadores de estado ou ferramentas de build sem justificativa forte.
- Nao misture conteudo editavel com componentes visuais quando o dado puder ficar em `src/data/portfolio.js`.
- Nao deixe codigo morto, imports sem uso, estilos sem uso ou componentes abandonados.
- Nao altere arquivos de build/cache como `dist/`, `node_modules/` ou `npm-cache/`.

## Base De Clean Architecture

Use uma versao simples de Clean Architecture adequada para um portfolio React:

- `src/data/`: dados editaveis e conteudo do portfolio.
- `src/components/`: componentes visuais reutilizaveis, sem regra de navegacao complexa.
- `src/pages/`: composicao de paginas/rotas, usando componentes e dados recebidos por props.
- `src/App.jsx`: roteamento e layout principal.
- `src/styles.css`: estilo global do design system atual.

## Diretrizes De Implementacao

- Componentes devem receber dados por props sempre que fizer sentido.
- Textos, links, projetos, skills e contatos devem ficar centralizados em `src/data/portfolio.js`.
- Paginas devem montar secoes, nao duplicar logica visual.
- Estilos novos devem reaproveitar variaveis CSS existentes.
- Mudancas devem ser pequenas, focadas e verificadas com `npm run build`.

## Criterio Para Criar Arquivo Novo

Crie um arquivo novo somente se pelo menos uma destas condicoes for verdadeira:

- O arquivo representa uma pagina nova.
- O arquivo representa um componente reutilizavel real.
- O arquivo isola dados editaveis.
- O arquivo reduz duplicacao concreta.
- O arquivo foi solicitado explicitamente pelo usuario.

Se nenhuma condicao for verdadeira, edite um arquivo existente.
