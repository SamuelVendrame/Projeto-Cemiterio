
interface BotaoProps{
    onClick?: () => void;
    children?: string;
    className?: string;
    type?: React.ButtonHTMLAttributes<HTMLButtonElement>['type'];
}

const Botao = ({onClick, children, className, type}: BotaoProps) => {
    return(
        <button className={`px-6 py-2.5 my-5 bg-green-600 border-2 border-green-600 text-white font-medium rounded shadow-[0_0_10px_rgba(0,0,0,0.15)] hover:bg-white hover:text-green-700 hover:border-green-700 hover:shadow-[0_0_15px_rgba(0,0,0,0.8)] hover:cursor-pointer active:bg-gray-100 focus:ring-4 focus:ring-green-100 transition-all duration-200 ease-in-out uppercase tracking-wider text-sm ${className}`} onClick={onClick} type={type}>
            {children}
        </button>
    )
}

export default Botao