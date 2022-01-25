const express = require('express');
const consign = require('consign');
const cors = require('../middlewares/cors');
const app = express();


// Carrega variáveis de ambiente

require('dotenv').config();

// Inicializa middlewares

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

// Carrega todos os módulos na aplicação

consign()
    .include('app/routes')
    .then('config/dbConnection.js')
    .then('app/models')
    .then('app/controllers')
    .then('app/repositories')
    .then('app/utils')
    .into(app);

module.exports = app;