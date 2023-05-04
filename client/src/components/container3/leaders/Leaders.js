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
        <div className="fluidContainerLeaders container-sm" id='leaders'>

          <h2>Leaders</h2>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium eum cumque facere eos laborum natus, illum maxime, ut at, atque quas voluptate dolorum corrupti. Earum error esse unde vero distinctio. Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>

          <div className='pastor'>
            <img className="leaderImg" src={kenneth} alt='eld'/>
            <div className='elder-desc'>
              <h2>Kenneth Martinez</h2>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. adipisicing elit. Laudantium eum cumque facere eos laborum natus.</p>
            </div>
          </div>

          <div className="container">
            <div className='row'>

              <div className='elderz col-xxl-3 col-md-6 col-12'>
                <img className="leaderImg rounded" src={obed} alt='eld'/>
                <div className='elder-desc'>
                  <h2>Obed</h2>
                  <p>Lorem ipsum.</p>
                </div>
              </div>

              <div className='elderz col-xxl-3 col-md-6 col-12'>
                <img className="leaderImg rounded" src={eddie} alt='eld'/>
                <div className='elder-desc'>
                  <h2>Eddie</h2>
                  <p>Lorem, ipsum dolor.  </p>
                </div>
              </div>

              <div className='elderz col-xxl-3 col-md-6 col-12'>
                <img className="leaderImg rounded" src={daisy} alt='eld'/>
                <div className='elder-desc'>
                  <h2>Daisy</h2>
                  <p>Lorem ipsum dolor</p>
                </div>
              </div>

               {/* col-12 means if small screen, then make elder container take up entire screen size and half if its a medium screen (2 per row) */}
              <div className='elderz col-xxl-3 col-md-6 col-12'>
                <img className="leaderImg rounded" src={trino} alt='led'/>
                <div className='elder-desc'>
                  <h2>Trino</h2>
                  <p>Lorem ipsum dolor.  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <div className="leaders" id='leaders'>

          <h2>Leaders</h2>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium eum cumque facere eos laborum natus, illum maxime, ut at, atque quas voluptate dolorum corrupti. Earum error esse unde vero distinctio. Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>

          <div className='pastor'>
            <img className="triumphLogo" src={kenneth} alt='eld'/>
            <div className='elder-desc'>
              <h2>kenneth Martinez</h2>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. .</p>
            </div>
          </div>

          <div className="container">
            <div className='row'>

              <div className='elderz col-md-6 col-12'>
                <img className="triumphLogo rounded" src={obed} alt='eld'/>
                <div className='elder-desc'>
                  <h2>Obed</h2>
                  <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. .</p>
                </div>
              </div>

              <div className='elderz col-md-6 col-12'>
                <img className="triumphLogo rounded" src={eddie} alt='eld'/>
                <div className='elder-desc'>
                  <h2>Eddie</h2>
                  <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.  </p>
                </div>
              </div>

              <div className='elderz col-md-6 col-12'>
                <img className="triumphLogo rounded" src={daisy} alt='eld'/>
                <div className='elder-desc'>
                  <h2>Daisy</h2>
                  <p>Lorem ipsum dolor Ipsa veniam provident et rerum, sint voluptatibus iusto eos quaerat assumenda esse aliquam!</p>
                </div>
              </div>

              <div className='elderz col-md-6 col-12'>
                <img className="triumphLogo rounded" src={trino} alt='led'/>
                <div className='elder-desc'>
                  <h2>Trino</h2>
                  <p>Lorem ipsum dolor,  inventore voluptas  </p>
                </div>
              </div>
            </div>
          </div>
        </div> */}

        {/* <div className='elder-container'>

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
          </div> */}
        
    </>
  )
}
