import React, { useState } from 'react';
import { Brain, Send, Users, Target, MessageSquare } from 'lucide-react';

export function CampaignGenerator() {
  const [selectedSegment, setSelectedSegment] = useState('');
  const [campaignType, setCampaignType] = useState('');
  const [generatedMessage, setGeneratedMessage] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);

  const customerSegments = [
    { id: 'high-value', name: 'High Value Customers', count: 245, description: 'Customers with 10+ purchases' },
    { id: 'inactive', name: 'Inactive Customers', count: 127, description: 'No purchase in 30+ days' },
    { id: 'electronics', name: 'Electronics Buyers', count: 89, description: 'Frequent electronics purchases' },
    { id: 'new', name: 'New Customers', count: 56, description: 'Joined in last 7 days' },
  ];

  const campaignTypes = [
    { id: 'promotion', name: 'Promotional Offer', description: 'Discount-based campaigns' },
    { id: 'product-launch', name: 'New Product Launch', description: 'Introduce new products' },
    { id: 'reactivation', name: 'Win-back Campaign', description: 'Re-engage inactive customers' },
    { id: 'seasonal', name: 'Seasonal Campaign', description: 'Festival or seasonal offers' },
  ];

  const generateMessage = async () => {
    setIsGenerating(true);
    // Simulate AI generation
    setTimeout(() => {
      const messages = [
        "🎉 Hey Rahul! We've got something special for you - 20% OFF on all Electronics! Your favorite iPhone 14 Pro is back in stock. Don't miss out! Shop now: bit.ly/store-offer 📱✨",
        "🌟 Hi Priya! We miss you! Come back and enjoy 15% OFF your next purchase. Plus, check out our new Nike collection - perfect for your style! 👟 Use code: WELCOME15",
        "🔥 Exclusive offer for you, Amit! Get ₹5000 cashback on Samsung Galaxy S23. Limited time offer - only 3 days left! Book now and save big! 💰",
      ];
      setGeneratedMessage(messages[Math.floor(Math.random() * messages.length)]);
      setIsGenerating(false);
    }, 2000);
  };

  const sendCampaign = async () => {
    // API call to send WhatsApp messages
    alert('Campaign sent successfully! Messages will be delivered via WhatsApp.');
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Customer Segment Selection */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center space-x-2">
            <Users className="w-5 h-5 text-blue-600" />
            <span>Select Customer Segment</span>
          </h3>
          
          <div className="space-y-3">
            {customerSegments.map((segment) => (
              <label key={segment.id} className="flex items-center p-3 border rounded-lg cursor-pointer hover:bg-gray-50 transition-colors">
                <input
                  type="radio"
                  name="segment"
                  value={segment.id}
                  checked={selectedSegment === segment.id}
                  onChange={(e) => setSelectedSegment(e.target.value)}
                  className="mr-3 text-blue-600"
                />
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h4 className="font-medium text-gray-900">{segment.name}</h4>
                    <span className="text-sm text-gray-500">{segment.count} customers</span>
                  </div>
                  <p className="text-sm text-gray-600">{segment.description}</p>
                </div>
              </label>
            ))}
          </div>
        </div>

        {/* Campaign Type Selection */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center space-x-2">
            <Target className="w-5 h-5 text-purple-600" />
            <span>Campaign Type</span>
          </h3>
          
          <div className="space-y-3">
            {campaignTypes.map((type) => (
              <label key={type.id} className="flex items-center p-3 border rounded-lg cursor-pointer hover:bg-gray-50 transition-colors">
                <input
                  type="radio"
                  name="campaign-type"
                  value={type.id}
                  checked={campaignType === type.id}
                  onChange={(e) => setCampaignType(e.target.value)}
                  className="mr-3 text-purple-600"
                />
                <div>
                  <h4 className="font-medium text-gray-900">{type.name}</h4>
                  <p className="text-sm text-gray-600">{type.description}</p>
                </div>
              </label>
            ))}
          </div>
        </div>
      </div>

      {/* AI Message Generator */}
      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
        <div className="flex items-center space-x-2 mb-4">
          <Brain className="w-5 h-5 text-green-600" />
          <h3 className="text-lg font-semibold text-gray-900">AI Message Generator</h3>
        </div>

        <div className="flex items-center space-x-4 mb-6">
          <button
            onClick={generateMessage}
            disabled={!selectedSegment || !campaignType || isGenerating}
            className="bg-gradient-to-r from-green-600 to-blue-600 text-white px-6 py-2 rounded-lg hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center space-x-2"
          >
            {isGenerating ? (
              <>
                <div className="animate-spin w-4 h-4 border-2 border-white border-t-transparent rounded-full"></div>
                <span>Generating...</span>
              </>
            ) : (
              <>
                <Brain className="w-4 h-4" />
                <span>Generate AI Message</span>
              </>
            )}
          </button>
        </div>

        {generatedMessage && (
          <div className="space-y-4">
            <div className="bg-gray-50 p-4 rounded-lg border">
              <div className="flex items-center space-x-2 mb-2">
                <MessageSquare className="w-4 h-4 text-blue-600" />
                <span className="font-medium text-gray-900">Generated Message</span>
              </div>
              <p className="text-gray-700 whitespace-pre-line">{generatedMessage}</p>
            </div>

            <div className="flex items-center space-x-4">
              <button
                onClick={sendCampaign}
                className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors flex items-center space-x-2"
              >
                <Send className="w-4 h-4" />
                <span>Send Campaign</span>
              </button>
              
              <button
                onClick={generateMessage}
                className="border border-gray-300 text-gray-700 px-6 py-2 rounded-lg hover:bg-gray-50 transition-colors"
              >
                Regenerate
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}