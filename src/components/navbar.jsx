import React from 'react';
import './Navbar.css';
//import logo from '../../assets/GEEKZ.svg';

const navbar = () => {
  return (
    <nav>
        <img src={logo} alt=""/>
        <ul>
            <li>HOME</li>
            <li>ABOUT US</li>
            <li>PORTFOLIO</li>
            <li>SERVICES</li>
            <li>CONTACT</li>
        </ul>
    </nav>
  );
}

export default navbar
