(function funcaoLidarFormulario() {
  const criarRegistro = document.getElementById("criarRegistro");
  const overlay = document.querySelector(".overlay");
  const formRegistro = document.getElementById("registroInputs");
  const modalInputs = document.getElementById("modalMostrarInput");

  document.getElementById("registrar").addEventListener("click", function () {
    criarRegistro.classList.remove("escondido");
    overlay.classList.remove("escondido");
  });

  document.getElementById("fechar").addEventListener("click", function () {
    criarRegistro.classList.add("escondido");
    overlay.classList.add("escondido");
  });

  const fechar = (event) => {
    if (event.target === overlay) {
      overlay.classList.add("escondido");
      criarRegistro.classList.add("escondido");
    }
  };

  criarRegistro.addEventListener("click", (event) => event.stopPropagation());
  overlay.addEventListener("click", fechar);

  formRegistro.addEventListener("submit", async function (event) {
    event.preventDefault();

    const nome = formRegistro.elements.nome.value;
    const dataNascimento = formRegistro.elements.dataNascimento.value;
    const dataFalecimento = formRegistro.elements.dataFalecimento.value;
    const outraPessoaNome = formRegistro.elements.outraPessoaNome.value || null; 

    try {
      const resposta = await fetch("/registrar", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          nome,
          dataNascimento,
          dataFalecimento,
          outraPessoaNome, // o problema eh aqui!!!
        }),
      });

      if (resposta.status === 422) {
        alert("Você inseriu dados inválidos em um dos campos de entrada.");
        return;
      }

      if (!resposta.ok) {
        console.log("Um erro ocorreu AQUI.");
        return;
      }

      const dados = await resposta.json();

      document.getElementById("nomeInserido").textContent = dados.registro.nome;

      document.getElementById("dataNascInserida").textContent =
        dados.registro.dataNascimento;

      document.getElementById("dataFaleInserida").textContent =
        dados.registro.dataFalecimento;

      const outraPessoaNomeInput = document.getElementById(
        "outraPessoaInserida",
      );

      if (outraPessoaNome === null) {
        outraPessoaNomeInput.textContent = "Não há outra pessoa junto.";
      } else {
        outraPessoaNomeInput.textContent = "Sim - " + outraPessoaNome;
      }

      criarRegistro.classList.add("escondido");
      modalInputs.classList.remove("escondido");
      overlay.classList.remove("escondido");

      formRegistro.reset();

    } catch (error) {
      console.log("Um erro ocorreu.", error);
    }
  });
})();

function pegarIdDoClick(evento) {
  const li = evento.target.closest("li");
  if (!li) return null;
  return li.dataset.id;
}

  let dadosGlobal = [];

(function () {
  const barraInput = document.getElementById("pesquisarRegistros");
  const barraResultados = document.getElementById("listaRegistros");

  let idGlobal;

  function pegarIdGlobal(){
      barraResultados.addEventListener("click", function (e) {
      idGlobal = pegarIdDoClick(e)
    })
   }

  pegarIdGlobal()


  function debounce(func, delay) {
    let timeoutId;

    return function (...args) {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
      timeoutId = setTimeout(() => {
        func.apply(this, args);
      }, delay);
    };
  }

  //

  async function buscarNoBackEnd(valor) {
    const buscarDados = await fetch("/mostrarDadosSearch?valor=" + valor);

    if (!buscarDados.ok) {
      console.log("Fetch de busca falhou.");
    }

   const dados = await buscarDados.json();
    dadosGlobal = dados;    
    mostrarResultados(dados) 
  }

  const buscarDebounced = debounce(buscarNoBackEnd, 500);

  //

  barraInput.onkeyup = function () {
    const valor = barraInput.value;
    buscarDebounced(valor);
  };

  //

  function mostrarResultados(dados) {
    const conteudo = dados
      .map((list) => {
        return (
          `<li class="nomesRegistrados" data-id="${list.id}">` +
          list.nome +
          "</li>"
        );
      })
      .join("");

    listaRegistros.innerHTML = conteudo 
    if (barraInput.value == "") {
      buscar();
    }
  }
  async function buscar() {
    const buscaDados = await fetch("/mostrarDados");
    if (!buscaDados.ok) {
      return console.log(
        "O fetch de buscar dados para mostrar sem trigger falhou.",
      );
    }
    const dados = await buscaDados.json();
    dadosGlobal = dados;
    const conteudo = dados
      .map((list) => {
        return (
          `<li class="nomesRegistrados" data-id="${list.id}">` +
          list.nome +
          "</li>"
        );
      })
      .join("");

    listaRegistros.innerHTML = conteudo
  }
  buscar();

  function clickInfoDisplay() {
    const modalInfosContainer = document.getElementById("modalInfosContainer");
    const overlay = document.querySelector(".overlay");

    const nome = document.getElementById("nome");
    const datafal = document.getElementById("datafal");
    const datanasc = document.getElementById("datanasc");
    const idpessoa = document.getElementById("idpessoa")
    const outrapessoa = document.getElementById("outrapessoa")
    

    barraResultados.addEventListener("click", function (e) {
    const id = idGlobal

        overlay.classList.remove("escondido");
        modalInfosContainer.classList.remove("escondido");

        const dadoEncontrado = dadosGlobal.find((dado) => dado.id == id);
        console.log(dadoEncontrado)

        nome.textContent = dadoEncontrado.nome;
        datafal.textContent = dadoEncontrado.dataFalecimento;
        datanasc.textContent = dadoEncontrado.dataNascimento;
        idpessoa.textContent = dadoEncontrado.id;
        outrapessoa.textContent = dadoEncontrado?.outraPessoaNome || "Não.";

    });

    const modalConfirmar = document.getElementById("modalConfirmar") // Modal de confirmação de delete
    const botaoNao = document.getElementById("botaoNao")
    const botaoSim = document.getElementById("botaoSim")

    document.getElementById("botaoDeletar").addEventListener("click", function(){

      modalInfosContainer.classList.add("escondido")
          modalConfirmar.classList.remove("escondido")
          console.log("clicou") 

        })

        overlay.addEventListener("click", function() {
            modalConfirmar.classList.add("escondido")
            console.log("Clicou no overleison")
          })

        
        modalConfirmar.addEventListener("click", function(e){
          e.stopPropagation()
        })

    modalInfosContainer.addEventListener("click", function (e) {
      e.stopPropagation();
    });

    botaoNao.addEventListener("click", function(){

      modalConfirmar.classList.add("escondido")
      overlay.classList.add("escondido")
    })

    const resultado =  document.getElementById("resultado");

    botaoSim.addEventListener("click", function(){
      modalConfirmar.classList.add("escondido")

      modalConfirmar.classList.add("escondido")

    function deletarRegistro(id) {
        fetch(`/deletarDado/${id}`, {
          method: "DELETE"
        })
        .then(res => res.json())
        .then(dados => { /// ???????
            resultado.classList.remove("escondido")
            return resultado.innerHTML = "<h3> Cadastro deletado. </h3> "
        })
        .catch(err => {
            resultado.classList.remove("escondido")
            return resultado.innerHTML = "<h3>Cadastro deletado.</h3> "
        });
      } deletarRegistro(idGlobal)
    }); 

    resultado.addEventListener("click", function(e){
      e.stopPropagation()
    })

    // Funcao de botao de clique Editar

    const botaoEditar = document.getElementById("botaoEditar")
    const editarRegistro = document.getElementById("editarRegistro")
    const editarRegistroForm = document.getElementById("editarRegistroForm")

    const nomeEDIT = document.getElementById("nomeEDIT")
    const dataFalecimentoEDIT = document.getElementById("dataFalecimentoEDIT")
    const dataNascimentoEDIT = document.getElementById("dataNascimentoEDIT")
    const outraPessoaNomeEDIT = document.getElementById("outraPessoaNomeEDIT")

    let dadoEncontrar;

    botaoEditar.addEventListener("click", function(){
      modalInfosContainer.classList.add("escondido")

      editarRegistro.classList.remove("escondido")
      overlay.classList.remove("escondido")

      dadoEncontrar = dadosGlobal.find((dado) => dado.id == idGlobal);

      console.log(dadoEncontrar)

      nomeEDIT.value = dadoEncontrar.nome
      dataFalecimentoEDIT.value = dadoEncontrar.dataFalecimento
      dataNascimentoEDIT.value = dadoEncontrar.dataNascimento
      outraPessoaNomeEDIT.value = dadoEncontrar.outraPessoaNome
    })

    editarRegistro.addEventListener("click", function(e){
      e.stopPropagation()
    })

    editarRegistroForm.addEventListener("submit", function(e){
      e.preventDefault()
      console.log(dadoEncontrar.id)

      async function editar(){
        console.log(outraPessoaNomeEDIT.value + " aqui")
        try{
          const resposta = await fetch(`/editar/${dadoEncontrar.id}`, {
            method: "PATCH",
            headers: {
            "Content-Type": "application/json"
              },
              body: JSON.stringify({
                  nome: nomeEDIT.value,
                  dataNascimento: dataNascimentoEDIT.value,
                  dataFalecimento: dataFalecimentoEDIT.value,
                  outraPessoaNome: outraPessoaNomeEDIT.value
              }),
            })
            const dados = await resposta.json()
            console.log(dados.registro)

          } catch(error){
            console.log(error)
          }
        } editar()
    })

    // botao OK

    const botaoOk = document.getElementById("botaoOk")

    botaoOk.addEventListener("click", function(){
      modalInfosContainer.classList.add("escondido")
      overlay.classList.add("escondido")
    })

    overlay.addEventListener("click", function () {
      const filhos = overlay.children

      for (let filho of filhos) {
        filho.classList.add("escondido");
    }

      overlay.classList.add("escondido");
    });
  }; clickInfoDisplay()


})();


(function modalHandler() {
  const modalInfosInseridas = document.getElementById("modalMostrarInput");
  const overlay = document.querySelector(".overlay");

  const fecharModal = document.getElementById("fecharModal");

  fecharModal.addEventListener("click", function () {
    overlay.classList.add("escondido");
    modalInfosInseridas.classList.add("escondido");
  });

  overlay.addEventListener("click", function () {
    modalInfosInseridas.classList.add("escondido");
    overlay.classList.add("escondido");
  });

  modalInfosInseridas.addEventListener("click", function (event) {
    event.stopPropagation();
  });
})();

(function verificarDuploEnterro() {
  const checkbox = document.getElementById("temOutraPessoa");
  const box = document.getElementById("outraPessoaBox");

  checkbox.addEventListener("change", () => {
    box.style.display = checkbox.checked ? "block" : "none";
  });
})();

(function verificarDuploEnterroEDIT() {
  const checkbox = document.getElementById("temOutraPessoaEDIT");
  const box = document.getElementById("outraPessoaBoxEDIT");

  checkbox.addEventListener("change", () => {
    box.style.display = checkbox.checked ? "block" : "none";
  });
})();

