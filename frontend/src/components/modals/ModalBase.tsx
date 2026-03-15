import type { ReactNode } from "react";
import Overlay from "../overlay/Overlay";

export type ModalProps = {
  children?: React.ReactNode;
  close: () => void;
  isOpen: boolean;
  className?: ""
};


const Modal = ({children, close, isOpen}: ModalProps) => {
    
    return(
        <Overlay isOpen={isOpen} close={close}>
            <div
                className={`cursor-default px-6 gap-3 h-[80vh] w-[80vw] bg-white absolute text-center z-10 flex flex-col justify-center items-center border-4 border-green-900/80 transition-all duration-300 ${isOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`}
                onClick={(e) => e.stopPropagation()}
                >
                {children}
            </div>
        </Overlay>
    )
}

export default Modal