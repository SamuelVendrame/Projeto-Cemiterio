app.get("/rotaDisplay", (req, res) => {
    const mostrarNome = {
        nome: "Ana"
    }
    res.send(mostrarNome)
})