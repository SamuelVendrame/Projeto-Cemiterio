import type { User } from "../User"

interface RecordListProps{
    dados: User[]
}

const RecordList = ({dados}: RecordListProps) => {

    return(
        dados.map((dado) => (
            <li className="bg-[grey] p-2 z-10 border-solid" key={dado.id} onClick={() => console.log("clicou no: " + dado.name + " que tem o id " + dado.id)}>
                {dado.name}
            </li>
        ))
    )
}

export default RecordList