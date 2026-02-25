const MainSection = () => {
    return(
        <section className="bg-[red] h-50 flex flex-col justify-center items-center gap-5">
            <h1 className="h text-2xl font-[300]">Pesquisa do Cemitério</h1>

            <img src="duvidaDiv"/>

            <input type="text" className="border border-black md rounded p-1 pl-2" placeholder="Digite um nome..."/>
        </section>
    )
}

export default MainSection;