document.getElementById("interrogacao").addEventListener("click", function(){

    invisivelDuvidaDiv.classList.remove("escondido")

    const botaoFechar = document.getElementById("fechar")
        botaoFechar.addEventListener("click", () => {
            invisivelDuvidaDiv.classList.add("escondido")
        })
        // Considerando criação de um click fora da div que feche a div PopUp também, mas não consegui no momento.
}); // considerar reformulacao pois gera muitos listeners.

(function(){
    const botaoHamburger = document.getElementById("menuHamburger")
    const navBar = document.getElementById("configNavBar")
    const overlay = document.getElementById("overlay");


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


