(function funcaoLidarFormulario() {
  const criarRegistro = document.getElementById("criarRegistro");
  const overlay = document.querySelector(".overlay");
  const formRegistro = document.getElementById("registroInputs");
  const modalInputs = document.getElementById("modalMostrarInput");

  document.getElementById("registrar").addEventListener("click", function () {
    criarRegistro.classList.remove("escondido");
    overlay.classList.remove("escondido");
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
    const dataFalencia = formRegistro.elements.dataFalencia.value;
    const nomeOutraPessoa =
      formRegistro.elements.nomeOutraPessoa.value || null;

    try {
      const resposta = await fetch("/registrar", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          nome,
          dataNascimento,
          dataFalencia,
          nomeOutraPessoa,
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

      document.getElementById("nomeInserido").textContent =
        dados.registro.nome;

      document.getElementById("dataNascInserida").textContent =
        dados.registro.dataNascimento;

      document.getElementById("dataFaleInserida").textContent =
        dados.registro.dataFalencia;

      const nomeOutraPessoaInput =
        document.getElementById("outraPessoaInserida");

      if (nomeOutraPessoa === null) {
        nomeOutraPessoaInput.textContent = "Não há outra pessoa junto.";
      } else {
        nomeOutraPessoaInput.textContent =
          "Sim - Nome: " + nomeOutraPessoa;
      }

      criarRegistro.classList.add("escondido")
      modalInputs.classList.remove("escondido");
      overlay.classList.remove("escondido");

      formRegistro.reset();
    } catch (error) {
      console.log("Um erro ocorreu.", error);
    }
  });
})();


(function () {
  const barraInput = document.getElementById("pesquisarRegistros");
  const barraResultados = document.getElementById("listaRegistros");

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
    mostrarResultados(dados);
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
        return "<li class='nomesRegistrados'>" + list + "</li>";
      })
      .join("");

    listaRegistros.innerHTML = "<li>" + "<ul>" + conteudo + "</ul>" + "</li>";
    if(barraInput.value == ""){
        buscar()
    }
  }
  async function buscar(){
        const buscaDados = await fetch("/mostrarDados")
        if(!buscaDados.ok){
            return console.log("O fetch de buscar dados para mostrar sem trigger falhou.")
        }
        const dados = await buscaDados.json()

        const conteudo = dados
        .map((list) => {
            return "<li class='nomesRegistrados'>" + list + "</li>";
        })
        .join("");

        listaRegistros.innerHTML = "<li>" + "<ul>" + conteudo + "</ul>" + "</li>";
    }
    buscar()
})();

/*
(function mostrarDadosSemTrigger(){
    const barraResultados = document.getElementById("listaRegistros");
    console.log("TESTE")
    
    async function buscar(){
        const buscaDados = await fetch("/mostrarDados")
        if(!buscaDados.ok){
            return console.log("O fetch de buscar dados para mostrar sem trigger falhou.")
        }
        const dados = await buscaDados.json()

        console.log(dados)

        const conteudo = dados
        .map((list) => {
            return "<li class='nomesRegistrados'>" + list + "</li>";
        })
        .join("");

        listaRegistros.innerHTML = "<li>" + "<ul>" + conteudo + "</ul>" + "</li>";
    }
    buscar()
})();
*/
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

/*(function displayerDeDadosRegistrados(){

        (function (){
            const barraInput = document.getElementById("barraPesquisa");
            const barraResultados = document.getElementById("caixaDeResultados");

            barraInput.onkeyup = function(){
                let resultado = []
                let input = barraInput.value;

                if(input.length){
                    resultado = nomes.filter((nomes) => {
                        return nomes.toLowerCase().includes(input.toLowerCase())
                        
                    })
                }
                mostrarResultados(resultado)

                if(!resultado.length){
                    caixaDeResultados.innerHTML = ' ';
                }
            }
        })();

        function mostrarResultados(resultado){
            const resultadoSlice5 = resultado.slice(0, 5)

            const conteudo = resultadoSlice5.map((list) => {
                return "<li>" + list + "</li>"
            }).join("")
            caixaDeResultados.innerHTML = "<ul>" + conteudo + "</ul>"
        } 

})();*/
