import React from 'react';
import { Clock } from 'lucide-react';

const transactions = [
  {
    id: 'TXN1045',
    customer: 'Rahul Sharma',
    product: 'iPhone 14 Pro',
    amount: '₹89,999',
    time: '2 min ago',
    status: 'completed',
  },
  {
    id: 'TXN1044',
    customer: 'Priya Patel',
    product: 'Nike Air Max',
    amount: '₹8,999',
    time: '5 min ago',
    status: 'completed',
  },
  {
    id: 'TXN1043',
    customer: 'Amit Kumar',
    product: 'Samsung Galaxy S23',
    amount: '₹74,999',
    time: '8 min ago',
    status: 'pending',
  },
  {
    id: 'TXN1042',
    customer: 'Sneha Gupta',
    product: 'MacBook Air M2',
    amount: '₹1,19,900',
    time: '12 min ago',
    status: 'completed',
  },
];

export function RecentTransactions() {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
      <div className="flex items-center space-x-2 mb-6">
        <Clock className="w-5 h-5 text-blue-600" />
        <h3 className="text-lg font-semibold text-gray-900">Recent Transactions</h3>
      </div>

      <div className="space-y-4">
        {transactions.map((transaction) => (
          <div key={transaction.id} className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg transition-colors">
            <div className="flex-1">
              <div className="flex items-center space-x-2 mb-1">
                <h4 className="font-medium text-gray-900">{transaction.customer}</h4>
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                  transaction.status === 'completed' 
                    ? 'bg-green-100 text-green-700' 
                    : 'bg-yellow-100 text-yellow-700'
                }`}>
                  {transaction.status}
                </span>
              </div>
              <p className="text-sm text-gray-600">{transaction.product}</p>
              <p className="text-xs text-gray-500">{transaction.time}</p>
            </div>
            <div className="font-semibold text-gray-900">{transaction.amount}</div>
          </div>
        ))}
      </div>
    </div>
  );
}