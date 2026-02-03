const registros = require("../data/data.js")
const express = require('express');
const router = express.Router();

    router.get("/mostrarDadosSearch", (req, res) => {
        const { valor } = req.query;

        const nomes = ["Pedro", "Ana"];

        if (!valor) {
            return res.json([]);
        }

        const valorMin = valor.toLowerCase();

        const resultado = nomes.filter(nome =>
            nome.toLowerCase().includes(valorMin)
        );

        res.json(resultado);
    });


module.exports = router;

