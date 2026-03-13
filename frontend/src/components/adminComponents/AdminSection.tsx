import Input from "../inputbar/Input";
import AdminRecordList from "./AdminRecordList";
import type { dadosCadastro } from "../../../types/dadosCadastro";
import { useState, useEffect } from "react";
import Botao from "../botao/Botao";
import ModalCreate from "../modals/ModalCreate";

const AdminSection = () => {
    const [resultado, setResultado] = useState<dadosCadastro[]>([])
    const [isOpen, setOpen] = useState(false)

       useEffect(() =>{
            const carregar = async () => {
                try {
                    const resposta = await fetch("/api/mostrarDados"); 
                    const dados = await resposta.json()
                    setResultado(dados)

                } catch (error) {
                    console.log("Erro na busca:", error);
                }
            };
            carregar()
        }, [])


        
    return(
        <section className="max-h-fit w-[90vw] bg-gray-200 mx-auto my-10 flex flex-col items-center border rounded-xl ">
            <div className=" flex flex-col justify-center items-center">
                <h2 className="text-2xl m-3">Modificação de Cadastros</h2>
                <Botao onClick={() => setOpen(true)}> Adicionar Registro</Botao>
                {/* fazer o forms e usaria só um estado no forms ao invés de 4 para cada input */} 
                <ModalCreate isOpen={isOpen} onClose={() => setOpen(false)}>
                    <h1 className="font-bold text-xl w-full">CRIAR NOVO REGISTRO</h1>
                </ModalCreate>    
            </div>

                <Input />
                <ul className="w-[70vw] flex flex-col items-end bg-[green] mt-5 ">
                    <AdminRecordList dados={resultado} onClick={() => setOpen(true)}/>
                </ul>

            
        </section>
    )
}

export default AdminSection;