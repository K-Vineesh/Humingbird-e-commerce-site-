import React, { useState, useEffect } from 'react';
import './navbar.css'; 
import { FiMenu, FiX, FiUser, FiSearch, FiHeart, FiShoppingCart, FiInstagram, FiFacebook, FiYoutube } from 'react-icons/fi'; // Import the new icons
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
          <FiMenu className="navbar-icon" onClick={toggleSidebar} />
        </div>
        <div>
          <a href="/" className="navbar-logo navbar-center">
            <img src={logo} alt="Logo" className="logo-image" /> 
          </a>
        </div>
        <div className="navbar-right">
          <ul className="navbar-links">
            <li><a href="/login"><FiUser className="navbar-icon" /></a></li>
            <li><a href="/search"><FiSearch className="navbar-icon" /></a></li>
            <li><a href="/favorites"><FiHeart className="navbar-icon" /></a></li>
            <li><a href="/cart"><FiShoppingCart className="navbar-icon" /></a></li>
          </ul>
        </div>
      </nav>
      {sidebarOpen && (
        <div className="sidebar-overlay" onClick={toggleSidebar}>
          <div className="sidebar" onClick={(e) => e.stopPropagation()}>
            <div className="sidebar-header">
              <FiX className="exit-icon" onClick={toggleSidebar} />
              <div className={isLoginFixed ? 'login-section fixed' : 'login-section'}>
                <FiUser className="login-icon" />
                <span>LOG IN</span>
              </div>
            </div>
            <div id='hi'>
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
              <FiInstagram className="social-icon" />
              <FiFacebook className="social-icon" />
              <FiYoutube className="social-icon" />
            </div></div>
          </div>
        </div>
      )}
    </>
  );
}

export default Navbar;
