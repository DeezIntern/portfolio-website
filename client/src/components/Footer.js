import React from 'react';

function Footer() {
  return (
    <footer className="footer">
      <div className="social-links">
        <a href="https://github.com/asleshchoudhary" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-github"></i>
        </a>
        <a href="https://linkedin.com/in/asleshchoudhary" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-linkedin"></i>
        </a>
        <a href="https://twitter.com/asleshchoudhary" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-twitter"></i>
        </a>
        <a href="mailto:aslesh.choudhary@example.com">
          <i className="fas fa-envelope"></i>
        </a>
      </div>
      <p>&copy; 2024 Aslesh Choudhary. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
