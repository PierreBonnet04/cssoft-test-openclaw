'use client'

import React from 'react'
import Sidebar from '@/components/layout/Sidebar'
import Header from '@/components/layout/Header'
import FundingWalletCard from '@/components/ui/FundingWalletCard'
import WalletHistory from '@/components/ui/WalletHistory'

export default function FundingWallet() {
  return (
    <div className="flex h-screen bg-dark">
      <Sidebar activeRoute="wallets" />
      <div className="flex-1 overflow-auto">
        <Header title="Funding wallet" subtitle="Manage your funding wallet and transactions." />
        
        <main className="p-6 space-y-6">
          {/* Back Link */}
          <button className="text-blue-400 hover:text-blue-300 text-sm font-medium flex items-center gap-2">
            ← Go back to wallets
          </button>

          {/* Funding Wallet Card & Description */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <FundingWalletCard />
            
            <div className="bg-dark-card border border-purple-700/20 rounded-2xl p-6">
              <h3 className="text-lg font-bold text-white mb-4">Funding wallet</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-4">
                Dedicated wallet for investments, used to fund your activities on the platform.
              </p>
              
              <div className="space-y-3">
                <div>
                  <p className="text-gray-400 text-xs mb-2">Supported coins</p>
                  <div className="flex gap-1 flex-wrap">
                    {['◆', '●', '▤', '⊞', '✕', '≡', '⊕'].map((coin, i) => (
                      <span key={i} className="w-6 h-6 rounded bg-purple-700/30 flex items-center justify-center text-xs font-bold text-gray-300">
                        {coin}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-dark-card border border-purple-700/20 rounded-2xl p-6 flex flex-col gap-4">
              <div>
                <p className="text-gray-400 text-sm mb-2">Actions</p>
                <button className="w-full py-2 px-4 bg-blue-500 hover:bg-blue-600 text-white font-medium text-sm rounded-lg transition-colors mb-2">
                  Manual deposit
                </button>
                <button className="w-full py-2 px-4 border border-purple-700/50 text-gray-300 hover:bg-purple-700/20 font-medium text-sm rounded-lg transition-colors">
                  Request a transfer
                </button>
              </div>
            </div>
          </div>

          {/* History */}
          <WalletHistory />
        </main>
      </div>
    </div>
  )
}
