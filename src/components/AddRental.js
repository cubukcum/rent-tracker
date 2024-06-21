// src/components/AddRental.js
import React, { useState } from 'react';
import axios from 'axios';

const AddRental = () => {
  const [tenantInfo, setTenantInfo] = useState({
    name: '',
    surname: '',
    phone: '',
    email: '',
    address: '',
    leaseStart: '',
    leaseEnd: '',
    rentAmount: '',
    deposit: '',
    paymentMethod: '',
    paymentDate: '',
    emergencyContact: '',
    emergencyPhone: '',
    notes: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTenantInfo({ ...tenantInfo, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/rentals', tenantInfo);
      alert('Rental added successfully');
    } catch (error) {
      console.error('There was an error adding the rental!', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add Rental</h2>
      <input name="name" placeholder="Name" onChange={handleChange} />
      <input name="surname" placeholder="Surname" onChange={handleChange} />
      <input name="phone" placeholder="Phone" onChange={handleChange} />
      <input name="email" placeholder="Email" onChange={handleChange} />
      <input name="address" placeholder="Address" onChange={handleChange} />
      <input name="leaseStart" placeholder="Lease Start Date" onChange={handleChange} />
      <input name="leaseEnd" placeholder="Lease End Date" onChange={handleChange} />
      <input name="rentAmount" placeholder="Rent Amount" onChange={handleChange} />
      <input name="deposit" placeholder="Deposit" onChange={handleChange} />
      <input name="paymentMethod" placeholder="Payment Method" onChange={handleChange} />
      <input name="paymentDate" placeholder="Payment Date" onChange={handleChange} />
      <input name="emergencyContact" placeholder="Emergency Contact" onChange={handleChange} />
      <input name="emergencyPhone" placeholder="Emergency Phone" onChange={handleChange} />
      <textarea name="notes" placeholder="Notes" onChange={handleChange}></textarea>
      <button type="submit">Add Rental</button>
    </form>
  );
};

export default AddRental;
