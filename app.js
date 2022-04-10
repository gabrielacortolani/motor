const express = require('express')
const http = require('http')

require('./src/database/indexDb.js');

// instanciar o express
const app = express();

app.use(express.json())

const indexRoutes = require('./src/api/routes/indexRoutes.js')
const motorRoutes = require('./src/api/routes/motorRoutes.js')
const pecasRoutes = require('./src/api/routes/pecasRoutes.js')

app.use(indexRoutes)

app.use(motorRoutes)
app.use(pecasRoutes)

//configurar a porta e url para execução do aplicativo
app.set('url', 'http://localhost:')
app.set('porta', 3001);

http.createServer(app).listen(app.get('porta'), function(){
    console.log('Servidor rodando na porta: '+app.get('url') +app.get('porta'))
})

module.exports = app;


