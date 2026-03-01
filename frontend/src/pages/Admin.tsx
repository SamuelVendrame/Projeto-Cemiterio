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
                    <StyledLink to="/">HOME</StyledLink>
            </HamburgerMenu>
        </Navbar>
        <Footer />
        <AdminSection />
        </>
    )
}

export default Admin;