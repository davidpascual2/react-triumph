import React from 'react';
import Navbar from '../../components/container1/navbar/Navbar';
import About from '../../components/container2/about/About';
import Leaders from '../../components/container3/leaders/Leaders';
import Requests from '../../components/container4/requests/Requests';
import './home.css'

export default function 

() {
  return (
    <>
        <div className='home'>
            <Navbar/>
            <About/>
            <Leaders/>
            <Requests/>
        </div>
    </>
  )
}
