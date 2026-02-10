const express = require("express");
const router = express.Router();

const registros = require("../data/data.js");

router.post("/registrar", (req, res) => {
  console.log(req.body);

  const { nome, dataNascimento, dataFalencia, nomeOutraPessoa } = req.body;
  const apenasLetras = /^[A-Za-z]+$/

  if (!nome || !dataNascimento || !dataFalencia) {
    return res.status(400).json({ mensagem: "Há campos em aberto." });
  }

  let nomeOutraPessoaLimpo = null;

  if(!apenasLetras.test(nome) || !apenasLetras.test(nomeOutraPessoa)){
    return res.status(422).json({ mensagem: "Os dados inseridos são inválidos."})
  }

  if (nomeOutraPessoa) {
    nomeOutraPessoaLimpo = nomeOutraPessoa.trim();
    if (nomeOutraPessoaLimpo == "") {
      return res
        .status(400)
        .json({ mensagem: "O nome da outra pessoa está vazio." });
    }
  }

  const novoRegistro = {
    nome,
    dataNascimento,
    dataFalencia,
    nomeOutraPessoa: nomeOutraPessoaLimpo,
  };

  registros.push(novoRegistro);

  return res.status(201).json({
    mensagem: "Registro criado com sucesso",
    registro: novoRegistro,
  });
});

module.exports = router;
