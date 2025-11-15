'use client';

import { useState, useEffect } from 'react';
import { useMiniKit } from '@coinbase/onchainkit/miniapp';
import { Header } from '../components/Header';
import { Sidebar } from '../components/Sidebar';
import { Marketplace } from '../components/Marketplace';
import { ConnectWallet } from '../components/ConnectWallet';

export default function Home() {
  const [isConnected, setIsConnected] = useState(false);
  const [userAddress, setUserAddress] = useState('');
  const { connect, disconnect, isMiniApp, isWebApp } = useMiniKit();

  useEffect(() => {
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
    <div className="min-h-screen bg-slate-900 text-white flex">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 overflow-y-auto">
        <Header 
          isConnected={isConnected} 
          userAddress={userAddress} 
          onDisconnect={handleDisconnect}
          onConnect={handleConnect}
        />
        
        <main className="p-4">
          <Marketplace 
            userAddress={userAddress} 
            isConnected={isConnected} 
          />
        </main>
      </div>
    </div>
  );
}
