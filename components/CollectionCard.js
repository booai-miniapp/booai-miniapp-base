import { useState } from 'react';

export const CollectionCard = ({ collection }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="bg-slate-800 rounded-xl overflow-hidden border border-slate-700 hover:border-indigo-500 transition-all duration-300"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative">
        <img 
          src={collection.image} 
          alt={collection.name} 
          className="w-full h-40 object-cover"
        />
        {isHovered && (
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <button className="bg-indigo-600 hover:bg-indigo-700 px-4 py-2 rounded-lg font-medium">
              View Collection
            </button>
          </div>
        )}
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
  );
};
