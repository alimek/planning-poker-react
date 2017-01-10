FROM node:latest

RUN mkdir -p /src

WORKDIR /app/

COPY package.json /src/package.json
RUN npm install

EXPOSE 3000