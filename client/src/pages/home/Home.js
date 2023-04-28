import React from 'react';
import Navbar from '../../components/container1/carousel/Carousel';
import About from '../../components/container2/about/About';
import Leaders from '../../components/container3/leaders/Leaders';
import Requests from '../../components/container4/requests/Requests';
import Footer from '../../components/footer/Footer';
import './home.css'
// import Carousel from '../../components/Navbar2/Navbar2';
import Navbar2 from '../../components/navbar/Navbar2';
import Carousel from '../../components/container1/carousel/Carousel'

export default function 

() {
  return (
    <>
        <div className='home'>
            {/* <Navbar2 /> */}
            <Carousel />
            <About/>
            <Leaders/>
            <Requests/>
            <Footer/>
        </div>
    </>
  )
}
