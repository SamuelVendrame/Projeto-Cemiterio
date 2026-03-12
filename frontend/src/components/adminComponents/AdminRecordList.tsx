import { useState } from "react";
import type { dadosCadastro } from "../../../types/dadosCadastro";
import AdminButton from "./AdminEdit";
import Modal from "../modals/ModalBase";
import Botao from "../botao/Botao";

        interface RecordListProps{
            dados: dadosCadastro[]
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

            {/* Componentizar essas coisas aqui abaixo E LEMBRAR DO truncate*/}

                <Modal isOpen={isOpen} onClose={() => setOpen(false)}>
                    <h1 className="font-bold">NOME DA PESSOA</h1>
                    <h3 className=" max-w-[250px] truncate">{dadoSelect?.nome}</h3>
                    <h1 className="font-bold">DATA DE NASCIMENTO</h1>
                    <h3 className=" max-w-[250px] truncate">{dadoSelect?.dataNascimento}</h3>
                    <h1 className="font-bold">DATA DE FALECIMENTO</h1>
                    <h3 className=" max-w-[250px] truncate">{dadoSelect?.dataFalecimento}</h3>
                    <h1 className="font-bold">NOME DA OUTRA PESSOA ENTERRADA JUNTO</h1>
                    <h3 className=" max-w-[250px] truncate">{dadoSelect?.outraPessoaNome || "Não há outra pessoa junto."}</h3>
                    <h1 className="font-bold">ID</h1>
                    <h3 className="truncate">{dadoSelect?.id}</h3>

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