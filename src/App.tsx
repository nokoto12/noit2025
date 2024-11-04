import { useEffect, useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';

import Loader from './common/Loader';
import WelcomePage from './pagess/WelcomePage';
import SignUpPage from './pagess/SignUpPage';
import LoginPage from './pagess/LoginPage';
import ECommerce from './pages/Dashboard/ECommerce'; // Импорт на основния темплейт
import DefaultLayout from './layout/DefaultLayout';

const App = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false); // Изходна стойност
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  return loading ? (
    <Loader />
  ) : (
    <Routes>
      <Route path="/" element={<WelcomePage />} />
      <Route path="/signup" element={<SignUpPage />} />
      <Route 
        path="/login" 
        element={<LoginPage setIsAuthenticated={setIsAuthenticated} />} 
      />
      {isAuthenticated && (
        <Route path="/main" element={<ECommerce />} /> // Добавяме основния темплейт
      )}
      {/* Тук можете да добавите и другите маршрути, ако е необходимо */}
    </Routes>
  );
};

export default App;
