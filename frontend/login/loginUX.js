(function loginDealer(){
    const formulario = document.getElementById("divLogin")

    formulario.addEventListener("submit", function(event) {
        event.preventDefault()

        const senha = document.getElementById("password").value
        const nome = document.getElementById("username").value

        async function logar(){
            const resposta = await fetch("/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                credentials: "include",
                body: JSON.stringify({
                    nome,
                    senha
                })
            });
        }
        logar()
    })
})();

