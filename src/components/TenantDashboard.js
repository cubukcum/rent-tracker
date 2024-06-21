// src/components/TenantDashboard.js
import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const TenantDashboard = () => {
  const { isAuthenticated } = useContext(AuthContext);
  const navigate = useNavigate();

  if (!isAuthenticated) {
    navigate('/login');
  }

  return (
    <div>
      <h2>Tenant Dashboard</h2>
      {/* Tenant functionalities go here */}
    </div>
  );
};

export default TenantDashboard;
