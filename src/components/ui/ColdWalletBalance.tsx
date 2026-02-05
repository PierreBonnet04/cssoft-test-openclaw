'use client'

export default function ColdWalletBalance() {
  return (
    <div className="bg-dark-card border border-purple-700/20 rounded-2xl p-6">
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-full bg-purple-700/30 flex items-center justify-center text-2xl">
            ⬡
          </div>
          <div>
            <p className="text-gray-400 text-sm">Wallet</p>
            <p className="text-gray-400 text-sm">
              <span className="text-green-400">●</span> ETH-USDT
            </p>
          </div>
        </div>
      </div>

      {/* Balance */}
      <div className="mb-8">
        <p className="text-gray-400 text-sm mb-2">Total balance</p>
        <h2 className="text-5xl font-bold text-white mb-1">120.00,340</h2>
        <p className="text-gray-400 text-sm">$120.450,00</p>
      </div>

      {/* Action Buttons */}
      <div className="grid grid-cols-3 gap-3">
        <button className="flex flex-col items-center gap-2 p-4 rounded-lg bg-purple-700/10 border border-purple-700/30 hover:border-blue-500/50 transition-colors group">
          <span className="text-2xl group-hover:scale-110 transition-transform">💧</span>
          <span className="text-xs text-gray-400 group-hover:text-gray-300">Withdraw</span>
        </button>
        <button className="flex flex-col items-center gap-2 p-4 rounded-lg bg-purple-700/10 border border-purple-700/30 hover:border-blue-500/50 transition-colors group">
          <span className="text-2xl group-hover:scale-110 transition-transform">↔️</span>
          <span className="text-xs text-gray-400 group-hover:text-gray-300">Transfer</span>
        </button>
        <button className="flex flex-col items-center gap-2 p-4 rounded-lg bg-purple-700/10 border border-purple-700/30 hover:border-blue-500/50 transition-colors group">
          <span className="text-2xl group-hover:scale-110 transition-transform">💰</span>
          <span className="text-xs text-gray-400 group-hover:text-gray-300">Deposit</span>
        </button>
      </div>
    </div>
  )
}
