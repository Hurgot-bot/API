require('dotenv').config({path:'variaveis.env'})//ler arquivo variaveis.env
const express = require('express');
const cors = require('cors'); //w3c pra trabalhar com API permite acessos a recursos de outro site mesmo em dominio diferente
const bodyParser = require('body-parser'); //// converte body pra outros formatos

const routes = require('./routes');//onde as rotas estao
const server = express();// express controla o server
server.use(cors());
server.use(bodyParser.urlencoded({ extended: false }));

server.use('/api',routes);

server.listen(process.env.PORT, () => {
    console.log(`Servidor rodando em: http://localhost:${process.env.PORT}`);
});