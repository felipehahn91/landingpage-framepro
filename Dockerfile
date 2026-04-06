# Estágio 1: Build da aplicação
FROM node:20-alpine as build

WORKDIR /app

# Copia apenas o package.json primeiro para aproveitar o cache das camadas do Docker
COPY package.json ./

# Instala as dependências usando --legacy-peer-deps para evitar erros de conflito de versão
# e --loglevel error para não poluir o log, mas mostrar o que importa
RUN npm install --legacy-peer-deps

# Copia o resto dos arquivos do projeto
COPY . .

# Faz o build da aplicação
RUN npm run build

# Estágio 2: Servidor Nginx para produção
FROM nginx:alpine

# Copia a configuração customizada do Nginx
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copia os arquivos buildados do estágio anterior
COPY --from=build /app/dist /usr/share/nginx/html

# Expõe a porta 80
EXPOSE 80

# Inicia o Nginx
CMD ["nginx", "-g", "daemon off;"]