# Use a imagem oficial do Nginx
FROM nginx:alpine

# Copie os arquivos do projeto para o diretório padrão do Nginx
COPY ./src /usr/share/nginx/html

# Exponha a porta padrão do Nginx
EXPOSE 80

version: '3'
services:
  web:
    build: .
    ports:
      - "8080:80"