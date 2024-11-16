import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Footer from '../components/Footerr/Footer';

const SignUpPage = () => {
  const navigate = useNavigate();
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

  return (
    <>
      <div className="min-h-screen bg-gradient-to-r from-emerald-400 to-amber-400 flex items-center justify-center p-6">
        <div className={`w-full max-w-md bg-white/95 rounded-2xl shadow-2xl p-10 backdrop-blur-sm transition-all duration-300 
          ${Object.values(errors).includes(true) ? 'border-2 border-red-500' : 'border-2 border-amber-300'}`}>
          
          <div className="mb-10 text-center">
            <h1 className="text-4xl font-bold text-amber-950">Create Account</h1>
            <p className="text-amber-900 mt-3 text-lg">Join our community today</p>
          </div>

          <div className="space-y-5">
            <div>
              <label className="text-base font-semibold text-amber-900 block mb-2">Full Name</label>
              <input 
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className={`w-full px-4 py-3 rounded-xl transition-all text-lg
                  ${errors.name 
                    ? 'border-2 border-red-500 focus:border-red-600 bg-red-50' 
                    : 'border-2 border-amber-300 focus:border-emerald-500 focus:ring-emerald-500'}`}
                placeholder="Enter your name"
              />
              {errors.name && (
                <p className="mt-2 text-sm font-medium text-red-600">Please enter your name</p>
              )}
            </div>

            <div>
              <label className="text-base font-semibold text-amber-900 block mb-2">Email Address</label>
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

            <div>
              <label className="text-base font-semibold text-amber-900 block mb-2">Confirm Password</label>
              <input 
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className={`w-full px-4 py-3 rounded-xl transition-all text-lg
                  ${errors.confirmPassword 
                    ? 'border-2 border-red-500 focus:border-red-600 bg-red-50' 
                    : 'border-2 border-amber-300 focus:border-emerald-500 focus:ring-emerald-500'}`}
                placeholder="Confirm your password"
              />
              {errors.confirmPassword && (
                <p className="mt-2 text-sm font-medium text-red-600">Passwords do not match</p>
              )}
            </div>

            <button 
              onClick={handleSignUp}
              className="w-full bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-4 rounded-xl transition-all transform hover:scale-105 text-lg shadow-xl mt-6"
            >
              Create Account
            </button>

            <div className="text-center mt-6">
              <Link to="/login" className="text-emerald-700 hover:text-emerald-800 font-bold text-lg">
                Already have an account? Sign in
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SignUpPage;
