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
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus id ratione aspernatur aliquid! A consequatur excepturi deserunt est omnis placeat veniam autem illo quam vitae, maxime magnam repellendus, quasi esse!</p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium eum cumque facere eos laborum natus, illum maxime, ut at, atque quas voluptate dolorum corrupti. Earum error esse unde vero distinctio. Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum sit assumenda, vero temporibus pariatur fugit praesentium, veritatis molestias optio possimus vel similique odit culpa eius obcaecati delectus totam excepturi quis?</p>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed ad molestias rerum, pariatur similique provident unde nisi. Praesentium at nulla accusantium voluptate, animi repellat, aut, repudiandae nesciunt eligendi officiis illum!</p>
        </div>
    </>
  )
}
