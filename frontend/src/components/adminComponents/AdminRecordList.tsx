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
                <li className="w-[100%] bg-[#e4e0e0] p-2 border flex justify-between items-center" key={dado.id}>
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