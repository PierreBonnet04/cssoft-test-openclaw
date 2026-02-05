'use client'

export default function FundingWalletDetail() {
  return (
    <div className="bg-dark-card border border-purple-700/20 rounded-2xl p-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Wallet Info */}
        <div>
          <h2 className="text-xl font-bold text-white mb-4">Funding wallet</h2>
          <p className="text-gray-400 text-sm mb-6">Dedicated wallet for investments, used to fund your activities on the platform.</p>

          {/* Supported Coins */}
          <div>
            <p className="text-gray-400 text-sm font-medium mb-3">Supported coins</p>
            <div className="flex gap-2 flex-wrap">
              {['◆', '🪙', '📍', '©', '✕', '⊞', '⛓️', '🔗'].map((coin, i) => (
                <span key={i} className="text-2xl">{coin}</span>
              ))}
            </div>
          </div>
        </div>

        {/* Balance Card */}
        <div className="bg-purple-700/10 rounded-xl p-6 border border-purple-700/20">
          <div className="text-center mb-6">
            <div className="text-5xl mb-3">⚜️</div>
            <h3 className="text-white font-bold text-2xl mb-1">120.00,340</h3>
            <p className="text-gray-400 text-sm">$120.450,00</p>
          </div>

          {/* Action Buttons */}
          <div className="space-y-3">
            <button className="w-full py-3 px-4 bg-blue-500 hover:bg-blue-600 text-white font-bold rounded-lg transition-colors">
              💾 Manual deposit
            </button>
            <button className="w-full py-3 px-4 bg-purple-700/30 hover:bg-purple-700/50 border border-purple-700/50 text-white font-bold rounded-lg transition-colors">
              ↔️ Request a transfer
            </button>
            <button className="w-full py-3 px-4 bg-purple-700/30 hover:bg-purple-700/50 border border-purple-700/50 text-white font-bold rounded-lg transition-colors">
              📥 Request a withdraw
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
