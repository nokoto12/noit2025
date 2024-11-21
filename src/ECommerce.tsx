import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTheme } from './context/ThemeContext';
import ThemeToggle from './components/ThemeToggle';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from 'chart.js';
import { Line, Bar, Doughnut } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

interface Transaction {
  id: number;
  type: 'income' | 'expense';
  amount: number;
  category: string;
  date: string;
  description: string;
}

const ECommerce = ({ setIsAuthenticated }: { setIsAuthenticated: (value: boolean) => void }) => {
  const navigate = useNavigate();
  const { isDarkMode } = useTheme();
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [newTransaction, setNewTransaction] = useState({
    type: 'income',
    amount: '',
    category: '',
    description: ''
  });

  const handleLogout = () => {
    setIsAuthenticated(false);
    navigate('/login');
  };

  const handleAddTransaction = () => {
    if (newTransaction.amount && newTransaction.category) {
      setTransactions([
        ...transactions,
        {
          id: Date.now(),
          type: newTransaction.type as 'income' | 'expense',
          amount: parseFloat(newTransaction.amount),
          category: newTransaction.category,
          date: new Date().toISOString().split('T')[0],
          description: newTransaction.description
        }
      ]);
      setNewTransaction({
        type: 'income',
        amount: '',
        category: '',
        description: ''
      });
    }
  };

  // Данни за графиките
  const monthlyData = {
    labels: ['Януари', 'Февруари', 'Март', 'Април', 'Май', 'Юни'],
    datasets: [
      {
        label: 'Приходи',
        data: transactions
          .filter(t => t.type === 'income')
          .map(t => t.amount),
        borderColor: 'rgb(34, 197, 94)',
        backgroundColor: 'rgba(34, 197, 94, 0.5)',
      },
      {
        label: 'Разходи',
        data: transactions
          .filter(t => t.type === 'expense')
          .map(t => t.amount),
        borderColor: 'rgb(239, 68, 68)',
        backgroundColor: 'rgba(239, 68, 68, 0.5)',
      }
    ]
  };

  const categoryData = {
    labels: ['Джобни', 'Подаръци', 'Храна', 'Транспорт', 'Забавления'],
    datasets: [{
      data: [300, 150, 200, 100, 250],
      backgroundColor: [
        'rgba(34, 197, 94, 0.8)',
        'rgba(59, 130, 246, 0.8)',
        'rgba(239, 68, 68, 0.8)',
        'rgba(245, 158, 11, 0.8)',
        'rgba(168, 85, 247, 0.8)'
      ]
    }]
  };

  return (
    <div className={`min-h-screen ${
      isDarkMode ? 'bg-gray-900 text-white' : 'bg-gradient-to-br from-emerald-50 via-yellow-50 to-amber-50'
    }`}>
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Моят Бюджет</h1>
          <div className="flex items-center gap-4">
            <ThemeToggle />
            <button
              onClick={handleLogout}
              className={`px-4 py-2 rounded-lg ${
                isDarkMode 
                  ? 'bg-red-600 hover:bg-red-700' 
                  : 'bg-red-500 hover:bg-red-600'
              } text-white transition-colors`}
            >
              Изход
            </button>
          </div>
        </div>

        {/* Форма за добавяне на транзакция */}
        <div className={`p-6 rounded-xl mb-8 ${
          isDarkMode ? 'bg-gray-800' : 'bg-white'
        } shadow-lg`}>
          <h2 className="text-xl font-semibold mb-4">Нова транзакция</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <select
              value={newTransaction.type}
              onChange={(e) => setNewTransaction({...newTransaction, type: e.target.value})}
              className={`rounded-lg p-2 ${
                isDarkMode ? 'bg-gray-700 text-white' : 'bg-gray-50'
              }`}
            >
              <option value="income">Приход</option>
              <option value="expense">Разход</option>
            </select>
            <input
              type="number"
              value={newTransaction.amount}
              onChange={(e) => setNewTransaction({...newTransaction, amount: e.target.value})}
              placeholder="Сума"
              className={`rounded-lg p-2 ${
                isDarkMode ? 'bg-gray-700 text-white' : 'bg-gray-50'
              }`}
            />
            <input
              type="text"
              value={newTransaction.category}
              onChange={(e) => setNewTransaction({...newTransaction, category: e.target.value})}
              placeholder="Категория"
              className={`rounded-lg p-2 ${
                isDarkMode ? 'bg-gray-700 text-white' : 'bg-gray-50'
              }`}
            />
            <button
              onClick={handleAddTransaction}
              className="bg-emerald-500 text-white rounded-lg p-2 hover:bg-emerald-600 transition-colors"
            >
              Добави
            </button>
          </div>
        </div>

        {/* Графики */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div className={`p-6 rounded-xl ${
            isDarkMode ? 'bg-gray-800' : 'bg-white'
          } shadow-lg`}>
            <h2 className="text-xl font-semibold mb-4">Месечен анализ</h2>
            <Line data={monthlyData} />
          </div>
          <div className={`p-6 rounded-xl ${
            isDarkMode ? 'bg-gray-800' : 'bg-white'
          } shadow-lg`}>
            <h2 className="text-xl font-semibold mb-4">Разпределение по категории</h2>
            <Doughnut data={categoryData} />
          </div>
        </div>

        {/* Таблица с транзакции */}
        <div className={`p-6 rounded-xl ${
          isDarkMode ? 'bg-gray-800' : 'bg-white'
        } shadow-lg`}>
          <h2 className="text-xl font-semibold mb-4">Последни транзакции</h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className={`${
                  isDarkMode ? 'bg-gray-700' : 'bg-gray-50'
                }`}>
                  <th className="p-3 text-left">Дата</th>
                  <th className="p-3 text-left">Тип</th>
                  <th className="p-3 text-left">Категория</th>
                  <th className="p-3 text-left">Сума</th>
                </tr>
              </thead>
              <tbody>
                {transactions.map(transaction => (
                  <tr key={transaction.id} className={`border-b ${
                    isDarkMode ? 'border-gray-700' : 'border-gray-200'
                  }`}>
                    <td className="p-3">{transaction.date}</td>
                    <td className="p-3">{transaction.type === 'income' ? 'Приход' : 'Разход'}</td>
                    <td className="p-3">{transaction.category}</td>
                    <td className={`p-3 ${
                      transaction.type === 'income' ? 'text-emerald-500' : 'text-red-500'
                    }`}>
                      {transaction.type === 'income' ? '+' : '-'}{transaction.amount} лв.
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ECommerce;
