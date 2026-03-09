import type { User } from "../User";
import AdminButton from "./AdminButton";

        interface RecordListProps{
            dados: User[]
        }

const AdminRecordList = ({dados}: RecordListProps) => {

    return(
        <div className="w-70 flex flex-col pl-5 border rounded-md">
               {dados.map((dado) => (
                <>
                <li className="w-full bg-[#e4e0e0] p-2 border-solid flex justify-between items-center" key={dado.id} onClick={() => console.log(dado.name)}>
                    {dado.name}      
                <AdminButton />
                </li>
                 </>
            ))}
        </div>
    )
}

export default AdminRecordList;