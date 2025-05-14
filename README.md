# TaskWeek

Um aplicativo web de gerenciamento de tarefas semanais desenvolvido para ajudar usuários a organizar suas atividades de segunda a domingo.

## 📋 Sobre o Projeto

TaskWeek é um sistema web focado em gerenciamento de tarefas semanais. Diferente de gerenciadores tradicionais, o TaskWeek limita a inserção de tarefas apenas dentro do escopo semanal, incentivando o planejamento contínuo e o acompanhamento prático das obrigações cotidianas.

O objetivo do sistema é facilitar o planejamento semanal por meio de uma interface clara e funcional, promovendo foco, produtividade e melhor uso do tempo.

## ✨ Funcionalidades Principais

- Cadastro de tarefas com título, descrição e dia da semana
- Edição e exclusão de tarefas
- Marcar tarefas como concluídas
- Filtrar tarefas por dia da semana e por status (pendente ou concluída)
- Visualização semanal com interface responsiva

## 🛠️ Tecnologias Utilizadas

### Linguagens de Programação
- JavaScript (tanto no front-end quanto no back-end)

### Frameworks e Bibliotecas
- **Front-end:** React.js
- **Back-end:** Node.js com Express.js
- **Banco de dados:** PostgreSQL
- **ORM:** Sequelize
- **HTTP Client:** Axios

### Justificativa das Tecnologias

- **JavaScript:** Utilizado em toda a aplicação para unificar a linguagem e facilitar o desenvolvimento. A ampla documentação e comunidade ativa tornam o processo de aprendizado e resolução de problemas mais eficaz.
- **React.js:** Biblioteca moderna que permite a criação de interfaces reativas e modulares, facilitando a manutenção e escalabilidade do sistema.
- **Node.js e Express.js:** Estrutura leve e eficiente para o desenvolvimento de APIs REST, com suporte à comunicação fluida entre o cliente e o servidor.
- **PostgreSQL:** Banco de dados relacional robusto, gratuito e amplamente utilizado no mercado. Adequado para armazenar e organizar as tarefas por dias da semana com integridade.
- **Sequelize:** Biblioteca ORM que permite trabalhar com dados de forma orientada a objetos, reduzindo a necessidade de comandos SQL manuais e tornando o código mais limpo.
- **Axios:** Biblioteca utilizada para realizar requisições HTTP de forma eficiente entre o front-end e o back-end.

## 🏗️ Arquitetura do Sistema

O sistema TaskWeek é baseado na arquitetura cliente-servidor com separação em três camadas principais:

### Camada de Apresentação (Front-end)
Desenvolvida em React.js, esta camada é responsável pela interface com o usuário, permitindo a visualização e interação com as tarefas semanais de forma dinâmica e responsiva. As ações do usuário (como cadastrar, editar ou concluir uma tarefa) são enviadas para o back-end por meio de requisições HTTP.

### Camada de Lógica de Negócio (Back-end)
Implementada com Node.js e Express.js, essa camada gerencia as regras de negócio, validações e rotas da API. Ela é responsável por processar as requisições recebidas do front-end e interagir com o banco de dados, retornando os resultados ao usuário.

### Camada de Persistência (Banco de Dados)
Utiliza o PostgreSQL para armazenar de forma estruturada as informações relacionadas às tarefas do usuário (título, descrição, status e dia da semana). O acesso ao banco é feito via Sequelize, que facilita a manipulação dos dados com uma abordagem orientada a objetos.

## 📊 Estimativa de Esforço e Custo

### Estimativa de Horas de Trabalho

| Histórias de Usuário    | Horas Desen. (Pleno) | Horas Testes (Júnior) | Total de Horas |
|-------------------------|----------------------|----------------------|---------------|
| Cadastro de Tarefas     | 10                   | 5                    | 15            |
| Concluir Tarefas        | 6                    | 3                    | 9             |
| Edição de Tarefas       | 8                    | 4                    | 12            |
| Filtro de Tarefas       | 7                    | 3                    | 10            |
| Excluir Tarefa          | 5                    | 2                    | 7             |
| Interface Responsiva    | 12                   | 6                    | 18            |
| Visualizar de Tarefas   | 9                    | 4                    | 13            |
| **TOTAL GERAL**         | **57**               | **27**               | **84**        |

### Estimativa de Custo

| História de Usuário    | Custo Desen. (R$) | Custo Testes (R$) | Custo Total (R$) |
|------------------------|-------------------|-------------------|------------------|
| Cadastro de Tarefas    | 600,00            | 200,00            | 800,00           |
| Concluir Tarefas       | 360,00            | 120,00            | 480,00           |
| Edição de Tarefas      | 480,00            | 160,00            | 640,00           |
| Filtro de Tarefas      | 420,00            | 120,00            | 540,00           |
| Excluir Tarefa         | 300,00            | 80,00             | 380,00           |
| Interface Responsiva   | 720,00            | 240,00            | 960,00           |
| Visualizar de Tarefas  | 540,00            | 160,00            | 700,00           |
| **TOTAL GERAL**        | **3420,00**       | **1080,00**       | **4500,00**      |

### Taxa Horária

- **Desenvolvedor Pleno:** R$ 60,00/hora
  - Justificativa: perfil mais experiente, com conhecimento sólido em React.js, Node.js e integração com banco de dados.
- **Desenvolvedor Júnior:** R$ 40,00/hora
  - Justificativa: profissional em início de carreira, responsável pelos testes e validações funcionais.

## 👥 Equipe de Desenvolvimento

- Gustavo Henrique Rodrigues
- João Pedro Almeida Leão
- Leonardo Pacheco de Oliveira Vaz

---

*Documentação criada em Abril de 2025*
