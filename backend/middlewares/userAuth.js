const express = require("express")

const isAuthenticated = (req, res, next) => {
    if(!req.session.user){
        return res.status(401).sendFile(
            path.join(__dirname, "../public/login/login.html")
        )
    }
    next()
}

module.exports = isAuthenticated;
