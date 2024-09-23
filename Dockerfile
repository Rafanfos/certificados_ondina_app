# Usar uma imagem base do Node.js
FROM node:20

# Definir o diretório de trabalho
WORKDIR /app

# Copiar o package.json e o package-lock.json (ou yarn.lock)
COPY package*.json ./

# Instalar as dependências
RUN npm install

# Copiar o restante do código
COPY . .

# Construir o aplicativo Next.js
RUN npm run build

# Expor a porta que o Next.js usará
EXPOSE 3000

# Comando para iniciar o aplicativo
CMD ["npm", "start"]
