import { useEffect, useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Loader from './common/Loader';
import ECommerce from './pages/Dashboard/ECommerce'; // Показваме основната страница
import DefaultLayout from './layout/DefaultLayout';

function App() {
  const [loading, setLoading] = useState<boolean>(true);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false); // Булева променлива
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  // Логика за показване на страницата
  return loading ? (
    <Loader />
  ) : isLoggedIn ? (
    <DefaultLayout>
      <Routes>
        <Route path="/" element={<ECommerce />} />
        {/* Други защитени маршрути могат да се добавят тук */}
      </Routes>
    </DefaultLayout>
  ) : (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Log In Page</h1>
      <h2>Create an account!</h2>
      {/* Тук можеш да добавиш бутони за вход и регистрация */}
    </div>
  );
}

export default App;
