import React from 'react';
import { MessageSquare, Eye, MoreVertical } from 'lucide-react';

interface CustomerListProps {
  searchTerm: string;
  selectedSegment: string;
}

const customers = [
  {
    id: 'C001',
    name: 'Rahul Sharma',
    email: 'rahul.sharma@email.com',
    phone: '+91 98765 43210',
    segment: 'high-value',
    totalPurchases: 45,
    totalRevenue: '₹1,23,450',
    lastPurchase: '2 days ago',
    favoriteCategory: 'Electronics',
    status: 'active',
  },
  {
    id: 'C002',
    name: 'Priya Patel',
    email: 'priya.patel@email.com',
    phone: '+91 87654 32109',
    segment: 'loyal',
    totalPurchases: 38,
    totalRevenue: '₹89,670',
    lastPurchase: '1 day ago',
    favoriteCategory: 'Fashion',
    status: 'active',
  },
  {
    id: 'C003',
    name: 'Amit Kumar',
    email: 'amit.kumar@email.com',
    phone: '+91 76543 21098',
    segment: 'inactive',
    totalPurchases: 12,
    totalRevenue: '₹45,890',
    lastPurchase: '45 days ago',
    favoriteCategory: 'Electronics',
    status: 'inactive',
  },
];

export function CustomerList({ searchTerm, selectedSegment }: CustomerListProps) {
  const filteredCustomers = customers.filter(customer => {
    const matchesSearch = customer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         customer.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesSegment = selectedSegment === 'all' || customer.segment === selectedSegment;
    return matchesSearch && matchesSegment;
  });

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
      <div className="px-6 py-4 border-b border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900">Customer List</h3>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Customer</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Segment</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Purchases</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Revenue</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Last Purchase</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {filteredCustomers.map((customer) => (
              <tr key={customer.id} className="hover:bg-gray-50 transition-colors">
                <td className="px-6 py-4 whitespace-nowrap">
                  <div>
                    <div className="text-sm font-medium text-gray-900">{customer.name}</div>
                    <div className="text-sm text-gray-500">{customer.email}</div>
                    <div className="text-sm text-gray-500">{customer.phone}</div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${
                    customer.segment === 'high-value' ? 'bg-yellow-100 text-yellow-800' :
                    customer.segment === 'loyal' ? 'bg-red-100 text-red-800' :
                    customer.segment === 'inactive' ? 'bg-gray-100 text-gray-800' :
                    'bg-green-100 text-green-800'
                  }`}>
                    {customer.segment}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {customer.totalPurchases}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  {customer.totalRevenue}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {customer.lastPurchase}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium space-x-2">
                  <button className="text-blue-600 hover:text-blue-900 transition-colors">
                    <MessageSquare className="w-4 h-4" />
                  </button>
                  <button className="text-gray-600 hover:text-gray-900 transition-colors">
                    <Eye className="w-4 h-4" />
                  </button>
                  <button className="text-gray-600 hover:text-gray-900 transition-colors">
                    <MoreVertical className="w-4 h-4" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}