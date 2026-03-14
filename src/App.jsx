import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'; 

import Navbar from './components/Navbar'; 

import Home from './pages/Home';
import Booking from './pages/Booking';
import Membership from './pages/Membership';


function App() {

  return (
    <Router>
      <div className="App">

        <Navbar /> 

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/memberships" element={<Membership />} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;
