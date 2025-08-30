import React from 'react';
import { BarChart3, TrendingUp, Users, ShoppingCart } from 'lucide-react';
import { SalesAnalytics } from '../components/analytics/SalesAnalytics';
import { CustomerAnalytics } from '../components/analytics/CustomerAnalytics';
import { ProductPerformance } from '../components/analytics/ProductPerformance';

export function Analytics() {
  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Analytics</h1>
          <p className="text-gray-600">Deep insights into your business performance</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-6 rounded-xl text-white">
          <div className="flex items-center space-x-3">
            <BarChart3 className="w-8 h-8" />
            <div>
              <h3 className="text-xl font-bold">₹4,67,890</h3>
              <p className="text-blue-100">Total Sales</p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-green-600 to-green-700 p-6 rounded-xl text-white">
          <div className="flex items-center space-x-3">
            <Users className="w-8 h-8" />
            <div>
              <h3 className="text-xl font-bold">1,234</h3>
              <p className="text-green-100">Active Customers</p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-purple-600 to-purple-700 p-6 rounded-xl text-white">
          <div className="flex items-center space-x-3">
            <ShoppingCart className="w-8 h-8" />
            <div>
              <h3 className="text-xl font-bold">2,567</h3>
              <p className="text-purple-100">Total Orders</p>
            </div>
          </div>
        </div>
      </div>

      <SalesAnalytics />
      <CustomerAnalytics />
      <ProductPerformance />
    </div>
  );
}