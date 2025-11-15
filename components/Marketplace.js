import { useState, useEffect } from 'react';
import { CollectionCard } from './CollectionCard';
import { NFTCard } from './NFTCard';
import { DropCard } from './DropCard';
import { TrendingToken } from './TrendingToken';

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
              <CollectionCard key={collection.id} collection={collection} />
            ))}
          </div>
        </div>
      )}

      {activeSection === 'drops' && (
        <div>
          <h3 className="text-lg font-bold mb-4">Featured Drops</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {mockDrops.map(drop => (
              <DropCard key={drop.id} drop={drop} />
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
              <TrendingToken key={token.id} token={token} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
