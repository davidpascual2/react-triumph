import React from 'react';
import triumphGroup from '../../../assets/triumph-group.jpg'
import "./about.css"

export default function About() {
  return (
    <>
        <div class="about">
            <h2>About Triumph</h2>
            
            {/* <!-- <div class="photo-container"> --> */}
                <img className="triumph-pic" src={triumphGroup}/>
            {/* <!-- </div> --> */}
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus id ratione aspernatur aliquid! A consequatur excepturi deserunt est omnis placeat veniam autem illo quam vitae,
               maxime magnam repellendus, quasi esse! Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates sit aut, veritatis quos hic a asperiores molestias rem deleniti earum.
                Tempore suscipit est consectetur veniam atque eligendi exercitationem quam numquam.</p>
            
        </div>
    </>
  )
}
