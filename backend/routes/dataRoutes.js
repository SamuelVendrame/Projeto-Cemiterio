const registros = require("../data/data.js");
const express = require("express");
const router = express.Router();

router.get("/mostrarDadosSearch", (req, res) => {
  const { valor } = req.query;
// LEMBRETE!! FAZER npm install express-session AO USAR NO PC DE CASA!!
  if (!valor) {
    return res.json([]);
  }

  const valorMin = valor.toLowerCase();
  const resultado = registros.filter((registro) =>
    registro.nome.toLowerCase().includes(valorMin),
  );

  const dadoFinal = resultado.map((resultado) => resultado.nome);

  res.json(dadoFinal);
});

router.get("/mostrarDados", (req, res) => {
  resultado = registros.map((resultado) => resultado.nome)

  res.send(resultado)
})

module.exports = router;