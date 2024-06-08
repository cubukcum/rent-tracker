import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/add-rental">Add Rental</Link>
      <Link to="/view-rentals">View Rentals</Link>
    </nav>
  );
};

export default Navbar;
