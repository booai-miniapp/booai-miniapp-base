import { useState } from 'react';

export const Header = ({ isConnected, userAddress, onDisconnect, onConnect }) => {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <header className="bg-slate-800 border-b border-slate-700 px-6 py-4 flex items-center justify-between">
      <div className="flex items-center space-x-4">
        <img src="/logo.png" alt="BOOAI" className="h-8" />
        <h1 className="text-xl font-bold">BOOAI Marketplace</h1>
      </div>

      <div className="flex-1 max-w-md mx-4">
        <div className="relative">
          <input
            type="text"
            placeholder="Search collections, NFTs, or creators..."
            className="w-full bg-slate-700 border border-slate-600 rounded-lg py-2 px-4 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <svg 
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-slate-400" 
            width="18" 
            height="18" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
          </svg>
        </div>
      </div>

      <div className="flex items-center space-x-4">
        {isConnected ? (
          <div className="flex items-center space-x-3">
            <div className="bg-indigo-600 rounded-full px-3 py-1 text-sm font-medium">
              {userAddress.slice(0, 6)}...{userAddress.slice(-4)}
            </div>
            <button 
              onClick={onDisconnect}
              className="bg-red-500 hover:bg-red-600 px-4 py-2 rounded-lg text-sm font-medium transition-colors"
            >
              Disconnect
            </button>
          </div>
        ) : (
          <ConnectWallet onConnect={onConnect} />
        )}
      </div>
    </header>
  );
};
