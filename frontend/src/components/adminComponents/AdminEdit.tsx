
interface ButtonProps{
    onClick: () => void;
}

const AdminButton = ({onClick}: ButtonProps) => {

    return(
        <>
        <button className="inline p-2">
            <img src="adminImages/pen.png" className="w-7 h-7" onClick={onClick}/>
        </button>
    </>
    )
}

export default AdminButton