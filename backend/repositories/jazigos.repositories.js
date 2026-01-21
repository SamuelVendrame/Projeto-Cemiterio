const jazigos = require("projetoCemiterio/backend/data/jazigos.fake.js")

function encontrarTodos(){
    return jazigos
}

function encontrarJazigosPorId(id){
    return jazigos.find(jazigo => jazigo.id === id)
}

