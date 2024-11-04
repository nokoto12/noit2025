import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SignUpPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();

  const handleSignUp = () => {
    // Логика за регистрация (може да добавите валидация и т.н.)
    navigate('/login'); // След натискане на бутона 'създаване', пренасочваме към страницата за вход
  };

  return (
    <div>
      <h1>Създаване на акаунт</h1>
      <h1>Име</h1>
      <input 
        type="text" 
        value={name} 
        onChange={(e) => setName(e.target.value)} 
        placeholder="Въведете име"
      />
      <h1>Имейл</h1>
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
      <h1>Потвърдете паролата</h1>
      <input 
        type="password" 
        value={confirmPassword} 
        onChange={(e) => setConfirmPassword(e.target.value)} 
        placeholder="Потвърдете паролата"
      />
      <button onClick={handleSignUp}>Създаване</button>
    </div>
  );
};

export default SignUpPage;
