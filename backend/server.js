const express = require("express")
const path = require('path'); 
const cors = require('cors');

const app = express();

app.use(cors());

const PORT = 3000;

app.use(express.static(path.join(__dirname, "..", 'frontend')));

app.get("/admin", (req, res) => { 
    res.sendFile(path.join(__dirname, "..", "frontend", "admin", "admin.html"));
});

const rotaDeDados = require("./routes/dataRoutes")
app.use("/", rotaDeDados)

app.listen(PORT, () => {
    console.log("Servidor rodando na porta 3000")
})