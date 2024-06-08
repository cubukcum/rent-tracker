
import React, { useState, useContext } from 'react';
import { RentalContext } from '../context/RentalContext';

const RentalForm = () => {
  const { dispatch } = useContext(RentalContext);
  const [name, setName] = useState('');
  const [rent, setRent] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: 'ADD_RENTAL', payload: { id: Date.now(), name, rent } });
    setName('');
    setRent('');
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
      <button type="submit">Add Rental</button>
    </form>
  );
};

export default RentalForm;
