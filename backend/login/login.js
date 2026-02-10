const express = require("express")
const router = express.Router()

const usuarios = require("../data/users.js")

router.post("/login", (req, res) => {
    const { nome, senha } = req.body

    if (!nome || !senha) {
        return res.status(400).json({ mensagem: "Dados incompletos" });
    }

    const encontrarUser = usuarios.find((usuario) => usuario.nome === nome)
    if(encontrarUser === undefined){
        return res.status(401).json({ mensagem: "Usuário não encontrado"})
    }

    if(senha !== encontrarUser.senha){
        return res.status(401).json({ mensagem: "Credenciais inválidas" });
    }

    req.session.user = {
        nome: encontrarUser.nome,
        role: encontrarUser.role
    };
    
    res.json({ mensagem: "Login realizado com sucesso" });

})

module.exports = router;
