import Botao from "../botao/Botao";
import  Modal from "./ModalBase";
import type { ModalProps } from "./ModalBase";
import type { dadosCadastro } from "../../../types/dadosCadastro";

//       {/* Componentizar essas coisas aqui abaixo E LEMBRAR DO truncate*/}
// colocar isso no clique do frontend tb! (do lado do cliente)

interface ModalInfoProps extends ModalProps {
    dadoSelect: dadosCadastro | null;
}

const ModalInfo = ({ isOpen, onClose, dadoSelect}: ModalInfoProps) => {
    

    return(
        <Modal isOpen={isOpen} onClose={onClose}>
                <h1 className="font-bold">NOME DA PESSOA</h1>
                <h3 className=" max-w-[250px] truncate">{dadoSelect?.nome}</h3>
                <h1 className="font-bold">DATA DE NASCIMENTO</h1>
                <h3 className=" max-w-[250px] truncate">{dadoSelect?.dataNascimento}</h3>
                <h1 className="font-bold">DATA DE FALECIMENTO</h1>
                <h3 className=" max-w-[250px] truncate">{dadoSelect?.dataFalecimento}</h3>
                <h1 className="font-bold">NOME DA OUTRA PESSOA ENTERRADA JUNTO</h1>
                <h3 className=" max-w-[250px] truncate">{dadoSelect?.outraPessoaNome || "Não há outra pessoa junto."}</h3>
                <h1 className="font-bold">ID</h1>
                <h3 className="truncate">{dadoSelect?.id}</h3>

                {/*Deixar isso opcional dps, pro FRONT ficar sem, e o ADMIN apenas ter */}
                <div className="flex justify-center items-center gap-5">
                    <Botao className="w-[20vw] justify-center items-center flex" onClick={onClose}>Deletar</Botao>
                    <Botao className="w-[20vw] justify-center items-center flex" onClick={onClose}>Editar</Botao>
                    <Botao className="w-[20vw] justify-center items-center flex" onClick={onClose}>Fechar</Botao>
                </div>
        </Modal>
    )
}

export default ModalInfo