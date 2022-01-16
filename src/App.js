import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/homepage';
import OnBoarding from './pages/onBoarding';
import Register from './pages/register';
import Verification from './pages/verification';
import BookingPage from './pages/bookingpage';
import Doctors from './pages/doctors';
import Consultation from './pages/consultation';
import Details from './pages/details';
import './App.css';

function App () {
  return (
    <div className="App-header">
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/onboarding" element={<OnBoarding />} />
        <Route path="/register" element={<Register />} />
        <Route path="/verification" element={<Verification />} />
        <Route path="/bookingpage" element={<BookingPage />} />
        <Route path="/doctors" element={<Doctors />} />
        <Route path="/consultation" element={<Consultation />} />
        <Route path="/details" element={<Details />} />
      </Routes>
    </div>
  );    
}

export default App;
