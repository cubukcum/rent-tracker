import React, { createContext, useReducer } from 'react';

const RentalContext = createContext();

const rentalReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_RENTAL':
      return [...state, action.payload];
    case 'REMOVE_RENTAL':
      return state.filter(rental => rental.id !== action.payload);
    case 'UPDATE_RENTAL':
      return state.map(rental => rental.id === action.payload.id ? action.payload : rental);
    default:
      return state;
  }
};

const RentalProvider = ({ children }) => {
  const [rentals, dispatch] = useReducer(rentalReducer, []);

  return (
    <RentalContext.Provider value={{ rentals, dispatch }}>
      {children}
    </RentalContext.Provider>
  );
};

export { RentalContext, RentalProvider };
