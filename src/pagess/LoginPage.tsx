import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const LoginPage = ({ setIsAuthenticated }: { setIsAuthenticated: React.Dispatch<React.SetStateAction<boolean>> }) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    setIsAuthenticated(true);
    navigate('/main');
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-emerald-600 to-amber-700 flex items-center justify-center p-6">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl p-8">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-amber-800">Welcome Back</h1>
          <p className="text-amber-700 mt-2">Enter your credentials to continue</p>
        </div>

        <div className="space-y-6">
          <div>
            <label className="text-sm font-medium text-amber-800 block mb-2">Email</label>
            <input 
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 rounded-lg border border-amber-200 focus:border-emerald-500 focus:ring-emerald-500 transition-colors"
              placeholder="Enter your email"
            />
          </div>

          <div>
            <label className="text-sm font-medium text-amber-800 block mb-2">Password</label>
            <input 
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 rounded-lg border border-amber-200 focus:border-emerald-500 focus:ring-emerald-500 transition-colors"
              placeholder="Enter your password"
            />
          </div>

          <button 
            onClick={handleLogin}
            className="w-full bg-emerald-600 hover:bg-emerald-700 text-yellow-50 font-medium py-3 rounded-lg transition-colors"
          >
            Sign In
          </button>

          <div className="text-center mt-4">
            <Link to="/signup" className="text-emerald-600 hover:text-emerald-700 font-medium">
              Need an account? Sign up
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;

