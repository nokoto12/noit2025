import React from 'react';
import { useNavigate } from 'react-router-dom';

const WelcomePage = () => {
  const navigate = useNavigate();

  return (
    // Main container - Customize background pattern/gradient
    <div className="min-h-screen bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 flex items-center justify-center p-6">
      {/* Content container - Adjust width and spacing */}
      <div className="max-w-4xl mx-auto text-center">
        {/* Hero section - Customize text styles and spacing */}
        <h1 className="text-5xl font-bold text-white mb-6">
          Welcome to TeenBuget
        </h1>
        <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto">
          Powerful analytics and beautiful visualizations for your business
        </p>

        {/* Buttons container - Adjust spacing and layout */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          {/* Sign Up button - Customize colors and hover effects */}
          <button 
            onClick={() => navigate('/signup')}
            className="px-8 py-4 bg-white text-indigo-600 rounded-lg font-medium hover:bg-opacity-90 transition-colors"
          >
            Create Account
          </button>
          
          {/* Login button - Customize border and hover effects */}
          <button 
            onClick={() => navigate('/login')}
            className="px-8 py-4 border-2 border-white text-white rounded-lg font-medium hover:bg-white hover:text-indigo-600 transition-colors"
          >
            Sign In
          </button>
        </div>
      </div>
    </div>
  );
};

export default WelcomePage;
