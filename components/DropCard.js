import { useState } from 'react';

export const DropCard = ({ drop }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="bg-slate-800 rounded-xl overflow-hidden border border-slate-700 hover:border-indigo-500 transition-all duration-300"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative">
        <img 
          src={drop.image} 
          alt={drop.name} 
          className="w-full h-40 object-cover"
        />
        {isHovered && (
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <button className="bg-indigo-600 hover:bg-indigo-700 px-4 py-2 rounded-lg font-medium">
              Mint Now
            </button>
          </div>
        )}
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
  );
};
