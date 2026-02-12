const express = require("express")
const path = require('path'); 
const cors = require('cors');

const app = express();

app.use(express.json())
app.use(cors());

const rotaSessions = require("./sessions/sessions.js")
app.use(rotaSessions)

const loggerMiddleware = (req, res, next) => {
    const logDate = new Date().toISOString()
    console.log(`${logDate}, Metodo de requisicao: ${req.method} - URL Original: ${req.originalUrl}`)
    next();
};

app.use(loggerMiddleware)

app.use(express.static(path.join(__dirname, "..", 'frontend')));

const isAdmin = require("./middlewares/userRole.js")
const isAuthenticated = require("./middlewares/userAuth.js")

app.get("/admin", isAuthenticated, isAdmin, (req, res) => { 
    res.sendFile(path.join(__dirname, "..", "frontend", "admin", "admin.html"));
});

const rotaRegistros = require("./routes/registroRoutes.js")
app.use("/", rotaRegistros)

const rotaDeDados = require("./routes/dataRoutes")
app.use("/", rotaDeDados)

const rotaLogin = require("./login/login.js")
app.use("/", rotaLogin)

//remover quando funcionar (funcionou! só acessar a rota no google)
app.get("/teste-session", (req, res) => {
    if (!req.session.contador) {
        req.session.contador = 1;
    } else {
        req.session.contador++;
    }
    console.log(req.session.user)
    res.send(`Contador: ${req.session.contador}`);
});

const PORT = 3000;

app.listen(PORT, '0.0.0.0', () => {
    console.log(`Servidor rodando na porta ${PORT}`)
})