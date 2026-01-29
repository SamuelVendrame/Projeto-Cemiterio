const registros = require("../data/data.js")
const express = require('express');
const router = express.Router();

const buscarPrimeiroUser = (req, res) => {
    const dados = registros[0];
    res.json(dados)
}

router.get("/buscarDadosDoPrimeiroUsuario", buscarPrimeiroUser)

module.exports = router;

/*

app.get("/produtos/", (req, res) => {
        res.json(produtos)
    })

app.get("/produtos/:id", (req, res) => {
    const produtoId = Number(req.params.id)

    const produto = produtos.find(produtoId => produtoId.produtos === produtoId)

    res.json(produto)
    })

app.post("/produtos/:id/desconto", (req, res) =>{
        const produtoId = Number(req.params.id)

        const produto = produtos.find(produtoId => produtoId.produtos === produtoId)

        produto.desconto = 0.10

        res.json(produto)

    })

*/