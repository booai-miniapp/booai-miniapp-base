'use client';

import { useState, useEffect } from 'react';
import { useMiniKit } from '@coinbase/onchainkit';
import { ConnectWallet } from '../components/ConnectWallet';
import { Marketplace } from '../components/Marketplace';

export default function Home() {
  const [isConnected, setIsConnected] = useState(false);
  const [userAddress, setUserAddress] = useState('');
  const { connect, disconnect, isMiniApp, isWebApp } = useMiniKit();

  useEffect(() => {
    // Check if user is already connected
    if (typeof window !== 'undefined') {
      const storedAddress = localStorage.getItem('userAddress');
      if (storedAddress) {
        setIsConnected(true);
        setUserAddress(storedAddress);
      }
    }
  }, []);

  const handleConnect = async () => {
    try {
      const address = await connect();
      setUserAddress(address);
      setIsConnected(true);
      localStorage.setItem('userAddress', address);
    } catch (error) {
      console.error('Connection failed:', error);
    }
  };

  const handleDisconnect = () => {
    disconnect();
    setIsConnected(false);
    setUserAddress('');
    localStorage.removeItem('userAddress');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 text-white flex">
      {/* Sidebar */}
      <div className="w-64 bg-slate-800 border-r border-slate-700 h-screen p-4">
        <div className="mb-8">
          <img src="/logo.png" alt="BOOAI" className="h-8 mb-4" />
          <h2 className="text-xl font-bold">BOOAI</h2>
        </div>

        <nav>
          <ul className="space-y-2">
            <li>
              <button className="w-full text-left px-4 py-2 rounded-lg bg-indigo-600">
                All
              </button>
            </li>
            <li>
              <button className="w-full text-left px-4 py-2 rounded-lg hover:bg-slate-700">
                Gaming
              </button>
            </li>
            <li>
              <button className="w-full text-left px-4 py-2 rounded-lg hover:bg-slate-700">
                Art
              </button>
            </li>
            <li>
              <button className="w-full text-left px-4 py-2 rounded-lg hover:bg-slate-700">
                PFPs
              </button>
            </li>
            <li>
              <button className="w-full text-left px-4 py-2 rounded-lg hover:bg-slate-700">
                Featured Drops
              </button>
            </li>
            <li>
              <button className="w-full text-left px-4 py-2 rounded-lg hover:bg-slate-700">
                Highest Weekly Sales
              </button>
            </li>
            <li>
              <button className="w-full text-left px-4 py-2 rounded-lg hover:bg-slate-700">
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

      {/* Main Content */}
      <div className="flex-1 overflow-y-auto">
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
                value=""
                onChange={() => {}}
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
                  {userAddress ? `${userAddress.slice(0, 6)}...${userAddress.slice(-4)}` : '...'}
                </div>
                <button 
                  onClick={handleDisconnect}
                  className="bg-red-500 hover:bg-red-600 px-4 py-2 rounded-lg text-sm font-medium transition-colors"
                >
                  Disconnect
                </button>
              </div>
            ) : (
              <ConnectWallet onConnect={handleConnect} />
            )}
          </div>
        </header>

        <main className="p-4">
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
                  <div className="font-bold">0.8282 ETH</div>
                </div>
                <div className="bg-slate-700 rounded-lg p-3">
                  <div className="text-xs text-slate-400">ITEMS</div>
                  <div className="font-bold">8046</div>
                </div>
                <div className="bg-slate-700 rounded-lg p-3">
                  <div className="text-xs text-slate-400">TOTAL VOLUME</div>
                  <div className="font-bold">22.2 ETH</div>
                </div>
                <div className="bg-slate-700 rounded-lg p-3">
                  <div className="text-xs text-slate-400">LISTED</div>
                  <div className="font-bold">2.7%</div>
                </div>
              </div>
            </div>
          </section>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {/* Mock Collections */}
            <div className="bg-slate-800 rounded-xl overflow-hidden border border-slate-700 hover:border-indigo-500 transition-all duration-300">
              <div className="relative">
                <img 
                  src="https://placehold.co/300x300/1f2937/ffffff?text=Otherside+Koda" 
                  alt="Otherside Koda" 
                  className="w-full h-40 object-cover"
                />
              </div>
              
              <div className="p-4">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-bold truncate">Otherside Koda</h3>
                  <span className="text-blue-400">✓ Verified</span>
                </div>
                
                <p className="text-slate-400 text-sm mb-4">By YugaLabs</p>
                
                <div className="grid grid-cols-2 gap-2 mb-4">
                  <div className="bg-slate-700 rounded-lg p-2">
                    <div className="text-xs text-slate-400">Floor</div>
                    <div className="font-bold">0.8282 ETH</div>
                  </div>
                  <div className="bg-slate-700 rounded-lg p-2">
                    <div className="text-xs text-slate-400">Items</div>
                    <div className="font-bold">8046</div>
                  </div>
                </div>
                
                <div className="flex justify-between items-center">
                  <div className="text-sm text-slate-500">
                    Volume: 22.2 ETH
                  </div>
                  <div className="text-sm text-slate-500">
                    Listed: 2.7%
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-slate-800 rounded-xl overflow-hidden border border-slate-700 hover:border-indigo-500 transition-all duration-300">
              <div className="relative">
                <img 
                  src="https://placehold.co/300x300/f59e0b/ffffff?text=Anichess" 
                  alt="Anichess Ethernals" 
                  className="w-full h-40 object-cover"
                />
              </div>
              
              <div className="p-4">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-bold truncate">Anichess Ethernals</h3>
                  <span className="text-blue-400">✓ Verified</span>
                </div>
                
                <p className="text-slate-400 text-sm mb-4">By Anichess</p>
                
                <div className="grid grid-cols-2 gap-2 mb-4">
                  <div className="bg-slate-700 rounded-lg p-2">
                    <div className="text-xs text-slate-400">Floor</div>
                    <div className="font-bold">0.1111 ETH</div>
                  </div>
                  <div className="bg-slate-700 rounded-lg p-2">
                    <div className="text-xs text-slate-400">Items</div>
                    <div className="font-bold">5000</div>
                  </div>
                </div>
                
                <div className="flex justify-between items-center">
                  <div className="text-sm text-slate-500">
                    Volume: 5.1 ETH
                  </div>
                  <div className="text-sm text-slate-500">
                    Listed: 1.2%
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-slate-800 rounded-xl overflow-hidden border border-slate-700 hover:border-indigo-500 transition-all duration-300">
              <div className="relative">
                <img 
                  src="https://placehold.co/300x300/10b981/ffffff?text=Dino+Gotchis" 
                  alt="Dino Gotchis" 
                  className="w-full h-40 object-cover"
                />
              </div>
              
              <div className="p-4">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-bold truncate">Dino Gotchis</h3>
                  <span className="text-blue-400">✓ Verified</span>
                </div>
                
                <p className="text-slate-400 text-sm mb-4">By Gotchis</p>
                
                <div className="grid grid-cols-2 gap-2 mb-4">
                  <div className="bg-slate-700 rounded-lg p-2">
                    <div className="text-xs text-slate-400">Floor</div>
                    <div className="font-bold">0.0143 ETH</div>
                  </div>
                  <div className="bg-slate-700 rounded-lg p-2">
                    <div className="text-xs text-slate-400">Items</div>
                    <div className="font-bold">3000</div>
                  </div>
                </div>
                
                <div className="flex justify-between items-center">
                  <div className="text-sm text-slate-500">
                    Volume: 1.8 ETH
                  </div>
                  <div className="text-sm text-slate-500">
                    Listed: 0.8%
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
    }
