import Input from "../inputbar/Input";
import AdminRecordList from "./AdminRecordList";

const AdminSection = () => {
    return(
        <section className="bg-[gray] h-[10vh] mt-10">
            <div className="flex flex-col justify-center items-center gap-5">
                <h2>Modificação de Cadastros</h2>
                <button className="bg-[red] w-50 p-2">adicionar registros</button>                
            </div>

            <div className="bg-[blue] flex flex-col mt-5 justify-center items-center">
                <Input />
                <ul className="bg-[green] mt-5">
                    <AdminRecordList />
                </ul>
            </div>
        </section>
    )
}

export default AdminSection;