import { useParams } from 'react-router-dom';

export default function Carousel({ data }) {
  const { id } = useParams();
  const item = data.find((item) => item.id === id);

  if (!item) {
    return <div>Produit non trouvé</div>;
  }

  return (
    <div className="carousel_item">
      {item.pictures.map((picture, index) => (
        <div className="carousel_item_picture" key={index}>
          <img src={picture} key={picture} alt="Photographie du logement" />
        </div>
      ))}
    </div>
  )
}
