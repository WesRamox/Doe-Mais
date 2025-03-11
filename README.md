# Doe+

Projeto de extensão voltado para a **doação de sangue** e **cadastro de doadores**, com foco em **práticas sustentáveis**, como doações recorrentes e campanhas digitais.

---

## 🚀 FRONT-END  
### **1️⃣ Autenticação e Usuários**
- ✅ **Cadastro de usuário** integrado ao backend  
- 🔄 **Login** integrado ao backend  
- 🔄 **Perfil do usuário** para exibir e atualizar dados do usuário logado  

### **2️⃣ Campanhas de Doação**
- 🔄 Página para **listar campanhas ativas**  
- 🔄 Formulário para **criação de novas campanhas** (restrito a admins)  

### **3️⃣ Bancos de Sangue**
- 🔄 Página para **listar bancos de sangue disponíveis**  

### **4️⃣ Notificações e Alertas**
- 🔄 Sistema de **alertas para novas campanhas**  
- 🔄 **Notificações para doadores interessados**  

### **5️⃣ Melhorias na Experiência do Usuário (UX/UI)**
- 🔄 **Layout responsivo e acessível**  
- 🔄 **Feedback visual** para ações do usuário (ex: envio de formulários)  

---

## 🛠️ Tecnologias Utilizadas - FRONT-END
- **ReactJS**
- **TypeScript**
- **Material UI (MUI)**
- **React Router**
- **Axios**
- **Zustand** (para gerenciamento de estado)

---

## 🌐 BACK-END  
### **1️⃣ Autenticação e Usuários**
- ✅ `POST /auth/register` → **Cadastro de usuário**  
- ✅ `POST /auth/login` → **Login e geração de token**  
- ✅ `GET /users/profile` → **Obter dados do usuário logado**  

### **2️⃣ Campanhas de Doação**
- ✅ `GET /campaigns` → **Listar campanhas ativas**  
- ✅ `POST /campaigns` → **Criar nova campanha** (restrito a admins)  

### **3️⃣ Bancos de Sangue**
- 🔄 `GET /blood-banks` → **Listar bancos de sangue disponíveis**  

---

## 👥 Modelos de Usuários
### **1️⃣ Donor (Doador) – Usuário comum**
- Pode **se cadastrar** e **atualizar seu perfil**  
- Pode **visualizar campanhas** e **bancos de sangue**  
- Pode **indicar interesse em doar**  
- Pode **receber notificações** sobre novas campanhas  

### **2️⃣ Admin (Administrador) – Gestão do sistema**
- Gerencia **campanhas de doação**  
- Cadastra e atualiza **bancos de sangue**  
- Modera **usuários e doadores**  
- Envia **notificações para doadores**  

---

## 📈 Expansão Futura
Possíveis melhorias para o crescimento do sistema:  
- **Hemocentros** (hospitais, clínicas) → Cadastram estoques de sangue  
- **Organizadores** (gestores de campanhas) → Criam eventos de doação  

---

## 🛠️ Tecnologias Utilizadas - BACK-END
- **NodeJS**
- **TypeScript**
- **ExpressJS**
- **SwaggerUI**
- **JsonWebToken**
- **Jest**
