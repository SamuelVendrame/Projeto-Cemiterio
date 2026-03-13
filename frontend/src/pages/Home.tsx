import Navbar from "../components/navbar/Navbar";
import MainSection from "../components/mainSection/mainSection";
import HamburgerMenu from "../components/hamburgerMenu/hamburgerMenu";
import { Link } from "react-router-dom";
import Map from "../components/mapComponents/Map";

const Home = () => {
    return(
        <>
        <Navbar>
            <HamburgerMenu>
                <Link to="/admin" className="py-7 px-5 block text-[white] text-2xl">ADMIN</Link>
            </HamburgerMenu>
        </Navbar>
        
        <div className="flex flex-col gap-10 p-4">
            <MainSection />
        </div>
        </>
    )
}

export default Home;