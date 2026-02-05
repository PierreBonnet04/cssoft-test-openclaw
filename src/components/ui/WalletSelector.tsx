'use client'

import { useState } from 'react'

const wallets = [
  { name: 'Cold wallet', type: 'Decentralized wallets fully controlled by the user, offering enhanced security through private key ownership.', chains: ['◆', '🔒', '🔑', '©', '◼', '✕', '⊞', '⛓️'], logo: '🔐' },
  { name: 'Ethereum', chain: 'Ethereum chain wallet', logo: '⬡' },
  { name: 'Bitcoin', chain: 'Bitcoin chain wallet', logo: '🟠' },
  { name: 'TRON', chain: 'TRON chain wallet', logo: '🔴' },
  { name: 'BNB', chain: 'BNB smart chain wallet', logo: '🟡' },
  { name: 'Solana', chain: 'Solana chain wallet', logo: '◎' },
  { name: 'Avalanche - C', chain: 'Avalanche C chain wallet', logo: '🔺' },
  { name: 'Polygon', chain: 'Polygon chain wallet', logo: '🟣' },
  { name: 'Ripple', chain: 'Ripple chain wallet', logo: '❌' },
  { name: 'Celo', chain: 'Celo chain wallet', logo: '🟢' },
  { name: 'Bitcoin Cash', chain: 'Bitcoin Cash chain wallet', logo: '🟢' },
  { name: 'Litecoin', chain: 'Litecoin chain wallet', logo: '⚡' },
  { name: 'Arbitrum One', chain: 'Arbitrum One chain wallet', logo: '📊' },
]

export default function WalletSelector() {
  const [activeTab, setActiveTab] = useState('cold')

  return (
    <div className="space-y-6">
      {/* Choose Wallet Section */}
      <div className="bg-dark-card border border-purple-700/20 rounded-2xl p-6">
        <h2 className="text-2xl font-bold text-white mb-6">Choose your wallet</h2>

        {/* Tabs */}
        <div className="flex gap-4 mb-8 border-b border-purple-700/20 pb-4">
          {[
            { id: 'cold', label: '🔴 Hot wallets' },
            { id: 'ethereum', label: '🔵 Cold wallets' },
            { id: 'funding', label: '🟢 Funding wallet' },
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`py-2 px-4 rounded-lg font-medium transition-colors ${
                activeTab === tab.id
                  ? 'text-blue-400 border-b-2 border-blue-400'
                  : 'text-gray-400 hover:text-gray-300'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Wallets Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {wallets.map((wallet, i) => (
            <div
              key={i}
              className="bg-purple-700/10 border border-purple-700/40 rounded-xl p-6 hover:border-blue-500/50 transition-colors cursor-pointer group"
            >
              {/* Logo */}
              <div className="text-4xl mb-4">{wallet.logo}</div>

              {/* Name */}
              <h3 className="text-white font-bold text-lg mb-2">{wallet.name}</h3>

              {/* Description or Chain */}
              <p className="text-gray-400 text-sm mb-4">
                {wallet.type || wallet.chain}
              </p>

              {/* Available Blockchains (for Cold wallet) */}
              {wallet.chains && (
                <div className="mb-4 pb-4 border-b border-purple-700/20">
                  <p className="text-gray-400 text-xs mb-2">Available blockchains</p>
                  <div className="flex gap-2 flex-wrap">
                    {wallet.chains.map((chain, j) => (
                      <span key={j} className="text-sm">
                        {chain}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Action Buttons */}
              <div className="flex gap-2">
                <button className="flex-1 py-2 px-3 bg-blue-500 hover:bg-blue-600 text-white text-sm font-medium rounded-lg transition-colors">
                  🔗 Connect a wallet
                </button>
                <button className="flex-1 py-2 px-3 bg-purple-700/30 hover:bg-purple-700/50 border border-purple-700/50 text-white text-sm font-medium rounded-lg transition-colors">
                  ➕ Create a new wallet
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
