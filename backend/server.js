const express = require("express")
const path = require('path'); 
const cors = require('cors');

const app = express();

app.use(cors());

const PORT = 3000;

app.use(express.static(path.join(__dirname, "..", 'frontend')));

app.get("/", (req, res) => { 
    res.sendFile(path.join(frontendPath, "index.html"));
});

const rotaDados = require("./routes/dataRoutes.js")
app.use(rotaDados)

app.listen(PORT, () => {
    console.log("Servidor rodando na porta 3000")
})