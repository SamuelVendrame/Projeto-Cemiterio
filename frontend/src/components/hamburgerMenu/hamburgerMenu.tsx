import { useState } from "react"
import { Squash as Hamburger } from "hamburger-react"

const HamburgerMenu = () => {
    const [isOpen, setOpen] = useState(false)

    function toggleMenu(){
        setOpen(prev => !prev)
    }

    return(
        <div className="p-2 rounded-lg border border-white/30 hover:bg-white/10 transition"> { /*Entender melhor essas props aqui, por precaução */ }
            <Hamburger color="#ffffff" size={36} toggle={setOpen} toggled={isOpen} />

            <div className={` bg-[green] z-5 fixed top-0 left-0 h-screen w-[43vw] transition-all duration-300 ${ isOpen ? "translate-x-0" : "-translate-x-full" }`}>Menu</div>
        </div>
    )
}

export default HamburgerMenu;