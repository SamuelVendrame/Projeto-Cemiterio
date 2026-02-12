const express = require("express")
const path = require('path'); 

const isAuthenticated = (req, res, next) => {
    if(!req.session.user){
        return res.status(401).redirect('/login')
    }
    next()
}

module.exports = isAuthenticated;
