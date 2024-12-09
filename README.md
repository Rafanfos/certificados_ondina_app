# Certificados Ondina App  

## Introdução  

Este projeto é uma aplicação web desenvolvida com [Next.js](https://nextjs.org/) para facilitar o trabalho da diretoria de uma instituição de ensino na geração e gestão de certificados e diplomas.  

### Principais funcionalidades  

- **Inserção de alunos na plataforma**: A diretoria pode adicionar os dados dos estudantes.  
- **Geração de documentos**: Certificados e diplomas são criados automaticamente a partir das informações fornecidas.  
- **Histórico de documentos gerados**: Permite gerenciar os alunos e consultar quando os certificados e diplomas foram emitidos.  

A aplicação utiliza uma API como backend, cuja URL deve ser configurada como variável de ambiente.  

---

## Como rodar o projeto  

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
