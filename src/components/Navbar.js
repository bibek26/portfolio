import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [activeLink, setActiveLink] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Trigger bat swarm animation
  const triggerBatSwarm = () => {
    const logo = document.querySelector('.logo');
    logo.classList.add('bat-swarm');

    // Remove animation class after it ends
    setTimeout(() => {
      logo.classList.remove('bat-swarm');
    }, 2000); // Match the duration of your animation
  };

  const handleLinkClick = (link) => {
    setActiveLink(link);
    setIsMenuOpen(false);

    // Scroll to section logic for all links
    const sectionId = link.toLowerCase();
    const sectionElement = document.getElementById(sectionId);
    
    if (sectionElement) {
      sectionElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }

    // Special case for Home (scroll to top)
    if (link === 'Home') {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav className="navbar">
      <div className="logo" onClick={triggerBatSwarm}>
        <img src="/logo.png" alt="Batman Logo" />
      </div>

      <div className="menu-icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
        <i className={isMenuOpen ? 'fas fa-times' : 'fas fa-bars'}></i>
      </div>
      <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
        {['Home', 'About', 'Skills', 'Experience', 'Portfolio', 'Contact'].map((link) => (
          <li key={link}>
            <Link
              to={`/${link.toLowerCase()}`}
              className={activeLink === link ? 'active' : ''}
              onClick={() => {handleLinkClick(link);
                setActiveLink(link);
              }}
            >
              {link}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;