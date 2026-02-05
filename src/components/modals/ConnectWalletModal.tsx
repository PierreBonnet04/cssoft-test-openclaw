'use client'

interface ConnectWalletModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function ConnectWalletModal({ isOpen, onClose }: ConnectWalletModalProps) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-dark-card border border-purple-700/20 rounded-2xl p-8 max-w-md w-full mx-4 max-h-96 overflow-y-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-white">Connect a cold wallet</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white text-2xl"
          >
            ✕
          </button>
        </div>

        <p className="text-gray-400 text-sm mb-6">
          Connect your cold wallet secured by your seed phrase. Stay in charge of your assets with confidence.
        </p>

        {/* Wallet Selection */}
        <div className="bg-purple-700/10 border border-purple-700/30 rounded-xl p-4 mb-6">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-gray-300 to-gray-400 flex items-center justify-center text-3xl">
              ◆
            </div>
          </div>
          <h3 className="text-center text-white font-bold">Ethereum cold wallet</h3>
          <p className="text-center text-gray-400 text-sm">Ethereum chain</p>
        </div>

        {/* Seed Phrase Input */}
        <div className="mb-6">
          <label className="text-white font-bold text-sm mb-3 block">Seed phrase</label>
          <input
            type="password"
            placeholder="Enter your seed phrase..."
            className="w-full px-4 py-3 bg-purple-700/10 border border-purple-700/20 rounded-lg text-gray-300 placeholder-gray-500 focus:border-blue-500/50 outline-none transition-colors"
          />
        </div>

        {/* Warning */}
        <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-4 mb-6">
          <p className="text-yellow-400 text-xs">
            Never share your seed phrase with anyone. It gives full access to your wallet. Store it safely and offline, losing it means losing your assets.
          </p>
        </div>

        {/* Buttons */}
        <div className="space-y-3">
          <button
            onClick={onClose}
            className="w-full py-3 px-4 border border-purple-700/50 text-gray-300 hover:bg-purple-700/20 rounded-lg font-bold transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={onClose}
            className="w-full py-3 px-4 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-bold transition-colors"
          >
            Connect my wallet
          </button>
        </div>
      </div>
    </div>
  )
}
