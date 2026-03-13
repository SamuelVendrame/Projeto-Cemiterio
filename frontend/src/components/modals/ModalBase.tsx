import type { ReactNode } from "react";
import Overlay from "../overlay/Overlay";

export type ModalProps = {
  children?: ReactNode;
  close: () => void;
  onClose: boolean;
};

const Modal = ({children, close, onClose}: ModalProps) => {
    
    return(
        <Overlay isOpen={onClose} close={close}>
            <div className="cursor-default px-6 gap-3 h-[80vh] w-[80vw] bg-white absolute text-center z-10 flex flex-col justify-center items-center border-4 border-green-900/80 rounded-lg opacity-100 scale-100 transition-all duration-300" onClick={(e) => e.stopPropagation()}>
                {children}
            </div>
        </Overlay>
    )
}

export default Modal