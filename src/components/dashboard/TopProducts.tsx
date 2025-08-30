import React from 'react';
import { Package } from 'lucide-react';

const products = [
  { name: 'iPhone 14 Pro', sales: 89, revenue: '₹89,000', trend: '+15%' },
  { name: 'Samsung Galaxy S23', sales: 67, revenue: '₹67,000', trend: '+8%' },
  { name: 'Nike Air Max', sales: 45, revenue: '₹22,500', trend: '+12%' },
  { name: 'Dairy Milk Chocolate', sales: 234, revenue: '₹11,700', trend: '+5%' },
  { name: 'MacBook Air M2', sales: 12, revenue: '₹1,44,000', trend: '+25%' },
];

export function TopProducts() {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
      <div className="flex items-center space-x-2 mb-6">
        <Package className="w-5 h-5 text-green-600" />
        <h3 className="text-lg font-semibold text-gray-900">Top Products</h3>
      </div>

      <div className="space-y-4">
        {products.map((product, index) => (
          <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
            <div className="flex-1">
              <h4 className="font-medium text-gray-900">{product.name}</h4>
              <p className="text-sm text-gray-600">{product.sales} units sold</p>
            </div>
            <div className="text-right">
              <div className="font-semibold text-gray-900">{product.revenue}</div>
              <div className="text-sm text-green-600">{product.trend}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}