import Logo from "../assets/logo.svg"
import Nav from "./Nav"

export default function Header() {
    return (
        <header className="header">
            <img className="header__logo" src={Logo} alt="logo de l'agence Kasa" />
            <Nav className="header__nav" />
        </header>
    )
}


