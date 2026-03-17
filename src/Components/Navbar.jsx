import { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../assets/dumbbell.png';
import { UserContext } from '../Context/UserContext';
import './Navbar.css'; 


function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { user, logout } = useContext(UserContext);
  const navigate = useNavigate();

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
        <Link to="/facilities" onClick={() => setIsOpen(false)}>Facilities</Link>
        <Link to="/booking" onClick={() => setIsOpen(false)}>Bookings</Link>
        <Link to="/membership" onClick={() => setIsOpen(false)}>Memberships</Link>
        <Link to="/tour" onClick={() => setIsOpen(false)}>Virtual Tour</Link>
      </div>

      <div className="navbar-auth">
        {user ? (
          <>
            <button 
              onClick={() => {
                navigate('/profile');
                setIsOpen(false);
              }}
              className="user-profile-btn"
            >
              <div className="user-profile">
                {user.profileImage ? (
                  <img src={user.profileImage} alt={user.username} className="profile-img" />
                ) : (
                  <div className="profile-img-placeholder">{user.username.charAt(0).toUpperCase()}</div>
                )}
                <span className="user-name">Hello, {user.username}</span>
              </div>
            </button>
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