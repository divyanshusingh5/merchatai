import React from 'react';
import { Users, Star, Clock, Heart } from 'lucide-react';

export function CustomerSegments() {
  const segments = [
    {
      id: 'high-value',
      name: 'High Value',
      count: 245,
      revenue: '₹12,45,890',
      icon: Star,
      color: 'from-yellow-500 to-orange-500',
      bgColor: 'bg-yellow-50',
      textColor: 'text-yellow-700',
    },
    {
      id: 'loyal',
      name: 'Loyal Customers',
      count: 456,
      revenue: '₹8,67,450',
      icon: Heart,
      color: 'from-red-500 to-pink-500',
      bgColor: 'bg-red-50',
      textColor: 'text-red-700',
    },
    {
      id: 'inactive',
      name: 'Inactive',
      count: 127,
      revenue: '₹2,34,560',
      icon: Clock,
      color: 'from-gray-500 to-gray-600',
      bgColor: 'bg-gray-50',
      textColor: 'text-gray-700',
    },
    {
      id: 'new',
      name: 'New Customers',
      count: 89,
      revenue: '₹1,23,450',
      icon: Users,
      color: 'from-green-500 to-emerald-500',
      bgColor: 'bg-green-50',
      textColor: 'text-green-700',
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {segments.map((segment) => {
        const Icon = segment.icon;
        
        return (
          <div key={segment.id} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all cursor-pointer group">
            <div className="flex items-center justify-between mb-4">
              <div className={`p-3 rounded-lg ${segment.bgColor}`}>
                <Icon className={`w-6 h-6 ${segment.textColor}`} />
              </div>
              <div className="text-right">
                <div className="text-2xl font-bold text-gray-900">{segment.count}</div>
                <div className="text-sm text-gray-600">customers</div>
              </div>
            </div>
            
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">{segment.name}</h3>
              <p className="text-sm text-gray-600 mb-2">Total Revenue</p>
              <p className="text-lg font-bold text-gray-900">{segment.revenue}</p>
            </div>

            <button className="w-full mt-4 bg-gray-100 text-gray-700 py-2 rounded-lg hover:bg-gray-200 transition-colors group-hover:bg-blue-100 group-hover:text-blue-700">
              Send Campaign
            </button>
          </div>
        );
      })}
    </div>
  );
}