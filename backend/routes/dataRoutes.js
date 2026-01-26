const registros = require("../data/data.js")
const express = require('express');
const router = express.Router();

const buscarPrimeiroUser = (req, res) => {
    const dados = registros[0];
    res.json(dados)
}

router.get("/buscarDadosDoPrimeiroUsuario", buscarPrimeiroUser)

module.exports = router;