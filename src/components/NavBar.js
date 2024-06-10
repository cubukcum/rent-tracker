// src/components/Navbar.js
import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import './Navbar.css';

const Navbar = ({ isAuthenticated, setIsAuthenticated }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    setIsAuthenticated(false);
    navigate('/login');
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <h1>Rental Tracker</h1>
      </div>
      <div className="navbar-links">
        <NavLink to="/" exact activeClassName="active-link">Home</NavLink>
        {isAuthenticated ? (
          <>
            <NavLink to="/add-rental" activeClassName="active-link">Add Rental</NavLink>
            <NavLink to="/view-rentals" activeClassName="active-link">View Rentals</NavLink>
            <button onClick={handleLogout} className="logout-button">Logout</button>
          </>
        ) : (
          <NavLink to="/login" activeClassName="active-link">Login</NavLink>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
