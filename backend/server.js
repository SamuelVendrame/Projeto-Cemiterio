const express = require("express")
const path = require('path'); 


const app = express();

app.use(express.json())

const rotaSessions = require("./sessions/sessions.js")
app.use(rotaSessions)

const loggerMiddleware = (req, res, next) => {
    const logDate = new Date().toISOString()
    console.log(`${logDate}, Metodo de requisicao: ${req.method} - URL Original: ${req.originalUrl}`)
    next();
};

app.use(loggerMiddleware)

const isAdmin = require("./middlewares/userRole.js")
const isAuthenticated = require("./middlewares/userAuth.js")
const autoSend = require("./middlewares/autoSend.js")

app.get("/admin", isAuthenticated, isAdmin, (req, res) => { 
    res.sendFile(path.join(__dirname, "..", "frontend", "admin", "admin.html"));
});

app.get("/login", (req, res) => { // LEMBRETE - READICIONAR O AUTOSEND APÓS MOSTRAR PRO FERNANDO!!
    res.sendFile(path.join(__dirname, "..", "frontend", "login", "login.html"));
})

app.use("/", express.static(path.join(__dirname, "..", "frontend")));

const rotaRegistros = require("./routes/registroRoutes.js")
app.use("/", rotaRegistros)

const rotaDeDados = require("./routes/dataRoutes")
app.use("/", rotaDeDados)

const rotaLogin = require("./login/login.js")
app.use("/", rotaLogin)

//remover quando funcionar (funcionou! só acessar a rota no google)

const PORT = 3000;

app.listen(PORT, '0.0.0.0', () => {
    console.log(`Servidor rodando na porta ${PORT}`)
})