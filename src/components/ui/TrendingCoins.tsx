'use client'

const coins = [
  { name: 'Fantom', symbol: 'FTM', price: '10,000.00', change: '+17.3%', volume: '22,909,537,118 USD', logo: '🔮' },
  { name: 'Solana', symbol: 'SOL', price: '1,500.00', change: '+9.0%', volume: '22,909,537,118 USD', logo: '◎' },
  { name: 'Polkadot', symbol: 'DOT', price: '5,000.00', change: '+5.2%', volume: '22,909,537,118 USD', logo: '⬡' },
  { name: 'Avalanche', symbol: 'AVAX', price: '500.03', change: '+2.1%', volume: '22,909,537,118 USD', logo: '▲' },
]

export default function TrendingCoins() {
  return (
    <div className="overflow-x-auto">
      <div className="flex gap-4 pb-2">
        {coins.map(coin => (
          <div key={coin.symbol} className="flex-shrink-0 w-48 bg-purple-700/10 border border-purple-700/20 rounded-lg p-4">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-2xl">{coin.logo}</span>
              <div>
                <p className="font-bold text-white text-sm">{coin.name}</p>
                <p className="text-gray-400 text-xs">{coin.symbol}</p>
              </div>
            </div>
            <p className="text-white font-bold mb-1">${coin.price}</p>
            <p className="text-green-400 text-sm font-medium">{coin.change}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
