import Logo from '../assets/logo.svg'
import { Link } from 'react-router-dom'

export default function Header() {

    return (

        <header className='header'>
            
            <Link to='/'>
                <img className='header__logo' src={Logo} alt="logo de l'agence Kasa" />
            </Link>

            <nav className='header__nav'>
                <ul className='header__nav__onglets'>

                    <li>
                        <Link to='/' className='header__nav__onglets__onglet'>
                            Accueil
                        </Link>
                    </li>

                    <li>
                        <Link to='/about' className='header__nav__onglets__onglet'>
                            A Propos
                        </Link>
                    </li>

                </ul>
            </nav>
            
        </header>
    )
}


