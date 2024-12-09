import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import WelcomePage from './pagess/WelcomePage';
import LoginPage from './pagess/LoginPage';
import SignUpPage from './pagess/SignUpPage';
import ECommerce from './ECommerce';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <ThemeProvider>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/login" element={<LoginPage setIsAuthenticated={setIsAuthenticated} />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route 
          path="/main" 
          element={
            <ECommerce setIsAuthenticated={setIsAuthenticated} />
          } 
        />
      </Routes>
    </ThemeProvider>
  );
};

export default App;
