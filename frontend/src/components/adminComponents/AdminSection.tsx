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
        dataNascimento: "",
        dataFalecimento: "",
        nomeOutraPessoa: ""
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

        const handleSubmit = async (event: React.SubmitEvent) => {
            event.preventDefault()
     
            try {
                console.log(formData);
                const resposta = await fetch("/api/registrar", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(formData)
                })

                const dados = await resposta.json()

                setResultado((prev) => [...prev, dados])

                setFormData({
                    nome: "",
                    dataNascimento: "",
                    dataFalecimento: "",
                    nomeOutraPessoa: ""
            })

        setOpen(false)

    } catch (error) {
        console.log("Erro ao enviar:", error)
    }
}

    return(
        <section className="max-h-fit w-[90vw] bg-gray-200 mx-auto my-10 flex flex-col items-center border rounded-xl ">
            <div className=" flex flex-col justify-center items-center">
                <h2 className="text-2xl m-3">Modificação de Cadastros</h2>
                <Botao onClick={() => setOpen(true)}>Adicionar registro</Botao> 

                {/* fazer o forms e usaria só um estado no forms ao invés de 4 para cada input */} 

                <Modal isOpen={isOpen} onClose={() => setOpen(false)}>
                    <form className="flex flex-col" onSubmit={handleSubmit}>
                        <h1>NOME DA PESSOA</h1>
                        <InputModifier type="text" name="nome"  value={formData.nome}/>
                        <h1>DATA DE NASCIMENTO</h1>
                        <InputModifier type="date" name={"dataNascimento"} value={formData.dataNascimento}/>
                        <h1>DATA DE FALECIMENTO</h1>
                        <InputModifier type="date" name={"dataFalecimento"} value={formData.dataFalecimento}/>
                        <h1>HÁ OUTRA PESSOA JUNTO?</h1>
                        <InputModifier type="text" name={"outraPessoaNome"} value={formData.nomeOutraPessoa}/>

                        <Botao type="submit" className="mt-5">Enviar Registro</Botao>
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