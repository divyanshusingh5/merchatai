import React from 'react';
import { MessageSquare, Plus, Zap, Send } from 'lucide-react';

export function QuickActions() {
  return (
    <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-6 rounded-xl text-white">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-xl font-bold mb-2">Quick Actions</h3>
          <p className="text-blue-100">AI-powered tools to grow your business instantly</p>
        </div>
        <Zap className="w-8 h-8 text-yellow-300" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <button className="bg-white/10 backdrop-blur-sm p-4 rounded-lg hover:bg-white/20 transition-all group">
          <MessageSquare className="w-6 h-6 mb-3 group-hover:scale-110 transition-transform" />
          <h4 className="font-semibold mb-1">Send Campaign</h4>
          <p className="text-sm text-blue-100">AI-generated personalized messages</p>
        </button>

        <button className="bg-white/10 backdrop-blur-sm p-4 rounded-lg hover:bg-white/20 transition-all group">
          <Plus className="w-6 h-6 mb-3 group-hover:scale-110 transition-transform" />
          <h4 className="font-semibold mb-1">Create Offer</h4>
          <p className="text-sm text-blue-100">Smart offers based on customer data</p>
        </button>

        <button className="bg-white/10 backdrop-blur-sm p-4 rounded-lg hover:bg-white/20 transition-all group">
          <Send className="w-6 h-6 mb-3 group-hover:scale-110 transition-transform" />
          <h4 className="font-semibold mb-1">Bulk WhatsApp</h4>
          <p className="text-sm text-blue-100">Send to segmented customers</p>
        </button>
      </div>
    </div>
  );
}