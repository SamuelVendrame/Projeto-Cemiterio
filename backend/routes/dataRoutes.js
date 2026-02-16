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

  const dadoFinal = resultado.map(resultado => ({
      nome: resultado.nome,
      id: resultado.id,
      dataNascimento: resultado.dataNascimento,
      dataFalecimento: resultado.dataFalecimento,
      outraPessoaNome: resultado.outraPessoaNome
  }));

  res.json(dadoFinal);
});

router.get("/mostrarDados", (req, res) => {
  res.send(registros)
})

module.exports = router;