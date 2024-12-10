# Certificados Ondina App  

## Introdução  

Este projeto é uma aplicação web desenvolvida com [Next.js](https://nextjs.org/) para facilitar o trabalho da diretoria de uma instituição de ensino na geração e gestão de certificados e diplomas.  

### Principais funcionalidades  

- **Inserção de alunos na plataforma**: A diretoria pode adicionar os dados dos estudantes.  
- **Geração de documentos**: Certificados e diplomas são criados automaticamente a partir das informações fornecidas.  
- **Histórico de documentos gerados**: Permite gerenciar os alunos e consultar quando os certificados e diplomas foram emitidos.  

A aplicação utiliza uma API como backend, cuja URL deve ser configurada como variável de ambiente.  

---

## Sumário  

1. [Instalação] (#instalação)  
   - Guia para configurar e executar o projeto localmente.  

2. Páginas
   - A aplicação é dividida em duas páginas principais:  
     - [Login] (#login): Autenticação para acessar o painel administrativo.  
     - [Dashboard] (#dashboard): Painel administrativo para gerenciar alunos e documentos.

--  

## Como rodar o projeto {#instalação}

### Pré-requisitos  

Certifique-se de ter instalado:  

1. **Node.js** (versão 16 ou superior).  
2. **npm** (incluído com o Node.js).  

### Passo a passo  

1. **Clone o repositório do projeto**  

   ```bash
   git clone https://github.com/Rafanfos/certificados_ondina_app.git
   cd certificados_ondina_app

2. **Instale as dependências**

   ```bash
   npm install

3. **Configure as variáveis de ambiente**

   - Crie um arquivo .env na raiz do projeto com base no modelo do arquivo .env.local.
   - Insira a variável de ambiente NEXT_PUBLIC_BACKEND_URL, indicando o endereço do backend. Exemplo:

     ```bash
     NEXT_PUBLIC_BACKEND_URL=http://localhost:3030

4. **Inicie o servidor de desenvolvimento**

   Após configurar as variáveis de ambiente, inicie a aplicação com o comando:

   ```bash
   npm run dev

5. **Acesse a aplicação**

   O servidor será iniciado em <http://localhost:3000>. Abra esse endereço no navegador para acessar o painel.

## Login {#login}

A página de login é usada para autenticar a diretoria no sistema.

- O registro da conta de acesso deve ser realizado no backend.
- Para criar uma conta, siga as instruções no repositório do backend:
- Certificados Ondina API

Após a criação da conta no backend, utilize as credenciais fornecidas para fazer login nesta página e acessar o dashboard.

## Dashboard {#dashboard}  

O **Dashboard** é o painel administrativo da aplicação, onde a diretoria pode gerenciar os alunos e os documentos emitidos. Ele está dividido em três principais seções:  

### 1. Tabela de Alunos  

- A tabela exibe a lista de todos os alunos registrados no sistema.  
- Para cada aluno, a tabela oferece duas funcionalidades principais:  
  - **Baixar Certificado de Aluno Destaque**: Clique no ícone correspondente na coluna da tabela para baixar o certificado.  
  - **Baixar Diploma**: Clique no ícone na coluna correspondente para baixar o diploma.  

#### Funcionalidades adicionais  

- **Seleção múltipla**: É possível selecionar vários alunos utilizando checkboxes ao lado de cada registro na tabela.  
- **Botões de ações em massa**:  
  - **Gerar Certificados**: Após selecionar os alunos, clique neste botão para gerar certificados em lote.  
  - **Gerar Diplomas**: Após selecionar os alunos, clique neste botão para gerar diplomas em lote.  

#### Modal de Confirmação  

- Ao clicar em qualquer uma das opções de geração de documentos (individual ou em massa), um modal será exibido solicitando informações adicionais:  
  - **Ano em questão**  
  - **Vice-Diretor** (apenas para certificados)  
  - **Diretor**  

Essa funcionalidade garante que os documentos sejam gerados com informações precisas e personalizadas para cada caso.  

---

### 2. Upload de Alunos  

- Nesta seção, é possível importar dados de novos alunos para o sistema.  
- **Modelo CSV**: Antes de realizar o upload, baixe um modelo de arquivo CSV com o formato esperado (nome do aluno e trimestre).  
- **Envio de Arquivo**: Após preencher o modelo com as informações dos alunos, faça o upload do arquivo.  
  - O sistema processará os dados, adicionará os alunos ao banco de dados e eles aparecerão automaticamente na tabela da seção anterior.  

Essa funcionalidade facilita a inserção em massa de alunos no sistema, economizando tempo e reduzindo erros manuais.  

---

### 3. Cabeçalho com Botão de Logout  

- O cabeçalho do dashboard contém um botão de **Sair**.  
  - **Funcionalidade**: Ao clicar neste botão, o usuário será desconectado do sistema (logout) e redirecionado para a página de login.  

Essa funcionalidade garante a segurança e permite que o acesso ao painel seja encerrado de forma rápida e simples.  
