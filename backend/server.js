const express = require("express")
const path = require('path'); 
const cors = require('cors');

const app = express();

app.use(express.json())
app.use(cors());

const loggerMiddleware = (req, res, next) => {
    const logDate = new Date().toISOString()
    console.log(`${logDate}, Metodo de requisicao: ${req.method} - URL Original: ${req.originalUrl}`)
    next();
};

app.use(loggerMiddleware)

app.use(express.static(path.join(__dirname, "..", 'frontend')));

app.get("/admin", (req, res) => { 
    res.sendFile(path.join(__dirname, "..", "frontend", "admin", "admin.html"));
});

const rotaRegistros = require("./routes/registroRoutes.js")
app.use("/", rotaRegistros)

const rotaDeDados = require("./routes/dataRoutes")
app.use("/", rotaDeDados)

const PORT = 3000;

app.listen(PORT, () => {
    console.log("Servidor rodando na porta 3000")
})