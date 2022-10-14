const express = require('express')
const routes = require('../routes/routes')
const server = express();

server.use(express.json())
server.get('/', (_, res) => {
    res.send('Servidor del Gym funcionando :)')
})
server.use('/api', routes)
module.exports = server;