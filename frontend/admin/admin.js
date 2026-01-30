(function(){

  const botaoRegistrar = document.getElementById("registrar").addEventListener("click", async function(){
        const resposta = await fetch("http://localhost:3000/buscarDadosDoPrimeiroUsuario")
        const dados = await resposta.json()

        console.log(dados)
  })

})();

(function(){
    const criarRegistro = document.getElementById("criarRegistro");
    const overlay = document.querySelector(".overlay")
    
      const botaoRegistrar = document.getElementById("registrar").addEventListener("click", function(){
        criarRegistro.classList.remove("escondido")
        overlay.classList.remove("escondido")
    })

        const fechar = (event) => {
            if(event.target === overlay){
            overlay.classList.add("escondido")
            criarRegistro.classList.add("escondido")
            }
    }

    const botaoEnviar = document.getElementById("registrarDados").addEventListener("click", function(){
        overlay.classList.add("escondido")
        criarRegistro.classList.add("escondido")
    })

    overlay.addEventListener("click", fechar)

    const botaoFechar = document.getElementById("fechar").addEventListener("click", function(){
        overlay.classList.add("escondido")
        criarRegistro.classList.add("escondido")
    })
   
})();

(function(){
    const checkbox = document.getElementById("temOutraPessoa");
    const box = document.getElementById("outraPessoaBox");

        checkbox.addEventListener("change", () => {
        box.style.display = checkbox.checked ? "block" : "none";
    });

})();


