import HamburgerMenu from "../hamburgerMenu/hamburgerMenu";

const Navbar = () => {
    return(
        <nav className="bg-gradient-to-b from-[rgb(255,196,0)] via-[rgb(81,133,13)] to-[rgb(53,94,6)] w-full h-[13vh] flex justify-between items-center"> 
            <div className="p-4">
                <img src="./public/navbarImages/logoSaoManoel.png" className=" w-20" alt="Logo" />
            </div>

            <div className="p-4">
                <HamburgerMenu />
            </div>
        </nav>
    )
}

export default Navbar;