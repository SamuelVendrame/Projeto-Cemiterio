const session = require('express-session')
const express = require('express')
const app = express()

const sessionMiddleware = session({ // aprender isso aq melhor
    secret: "chave-super-secreta", 
    resave: false,
    saveUninitialized: false,
    cookie: {
        httpOnly: true,
        maxAge: 3600000 // 1h de Session
    }
});


module.exports = sessionMiddleware;