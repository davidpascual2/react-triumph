import React from 'react';
import './leaders.css';
import obed from "../../../assets/obed.jpeg";
import eddie from "../../../assets/eddie.jpeg";
import daisy from "../../../assets/daisy.jpeg";
import trino from "../../../assets/trino.jpeg";

export default function Leaders() {
  return (
    <>
        <div class="leaders">

          <h2>Leaders</h2>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium eum cumque facere eos laborum natus, illum maxime, ut at, atque quas voluptate dolorum corrupti. Earum error esse unde vero distinctio. Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum sit assumenda, vero temporibus pariatur fugit praesentium, veritatis molestias optio possimus vel similique odit culpa eius obcaecati delectus totam excepturi quis?</p>

          <div className='elder'>
            <img className="triumphLogo" src={obed} alt='eld'/>
            <div className='elder-desc'>
              <h2>Obed</h2>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non laborum veritatis eaque veniam aut mollitia facere fugit modi asperiores eveniet eligendi aliquid accusantium amet placeat illo ipsam, corporis pariatur! Cupiditate.</p>
            </div>
          </div>

          <div className='elder'>
            <img className="triumphLogo" src={eddie} alt='eld'/>
            <div className='elder-desc'>
              <h2>Eddie</h2>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor deleniti, eos voluptatum molestiae quas officia, atque nam a neque omnis optio nulla culpa ipsa assumenda voluptate blanditiis velit vel ducimus? </p>
            </div>
          </div>

          <div className='elder'>
            <img className="triumphLogo" src={daisy} alt='eld'/>
            <div className='elder-desc'>
              <h2>Daisy</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa veniam provident aspernatur ea placeat. Culpa soluta ea, atque perspiciatis modi et rerum, sint voluptatibus iusto eos quaerat assumenda esse aliquam!</p>
            </div>
          </div>

          <div className='elder'>
            <img className="triumphLogo" src={trino} alt='led'/>
            <div className='elder-desc'>
              <h2>Trino</h2>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis repudiandae quis id eligendi minima assumenda eum quisquam consequuntur, nobis inventore voluptas ut recusandae adipisci excepturi quidem magnam dolores, a voluptates. </p>
            </div>
          </div>
        </div>
        
    </>
  )
}
