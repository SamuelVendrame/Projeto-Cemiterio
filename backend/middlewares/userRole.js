const express = require("express")

const isAdmin = (req, res, next) => {
    if(req.session.user.role !== "admin"){
        return res.status(403).json({mensagem: "Você não tem acesso a essa página."})
    }

    next()
}

module.exports = isAdmin;