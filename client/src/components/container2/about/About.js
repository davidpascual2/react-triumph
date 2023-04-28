import React from 'react';
import triumphGroup from '../../../assets/triumph-group.jpg'
import "./about.css"
import triumphMap from '../../../assets/triumphMap.png'

// const ScheduleMapStyle = {
//     display: "flex",
//   };

export default function About() {
  return (
    <>
        <div className="about" id='about'>
            <h2>About Triumph</h2>
            
            <div class="photo-container">
                <img className="triumph-pic" src={triumphGroup}/>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus id ratione aspernatur aliquid! A consequatur excepturi deserunt est omnis placeat veniam autem illo quam vitae,
                    maxime magnam repellendus, quasi esse! Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates sit aut, veritatis quos hic a asperiores molestias rem deleniti earum.
                    Tempore suscipit est consectetur veniam atque eligendi exercitationem quam numquam.
                </p>
            </div>

            
            <div className='scheduleMap'>
                <img className='triumphMap' src={triumphMap} alt='map' />
                <div class="schedule-container">
                    <h2>SCHEDULE</h2>
                    <div class="dateDescContainer">
                        <p>Song Worship</p>
                        <p>11:00AM</p>
                    </div>
                    <div class="dateDescContainer">
                        <p>Sabbath School</p>
                        <p>12:00PM</p>
                    </div>
                    <div class="dateDescContainer">
                        <p>Announcements</p>
                        <p>12:40PM</p>
                    </div>
                    <div class="dateDescContainer">
                        <p>Tithes & Offerings</p>
                        <p>12:50PM</p>
                    </div>
                    <div class="dateDescContainer">
                        <p>Song Worship</p>
                        <p>1:00PM</p>
                    </div>
                    <div class="dateDescContainer">
                        <p>Prayer Dynamic</p>
                        <p>1:15PM</p>
                    </div>
                    <div class="dateDescContainer">
                        <p>Sermon</p>
                        <p>1:30PM</p>
                    </div>
                </div>
            </div>
            
        </div>
    </>
  )
}
