// AI service for generating personalized messages using OpenAI
export class AIService {
  private static instance: AIService;
  private apiKey: string;

  constructor() {
    this.apiKey = import.meta.env.VITE_OPENAI_API_KEY || 'your_openai_api_key_here';
  }

  public static getInstance(): AIService {
    if (!AIService.instance) {
      AIService.instance = new AIService();
    }
    return AIService.instance;
  }

  async generatePersonalizedMessage(customerData: any, offerData: any, campaignType: string): Promise<string> {
    try {
      const prompt = this.buildPrompt(customerData, offerData, campaignType);
      
      const response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${this.apiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          model: 'gpt-3.5-turbo',
          messages: [
            {
              role: 'system',
              content: 'You are a creative marketing assistant that generates personalized WhatsApp messages for Indian customers. Keep messages friendly, engaging, and under 160 characters. Use emojis appropriately and include clear call-to-actions.'
            },
            {
              role: 'user',
              content: prompt
            }
          ],
          max_tokens: 150,
          temperature: 0.7,
        }),
      });

      const data = await response.json();
      return data.choices[0]?.message?.content || 'Default promotional message';
    } catch (error) {
      console.error('Failed to generate AI message:', error);
      return this.getDefaultMessage(campaignType);
    }
  }

  private buildPrompt(customerData: any, offerData: any, campaignType: string): string {
    return `Generate a personalized WhatsApp marketing message for:
    Customer: ${customerData.name}
    Purchase History: ${customerData.favoriteCategory} buyer, ${customerData.totalPurchases} previous purchases
    Campaign Type: ${campaignType}
    Offer: ${offerData.title} - ${offerData.discountValue} off ${offerData.category}
    
    Make it engaging, personal, and include relevant emojis. Keep under 160 characters.`;
  }

  private getDefaultMessage(campaignType: string): string {
    const defaultMessages = {
      promotion: '🎉 Special offer just for you! Get amazing discounts on your favorite products. Shop now and save big! 💰',
      reactivation: '🌟 We miss you! Come back and enjoy exclusive offers on products you love. Limited time only! ⏰',
      'product-launch': '🚀 Exciting new products just arrived! Be the first to explore our latest collection. Check it out now! ✨',
      seasonal: '🎊 Festival special offers are here! Celebrate with amazing deals on all your favorite items. Happy shopping! 🛍️',
    };
    
    return defaultMessages[campaignType] || defaultMessages.promotion;
  }

  async analyzeCustomerBehavior(transactionData: any[]): Promise<any> {
    // Analyze customer purchase patterns, preferences, and behavior
    const analysis = {
      topCategories: this.getTopCategories(transactionData),
      purchaseFrequency: this.calculatePurchaseFrequency(transactionData),
      averageOrderValue: this.calculateAverageOrderValue(transactionData),
      recommendations: this.generateRecommendations(transactionData),
    };
    
    return analysis;
  }

  private getTopCategories(transactions: any[]): any[] {
    const categoryCount = transactions.reduce((acc, txn) => {
      acc[txn.category] = (acc[txn.category] || 0) + 1;
      return acc;
    }, {});
    
    return Object.entries(categoryCount)
      .sort(([,a], [,b]) => (b as number) - (a as number))
      .slice(0, 5);
  }

  private calculatePurchaseFrequency(transactions: any[]): number {
    // Calculate average days between purchases
    const uniqueDates = [...new Set(transactions.map(t => t.TransactionDate))];
    return uniqueDates.length > 1 ? 30 / uniqueDates.length : 0;
  }

  private calculateAverageOrderValue(transactions: any[]): number {
    const total = transactions.reduce((sum, txn) => sum + txn.Amount, 0);
    return transactions.length > 0 ? total / transactions.length : 0;
  }

  private generateRecommendations(transactions: any[]): string[] {
    const recommendations = [];
    
    // Example recommendation logic
    const categories = this.getTopCategories(transactions);
    if (categories[0] && categories[0][1] > 5) {
      recommendations.push(`Focus on ${categories[0][0]} category - customer's favorite`);
    }
    
    const avgValue = this.calculateAverageOrderValue(transactions);
    if (avgValue > 50000) {
      recommendations.push('High-value customer - offer premium products');
    }
    
    return recommendations;
  }
}