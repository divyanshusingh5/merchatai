import React from 'react';
import { Package, AlertTriangle, CheckCircle, TrendingUp } from 'lucide-react';

interface InventoryGridProps {
  searchTerm: string;
  selectedCategory: string;
}

const inventoryData = [
  {
    id: 'P001',
    name: 'iPhone 14 Pro',
    category: 'Electronics',
    brand: 'Apple',
    stock: 8,
    price: '₹89,999',
    status: 'low',
    demand: 'high',
    reorderPoint: 10,
  },
  {
    id: 'P002',
    name: 'Samsung Galaxy S23',
    category: 'Electronics',
    brand: 'Samsung',
    stock: 25,
    price: '₹74,999',
    status: 'good',
    demand: 'medium',
    reorderPoint: 15,
  },
  {
    id: 'P003',
    name: 'Nike Air Max',
    category: 'Fashion',
    brand: 'Nike',
    stock: 3,
    price: '₹8,999',
    status: 'critical',
    demand: 'high',
    reorderPoint: 5,
  },
  {
    id: 'P004',
    name: 'MacBook Air M2',
    category: 'Electronics',
    brand: 'Apple',
    stock: 15,
    price: '₹1,19,900',
    status: 'good',
    demand: 'medium',
    reorderPoint: 8,
  },
];

export function InventoryGrid({ searchTerm, selectedCategory }: InventoryGridProps) {
  const filteredData = inventoryData.filter(item => {
    const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.brand.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'critical': return 'text-red-600 bg-red-100';
      case 'low': return 'text-orange-600 bg-orange-100';
      case 'good': return 'text-green-600 bg-green-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'critical': return AlertTriangle;
      case 'low': return AlertTriangle;
      case 'good': return CheckCircle;
      default: return Package;
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {filteredData.map((item) => {
        const StatusIcon = getStatusIcon(item.status);
        
        return (
          <div key={item.id} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                <h3 className="font-semibold text-gray-900 mb-1">{item.name}</h3>
                <p className="text-sm text-gray-600">{item.brand} • {item.category}</p>
              </div>
              <div className={`px-2 py-1 rounded-full text-xs font-medium flex items-center space-x-1 ${getStatusColor(item.status)}`}>
                <StatusIcon className="w-3 h-3" />
                <span>{item.status}</span>
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-gray-600">Stock Level</span>
                <span className="font-semibold text-gray-900">{item.stock} units</span>
              </div>
              
              <div className="flex items-center justify-between">
                <span className="text-gray-600">Price</span>
                <span className="font-semibold text-gray-900">{item.price}</span>
              </div>
              
              <div className="flex items-center justify-between">
                <span className="text-gray-600">Demand</span>
                <div className="flex items-center space-x-1">
                  <TrendingUp className={`w-3 h-3 ${item.demand === 'high' ? 'text-red-500' : 'text-yellow-500'}`} />
                  <span className={`text-sm font-medium ${item.demand === 'high' ? 'text-red-600' : 'text-yellow-600'}`}>
                    {item.demand}
                  </span>
                </div>
              </div>

              {item.stock <= item.reorderPoint && (
                <div className="mt-4 p-3 bg-orange-50 rounded-lg border border-orange-200">
                  <p className="text-orange-800 text-sm font-medium">
                    ⚠️ Reorder recommended: Stock below {item.reorderPoint} units
                  </p>
                </div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}