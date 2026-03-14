import { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/dumbbell.png';
import './Navbar.css'; 


function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  function toggleMenu() {
    setIsOpen(!isOpen);
  }

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/" onClick={() => setIsOpen(false)}>
          <img src={logo} alt="Champions Arena Logo" className="logo-img" />
          CHAMPIONS<span>ARENA</span>
        </Link>
      </div>

     
      <div className="hamburger" onClick={toggleMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>

     
      <div className={`navbar-links ${isOpen ? 'active' : ''}`}>
        <Link to="/home" onClick={() => setIsOpen(false)}>Home</Link>
        <Link to="/profile" onClick={() => setIsOpen(false)}>Profile</Link>
        <Link to="/facilities" onClick={() => setIsOpen(false)}>Facilities</Link>
        <Link to="/booking" onClick={() => setIsOpen(false)}>Bookings</Link>
        <Link to="/membership" onClick={() => setIsOpen(false)}>Memberships</Link>
        <Link to="/tour" onClick={() => setIsOpen(false)}>Virtual Tour</Link>
      </div>

      <div className="navbar-auth">
        <Link to="/login" className="login-btn">Login</Link>
        <Link to="/signup" className="join-btn">Join Now</Link>
      </div>
    </nav>
  );
};

export default Navbar;