import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import RentalForm from './components/RentalForm';
import RentalList from './components/RentalList';
import NavBar from './components/NavBar';

function App() {
  return (
    <Router>
      <div className="App">
            <NavBar />
        <main>
          <Routes>
            <Route path="/" element={<h1>Welcome to the Rental Tracker</h1>} />
            <Route path="/add-rental" element={<RentalForm />} />
            <Route path="/view-rentals" element={<RentalList />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
