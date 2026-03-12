import Input from "../inputbar/Input";
import AdminRecordList from "./AdminRecordList";
import type { dadosCadastro } from "../../../types/dadosCadastro";
import { useState, useEffect } from "react";
import Botao from "../botao/Botao";
import Modal from "../modals/ModalBase";
import InputModifier from "./InputModifier";
import { useForm } from "react-hook-form";

const AdminSection = () => {
    const [resultado, setResultado] = useState<dadosCadastro[]>([])
    const [isOpen, setOpen] = useState(false)
    const { register, handleSubmit } = useForm<dadosCadastro>()

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

        
        async function onSubmit(data: dadosCadastro) {
            try {
                const resposta = await fetch("/api/registrar", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                    },
                body: JSON.stringify(data)
                })

                const resultado = await resposta.json()
                console.log(resultado)

            } catch (erro) {
                console.error("Erro ao cadastrar:", erro)
            }
        }

                            console.log(resultado)

        
    return(
        <section className="max-h-fit w-[90vw] bg-gray-200 mx-auto my-10 flex flex-col items-center border rounded-xl ">
            <div className=" flex flex-col justify-center items-center">
                <h2 className="text-2xl m-3">Modificação de Cadastros</h2>
                <Botao onClick={() => setOpen(true)}>Adicionar registro</Botao>
                

                {/* fazer o forms e usaria só um estado no forms ao invés de 4 para cada input */} 

                <Modal isOpen={isOpen} onClose={() => setOpen(false)}>
                    <form className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
                        <h1>NOME DA PESSOA</h1>
                        <InputModifier type="text" placeholder="Nome da pessoa" {...register("nome")}/>
                        <h1>DATA DE NASCIMENTO</h1>
                        <InputModifier type="date" placeholder="Data de nascimento" {...register("dataNascimento")}/>
                        <h1>DATA DE FALECIMENTO</h1>
                        <InputModifier type="date" placeholder="Data de falecimento" {...register("dataFalecimento")}/>
                        <h1>HÁ OUTRA PESSOA JUNTO?</h1>
                        <InputModifier type="text" placeholder="Nome da outra pessoa que está enterrada junto" {...register("nomeOutraPessoa")}/>

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