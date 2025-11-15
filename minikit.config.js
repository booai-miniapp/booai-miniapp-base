// minikit.config.js
const ROOT_URL = process.env.NEXT_PUBLIC_BASE_URL || 'https://your-booai-app.vercel.app';

export const minikitConfig = {
  accountAssociation: {
    "header": "",
    "payload": "",
    "signature": ""
  },
  miniapp: {
    version: "1",
    name: "BOOAI Marketplace", 
    subtitle: "Verified NFTs on Base", 
    description: "Full OpenSea-style marketplace for Farcaster creators",
    screenshotUrls: [`${ROOT_URL}/screenshot.png`],
    iconUrl: `${ROOT_URL}/logo.png`,
    splashImageUrl: `${ROOT_URL}/splash.jpg`,
    splashBackgroundColor: "#0f172a",
    homeUrl: ROOT_URL,
    webhookUrl: `${ROOT_URL}/api/webhook`,
    primaryCategory: "nft",
    tags: ["nft", "farcaster", "base", "marketplace", "opensea", "mint", "drop", "verified"],
    heroImageUrl: `${ROOT_URL}/hero.jpg`, 
    tagline: "Trade Verified NFTs",
    ogTitle: "BOOAI Marketplace - OpenSea for Farcaster",
    ogDescription: "Buy, sell, mint, and collect verified NFTs on Base",
    ogImageUrl: `${ROOT_URL}/og-image.jpg`,
  },
};
