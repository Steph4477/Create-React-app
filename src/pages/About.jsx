import React, { useState, useEffect } from 'react';
import Banner from '../components/Banner';
import bannerImage from '../assets/about.png';
import Collapse from '../components/Collapse';

export default function About() {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('./about.json')
            .then(response => response.json())
            .then(jsonData => setData(jsonData))
            .catch(error => console.error('Erreur : ', error))
    }, []);

    return (
        <main>

            <Banner image={bannerImage} showText={false} />

            <section className='about'>
                {data.map(item => (
                    <div className='about_collapse' key={item.id}>


                        <Collapse title={item.title} content={item.content} />


                    </div>
                ))}
            </section>

        </main>
    );
}
