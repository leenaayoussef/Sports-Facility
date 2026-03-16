import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'; 

import Navbar from './components/Navbar'; 
import Footer from './components/Footer';

import Home from './pages/Home';
import Booking from './pages/Booking';
import Membership from './pages/Membership';
import Profile from './pages/Profile';
import Tour from './pages/Tour';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Payment from './pages/Payment';
import Facilities from './pages/Facilities';

function App() {

  return (
    <Router>
      <div className="App">

        <Navbar /> 

        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/memberships" element={<Membership />} />
          <Route path="/facilities" element={<Facilities />} />
          {/* <Route path="/payment" element={<Payment />} /> */}
          {/* <Route path="/profile" element={<Profile />} /> */}
          <Route path="/tour" element={<Tour />} />
          {/* <Route path="/signup" element={<Signup />} /> */}
          {/* <Route path="/login" element={<Login />} /> */}

        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
