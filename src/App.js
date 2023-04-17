import './styles/index.scss'
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Product from './pages/Product';
import About from './pages/About';
import Error from './pages/Error';
import Footer from './components/Footer';

export default function App() {
  const [data, setData] = useState([]);

  useEffect(() => {  
    fetch('./logements.json')
      .then(response => {
        return response.json()
      })
      .then(jsonData => {
        setData(jsonData)
      })
      .catch(error => console.error('Erreur : ', error))    
  }, [])

  return (
    <div className='App'>
      <Header />
      <Routes>
        <Route path='/' element={<Home data={data} />} />
        <Route path='/product/:id' element={<Product data={data}/>} />
        <Route path='/about' element={<About />} />
        <Route path='*' element={<Error />} />
      </Routes>
      <Footer />
    </div>
  )
}

