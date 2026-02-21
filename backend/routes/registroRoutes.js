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

  const novoRegistro = {
    id: proximoId + 1,
    nome,
    dataNascimento,
    dataFalecimento,
    nomeOutraPessoa: nomeOutraPessoaLimpo,
  };

    registros.push(novoRegistro);
    
    proximoId++
  return res.status(201).json({
    mensagem: "Registro criado com sucesso",
    registro: novoRegistro,
  });
});

router.patch("/editar/:id", (req, res) => {
  const { nome, dataFalecimento, dataNascimento, outraPessoaNome } = req.body
  const id = parseInt(req.params.id);
  //console.log(req.body)

  const idEncontrado = registros.find(registro => registro.id == id)

  if(!idEncontrado){
    return res.status(403).json({ mensagem: "Erro na comparação de IDs."})
  }
  
  try{

    idEncontrado.nome = nome
    idEncontrado.dataFalecimento = dataFalecimento
    idEncontrado.dataNascimento = dataNascimento
    idEncontrado.outraPessoaNome = outraPessoaNome

    return res.status(201).json({
      mensagem: "Registro criado com sucesso: " + idEncontrado,
      registro: idEncontrado,
    });

  } catch(error){
    return res.status(403).json({ mensagem: error})
  }

})

module.exports = router;
