import React from 'react';
import { motion } from 'framer-motion';
import './Experience.css';

const Experience = () => {
  const experiences = [
    { 
      role: 'Jr. Java Developer', 
      company: 'Prime Vendor Nepal', 
      date: 'May 2024 - Present',
      type: 'development' // For color coding
    },
    { 
      role: 'Web Developer (Intern)', 
      company: 'Civil Aviation Authority of Nepal (CAAN)', 
      date: 'June 2023 - September 2023',
      type: 'internship'
    },
    { 
      role: 'IT Assistant & Customer Care Service', 
      company: 'Rastriya Banijya Bank', 
      date: 'March 2023 - June 2023',
      type: 'support'
    },
  ];

  const roleColors = {
    development: '#00f3ff',
    internship: '#7df9ff',
    support: '#39ff14'
  };

  return (
    <section id="experience" className="section-wrapper experience-section">
      {/* <div className="cyber-bg-experience"></div> */}
      
      <motion.h1 
        className="experience-heading"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <span className="flicker-experience">EXPERIENCE_TIMELINE</span>
      </motion.h1>

      <div className="cyber-timeline">
        {experiences.map((exp, index) => (
          <motion.div 
            className="timeline-entry"
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <div 
              className="timeline-node" 
              style={{ 
                backgroundColor: roleColors[exp.type],
                boxShadow: `0 0 15px ${roleColors[exp.type]}`
              }}
            >
              <div className="node-glow"></div>
            </div>
            <motion.div 
              className="timeline-content"
              whileHover={{ 
                scale: 1.05,
                boxShadow: `0 0 25px ${roleColors[exp.type]}`
              }}
            >
              <h2 className="role-title">{exp.role}</h2>
              <h3 className="company-name">{exp.company}</h3>
              <p className="timeline-date">{exp.date}</p>
              <div className="timeline-line" style={{ backgroundColor: roleColors[exp.type] }}></div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;