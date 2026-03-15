import type { dadosCadastro } from "../../../types/dadosCadastro";
import AdminButton from "./AdminEdit";

        interface RecordListProps{
            dados: dadosCadastro[]
            onClick: (dado: dadosCadastro) => void;
        }

        

const AdminRecordList = ({dados, onClick}: RecordListProps) => {

    return(
            <>
               {dados.map((dado) => (
                <li className="w-full bg-white px-4 py-3 border-b flex justify-between items-center hover:bg-gray-50 transition-colors" key={dado.id}>
                    <span className="max-w-[200px] truncate">
                        {dado.nome} 
                    </span>     
                <AdminButton onClick={() => onClick(dado)}/>
                </li>
            ))}

            </>
    )
}

export default AdminRecordList;