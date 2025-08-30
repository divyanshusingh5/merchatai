import React from 'react';
import { Package, TrendingUp, AlertTriangle } from 'lucide-react';

export function ProductPerformance() {
  const categories = [
    { name: 'Electronics', revenue: '₹2,45,890', growth: '+15.2%', trend: 'up' },
    { name: 'Fashion', revenue: '₹1,78,450', growth: '+8.7%', trend: 'up' },
    { name: 'Grocery', revenue: '₹89,670', growth: '-2.1%', trend: 'down' },
    { name: 'Food & Beverages', revenue: '₹67,890', growth: '+12.3%', trend: 'up' },
  ];

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
      <div className="flex items-center space-x-2 mb-6">
        <Package className="w-5 h-5 text-purple-600" />
        <h3 className="text-lg font-semibold text-gray-900">Category Performance</h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {categories.map((category, index) => (
          <div key={index} className="p-4 border border-gray-200 rounded-lg hover:shadow-sm transition-shadow">
            <div className="flex items-center justify-between mb-2">
              <h4 className="font-medium text-gray-900">{category.name}</h4>
              {category.trend === 'up' ? (
                <TrendingUp className="w-4 h-4 text-green-500" />
              ) : (
                <AlertTriangle className="w-4 h-4 text-red-500" />
              )}
            </div>
            
            <div className="space-y-1">
              <div className="text-lg font-bold text-gray-900">{category.revenue}</div>
              <div className={`text-sm font-medium ${
                category.trend === 'up' ? 'text-green-600' : 'text-red-600'
              }`}>
                {category.growth}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 p-4 bg-purple-50 rounded-lg border border-purple-200">
        <h4 className="font-semibold text-purple-900 mb-2">AI Product Insights</h4>
        <p className="text-purple-800 text-sm">
          Electronics category shows highest growth potential. Consider stocking more premium smartphones 
          and accessories. Grocery category needs attention - launch targeted promotions for daily essentials.
        </p>
      </div>
    </div>
  );
}