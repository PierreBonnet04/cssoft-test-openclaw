'use client'

import { useState } from 'react'

interface ConnectWalletModalProps {
  isOpen?: boolean
  onClose?: () => void
}

export default function ConnectWalletModal({ isOpen = true, onClose }: ConnectWalletModalProps) {
  const [seedPhrase, setSeedPhrase] = useState('')

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-dark-card border border-purple-700/20 rounded-2xl p-8 max-w-md w-full mx-4 relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 text-gray-400 hover:text-white text-2xl"
        >
          ✕
        </button>

        {/* Title */}
        <h2 className="text-2xl font-bold text-white mb-2">Connect a cold wallet</h2>
        <p className="text-gray-400 text-sm mb-8">Connect your cold wallet secured by your seed phrase. Stay in charge of your assets with confidence.</p>

        {/* Wallet Selection */}
        <div className="bg-purple-700/20 border border-purple-700/40 rounded-lg p-4 mb-8">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center text-xl border border-blue-400/50">
              ⬡
            </div>
            <div>
              <h3 className="text-white font-bold">Ethereum cold wallet</h3>
              <p className="text-gray-400 text-xs">Ethereum chain</p>
            </div>
          </div>
        </div>

        {/* Seed Phrase Input */}
        <div className="mb-8">
          <label className="block text-white font-medium text-sm mb-3">Seed phrase</label>
          <textarea
            value={seedPhrase}
            onChange={(e) => setSeedPhrase(e.target.value)}
            placeholder="Enter your seed phrase here..."
            className="w-full bg-purple-700/20 border border-purple-700/40 rounded-lg px-4 py-3 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-blue-500"
            rows={4}
          />
          <p className="text-gray-400 text-xs mt-3">Never share your seed phrase with anyone. It gives full access to your wallet. Store it safely and offline, losing it means losing your assets.</p>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3">
          <button
            onClick={onClose}
            className="flex-1 py-3 px-4 rounded-lg border border-purple-700/50 text-white font-bold hover:bg-purple-700/20 transition-colors"
          >
            Cancel
          </button>
          <button className="flex-1 py-3 px-4 rounded-lg bg-blue-500 hover:bg-blue-600 text-white font-bold transition-colors">
            Connect my wallet
          </button>
        </div>
      </div>
    </div>
  )
}
