interface InputProps{
    className?: string;
    placeholder?: string;
    // Dados físicos do form
    name: string;
    value: string;
    type: "text" | "date";
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputModifier = ({className, placeholder, type, onChange}: InputProps) => {
    return(
        <input placeholder={placeholder} className={`p-1 bg-red border-solid border-2 ${className}`} type={type} onChange={onChange}>

        </input>
    )
}

export default InputModifier