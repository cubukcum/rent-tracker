// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { RentalProvider } from './context/RentalContext';

ReactDOM.render(
  <RentalProvider>
    <App />
  </RentalProvider>,
  document.getElementById('root')
);
