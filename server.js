
const express = require('express')
const path = require('path');

const app = express()

const baseDir = `${__dirname}/build/`

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

const port = 4000

app.listen(port, () => console.log(`Servidor subiu com sucesso em http://localhost:${port}`))