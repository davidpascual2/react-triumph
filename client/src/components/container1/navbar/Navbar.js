import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';
import manhiking from '../../../assets/manhiking.webp';
import mountainImage1 from '../../../assets/mountains-bg.jpg';
import mountainImage2 from '../../../assets/mountains5.jpeg';
import mountainImage3 from '../../../assets/snowy2.jpeg';
import biblestudy2 from '../../../assets/biblestudy2.jpg';
import triumph from '../../../assets/logo.001.beige.PNG';

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
    autoplaySpeed: 3000,
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
            {/* <nav class="navbar navbar-expand-lg">
                <ul class="nav">
                    <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="#">Home</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="#">About Us</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="#">Leadership</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Bulletin</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Contact Us</a>
                    </li>
                     
                </ul>
            </nav> */}
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
                                <a class="nav-link" href="#">About Us</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Bulletin</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Leadership</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Prayer Requests</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link disabled">Disabled</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            

            <div className="announcement">
                <div className='carousel-container'>
                    <Slider {...settings}>
                        {/* Render your carousel slides here */}
                        <div className='slide1'>
                            
                            <img className="carimage" src={biblestudy2} alt='example1'/>
                            
                            <div className='slide-desc'>
                                <h2>Bible Studies</h2>
                                <p>exampel here hello there in there </p>
                            </div>
                            
                        </div>

                        <div className='slide1'>
                            <img className="carimage" src={manhiking} alt='example1'/>
                            <div className='slide-desc'>
                                <h2>Activities</h2>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique dolorum beatae nesciunt perspiciatis doloribus accusantium iusto officiis, Qui. </p>
                            </div>
                        </div>

                        <div className='slide1'>
                            <img className="carimage" src={mountainImage2} alt='example1'/>
                            <div className='slide-desc'>
                                <h2>Follow us!</h2>
                                <p>Lorem ipsum dolor sit amet consectetur m, laudantium voluptatem delectus repellat autem placeat animi adipisci nesciunt, reiciendis, molestias ullam fuga ipsum assumenda mollitia. </p>
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
                        <h2>Announcements</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores quibusdam ea, iste similique, cupiditate in porro corrupti architecto, natus nisi nemo veritatis! Cupiditate assumenda consequuntur quas non? Commodi, nihil exercitationem!</p>
                    </div>
                </div>
            </div>
        </div>
    </>
    )
}