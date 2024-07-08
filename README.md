# Documentation

# api starwars com nodejs, express e mongodb

1. instalação do nodejs

apt-get install nodejs

2. iniciando o projeto

npm init

3. instalação do express e nodemon

https://www.npmjs.com/package/express

https://expressjs.com/

npm i express

npm i nodemon

4. instalação do mongoose biblioteca ORM

https://www.npmjs.com/package/mongoose

https://mongoosejs.com/

npm i mongoose

5. Comando Docker

construir a imagem

docker build -t alairtonpereiradev/starwars-api .

rodando a imagem criada.

docker run --name node-docker -p 3333:3333 -d alairtonpereiradev/starwars-api