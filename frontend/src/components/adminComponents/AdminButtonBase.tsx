interface BotaoProps{
    onClick: () => void;
    children?: string;
}

const Botao = ({onClick, children}: BotaoProps) => {
    return(
        <button className="bg-[grey] border border-[green] border-2 p-1 h-10" onClick={onClick}>
            {children}
        </button>
    )
}

export default Botao