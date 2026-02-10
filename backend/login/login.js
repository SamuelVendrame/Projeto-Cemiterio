const express = require("express")
const router = express.Router()

const usuarios = require("../data/users.js")

router.post("/login", (req, res) => {
    const { nome, senha } = req.body

    if (!nome || !senha) {
        return res.status(400).json({ mensagem: "Dados incompletos" });
    }

    if (nome !==  usuarios.nome || senha !== usuarios.senha) {
        return res.status(401).json({ mensagem: "Credenciais inválidas" });
    }

    const encontrarUser = 

    req.session.user = {
        nome: usuarios.nome,
        role: usuarios.role
    };
    
    res.json({ mensagem: "Login realizado com sucesso" });

})

module.exports = router;
