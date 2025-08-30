#!/usr/bin/env python3
import openai
import json
import sys
import os
from datetime import datetime

# Set OpenAI API key
openai.api_key = os.getenv('OPENAI_API_KEY', 'your_openai_api_key_here')

def generate_personalized_message(customer_data, offer_data, campaign_type):
    """
    Generate personalized WhatsApp message using OpenAI
    """
    try:
        prompt = f"""
        Generate a personalized WhatsApp marketing message for an Indian customer:
        
        Customer Details:
        - Name: {customer_data.get('name', 'Valued Customer')}
        - Favorite Category: {customer_data.get('favorite_category', 'Electronics')}
        - Total Purchases: {customer_data.get('total_purchases', 0)}
        - Last Purchase: {customer_data.get('last_purchase', 'Recently')}
        
        Offer Details:
        - Offer: {offer_data.get('title', 'Special Discount')}
        - Discount: {offer_data.get('discount_value', '10% OFF')}
        - Category: {offer_data.get('category', 'All Products')}
        
        Campaign Type: {campaign_type}
        
        Requirements:
        - Keep message under 160 characters
        - Use appropriate emojis
        - Make it personal and engaging
        - Include clear call-to-action
        - Sound natural and friendly
        - Use Indian context and language style
        """
        
        response = openai.ChatCompletion.create(
            model="gpt-3.5-turbo",
            messages=[
                {"role": "system", "content": "You are a creative marketing assistant specializing in WhatsApp marketing for Indian businesses. Generate engaging, personalized messages that drive sales."},
                {"role": "user", "content": prompt}
            ],
            max_tokens=150,
            temperature=0.7
        )
        
        return response.choices[0].message.content.strip()
        
    except Exception as e:
        print(f"Error generating AI message: {str(e)}")
        return generate_default_message(campaign_type)

def generate_default_message(campaign_type):
    """
    Generate default message based on campaign type
    """
    default_messages = {
        'promotion': '🎉 Special offer just for you! Get amazing discounts on your favorite products. Shop now and save big! 💰',
        'reactivation': '🌟 We miss you! Come back and enjoy exclusive offers on products you love. Limited time only! ⏰',
        'product-launch': '🚀 Exciting new products just arrived! Be the first to explore our latest collection. Check it out now! ✨',
        'seasonal': '🎊 Festival special offers are here! Celebrate with amazing deals on all your favorite items. Happy shopping! 🛍️'
    }
    
    return default_messages.get(campaign_type, default_messages['promotion'])

def analyze_customer_segments(transaction_data):
    """
    Analyze and segment customers based on behavior
    """
    segments = {
        'high_value': [],
        'loyal': [],
        'inactive': [],
        'new': []
    }
    
    # Process transaction data to segment customers
    customer_stats = {}
    
    for transaction in transaction_data:
        customer_id = transaction['CustomerID']
        if customer_id not in customer_stats:
            customer_stats[customer_id] = {
                'total_spent': 0,
                'purchase_count': 0,
                'last_purchase': None,
                'first_purchase': None
            }
        
        customer_stats[customer_id]['total_spent'] += transaction['Amount']
        customer_stats[customer_id]['purchase_count'] += 1
        
        txn_date = datetime.fromisoformat(transaction['TransactionDate'].replace('Z', '+00:00'))
        
        if not customer_stats[customer_id]['last_purchase'] or txn_date > customer_stats[customer_id]['last_purchase']:
            customer_stats[customer_id]['last_purchase'] = txn_date
            
        if not customer_stats[customer_id]['first_purchase'] or txn_date < customer_stats[customer_id]['first_purchase']:
            customer_stats[customer_id]['first_purchase'] = txn_date
    
    # Segment customers
    now = datetime.now()
    
    for customer_id, stats in customer_stats.items():
        days_since_last = (now - stats['last_purchase']).days if stats['last_purchase'] else 999
        days_since_first = (now - stats['first_purchase']).days if stats['first_purchase'] else 0
        
        if stats['total_spent'] > 100000:  # High value: > ₹1 lakh
            segments['high_value'].append(customer_id)
        elif stats['purchase_count'] > 10:  # Loyal: 10+ purchases
            segments['loyal'].append(customer_id)
        elif days_since_last > 30:  # Inactive: No purchase in 30+ days
            segments['inactive'].append(customer_id)
        elif days_since_first < 7:  # New: First purchase within 7 days
            segments['new'].append(customer_id)
    
    return segments

if __name__ == "__main__":
    if len(sys.argv) < 2:
        print("Usage: python ai_campaign_generator.py <function> [args...]")
        sys.exit(1)
    
    function_name = sys.argv[1]
    
    if function_name == "generate_message":
        if len(sys.argv) < 5:
            print("Usage: python ai_campaign_generator.py generate_message <customer_data> <offer_data> <campaign_type>")
            sys.exit(1)
        
        customer_data = json.loads(sys.argv[2])
        offer_data = json.loads(sys.argv[3])
        campaign_type = sys.argv[4]
        
        message = generate_personalized_message(customer_data, offer_data, campaign_type)
        print(message)
    
    elif function_name == "segment_customers":
        if len(sys.argv) < 3:
            print("Usage: python ai_campaign_generator.py segment_customers <transaction_data>")
            sys.exit(1)
        
        transaction_data = json.loads(sys.argv[2])
        segments = analyze_customer_segments(transaction_data)
        print(json.dumps(segments, indent=2))
    
    else:
        print(f"Unknown function: {function_name}")
        sys.exit(1)