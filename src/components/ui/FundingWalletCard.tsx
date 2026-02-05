'use client'

export default function FundingWalletCard() {
  return (
    <div className="bg-dark-card border border-purple-700/20 rounded-2xl p-6">
      <div className="flex items-center justify-between mb-8">
        <p className="text-gray-400 text-sm">Wallet Balance</p>
        <span className="text-2xl">👁️</span>
      </div>

      {/* Logo */}
      <div className="flex justify-center mb-8">
        <div className="w-16 h-16 rounded-full bg-purple-700/30 flex items-center justify-center text-4xl">
          ⬡
        </div>
      </div>

      {/* Balance */}
      <div className="text-center mb-8">
        <h2 className="text-5xl font-bold text-white mb-1">120.00,340</h2>
        <p className="text-gray-400">$120.450,00</p>
      </div>

      {/* Action Buttons */}
      <div className="grid grid-cols-3 gap-2">
        <button className="py-2 px-3 bg-blue-500 hover:bg-blue-600 text-white font-medium text-sm rounded-lg transition-colors">
          Manual deposit
        </button>
        <button className="py-2 px-3 border border-purple-700/50 text-gray-300 hover:bg-purple-700/20 font-medium text-sm rounded-lg transition-colors">
          Request a transfer
        </button>
        <button className="py-2 px-3 border border-purple-700/50 text-gray-300 hover:bg-purple-700/20 font-medium text-sm rounded-lg transition-colors">
          Request a withdraw
        </button>
      </div>
    </div>
  )
}
