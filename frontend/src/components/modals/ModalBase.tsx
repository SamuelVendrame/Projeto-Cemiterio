import type { ReactNode } from "react";

type ModalProps = {
  children?: ReactNode;
  isOpen: boolean;
};

const Modal = ({children, isOpen}: ModalProps) => {
    return(
        <div className={`hover:cursor-default px-6 gap-3 h-[80vh] w-[80vw] bg-[white] absolute text-center z-99 flex flex-col justify-center items-center  border-4 border-green-900/80 rounded-lg transition-all duration-300 pointer-none ${isOpen ? "opacity-100 scale-100" : "opacity-0 scale-95"}`} onClick={(e) => e.stopPropagation()}>
            {children}
        </div>
    )
}

export default Modal