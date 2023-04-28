import React from 'react';
import "./navbar2.css"
import triumph from '../../assets/logo.001.beige.PNG';
import { Link, useNavigate } from 'react-router-dom';



export default function Navbar2() {
  return (
    <>
        {/* <div className="navbarContainer2">
            <header className="header1">
                        <img className="triumphLogo" src={triumph} alt='tri'/>
            </header>
        
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                
                                <Link to='/' className="nav-link active" aria-current="page" href="#">Home</Link>
                            </li>
                            <li class="nav-item">
                                
                                <Link to='/about' className="nav-link" >About Us</Link>
                            </li>
                            <li class="nav-item">
                                
                                <Link to='/leaders' className="nav-link" >Leadership</Link>
                            </li>
                            <li class="nav-item">
                                
                                <Link to='/requests' className="nav-link" >Prayer Requests</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div> */}

        <div className="fluidContainerNav container-fluid">
            <header className="header1">
                        <img className="triumphLogo" src={triumph} alt='tri'/>
            </header>
        
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                {/* <a class="nav-link active" aria-current="page" href="#">Home</a> */}
                                <Link to='/' className="nav-link active" aria-current="page" href="#">Home</Link>
                            </li>
                            <li className="nav-item">
                                {/* <a class="nav-link" href="#about">About Us</a> */}
                                <Link to='/about' className="nav-link" >About Us</Link>
                            </li>
                            <li className="nav-item">
                                {/* <a class="nav-link" href="#leaders">Leadership</a> */}
                                <Link to='/leaders' className="nav-link" >Leadership</Link>
                            </li>
                            <li className="nav-item">
                                {/* <a class="nav-link" href="#requests">Prayer Requests</a> */}
                                <Link to='/requests' className="nav-link" >Prayer Requests</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    </>
  )
}
