'use client'

export default function Web3WalletCard() {
  const walletLogos = ['🌈', '🦊', '💰', '🔐', '⛓️', '🟣']

  return (
    <div className="bg-dark-card border border-purple-700/20 rounded-2xl p-6">
      <h3 className="text-lg font-bold text-white mb-2">Web3 wallet</h3>
      <p className="text-gray-400 text-sm mb-6">Connect your Web3 wallet to access and manage your assets securely.</p>

      {/* Wallet Grid */}
      <div className="grid grid-cols-2 gap-3">
        {walletLogos.map((logo, i) => (
          <div
            key={i}
            className="aspect-square rounded-lg bg-purple-700/20 border border-purple-700/40 flex items-center justify-center text-2xl hover:border-blue-500/40 transition-colors cursor-pointer"
          >
            {logo}
          </div>
        ))}
      </div>

      <button className="w-full mt-4 py-2 px-4 rounded-lg bg-blue-500 hover:bg-blue-600 text-white font-medium text-sm transition-colors">
        Connect wallet
      </button>
    </div>
  )
}
