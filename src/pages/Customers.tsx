import React, { useState } from 'react';
import { Users, Search, Filter, MessageSquare } from 'lucide-react';
import { CustomerSegments } from '../components/customers/CustomerSegments';
import { CustomerList } from '../components/customers/CustomerList';

export function Customers() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSegment, setSelectedSegment] = useState('all');

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Customer Management</h1>
          <p className="text-gray-600">Analyze and engage with your customers</p>
        </div>
        
        <button className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors flex items-center space-x-2">
          <MessageSquare className="w-4 h-4" />
          <span>Bulk Campaign</span>
        </button>
      </div>

      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mb-6">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <input
              type="text"
              placeholder="Search customers..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          
          <select
            value={selectedSegment}
            onChange={(e) => setSelectedSegment(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="all">All Segments</option>
            <option value="high-value">High Value</option>
            <option value="loyal">Loyal</option>
            <option value="inactive">Inactive</option>
            <option value="new">New</option>
          </select>
        </div>
      </div>

      <CustomerSegments />
      <CustomerList searchTerm={searchTerm} selectedSegment={selectedSegment} />
    </div>
  );
}