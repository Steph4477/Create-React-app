import { Link } from "react-router-dom"

export default function Nav() {
    return (
        <ul className="header__nav">
            <li className="header__nav__onglet">
                <Link to="/">
                    Accueil
                </Link>
            </li>
            <li className="header__nav__onglet">
                <Link to="/about">
                    About
                </Link>
            </li>
        </ul>
    )
}