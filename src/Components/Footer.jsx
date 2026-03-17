import React from 'react';
import './Footer.css';
import logo from '../assets/dumbbell.png';
import { Link } from "react-router-dom";
import { FaGlobe, FaShareAlt, FaUsers } from "react-icons/fa";




// function Footer() {

//   return (
//     <footer className="footer">
//       <div className="footer-container">

//         <div className="footer-brand">
//           <img src={logo} alt="Logo" className='Icon-footer'></img>
//           <p>Champions Arena</p>
//         </div>


//         <div className="footer-contact">
//           <h4>Get in Touch</h4>
//           <p>Phone: +20 1140917540</p>
//           <p>Email: support@website.com</p>
//         </div>
//       </div>

//       <div className="footer-divider"></div>

//       <div className="footer-copyright">
//         <p>© 2026 Your Project Name. All rights reserved.</p>
//       </div>
//     </footer>
//   );
// }
function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">


        <div className="footer-brand">
          <div className="footer-logo">
            <img src={logo} alt="Logo" className="logo-icon" />
            <span className="logo-text">CHAMPIONS<span className="logo-accent">ARENA</span></span>
          </div>
          <p className="footer-desc">
            Redefining the standard of athletic training facilities since 2010. Home to the world's most elite performers.
          </p>
          <div className="footer-socials">
            <button className="social-btn"><FaGlobe size={15} /></button>
            <button className="social-btn"><FaShareAlt size={15} /></button>
            <button className="social-btn"><FaUsers size={15} /></button>
          </div>
        </div>


        <div className="footer-col">
          <h4 className="footer-col-title">NAVIGATION</h4>
          <Link to="/facilities" className="footer-link">Facilities</Link>
          <Link to="/memberships" className="footer-link">Memberships</Link>
          <Link to="/bookings" className="footer-link">Booking Portal</Link>
          <Link to="/guest" className="footer-link">Guest Pass</Link>
        </div>


        <div className="footer-col">
          <h4 className="footer-col-title">NEWSLETTER</h4>
          <p className="footer-desc">Get the latest training tips and facility updates.</p>
          <div className="footer-newsletter">
            <input type="email" placeholder="Your email" className="newsletter-input" />
            <button className="newsletter-btn">▶</button>
          </div>
        </div>

      </div>


      <div className="footer-bottom">
        <p className="footer-copy">© 2026 Champions Arena Sports Facility. All rights reserved.</p>
        <div className="footer-legal">
          <Link to="/privacy" className="footer-legal-link">Privacy Policy</Link>
          <Link to="/terms" className="footer-legal-link">Terms of Service</Link>
          <Link to="/cookies" className="footer-legal-link">Cookie Policy</Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;