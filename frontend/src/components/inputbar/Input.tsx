import { useState, useEffect } from "react";
import type { User } from "../User";

 const Input = () => {
        {/*TESTE, REVER DEPOIS */}

    const [ search, setSearch ] = useState("")

    useEffect(() => {
        try{
        const pegarDados = async function(){
            const resposta = await fetch("https://jsonplaceholder.typicode.com/users")
                const dados: User[] = await resposta.json()

                const dadosLowercase = dados.filter((dadoN) => dadoN.name.toLowerCase().includes(search))
                    if(search == ""){
                        return console.log("Nada na searchbar.")
                    }

                return console.log(dadosLowercase)
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