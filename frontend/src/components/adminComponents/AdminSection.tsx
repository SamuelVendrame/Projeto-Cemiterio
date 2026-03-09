import Input from "../inputbar/Input";
import AdminButton from "./AdminButton";
import AdminRecordList from "./AdminRecordList";
import type { User } from "../User";
import { useState, useEffect } from "react";
import pegarDados from "../inputbar/SearchFunction";

const AdminSection = () => {
    const [resultado, setResultado] = useState<User[]>([])

       useEffect(() =>{
            const carregar = async () => {
                try {
                    const resposta = await fetch("https://jsonplaceholder.typicode.com/users"); 
                    const dados = await resposta.json()
                    setResultado(dados)

                } catch (error) {
                    console.log("Erro na busca:", error);
                }
            };
            carregar()
        }, [])

    return(
        <section className="max-h-fit w-[90vw] bg-gray-200 mx-auto mt-10 flex flex-col items-center border rounded-xl ">
            <div className=" flex flex-col justify-center items-center gap-5">
                <h2 className="text-2xl">Modificação de Cadastros</h2>
                <button className="bg-[red] w-50 p-2">Adicionar registro</button>           
            </div>

                <Input />
                <ul className="w-[70vw] flex flex-col items-end bg-[green] mt-5 ">
                    <AdminRecordList dados={resultado}/>
                </ul>

        </section>
    )
}

export default AdminSection;