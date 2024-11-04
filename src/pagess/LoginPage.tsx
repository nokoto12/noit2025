import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginPage = ({ setIsAuthenticated }: { setIsAuthenticated: React.Dispatch<React.SetStateAction<boolean>> }) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    setIsAuthenticated(true); // Задаваме isAuthenticated на true
    navigate('/main'); // Пренасочваме към основния темплейт
  };

  return (
    <div>
      <h1>Влизане в акаунт</h1>
      <h1>Email</h1>
      <input 
        type="email" 
        value={email} 
        onChange={(e) => setEmail(e.target.value)} 
        placeholder="Въведете имейл"
      />
      <h1>Парола</h1>
      <input 
        type="password" 
        value={password} 
        onChange={(e) => setPassword(e.target.value)} 
        placeholder="Въведете парола"
      />
      <button onClick={handleLogin}>Влизане</button>
    </div>
  );
};

export default LoginPage;

