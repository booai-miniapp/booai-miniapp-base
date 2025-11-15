import { useState, useEffect } from 'react';
import { NFTCard } from '../components/NFTCard'; // Fixed import path

// Mock Data
const mockCollections = [
  { id: 1, name: "Otherside Koda", creator: "YugaLabs", floorPrice: 0.8282, items: 8046, volume: 22.2, listed: 2.7, image: "https://placehold.co/300x300/1f2937/ffffff?text=Otherside+Koda" },
  { id: 2, name: "Anichess Ethernals", creator: "Anichess", floorPrice: 0.1111, items: 5000, volume: 5.1, listed: 1.2, image: "https://placehold.co/300x300/f59e0b/ffffff?text=Anichess" },
  { id: 3, name: "Dino Gotchis", creator: "Gotchis", floorPrice: 0.0143, items: 3000, volume: 1.8, listed: 0.8, image: "https://placehold.co/300x300/10b981/ffffff?text=Dino+Gotchis" },
];

const mockDrops = [
  { id: 1, name: "Goblintown Shweepshtakes", price: 0.0002, status: "MINTING NOW", image: "https://placehold.co/300x300/f59e0b/ffffff?text=Goblin" },
  { id: 2, name: "Meebits AI Toys", price: 0.05, status: "MINTING NOW", image: "https://placehold.co/300x300/10b981/ffffff?text=Meebits" },
  { id: 3, name: "City Hats by Omar", price: 0.05, status: "MINTING NOW", image: "https://placehold.co/300x300/8b5cf6/ffffff?text=City+Hats" },
];

const mockTrendingTokens = [
  { id: 1, name: "EDEL", price: 0.047, change: "+95.1%", image: "https://placehold.co/40x40/1f2937/ffffff?text=E" },
  { id: 2, name: "NAKA", price: 0.111, change: "+46.7%", image: "https://placehold.co/40x40/f59e0b/ffffff?text=N" },
  { id: 3, name: "MONE", price: 0.011, change: "+58.2%", image: "https://placehold.co/40x40/10b981/ffffff?text=M" },
  { id: 4, name: "The Official...", price: 0.007, change: "+46.4%", image: "https://placehold.co/40x40/8b5cf6/ffffff?text=T" },
];

const mockSales = [
  { id: 1, name: "Arbinaut", sales: 1823843, price: 0.0155, image: "https://placehold.co/100x100/1f2937/ffffff?text=A" },
  { id: 2, name: "Arbinaut", sales: 1823843, price: 0.0155, image: "https://placehold.co/100x100/f59e0b/ffffff?text=A" },
  { id: 3, name: "Arbinaut", sales: 1823843, price: 0.0155, image: "https://placehold.co/100x100/10b981/ffffff?text=A" },
];

export const Marketplace = ({ userAddress, isConnected }) => {
  const [activeSection, setActiveSection] = useState('collections');

  return (
    <div>
      {/* Hero Section */}
      <section className="mb-8">
        <div className="bg-slate-800 rounded-xl p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold">Otherside Koda</h2>
            <span className="text-blue-400">✓ Verified</span>
          </div>
          <p className="text-slate-400 mb-4">By YugaLabs</p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
            <div className="bg-slate-700 rounded-lg p-3">
              <div className="text-xs text-slate-400">FLOOR PRICE</div>
              <div className="font-bold">{mockCollections[0].floorPrice} ETH</div>
            </div>
            <div className="bg-slate-700 rounded-lg p-3">
              <div className="text-xs text-slate-400">ITEMS</div>
              <div className="font-bold">{mockCollections[0].items}</div>
            </div>
            <div className="bg-slate-700 rounded-lg p-3">
              <div className="text-xs text-slate-400">TOTAL VOLUME</div>
              <div className="font-bold">{mockCollections[0].volume} ETH</div>
            </div>
            <div className="bg-slate-700 rounded-lg p-3">
              <div className="text-xs text-slate-400">LISTED</div>
              <div className="font-bold">{mockCollections[0].listed}%</div>
            </div>
          </div>
        </div>
      </section>

      {/* Tabs */}
      <div className="flex border-b border-slate-700 mb-6">
        <button 
          onClick={() => setActiveSection('collections')}
          className={`px-4 py-2 font-medium ${activeSection === 'collections' ? 'border-b-2 border-indigo-500 text-indigo-400' : 'text-slate-400'}`}
        >
          Collections
        </button>
        <button 
          onClick={() => setActiveSection('drops')}
          className={`px-4 py-2 font-medium ${activeSection === 'drops' ? 'border-b-2 border-indigo-500 text-indigo-400' : 'text-slate-400'}`}
        >
          Featured Drops
        </button>
        <button 
          onClick={() => setActiveSection('sales')}
          className={`px-4 py-2 font-medium ${activeSection === 'sales' ? 'border-b-2 border-indigo-500 text-indigo-400' : 'text-slate-400'}`}
        >
          Highest Weekly Sales
        </button>
        <button 
          onClick={() => setActiveSection('trending')}
          className={`px-4 py-2 font-medium ${activeSection === 'trending' ? 'border-b-2 border-indigo-500 text-indigo-400' : 'text-slate-400'}`}
        >
          Top Movers Today
        </button>
      </div>

      {/* Content */}
      {activeSection === 'collections' && (
        <div>
          <h3 className="text-lg font-bold mb-4">Featured Collections</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {mockCollections.map(collection => (
              <div key={collection.id} className="bg-slate-800 rounded-xl overflow-hidden border border-slate-700 hover:border-indigo-500 transition-all duration-300">
                <div className="relative">
                  <img 
                    src={collection.image} 
                    alt={collection.name} 
                    className="w-full h-40 object-cover"
                  />
                </div>
                
                <div className="p-4">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-bold truncate">{collection.name}</h3>
                    <span className="text-blue-400">✓ Verified</span>
                  </div>
                  
                  <p className="text-slate-400 text-sm mb-4">By {collection.creator}</p>
                  
                  <div className="grid grid-cols-2 gap-2 mb-4">
                    <div className="bg-slate-700 rounded-lg p-2">
                      <div className="text-xs text-slate-400">Floor</div>
                      <div className="font-bold">{collection.floorPrice} ETH</div>
                    </div>
                    <div className="bg-slate-700 rounded-lg p-2">
                      <div className="text-xs text-slate-400">Items</div>
                      <div className="font-bold">{collection.items}</div>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <div className="text-sm text-slate-500">
                      Volume: {collection.volume} ETH
                    </div>
                    <div className="text-sm text-slate-500">
                      Listed: {collection.listed}%
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {activeSection === 'drops' && (
        <div>
          <h3 className="text-lg font-bold mb-4">Featured Drops</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {mockDrops.map(drop => (
              <div key={drop.id} className="bg-slate-800 rounded-xl overflow-hidden border border-slate-700 hover:border-indigo-500 transition-all duration-300">
                <div className="relative">
                  <img 
                    src={drop.image} 
                    alt={drop.name} 
                    className="w-full h-40 object-cover"
                  />
                </div>
                
                <div className="p-4">
                  <h3 className="font-bold mb-2">{drop.name}</h3>
                  
                  <div className="flex justify-between items-center mb-2">
                    <span className="bg-green-500/20 text-green-400 text-xs font-bold px-2 py-1 rounded">
                      {drop.status}
                    </span>
                    <span className="font-bold">{drop.price} ETH</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {activeSection === 'sales' && (
        <div>
          <h3 className="text-lg font-bold mb-4">Highest Weekly Sales</h3>
          <div className="bg-slate-800 rounded-xl p-6">
            <div className="flex items-center space-x-4">
              {mockSales.map(sale => (
                <div key={sale.id} className="text-center">
                  <img src={sale.image} alt={sale.name} className="w-24 h-24 rounded-lg mb-2" />
                  <div className="font-bold">{sale.name}</div>
                  <div className="text-sm text-slate-400">{sale.price} APE</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {activeSection === 'trending' && (
        <div>
          <h3 className="text-lg font-bold mb-4">Trending Tokens</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {mockTrendingTokens.map(token => (
              <div key={token.id} className="bg-slate-800 rounded-xl p-4 flex items-center justify-between hover:bg-slate-700 transition-colors">
                <div className="flex items-center space-x-3">
                  <img src={token.image} alt={token.name} className="w-10 h-10 rounded-full" />
                  <div>
                    <div className="font-bold">{token.name}</div>
                    <div className="text-sm text-slate-400">${token.price}</div>
                  </div>
                </div>
                
                <div className={`text-sm font-bold ${token.change.includes('+') ? 'text-green-400' : 'text-red-400'}`}>
                  {token.change}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
