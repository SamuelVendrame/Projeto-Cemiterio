const express = require("express")
const path = require('path'); 
const fs = require('fs');
const router = express.Router();

const app = express();

app.use(express.json())

const PORT = 3000;

app.use(express.static(path.join(__dirname, "..", 'frontend')));

app.listen(PORT, (req, res) => {
    console.log("Servidor rodando na porta 3000")
})