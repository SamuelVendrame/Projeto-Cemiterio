
const Modal = ({children, isOpen}) => {
    return(
        <div className={`p-10 gap-5 h-[70vh] w-[80vw] bg-[white] text-center z-5 flex flex-col justify-center items-center  border-4 border-green-900/80 rounded-lg transition-all duration-300 ${isOpen ? "opacity-100 scale-100" : "opacity-0 scale-95"}`} onClick={(e) => e.stopPropagation()}>
            {children}
        </div>
    )
}

export default Modal