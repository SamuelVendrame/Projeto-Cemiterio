import Navbar from "../components/navbar/Navbar";
import MainSection from "../components/mainSection/mainSection";
import Footer from "../components/footer/Footer";
import HamburgerMenu from "../components/hamburgerMenu/HamburgerMenu";
import { Link } from "react-router-dom";

const Home = () => {
    return(
        <>
        <Navbar>
            <HamburgerMenu>
                <Link to="/admin" className="py-7 px-5 block text-[white] text-2xl">ADMIN</Link>
            </HamburgerMenu>
        </Navbar>
        <MainSection />
        <Footer />
        </>
    )
}

export default Home;