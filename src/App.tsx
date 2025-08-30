import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/layout/Header';
import { Sidebar } from './components/layout/Sidebar';
import { Dashboard } from './pages/Dashboard';
import { Analytics } from './pages/Analytics';
import { Inventory } from './pages/Inventory';
import { Campaigns } from './pages/Campaigns';
import { Customers } from './pages/Customers';
import { Offers } from './pages/Offers';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Header />
        <div className="flex">
          <Sidebar />
          <main className="flex-1 ml-64 pt-16">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/analytics" element={<Analytics />} />
              <Route path="/inventory" element={<Inventory />} />
              <Route path="/campaigns" element={<Campaigns />} />
              <Route path="/customers" element={<Customers />} />
              <Route path="/offers" element={<Offers />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
}

export default App;