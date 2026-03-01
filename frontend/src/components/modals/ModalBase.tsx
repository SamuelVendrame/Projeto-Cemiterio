
const Modal = ({children}) => {
    return(
        <div className="p-10 gap-5 h-[70vh] w-[80vw] bg-[white] text-center z-5 flex flex-col justify-center items-center fixed border-4 border-green-900/80 rounded-lg" onClick={(e) => e.stopPropagation()}>
            {children}
        </div>
    )
}

export default Modal