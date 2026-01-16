document.getElementById("interrogacao").addEventListener("click", function(){

    invisivelDuvidaDiv.classList.remove("escondido")

    const botaoFechar = document.getElementById("fechar")
        botaoFechar.addEventListener("click", () => {
            invisivelDuvidaDiv.classList.add("escondido")
        })
        // Considerando criação de um click fora da div que feche a div PopUp também, mas não consegui no momento.
})