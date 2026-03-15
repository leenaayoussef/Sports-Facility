import React from 'react';
import './Footer.css';
import logo from '../assets/dumbbell.png';


function Footer() {

  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-brand">
          <img src={logo} alt="Logo" className='Icon-footer'></img>
          <p>Champions Arena</p>
        </div>


        <div className="footer-contact">
          <h4>Get in Touch</h4>
          <p>Phone: +20 1140917540</p>
          <p>Email: support@website.com</p>
        </div>
      </div>

      <div className="footer-divider"></div>

      <div className="footer-copyright">
        <p>© 2026 Your Project Name. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;