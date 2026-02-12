const express = require("express")
const path = require('path'); 

const isAuthenticated = (req, res, next) => {
    if(!req.session.user){
        return res.status(401).sendFile(
            path.join(__dirname, '../frontend/login/login.html')
        )
    }
    next()
}

module.exports = isAuthenticated;
