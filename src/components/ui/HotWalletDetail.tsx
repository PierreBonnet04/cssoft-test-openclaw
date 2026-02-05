'use client'

export default function HotWalletDetail() {
  return (
    <div className="bg-dark-card border border-purple-700/20 rounded-2xl p-6">
      <div className="flex items-center gap-4 mb-6">
        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-700/40 to-purple-900/60 flex items-center justify-center text-3xl border border-purple-700/40">
          ⚜️
        </div>
        <div>
          <p className="text-gray-400 text-sm">Wallet name</p>
          <h2 className="text-white font-bold text-2xl">ETH+USDT</h2>
        </div>
      </div>

      {/* Balance */}
      <div className="bg-purple-700/10 rounded-xl p-6 border border-purple-700/20 mb-6">
        <div className="flex items-baseline gap-2 mb-2">
          <h3 className="text-4xl font-bold text-white">120.00,340</h3>
          <span className="text-gray-400 text-lg">$120.450,00</span>
        </div>
        <p className="text-gray-400 text-sm mb-4">This is the total amount in all your wallets.</p>
        
        {/* Action Buttons */}
        <div className="flex gap-3">
          <button className="flex-1 py-2 px-3 bg-purple-700/30 hover:bg-purple-700/50 border border-purple-700/50 text-white text-sm font-medium rounded-lg transition-colors">
            💳 Withdraw
          </button>
          <button className="flex-1 py-2 px-3 bg-purple-700/30 hover:bg-purple-700/50 border border-purple-700/50 text-white text-sm font-medium rounded-lg transition-colors">
            ↔️ Transfer
          </button>
          <button className="flex-1 py-2 px-3 bg-blue-500 hover:bg-blue-600 text-white text-sm font-medium rounded-lg transition-colors">
            📥 Deposit
          </button>
        </div>
      </div>
    </div>
  )
}
