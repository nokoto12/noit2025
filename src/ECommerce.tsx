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
      <div className="flex justify-end p-4 bg-gradient-to-r from-emerald-50 to-amber-50">
        <button 
          onClick={handleLogout}
          className="bg-emerald-600 px-6 py-2 rounded-lg text-yellow-50 hover:bg-emerald-700 transition-colors shadow-lg border border-emerald-400"
        >
          Изход
        </button>
      </div>
      <main className="max-w-screen-2xl p-4 md:p-6 2xl:p-10 bg-gradient-to-br from-emerald-50 via-yellow-50 to-amber-50">
        <div className="grid grid-cols-12 gap-4 md:gap-6 2xl:gap-7.5">
          <div className="col-span-12 xl:col-span-8">
            <div className="rounded-lg border border-amber-200 bg-white p-4 shadow-lg">
              <ChartOne />
            </div>
          </div>
          <div className="col-span-12 xl:col-span-4">
            <div className="rounded-lg border border-amber-200 bg-white p-4 shadow-lg">
              <ChartTwo />
            </div>
          </div>
          <div className="col-span-12">
            <div className="rounded-lg border border-amber-200 bg-white p-4 shadow-lg">
              <ChartThree />
            </div>
          </div>
        </div>
        <div className="mt-4">
          <div className="rounded-lg border border-amber-200 bg-white p-4 shadow-lg">
            <MapOne />
          </div>
        </div>
        <div className="mt-4">
          <div className="rounded-lg border border-amber-200 bg-white p-4 shadow-lg">
            <Calendar />
          </div>
        </div>
        <div className="mt-4">
          <div className="rounded-lg border border-amber-200 bg-white p-4 shadow-lg">
            <Alerts />
          </div>
        </div>
        <div className="mt-4 flex flex-col gap-10">
          <div className="rounded-lg border border-amber-200 bg-white p-4 shadow-lg">
            <TableOne />
          </div>
          <div className="rounded-lg border border-amber-200 bg-white p-4 shadow-lg">
            <TableTwo />
          </div>
          <div className="rounded-lg border border-amber-200 bg-white p-4 shadow-lg">
            <TableThree />
          </div>
        </div>
      </main>
    </DefaultLayout>
  );
};

export default ECommerce;
