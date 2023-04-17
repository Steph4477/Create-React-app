import React from 'react';
import GenerateStars from './GenerateStars';
import { useNavigate } from 'react-router-dom';

export default function Rate({ item }) {
    const navigate = useNavigate()

    if (!item) {
        return (
            navigate('/404')
        )
    }
    return (
        <div className='container-TR_rate'>
            {GenerateStars(item.rating)}
        </div>
    )
}
