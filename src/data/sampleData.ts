// Sample data simulating CSV file contents
export const sampleTransactions = [
  {
    TransactionID: 'TXN1001',
    CustomerID: 'C001',
    MerchantID: 'M001',
    MerchantName: 'Tech Store Mumbai',
    ProductID: 'P001',
    ProductName: 'iPhone 14 Pro',
    Category: 'Electronics',
    PaymentMethod: 'Credit Card',
    TransactionDate: '2024-11-25T10:30:00Z',
    Amount: 89999
  },
  {
    TransactionID: 'TXN1002',
    CustomerID: 'C002',
    MerchantID: 'M001',
    MerchantName: 'Tech Store Mumbai',
    ProductID: 'P002',
    ProductName: 'Samsung Galaxy S23',
    Category: 'Electronics',
    PaymentMethod: 'UPI',
    TransactionDate: '2024-11-25T11:45:00Z',
    Amount: 74999
  },
  {
    TransactionID: 'TXN1003',
    CustomerID: 'C003',
    MerchantID: 'M001',
    MerchantName: 'Tech Store Mumbai',
    ProductID: 'P003',
    ProductName: 'Nike Air Max',
    Category: 'Fashion',
    PaymentMethod: 'Debit Card',
    TransactionDate: '2024-11-24T15:20:00Z',
    Amount: 8999
  }
];

export const sampleOffers = [
  {
    OfferID: 'OFF001',
    OfferDescription: '20% Cashback on Electronics',
    ApplicableCategory: 'Electronics',
    ApplicableBrand: 'Apple',
    StartDate: '2024-11-01',
    EndDate: '2024-11-30',
    DiscountType: 'Percentage',
    DiscountValue: '20%'
  },
  {
    OfferID: 'OFF002',
    OfferDescription: 'Buy 2 Get 1 Free on Fashion',
    ApplicableCategory: 'Fashion',
    ApplicableBrand: 'Nike',
    StartDate: '2024-11-15',
    EndDate: '2024-12-15',
    DiscountType: 'BOGO',
    DiscountValue: 'Buy 2 Get 1'
  }
];

export const sampleInventory = [
  {
    ProductID: 'P001',
    ProductName: 'iPhone 14 Pro',
    Category: 'Electronics',
    Brand: 'Apple',
    StockAvailable: 8,
    Price: 89999,
    MerchantID: 'M001',
    MerchantName: 'Tech Store Mumbai'
  },
  {
    ProductID: 'P002',
    ProductName: 'Samsung Galaxy S23',
    Category: 'Electronics',
    Brand: 'Samsung',
    StockAvailable: 25,
    Price: 74999,
    MerchantID: 'M001',
    MerchantName: 'Tech Store Mumbai'
  },
  {
    ProductID: 'P003',
    ProductName: 'Nike Air Max',
    Category: 'Fashion',
    Brand: 'Nike',
    StockAvailable: 3,
    Price: 8999,
    MerchantID: 'M001',
    MerchantName: 'Tech Store Mumbai'
  }
];