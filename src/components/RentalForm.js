// src/components/RentalForm.js
import React, { useState, useContext } from 'react';
import { RentalContext } from '../context/RentalContext';
import axios from 'axios';

const RentalForm = () => {
  const { dispatch } = useContext(RentalContext);
  const [name, setName] = useState('');
  const [rent, setRent] = useState('');
  const [startDate, setStartDate] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newRental = { id: Date.now(), name, rent, startDate, paid: false, paidDate: null, note: '' };
    try {
      const response = await axios.post('http://localhost:5000/rentals', newRental);
      dispatch({ type: 'ADD_RENTAL', payload: response.data });
      setName('');
      setRent('');
      setStartDate('');
    } catch (error) {
      console.error('Error adding rental:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Rental Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        type="number"
        placeholder="Rent Amount"
        value={rent}
        onChange={(e) => setRent(e.target.value)}
        required
      />
      <input
        type="date"
        placeholder="Rent Start Date"
        value={startDate}
        onChange={(e) => setStartDate(e.target.value)}
        required
      />
      <button type="submit">Add Rental</button>
    </form>
  );
};

export default RentalForm;
