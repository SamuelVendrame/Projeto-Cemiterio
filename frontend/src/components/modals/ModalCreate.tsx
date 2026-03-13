import Modal from "./ModalBase"
import type { ModalProps } from "./ModalBase"
import type { dadosCadastro } from "../../../types/dadosCadastro";
import type { ReactNode } from "react";
import RegistroForm from "../adminComponents/Formulario";


interface ModalCreateProps extends ModalProps {
    isOpen: boolean;    
    children?: ReactNode;
    dadoSelect?: dadosCadastro | null;
    onSubmit: (data: dadosCadastro) => Promise<void>;
}

const ModalCreate = ({isOpen, onClose, children, onSubmit, dadoSelect}: ModalCreateProps) => {


    return(
        <Modal isOpen={isOpen} close={close}>
            {children}
            <RegistroForm onSubmit={onSubmit} dadoSelect={dadoSelect}>

            </RegistroForm>
    </Modal> 
    )
}

export default ModalCreate