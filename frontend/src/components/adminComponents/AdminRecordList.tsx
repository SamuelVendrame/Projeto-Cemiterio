import { useState } from "react";
import type { dadosCadastro } from "../../../types/dadosCadastro";
import AdminButton from "./AdminEdit";
import Modal from "../modals/ModalBase";
import Botao from "../botao/Botao";

        interface RecordListProps{
            dados: User[]
        }

const AdminRecordList = ({dados}: RecordListProps) => {
    const [isOpen, setOpen] = useState(false)
    const [dadoSelect, setDadoSelect] = useState<User | null>(null)

    return(
            <>
               {dados.map((dado) => (
                <li className="w-[100%] bg-[#e4e0e0] p-2 border flex justify-between items-center" key={dado.id}>
                {dado.nome}      
                <AdminButton onClick={() => {setOpen(true); setDadoSelect(dado); console.log(dado.nome)}}/>
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

                    <div className="flex justify-center items-center gap-5">
                        <Botao className="w-[20vw] justify-center items-center flex" onClick={() => setOpen(false)}>Deletar</Botao>
                        <Botao className="w-[20vw] justify-center items-center flex" onClick={() => setOpen(false)}>Editar</Botao>
                        <Botao className="w-[20vw] justify-center items-center flex" onClick={() => setOpen(false)}>Fechar</Botao>
                    </div>
                </Modal>
            </>
    )
}

export default AdminRecordList;