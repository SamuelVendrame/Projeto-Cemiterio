
{/* Inset=0 é um atalho pra propriedades que cobrem a tela toda, faz com que a div cubra toda a viewport, mas depende da position */}
{/* Entender melhor essas props depois vvvvvvvvv*/}


const Overlay = ({isOpen, close, children}) => {
    return(
        <div
        className={`flex justify-center items-center cursor-pointer z-3 fixed inset-0 bg-black/50 transition-opacity duration-300 ${isOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`} 
        onClick={close}
        >
        {children}
        </div>
    )
}

export default Overlay;