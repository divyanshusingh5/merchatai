import React from 'react';
import { TrendingUp, TrendingDown, DollarSign, ShoppingCart, Users, Package } from 'lucide-react';

const stats = [
  {
    title: 'Total Revenue',
    value: '₹2,45,890',
    change: '+12.5%',
    changeType: 'positive',
    icon: DollarSign,
    bgColor: 'bg-blue-50',
    iconColor: 'text-blue-600',
  },
  {
    title: 'Orders Today',
    value: '127',
    change: '+8.2%',
    changeType: 'positive',
    icon: ShoppingCart,
    bgColor: 'bg-green-50',
    iconColor: 'text-green-600',
  },
  {
    title: 'Active Customers',
    value: '1,892',
    change: '+15.3%',
    changeType: 'positive',
    icon: Users,
    bgColor: 'bg-purple-50',
    iconColor: 'text-purple-600',
  },
  {
    title: 'Low Stock Items',
    value: '23',
    change: '-5.1%',
    changeType: 'negative',
    icon: Package,
    bgColor: 'bg-orange-50',
    iconColor: 'text-orange-600',
  },
];

export function StatsGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat) => {
        const Icon = stat.icon;
        const TrendIcon = stat.changeType === 'positive' ? TrendingUp : TrendingDown;
        
        return (
          <div key={stat.title} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between mb-4">
              <div className={`p-3 rounded-lg ${stat.bgColor}`}>
                <Icon className={`w-6 h-6 ${stat.iconColor}`} />
              </div>
              <div className={`flex items-center space-x-1 text-sm ${
                stat.changeType === 'positive' ? 'text-green-600' : 'text-red-600'
              }`}>
                <TrendIcon className="w-4 h-4" />
                <span>{stat.change}</span>
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</h3>
              <p className="text-gray-600 text-sm">{stat.title}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}