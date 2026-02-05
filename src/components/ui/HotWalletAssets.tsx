'use client'

const assets = [
  { logo: '🟠', name: 'Bitcoin BTC', balance: '0.00362261', percentage: '70%' },
  { logo: '🟠', name: 'Bitcoin BTC', balance: '0.00362261', percentage: '15%' },
  { logo: '🟠', name: 'Bitcoin BTC', balance: '0.00362261', percentage: '8%' },
  { logo: '🟠', name: 'Bitcoin BTC', balance: '0.00362261', percentage: '5%' },
  { logo: '🟠', name: 'Bitcoin BTC', balance: '0.00362261', percentage: '2%' },
]

export default function HotWalletAssets() {
  return (
    <div className="bg-dark-card border border-purple-700/20 rounded-2xl p-6">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-lg font-bold text-white">Assets</h3>
        <div className="flex gap-2">
          <button className="px-3 py-1 text-sm text-blue-400 hover:text-blue-300 font-medium">📊 Distribution</button>
          <button className="px-3 py-1 text-sm text-gray-400 hover:text-gray-300 font-medium">📈 Risk score</button>
        </div>
      </div>

      <p className="text-gray-400 text-sm mb-6">A clear breakdown of all your assets.</p>

      {/* Distribution Pie Chart */}
      <div className="flex justify-center mb-8">
        <div className="relative w-40 h-40">
          {/* Pie Chart SVG */}
          <svg viewBox="0 0 120 120" className="w-full h-full">
            {/* 70% segment - Blue */}
            <circle cx="60" cy="60" r="50" fill="none" stroke="#667eea" strokeWidth="30" strokeDasharray="109.96 157.08" />
            {/* 15% segment */}
            <circle cx="60" cy="60" r="50" fill="none" stroke="#764ba2" strokeWidth="30" strokeDasharray="23.56 157.08" strokeDashoffset="-109.96" />
            {/* Center text */}
            <text x="60" y="65" textAnchor="middle" className="text-white font-bold text-2xl" fill="white">5</text>
            <text x="60" y="80" textAnchor="middle" className="text-gray-400 text-xs" fill="#999">coins</text>
          </svg>
        </div>
      </div>

      {/* Assets List */}
      <div className="space-y-2">
        {assets.map((asset, i) => (
          <div key={i} className="flex items-center gap-3 p-3 bg-purple-700/10 rounded-lg hover:bg-purple-700/20 transition-colors">
            <span className="text-2xl flex-shrink-0">{asset.logo}</span>
            <div className="flex-1 min-w-0">
              <p className="text-white font-medium text-sm">{asset.name}</p>
              <p className="text-gray-400 text-xs">{asset.balance}</p>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-24 h-2 bg-purple-700/20 rounded-full overflow-hidden">
                <div className="h-full bg-blue-500" style={{ width: asset.percentage }}></div>
              </div>
              <span className="text-gray-400 text-sm font-medium">{asset.percentage}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
