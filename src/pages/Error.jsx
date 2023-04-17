import { Link } from 'react-router-dom'

export default function Error() {

    return (
        <section className='error'>
            
            <div className='error_number'>
                404
            </div>
            
            <div className='error_msg'>
                Oups! La page que vous demandez n'existe pas.
            </div>
            
            <Link className="error_linkHome"
                to="/"
               >Retour à la page d'accueil
            </Link>

        </section>


    )

}