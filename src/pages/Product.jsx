import { useParams } from "react-router-dom";
import Carousel from "../components/Carousel";
import Collapse from "../components/Collapse";
import TagsRate from "../components/TagsRate";

export default function Logement({ data }) {
  const { id } = useParams();
  const logement = data.find((logement) => logement.id === id);

  if (!logement) {
    return <div>Produit non trouvé</div>;
  }

  return (
    <main className="container">
      <div className="container_carousel">
        <Carousel data={data} />
      </div>
      <section className="container_identity">
        <div className="container_identity_item">
          <div className="container_identity_item_title">
            <h1 className="container_identity_item_title_h1">{logement.title}</h1>
            <address className="container_identity_item_title_address">{logement.location}</address>
          </div>

          <div className="container_identity_item_profil">
            <div className="container_identity_item_profil_name">
              {logement.host.name.split(" ").map((name, index) => (
                <div key={index}>{name}</div>
              ))}
            </div>
            <div className="container_identity_item_profil_picture">
                <img src={logement.host.picture} alt={logement.host.name} />     
            </div>
          </div>
        </div>
      </section>
      <TagsRate data={data} />

      <section className="container_collapse">
        <div className="container_collapse_item">
          <Collapse title="Description" content={logement.description} />
        </div>
        <div className="container_collapse_item">
          <Collapse title="Equipements" content={logement.equipments} />
        </div>
      </section>
    </main>
  );
}
