import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="cyber-footer">
      <div className="footer-grid">
        <div className="footer-border"></div>
        
        <div className="cyber-copyright">
          <span className="flicker">©{new Date().getFullYear()}</span>
          <span>BIBEK BAHARADAR v1.0.1</span>
          <span className="glow-text">ALL SYSTEMS OPERATIONAL</span>
        </div>

        <div className="cyber-social">
          <a href="https://www.linkedin.com/in/bibek-baharadar-4b43271a0/" className="social-link">
            <FaLinkedin className="social-icon" />
            <span className="social-text">LINKED_IN</span>
          </a>
          <a href="https://github.com/bibek26" className="social-link">
            <FaGithub className="social-icon" />
            <span className="social-text">GIT_PROTOCOL</span>
          </a>
          <a href="https://x.com/BibekBaharadar" className="social-link">
            <FaTwitter className="social-icon" />
            <span className="social-text">TWITTER</span>
          </a>
          <a href="https://www.instagram.com/bbekb_/" className="social-link">
            <FaInstagram className="social-icon" />
            <span className="social-text">INSTAGRAM</span>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;