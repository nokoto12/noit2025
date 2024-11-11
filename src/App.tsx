import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import WelcomePage from './pagess/WelcomePage';
import LoginPage from './pagess/LoginPage';
import SignUpPage from './pagess/SignUpPage';
import ECommerce from './ECommerce';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <Routes>
      <Route path="/" element={<WelcomePage />} />
      <Route path="/login" element={<LoginPage setIsAuthenticated={setIsAuthenticated} />} />
      <Route path="/signup" element={<SignUpPage />} />
      <Route 
        path="/main" 
        element={
          <ECommerce 
            setIsAuthenticated={setIsAuthenticated} 
          />
        } 
      />
    </Routes>
  );
};

export default App;
