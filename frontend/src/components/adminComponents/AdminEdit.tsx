
interface ButtonProps{
    onClick: () => void;
}

const AdminButton = ({onClick}: ButtonProps) => {

    return(
        <>
        <button className="inline p-2">
            <img src="adminImages/pen.png" className="w-8 h-8 hover:cursor-pointer block" onClick={onClick}/>
        </button>
    </>
    )
}

export default AdminButton