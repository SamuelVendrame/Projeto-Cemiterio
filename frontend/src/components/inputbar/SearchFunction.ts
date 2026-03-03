import type { User } from "../User";
{/* PRECISO usar Promise User aqui dentro por ser uma funcao assincrona*/}
export default async function BuscarNome(input: string): Promise<User[]>{
        const pegarDados = async function(){
            const resposta = await fetch("https://jsonplaceholder.typicode.com/users")
                const dados: User[] = await resposta.json()

                const dadosLowercase = dados.filter((dadoN) => dadoN.name.toLowerCase().includes(input))

                console.log(dadosLowercase)
                return dadosLowercase
                } 
            }
