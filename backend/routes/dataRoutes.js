
const registros = require("../data/data.js")
const express = require('express');
const router = express.Router();

    router.get("/mostrarDadosSearch", (req, res) => {
        const { valor } = req.query;

        const nomes = [
            'Pedroa Santana',
            "Pedroa Joelho",
            "Pedro Cabrunco",
            'Ana',
            'Santo',
            "Barbara",
            "João",
            "Pedro Pedrão",
            "Pedro Padrão",
            "Pedrinho",
            "Pedralho"
        ]

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

