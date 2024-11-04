import React from 'react';
import { useNavigate } from 'react-router-dom';

const SignUpPage = () => {
  const navigate = useNavigate();

  const handleSignUp = () => {
    // Тук можеш да добавиш логика за регистрация
    navigate('/login'); // Пренасочване към LoginPage след регистрация
  };

  return (
    <div>
      <h1>Създаване на акаунт</h1>
      <button onClick={handleSignUp}>Създаване</button>
    </div>
  );
};

export default SignUpPage;
