const express = require("express")
const path = require('path'); 
const cors = require('cors');

const app = express();

app.use(cors());

const PORT = 3000;

app.use(express.static(path.join(__dirname, "..", 'frontend')));

const rotaDados = require("./routes/dataRoutes.js")
app.use(rotaDados)

app.listen(PORT, (req, res) => {
    console.log("Servidor rodando na porta 3000.")
})