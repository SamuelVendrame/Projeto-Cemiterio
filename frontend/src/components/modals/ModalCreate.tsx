import Modal from "./ModalBase"
import type { ModalProps } from "./ModalBase"
import type { dadosCadastro } from "../../../types/dadosCadastro";
import RegistroForm from "../adminComponents/Formulario";


interface ModalCreateProps extends ModalProps {
    dadoSelect?: dadosCadastro | null;
    onSubmit: (data: dadosCadastro) => Promise<void>;
}

const ModalCreate = ({ isOpen, close, children, onSubmit, dadoSelect }: ModalCreateProps) => {
    return (
      <Modal isOpen={isOpen} close={close}>
        {children}
        <RegistroForm onSubmit={onSubmit} dadoSelect={dadoSelect} />
      </Modal>
    );
  };

export default ModalCreate