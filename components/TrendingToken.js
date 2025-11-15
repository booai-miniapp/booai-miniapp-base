import { useState } from 'react';

export const TrendingToken = ({ token }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="bg-slate-800 rounded-xl p-4 flex items-center justify-between hover:bg-slate-700 transition-colors"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
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
  );
};
