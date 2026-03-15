import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../Components/Facilities.css';

import basketballImg from '../assets/luleburgaz-basketbol1.webp';
import footballImg from '../assets/a-stadium-filled-with-excited-fans-a-football-field-in-the-foreground-background-with-empty-space-for-text-photo.jpg';
import tennisImg from '../assets/convert.webp';
import swimmingImg from '../assets/20221228_Yishun Stadium and Pool_8144.webp';
import fitnessImg from '../assets/02426b8c5edf1ea6b4261e9a3e37c4b5.jpg';
import volleyballImg from '../assets/voleybol-sahasi-cesitleri-nelerdir.webp';

const facilities = [
  {
    id: 'basketball',
    title: 'Basketball Arena',
    details: [
      'NBA standard wood court',
      '4 full-court layouts',
      'Scoreboard & broadcast ready',
    ],
    occupancy: 90,
    imageSrc: basketballImg,
    imageAlt: 'Basketball court',
    capacity: '500 spectators',
    hours: '6:00 AM - 10:00 PM',
    amenities: ['Locker rooms', 'Concession stand', 'Parking'],
  },
  {
    id: 'football',
    title: 'Football Stadium',
    details: ['FIFA certified turf', '5,000 seating capacity', 'LED night lighting'],
    occupancy: 40,
    imageSrc: footballImg,
    imageAlt: 'Football field',
    capacity: '5,000 spectators',
    hours: '7:00 AM - 11:00 PM',
    amenities: ['VIP boxes', 'Medical facilities', 'Broadcast booth'],
  },
  {
    id: 'tennis',
    title: 'Tennis Center',
    details: ['6 grand slam courts', 'Indoor & outdoor options', 'Video replay analysis'],
    occupancy: 60,
    imageSrc: tennisImg,
    imageAlt: 'Tennis court',
    capacity: '200 spectators',
    hours: '6:00 AM - 9:00 PM',
    amenities: ['Pro shop', 'Coaching services', 'Equipment rental'],
  },
  {
    id: 'swimming',
    title: 'Swimming Complex',
    details: ['50m Olympic pool', 'Heated recovery zone', 'Anti-turbulence lane lines'],
    occupancy: 25,
    imageSrc: swimmingImg,
    imageAlt: 'Swimming pool',
    capacity: '300 swimmers',
    hours: '5:00 AM - 10:00 PM',
    amenities: ['Sauna', 'Jacuzzi', 'Swim lessons'],
  },
  {
    id: 'fitness',
    title: 'Fitness Center',
    details: ['High-performance gear', 'Dedicated cardio zone', 'Certified personal trainers'],
    occupancy: 80,
    imageSrc: fitnessImg,
    imageAlt: 'Fitness center',
    capacity: '150 members',
    hours: '24/7 access',
    amenities: ['Nutrition bar', 'Recovery area', 'Group classes'],
  },
  {
    id: 'volleyball',
    title: 'Volleyball Courts',
    details: ['Professional indoor courts', 'Olympic tension nets', 'Non-slip court surface'],
    occupancy: 50,
    imageSrc: volleyballImg,
    imageAlt: 'Volleyball courts',
    capacity: '100 spectators',
    hours: '7:00 AM - 9:00 PM',
    amenities: ['Beach volleyball area', 'Equipment storage', 'Spectator seating'],
  },
];

export default function Facilities() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedFacility, setSelectedFacility] = useState(null);
  const [modalType, setModalType] = useState(''); // 'details' or 'reserve'

  const totalOccupancy = Math.round(
    facilities.reduce((sum, f) => sum + f.occupancy, 0) / facilities.length
  );

  const openModal = (facility, type) => {
    setSelectedFacility(facility);
    setModalType(type);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedFacility(null);
    setModalType('');
  };

  return (
    <main className="facilities">
      <header className="facilities-header">
        <p className="facilities-pretitle">Premium facilities</p>
        <h1 className="facilities-title">The Venue Showcase</h1>
        <p className="facilities-subtitle">
          Experience world-class athletic environments designed for performance,
          comfort, and victory. Our elite facilities cater to professionals and enthusiasts alike.
        </p>
      </header>

      <section className="facilities-grid" aria-label="Facility showcase">
        {facilities.map((facility) => (
          <article key={facility.id} className="facility-card">
            <div
              className="facility-image"
              role="img"
              aria-label={facility.imageAlt}
              style={{
                backgroundImage: facility.imageSrc ? `url(${facility.imageSrc})` : 'none',
              }}
            >
              {!facility.imageSrc && (
                <div className="facility-image-placeholder">
                  Add your image here
                </div>
              )}
            </div>

            <div className="facility-body">
              <h2 className="facility-name">{facility.title}</h2>
              <ul className="facility-features">
                {facility.details.map((d) => (
                  <li key={d}>• {d}</li>
                ))}
              </ul>

              <div className="facility-occupancy">
                <div className="facility-occupancy-row">
                  <span className="facility-occupancy-label">Current occupancy</span>
                  <span className="facility-occupancy-value">{facility.occupancy}%</span>
                </div>
                <div className="facility-occupancy-bar">
                  <div
                    className="facility-occupancy-fill"
                    style={{ width: `${facility.occupancy}%` }}
                  />
                </div>
              </div>

              <button type="button" className="facility-button" onClick={() => openModal(facility, 'details')}>
                View details →
              </button>
            </div>
          </article>
        ))}
      </section>

      <section className="facilities-stats" aria-label="Total venue traffic">
        <div className="facilities-stats-card">
          <div className="stats-row">
            <div>
              <p className="stats-title">Total Arena Traffic</p>
              <p className="stats-subtitle">Current average usage across all sports venues.</p>
            </div>
            <Link to="/booking" className="stats-action">Reserve a Spot</Link>
          </div>

          <div className="stats-progress">
            <div className="stats-progress-row">
              <span className="stats-label">Live load factor</span>
              <span className="stats-value">{totalOccupancy}%</span>
            </div>
            <div className="stats-bar">
              <div
                className="stats-bar-fill"
                style={{ width: `${totalOccupancy}%` }}
              />
            </div>
          </div>
        </div>
      </section>

      {modalOpen && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>×</button>
            {modalType === 'details' && selectedFacility && (
              <div className="modal-details">
                <h2>{selectedFacility.title}</h2>
                <div
                  className="modal-image"
                  style={{
                    backgroundImage: selectedFacility.imageSrc ? `url(${selectedFacility.imageSrc})` : 'none',
                  }}
                />
                <div className="modal-info">
                  <h3>Features</h3>
                  <ul>
                    {selectedFacility.details.map((d, i) => (
                      <li key={i}>• {d}</li>
                    ))}
                  </ul>
                  <h3>Additional Information</h3>
                  <p><strong>Capacity:</strong> {selectedFacility.capacity}</p>
                  <p><strong>Operating Hours:</strong> {selectedFacility.hours}</p>
                  <p><strong>Amenities:</strong> {selectedFacility.amenities.join(', ')}</p>
                  <p><strong>Current Occupancy:</strong> {selectedFacility.occupancy}%</p>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </main>
  );
}