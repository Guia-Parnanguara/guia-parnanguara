# AGENTS.md

App mobile do Guia Parnanguara (React Native + TypeScript).
Consome a API do repositório `guia-parnanguara-api` (Django Ninja).

## Como rodar
- Instalar: `npm install`
- Rodar: `npx expo start` (ou `npm start`)

## Estrutura
- `src/app/` telas e rotas (Expo Router)
- `src/components/` componentes reutilizáveis
- `src/services/` integração com a API
- `src/utils/` helpers e temas

## Regras
- Faça mudanças pequenas, só o que a issue pede.
- Reaproveite componentes existentes e siga o estilo atual.
- Chamadas à API ficam em `src/services/`, nunca direto nas telas.
- Não invente rotas: se a API não tem o endpoint, comente na issue.
- Não adicione dependências nem mexa em `android/`, `ios/` ou configs sem a issue pedir.
- Se a issue estiver confusa, comente com as dúvidas em vez de chutar.

## Entrega
- Trabalhe em uma branch, nunca direto na `main`.
- O padrão de nomeação das branches é `feat/issue-numero-da-issue-curto-descricao`.
- No PR, descreva o que mudou e como testar, e use `Closes #<número da issue>`.