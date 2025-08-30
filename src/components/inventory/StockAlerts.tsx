import React from 'react';
import { AlertTriangle, Package, TrendingDown } from 'lucide-react';

export function StockAlerts() {
  const alerts = [
    {
      type: 'critical',
      product: 'Nike Air Max',
      currentStock: 3,
      reorderPoint: 5,
      demand: 'high',
      message: 'Critical: Only 3 units left, high demand product',
    },
    {
      type: 'low',
      product: 'iPhone 14 Pro',
      currentStock: 8,
      reorderPoint: 10,
      demand: 'high',
      message: 'Low stock alert: Consider restocking soon',
    },
    {
      type: 'warning',
      product: 'Dairy Milk Chocolate',
      currentStock: 12,
      reorderPoint: 20,
      demand: 'medium',
      message: 'Approaching reorder point',
    },
  ];

  return (
    <div className="mb-6">
      <h4 className="font-semibold text-gray-900 mb-3 flex items-center space-x-2">
        <AlertTriangle className="w-4 h-4 text-orange-500" />
        <span>Stock Alerts</span>
      </h4>
      
      <div className="space-y-2">
        {alerts.map((alert, index) => {
          const bgColor = {
            critical: 'bg-red-50 border-red-200',
            low: 'bg-orange-50 border-orange-200',
            warning: 'bg-yellow-50 border-yellow-200',
          };
          
          const textColor = {
            critical: 'text-red-800',
            low: 'text-orange-800',
            warning: 'text-yellow-800',
          };

          return (
            <div key={index} className={`p-3 rounded-lg border ${bgColor[alert.type]}`}>
              <div className="flex items-center justify-between">
                <div>
                  <h5 className={`font-medium ${textColor[alert.type]}`}>{alert.product}</h5>
                  <p className={`text-sm ${textColor[alert.type]}`}>{alert.message}</p>
                </div>
                <div className="text-right">
                  <div className={`font-bold ${textColor[alert.type]}`}>{alert.currentStock} units</div>
                  <div className="text-xs text-gray-600">Reorder at {alert.reorderPoint}</div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}