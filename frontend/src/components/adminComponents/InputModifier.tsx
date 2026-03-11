interface InputProps{
    className?: string;
    placeholder?: string;
    // Dados físicos do form
    name: string;
    value: string;
}

const InputModifier = ({className, placeholder}: InputProps) => {
    return(
        <input placeholder={placeholder} className={`p-1 bg-red border-solid border-2 ${className}`}>

        </input>
    )
}

export default InputModifier