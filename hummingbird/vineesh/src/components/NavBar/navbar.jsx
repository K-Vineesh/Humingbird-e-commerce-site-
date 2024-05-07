import React, { useState, useEffect } from 'react';
import './navbar.css'; 
import { FaBars, FaTimes, FaUser, FaSearch, FaHeart, FaShoppingCart } from 'react-icons/fa'; 
import logo from './logo.jpg'; 

function Navbar() {
  const [isNavbarFixed, setIsNavbarFixed] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

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

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <>
      <nav className={isNavbarFixed ? 'navbar fixed' : 'navbar'} style={{ backgroundColor: 'black', display: "flex", justifyContent: 'space-between' }}> 
        <div className="navbar-left">
          <FaBars className="navbar-icon" onClick={toggleSidebar} />
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
      {sidebarOpen && (
        <div className="sidebar-overlay" onClick={toggleSidebar}>
          <div className="sidebar" onClick={(e) => e.stopPropagation()}>
            <FaTimes className="exit-icon" onClick={toggleSidebar} />
            <div className="login-section">
              <FaUser className="login-icon" />
              <span>LOG IN</span>
            </div>
            <ul className="sidebar-links">
              <li className="section-heading">NEW ARRIVALS</li>
              <li>BEST SELLING</li>
              <li>SHOP</li>
              <li>TRACK ORDER</li>
              <li>PLACE A RETURN/EXHCHANGE REQUEST </li>
              <li>CUSTOMER SUPPORT</li>
              <li>VISIT STORE</li>
              <li>RELOVE</li>
            </ul>
          </div>
        </div>
      )}
    </>
  );
}

export default Navbar;
