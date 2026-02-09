const session = require('express-session')
const express = require('express')
const app = express()

const sessionMiddleware = session({
    secret: "chave-super-secreta", 
    resave: false,
    saveUninitialized: false,
    cookie: {
        httpOnly: true
    }
});


module.exports = sessionMiddleware;