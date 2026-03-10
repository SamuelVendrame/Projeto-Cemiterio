import { useState } from "react";
import type { User } from "../User";
import AdminButton from "./AdminButton";
import Overlay from "../overlay/Overlay";
import Modal from "../modals/ModalBase";

        interface RecordListProps{
            dados: User[]
        }

const AdminRecordList = ({dados}: RecordListProps) => {
    const [isOpen, setOpen] = useState(false)
    const [dadoSelect, setDadoSelect] = useState<User | null>(null)

    return(
            <>
               {dados.map((dado) => (
                <li className="w-[90%] bg-[#e4e0e0] p-2 border flex justify-between items-center" key={dado.id} 
                onClick={() => {setOpen(true), setDadoSelect(dado), console.log(dado.nome)}}
                >
                {dado.nome}      
                <AdminButton />
                </li>
            ))}

            <Overlay isOpen={isOpen} close={() => setOpen(false)}>
                <Modal isOpen={isOpen}>
                    <h1>{dadoSelect?.nome}</h1>
                </Modal>
            </Overlay>

            </>

    )
}

export default AdminRecordList;