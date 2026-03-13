import { useState } from "react";
import type { dadosCadastro } from "../../../types/dadosCadastro";
import AdminButton from "./AdminEdit";
import ModalCreate from "../modals/ModalCreate";

        interface RecordListProps{
            dados: dadosCadastro[]
            onClick: () => void;
        }

const AdminRecordList = ({dados}: RecordListProps) => {
    const [isOpen, setOpen] = useState(false)
    const [dadoSelect, setDadoSelect] = useState<dadosCadastro | null>(null)

    return(
            <>
               {dados.map((dado) => (
                <li className="w-[100%] bg-[#e4e0e0] p-2 border flex justify-between items-center" key={dado.id}>
                    <span className="max-w-[200px] truncate">
                        {dado.nome} 
                    </span>     
                <AdminButton onClick={() => {setOpen(true); setDadoSelect(dado); console.log(dado.nome)}}/>
                </li>
            ))}

            {/* Preciso LITERALMENTE só criar um componente novo de ModalEdit e usar o ModalCreate como base, mas usar um patch dentro */}
            <ModalCreate isOpen={isOpen} onClose={() => setOpen(false)} dadoSelect={dadoSelect}>
                <h1 className="font-bold text-xl w-full">EDITAR REGISTRO</h1>
            </ModalCreate>
            </>
    )
}

export default AdminRecordList;