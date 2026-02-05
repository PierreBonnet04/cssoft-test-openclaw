'use client'

const hotMarketCoins = [
  { logo: '🟠', name: 'Bitcoin BTC', price: '26,396.90 USDT', change: '+17.3%', volume: '22,909,537,118 UB', performance: '74d' },
  { logo: '⚪', name: 'Ethereum ETH', price: '26,396.90 USDT', change: '-14.2%', volume: '22,909,537,118 UB', performance: '74d' },
  { logo: '🟠', name: 'Bitcoin BTC', price: '26,396.90 USDT', change: '+17.3%', volume: '22,909,537,118 UB', performance: '74d' },
  { logo: '⚪', name: 'Ethereum ETH', price: '26,396.90 USDT', change: '-14.2%', volume: '22,909,537,118 UB', performance: '74d' },
]

export default function HotMarket() {
  return (
    <div className="bg-dark-card border border-purple-700/20 rounded-2xl p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold text-white">Hot market</h2>
        <p className="text-gray-400 text-sm">Stay updated with the latest trends and opportunities in the hottest markets.</p>
      </div>

      {/* Filter Tabs */}
      <div className="flex gap-4 mb-6 border-b border-purple-700/20 pb-3">
        {['Top', 'Trending', 'New', 'Gainers'].map(tab => (
          <button
            key={tab}
            className={`text-sm font-medium pb-2 border-b-2 transition-colors ${
              tab === 'Top'
                ? 'text-purple-400 border-purple-500'
                : 'text-gray-400 border-transparent hover:text-gray-300'
            }`}
          >
            {tab === 'Top' && '🔝'} {tab === 'Trending' && '🔥'} {tab === 'New' && '✨'} {tab === 'Gainers' && '📈'} {tab}
          </button>
        ))}
      </div>

      {/* Table Headers */}
      <div className="grid grid-cols-6 gap-4 mb-4 px-4 text-sm text-gray-400 font-medium">
        <div>Coin</div>
        <div>Price</div>
        <div>24h change</div>
        <div>Volume</div>
        <div>7d performance</div>
        <div>Actions</div>
      </div>

      {/* Table Rows */}
      <div className="space-y-2">
        {hotMarketCoins.map((coin, i) => (
          <div key={i} className="grid grid-cols-6 gap-4 px-4 py-3 bg-purple-700/10 rounded-lg items-center hover:bg-purple-700/20 transition-colors">
            <div className="flex items-center gap-2">
              <span className="text-xl">{coin.logo}</span>
              <span className="text-white font-medium text-sm">{coin.name}</span>
            </div>
            <div className="text-white font-medium text-sm">{coin.price}</div>
            <div className={`text-sm font-medium ${coin.change.startsWith('+') ? 'text-green-400' : 'text-red-400'}`}>
              {coin.change}
            </div>
            <div className="text-gray-400 text-sm">{coin.volume}</div>
            <div className="text-gray-400 text-sm">{coin.performance}</div>
            <button className="px-3 py-1 bg-blue-500 hover:bg-blue-600 text-white text-sm rounded font-medium transition-colors">
              Trade
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}
