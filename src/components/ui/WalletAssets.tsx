'use client'

const assets = [
  { logo: '🟠', name: 'Bitcoin BTC', balance: '0.00362261', value: '$ 341.96' },
  { logo: '🟠', name: 'Bitcoin BTC', balance: '0.00362261', value: '$ 341.96' },
  { logo: '🟠', name: 'Bitcoin BTC', balance: '0.00362261', value: '$ 341.96' },
  { logo: '🟠', name: 'Bitcoin BTC', balance: '0.00362261', value: '$ 341.96' },
  { logo: '🟠', name: 'Bitcoin BTC', balance: '0.00362261', value: '$ 341.96' },
]

export default function WalletAssets() {
  return (
    <div className="bg-dark-card border border-purple-700/20 rounded-2xl p-6">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-lg font-bold text-white">Assets</h3>
        <div className="flex gap-2">
          <button className="px-3 py-1 text-sm text-blue-400 hover:text-blue-300 font-medium">📊 Distribution</button>
          <button className="px-3 py-1 text-sm text-gray-400 hover:text-gray-300 font-medium">📈 Risk score</button>
        </div>
      </div>

      <p className="text-gray-400 text-sm mb-4">A clear breakdown of all your assets.</p>

      {/* Assets Table */}
      <div className="space-y-2">
        {/* Table Header */}
        <div className="grid grid-cols-3 gap-4 px-3 py-2 text-xs text-gray-400 font-medium border-b border-purple-700/20">
          <div>Coin</div>
          <div className="text-right">Price</div>
          <div className="text-right">Balance</div>
        </div>

        {/* Rows */}
        {assets.map((asset, i) => (
          <div key={i} className="grid grid-cols-3 gap-4 px-3 py-3 bg-purple-700/10 rounded-lg items-center hover:bg-purple-700/20 transition-colors">
            <div className="flex items-center gap-2">
              <span className="text-2xl">{asset.logo}</span>
              <span className="text-white font-medium text-sm">{asset.name}</span>
            </div>
            <div className="text-right text-gray-400 text-sm">-</div>
            <div className="text-right">
              <p className="text-white font-medium text-sm">{asset.balance}</p>
              <p className="text-gray-400 text-xs">{asset.value}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Asset Distribution Chart */}
      <div className="mt-6 pt-6 border-t border-purple-700/20">
        <p className="text-white font-bold text-sm mb-4">Distribution</p>
        <div className="flex items-end gap-2 h-24">
          {[70, 15, 8, 5, 2].map((percent, i) => (
            <div key={i} className="flex-1 bg-blue-500 rounded-t" style={{ height: `${percent * 2}px` }}>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
