import InputModifier from "../adminComponents/InputModifier"
import { useForm } from "react-hook-form"
import { useEffect, type ReactNode } from "react"
import type { dadosCadastro } from "../../../types/dadosCadastro"

interface RegistroFormProps {
    dadoSelect?: dadosCadastro | null
    onSubmit?: (data: dadosCadastro) => Promise<void> 
    children?: ReactNode;
}

const RegistroForm = ({ dadoSelect, onSubmit, children }: RegistroFormProps) => {

    const { register, handleSubmit, reset } = useForm<dadosCadastro>()

    useEffect(() => {
        if (dadoSelect) {
            reset(dadoSelect)
        }
    }, [dadoSelect, reset])

    return (
        <form className="flex flex-col gap-2" onSubmit={ onSubmit ? handleSubmit(onSubmit) : undefined}>

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

            {children}

        </form>
    )
}

export default RegistroForm