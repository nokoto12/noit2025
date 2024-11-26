import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Footer from '../components/Footerr/Footer';
import { useTheme } from '../context/ThemeContext';
import ThemeToggle from '../components/ThemeToggle';

const LoginPage = ({ setIsAuthenticated }: { setIsAuthenticated: React.Dispatch<React.SetStateAction<boolean>> }) => {
  const navigate = useNavigate();
  const { isDarkMode } = useTheme();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [errors, setErrors] = useState({ email: false, password: false });

  const handleLogin = () => {
    const newErrors = { email: false, password: false };
    let hasError = false;

    if (!email) {
      newErrors.email = true;
      hasError = true;
    }
    if (!password) {
      newErrors.password = true;
      hasError = true;
    }

    setErrors(newErrors);

    if (!hasError) {
      setIsAuthenticated(true);
      navigate('/main');
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
                Добре дошли отново
              </h1>
              <p className={`mt-3 text-lg ${isDarkMode ? 'text-gray-300' : 'text-amber-900'}`}>
                Въведете вашите данни за достъп
              </p>
            </div>

            <div className="space-y-6">
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
                  placeholder="Въведете вашата парола"
                />
                {errors.password && (
                  <p className="mt-2 text-sm font-medium text-red-500">
                    Моля, въведете вашата парола
                  </p>
                )}
              </div>

              <div className="flex items-center">
                <label className={`flex items-center cursor-pointer group ${
                  isDarkMode ? 'text-gray-200' : 'text-amber-900'
                }`}>
                  <input
                    type="checkbox"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                    className="sr-only"
                  />
                  <div className={`w-5 h-5 border-2 rounded transition-all flex items-center justify-center ${
                    rememberMe 
                      ? isDarkMode ? 'bg-emerald-600 border-emerald-600' : 'bg-emerald-500 border-emerald-500'
                      : isDarkMode ? 'border-gray-600' : 'border-amber-300'
                  }`}>
                    {rememberMe && (
                      <svg className="w-3 h-3 text-white" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                        <path d="M5 13l4 4L19 7"></path>
                      </svg>
                    )}
                  </div>
                  <span className="ml-2 font-medium">Запомни ме</span>
                </label>
              </div>

              <button 
                onClick={handleLogin}
                className={`w-full ${
                  isDarkMode 
                    ? 'bg-emerald-600 hover:bg-emerald-700' 
                    : 'bg-emerald-500 hover:bg-emerald-600'
                } text-white font-bold py-4 rounded-xl transition-all transform hover:scale-105 text-lg shadow-xl`}
              >
                Вход
              </button>

              <div className="text-center mt-6">
                <Link 
                  to="/signup" 
                  className={`font-bold text-lg ${
                    isDarkMode ? 'text-emerald-400 hover:text-emerald-300' : 'text-emerald-700 hover:text-emerald-800'
                  }`}
                >
                  Нямате акаунт? Регистрирайте се
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

export default LoginPage;
