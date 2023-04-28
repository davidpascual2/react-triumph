import React from 'react';
import './leaders.css';
import obed from "../../../assets/obed.jpeg";
import eddie from "../../../assets/eddie.jpeg";
import daisy from "../../../assets/daisy.jpeg";
import trino from "../../../assets/trino.jpeg";
import kenneth from '../../../assets/square.jpg';

export default function Leaders() {
  return (
    <>
        <div class="leaders" id='leaders'>

          <h2>Leaders</h2>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium eum cumque facere eos laborum natus, illum maxime, ut at, atque quas voluptate dolorum corrupti. Earum error esse unde vero distinctio. Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>

          <div className='elder-container'>
            <div className='pastor'>
              <img className="triumphLogo" src={kenneth} alt='eld'/>
              <div className='elder-desc'>
                <h2>kenneth Martinez</h2>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. .</p>
              </div>
            </div>

            <div className='elder'>
              <img className="triumphLogo" src={obed} alt='eld'/>
              <div className='elder-desc'>
                <h2>Obed</h2>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. .</p>
              </div>
            </div>

            <div className='elder'>
              <img className="triumphLogo" src={eddie} alt='eld'/>
              <div className='elder-desc'>
                <h2>Eddie</h2>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.  </p>
              </div>
            </div>

            <div className='elder'>
              <img className="triumphLogo" src={daisy} alt='eld'/>
              <div className='elder-desc'>
                <h2>Daisy</h2>
                <p>Lorem ipsum dolor Ipsa veniam provident et rerum, sint voluptatibus iusto eos quaerat assumenda esse aliquam!</p>
              </div>
            </div>

            <div className='elder'>
              <img className="triumphLogo" src={trino} alt='led'/>
              <div className='elder-desc'>
                <h2>Trino</h2>
                <p>Lorem ipsum dolor,  inventore voluptas  </p>
              </div>
            </div>
          </div>
        </div>
        
    </>
  )
}
