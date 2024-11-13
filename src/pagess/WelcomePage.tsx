import React from 'react';
import { useNavigate } from 'react-router-dom';

const WelcomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-600 via-yellow-500 to-amber-700 flex items-center justify-center p-6">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-5xl font-bold text-yellow-50 mb-6">
          Welcome to TeenBudget
        </h1>
        <p className="text-xl text-yellow-50/90 mb-12 max-w-2xl mx-auto">
          Powerful analytics and beautiful visualizations for your business
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button 
            onClick={() => navigate('/signup')}
            className="px-8 py-4 bg-emerald-600 text-yellow-50 rounded-lg font-medium hover:bg-emerald-700 transition-colors"
          >
            Create Account
          </button>
          
          <button 
            onClick={() => navigate('/login')}
            className="px-8 py-4 border-2 border-yellow-400 text-yellow-50 rounded-lg font-medium hover:bg-amber-700 transition-colors"
          >
            Sign In
          </button>
        </div>
      </div>
    </div>
  );
};

export default WelcomePage;
