import { useNavigate } from 'react-router-dom';
import arrow from '../assets/arrowCaroselPng.png';
import { useState } from 'react';

export default function Carousel({ item }) {
    const navigate = useNavigate()

    const [index, setIndex] = useState(0)

    function imageNext() {
        setIndex((index) =>
            index === item.pictures.length - 1 ? 0 : index + 1
        )
    }

    function imageAfter() {
        setIndex((index) =>
            index === 0 ? item.pictures.length - 1 : index - 1
        )
    }

    if (!item) {
        return (
            navigate('/404')
        )
    }

    return (
        <div className="carousel">
            <div className="carousel_item">
                <div className="carousel_item_picture">
                    <img src={item.pictures[index]} key={index} alt="Photographie du logement" />

                    <div className="image-overlay">
                        {`${index + 1}/${item.pictures.length}`}
                    </div>

                    {item.pictures.length > 1 && (
                        <div>

                            <button className="carousel_item_picture_button_G" onClick={imageAfter}>
                                <img src={arrow} alt="photographie précédente" />
                            </button>

                            <button className="carousel_item_picture_button_D" onClick={imageNext}>
                                <img src={arrow} alt="photographie suivante" />
                            </button>

                        </div>
                    )}

                </div>
            </div>
        </div>
    )
}
