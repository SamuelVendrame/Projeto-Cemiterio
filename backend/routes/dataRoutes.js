const registros = require("../data/data.js");
const express = require("express");
const router = express.Router();

router.get("/mostrarDadosSearch", (req, res) => {
  const { valor } = req.query;

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

module.exports = router;
/*router.get("/mostrarDadosSearch", (req, res) => {
  const { valor } = req.query;

  if (!valor) {
    return res.json([]);
  }

  const valorMin = valor.toLowerCase();
  const resultado = registros.filter((registro) =>
    registro.toLowerCase().includes(valorMin),
  );

  res.json(resultado);
}); */
