import InputModifier from "../adminComponents/InputModifier"
import Botao from "../botao/Botao"
import { useForm } from "react-hook-form"
import { useEffect } from "react"
import type { dadosCadastro } from "../../../types/dadosCadastro"

interface RegistroFormProps {
    dadoSelect?: dadosCadastro | null
    onSubmit: (data: dadosCadastro) => Promise<void>
}

const RegistroForm = ({ dadoSelect, onSubmit }: RegistroFormProps) => {

    const { register, handleSubmit, reset } = useForm<dadosCadastro>()

    useEffect(() => {
        if (dadoSelect) {
            reset(dadoSelect)
        }
    }, [dadoSelect, reset])

    return (
        <form className="flex flex-col gap-2" onSubmit={handleSubmit(onSubmit)}>

            <h1 className="font-bold text-xl w-full">
                {dadoSelect ? "EDITAR REGISTRO" : "CRIAR REGISTRO"}
            </h1>

            <h1 className="flex flex-end">NOME DA PESSOA</h1>
            <InputModifier
                type="text"
                {...register("nome")}
            />

            <h1 className="flex flex-end">DATA DE NASCIMENTO</h1>
            <InputModifier
                type="date"
                {...register("dataNascimento")}
            />

            <h1 className="flex flex-end">DATA DE FALECIMENTO</h1>
            <InputModifier
                type="date"
                {...register("dataFalecimento")}
            />

            <h1 className="flex flex-end">HÁ OUTRA PESSOA JUNTO?</h1>
            <InputModifier
                type="text"
                {...register("outraPessoaNome")}
            />

            <Botao type="submit" className="mt-5">
                Enviar Registro
            </Botao>

        </form>
    )
}

export default RegistroForm