const MainSection = () => {
    return(
        <section className="mt-5 h-50 flex flex-col justify-center items-center gap-3">
            <h1 className="h text-2xl font-[300]">Pesquisa do Cemitério</h1>

            <img src="/mainSectionImages/iconDuvida.png" className="w-8 h-8"/>

            <input type="text" className="border border-black md rounded p-1 pl-4 w-[40vh]" placeholder="Digite um nome..."/> {/* componentizar isso depois pra searchbar do admin*/ }
        </section>
    )
}

export default MainSection;