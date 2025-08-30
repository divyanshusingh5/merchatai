import React from 'react';
import { Users, Heart, Clock, Star } from 'lucide-react';

export function CustomerAnalytics() {
  const customerMetrics = [
    { label: 'Total Customers', value: '1,234', icon: Users, color: 'blue' },
    { label: 'Loyal Customers', value: '456', icon: Heart, color: 'red' },
    { label: 'New This Month', value: '89', icon: Star, color: 'green' },
    { label: 'Inactive (30+ days)', value: '127', icon: Clock, color: 'orange' },
  ];

  const topCustomers = [
    { name: 'Rahul Sharma', purchases: 45, revenue: '₹1,23,450', lastPurchase: '2 days ago' },
    { name: 'Priya Patel', purchases: 38, revenue: '₹89,670', lastPurchase: '1 day ago' },
    { name: 'Amit Kumar', purchases: 32, revenue: '₹76,890', lastPurchase: '3 days ago' },
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
        <div className="flex items-center space-x-2 mb-6">
          <Users className="w-5 h-5 text-blue-600" />
          <h3 className="text-lg font-semibold text-gray-900">Customer Metrics</h3>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {customerMetrics.map((metric, index) => {
            const Icon = metric.icon;
            const colorClasses = {
              blue: 'bg-blue-50 text-blue-600',
              red: 'bg-red-50 text-red-600',
              green: 'bg-green-50 text-green-600',
              orange: 'bg-orange-50 text-orange-600',
            };

            return (
              <div key={index} className="p-4 border border-gray-200 rounded-lg">
                <div className={`w-8 h-8 rounded-lg ${colorClasses[metric.color]} flex items-center justify-center mb-3`}>
                  <Icon className="w-4 h-4" />
                </div>
                <div className="text-xl font-bold text-gray-900">{metric.value}</div>
                <div className="text-sm text-gray-600">{metric.label}</div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
        <h3 className="text-lg font-semibold text-gray-900 mb-6">Top Customers</h3>
        
        <div className="space-y-4">
          {topCustomers.map((customer, index) => (
            <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <div>
                <h4 className="font-medium text-gray-900">{customer.name}</h4>
                <p className="text-sm text-gray-600">{customer.purchases} purchases • {customer.lastPurchase}</p>
              </div>
              <div className="text-right">
                <div className="font-semibold text-gray-900">{customer.revenue}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}