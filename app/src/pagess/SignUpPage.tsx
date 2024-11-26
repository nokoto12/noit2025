import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Footer from '../components/Footerr/Footer';
import { useTheme } from '../context/ThemeContext';
import ThemeToggle from '../components/ThemeToggle';

const SignUpPage = () => {
  const navigate = useNavigate();
  const { isDarkMode } = useTheme();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errors, setErrors] = useState({
    name: false,
    email: false,
    password: false,
    confirmPassword: false
  });

  const handleSignUp = () => {
    const newErrors = {
      name: !name,
      email: !email,
      password: !password,
      confirmPassword: !confirmPassword || password !== confirmPassword
    };

    setErrors(newErrors);

    if (!Object.values(newErrors).includes(true)) {
      navigate('/login');
    }
  };

  const inputClasses = (error: boolean) => `
    w-full px-4 py-3 rounded-xl text-lg transition-all duration-300
    ${isDarkMode
      ? error
        ? 'bg-red-900/20 border-2 border-red-500 text-white placeholder-red-400'
        : 'bg-gray-700/50 border-2 border-gray-600 text-white placeholder-gray-400 focus:border-emerald-500'
      : error
        ? 'bg-red-50 border-2 border-red-500 text-red-900 placeholder-red-400'
        : 'bg-white border-2 border-amber-300 text-amber-900 placeholder-amber-400 focus:border-emerald-500'
    }
  `;

  return (
    <div className={isDarkMode ? 'dark' : ''}>
      <div className={`min-h-screen ${
        isDarkMode 
          ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900' 
          : 'bg-gradient-to-r from-emerald-400 to-amber-400'
      } flex flex-col`}>
        <div className="absolute top-4 right-4">
          <ThemeToggle />
        </div>

        <div className="flex-grow flex items-center justify-center p-6">
          <div className={`w-full max-w-md ${
            isDarkMode ? 'bg-gray-800/90' : 'bg-white/95'
          } rounded-2xl shadow-2xl p-10 backdrop-blur-sm`}>
            
            <div className="mb-10 text-center">
              <h1 className={`text-4xl font-bold ${isDarkMode ? 'text-white' : 'text-amber-950'}`}>
                Създаване на акаунт
              </h1>
              <p className={`mt-3 text-lg ${isDarkMode ? 'text-gray-300' : 'text-amber-900'}`}>
                Присъединете се към нашата общност
              </p>
            </div>

            <div className="space-y-5">
              <div>
                <label className={`text-base font-semibold block mb-2 ${
                  isDarkMode ? 'text-gray-200' : 'text-amber-900'
                }`}>
                  Име и фамилия
                </label>
                <input 
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className={inputClasses(errors.name)}
                  placeholder="Въведете вашето име"
                />
                {errors.name && (
                  <p className="mt-2 text-sm font-medium text-red-500">
                    Моля, въведете вашето име
                  </p>
                )}
              </div>

              <div>
                <label className={`text-base font-semibold block mb-2 ${
                  isDarkMode ? 'text-gray-200' : 'text-amber-900'
                }`}>
                  Имейл
                </label>
                <input 
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={inputClasses(errors.email)}
                  placeholder="Въведете вашия имейл"
                />
                {errors.email && (
                  <p className="mt-2 text-sm font-medium text-red-500">
                    Моля, въведете вашия имейл
                  </p>
                )}
              </div>

              <div>
                <label className={`text-base font-semibold block mb-2 ${
                  isDarkMode ? 'text-gray-200' : 'text-amber-900'
                }`}>
                  Парола
                </label>
                <input 
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className={inputClasses(errors.password)}
                  placeholder="Въведете парола"
                />
                {errors.password && (
                  <p className="mt-2 text-sm font-medium text-red-500">
                    Моля, въведете парола
                  </p>
                )}
              </div>

              <div>
                <label className={`text-base font-semibold block mb-2 ${
                  isDarkMode ? 'text-gray-200' : 'text-amber-900'
                }`}>
                  Потвърдете паролата
                </label>
                <input 
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className={inputClasses(errors.confirmPassword)}
                  placeholder="Потвърдете паролата"
                />
                {errors.confirmPassword && (
                  <p className="mt-2 text-sm font-medium text-red-500">
                    Паролите не съвпадат
                  </p>
                )}
              </div>

              <button 
                onClick={handleSignUp}
                className={`w-full ${
                  isDarkMode 
                    ? 'bg-emerald-600 hover:bg-emerald-700' 
                    : 'bg-emerald-500 hover:bg-emerald-600'
                } text-white font-bold py-4 rounded-xl transition-all transform hover:scale-105 text-lg shadow-xl mt-6`}
              >
                Създай акаунт
              </button>

              <div className="text-center mt-6">
                <Link 
                  to="/login" 
                  className={`font-bold text-lg ${
                    isDarkMode ? 'text-emerald-400 hover:text-emerald-300' : 'text-emerald-700 hover:text-emerald-800'
                  }`}
                >
                  Вече имате акаунт? Влезте
                </Link>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default SignUpPage;
