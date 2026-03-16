import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "../Components/Booking.css";

function Booking() {
  const [selectedSport, setSelectedSport] = useState("Tennis");
  const [selectedDay, setSelectedDay] = useState(16);
  const [selectedTime, setSelectedTime] = useState("02:00 PM");
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => { setIsVisible(true); }, []);

  useEffect(() => {
    if (location.state && location.state.success) {
      alert(`Booking confirmed successfully for ${location.state.date}!`);
    }
  }, [location.state]);

  const sports = [
    { name: "Tennis", price: 50 },
    { name: "Basketball", price: 40 },
    { name: "Futsal", price: 60 },
    { name: "Volleyball", price: 35 }
  ];

  const timeSlots = ["08:00 AM", "09:00 AM", "12:00 PM", "01:00 PM", "02:00 PM", "03:00 PM", "04:00 PM"];
  const daysInMonth = Array.from({ length: 31 }, (_, i) => i + 1);

  const isDayBusy = (day) => {
    const hash = day + selectedTime.replace(/\D/g, '') + selectedSport.length;
    return hash % 7 === 0 || hash % 11 === 0;
  };

  const currentPrice = sports.find(s => s.name === selectedSport).price;

  const isSlotBusy = (day, time) => {
    const hash = day + time.replace(/\D/g, '') + selectedSport.length;
    return hash % 7 === 0 || hash % 11 === 0; 
  };

  const isBusy = isSlotBusy(selectedDay, selectedTime);

  return (
    <div className={`booking-container ${isVisible ? "fade-in" : ""}`}>
      <div className="booking-header">
        <h1 className="booking-title">The Reservation Desk</h1>
        <p className="booking-subtitle">Book your court in just a few clicks.</p>
      </div>

      <div className="booking-grid">
        <div className="booking-left">
          {/* 1. Sport Selection */}
          <div className="card hover-effect">
            <h3>1. Choose Sport</h3>
            <div className="sports">
              {sports.map((sport) => (
                <button
                  key={sport.name}
                  className={`sport-btn ${selectedSport === sport.name ? "active" : ""}`}
                  onClick={() => setSelectedSport(sport.name)}
                >
                  {sport.name}
                </button>
              ))}
            </div>
          </div>

          {/* 2. Calendar */}
          <div className="card hover-effect">
            <div className="card-header">
              <h3>2. Select Date (March)</h3>
              <div className="status-indicators">
                <span className="indicator"><i className="dot free"></i> Available</span>
                <span className="indicator"><i className="dot busy"></i> Busy</span>
              </div>
            </div>
            <div className="calendar-grid">
              {daysInMonth.map((day) => {
                const dayBusy = isDayBusy(day);
                return (
                  <div
                    key={day}
                    className={`day-cell ${selectedDay === day ? "selected" : ""} ${dayBusy ? "status-busy" : "status-free"}`}
                    onClick={() => setSelectedDay(day)}
                  >
                    {day}
                  </div>
                );
              })}
            </div>
          </div>

          {/* 3. Time Slots */}
          <div className="card hover-effect">
            <h3>3. Time Slot</h3>
            <div className="times-grid">
              {timeSlots.map((time) => (
                <button
                  key={time}
                  className={`time-btn ${selectedTime === time ? "active" : ""} ${isSlotBusy(selectedDay, time) ? "busy" : "free"}`}
                  onClick={() => setSelectedTime(time)}
                >
                  {time}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* 4. Booking Summary */}
        <div className="booking-right">
          <div className="summary-card sticky-summary">
            <h3 className="summary-title">Booking Summary</h3>
            <div className="summary-details">
              <div className="summary-row"><span>Sport</span><strong>{selectedSport}</strong></div>
              <div className="summary-row"><span>Court</span><strong>Indoor Court #4</strong></div>
              <div className="summary-row"><span>Date</span><strong>March {selectedDay}, 2026</strong></div>
              <div className="summary-row"><span>Time</span><strong>{selectedTime}</strong></div>
            </div>

            <div className={`availability-badge ${isBusy ? "danger" : "success"}`}>
               {isBusy ? "⚠️ High Demand" : "✔ Available Now"}
            </div>

            <div className="price-box">
              <div className="price-row"><span>Court Fee</span><span>${currentPrice}.00</span></div>
              <div className="price-row total">
                <span>Total Amount</span>
                <span className="total-value">${currentPrice}.00</span>
              </div>
            </div>

            <button 
              className={`confirm-btn pulse-animation ${isBusy ? 'unavailable' : ''}`} 
              onClick={isBusy ? null : () => navigate('/payment', { state: { amount: currentPrice } })}
              disabled={isBusy}
            >
              {isBusy ? 'Unavailable' : 'Confirm Reservation'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Booking;