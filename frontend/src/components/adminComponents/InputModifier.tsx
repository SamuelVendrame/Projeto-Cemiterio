interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    className?: string;
}

const InputModifier = ({className, ...props}: InputProps) => {
    return(
        <input className={`p-1 bg-red border-solid border-2 ${className}`} {...props}>

        </input>
    )
}

export default InputModifier