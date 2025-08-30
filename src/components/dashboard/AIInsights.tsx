import React from 'react';
import { Brain, Lightbulb, Target, TrendingUp } from 'lucide-react';

const insights = [
  {
    type: 'opportunity',
    icon: Target,
    title: 'Campaign Opportunity',
    message: '127 customers haven\'t purchased in 30 days. Send them a 15% off electronics offer.',
    action: 'Create Campaign',
    priority: 'high',
  },
  {
    type: 'inventory',
    icon: TrendingUp,
    title: 'Restock Alert',
    message: 'iPhone 14 Pro is running low (3 units left). High demand expected based on recent trends.',
    action: 'Reorder Now',
    priority: 'medium',
  },
  {
    type: 'insight',
    icon: Lightbulb,
    title: 'Customer Behavior',
    message: 'Electronics purchases peak at 6-8 PM. Schedule campaigns during this window.',
    action: 'Schedule Campaigns',
    priority: 'low',
  },
];

export function AIInsights() {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
      <div className="flex items-center space-x-2 mb-6">
        <Brain className="w-5 h-5 text-purple-600" />
        <h3 className="text-lg font-semibold text-gray-900">AI Insights</h3>
      </div>

      <div className="space-y-4">
        {insights.map((insight, index) => {
          const Icon = insight.icon;
          const priorityColors = {
            high: 'bg-red-100 text-red-700 border-red-200',
            medium: 'bg-yellow-100 text-yellow-700 border-yellow-200',
            low: 'bg-blue-100 text-blue-700 border-blue-200',
          };

          return (
            <div key={index} className="p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
              <div className="flex items-start space-x-3">
                <div className="p-2 bg-purple-100 rounded-lg">
                  <Icon className="w-4 h-4 text-purple-600" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-1">
                    <h4 className="font-medium text-gray-900">{insight.title}</h4>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium border ${priorityColors[insight.priority]}`}>
                      {insight.priority}
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm mb-3">{insight.message}</p>
                  <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                    {insight.action} →
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}