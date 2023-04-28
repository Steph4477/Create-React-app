import React from 'react';
import GenerateStars from './GenerateStars';
import Error from '../pages/Error';

export default function Rate({ item }) {
    
    if (!item) {
        return (
          <Error />
        )
    }

    return (
        <div className='container-TR_rate'>
            {GenerateStars(item.rating)}
        </div>
    )
}
