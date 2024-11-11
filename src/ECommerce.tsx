import React from 'react';
import { useNavigate } from 'react-router-dom';
import ChartOne from './components/Charts/ChartOne';
import ChartTwo from './components/Charts/ChartTwo';
import ChartThree from './components/Charts/ChartThree';
import TableOne from './components/Tables/TableOne';
import TableTwo from './components/Tables/TableTwo';
import TableThree from './components/Tables/TableThree';
import MapOne from './components/Maps/MapOne';
import Buttons from './pages/UiElements/Buttons';
import Calendar from './pages/Calendar';
import { BRAND } from './types/brand';
import { Chat } from './types/chat';
import { Package } from './types/package';
import { Product } from './types/product';

interface ECommerceProps {
  setIsAuthenticated: (value: boolean) => void;
}

// Sample data using our types
const sampleProducts: Product[] = [
  {
    image: '/product1.jpg',
    name: 'Product 1',
    category: 'Electronics',
    price: 299,
    sold: 120,
    profit: 1200
  }
];

const samplePackages: Package[] = [
  {
    name: 'Premium Package',
    price: 199,
    invoiceDate: '2024-01-20',
    status: 'Active'
  }
];

const sampleChats: Chat[] = [
  {
    avatar: '/avatar1.jpg',
    name: 'John Doe',
    text: 'Hello there!',
    time: 1234567890,
    textCount: 1,
    color: 'primary'
  }
];

const sampleBrands: BRAND[] = [
  {
    logo: '/brand1.jpg',
    name: 'TechBrand',
    visitors: 1500,
    revenues: '$15,000',
    sales: 450,
    conversion: 75
  }
];

const ECommerce = ({ setIsAuthenticated }: ECommerceProps) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    setIsAuthenticated(false);
    navigate('/login');
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header with Navigation */}
      <div className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 py-6 flex justify-between items-center">
          <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
          <div className="flex items-center gap-4">
            <button 
              onClick={() => navigate('/profile')}
              className="bg-primary px-6 py-2 rounded-lg text-white hover:bg-opacity-90"
            >
              Profile
            </button>
            <button 
              onClick={() => navigate('/settings')}
              className="bg-primary px-6 py-2 rounded-lg text-white hover:bg-opacity-90"
            >
              Settings
            </button>
            <button 
              onClick={handleLogout}
              className="bg-danger px-6 py-2 rounded-lg text-white hover:bg-opacity-90"
            >
              Изход
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-6">
        {/* Products Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          {sampleProducts.map((product, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow">
              <img src={product.image} alt={product.name} className="w-full h-32 object-cover mb-4" />
              <h3 className="font-semibold">{product.name}</h3>
              <p className="text-gray-600">${product.price}</p>
            </div>
          ))}
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-12 gap-4 md:gap-6 2xl:gap-7.5">
          <ChartOne />
          <ChartTwo />
          <ChartThree />
        </div>

        {/* Map Section */}
        <div className="mt-4">
          <MapOne />
        </div>

        {/* Calendar Section */}
        <div className="mt-4">
          <Calendar />
        </div>

        {/* Brand Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          {sampleBrands.map((brand, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow">
              <img src={brand.logo} alt={brand.name} className="h-12 mb-4" />
              <h3 className="font-semibold">{brand.name}</h3>
              <p>Revenue: {brand.revenues}</p>
              <p>Conversion: {brand.conversion}%</p>
            </div>
          ))}
        </div>

        {/* Chat Section */}
        <div className="mt-4 bg-white rounded-lg shadow p-4">
          <h2 className="text-xl font-semibold mb-4">Recent Chats</h2>
          {sampleChats.map((chat, index) => (
            <div key={index} className="flex items-center gap-4 mb-4">
              <img src={chat.avatar} alt={chat.name} className="w-10 h-10 rounded-full" />
              <div>
                <h4 className="font-semibold">{chat.name}</h4>
                <p className="text-gray-600">{chat.text}</p>
              </div>
            </div>
          ))}
        </div>

        {/* UI Elements - Buttons */}
        <div className="mt-4">
          <Buttons />
        </div>

        {/* Tables Section */}
        <div className="flex flex-col gap-10 mt-4">
          <TableOne />
          <TableTwo />
          <TableThree />
        </div>
      </main>
    </div>
  );
};

export default ECommerce;
