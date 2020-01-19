// Mètodos HTTP: get, post, put, delete

/**
 * get: Busca no back
 * post: Criar informação
 * put: Editar algo
 * delete: deleta
 */

/**
 * Tipoos de Parametros:
 * 
 * Query Params: req.query (filtros, ordenação, paginação, ...)
 * Route Params: req.params (Identifica um recurso na alteração ou remoção)
 * Body: req.body (Dados para criação ou alteração de um registro)
 */


 // mongoDB (Não-relacional);
const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes')

const app = express();
mongoose.connect('mongodb+srv://admin:ab1234fecd@cluster0-yegig.mongodb.net/week10?retryWrites=true&w=majority', {
     useNewUrlParser: true ,
     useUnifiedTopology: true
    });

app.use(express.json());
app.use(routes)

app.listen(3333);
