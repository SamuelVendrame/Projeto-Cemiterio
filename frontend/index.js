
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
    const botaoHamburger = document.getElementById("menuHamburger")
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
}) (); // IIFE, eh bom entender e reutilizar - mas nao a carregar para o react por causa das presencas dos modulos.

const nomes = [
    'Pedro',
    "Ana"
];

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
                console.log(resultado)
        }
        mostrarResultados(resultado)
    }
})();

function mostrarResultados(resultado){
    const conteudo = resultado.map((list) => {
        return "<li>" + list + "</li>"
    })
    caixaDeResultados.innerHTML = "<ul>" + conteudo + "</ul>"
}

