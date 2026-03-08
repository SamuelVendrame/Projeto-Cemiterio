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
           <ul className={`w-[70vw] flex flex-col border-solid border-2`}>
            {dados.map((dado) => (
                <li
                    className="bg-[#e4e0e0] p-2 border-solid"
                    key={dado.id}
                    onClick={() => {setOpen(true), setDadoSelect(dado)}}
                >
                    {dado.name}
                </li>
            ))}

            <Overlay isOpen={isOpen} close={() => setOpen(false)}>
                <Modal isOpen={isOpen}>
                    <h1>NOME DA PESSOA</h1>
                    <h3>{dadoSelect?.name}</h3>
                    <button className="bg-[gray] p-2" onClick={() => setOpen(false)}>Fechar</button>
                </Modal>
            </Overlay>
        </ul>
    )
}

export default RecordList