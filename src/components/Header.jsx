import Logo from '../assets/logo.svg';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
    const [activeTab, setActiveTab] = useState('Accueil')

    const tabClick = (tab) => {
        setActiveTab(tab)
    }

    return (
        <header className="header">
            <Link to="/">
                <img className="header_logo" src={Logo} alt="logo de l'agence Kasa" 
                onClick={() => tabClick('Accueil')} />
            </Link>

            <nav className="header_nav">
                <ul className="header_nav_onglets">
                    <li>
                        <Link
                            to="/"
                            className={`header_nav_onglets_onglet ${activeTab === 'Accueil' ? 'active' : '' }`}
                            onClick={() => tabClick('Accueil')}
                        >
                            Accueil
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/about"
                            className={`header_nav_onglets_onglet ${activeTab === 'A Propos' ? 'active' : '' }`}
                            onClick={() => tabClick('A Propos')}
                        >
                            A Propos
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

