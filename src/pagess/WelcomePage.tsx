import React from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from '../components/Footerr/Footer';


const WelcomePage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-emerald-400 via-yellow-300 to-amber-400 flex items-center justify-center p-6">
        <div className="max-w-4xl mx-auto text-center bg-white/90 rounded-2xl p-12 shadow-2xl backdrop-blur-sm">
          <h1 className="text-6xl font-bold text-amber-950 mb-6">
            Welcome to Dashboard
          </h1>
          <p className="text-2xl text-amber-900 mb-12 max-w-2xl mx-auto">
            Powerful analytics and beautiful visualizations for your business
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button 
              onClick={() => navigate('/signup')}
              className="px-10 py-5 bg-emerald-500 text-white rounded-xl font-bold hover:bg-emerald-600 transition-all transform hover:scale-105 shadow-xl"
            >
              Create Account
            </button>
            
            <button 
              onClick={() => navigate('/login')}
              className="px-10 py-5 border-3 border-amber-500 text-amber-900 rounded-xl font-bold hover:bg-amber-400 hover:text-amber-950 transition-all transform hover:scale-105 shadow-xl"
            >
              Sign In
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default WelcomePage;
