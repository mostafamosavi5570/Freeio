import "./Logo.css";
import logo from "./../../img/logo.png"
export default function Logo() {
    return (
        <div className="Logo">
            <img src={logo} alt="logo" />
        </div>
    )
}