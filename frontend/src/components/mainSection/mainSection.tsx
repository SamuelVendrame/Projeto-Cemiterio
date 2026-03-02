import { useState } from "react";
import Input from "../inputbar/Input";
import Modal from "../modals/ModalBase";
import Overlay from "../overlay/Overlay";

const MainSection = () => {
    const [isOpen, setOpen] = useState(false)

    function abrirModal(){
        setOpen(true)
    }

    return(
        <section className="mt-10 h-50 flex flex-col justify-center items-center gap-5">
            <h1 className="h text-3xl font-[300] text-center">Pesquisa do Cemitério</h1>

            <button onClick={abrirModal} className="cursor-pointer block p-3">
                <img src="mainSectionImages/iconDuvida.png" className="w-10 h-10"/>
            </button>

            <Input />

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