import React, { useState } from 'react';
import { Tag, Plus, Calendar, Target } from 'lucide-react';
import { OffersList } from '../components/offers/OffersList';
import { CreateOffer } from '../components/offers/CreateOffer';

export function Offers() {
  const [activeTab, setActiveTab] = useState('list');

  return (
    <div className="p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Offers Management</h1>
          <p className="text-gray-600">Create and manage promotional offers for your customers</p>
        </div>
        
        <button
          onClick={() => setActiveTab('create')}
          className="bg-gradient-to-r from-orange-600 to-red-600 text-white px-6 py-2 rounded-lg hover:shadow-lg transition-all flex items-center space-x-2"
        >
          <Plus className="w-4 h-4" />
          <span>Create Offer</span>
        </button>
      </div>

      <div className="mb-6">
        <div className="border-b border-gray-200">
          <nav className="flex space-x-8">
            <button
              onClick={() => setActiveTab('list')}
              className={`py-2 px-1 border-b-2 font-medium text-sm transition-colors ${
                activeTab === 'list'
                  ? 'border-orange-500 text-orange-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              Active Offers
            </button>
            <button
              onClick={() => setActiveTab('create')}
              className={`py-2 px-1 border-b-2 font-medium text-sm transition-colors ${
                activeTab === 'create'
                  ? 'border-orange-500 text-orange-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              Create New Offer
            </button>
          </nav>
        </div>
      </div>

      {activeTab === 'list' ? <OffersList /> : <CreateOffer />}
    </div>
  );
}