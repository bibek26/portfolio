import React from 'react';
import { motion } from 'framer-motion';
import './AboutMe.css';
import meImage from '../assets/me.png';
import BatmanEmblem from '../assets/batman-emblem.png';

const AboutMe = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  };

  return (
    
    <section className="section-wrapper about-section" id="about">
      {/* <div className="cyber-bg-about"></div> */}
      
      <motion.h2 
        className="about-heading"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <span className="flicker-about">ABOUT ME</span>
      </motion.h2>

      <div className="about-content">
        <motion.div 
          className="about-text-container"
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
        >
          <div className="neon-frame-about">
            <p className="about-description">
              I'm <span className="highlight-cyan">Bibek Baharadar</span>  a 
              <span className="highlight-purple"> Full-Stack Developer</span> who believes in 
              merging creativity with technology. When I'm not coding, you'll find me 
              <span className="highlight-yellow"> riding bikes</span> or 
              <span className="highlight-cyan"> exploring new places</span>, drawing inspiration 
              from both the digital and physical worlds. I love to hear old metal and rock music.
              I love speding time with my colleagues. As an ambivert, I balance my love for 
              tech-deep dives with outdoor adventures, bringing this same dynamic energy 
              to every project I undertake.
            </p>
          </div>
        </motion.div>

        <motion.div 
          className="about-image-wrapper"
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          transition={{ delay: 0.2 }}
        >
          <div className="hologram-frame">
            <img 
              src={meImage} 
              alt="About Me" 
              className="profile-image"
            />
            <div className="scan-effect"></div>
          </div>
        </motion.div>
      </div>

      {/* <motion.div 
        className="emblem-container"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <img 
          src={BatmanEmblem} 
          alt="Batman Emblem" 
          className="bat-symbol"
        />
        <div className="emblem-glow"></div>
      </motion.div> */}

  <motion.div 
    className="emblem-container"
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.9 }}
  >
    <div className="hex-grid"></div>
    <img 
      src={BatmanEmblem} 
      alt="Batman Emblem" 
      className="bat-symbol"
    />
  </motion.div>
    </section>
  );
};

export default AboutMe;