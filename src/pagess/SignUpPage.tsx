import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const SignUpPage = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSignUp = () => {
    navigate('/login');
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-emerald-600 to-amber-700 flex items-center justify-center p-6">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl p-8">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-amber-800">Create Account</h1>
          <p className="text-amber-700 mt-2">Join our community today</p>
        </div>

        <div className="space-y-4">
          <div>
            <label className="text-sm font-medium text-amber-800 block mb-2">Full Name</label>
            <input 
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-3 rounded-lg border border-amber-200 focus:border-emerald-500 focus:ring-emerald-500 transition-colors"
              placeholder="Enter your name"
            />
          </div>

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
              placeholder="Create a password"
            />
          </div>

          <div>
            <label className="text-sm font-medium text-amber-800 block mb-2">Confirm Password</label>
            <input 
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full px-4 py-3 rounded-lg border border-amber-200 focus:border-emerald-500 focus:ring-emerald-500 transition-colors"
              placeholder="Confirm your password"
            />
          </div>

          <button 
            onClick={handleSignUp}
            className="w-full bg-emerald-600 hover:bg-emerald-700 text-yellow-50 font-medium py-3 rounded-lg transition-colors mt-6"
          >
            Create Account
          </button>

          <div className="text-center mt-4">
            <Link to="/login" className="text-emerald-600 hover:text-emerald-700 font-medium">
              Already have an account? Sign in
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
