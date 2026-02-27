import { useState } from "react"

const HamburgerMenu = () => {
    const [isOpen, setOpen] = useState(false)

    return(
        <button className="bg-[red] w-10 h-10">Click me!</button>
    )
}