import React from 'react';
import { StatsGrid } from '../components/dashboard/StatsGrid';
import { RevenueChart } from '../components/dashboard/RevenueChart';
import { TopProducts } from '../components/dashboard/TopProducts';
import { RecentTransactions } from '../components/dashboard/RecentTransactions';
import { AIInsights } from '../components/dashboard/AIInsights';
import { QuickActions } from '../components/dashboard/QuickActions';

export function Dashboard() {
  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
          <p className="text-gray-600">Welcome back! Here's what's happening with your business.</p>
        </div>
      </div>

      <StatsGrid />
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <RevenueChart />
        <AIInsights />
      </div>
      
      <QuickActions />
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <TopProducts />
        <RecentTransactions />
      </div>
    </div>
  );
}