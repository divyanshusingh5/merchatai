import React from 'react';
import { Calendar, MessageSquare, Users, BarChart3 } from 'lucide-react';

const campaigns = [
  {
    id: 'CAM001',
    name: 'Black Friday Electronics Sale',
    date: '2024-11-25',
    segment: 'Electronics Buyers',
    recipients: 89,
    sent: 89,
    delivered: 87,
    opened: 65,
    clicked: 23,
    conversions: 12,
    revenue: '₹1,45,000',
    status: 'completed',
  },
  {
    id: 'CAM002',
    name: 'Win-back Inactive Customers',
    date: '2024-11-20',
    segment: 'Inactive Customers',
    recipients: 127,
    sent: 127,
    delivered: 124,
    opened: 78,
    clicked: 34,
    conversions: 18,
    revenue: '₹89,500',
    status: 'completed',
  },
  {
    id: 'CAM003',
    name: 'New Product Launch - iPhone 15',
    date: '2024-11-18',
    segment: 'High Value Customers',
    recipients: 245,
    sent: 245,
    delivered: 240,
    opened: 156,
    clicked: 67,
    conversions: 31,
    revenue: '₹2,78,900',
    status: 'completed',
  },
];

export function CampaignHistory() {
  return (
    <div className="space-y-6">
      {campaigns.map((campaign) => (
        <div key={campaign.id} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="text-lg font-semibold text-gray-900">{campaign.name}</h3>
              <div className="flex items-center space-x-4 text-sm text-gray-600 mt-1">
                <div className="flex items-center space-x-1">
                  <Calendar className="w-4 h-4" />
                  <span>{campaign.date}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Users className="w-4 h-4" />
                  <span>{campaign.segment}</span>
                </div>
              </div>
            </div>
            <div className="text-right">
              <div className="text-xl font-bold text-green-600">{campaign.revenue}</div>
              <div className="text-sm text-gray-500">Revenue Generated</div>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
            <div className="text-center p-3 bg-blue-50 rounded-lg">
              <div className="text-lg font-bold text-blue-600">{campaign.recipients}</div>
              <div className="text-xs text-gray-600">Recipients</div>
            </div>
            <div className="text-center p-3 bg-green-50 rounded-lg">
              <div className="text-lg font-bold text-green-600">{campaign.sent}</div>
              <div className="text-xs text-gray-600">Sent</div>
            </div>
            <div className="text-center p-3 bg-purple-50 rounded-lg">
              <div className="text-lg font-bold text-purple-600">{campaign.delivered}</div>
              <div className="text-xs text-gray-600">Delivered</div>
            </div>
            <div className="text-center p-3 bg-yellow-50 rounded-lg">
              <div className="text-lg font-bold text-yellow-600">{campaign.opened}</div>
              <div className="text-xs text-gray-600">Opened</div>
            </div>
            <div className="text-center p-3 bg-indigo-50 rounded-lg">
              <div className="text-lg font-bold text-indigo-600">{campaign.clicked}</div>
              <div className="text-xs text-gray-600">Clicked</div>
            </div>
            <div className="text-center p-3 bg-pink-50 rounded-lg">
              <div className="text-lg font-bold text-pink-600">{campaign.conversions}</div>
              <div className="text-xs text-gray-600">Conversions</div>
            </div>
            <div className="text-center p-3 bg-orange-50 rounded-lg">
              <div className="text-lg font-bold text-orange-600">
                {((campaign.conversions / campaign.recipients) * 100).toFixed(1)}%
              </div>
              <div className="text-xs text-gray-600">Conv. Rate</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}