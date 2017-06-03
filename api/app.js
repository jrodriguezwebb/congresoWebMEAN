'use strict'

//imports
var express = require('express');
var bodyParser = require('body-parser');
var cors =  require('./cors');
var user_routes = require('./routes/user');

//app express
var app = express();

//configurar cabeceras http
app.use(cors.permisos);

//body parser
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

//rutas base
app.use('/api',user_routes);

app.get('/',(req,res)=>{
    res.status(200).send({message:"Bienvenido"});
})

module.exports = app;
