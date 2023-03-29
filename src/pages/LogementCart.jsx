import { useParams } from 'react-router-dom';
import logements from '../datas/logements.json';

export default function LogementCart() {
    // Récupération de l'identifiant du logement depuis l'URL
    const { id } = useParams();
    // Récupération du logement correspondant à l'identifiant
    const logement = logements.find(l => l.id === id);

    return (
        <div>
            <h2>Logement {id}</h2>
            <img src={logement.cover} alt="" />
        </div>
    );
}