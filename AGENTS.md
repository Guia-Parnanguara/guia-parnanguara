# AGENTS.md

App mobile do Guia Parnanguara (React Native + TypeScript, Expo).
Consome a API do repositório `guia-parnanguara-api` (Django Ninja).

## Como rodar
- Instalar: `npm install`
- Rodar: `npx expo start` (ou `npm start` ou `npx expo start -c`)
- Checar tipos: `npx tsc --noEmit`
- A URL da API vem de `EXPO_PUBLIC_API_URL` no `.env` (veja `.env.example`). Depois de alterar o `.env`, reinicie com `npx expo start -c`.

## Estrutura
- `src/app/` telas e rotas (Expo Router)
- `src/components/` componentes reutilizáveis
- `src/services/` integração com a API
- `src/utils/` funções auxiliares e temas

## Regras
- Faça mudanças pequenas, só o que a issue pede. Não refatore código não relacionado.
- Reaproveite componentes existentes e siga o estilo atual.
- Chamadas à API ficam em `src/services/`, nunca direto nas telas, e sempre passam pela função `request`. Nada de `fetch` solto nem URL fixa no código.
- Não invente rotas: se a API não tem o endpoint, comente na issue.
- Não adicione dependências nem mexa em `android/`, `ios/` ou configs sem a issue pedir.
- Nunca commite `.env`, chaves ou tokens.
- Se a issue estiver confusa, comente com as dúvidas em vez de chutar.

## Convenções de código

### Nomes
- Nomes de variáveis, funções, parâmetros e constantes em **português**, em `camelCase`.
- Mantenha em **inglês** apenas termos tradicionalmente usados assim: `Card`, `Token`, `Ticket`, `User`, `Header`, `Footer`, `Props`, `Hook`, `Request`, `Response`, `Schema`, `Router`.
- Componentes em `PascalCase` (ex.: `DestaqueCard`); hooks começam com `use` (ex.: `useLocaisDestaque`).
- Não misture idiomas sem necessidade: prefira `listarLocais` a `getLocais` e `tokenAcesso` a `accessToken`.
- Campos que vêm da API mantêm o nome definido no `Schema` do backend.
- Evite abreviações obscuras (`usr`, `tmp`). `id`, `url` e `api` são aceitas.

### Funções
- Cada função faz uma coisa, e o nome diz qual: `buscarLocaisPorCategoria`, não `getData`.
- Proibido nomes genéricos (`processar`, `executar`, `tratar`, `dados`, `resultado`, `info`, `helper`) sem complemento que diga o quê.
- Nomes de funções começam com verbo no infinitivo (`listar`, `buscar`, `criar`, `atualizar`, `remover`, `validar`, `formatar`).
- Não crie função que muda de comportamento por uma flag; crie duas funções.
- Não use `any` e não deixe `catch` vazio.

### Textos
- Comentários, mensagens de commit e textos de interface em português.
- Comentários explicam o porquê, não o quê.
- Sem emojis em issues, PRs, commits e textos.

## Entrega
- Trabalhe em uma branch, nunca direto na `main`.
- Padrão de branch: `feat/<numero-da-issue>-<descricao-curta>` (ex.: `feat/12-titulo-destaque-card`). Use `fix/` para correções.
- Commits no formato `tipo: descrição` (`feat:`, `fix:`, `docs:`).
- No PR, descreva o que mudou e como testar, e use `Closes #<número da issue>`. Um PR por issue.
- Antes de abrir o PR: `npx tsc --noEmit` sem erros e sem `console.log` esquecido.