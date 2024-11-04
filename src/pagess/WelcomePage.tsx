import React from 'react';
import { useNavigate } from 'react-router-dom';

function WelcomePage() {
  const navigate = useNavigate();

  const handleSignUp = () => {
    navigate('/signup');
  };

  const handleLogin = () => {
    navigate('/login');
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px', backgroundColor: 'white' }}>
      <h1>Добре дошли!</h1>
      <button onClick={handleSignUp} className="mr-2">Създаване на акаунт</button>
      <button onClick={handleLogin}>Влизане в акаунт</button>
    </div>
  );
}

export default WelcomePage;
