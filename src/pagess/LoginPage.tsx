import React from 'react';
import { useNavigate } from 'react-router-dom';

const LoginPage = ({ setIsAuthenticated }: { setIsAuthenticated: React.Dispatch<React.SetStateAction<boolean>> }) => {
  const navigate = useNavigate();

  const handleLogin = () => {
    setIsAuthenticated(true); // Задаваме isAuthenticated на true
    navigate('/main'); // Пренасочваме към основния темплейт
  };

  return (
    <div>
      <h1>Влизане в акаунт</h1>
      <button onClick={handleLogin}>Влизане</button>
    </div>
  );
};

export default LoginPage;
