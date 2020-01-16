const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require('./routes');

const app = express();

mongoose.connect("mongodb+srv://omni:omni@omni-nufmk.mongodb.net/test?retryWrites=true&w=majority", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);

//Métodos HTTP: GET, POST, PUT, DELETE

//Tipos de parâmetros:

//Query Params: request.query (filtros, ordenação, paginação...)
//Route Params: request.params (Identificar um recurso na alteração ou remoção);
//Body: request.body (Dados para criação ou alteração de um registro) 