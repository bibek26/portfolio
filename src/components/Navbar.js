import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import resumePDF from '../assets/resume.pdf';

const Navbar = () => {
  const [activeLink, setActiveLink] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Trigger bat swarm animation
  const triggerBatSwarm = () => {
    const logo = document.querySelector('.logo');
    logo.classList.add('bat-swarm');
    setTimeout(() => {
      logo.classList.remove('bat-swarm');
    }, 2000); // Match the duration of your animation
  };

  const handleLinkClick = (link) => {
    setActiveLink(link);
    setIsMenuOpen(false);

    // Scroll to section logic for all links except Resume
    if (link !== 'Resume') {
      const sectionId = link.toLowerCase().replace(' ', '-');
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
        {['Home', 'About', 'Skills', 'Experience', 'Portfolio', 'Contact', 'Resume'].map((link) => (
          <li key={link}>
            {link === 'Resume' ? (
              <a
                href={resumePDF}
                target="_blank"
                rel="noopener noreferrer"
                className={activeLink === link ? 'active' : ''}
                onClick={() => handleLinkClick(link)}
              >
                {link}
              </a>
            ) : (
            <Link
              to={`/${link.toLowerCase()}`}
              className={activeLink === link ? 'active' : ''}
              onClick={() => {handleLinkClick(link);
                setActiveLink(link);
              }}
            >
              {link}
            </Link>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;