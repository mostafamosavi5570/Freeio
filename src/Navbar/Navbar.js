import LoginButton from "./Loginbutton/LoginButton"
import Logo from "./Logo/Logo"
import Menu from "./MenuNavbar/Menu"
import "../Navbar/Navbar.css"
export default function Navbar() {
    return (
        <div className="Navbar">
            <LoginButton />
            <Menu />
            <Logo />
        </div>
)
}