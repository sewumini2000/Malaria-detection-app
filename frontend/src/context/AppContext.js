import React, { createContext, useContext, useState } from 'react';

// Create context
const AppContext = createContext();

// Provider
export const AppProvider = ({ children }) => {
  const [view, setView] = useState('parasitedetector');
  const [prediction, setPrediction] = useState('');
const [parasiteInfo, setParasiteInfo] = useState({});

  return (
    <AppContext.Provider
      value={{
       view, setView,
       prediction, setPrediction,
       parasiteInfo, setParasiteInfo
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

// Custom Hook
export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
};
