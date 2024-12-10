# Usar uma imagem base do Node.js
FROM node:20

# Instalar as dependências do sistema necessárias para o Sharp
RUN apt-get update && apt-get install -y \
  libvips-dev \
  --no-install-recommends && \
  rm -rf /var/lib/apt/lists/*

# Definir o diretório de trabalho
WORKDIR /app

# Copiar o package.json e o package-lock.json (ou yarn.lock)
COPY package*.json ./

# Instalar as dependências, incluindo sharp
RUN npm install sharp

# Copiar o restante do código
COPY . .

# Construir o aplicativo Next.js
RUN npm run build

# Expor a porta que o Next.js usará
EXPOSE 3000

# Comando para iniciar o aplicativo
CMD ["npm", "start"]
