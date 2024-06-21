// src/context/AuthContext.js
import React, { createContext, useState } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userRole, setUserRole] = useState(null); // To track user role

  const login = (username, password) => {
    if (username === 'admin' && password === 'password') {
      setIsAuthenticated(true);
      setUserRole('admin');
    } else if (username === 'tenant' && password === 'password') {
      setIsAuthenticated(true);
      setUserRole('tenant');
    }
  };

  const logout = () => {
    setIsAuthenticated(false);
    setUserRole(null);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, userRole, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
