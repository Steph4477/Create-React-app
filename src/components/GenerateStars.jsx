import starPink from '../assets/stars.svg'
import starGray from '../assets/stars_empty.svg'

export default function GenerateStars(rating) {
  const stars = []
  
  for (let i = 0; i < 5; i++) {
    const dataItem = i < rating ? starPink : starGray
    stars.push(
      <img 
        key={`star-${i}`}
        src={dataItem}
        className='container-TR_rates_icone'
        alt='icone étoile'
        title='icone étoile'
      />
    )
  }
  
  return stars
}