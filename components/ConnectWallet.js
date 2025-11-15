import { useMiniKit } from '@coinbase/onchainkit';

export const ConnectWallet = ({ onConnect }) => {
  const { isMiniApp, isWebApp } = useMiniKit();

  return (
    <button
      onClick={onConnect}
      className="bg-indigo-600 hover:bg-indigo-700 px-6 py-3 rounded-xl font-medium flex items-center transition-colors"
    >
      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"></path>
      </svg>
      Connect Wallet
    </button>
  );
};
