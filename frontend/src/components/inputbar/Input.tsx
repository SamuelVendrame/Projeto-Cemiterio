import { useState, useEffect } from "react";

 const Input = () => {
        type User = {
        id: number
        name: string
        username: string
        email: string
        };
        {/*TESTE, REVER DEPOIS */}

    const [ search, setSearch ] = useState("")
    const [users, setUsers] = useState<User[]>([])

    useEffect(() => {
        try{
        const pegarDados = async function(){
            const resposta = await fetch("https://jsonplaceholder.typicode.com/users")
                const dados: User[] = await resposta.json()
                const name = dados.map(nome => nome.name)
                setUsers(dados)
                return console.log(name)
                } 
                pegarDados()
            }
        catch(error){
            console.log(error)
            }
        }, [search])



    return(
        <input type="text" value={search}  onChange={(e) => setSearch(e.target.value)} className="border border-black md rounded p-1 pl-3 h-11 w-[70vw]" placeholder="Digite um nome..."/> /* componentizar isso depois pra searchbar do admin*/ 
    )
}

export default Input;