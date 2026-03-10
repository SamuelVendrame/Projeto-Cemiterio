import type { User } from "../User"
import { useState } from "react"
import Modal from "../modals/ModalBase"
import Overlay from "../overlay/Overlay"

interface RecordListProps{
    dados: User[]
}

const RecordList = ({dados}: RecordListProps) => {
    const [isOpen, setOpen] = useState(false)
    const [dadoSelect, setDadoSelect] = useState<User | null>(null)

    return(
           <ul className={`w-full flex flex-col border-solid border-2 border-b-0`}>
            {dados.map((dado) => (
                <li
                    className="bg-[#e4e0e0] p-3 border-b-2 border-solid"
                    key={dado.id}
                    onClick={() => {setOpen(true), setDadoSelect(dado), console.log(dado)}}
                >
                    {dado.nome}
                </li>
            ))}

            <Overlay isOpen={isOpen} close={() => setOpen(false)}>
                <Modal isOpen={isOpen}>
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
                    <button className="bg-[gray] p-2" onClick={() => setOpen(false)}>Fechar</button>
                </Modal>
            </Overlay>
        </ul>
    )
}

export default RecordList