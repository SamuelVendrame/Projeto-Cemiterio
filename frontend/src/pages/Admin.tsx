import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import AdminSection from "../components/adminComponents/AdminSection";
import HamburgerMenu from "../components/hamburgerMenu/HamburgerMenu";
import { Link } from "react-router-dom";

const Admin = () => {
    return(
        <>
        <Navbar>
            <HamburgerMenu>
                <Link to="/">PAGINA INICIAL</Link>
            </HamburgerMenu>
        </Navbar>
        <Footer />
        <AdminSection />
        </>
    )
}

export default Admin;