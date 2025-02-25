import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './Portfolio.css';

const Portfolio = () => {
  const [filter, setFilter] = useState('all');
  
  const projects = [
    { 
      title: "Bird's Species Recognition", 
      description: "Android application leveraging convolutional neural networks (CNN) to identify 50+ bird species with 82% accuracy. Implemented a Flask API middleware to handle TensorFlow model inference, optimizing image processing for mobile devices through quantization techniques.",
      tech: ['CNN', 'Java', 'Android', 'Flask', 'TensorFlow'],
      link: 'https://github.com/bibek26/Chirpmate',
      category: 'ml',
      image: 'bird.png'
    },
    { 
      title: "Portfolio Website", 
      description: "Immersive cyberpunk-themed portfolio featuring 3D visualizations and interactive animations. Implemented dynamic lighting effects using Three.js and optimized WebGL rendering for 60fps performance. Integrated Framer Motion for smooth transitions.",
      tech: ['React', 'Framer Motion', 'Three.js', 'CSS3', 'WebGL'],
      link: 'https://github.com/bibek26/portfolio',
      category: 'web',
      image: 'batman.png'
    },
    { 
      title: "Sentiment Analysis Engine", 
      description: "Natural Language Processing system analyzing text sentiment with 89% F1-score. Utilized Scikit-learn's SVM classifiers with NLTK for text preprocessing. Deployed as REST API using Flask, processing 500+ requests/minute with Celery task queue optimization.",
      tech: ['Python', 'Scikit-learn', 'Flask', 'NLTK', 'Pandas'],
      link: 'https://github.com/bibek26/movie-sentiment-analyzer',
      category: 'ml',
      image: 'movie.png'
    },
    { 
      title: "Laravel E-Commerce Platform", 
      description: "Full-stack e-commerce solution supporting various products. Features include real-time inventory management, JWT authentication, and automated order fulfillment using Laravel Queues.",
      tech: ['Laravel', 'PHP', 'MySQL', 'Bootstrap', 'REST API'],
      link: '#',
      category: 'web',
      image: 'ecommerce.png'
    },
    { 
      title: "Smart Todo Application", 
      description: "Cross-platform task manager with Firebase real-time sync and offline-first capabilities. Implemented CRUD operations with Room Database and achieved 100ms response time through query optimization. Features priority scheduling and Google Calendar integration.",
      tech: ['Java', 'Android Studio', 'MySQL', 'Firebase', 'XML'],
      link: '#',
      category: 'android',
      image: 'todo.png'
    }
    // Add more projects
  ];

  const filteredProjects = projects.filter(project => 
    filter === 'all' ? true : project.category === filter
  );

  return (
    <section id="portfolio" className="section-wrapper portfolio-section">
      {/* <div className="cyber-bg-portfolio"></div> */}
      
      <motion.h1 
        className="portfolio-heading"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <span className="flicker-portfolio">PROJECT_ARCHIVE</span>
      </motion.h1>

      <div className="filter-bar">
        {['all', 'web', 'ml', 'design'].map((category) => (
          <motion.button
            key={category}
            className={`filter-btn ${filter === category ? 'active' : ''}`}
            onClick={() => setFilter(category)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {category.toUpperCase()}
          </motion.button>
        ))}
      </div>

      <div className="project-grid">
        {filteredProjects.map((project, index) => (
          <motion.div 
            className="project-card"
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="card-inner">
              <div className="card-front">
                <motion.div 
                  className="project-image"
                  style={{ backgroundImage: `url(${project.image})` }}
                  whileHover={{ scale: 1.1 }}
                />
                <h2 className="project-title">{project.title}</h2>
              </div>
              
              <div className="card-back">
                <p className="project-description">{project.description}</p>
                <div className="tech-stack">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="tech-item">{tech}</span>
                  ))}
                </div>
                <a href={project.link} className="project-link">
                  <span className="link-text">VIEW_CODE</span>
                  <div className="link-glow"></div>
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;