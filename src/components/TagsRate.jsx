import { useParams } from 'react-router-dom';
import GenerateStars from './GenerateStars'

export default function TagsRate({ data }) {
    const { id } = useParams()
    const item = data.find((item) => item.id === id)
    

    if (!item) {
        return <div>Produit non trouvé</div>
    }

    return (

        <section className='container-TR'>
            
            <div className='container-TR_tags'>
                {item.tags.map((tag, index) => (
                    <div className='container-TR_tags_item' key={index} >
                        <p>{tag}</p>
                    </div>
                ))}
            </div>
            
            <div className='container-TR_rates' >
                {GenerateStars (item.rating)}
            </div>
        
        </section>
    )
}
