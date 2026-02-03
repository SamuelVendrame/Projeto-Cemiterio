
(function funcaoLidarFormulario(){
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

        const modalInfosInseridas = document.getElementById("modalMostrarInput")
        const modalWrapper = document.getElementById("modalWrapper")

            overlay.classList.remove("escondido")
            modalInfosInseridas.classList.remove("escondido")

            overlay.addEventListener("click", function(){
                overlay.classList.add("escondido")
                modalInfosInseridas.classList.add("escondido")
            })
            
            const fecharModal = document.getElementById("fecharModal").addEventListener("click", function(){
                overlay.classList.add("escondido")
                modalInfosInseridas.classList.add("escondido")
            })

        } catch(error){
            console.log("Um erro ocorreu.", error)
        }
    })
   
})();

(function verificarDuploEnterro(){
    const checkbox = document.getElementById("temOutraPessoa");
    const box = document.getElementById("outraPessoaBox");

        checkbox.addEventListener("change", () => {
        box.style.display = checkbox.checked ? "block" : "none";
    });

})();


(function displayerDeDadosRegistrados(){

        /*(function (){
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
        } */

})();


