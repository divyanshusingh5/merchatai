import React, { useState } from 'react';
import { MessageSquare, Send, Users, Zap } from 'lucide-react';
import { CampaignGenerator } from '../components/campaigns/CampaignGenerator';
import { CampaignHistory } from '../components/campaigns/CampaignHistory';

export function Campaigns() {
  const [activeTab, setActiveTab] = useState('create');

  return (
    <div className="p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">WhatsApp Campaigns</h1>
          <p className="text-gray-600">AI-powered personalized marketing messages</p>
        </div>
        
        <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-lg hover:shadow-lg transition-all flex items-center space-x-2">
          <Zap className="w-4 h-4" />
          <span>Quick Campaign</span>
        </button>
      </div>

      <div className="mb-6">
        <div className="border-b border-gray-200">
          <nav className="flex space-x-8">
            <button
              onClick={() => setActiveTab('create')}
              className={`py-2 px-1 border-b-2 font-medium text-sm transition-colors ${
                activeTab === 'create'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              Create Campaign
            </button>
            <button
              onClick={() => setActiveTab('history')}
              className={`py-2 px-1 border-b-2 font-medium text-sm transition-colors ${
                activeTab === 'history'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              Campaign History
            </button>
          </nav>
        </div>
      </div>

      {activeTab === 'create' ? <CampaignGenerator /> : <CampaignHistory />}
    </div>
  );
}