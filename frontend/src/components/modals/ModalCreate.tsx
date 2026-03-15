import Modal from "./ModalBase"
import type { ModalProps } from "./ModalBase"
import type { dadosCadastro } from "../../../types/dadosCadastro";
import RegistroForm from "../adminComponents/Formulario";


interface ModalCreateProps extends ModalProps {
    dadoSelect?: dadosCadastro | null;
    onSubmit: (data: dadosCadastro) => Promise<void>;
    mode: "create" | "edit" | null
}

const ModalCreate = ({ isOpen, close, children, onSubmit, dadoSelect, className }: ModalCreateProps) => {
    return (
      <Modal isOpen={isOpen} close={close}>
        <RegistroForm onSubmit={onSubmit} dadoSelect={dadoSelect}>
        </RegistroForm>
        {children}

      </Modal>
    );
  };

export default ModalCreate