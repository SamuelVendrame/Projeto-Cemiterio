const express = require('express');
const router = express.Router()

const registros = require("../data/data.js")

router.post("/registrar", (req, res) =>{
    console.log(req.body)

    const {
        nome,
        dataNascimento,
        dataFalencia,
        nomeOutraPessoa
    } = req.body

    if(!nome || !dataNascimento || !dataFalencia){
        return res.status(400).json({mensagem: "Há campos em aberto."})
    }

    let nomeOutraPessoaLimpo = null; 

    if(nomeOutraPessoa){
        nomeOutraPessoaLimpo = nomeOutraPessoa.trim();
        if(nomeOutraPessoaLimpo == ""){
        return res.status(400).json({mensagem: "O nome da outra pessoa está vazio."})
        }

    }

    const novoRegistro = {
        nome, 
        dataNascimento,
        dataFalencia,
        nomeOutraPessoa: nomeOutraPessoaLimpo
    }

    registros.push(novoRegistro)

    return res.status(201).json({
        mensagem: "Registro criado com sucesso",
        registro: novoRegistro
    })
})

  router.get("/jubanga", (req, res) => {
        
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

        res.json(nomes)
    })


module.exports = router;