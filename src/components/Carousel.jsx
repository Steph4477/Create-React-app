import arrow from '../assets/arrowCaroselPng.png';
import { useParams } from 'react-router-dom';
import { useState } from 'react';

export default function Carousel({ data }) {
    const { id } = useParams()
    const item = data.find((dataItem) => dataItem.id === id)
    const [index, setIndex] = useState(0) // Image index Initialized to 0 ;

    function imageNext() { 
        setIndex((index) => // use setIndex for modify index use statue ;
            // if index is last of the list go to start, else image next ;
            index === item.pictures.length - 1 ? 0 : index + 1 
        )
    }

    function imageAfter() { 
        setIndex((index) => // use setIndex for modify index use statue ;           
            // if index is first of the list, go to end, else before image ;
            index === 0 ? item.pictures.length - 1 : index - 1 
        )
    }

    if (!item) { 
        return <div>Produit non trouvé</div>
    }

    return (
        
        <div className="container_carousel">
            
            <div className="container_carousel_item">
                
                <div className="container_carousel_item_picture">
                    
                    <img src={item.pictures[index]} key={index} alt="Photographie du logement"/>
                    {item.pictures.length > 1 && ( // if image > 1 in index displays the buttons ;
                        
                        <div>
                            <button className="container_carousel_item_picture_button_G" onClick={imageAfter}>                           
                                <img src={arrow} alt="photographie précédente"/>
                            </button>
                            
                            <button className="container_carousel_item_picture_button_D" onClick={imageNext}>
                                <img src={arrow} alt="photographie suivante"/>
                            </button>
                        </div>

                    )}

                </div>

            </div>
            
        </div>
    )
}

