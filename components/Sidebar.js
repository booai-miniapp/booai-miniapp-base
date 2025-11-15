import { useState } from 'react';

export const Sidebar = () => {
  const [activeTab, setActiveTab] = useState('all');

  return (
    <div className="w-64 bg-slate-800 border-r border-slate-700 h-screen p-4">
      <div className="mb-8">
        <img src="/logo.png" alt="BOOAI" className="h-8 mb-4" />
        <h2 className="text-xl font-bold">BOOAI</h2>
      </div>

      <nav>
        <ul className="space-y-2">
          <li>
            <button 
              onClick={() => setActiveTab('all')}
              className={`w-full text-left px-4 py-2 rounded-lg ${activeTab === 'all' ? 'bg-indigo-600' : 'hover:bg-slate-700'}`}
            >
              All
            </button>
          </li>
          <li>
            <button 
              onClick={() => setActiveTab('gaming')}
              className={`w-full text-left px-4 py-2 rounded-lg ${activeTab === 'gaming' ? 'bg-indigo-600' : 'hover:bg-slate-700'}`}
            >
              Gaming
            </button>
          </li>
          <li>
            <button 
              onClick={() => setActiveTab('art')}
              className={`w-full text-left px-4 py-2 rounded-lg ${activeTab === 'art' ? 'bg-indigo-600' : 'hover:bg-slate-700'}`}
            >
              Art
            </button>
          </li>
          <li>
            <button 
              onClick={() => setActiveTab('pfps')}
              className={`w-full text-left px-4 py-2 rounded-lg ${activeTab === 'pfps' ? 'bg-indigo-600' : 'hover:bg-slate-700'}`}
            >
              PFPs
            </button>
          </li>
          <li>
            <button 
              onClick={() => setActiveTab('drops')}
              className={`w-full text-left px-4 py-2 rounded-lg ${activeTab === 'drops' ? 'bg-indigo-600' : 'hover:bg-slate-700'}`}
            >
              Featured Drops
            </button>
          </li>
          <li>
            <button 
              onClick={() => setActiveTab('sales')}
              className={`w-full text-left px-4 py-2 rounded-lg ${activeTab === 'sales' ? 'bg-indigo-600' : 'hover:bg-slate-700'}`}
            >
              Highest Weekly Sales
            </button>
          </li>
          <li>
            <button 
              onClick={() => setActiveTab('trending')}
              className={`w-full text-left px-4 py-2 rounded-lg ${activeTab === 'trending' ? 'bg-indigo-600' : 'hover:bg-slate-700'}`}
            >
              Top Movers Today
            </button>
          </li>
        </ul>
      </nav>

      <div className="mt-8 pt-4 border-t border-slate-700">
        <h3 className="font-bold mb-2">Collections</h3>
        <div className="space-y-2">
          <div className="flex items-center justify-between text-sm">
            <span>Hypurr</span>
            <span className="text-green-400">+4.1%</span>
          </div>
          <div className="flex items-center justify-between text-sm">
            <span>Pudgy Penguins</span>
            <span className="text-red-400">-6.8%</span>
          </div>
          <div className="flex items-center justify-between text-sm">
            <span>CryptoPunks</span>
            <span className="text-red-400">-1.6%</span>
          </div>
          <div className="flex items-center justify-between text-sm">
            <span>Lil Pudgs</span>
            <span className="text-red-400">-3.2%</span>
          </div>
          <div className="flex items-center justify-between text-sm">
            <span>Bored Ape Yacht Club</span>
            <span className="text-red-400">-0.7%</span>
          </div>
        </div>
      </div>
    </div>
  );
};
