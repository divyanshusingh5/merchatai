import React from 'react';
import { NavLink } from 'react-router-dom';
import { 
  BarChart3, 
  Package, 
  MessageSquare, 
  Users, 
  Tag, 
  Home,
  TrendingUp
} from 'lucide-react';

const navItems = [
  { path: '/', icon: Home, label: 'Dashboard' },
  { path: '/analytics', icon: BarChart3, label: 'Analytics' },
  { path: '/inventory', icon: Package, label: 'Inventory' },
  { path: '/campaigns', icon: MessageSquare, label: 'Campaigns' },
  { path: '/customers', icon: Users, label: 'Customers' },
  { path: '/offers', icon: Tag, label: 'Offers' },
];

export function Sidebar() {
  return (
    <aside className="fixed left-0 top-16 bottom-0 w-64 bg-white border-r border-gray-200 z-40">
      <nav className="p-4 space-y-2">
        {navItems.map((item) => {
          const Icon = item.icon;
          return (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center space-x-3 px-3 py-2 rounded-lg transition-colors ${
                  isActive
                    ? 'bg-blue-50 text-blue-700 border-r-2 border-blue-700'
                    : 'text-gray-700 hover:bg-gray-50'
                }`
              }
            >
              <Icon className="w-5 h-5" />
              <span className="font-medium">{item.label}</span>
            </NavLink>
          );
        })}
      </nav>
    </aside>
  );
}