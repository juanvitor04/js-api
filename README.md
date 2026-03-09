# 📚 js-api — API REST de Cadastro de Alunos

API RESTful para cadastro e gerenciamento de alunos, desenvolvida com Node.js, Express e Sequelize ORM.

## 🚀 Tecnologias

- **Node.js** — Ambiente de execução
- **Express** — Framework web
- **Sequelize ORM** — Mapeamento objeto-relacional
- **MariaDB** — Banco de dados relacional
- **Multer** — Upload de arquivos (foto do aluno)
- **JWT (jsonwebtoken)** — Autenticação via token
- **Bcryptjs** — Hash de senhas
- **Sucrase** — Transpilação de ES Modules
- **Nodemon** — Reload automático em desenvolvimento
- **ESLint** — Linting do código

## 📁 Estrutura do Projeto

```
js-api/
├── src/
│   ├── config/         # Configuração do banco de dados
│   ├── controllers/    # Lógica dos endpoints
│   ├── middlewares/    # Autenticação e validações
│   ├── migrations/     # Migrações do Sequelize
│   ├── models/         # Modelos das entidades
│   └── routes/         # Definição das rotas
├── app.js              # Configuração do Express
├── server.js           # Inicialização do servidor
├── .sequelizerc        # Configuração de paths do Sequelize
├── nodemon.json        # Configuração do Nodemon
└── package.json
```

## ⚙️ Pré-requisitos

- Node.js 18+
- MariaDB (ou MySQL)

## 🛠️ Instalação

```bash
# Clone o repositório
git clone https://github.com/juanvitor04/js-api.git
cd js-api

# Instale as dependências
npm install
```

## 🗄️ Configuração do Banco de Dados

Crie um banco de dados no MariaDB e configure as credenciais em `src/config/database.js` (ou via variável de ambiente `.env`).

```sql
CREATE DATABASE js_api_db;
```

Execute as migrations:

```bash
npx sequelize-cli db:migrate
```

## ▶️ Como Executar

```bash
# Desenvolvimento (com Nodemon)
npm run dev

# Produção
npm start
```

O servidor estará disponível em `http://localhost:3001`.

## 🔐 Autenticação

A API utiliza **JWT**. Para acessar rotas protegidas, inclua o token no header:

```
Authorization: Bearer <token>
```

## 📌 Endpoints

### Autenticação
| Método | Rota | Descrição |
|--------|------|-----------|
| `POST` | `/tokens` | Gera token de acesso |

### Alunos
| Método | Rota | Descrição |
|--------|------|-----------|
| `GET` | `/alunos` | Lista todos os alunos |
| `GET` | `/alunos/:id` | Retorna um aluno por ID |
| `POST` | `/alunos` | Cadastra novo aluno |
| `PUT` | `/alunos/:id` | Atualiza um aluno |
| `DELETE` | `/alunos/:id` | Remove um aluno |

### Fotos
| Método | Rota | Descrição |
|--------|------|-----------|
| `POST` | `/fotos/:id` | Faz upload da foto do aluno |

## 📝 Licença

Projeto desenvolvido para fins de estudo.
