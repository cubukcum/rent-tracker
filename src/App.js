// import React from 'react';
// import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
// import './App.css';
// import RentalForm from './components/RentalForm';
// import RentalList from './components/RentalList';
// import NavBar from './components/NavBar';

// function App() {
//   return (
//     <Router>
//       <div className="App">
//             <NavBar />
//         <main>
//           <Routes>
//             <Route path="/" element={<h1>Welcome to the Rental Tracker</h1>} />
//             <Route path="/add-rental" element={<RentalForm />} />
//             <Route path="/view-rentals" element={<RentalList />} />
//           </Routes>
//         </main>
//       </div>
//     </Router>
//   );
// }

// export default App;
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import NavBar from './components/NavBar';
// import Home from './components/Home';
import RentalForm from './components/RentalForm';
import RentalList from './components/RentalList';
import Login from './components/Login';
import './App.css';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <Router>
      <NavBar isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} />
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/" element={<h1>Welcome to the Rental Tracker</h1>} />

        <Route path="/login" element={<Login setIsAuthenticated={setIsAuthenticated} />} />
        {isAuthenticated ? (
          <>
            <Route path="/add-rental" element={<RentalForm />} />
            <Route path="/view-rentals" element={<RentalList />} />
          </>
        ) : (
          <Route path="*" element={<Navigate to="/login" />} />
        )}
      </Routes>
    </Router>
  );
}

export default App;
