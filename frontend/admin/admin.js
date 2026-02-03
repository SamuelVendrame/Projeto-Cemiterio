
(function(){
    const criarRegistro = document.getElementById("criarRegistro");
    const overlay = document.querySelector(".overlay")
    const formRegistro = document.getElementById("registroInputs")
    
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


    overlay.addEventListener("click", fechar)

    const botaoFechar = document.getElementById("fechar").addEventListener("click", function(){
        overlay.classList.add("escondido")
        criarRegistro.classList.add("escondido")
    })

    formRegistro.addEventListener("submit", async function(event){
        event.preventDefault();
        overlay.classList.add("escondido")
        criarRegistro.classList.add("escondido")
        
        const nome = formRegistro.elements.nome.value;
        const dataNascimento = formRegistro.elements.dataNascimento.value;
        const dataFalencia = formRegistro.elements.dataFalencia.value;
        let nomeOutraPessoa = formRegistro.elements.nomeOutraPessoa.value || null;
        
        if(nomeOutraPessoa === ""){
            nomeOutraPessoa = null
        }

        try{

        const resposta = await fetch("/registrar", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                nome,
                dataNascimento,
                dataFalencia,
                nomeOutraPessoa
            })
        })
        const dados = await resposta.json();
            if(!resposta.ok){
                console.log("Um erro ocorreu AQUI.")
                return
            }

        } catch(error){
            console.log("Um erro ocorreu.", error)
        }
    })
   
})();

(function(){
    const checkbox = document.getElementById("temOutraPessoa");
    const box = document.getElementById("outraPessoaBox");

        checkbox.addEventListener("change", () => {
        box.style.display = checkbox.checked ? "block" : "none";
    });

})();


