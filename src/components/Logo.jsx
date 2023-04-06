import K from '../assets/logo/K.svg';
import house from '../assets/logo/house.svg';
import S from '../assets/logo/S.svg';
import A from '../assets/logo/A.svg';
import { Link } from 'react-router-dom';

export default function Logo() {

  return (
    
    <div className='logo-spinner'>     
      <div className='logo_spinner_letter'>
        
        <Link to='/'>
          <img src={K} alt='Lettre K' className='logo_spinner_letter_k' />
          <img src={house} alt='Dessin de maison' className='logo_spinner_letter_maison' />
          <img src={S} alt='Lettre S' className='logo_spinner_letter_s' />
          <img src={A} alt='Lettre A' className='logo_spinner_letter_a' />
        </Link>
      
      </div>
    </div>
  )
}
