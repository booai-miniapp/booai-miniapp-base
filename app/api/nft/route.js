// app/api/nft/route.js
export async function GET(request) {
  // In a real app, this would fetch from Alchemy, Etherscan, or your own database
  const nfts = [
    {
      id: 1,
      name: "Otherside Koda #1234",
      collection: "Otherside Koda",
      price: 0.8282,
      image: "https://placehold.co/300x300/1f2937/ffffff?text=Koda",
      owner: "0x123...abc",
      verified: true
    },
    {
      id: 2,
      name: "Anichess Eternal #5678",
      collection: "Anichess Ethernals",
      price: 0.1111,
      image: "https://placehold.co/300x300/f59e0b/ffffff?text=Anichess",
      owner: "0x456...def",
      verified: true
    }
  ];

  return new Response(JSON.stringify(nfts), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
}
