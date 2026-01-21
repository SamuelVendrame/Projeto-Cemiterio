const express = require('express');

const app = express();

const PORT = 3000;

fetch("/rotaDisplay")
.then(res => res.json())

app.listen(PORT, (req, res) => {
    console.log("Servidor rodando na porta 3000.")
})