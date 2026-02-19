const express = require("express");
const router = express.Router();

const registros = require("../data/data.js");
let proximoId = 8; // Zerar quando for inserir os valores num banco de dados real


router.post("/registrar", (req, res) => {
  console.log(req.body);

  const { nome, dataNascimento, dataFalecimento, nomeOutraPessoa } = req.body;
  const apenasLetras = /^[\p{L}\s\-]+$/u;


  if (!nome || !dataNascimento || !dataFalecimento) {
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

  const tamanhoRegistros = registros.length + 1

  const novoRegistro = {
    id: proximoId++,
    nome,
    dataNascimento,
    dataFalecimento,
    nomeOutraPessoa: nomeOutraPessoaLimpo,
  };

  registros.push(novoRegistro);

  return res.status(201).json({
    mensagem: "Registro criado com sucesso",
    registro: novoRegistro,
  });
});

module.exports = router;
