import type { User } from "../User"

interface RecordListProps{
    dados: User[]
}

const RecordList = ({dados}: RecordListProps) => {

    return(
        dados.map((dado) => (
            <li className="bg-[red]" key={dado.id}>
                {dado.name}
            </li>
        ))
    )
}

export default RecordList