# Comeia-Challenge
## Vaccination Page

Formulário para agendamento de vacina
- Criar agendamento
  - O usuário não precisará está logado para criar o agendamento.
  - Agendamento único (Com base no CPF)
  - Nome Completo
  - CPF
  - Idade
  - Profissão
  - Comorbidade (true/false)
  - Comorbidade (descrição)
  - Data
  - Hora
- Consultar agendamento
  - CPF
- Area Administrativa
  - Login Autenticado do ADM (JWT)
  - Listar todos os agendamentos Cadastrados
  - Deletar agendamento
  - Páginação dos resultados (debounce como critério)
  - Listagem com filtro

## Backend [NodeJS]

- Banco de Dados: Postgres
- Autenticação do ADM: JWT
  - Sessão expira em 5 minutos
  - Rota de listagem de todos os agendamentos
  - Rota de deletar agendamento
- Validação de CPF
- Validação se já existe agenda para o CPF


## Frontend [ReactJS]

- Navegação entre páginas: React-Router-Dom
- Pré-processador CSS: Styled-components
- Alertas: Sweetalert2
- Requisições ao backend: Axios