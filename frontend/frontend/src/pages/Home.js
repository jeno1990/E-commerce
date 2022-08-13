import Announcment from '../components/Announcment'
import React from 'react'
import Navbar from '../components/Navbar'
import Slider from '../components/Slider'
import Catagories from '../components/Catagories'
import Products from '../components/Products'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'
const Home = () => {
  return (
    <div>
        <Announcment /> 
        <Navbar />
        <Slider />
        <Catagories />
        <Products />
        <Newsletter />
        <Footer />
    </div>
  )
}

export default Home