# Etapa 1: Construir o aplicativo
FROM node:18 AS builder

# Defina o diretório de trabalho
WORKDIR /app

# Copie os arquivos de configuração do pacote
COPY package*.json ./

# Instale as dependências
RUN npm install

# Copie o restante do código do aplicativo
COPY . .

# Construa o aplicativo para produção
RUN npm run build

# Etapa 2: Servir o aplicativo
FROM node:18 AS production

# Defina o diretório de trabalho
WORKDIR /app

# Copie apenas as dependências de produção e o build
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/.next ./
COPY --from=builder /app/public ./public

# Instale apenas as dependências de produção
RUN npm install --only=production

# Exponha a porta que o Next.js irá usar
EXPOSE 3000

# Comando para iniciar o Next.js
CMD ["npm", "start"]
