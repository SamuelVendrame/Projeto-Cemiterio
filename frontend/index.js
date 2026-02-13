
(function(){
    const invisivelDuvidaDiv = document.getElementById("invisivelDuvidaDiv")
    const overlay = document.querySelector(".overlay")
    const botaoFechar = document.getElementById("fechar")
    const interrogacaoClicar = document.getElementById("interrogacao")

    interrogacaoClicar.addEventListener("click", function(){
        invisivelDuvidaDiv.classList.remove("escondido")
        overlay.classList.remove("escondido")

    });

    botaoFechar.addEventListener("click", function(){
        invisivelDuvidaDiv.classList.toggle("escondido")
        overlay.classList.toggle("escondido")
    })

    const fecharOverlay = () => {
            overlay.classList.add("escondido")
            invisivelDuvidaDiv.classList.add("escondido")
    }

    overlay.addEventListener("click", fecharOverlay)

})();

(function(){
    const botaoHamburger = document.getElementById("menuHamburgerIcon")
    const navBar = document.getElementById("configNavBar")
    const overlay = document.querySelector(".overlay");


    botaoHamburger.addEventListener("click", function(){
        navBar.classList.toggle("escondido");

        overlay.classList.toggle("escondido");
    })

    const fecharMenu = () => {
        navBar.classList.add("escondido")
        overlay.classList.add("escondido")

    }

    overlay.addEventListener("click", fecharMenu)
}) (); // IIFE, eh bom entender e reutilizar - mas nao a carregar para o REACT por causa das presencas dos modulos.

(function (){
    const barraInput = document.getElementById("barraPesquisa");
    const barraResultados = document.getElementById("caixaDeResultados");

      function debounce(func, delay){
            let timeoutId;

            return function(...args){
                if(timeoutId){
                    clearTimeout(timeoutId);
                }
                timeoutId = setTimeout(() => {
                    func.apply(this, args)
                }, delay)
            }
        }

        async function buscarNoBackEnd(valor){
           const buscarDados = await fetch('/mostrarDadosSearch?valor=' + valor)

           if(!buscarDados.ok){
            console.log("Fetch de busca falhou.")
           }

           const dados = await buscarDados.json();
            mostrarResultados(dados)
        }

    const buscarDebounced = debounce(buscarNoBackEnd, 500)

    barraInput.onkeyup = function(){ 
        const valor = barraInput.value;
        buscarDebounced(valor);
    }

    function mostrarResultados(dados){
        const resultadoSlice5 = dados.slice(0, 5)

        const conteudo = resultadoSlice5.map((list) => {
            return `<li data-id="${list.id}">` + list.nome + "</li>"
        }).join("");

        console.log(dados)

        let quantidadeDisplayed = resultadoSlice5.length

        caixaDeResultados.innerHTML =  "<ul>" + conteudo + "</ul>" + "<li id='displayer'>" + "Mostrando " + quantidadeDisplayed + " resultados de " + dados.length
            if(conteudo >= 0){ 
        caixaDeResultados.innerHTML = "<li id='displayer'>" + "Mostrando " + quantidadeDisplayed + " resultados de " + dados.length
            }
            if(barraInput.value == ""){
                caixaDeResultados.innerHTML = "";
            }
    }       

    function clickInfoDisplay(){

    }
    clickInfoDisplay()
})();

