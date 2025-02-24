import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import './HeroSection.css';
import { useTypewriter, Cursor } from 'react-simple-typewriter';

const HeroSection = () => {
  // Typewriter effect for the second line
  const [text] = useTypewriter({
    words: ['Developer', 'Tech Enthusiast', 'Problem Solver', 'Batman Fan'],
    loop: true,
    typeSpeed: 70,
    deleteSpeed: 50,
  });

  // Parallax effect for background
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 300], [0, 100]);

  return (
    <div className="hero-section">
      <motion.div 
        className="background-image"
        style={{ y }}
        initial={{ scale: 1.2 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2 }}
      />
      
      <div className="overlay"></div>
      
      {/* Animated floating particles */}
      <div className="particles">
        {[...Array(30)].map((_, i) => (
          <div key={i} className="particle" />
        ))}
      </div>
      <div className="scanlines"></div>
      <motion.div 
        className="hero-content"
        initial="hidden"
        animate="visible"
      >
        {/* First line with glitch effect */}
        {/* <motion.h1
          className="cyber-text"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
        >
          I AM BIBEK BAHARADAR
        </motion.h1> */}

        {/* In your HeroSection.js */}
        <motion.h1
          className="name-text glitch-text"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
        >
          I AM BIBEK BAHARADAR
          <span className="glitch-layers">
            <span aria-hidden="true" className="glitch-layer">I AM BIBEK BAHARADAR</span>
            <span aria-hidden="true" className="glitch-layer">I AM BIBEK BAHARADAR</span>
          </span>
        </motion.h1>

        {/* Second line with typewriter effect */}
        <motion.h2
          className="typewriter-text"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
        >
          I am a {text}
          <Cursor cursorStyle="🦇" />
        </motion.h2>
      </motion.div>

      {/* Animated grid lines */}
      <div className="grid-lines">
        {[...Array(20)].map((_, i) => (
          <div key={i} className="grid-line" />
        ))}
      </div>
    </div>
  );
};

export default HeroSection;