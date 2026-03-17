import { Link } from 'react-router-dom';
import logo1 from "../assets/image.png"
import '../Components/Home.css';
import logo2 from '../assets/image3.png';
import logo3 from '../assets/image2.png';
import logo5 from '../assets/image1.png';
import img1 from '../assets/AboutChampionsArena.png'
import { useState } from 'react';
import emailjs from '@emailjs/browser';

function Home() {
  const [contactModalOpen, setContactModalOpen] = useState(false);
  const [formData, setFormData] = useState({ email: '', phone: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleFormChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await emailjs.send(
        'service_39kv7mm',
        'template_vi73x9g',
        {
          from_email: formData.email,
          phone: formData.phone,
          message: formData.message,
          to_email: 'osamahussein.fe.c2c@gmail.com',
        },
        'me0DjUp8jL1o7s6Je'
      );
      alert('Message sent successfully!');
      setContactModalOpen(false);
      setFormData({ email: '', phone: '', message: '' });
    } catch (error) {
      console.error('Error sending message:', error);
      alert('Failed to send message. Please try again.');
    }
    setIsSubmitting(false);
  };

  return (
    <>
      <main className="home">
        <section className="hero" aria-label="Hero section">
          <div className="hero-overlay">
            <span className="hero-badge"> ● New season open</span>
            <h1 className="hero-title">
              Welcome to <span className="highlightt">Champions</span>
              <span className="hero-title-line2">Arena</span>
            </h1>
            <p className="hero-subtitle">
              Where champions train and legends are made. Experience the future of athletic performance in our world-class facility.
            </p>

            <div className="hero-buttonss">
              <Link to="/booking" className="btn btn-primaryy">
              <img src={logo2} alt="Booking icon" className='logo-welcome'/>
                Book Now
              </Link>
              <Link to="/tour" className="btn btn-secondaryy">
              <img src={logo5} alt="Tour icon" className='logo-welcome'/>
                Virtual Tour
              </Link>
              <button className="btn btn-tertiaryy" onClick={() => setContactModalOpen(true)}>
              <img src={logo3} alt="Contact icon" className='logo-welcome'/>
                Contact Us
              </button>
            </div>
          </div>
        </section>

        <section className="features" aria-label="Facility features">
          <div className="features-grid">
            <div className="feature-card">
              <div className="icon">🏀</div>
              <p>Basketball</p>
              <h3>12 Courts</h3>
            </div>
            <div className="feature-card">
              <div className="icon">⚽</div>
              <p>Football</p>
              <h3>8 Fields</h3>
            </div>
            <div className="feature-card">
              <div className="icon">🏊‍♀️</div>
              <p>Swimming</p>
              <h3>2 Pools</h3>
            </div>
            <div className="feature-card">
              <div className="icon">🎾</div>
              <p>Tennis</p>
              <h3>6 Courts</h3>
            </div>
            <div className="feature-card">
              <div className="icon">💪</div>
              <p>Elite Gym</p>
              <h3>24/7 Open</h3>
            </div>
          </div>
        </section>

        <section className="about" aria-label="About Champions Arena">
          <div className="about-grid">
            <div className="about-content">
              <h2>
                Elite Performance <span className="accent">Without Limits.</span>
              </h2>
              <p>
                At Champions Arena, we provide more than just space. We offer a high-octane environment equipped with professional-grade technology, expert coaching, and a community of dedicated athletes.
              </p>
              <div className="checklist">
                <div className="checklist-item">
                  <span>☑</span>
                  Professional Olympic-grade surfaces
                </div>
                <div className="checklist-item">
                  <span>☑</span>
                  AI-powered training analytics
                </div>
                <div className="checklist-item">
                  <span>☑</span>
                  Recovery & hydrotherapy zones
                </div>
              </div>
            </div>
            <img src={img1} className="about-image"></img>
          </div>
        </section>

        <section className="locationn" aria-label="Facility location">
          <div className="locationn-card">
            <div className="locationn-icon" aria-hidden="true"><img src={logo1} height="60px" alt="Location icon" /></div>
            <h3>Find Us</h3>
            <p>
              1200 Championship Way,
              <br />
              Sport City, CA 90210
            </p>
            <a className="locationn-link" href="https://www.google.com/maps/search/?api=1&query=1200+Championship+Way,+Sport+City,+CA+90210" target="_blank" rel="noopener noreferrer">
              Get directions →
            </a>
          </div>
        </section>
      </main>
      {contactModalOpen && (
        <div className="modal-overlay" onClick={() => setContactModalOpen(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setContactModalOpen(false)}>×</button>
            <h2>Contact Us</h2>
            <form onSubmit={handleFormSubmit}>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleFormChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Phone</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleFormChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleFormChange}
                  required
                ></textarea>
              </div>
              <button type="submit" disabled={isSubmitting}>
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

export default Home;
