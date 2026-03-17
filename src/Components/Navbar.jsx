import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/dumbbell.png';
import { UserContext } from '../Context/UserContext';
import './Navbar.css'; 


function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { user, logout } = useContext(UserContext);

  function toggleMenu() {
    setIsOpen(!isOpen);
  }

  const handleLogout = () => {
    logout();
    setIsOpen(false);
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
        {user ? (
          <>
            <span className="user-name">Hello, {user.username}</span>
            <button onClick={handleLogout} className="logout-btn">Logout</button>
          </>
        ) : (
          <>
            <Link to="/login" className="login-btn">Login</Link>
            <Link to="/signup" className="join-btn">Join Now</Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;