// src/components/Navbar.js
import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <h1>Rental Tracker</h1>
      </div>
      <div className="navbar-links">
        <NavLink to="/" exact activeClassName="active-link">Home</NavLink>
        <NavLink to="/add-rental" activeClassName="active-link">Add Rental</NavLink>
        <NavLink to="/view-rentals" activeClassName="active-link">View Rentals</NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
