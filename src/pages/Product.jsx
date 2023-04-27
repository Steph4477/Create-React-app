import { useParams } from 'react-router-dom';
import Collapse from '../components/Collapse';
import Tags from '../components/Tags';
import Rate from '../components/Rate';
import Carousel from '../components/Carousel';
import Error from './Error';

export default function ProductCart({ data }) {
  const { id } = useParams()
  const item = data.find((item) => item.id === id)

  if (!item) {
    return (
      <Error />
    )
  }

  return (

    <main className='container'>

      <Carousel item={item} />

      <section className='container_identity'>

        <div className='container_identity_item'>

          <div className='container_identity_item_title'>
            <h1 className='container_identity_item_title_h1'>{item.title}</h1>
            <address className='container_identity_item_title_address'>{item.location}</address>
          </div>

          <Tags item={item} />

        </div>

        <div className='container_identity_profil'>

          <div className='container_identity_profil_name'>
            
            <div className='container_identity_profil_name_N'>
              {item.host.name.split(' ').map((name, index) => (
                <div key={index}>
                  {name}
                </div>
              ))}
            </div>

            <div className='container_identity_profil_name_I'>
              <img src={item.host.picture} alt={item.host.name} />
            </div>

          </div>

          <div className='container_identity_profil-rate'>
            <Rate item={item} />
          </div>

        </div>

      </section>

      <section className='container_collapse'>

        <div className='container_collapse_item'>
          <Collapse title='Description' content={item.description} />
        </div>

        <div className='container_collapse_item'>
          <Collapse title='Equipements' content={item.equipments} />
        </div>

      </section>

    </main>

  )

}
