import React from 'react';

function Header() {
  return (
    <header className="header">
      <nav className="nav">
        <a href="/" className="logo">Aslesh Choudhary</a>
        <ul className="nav-links">
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
