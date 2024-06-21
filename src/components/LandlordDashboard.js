// src/components/LandlordDashboard.js
import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const LandlordDashboard = () => {
  const { isAuthenticated } = useContext(AuthContext);
  const navigate = useNavigate();

  if (!isAuthenticated) {
    navigate('/login');
  }

  return (
    <div>
      <h2>Landlord Dashboard</h2>
      {/* Landlord functionalities go here */}
    </div>
  );
};

export default LandlordDashboard;
