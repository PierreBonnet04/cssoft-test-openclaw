'use client'

import React from 'react'
import Sidebar from '@/components/layout/Sidebar'
import Header from '@/components/layout/Header'
import FundingWalletDetail from '@/components/ui/FundingWalletDetail'
import FundingWalletHistory from '@/components/ui/FundingWalletHistory'

export default function FundingWallet() {
  return (
    <div className="flex h-screen bg-dark">
      <Sidebar activeRoute="wallets" />
      <div className="flex-1 overflow-auto">
        <Header title="Funding wallet" subtitle="Manage your funding wallet and transactions." />
        
        <main className="p-6 space-y-6">
          {/* Back Link */}
          <a href="/wallets" className="text-blue-400 hover:text-blue-300 text-sm font-medium">
            ← Go back to wallets
          </a>

          {/* Funding Wallet Detail */}
          <FundingWalletDetail />

          {/* Wallet History */}
          <FundingWalletHistory />
        </main>
      </div>
    </div>
  )
}
