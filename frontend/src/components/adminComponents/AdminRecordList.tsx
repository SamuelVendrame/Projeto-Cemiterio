import type { User } from "../User";
import AdminButton from "./AdminButton";

        interface RecordListProps{
            dados: User[]
        }

const AdminRecordList = ({dados}: RecordListProps) => {

    return(
            <>
               {dados.map((dado) => (
                <li className="w-[90%] bg-[#e4e0e0] p-2 border flex justify-between items-center" key={dado.id} onClick={() => console.log(dado.name)}>
                    {dado.name}      
                <AdminButton />
                </li>
            ))}
            </>

    )
}

export default AdminRecordList;