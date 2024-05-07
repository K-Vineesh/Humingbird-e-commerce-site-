import React, { useState, useEffect } from 'react';
import './navbar.css'; 
import { FaBars, FaUser, FaSearch, FaHeart, FaShoppingCart } from 'react-icons/fa'; 
import logo from './logo.jpg'; 

function Navbar() {
  const [isNavbarFixed, setIsNavbarFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) { // Change 200 to your desired scroll distance
        setIsNavbarFixed(true);
      } else {
        setIsNavbarFixed(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={isNavbarFixed ? 'navbar fixed' : 'navbar'}>
      <div className="navbar-left">
        <FaBars className="navbar-icon" />
      </div>
      <div>
        <a href="/" className="navbar-logo navbar-center">
          <img src={logo} alt="Logo" className="logo-image" /> 
        </a>
      </div>
      <div className="navbar-right">
        <ul className="navbar-links">
          <li><a href="/login"><FaUser className="navbar-icon" /></a></li>
          <li><a href="/search"><FaSearch className="navbar-icon" /></a></li>
          <li><a href="/favorites"><FaHeart className="navbar-icon" /></a></li>
          <li><a href="/cart"><FaShoppingCart className="navbar-icon" /></a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
