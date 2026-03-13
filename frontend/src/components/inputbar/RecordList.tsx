import type { dadosCadastro } from "../../../types/dadosCadastro"
import { useState } from "react"
import Modal from "../modals/ModalBase"
import Botao from "../botao/Botao"

interface RecordListProps{
    dados: dadosCadastro[]
}

const RecordList = ({dados}: RecordListProps) => {
    const [isOpen, setOpen] = useState(false)
    const [dadoSelect, setDadoSelect] = useState<dadosCadastro | null>(null)

    return(
           <ul className={`w-full flex flex-col border-solid border-2 border-b-0`}>
            {dados.map((dado) => (
                <li
                    className="bg-[#e4e0e0] p-3 border-b-2 border-solid transition-colors hover:cursor-pointer hover:bg-blue-200"
                    key={dado.id}
                    onClick={() => {setOpen(true), setDadoSelect(dado), console.log(dado)}}
                >
                    {dado.nome}
                </li>
            ))}

                <Modal isOpen={isOpen} onClose={() => setOpen(false)}>
                    <h1 className="font-bold">NOME DA PESSOA</h1>
                    <h3>{dadoSelect?.nome}</h3>
                    <h1 className="font-bold">DATA DE NASCIMENTO</h1>
                    <h3>{dadoSelect?.dataNascimento}</h3>
                    <h1 className="font-bold">DATA DE FALECIMENTO</h1>
                    <h3>{dadoSelect?.dataFalecimento}</h3>
                    <h1 className="font-bold">NOME DA OUTRA PESSOA ENTERRADA JUNTO</h1>
                    <h3>{dadoSelect?.outraPessoaNome || "Não há outra pessoa junto."}</h3>
                    <h1 className="font-bold">ID</h1>
                    <h3>{dadoSelect?.id}</h3>

                        <Botao onClick={() => setOpen(false)}>
                            FECHAR
                        </Botao>                
                    </Modal>
        </ul>
    )
}

export default RecordList