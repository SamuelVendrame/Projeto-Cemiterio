import type { User } from "../User";

export default async function pegarDados(search: string){
        const buscarDados = async function(){
            const resposta = await fetch("/api/mostrarDados")
                const dados: User[] = await resposta.json()
                
                function normalizar(texto: string) {
                    return texto.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")
                }

                const searchNormalizado = normalizar(search)

                const filtroBusca = dados.filter((dado) => normalizar(dado.nome).includes(searchNormalizado))
                    if(search == ""){
                        console.log("Nada na searchbar.")
                        return []
                    }

                console.log(filtroBusca)
                return filtroBusca
                } 
                return await buscarDados()
            }
