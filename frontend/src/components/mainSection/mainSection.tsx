import { useEffect, useState } from "react";
import Input from "../inputbar/Input";
import Modal from "../modals/ModalBase";
import Overlay from "../overlay/Overlay";
import RecordList from "../inputbar/RecordList";
import pegarDados from "../inputbar/SearchFunction";
import type { User } from "../User";


const MainSection = () => {
    const [isOpen, setOpen] = useState(false)
    const [resultado, setResultado] = useState<User[]>([])
    const [resultadoFull, setResultadoFull] = useState<User[]>([])
    const [search, setSearch] = useState("")
    

    function abrirModal(){
        setOpen(true)
    }


    useEffect(() =>{
        const carregar = async () => {
            try {
                const dados = await pegarDados(search);
                setResultado(dados.slice(0, 5)); 
                setResultadoFull(dados)

            } catch (error) {
                console.log("Erro na busca:", error);
            }
        };
        carregar()
    }, [search])


    return(
        <section className="mt-19 flex flex-col justify-center items-center gap-0">
            <h1 className="h text-3xl font-[300] text-center">Pesquisa do Cemitério</h1>

            <button onClick={abrirModal} className="cursor-pointer block p-7">
                <img src="mainSectionImages/iconDuvida.png" className="w-10 h-10"/>
            </button>

            <Input search={search} setSearch={setSearch} />
                    {resultado.length > 0 && (
                        <>
                        <RecordList dados={resultado} >

                        </RecordList>
                        <div className="bg-[red] w-[70vw] flex justify-center">Mostrando {resultado.length} de {resultadoFull.length} resultados</div>
                        </>
                    )}

                <Overlay isOpen={isOpen} close={() => setOpen(false)}>
                    <Modal isOpen={isOpen}>
                    <h2 className="font-bold text-xl">Como realizar uma pesquisa?</h2>

                    <ul className="list-disc list-inside space-y-3 list-none p-1">
                        <li>Procure por um nome;</li>
                        <li>Clique no resultado desejado, e as informações aparecerão;</li>
                        <li>Caso nenhum nome apareça, a busca não consta em nossos registros.</li>
                    </ul>
                    </Modal>
                </Overlay>
        </section>
    )
}

export default MainSection;