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
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line, Doughnut } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  ArcElement,
  Tooltip,
  Legend
);

interface Transaction {
  id: number;
  type: TransactionType;
  amount: number;
  category: string;
  date: string;
  description: string;
}

type TransactionType = 'income' | 'expense';

const categories: Record<TransactionType, string[]> = {
  income: ['Джобни', 'Подарък', 'Стипендия', 'Друго'],
  expense: ['Храна', 'Транспорт', 'Забавления', 'Дрехи', 'Техника', 'Образование', 'Друго']
};

const ECommerce = ({ setIsAuthenticated }: { setIsAuthenticated: (value: boolean) => void }) => {
  const navigate = useNavigate();
  const { isDarkMode } = useTheme();
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [newTransaction, setNewTransaction] = useState<{
    type: TransactionType;
    amount: string;
    category: string;
    description: string;
  }>({
    type: 'income',
    amount: '',
    category: categories.income[0],
    description: ''
  });

  const handleAddTransaction = () => {
    const amount = parseFloat(newTransaction.amount);
    if (amount > 0 && newTransaction.category) {
      setTransactions([
        {
          id: Date.now(),
          type: newTransaction.type,
          amount,
          category: newTransaction.category,
          date: new Date().toISOString().split('T')[0],
          description: newTransaction.description
        },
        ...transactions
      ]);
      setNewTransaction({
        type: 'income',
        amount: '',
        category: categories.income[0],
        description: ''
      });
    }
  };

  const totalIncome = transactions
    .filter(t => t.type === 'income')
    .reduce((sum, t) => sum + t.amount, 0);

  const totalExpense = transactions
    .filter(t => t.type === 'expense')
    .reduce((sum, t) => sum + t.amount, 0);

  const balance = totalIncome - totalExpense;
  const savingsRate = totalIncome > 0 ? ((totalIncome - totalExpense) / totalIncome * 100).toFixed(1) : '0';

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
        tension: 0.4
      },
      {
        label: 'Разходи',
        data: transactions
          .filter(t => t.type === 'expense')
          .map(t => t.amount),
        borderColor: 'rgb(239, 68, 68)',
        backgroundColor: 'rgba(239, 68, 68, 0.5)',
        tension: 0.4
      }
    ]
  };

  const categoryData = {
    labels: categories[newTransaction.type],
    datasets: [{
      data: categories[newTransaction.type].map(category => 
        transactions
          .filter(t => t.type === newTransaction.type && t.category === category)
          .reduce((sum, t) => sum + t.amount, 0)
      ),
      backgroundColor: [
        'rgba(34, 197, 94, 0.8)',
        'rgba(59, 130, 246, 0.8)',
        'rgba(239, 68, 68, 0.8)',
        'rgba(245, 158, 11, 0.8)',
        'rgba(168, 85, 247, 0.8)',
        'rgba(6, 182, 212, 0.8)',
        'rgba(249, 115, 22, 0.8)'
      ]
    }]
  };

  return (
    <div className={`min-h-screen ${
      isDarkMode 
        ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900' 
        : 'bg-gradient-to-br from-emerald-400 via-yellow-300 to-amber-400'
    }`}>
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className={`text-3xl font-bold ${isDarkMode ? 'text-white' : 'text-amber-950'}`}>
            Моят Бюджет
          </h1>
          <div className="flex items-center gap-4">
            <ThemeToggle />
            <button
              onClick={() => {
                setIsAuthenticated(false);
                navigate('/login');
              }}
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <div className={`p-6 rounded-xl ${
            isDarkMode ? 'bg-gray-800/90' : 'bg-white/90'
          } shadow-lg backdrop-blur-sm`}>
            <h3 className="text-lg font-semibold mb-2">Баланс</h3>
            <p className={`text-2xl font-bold ${balance >= 0 ? 'text-emerald-500' : 'text-red-500'}`}>
              {balance.toFixed(2)} лв.
            </p>
          </div>
          <div className={`p-6 rounded-xl ${
            isDarkMode ? 'bg-gray-800/90' : 'bg-white/90'
          } shadow-lg backdrop-blur-sm`}>
            <h3 className="text-lg font-semibold mb-2">Приходи</h3>
            <p className="text-2xl font-bold text-emerald-500">{totalIncome.toFixed(2)} лв.</p>
          </div>
          <div className={`p-6 rounded-xl ${
            isDarkMode ? 'bg-gray-800/90' : 'bg-white/90'
          } shadow-lg backdrop-blur-sm`}>
            <h3 className="text-lg font-semibold mb-2">Разходи</h3>
            <p className="text-2xl font-bold text-red-500">{totalExpense.toFixed(2)} лв.</p>
          </div>
          <div className={`p-6 rounded-xl ${
            isDarkMode ? 'bg-gray-800/90' : 'bg-white/90'
          } shadow-lg backdrop-blur-sm`}>
            <h3 className="text-lg font-semibold mb-2">Спестявания</h3>
            <p className="text-2xl font-bold text-blue-500">{savingsRate}%</p>
          </div>
        </div>

        <div className={`p-6 rounded-xl mb-8 ${
          isDarkMode ? 'bg-gray-800/90' : 'bg-white/90'
        } shadow-lg backdrop-blur-sm`}>
          <h2 className="text-xl font-semibold mb-4">Нова транзакция</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            <select
              value={newTransaction.type}
              onChange={(e) => {
                const type = e.target.value as TransactionType;
                setNewTransaction({
                  ...newTransaction,
                  type,
                  category: categories[type][0]
                });
              }}
              className={`rounded-lg p-2 ${
                isDarkMode ? 'bg-gray-700 text-white' : 'bg-gray-50'
              }`}
            >
              <option value="income">Приход</option>
              <option value="expense">Разход</option>
            </select>
            <select
              value={newTransaction.category}
              onChange={(e) => setNewTransaction({...newTransaction, category: e.target.value})}
              className={`rounded-lg p-2 ${
                isDarkMode ? 'bg-gray-700 text-white' : 'bg-gray-50'
              }`}
            >
              {categories[newTransaction.type].map((category: string) => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>
            <input
              type="number"
              min="0"
              step="0.01"
              value={newTransaction.amount}
              onChange={(e) => setNewTransaction({...newTransaction, amount: e.target.value})}
              placeholder="Сума"
              className={`rounded-lg p-2 ${
                isDarkMode ? 'bg-gray-700 text-white' : 'bg-gray-50'
              }`}
            />
            <input
              type="text"
              value={newTransaction.description}
              onChange={(e) => setNewTransaction({...newTransaction, description: e.target.value})}
              placeholder="Описание (незадължително)"
              className={`rounded-lg p-2 ${
                isDarkMode ? 'bg-gray-700 text-white' : 'bg-gray-50'
              }`}
            />
            <button
              onClick={handleAddTransaction}
              className={`${
                isDarkMode 
                  ? 'bg-emerald-600 hover:bg-emerald-700' 
                  : 'bg-emerald-500 hover:bg-emerald-600'
              } text-white rounded-lg p-2 transition-colors`}
            >
              Добави
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <div className={`p-6 rounded-xl ${
            isDarkMode ? 'bg-gray-800/90' : 'bg-white/90'
          } shadow-lg backdrop-blur-sm`}>
            <h2 className="text-xl font-semibold mb-4">Месечен анализ</h2>
            <Line 
              data={monthlyData}
              options={{
                responsive: true,
                plugins: {
                  legend: {
                    position: 'top' as const,
                  },
                },
                scales: {
                  y: {
                    beginAtZero: true
                  }
                }
              }}
            />
          </div>
          <div className={`p-6 rounded-xl ${
            isDarkMode ? 'bg-gray-800/90' : 'bg-white/90'
          } shadow-lg backdrop-blur-sm`}>
            <h2 className="text-xl font-semibold mb-4">
              Разпределение по категории ({newTransaction.type === 'income' ? 'Приходи' : 'Разходи'})
            </h2>
            <Doughnut 
              data={categoryData}
              options={{
                responsive: true,
                plugins: {
                  legend: {
                    position: 'top' as const,
                  }
                }
              }}
            />
          </div>
        </div>

        <div className={`p-6 rounded-xl ${
          isDarkMode ? 'bg-gray-800/90' : 'bg-white/90'
        } shadow-lg backdrop-blur-sm`}>
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
                  <th className="p-3 text-left">Описание</th>
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
                    <td className="p-3">{transaction.description}</td>
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

