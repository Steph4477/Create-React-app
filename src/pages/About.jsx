import Banner from '../components/Banner'
import bannerImage from '../assets/kalen-emsley-Bkci_8qcdvQ-unsplash 2.png'
import Collapse from '../components/Collapse'
const comment = "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."

export default function About() {

    return (

        <main>

            <div className='about_banner'>
                <Banner image={bannerImage} showText={false} />
            </div>

            <div className='about_collapse'>

                <div className='about_collapse-1'>
                    <Collapse title='Fiabilité' content={comment} />
                </div>

                <div className='about_collapse-2'>
                    <Collapse title='Respect' content={comment} />
                </div>

                <div className='about_collapse-3'>
                    <Collapse title='Service' content={comment} />
                </div>

                <div className='about_collapse-4'>
                    <Collapse title='Sécurité' content={comment} />
                </div>

            </div>

        </main>
    )
}
