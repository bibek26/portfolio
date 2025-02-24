import React from 'react';
import { motion } from 'framer-motion';
import { SiJavascript, SiReact, SiMysql, SiHtml5, SiPython, SiPhp, SiGit } from 'react-icons/si';
import { FaJava } from 'react-icons/fa';
import './Skills.css';

const Skills = () => {
  const skills = [
    { name: 'HTML/CSS', level: 90, icon: <SiHtml5 /> },
    { name: 'Python', level: 75, icon: <SiPython /> },
    { name: 'Java', level: 70, icon: <FaJava /> },
    { name: 'JavaScript', level: 70, icon: <SiJavascript /> },
    { name: 'React', level: 70, icon: <SiReact /> },
    { name: 'PHP/Laravel', level: 70, icon: <SiPhp /> },
    { name: 'Git', level: 70, icon: <SiGit/> },
    { name: 'MySQL/SQL', level: 80, icon: <SiMysql /> },
  ];

  return (
    <section id="skills" className="section-wrapper skills-section">
      {/* <div className="cyber-bg-skills"></div> */}
      
      <motion.h1 
        className="skills-heading"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <span className="flicker-skills">SKILLS MATRIX</span>
      </motion.h1>

      <div className="skills-container">
        {skills.map((skill) => (
          <motion.div 
            className="skill-card"
            key={skill.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="skill-icon">
              {React.cloneElement(skill.icon, { className: 'glow-icon' })}
            </div>
            <div className="skill-info">
              <div className="skill-header">
                <span className="skill-name">{skill.name}</span>
                <span className="skill-percent">{skill.level}%</span>
              </div>
              <motion.div 
                className="progress-track"
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                transition={{ duration: 1.5 }}
              >
                <motion.div
                  className="progress-fill"
                  style={{ width: `${skill.level}%` }}
                  whileHover={{ 
                    boxShadow: "0 0 15px #00f3ff",
                    scale: 1.02 
                  }}
                >
                  <div className="progress-glow"></div>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;