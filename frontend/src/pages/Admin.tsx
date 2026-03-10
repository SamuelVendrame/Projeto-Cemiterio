import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import AdminSection from "../components/adminComponents/AdminSection";
import HamburgerMenu from "../components/hamburgerMenu/HamburgerMenu";
import StyledLink from "../components/styledLinks/StyledLinks";

const Admin = () => {
    return(
        <>
        <Navbar>
            <HamburgerMenu>
                <StyledLink to="/" className="py-7 px-5 block text-[white] text-2xl">HOME</StyledLink>
            </HamburgerMenu>
        </Navbar>
        <AdminSection />
        <Footer />
        </>
    )
}

export default Admin;