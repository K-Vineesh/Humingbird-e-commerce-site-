import React, { useState, useEffect } from 'react';
import './navbar.css'; 
import { FaBars, FaTimes, FaUser, FaSearch, FaHeart, FaShoppingCart, FaInstagram, FaFacebook, FaYoutube, FaPinterest,FaTwitter, FaLinkedin } from 'react-icons/fa'; // Import the new icons
import logo from './logo.jpg'; 

function Navbar() {
  const [isNavbarFixed, setIsNavbarFixed] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isLoginFixed, setIsLoginFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setIsNavbarFixed(true);
      } else {
        setIsNavbarFixed(false);
      }

      const sidebar = document.querySelector('.sidebar');
      const loginSection = document.querySelector('.login-section');

      if (sidebar && loginSection) {
        const sidebarRect = sidebar.getBoundingClientRect();
        const loginSectionRect = loginSection.getBoundingClientRect();

        if (loginSectionRect.top <= 0) {
          setIsLoginFixed(true);
        } else {
          setIsLoginFixed(false);
        }
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
            <div className="sidebar-header">
              <FaTimes className="exit-icon" onClick={toggleSidebar} />
              <div className={isLoginFixed ? 'login-section fixed' : 'login-section'}>
                <FaUser className="login-icon" />
                <span>LOG IN</span>
              </div>
            </div>
            <ul className="sidebar-links">
              <li className="section-heading">NEW ARRIVALS</li>
              <li>BEST SELLING</li>
              <li>SHOP</li>
              <li>TRACK ORDER</li>
              <li>PLACE A RETURN/EXCHANGE REQUEST </li>
              <li>CUSTOMER SUPPORT</li>
              <li>VISIT STORE</li>
              <li>RELOVE</li>
            </ul>
            <div className="social-icons">
              <FaInstagram className="social-icon" />
              <FaFacebook className="social-icon" />
              <FaYoutube className="social-icon" />
              <FaPinterest className="social-icon" />
              <FaLinkedin className="social-icon" />
              <FaTwitter className='social-icon'/>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Navbar;
