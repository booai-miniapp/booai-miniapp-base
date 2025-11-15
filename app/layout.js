import './globals.css'

export const metadata = {
  title: 'BOOAI Marketplace',
  description: 'Verified NFTs on Base - OpenSea for Farcaster',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-slate-900 text-white">
        {children}
      </body>
    </html>
  )
}
