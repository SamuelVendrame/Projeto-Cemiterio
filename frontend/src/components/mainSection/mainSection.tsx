import Input from "../inputbar/Input";

const MainSection = () => {
    return(
        <section className="mt-5 h-50 flex flex-col justify-center items-center gap-5">
            <h1 className="h text-3xl font-[300] text-center">Pesquisa do Cemitério</h1>

            <img src="mainSectionImages/iconDuvida.png" className="w-10 h-10"/>

            <Input />
        </section>
    )
}

export default MainSection;