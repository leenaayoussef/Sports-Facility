import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './Payment.css';
import visaFront from '../assets/Front Visa.png';
import visaBack from '../assets/Back Visa.png';

function Payment() {
  const location = useLocation();
  const navigate = useNavigate();
  const [cardNumber, setCardNumber] = useState('');
  const [expiry, setExpiry] = useState('');
  const [cvv, setCvv] = useState('');
  const [name, setName] = useState('');
  const [amount, setAmount] = useState('100');
  const [focusedField, setFocusedField] = useState(null);
  const [expiryError, setExpiryError] = useState('');

  useEffect(() => {
    if (location.state && location.state.amount) {
      setAmount(location.state.amount.toString());
    }
  }, [location.state]);

  const formatCardNumber = (value) => {
    const v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
    const matches = v.match(/\d{4,16}/g);
    const match = matches && matches[0] || '';
    const parts = [];
    for (let i = 0, len = match.length; i < len; i += 4) {
      parts.push(match.substring(i, i + 4));
    }
    if (parts.length) {
      return parts.join(' ');
    } else {
      return v;
    }
  };

  const formatExpiry = (value) => {
    const v = value.replace(/\D/g, '');
    if (v.length >= 2) {
      let month = v.substring(0, 2);
      let year = v.substring(2, 4);
      if (parseInt(month) > 12) {
        month = '12';
      }
      if (parseInt(month) < 1) {
        month = '01';
      }
      return month + '/' + year;
    }
    return v;
  };

  const handleCardNumberChange = (e) => {
    const formatted = formatCardNumber(e.target.value);
    if (formatted.replace(/\s/g, '').length <= 16) {
      setCardNumber(formatted);
    }
  };

  const handleExpiryChange = (e) => {
    const formatted = formatExpiry(e.target.value);
    setExpiry(formatted);
  };

  const handleExpiryBlur = () => {
    setFocusedField(null);
    const parts = expiry.split('/');
    if (parts.length === 2) {
      const year = parseInt(parts[1]);
      if (year < 26) {
        setExpiryError('Card expired');
      } else {
        setExpiryError('');
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (expiryError) {
      alert('Cannot process payment: ' + expiryError);
      return;
    }
    alert('Payment processed successfully!');
    // Navigate back to booking with success message
    navigate('/booking', { state: { success: true, date: `March ${location.state?.amount ? 'with amount $' + location.state.amount : 'unknown'}` } });
  };

  return (
    <div className="payment-container">
      <div className="payment-card">
        <h1 className="payment-title">Secure Payment</h1>
        <p className="payment-subtitle">Complete your booking with ease</p>
        
        <div className="payment-layout">
          <div className="form-section">
            <form onSubmit={handleSubmit} className="payment-form">
              <div className="form-group">
                <label htmlFor="amount">Amount ($)</label>
                <input
                  type="number"
                  id="amount"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="name">Cardholder Name</label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="John Doe"
                  required
                  onFocus={() => setFocusedField('name')}
                  onBlur={() => setFocusedField(null)}
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="cardNumber">Card Number</label>
                <input
                  type="text"
                  id="cardNumber"
                  value={cardNumber}
                  onChange={handleCardNumberChange}
                  placeholder="1234 5678 9012 3456"
                  maxLength="19"
                  required
                  onFocus={() => setFocusedField('cardNumber')}
                  onBlur={() => setFocusedField(null)}
                />
              </div>
              
              <div className="form-row">
                <div className="form-group half">
                  <label htmlFor="expiry">Expiry Date</label>
                  <input
                    type="text"
                    id="expiry"
                    value={expiry}
                    onChange={handleExpiryChange}
                    placeholder="MM/YY"
                    maxLength="5"
                    required
                    onFocus={() => setFocusedField('expiry')}
                    onBlur={handleExpiryBlur}
                  />
                  {expiryError && <span className="error-message">{expiryError}</span>}
                </div>
                <div className="form-group half">
                  <label htmlFor="cvv">CVV</label>
                  <input
                    type="text"
                    id="cvv"
                    value={cvv}
                    onChange={(e) => setCvv(e.target.value)}
                    placeholder="123"
                    maxLength="3"
                    required
                    onFocus={() => setFocusedField('cvv')}
                    onBlur={() => setFocusedField(null)}
                  />
                </div>
              </div>
              
              <button type="submit" className="pay-button">Pay Now</button>
            </form>
          </div>
          
          <div className="card-preview">
            <div className={`visa-card ${focusedField === 'cvv' ? 'flipped' : ''}`}>
              <div className="card-front">
                <img src={visaFront} alt="Visa Front" className="visa-image" />
                {focusedField === 'cardNumber' && <div className="highlight card-number-highlight"></div>}
                {focusedField === 'expiry' && <div className="highlight expiry-highlight"></div>}
                {focusedField === 'name' && <div className="highlight name-highlight"></div>}
              </div>
              <div className="card-back">
                <img src={visaBack} alt="Visa Back" className="visa-image" />
                {focusedField === 'cvv' && <div className="highlight cvv-highlight"></div>}
              </div>
            </div>
          </div>
        </div>
        
        <div className="payment-icons">
          <span>🔒 Secure</span>
          <span>💳 Visa</span>
          <span>💳 Mastercard</span>
        </div>
      </div>
    </div>
  );
}

export default Payment;