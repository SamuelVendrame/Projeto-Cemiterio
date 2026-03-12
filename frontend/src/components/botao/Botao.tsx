
interface BotaoProps{
    onClick?: () => void;
    children?: string;
    className?: string;
    type?: React.ButtonHTMLAttributes<HTMLButtonElement>['type'];
}

const Botao = ({onClick, children, className, type}: BotaoProps) => {
    return(
        <button className={`px-6 py-2.5 my-5 bg-gray-50 border-2 border-green-600 text-green-700 font-medium rounded shadow-sm hover:bg-gray-200 hover:border-green-700 hover:cursor-pointer active:bg-gray-300 focus:ring-4 focus:ring-green-100 transition-all duration-200 ease-in-out uppercase tracking-wider text-sm ${className}`} onClick={onClick} type={type}>
            {children}
        </button>
    )
}

export default Botao