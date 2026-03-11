import Input from "../inputbar/Input";
import AdminRecordList from "./AdminRecordList";
import type { User } from "../User";
import { useState, useEffect } from "react";
import Botao from "../botao/Botao";
import Modal from "../modals/ModalBase";
import InputModifier from "./InputModifier";

const AdminSection = () => {
    const [resultado, setResultado] = useState<User[]>([])
    const [isOpen, setOpen] = useState(false)
    const [formData, setFormData] = useState({
        nome: "",
        nascimento: "",
        falecimento: "",
        tumulo: ""
    })

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
        <section className="max-h-fit w-[90vw] bg-gray-200 mx-auto mt-10 flex flex-col items-center border rounded-xl ">
            <div className=" flex flex-col justify-center items-center">
                <h2 className="text-2xl m-3">Modificação de Cadastros</h2>
                <Botao onClick={() => setOpen(true)}>Adicionar registro</Botao> 

                {/* fazer o forms e usaria só um estado no forms ao invés de 4 para cada input */} 

                <Modal isOpen={isOpen} onClose={() => setOpen(false)}>
                    <form>
                        <h1>NOME DA PESSOA</h1>
                        <InputModifier value={formData.nome}/>
                        <h1>DATA DE NASCIMENTO</h1>
                        <InputModifier value={formData.nome}/>
                        <h1>DATA DE FALECIMENTO</h1>
                        <InputModifier value={formData.nome}/>
                        <h1>HÁ OUTRA PESSOA JUNTO?</h1>
                        <InputModifier value={formData.nome}/>
                    </form>
                </Modal>    

            </div>

                <Input />
                <ul className="w-[70vw] flex flex-col items-end bg-[green] mt-5 ">
                    <AdminRecordList dados={resultado}/>
                </ul>

        </section>
    )
}

export default AdminSection;