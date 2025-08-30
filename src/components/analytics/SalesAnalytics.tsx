import React from 'react';
import { TrendingUp, Calendar, DollarSign } from 'lucide-react';

export function SalesAnalytics() {
  const salesData = [
    { period: 'This Week', revenue: '₹87,560', growth: '+23.5%', orders: 145 },
    { period: 'This Month', revenue: '₹3,45,670', growth: '+18.2%', orders: 567 },
    { period: 'This Quarter', revenue: '₹12,45,890', growth: '+15.8%', orders: 1789 },
  ];

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
      <div className="flex items-center space-x-2 mb-6">
        <TrendingUp className="w-5 h-5 text-green-600" />
        <h3 className="text-lg font-semibold text-gray-900">Sales Performance</h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {salesData.map((data, index) => (
          <div key={index} className="p-4 bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg">
            <div className="flex items-center space-x-2 mb-3">
              <Calendar className="w-4 h-4 text-gray-500" />
              <span className="text-sm font-medium text-gray-700">{data.period}</span>
            </div>
            
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold text-gray-900">{data.revenue}</span>
                <span className="text-green-600 text-sm font-medium">{data.growth}</span>
              </div>
              <div className="text-sm text-gray-600">{data.orders} orders</div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
        <h4 className="font-semibold text-blue-900 mb-2">AI Recommendation</h4>
        <p className="text-blue-800 text-sm">
          Your electronics category is showing strong growth (+28%). Consider expanding your smartphone inventory 
          and creating targeted campaigns for tech enthusiasts during evening hours (6-8 PM) when engagement peaks.
        </p>
      </div>
    </div>
  );
}