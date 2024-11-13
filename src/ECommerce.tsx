import React from 'react';
import { useNavigate } from 'react-router-dom';
import DefaultLayout from './layout/DefaultLayout';
import ChartOne from './components/Charts/ChartOne';
import ChartTwo from './components/Charts/ChartTwo';
import ChartThree from './components/Charts/ChartThree';
import MapOne from './components/Maps/MapOne';
import Calendar from './pages/Calendar';
import Alerts from './pages/UiElements/Alerts';
import TableOne from './components/Tables/TableOne';
import TableTwo from './components/Tables/TableTwo';
import TableThree from './components/Tables/TableThree';

interface ECommerceProps {
  setIsAuthenticated: (value: boolean) => void;
}

const ECommerce = ({ setIsAuthenticated }: ECommerceProps) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    setIsAuthenticated(false);
    navigate('/login');
  };

  return (
    <DefaultLayout>
      <div className="flex justify-end p-4">
        <button 
          onClick={handleLogout}
          className="bg-danger px-6 py-2 rounded-lg text-white hover:bg-opacity-90"
        >
          Изход
        </button>
      </div>
      <main className="max-w-screen-2xl p-4 md:p-6 2xl:p-10">
        <div className="grid grid-cols-12 gap-4 md:gap-6 2xl:gap-7.5">
          <ChartOne />
          <ChartTwo />
          <ChartThree />
        </div>
        <div className="mt-4">
          <MapOne />
        </div>
        <div className="mt-4">
          <Calendar />
        </div>
        <div className="mt-4">
          <Alerts />
        </div>
        <div className="mt-4 flex flex-col gap-10">
          <TableOne />
          <TableTwo />
          <TableThree />
        </div>
      </main>
    </DefaultLayout>
  );
};

export default ECommerce;
