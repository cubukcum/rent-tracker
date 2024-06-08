
import React, { createContext, useReducer, useEffect } from 'react';
import axios from 'axios';

const RentalContext = createContext();

const rentalReducer = (state, action) => {
  switch (action.type) {
    case 'SET_RENTALS':
      return action.payload;
    case 'ADD_RENTAL':
      return [...state, action.payload];
    case 'REMOVE_RENTAL':
      return state.filter(rental => rental.id !== action.payload);
    case 'UPDATE_RENTAL':
      return state.map(rental => rental.id === action.payload.id ? action.payload : rental);
    case 'MARK_PAID':
      return state.map(rental => rental.id === action.payload.id ? { ...rental, paid: true, paidDate: new Date(), note: action.payload.note } : rental);
    default:
      return state;
  }
};

const RentalProvider = ({ children }) => {
  const [rentals, dispatch] = useReducer(rentalReducer, []);

  useEffect(() => {
    const fetchRentals = async () => {
      const response = await axios.get('http://localhost:5000/rentals');
      dispatch({ type: 'SET_RENTALS', payload: response.data });
    };
    fetchRentals();
  }, []);

  useEffect(() => {
    const saveRentals = async () => {
      rentals.forEach(async rental => {
        await axios.put(`http://localhost:5000/rentals/${rental.id}`, rental);
      });
    };
    saveRentals();
  }, [rentals]);

  useEffect(() => {
    const checkForUpdates = () => {
      rentals.forEach(rental => {
        const startDate = new Date(rental.startDate);
        const nextYear = new Date(startDate.setFullYear(startDate.getFullYear() + 1));
        const today = new Date();
        const reminderDate = new Date(nextYear.setDate(nextYear.getDate() - 30));

        if (today >= reminderDate && today < nextYear) {
          alert(`Reminder: Consider updating the rent for ${rental.name}.`);
        }
      });
    };

    checkForUpdates();
  }, [rentals]);

  return (
    <RentalContext.Provider value={{ rentals, dispatch }}>
      {children}
    </RentalContext.Provider>
  );
};

export { RentalContext, RentalProvider };
