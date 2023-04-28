import React from 'react';
import { Link } from 'react-router-dom';
import './carousel.css';
import manhiking from '../../../assets/manhiking.webp';
import biblestudy3 from '../../../assets/biblestudy3.jpeg';
import activities from "../../../assets/activities2.jpeg";
import triumph from '../../../assets/logo.001.beige.PNG';
import triumphFB from '../../../assets/triumph-fb.png';
import triumphIG from '../../../assets/triumphIG.png';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 10000,
    // Additional settings as needed
  };

export default function Navbar() {

    

    return(
    <>
        <div class="hotdog">
            <header class="header1">
                {/* <div className='imageContainer'> */}
                    <img className="triumphLogo" src={triumph} alt='tri'/>
                {/* </div> */}
            </header>
            
            <nav class="navbar navbar-expand-lg bg-body-tertiary">
                <div class="container-fluid">
                    {/* <a class="navbar-brand" href="#">Navbar</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button> */}
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#about">About Us</a>
                            </li>
                            {/* <li class="nav-item">
                                <a class="nav-link" href="#">Bulletin</a>
                            </li> */}
                            <li class="nav-item">
                                <a class="nav-link" href="#leaders">Leadership</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#requests">Prayer Requests</a>
                            </li>
                            {/* <li class="nav-item">
                                <a class="nav-link disabled">Disabled</a>
                            </li> */}
                        </ul>
                    </div>
                </div>
            </nav>
            

            <div className="announcement">
                <div className='carousel-container'>
                    <Slider {...settings}>
                        {/* Render your carousel slides here */}
                        <div className='slide1'>
                            
                            <img className="carimage" src={biblestudy3} alt='example1'/>
                            
                            <div className='slide-desc'>
                                <h2>Bible Studies</h2>
                                <p>Bible studies are held every friday at 7pm. </p>
                            </div>
                            
                        </div>

                        <div className='slide1'>
                            <img className="carimage" src={activities} alt='example1'/>
                            <div className='slide-desc'>
                                <h2>Activities</h2>
                                <p>Join us ice skating this weekend 4/23/23 at skate king! </p>
                            </div>
                        </div>

                        <div className='slide1'>
                            <img className="carimage" src={triumphIG} alt='example1'/>
                            <div className='slide-desc'>
                                <h2>Follow us!</h2>
                                <p> Follow us on Instagram and Facebook to stay up to date on church activties and connect with other members </p>
                            </div>
                        </div>

                        <div className='slide1'>
                            <img class="carimage" src={manhiking} alt='example1'/>
                            <div className='slide-desc'>
                                <h2>Bible Studies</h2>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet sed error fuga ex? Aspernatur deserunt accusamus, eveniet .</p>
                            </div>
                        </div>
                        {/* Add more slides as needed */}
                    </Slider>
                </div>

                <div class="announcement-desc">
                    <div class="announcement-container1">
                        <h2>Verse of the week</h2>
                        <p>"I can do all things thru christ who stregthens me" -Philippians 4:13</p>
                    </div>
                </div>
            </div>
        </div>
    </>
    )
}