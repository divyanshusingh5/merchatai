import React, { useState } from 'react';
import { Tag, Calendar, Target, Percent } from 'lucide-react';

export function CreateOffer() {
  const [offerData, setOfferData] = useState({
    title: '',
    description: '',
    category: '',
    discountType: 'percentage',
    discountValue: '',
    startDate: '',
    endDate: '',
    targetSegment: '',
  });

  const categories = ['Electronics', 'Fashion', 'Grocery', 'Food & Beverages'];
  const segments = ['All Customers', 'High Value', 'Loyal', 'Inactive', 'New'];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Creating offer:', offerData);
    alert('Offer created successfully!');
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Offer Title
            </label>
            <input
              type="text"
              value={offerData.title}
              onChange={(e) => setOfferData({ ...offerData, title: e.target.value })}
              placeholder="e.g., 20% OFF Electronics"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Description
            </label>
            <textarea
              value={offerData.description}
              onChange={(e) => setOfferData({ ...offerData, description: e.target.value })}
              placeholder="Describe your offer in detail..."
              rows={3}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Category
            </label>
            <select
              value={offerData.category}
              onChange={(e) => setOfferData({ ...offerData, category: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              required
            >
              <option value="">Select Category</option>
              {categories.map((category) => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Target Segment
            </label>
            <select
              value={offerData.targetSegment}
              onChange={(e) => setOfferData({ ...offerData, targetSegment: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              required
            >
              <option value="">Select Target Segment</option>
              {segments.map((segment) => (
                <option key={segment} value={segment}>{segment}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="space-y-6">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Discount Type
              </label>
              <select
                value={offerData.discountType}
                onChange={(e) => setOfferData({ ...offerData, discountType: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              >
                <option value="percentage">Percentage</option>
                <option value="flat">Flat Amount</option>
                <option value="cashback">Cashback</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Discount Value
              </label>
              <input
                type="text"
                value={offerData.discountValue}
                onChange={(e) => setOfferData({ ...offerData, discountValue: e.target.value })}
                placeholder={offerData.discountType === 'percentage' ? '20' : '500'}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Start Date
              </label>
              <input
                type="date"
                value={offerData.startDate}
                onChange={(e) => setOfferData({ ...offerData, startDate: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                End Date
              </label>
              <input
                type="date"
                value={offerData.endDate}
                onChange={(e) => setOfferData({ ...offerData, endDate: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                required
              />
            </div>
          </div>

          <div className="p-4 bg-orange-50 rounded-lg border border-orange-200">
            <h4 className="font-semibold text-orange-900 mb-2">AI Recommendation</h4>
            <p className="text-orange-800 text-sm">
              Based on your data, offering 15-25% discounts on Electronics to High Value customers 
              typically generates the best ROI. Consider timing campaigns for weekends when engagement is highest.
            </p>
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-orange-600 to-red-600 text-white py-3 rounded-lg hover:shadow-lg transition-all font-medium"
          >
            Create Offer & Send Campaign
          </button>
        </div>
      </div>
    </form>
  );
}