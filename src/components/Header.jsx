import Logo from '../assets/logo.svg'
import { Link } from 'react-router-dom'

export default function Header() {

    return (

        <header className='header'>
            
            <Link to='/'>
                <img className='header_logo' src={Logo} alt="logo de l'agence Kasa" />
            </Link>

            <nav className='header_nav'>
                <ul className='header_nav_onglets'>

                    <li>
                        <Link to='/' className='header_nav_onglets_onglet'>
                            Accueil
                        </Link>
                    </li>

                    <li>
                        <Link to='/about' className='header_nav_onglets_onglet'>
                            A Propos
                        </Link>
                    </li>

                </ul>
            </nav>
            
        </header>
    )
}


