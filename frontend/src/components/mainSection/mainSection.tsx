import { useEffect, useState } from "react";
import Input from "../inputbar/Input";
import Modal from "../modals/ModalBase";
import RecordList from "../inputbar/RecordList";
import pegarDados from "../inputbar/SearchFunction";
import type { dadosCadastro } from "../../../types/dadosCadastro";
import Botao from "../botao/Botao";


const MainSection = () => {
    const [isOpen, setOpen] = useState(false)
    const [resultado, setResultado] = useState<dadosCadastro[]>([])
    const [search, setSearch] = useState("")

    function abrirModal(){
        setOpen(true)
    }

    useEffect(() =>{
        const carregar = async () => {
            try {
                const dados = await pegarDados(search);
                setResultado(dados); 

            } catch (error) {
                console.log("Erro na busca:", error);
            }
        };
        carregar()
    }, [search])


    return(
        <section className="mt-19 relative flex flex-col justify-center items-center gap-0">
            <h1 className="h text-3xl font-[300] text-center">Pesquisa do Cemitério</h1>

            <button onClick={abrirModal} className="cursor-pointer block p-7">
                <img src="mainSectionImages/iconDuvida.png" className="w-10 h-10"/>
            </button>

            <div className="relative w-[70vw]">
            <Input search={search} setSearch={setSearch} />
                    {resultado.length > 0 && (
                        <>
                        <div className="absolute">
                        <RecordList dados={resultado.slice(0, 5)} >

                        </RecordList>
                        <div className="bg-[rgb(186,184,184)] border border-2 rounded-sm w-[70vw] flex justify-center">Mostrando {resultado.slice(0, 5).length} de {resultado.length} resultados</div>
                        </div>
                        </>
                    )}
            </div>        

                <Modal isOpen={isOpen} close={() => setOpen(false)}>
                    <h2 className="font-bold text-xl">Como realizar uma pesquisa?</h2>

                    <ul className="flex flex-col list-disc list-inside my-5 gap-5 list-none">
                        <li>Procure por um nome;</li>
                        <li>Clique no resultado desejado, e as informações aparecerão;</li>
                        <li>Caso nenhum nome apareça, a busca não consta em nossos registros.</li>
                    </ul>

                    <Botao onClick={() => setOpen(false)}>
                        FECHAR
                    </Botao>
                </Modal>
        </section>
    )
}

export default MainSection;