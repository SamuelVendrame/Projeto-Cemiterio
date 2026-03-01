import Input from "../inputbar/Input";
import AdminRecordList from "./AdminRecordList";

const AdminSection = () => {
    return(
        <section className="h-[10vh] mt-10 flex flex-col items-center">
            <div className=" w-[10] flex flex-col justify-center items-center gap-5">
                <h2>Modificação de Cadastros</h2>
                <button className="bg-[red] w-50 p-2">adicionar registros</button>                
            </div>

            <div className="bg-[gray] w-[80vw] flex flex-col mt-5 justify-center items-center rounded-xl">
                <Input />
                <ul className="bg-[green] mt-5">
                    <AdminRecordList />
                </ul>
            </div>
        </section>
    )
}

export default AdminSection;