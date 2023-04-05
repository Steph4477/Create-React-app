import React from 'react';
import Banner from '../components/Banner';
import ProductsList from '../components/ProductsList';
import bannerImage from '../assets/banner.png'

export default function Home({ data }) {
return (
<main>
<Banner image={bannerImage} showText={true} />

<ProductsList data={data} />

</main>
);
}

