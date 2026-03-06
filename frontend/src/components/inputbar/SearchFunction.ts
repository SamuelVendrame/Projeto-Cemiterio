import type { User } from "../User";

export default async function pegarDados(search: string){
        const buscarDados = async function(){
            const resposta = await fetch("https://jsonplaceholder.typicode.com/users")
                const dados: User[] = await resposta.json()
                

                const searchLower = search.toLowerCase()

                const filtroBusca = dados.filter((dado) => dado.name.toLowerCase().includes(searchLower))
                    if(search == ""){
                        console.log("Nada na searchbar.")
                        return []
                    }

                console.log(filtroBusca)
                return filtroBusca
                } 
                return await buscarDados()
            }
