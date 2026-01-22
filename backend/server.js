const express = require("express")
const path = require('path'); 
const fs = require('fs');

const app = express();

const PORT = 3000;

app.use(express.static(path.join(__dirname, "..", 'frontend')));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname,"..", "frontend", "index.html"))
})

app.get("/login", (req, res) => {
    res.sendFile(path.join(__dirname, "..","frontend", "login", "login.html"))
})

// apagar

const { registros } = require("./data/data.js")

app.get("/rotaDados", (req, res) => {
    res.json(registros)
})


// apagar

app.listen(PORT, (req, res) => {
    console.log("Servidor rodando na porta 3000.")
})