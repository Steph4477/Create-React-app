import { Link } from "react-router-dom"


export default function Nav() {
    return (
        <nav className="header__nav">
            <ul className="header__nav__onglets">
                <li>
                    <Link to="/" className="header__nav__onglets__onglet">
                        Accueil
                    </Link>
                </li>
                <li>
                    <Link to="/about" className="header__nav__onglets__onglet">
                        A Propos
                    </Link>
                </li>
            </ul>
        </nav>
    )
}
