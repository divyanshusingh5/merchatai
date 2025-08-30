import React from 'react';
import { TrendingUp } from 'lucide-react';

export function RevenueChart() {
  const data = [
    { month: 'Jan', revenue: 45000 },
    { month: 'Feb', revenue: 52000 },
    { month: 'Mar', revenue: 48000 },
    { month: 'Apr', revenue: 61000 },
    { month: 'May', revenue: 58000 },
    { month: 'Jun', revenue: 67000 },
  ];

  const maxRevenue = Math.max(...data.map(d => d.revenue));

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-lg font-semibold text-gray-900">Revenue Trend</h3>
          <p className="text-gray-600 text-sm">Monthly revenue overview</p>
        </div>
        <div className="flex items-center space-x-2 text-green-600">
          <TrendingUp className="w-4 h-4" />
          <span className="text-sm font-medium">+18.7%</span>
        </div>
      </div>

      <div className="space-y-4">
        {data.map((item) => (
          <div key={item.month} className="flex items-center space-x-4">
            <div className="w-8 text-sm text-gray-600 font-medium">{item.month}</div>
            <div className="flex-1 bg-gray-100 rounded-full h-3 relative overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-blue-500 to-purple-600 rounded-full transition-all duration-1000 ease-out"
                style={{ width: `${(item.revenue / maxRevenue) * 100}%` }}
              ></div>
            </div>
            <div className="w-16 text-sm text-gray-900 font-medium text-right">
              ₹{(item.revenue / 1000).toFixed(0)}k
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}