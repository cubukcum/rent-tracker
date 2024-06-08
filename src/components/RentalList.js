import React, { useContext, useState } from 'react';
import { RentalContext } from '../context/RentalContext';

const RentalList = () => {
  const { rentals, dispatch } = useContext(RentalContext);
  const [note, setNote] = useState('');

  const handleMarkPaid = (id) => {
    dispatch({ type: 'MARK_PAID', payload: { id, note } });
    setNote('');
  };

  return (
    <div>
      <h2>Rentals</h2>
      <ul>
        {rentals.map(rental => (
          <li key={rental.id}>
            {rental.name} - ${rental.rent} - {rental.paid ? `Paid on ${new Date(rental.paidDate).toLocaleDateString()}` : 'Not Paid'}
            <br />
            Start Date: {new Date(rental.startDate).toLocaleDateString()}
            <br />
            <input
              type="text"
              placeholder="Optional Note"
              value={note}
              onChange={(e) => setNote(e.target.value)}
            />
            <button onClick={() => handleMarkPaid(rental.id)}>Mark Paid</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RentalList;
