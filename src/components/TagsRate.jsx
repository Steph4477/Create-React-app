import { useParams } from 'react-router-dom';
import GenerateStars from "./GenerateStars"

export default function TagsRate({ data }) {
    const { id } = useParams();
    const item = data.find((item) => item.id === id);
    const yellowStars = (item.rating);

    if (!item) {
        return <div>Produit non trouvé</div>;
    }

    return (

        <section className="container-TR">
            <div className="container-TR_tags">
                {item.tags.map((tag) => (
                    <div className="container-TR_tags_item" key={tag}>
                        {tag}
                    </div>
                ))}
            </div>
            <div className="container-TR_rates">
                {GenerateStars(yellowStars)}

            </div>
        </section>
    )
}
