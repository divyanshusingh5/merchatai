import React from 'react';
import { Calendar, Tag, Users, TrendingUp } from 'lucide-react';

const offers = [
  {
    id: 'OFF001',
    title: '20% OFF Electronics',
    description: 'Special discount on all electronic items including smartphones and laptops',
    category: 'Electronics',
    discountType: 'Percentage',
    discountValue: '20%',
    startDate: '2024-11-01',
    endDate: '2024-11-30',
    usageCount: 156,
    revenue: '₹2,34,567',
    status: 'active',
  },
  {
    id: 'OFF002',
    title: 'Buy 2 Get 1 Free - Fashion',
    description: 'Amazing deal on fashion accessories and clothing items',
    category: 'Fashion',
    discountType: 'BOGO',
    discountValue: 'Buy 2 Get 1',
    startDate: '2024-11-15',
    endDate: '2024-12-15',
    usageCount: 89,
    revenue: '₹1,67,890',
    status: 'active',
  },
  {
    id: 'OFF003',
    title: 'Grocery Cashback',
    description: '₹500 cashback on grocery purchases above ₹2000',
    category: 'Grocery',
    discountType: 'Cashback',
    discountValue: '₹500',
    startDate: '2024-10-01',
    endDate: '2024-10-31',
    usageCount: 234,
    revenue: '₹89,450',
    status: 'expired',
  },
];

export function OffersList() {
  return (
    <div className="space-y-6">
      {offers.map((offer) => (
        <div key={offer.id} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
          <div className="flex items-start justify-between mb-4">
            <div className="flex-1">
              <div className="flex items-center space-x-3 mb-2">
                <h3 className="text-lg font-semibold text-gray-900">{offer.title}</h3>
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                  offer.status === 'active' ? 'bg-green-100 text-green-700' :
                  offer.status === 'expired' ? 'bg-red-100 text-red-700' :
                  'bg-yellow-100 text-yellow-700'
                }`}>
                  {offer.status}
                </span>
              </div>
              <p className="text-gray-600 mb-3">{offer.description}</p>
              
              <div className="flex items-center space-x-6 text-sm text-gray-500">
                <div className="flex items-center space-x-1">
                  <Tag className="w-4 h-4" />
                  <span>{offer.category}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Calendar className="w-4 h-4" />
                  <span>{offer.startDate} to {offer.endDate}</span>
                </div>
              </div>
            </div>
            
            <div className="text-right">
              <div className="text-xl font-bold text-orange-600">{offer.discountValue}</div>
              <div className="text-sm text-gray-500">{offer.discountType}</div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4 border-t border-gray-100">
            <div className="flex items-center space-x-3">
              <Users className="w-5 h-5 text-blue-500" />
              <div>
                <div className="font-semibold text-gray-900">{offer.usageCount}</div>
                <div className="text-sm text-gray-600">Times Used</div>
              </div>
            </div>
            
            <div className="flex items-center space-x-3">
              <TrendingUp className="w-5 h-5 text-green-500" />
              <div>
                <div className="font-semibold text-gray-900">{offer.revenue}</div>
                <div className="text-sm text-gray-600">Revenue Generated</div>
              </div>
            </div>
            
            <div className="flex space-x-2">
              <button className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors text-sm">
                Edit Offer
              </button>
              <button className="bg-gray-100 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-200 transition-colors text-sm">
                Duplicate
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}