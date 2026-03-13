import Modal from "./ModalBase"
import InputModifier from "../adminComponents/InputModifier"
import Botao from "../botao/Botao"
import type { ModalProps } from "./ModalBase"
import type { dadosCadastro } from "../../../types/dadosCadastro";
import { useForm } from "react-hook-form";


interface ModalCreateProps extends ModalProps {
    dadoSelect?: dadosCadastro | null;
    onClick?: () => void
}

const ModalCreate = ({isOpen, onClose, onClick, children}: ModalCreateProps) => {
    const { register, handleSubmit } = useForm<dadosCadastro>()


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

    return(
        <Modal isOpen={isOpen} onClose={onClose}>
            {children}
        <form className="flex flex-col gap-2" onSubmit={handleSubmit(onSubmit)}>
            {/* Componentizar essa budega tb*/}
            <h1 className="flex flex-end">NOME DA PESSOA</h1>
            <InputModifier type="text" placeholder="Nome da pessoa..." {...register("nome")}/>
            <h1 className="flex flex-end">DATA DE NASCIMENTO</h1>
            <InputModifier type="date" placeholder="Data de nascimento" {...register("dataNascimento")}/>
            <h1 className="flex flex-end">DATA DE FALECIMENTO</h1>
            <InputModifier type="date" placeholder="Data de falecimento" {...register("dataFalecimento")}/>
            <h1 className="flex flex-end">HÁ OUTRA PESSOA JUNTO?</h1>
            <InputModifier type="text" placeholder="Nome da outra pessoa..." {...register("outraPessoaNome")}/>

            <Botao type="submit" className="mt-5" onClick={onClick}>Enviar Registro</Botao>
        </form>
    </Modal> 
    )
}

export default ModalCreate