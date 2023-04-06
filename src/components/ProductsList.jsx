import React from 'react';
import { Link } from 'react-router-dom';

export default function ProductList({ data }) {
  
  return (
    
    <div className='products'>
      {data.map(item => (
        
        <div className='products_product' key={item.id}>
          <Link to={`/product/${item.id}`}>
            
            <div className='products_product_image'>
              <img src={item.cover} alt='Photographie du logement' />
              
              <div className='products_product_image_titre'>
                <h2>{item.title}</h2>
              </div>

            </div>

          </Link>
        </div> 
             
      ))}
    </div>    
  )
}








