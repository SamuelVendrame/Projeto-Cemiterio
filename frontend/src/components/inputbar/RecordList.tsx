interface RecordListProps{
    nome: string;
    onClick: (nome: string) => void;
}

const RecordList = ({ nome, onClick }: RecordListProps) => {
    return(
        <li onClick={() => onClick(nome)} className="bg-red w-10 h-10">
            {nome}
        </li>
    )
}

export default RecordList