#!/usr/bin/env python3
import pandas as pd
import json
import sys
from datetime import datetime, timedelta

def load_csv_data():
    """
    Load and process CSV data files
    """
    try:
        # Load sample data (in production, these would be actual CSV files)
        transactions = pd.DataFrame([
            {
                'TransactionID': 'TXN1001',
                'CustomerID': 'C001',
                'MerchantID': 'M001',
                'MerchantName': 'Tech Store Mumbai',
                'ProductID': 'P001',
                'ProductName': 'iPhone 14 Pro',
                'Category': 'Electronics',
                'PaymentMethod': 'Credit Card',
                'TransactionDate': '2024-11-25T10:30:00Z',
                'Amount': 89999
            },
            {
                'TransactionID': 'TXN1002',
                'CustomerID': 'C002',
                'MerchantID': 'M001',
                'MerchantName': 'Tech Store Mumbai',
                'ProductID': 'P002',
                'ProductName': 'Samsung Galaxy S23',
                'Category': 'Electronics',
                'PaymentMethod': 'UPI',
                'TransactionDate': '2024-11-25T11:45:00Z',
                'Amount': 74999
            }
        ])
        
        offers = pd.DataFrame([
            {
                'OfferID': 'OFF001',
                'OfferDescription': '20% Cashback on Electronics',
                'ApplicableCategory': 'Electronics',
                'ApplicableBrand': 'Apple',
                'StartDate': '2024-11-01',
                'EndDate': '2024-11-30',
                'DiscountType': 'Percentage',
                'DiscountValue': '20%'
            }
        ])
        
        inventory = pd.DataFrame([
            {
                'ProductID': 'P001',
                'ProductName': 'iPhone 14 Pro',
                'Category': 'Electronics',
                'Brand': 'Apple',
                'StockAvailable': 8,
                'Price': 89999,
                'MerchantID': 'M001',
                'MerchantName': 'Tech Store Mumbai'
            }
        ])
        
        return transactions, offers, inventory
        
    except Exception as e:
        print(f"Error loading data: {str(e)}")
        return None, None, None

def analyze_customer_behavior(transactions):
    """
    Analyze customer purchasing behavior
    """
    analysis = {}
    
    # Group by customer
    customer_data = transactions.groupby('CustomerID').agg({
        'Amount': ['sum', 'count', 'mean'],
        'TransactionDate': 'max',
        'Category': lambda x: x.mode()[0] if not x.empty else 'Unknown'
    }).round(2)
    
    # Flatten column names
    customer_data.columns = ['total_spent', 'purchase_count', 'avg_order_value', 'last_purchase', 'favorite_category']
    
    # Convert to dictionary
    analysis['customers'] = customer_data.to_dict('index')
    
    # Category analysis
    category_sales = transactions.groupby('Category')['Amount'].sum().sort_values(ascending=False)
    analysis['top_categories'] = category_sales.to_dict()
    
    # Product analysis
    product_sales = transactions.groupby('ProductName')['Amount'].sum().sort_values(ascending=False).head(10)
    analysis['top_products'] = product_sales.to_dict()
    
    return analysis

def generate_customer_insights(customer_id, transactions, offers, inventory):
    """
    Generate AI insights for a specific customer
    """
    customer_txns = transactions[transactions['CustomerID'] == customer_id]
    
    if customer_txns.empty:
        return {"error": "Customer not found"}
    
    insights = {
        'customer_id': customer_id,
        'total_purchases': len(customer_txns),
        'total_spent': customer_txns['Amount'].sum(),
        'favorite_category': customer_txns['Category'].mode()[0] if not customer_txns.empty else 'Unknown',
        'last_purchase_date': customer_txns['TransactionDate'].max(),
        'avg_order_value': customer_txns['Amount'].mean(),
        'recommended_offers': []
    }
    
    # Find relevant offers
    favorite_category = insights['favorite_category']
    relevant_offers = offers[offers['ApplicableCategory'] == favorite_category]
    
    for _, offer in relevant_offers.iterrows():
        insights['recommended_offers'].append({
            'offer_id': offer['OfferID'],
            'description': offer['OfferDescription'],
            'discount': offer['DiscountValue']
        })
    
    return insights

if __name__ == "__main__":
    transactions, offers, inventory = load_csv_data()
    
    if transactions is not None:
        # Analyze all customer behavior
        analysis = analyze_customer_behavior(transactions)
        print(json.dumps(analysis, indent=2, default=str))
    else:
        print("Failed to load data")
        sys.exit(1)