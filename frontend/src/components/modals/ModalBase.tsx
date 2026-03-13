import type { ReactNode } from "react";
import Overlay from "../overlay/Overlay";

export type ModalProps = {
  children?: ReactNode;
  isOpen: boolean;
  onClose: () => void;
};

const Modal = ({children, isOpen, onClose}: ModalProps) => {
    
    return(
        <Overlay isOpen={isOpen} close={onClose}>
            <div className={`cursor-default px-6 gap-3 h-[80vh] w-[80vw] bg-[white] absolute text-center z-10 flex flex-col justify-center items-center  border-4 border-green-900/80 rounded-lg transition-all duration-300 ${isOpen ? "opacity-100 scale-100" : "opacity-0 scale-95"}`} onClick={(e) => e.stopPropagation()}>
                {children}
            </div>
        </Overlay>
    )
}

export default Modal