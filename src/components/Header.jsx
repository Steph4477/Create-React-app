import Logo from '../assets/logo.svg'
import Nav from './Nav'
import { Link } from 'react-router-dom'

export default function Header() {
    
    return (
        
        <header className='header'>
            <Link to='/'>
                <img className='header__logo' src={Logo} alt="logo de l'agence Kasa" />
            </Link>

            <Nav className='header__nav' />               
        </header>
    )
}


