const registros = require("../data/data.js")
const express = require('express');
const router = express.Router();

router.get("/teste", (req, res) => {
    res.send("O roteador está funcionando!");
});

router.get("/mostrarUsuarios", (req, res) => {
    res.json(registros)
})

module.exports = router;

