import React from 'react';
import "./navbar2.css"
import triumph from '../../assets/logo.001.beige.PNG';

export default function Navbar2() {
  return (
    <>
        <div className="navbarContainer2">
            <header class="header1">
                        <img className="triumphLogo" src={triumph} alt='tri'/>
            </header>
        
            <nav class="navbar navbar-expand-lg bg-body-tertiary">
                <div class="container-fluid">
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#about">About Us</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#leaders">Leadership</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#requests">Prayer Requests</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    </>
  )
}
