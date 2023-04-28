import React from 'react';
import { Link } from 'react-router-dom';
import './carousel.css';
import manhiking from '../../../assets/manhiking.webp';
import biblestudy3 from '../../../assets/biblestudy3.jpeg';
import activities from "../../../assets/activities2.jpeg";
import triumph from '../../../assets/logo.001.beige.PNG';
import triumphFB from '../../../assets/triumph-fb.png';
import triumphIG from '../../../assets/triumphIG.png';
import triumphGroup from '../../../assets/triumph-group.jpg'
import triumphMap from '../../../assets/triumphMap.png'
import worship from '../../../assets/worship.jpg';

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

const verse = '"I can do all things through Christ who strengthens me" Philippians 4:13';

const carouselActivities = "Join us ice skating this weekend 4/23/23 at skate king!";

const scheduleTimes = {
    songworship: "11:45AM",
    sabbathschool: "12:00PM",
    announcements: "12:40PM",
    offering: "12:50PM",
    songworship2: "1:00PM",
    prayer: "1:15PM",
    sermon: "1:30PM"
}
//=================================

export default function Navbar() {

    return(
    <>
        {/* <div class="hotdog">
            <div className="announcement">
                <div className='carousel-container'>
                    <Slider {...settings}>
                        
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
                                <p>{carouselActivities}</p>
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
                       
                    </Slider>
                </div>

                <div class="announcement-desc">
                    <div class="announcement-container1">
                        <h2>Verse of the week</h2>
                        <p>{verse}</p>
                    </div>
                </div>
            </div>
        </div> */}



        <div class="fluidContainerCar container-fluid">
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
                                <p>{carouselActivities}</p>
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
                        <p>{verse}</p>
                    </div>
                </div>
            </div>
        </div>


        {/* about triumph */}

        {/* <div className="aboutTriumph" id='about'>
            
            <div class="whoWeAreContainer">
                <div className="whoWeAre">
                    <h2>Who we are</h2>
                    <p>Lorem, ipsum dolor sit amet consectetur aliquid! A consequatur excepturi deserunt est omnis placeat veniam autem illo quam vitae,
                        maxime magnam repellendus.
                    </p>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus id ratione aspernatur aliquid! A consequatur excepturi deserunt est omnis placeat veniam autem illo quam vitae,
                        maxime magnam repellendus, quasi esse! Lorem ipsum.
                    </p>
                </div>
                <img className="triumph-pic2" src={triumphGroup}/>
            </div>

            
            <div className='scheduleMap2'>
                
                <div class="schedule-container2">
                    <h2>Worship with us</h2>
                    <h5>Saturday schedule</h5>
                    
                    <div class="dateDescContainer2">
                        <p>{scheduleTimes.sabbathschool}</p>
                        <p>Sabbath School</p>
                    </div>
                    <div class="dateDescContainer2">
                        <p>{scheduleTimes.announcements}</p>
                        <p>Announcements</p>
                    </div>
                    
                    <div class="dateDescContainer2">
                        <p>{scheduleTimes.songworship2}</p>
                        <p>Song Worship</p>
                    </div>
                    
                    <div class="dateDescContainer2">
                        <p>{scheduleTimes.sermon}</p>
                        <p>Sermon</p>
                    </div>
                </div>
                
                <img className='worshipImg' src={worship} alt="" />
            </div>
        </div> */}

        <div className="fluidContainerAbout container-fluid" id='about'>
            
            <div class="whoWeAreContainer container-fluid">
                <div className="whoWeAre">
                    <h2>Who we are</h2>
                    <p>Lorem, ipsum dolor sit amet consectetur aliquid! A consequatur excepturi deserunt est omnis placeat veniam autem illo quam vitae,
                        maxime magnam repellendus.
                    </p>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus id ratione aspernatur aliquid! A consequatur excepturi deserunt est omnis placeat veniam autem illo quam vitae,
                        maxime magnam repellendus, quasi esse! Lorem ipsum.
                    </p>
                </div>
                <img className="triumph-pic2" src={triumphGroup}/>
            </div>

            
            <div className='scheduleMap2 container-fluid'>
                
                <div class="schedule-container2">
                    <h2>Worship with us</h2>
                    <h5>Saturday schedule</h5>
                    
                    <div class="dateDescContainer2">
                        <p>{scheduleTimes.sabbathschool}</p>
                        <p>Sabbath School</p>
                    </div>
                    <div class="dateDescContainer2">
                        <p>{scheduleTimes.announcements}</p>
                        <p>Announcements</p>
                    </div>
                    
                    <div class="dateDescContainer2">
                        <p>{scheduleTimes.songworship2}</p>
                        <p>Song Worship</p>
                    </div>
                    
                    <div class="dateDescContainer2">
                        <p>{scheduleTimes.sermon}</p>
                        <p>Sermon</p>
                    </div>
                </div>
                
                <img className='worshipImg' src={worship} alt="" />
            </div>
        </div>
    </>
    )
}
