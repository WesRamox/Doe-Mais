# Doe+

Projeto de extensão voltado para a doação de sangue e cadastro de doadores, com foco em práticas sustentáveis, como doações recorrentes e campanhas digitais.

## FRONT-END 
#### Projeto em Desenvolvimento ⚠️
## BACK-END

### **1️⃣ Autenticação e Usuários**

- ✅ `POST /auth/register` → Cadastro de usuário
- ✅ `POST /auth/login` → Login e geração de token
- `GET /users/profile` → Obter dados do usuário logado

### **3️⃣ Campanhas de Doação**

- ✅ `GET /campaigns` → Listar campanhas ativas
- ✅ `POST /campaigns` → Criar nova campanha (restrito a admins)

### **4️⃣ Bancos de Sangue**

- `GET /blood-banks` → Listar bancos de sangue disponíveis

## Modelos de Usuários

### **1️⃣ Donor (Doador) – Usuário comum**

- Pode se cadastrar e atualizar seu perfil
- Pode visualizar campanhas e bancos de sangue
- Pode indicar interesse em doar
- Pode receber notificações sobre novas campanhas

### **2️⃣ Admin (Administrador) – Gestão do sistema**

- Gerencia campanhas de doação
- Cadastra e atualiza bancos de sangue
- Modera usuários e doadores
- Envia notificações para doadores

## Possível Expansão no Futuro

Se o sistema crescer, podemos incluir:

- **Hemocentros** (hospitais, clínicas) → Cadastram estoques de sangue
- **Organizadores** (gestores de campanhas) → Criam eventos de doação

## Tecnologias Utilizadas
- NodeJS
- Typescript
- ExpressJS
- SwaggerUI
- JsonWebToken
- Jest
