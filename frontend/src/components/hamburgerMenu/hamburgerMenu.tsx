import { useState } from "react"
import { Squash as Hamburger } from "hamburger-react"
import Overlay from "../overlay/Overlay"
import StyledLink from "../styledLinks/StyledLinks"


const HamburgerMenu = ({children}) => {
    const [isOpen, setOpen] = useState(false)

    return(
        <div className="p-2 rounded-lg border border-white/30 hover:bg-white/10 transition"> { /*Entender melhor essas props aqui, por precaução */ }
            <Hamburger color="#ffffff" size={36} toggle={setOpen} toggled={isOpen} />

        <Overlay isOpen={isOpen} close={() => setOpen(false)}>
            <div className={` flex items-center flex-col bg-gradient-to-b from-[rgb(53,94,6)] via-[rgb(113,190,13)] to-[rgb(53,94,6)] z-5 fixed top-0 left-0 h-screen w-[43vw] transition-all duration-300 ${ isOpen ? "translate-x-0" : "-translate-x-full" }`}>
                <ul className="flex flex-col mt-8 gap-5">
                    {children}
                </ul>
            </div>
        </Overlay>
    </div>

    )
}

export default HamburgerMenu;