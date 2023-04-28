import Error from '../pages/Error';

export default function Tags({ item }) {

    if (!item) {
        return (
          <Error />
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
