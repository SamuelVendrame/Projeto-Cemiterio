
interface InputProps {
  search: string;
  setSearch: (value: string) => void;
}

 const Input = ({ search, setSearch}: InputProps) => {
        {/*TESTE, REVER DEPOIS */}

    return(
        <input type="text" value={search}  onChange={(e) => setSearch(e.target.value)} className="border border-black md rounded p-6 pl-3 h-11 w-[70vw]" placeholder="Digite um nome..."/> /* componentizar isso depois pra searchbar do admin*/ 
    )
}

export default Input;