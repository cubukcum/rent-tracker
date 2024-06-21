// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Navbar from './components/Navbar';
// import Home from './components/Home';
import AddRental from './components/AddRental';
import RentalList from './components/RentalList';
import Login from './components/Login';
import TenantDashboard from './components/TenantDashboard';
import LandlordDashboard from './components/LandlordDashboard';
import './App.css';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Navbar />
        <Routes>
        <Route path="/" element={<h1>Welcome to the Rental Tracker</h1>} />
          <Route path="/login" element={<Login />} />
          <Route path="/tenant-dashboard" element={<TenantDashboard />} />
          <Route path="/landlord-dashboard" element={<LandlordDashboard />} />
          <Route path="/add-rental" element={<AddRental />} />
          <Route path="/view-rentals" element={<RentalList />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
