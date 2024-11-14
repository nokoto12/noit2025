import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const LoginPage = ({ setIsAuthenticated }: { setIsAuthenticated: React.Dispatch<React.SetStateAction<boolean>> }) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
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

  return (
    <div className="min-h-screen bg-gradient-to-r from-emerald-400 to-amber-400 flex items-center justify-center p-6">
      <div className={`w-full max-w-md bg-white/95 rounded-2xl shadow-2xl p-10 backdrop-blur-sm transition-all duration-300 
        ${(errors.email || errors.password) ? 'border-2 border-red-500' : 'border-2 border-amber-300'}`}>
        <div className="mb-10 text-center">
          <h1 className="text-4xl font-bold text-amber-950">Welcome Back</h1>
          <p className="text-amber-900 mt-3 text-lg">Enter your credentials to continue</p>
        </div>

        <div className="space-y-6">
          <div>
            <label className="text-base font-semibold text-amber-900 block mb-2">Email</label>
            <input 
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={`w-full px-4 py-3 rounded-xl transition-all text-lg
                ${errors.email 
                  ? 'border-2 border-red-500 focus:border-red-600 bg-red-50' 
                  : 'border-2 border-amber-300 focus:border-emerald-500 focus:ring-emerald-500'}`}
              placeholder="Enter your email"
            />
            {errors.email && (
              <p className="mt-2 text-sm font-medium text-red-600">Please enter your email</p>
            )}
          </div>

          <div>
            <label className="text-base font-semibold text-amber-900 block mb-2">Password</label>
            <input 
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={`w-full px-4 py-3 rounded-xl transition-all text-lg
                ${errors.password 
                  ? 'border-2 border-red-500 focus:border-red-600 bg-red-50' 
                  : 'border-2 border-amber-300 focus:border-emerald-500 focus:ring-emerald-500'}`}
              placeholder="Enter your password"
            />
            {errors.password && (
              <p className="mt-2 text-sm font-medium text-red-600">Please enter your password</p>
            )}
          </div>

          <button 
            onClick={handleLogin}
            className="w-full bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-4 rounded-xl transition-all transform hover:scale-105 text-lg shadow-xl"
          >
            Sign In
          </button>

          <div className="text-center mt-6">
            <Link to="/signup" className="text-emerald-700 hover:text-emerald-800 font-bold text-lg">
              Need an account? Sign up
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
