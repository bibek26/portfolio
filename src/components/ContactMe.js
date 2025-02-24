import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './ContactMe.css';

const ContactMe = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    emailjs.send(
      'service_8euiq2l', // Replace with your EmailJS service ID
      'template_4s0h6an', // Replace with your EmailJS template ID
      {
        from_name: name,
        from_email: email,
        message: message,
        to_email: 'baharadarb@gmail.com'
      },
      'mzdgSBwKJgcsRtSL2' // Replace with your EmailJS user ID
    )
    .then((response) => {
      setIsSent(true);
      setName('');
      setEmail('');
      setMessage('');
    })
    .catch((err) => {
      setError('Failed to send message. Please try again.');
    })
    .finally(() => {
      setIsSubmitting(false);
    });
  };

  return (
    <section id="contact" className="section-wrapper contact-section">
      {/* <div className="cyber-bg-contact"></div> */}
      
      <h1 className="cyber-heading">
        <span className="flicker">CONTACT_TERMINAL</span>
      </h1>

      {isSent ? (
        <div className="success-message">
          ✔️ MESSAGE TRANSMITTED SUCCESSFULLY
        </div>
      ) : (
        <form className="cyber-form" onSubmit={handleSubmit}>
          <div className="input-group">
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="cyber-input"
              placeholder="ENTER YOUR DESIGNATION"
            />
            <div className="input-glow"></div>
          </div>

          <div className="input-group">
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="cyber-input"
              placeholder="INPUT EMAIL PROTOCOL"
            />
            <div className="input-glow"></div>
          </div>

          <div className="input-group">
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              className="cyber-input"
              placeholder="INITIATE MESSAGE TRANSMISSION..."
            />
            <div className="input-glow"></div>
          </div>

          <div className="button-container">
            <button 
              type="submit" 
              className="cyber-button"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'ENCRYPTING...' : 'INITIATE TRANSMISSION'}
              <div className="button-glow"></div>
            </button>
          </div>

          {error && <div className="error-message">{error}</div>}
        </form>
      )}
    </section>
  );
};

export default ContactMe;