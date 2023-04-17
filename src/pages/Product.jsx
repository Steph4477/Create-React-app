import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import Collapse from '../components/Collapse';
import Tags from '../components/Tags';
import Rate from '../components/Rate';
import Carousel from '../components/Carousel';

export default function ProductCart ({data}) {
  const navigate = useNavigate()
  const { id } = useParams()
  const item = data.find((item) => item.id === id)

  if (!item) {
    return (
      navigate('./404')
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

          <div className='container_identity_item_profil'>
            
            <div className='container_identity_item_profil_name'>
              {item.host.name.split(' ').map((name, index) => (
                <div key={index}>{name}</div>
              ))}
            </div>

            <div className='container_identity_item_profil_picture'>
                <img src={item.host.picture} alt={item.host.name} />     
            </div>

          </div>

        </div>

      </section>
      <section className='container-TR'>
        <Tags item={item} />
        
        <Rate item={item} />
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
