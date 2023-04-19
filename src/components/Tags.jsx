import { useNavigate } from 'react-router-dom';

export default function Tags({ item }) {
    const navigate = useNavigate()

    if (!item) {
        return (
            navigate('/404')
        )
    }

    return (

        <div className='container_identity_item-tag'>
            {item.tags && item.tags.map((tag, index) => (
                <div className='container_identity_item-tag_item' key={index} >
                    <p>{tag}</p>
                </div>
            ))}
        </div>

    )
}
