import Input from "../inputbar/Input";
import AdminRecordList from "./AdminRecordList";

const AdminSection = () => {
    return(
        <section className="max-h-fit w-[90vw] bg-gray-200 mx-auto mt-10 flex flex-col items-center border rounded-xl ">
            <div className=" w-[10] flex flex-col justify-center items-center gap-5">
                <h2 className="font-2xl">Modificação de Cadastros</h2>
                <button className="bg-[red] w-50 p-2">Adicionar registro</button>           
            </div>

            <div className="w-[80vw] flex flex-col mt-5 justify-center items-center rounded-xl">
                <Input />
                <ul className="bg-[green] mt-5">
                    <AdminRecordList />
                </ul>
            </div>
        </section>
    )
}

export default AdminSection;