import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import path from 'path';
//import { get } from 'http';
//const express = require('express');
//const morgan = require('morgan');
//const cors = require('cors');
//const path = require('path');
const app = express();

//Conexión a base de datos
const mongoose = require('mongoose');
//const uri = 'mongodb://localhost:27017/prueba';
const uri = 'mongodb+srv://glmar:Martina2017@cluster0.11ufb.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
//

const options = {useNewUrlParser: true, useUnifiedTopology: true}
// Or using promises
mongoose.connect(uri, options).then(
    () => { 
        console.log('Conectado a DB en Mongo Atlas')
     },
    err => { err }
  );

//MIDDLEWARE
app.use(morgan('tiny'));
app.use(cors());
app.use(express.json());
//Solicitudes y respuestas mediante: application/x-www-for-urlencoded
app.use(express.urlencoded({extended: true}));
//app.use(express.static(path.join(__dirname, 'public')));
// Conexión a base de datos
//RUTAS
//app.get('/', function(req,res){
//  res.send('Hola mundo');
//});
app.use('/api', require('./routes/nota'));
// Middleware para Vue.js router modo history
const history = require('connect-history-api-fallback');
app.use(history());
app.use(express.static(path.join(__dirname, 'public')));

//PUERTO

app.set('puerto', process.env.PORT ||3000);
app.listen(app.get('puerto'), () => {
    console.log('Example app listening on port'+ app.get('puerto'));
});


// PUERTO (Activar para saber si está funcionando)
//app.listen(3000, function ()
// { console.log('Example app listening on port 3000!'); });





